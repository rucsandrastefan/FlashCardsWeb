import React, { useEffect, useMemo, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import {
  collectionGroup,
  query,
  where,
  getDocs,
  collection,
} from "firebase/firestore";
import { db } from "../lib/firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { Autocomplete, MenuItem, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
function SearchBar() {
  const navigate = useNavigate();
  const [flashcards] = useCollectionData(query(collection(db, "flashcards")));
  const [searchQuery, setSearchQuery] = useState("");
  const [selected, setSelected] = useState(null);
  const options = useMemo(
    () =>
      (flashcards || []).filter(
        (flashcard) =>
          flashcard.question.startsWith(searchQuery) ||
          flashcard.answer.startsWith(searchQuery)
      ),
    [flashcards, searchQuery]
  );

  const handleSearch = async () => {
    try {
      // Perform the search searchQuery in Firestore
      const q = searchQuery(
        collectionGroup(db, "flashcards"),
        where("question", ">=", searchQuery),
        where("question", "<=", searchQuery + "\uf8ff")
      );
      const querySnapshot = await getDocs(q);

      // Update the search results state with the retrieved data
      const results = querySnapshot.docs.map((doc) => doc.data());
      setSearchResults(results);
    } catch (error) {
      console.error("Error searching in database:", error);
    }
  };

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setSearchQuery(inputValue);

    // Perform search when the searchQuery is not empty
    if (inputValue.length > 0) {
      handleSearch();
    } else {
      setSearchResults([]);
    }
  };

  useEffect(() => {
    if (selected) {
      navigate(`/boards/${selected.boardId}`);
    }
  }, [selected]);

  return (
    <div className="w-full flex justify-center pt-4">
      <div className="flex items-center bg-white rounded-full px-2">
        <Autocomplete
          value={selected}
          onChange={(event, newValue) => {
            setSelected(newValue);
          }}
          inputValue={searchQuery}
          onInputChange={(event, newInputValue) => {
            setSearchQuery(newInputValue);
          }}
          id="controllable-states-demo"
          options={options}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField
              {...params}
              InputLabelProps={{
                shrink: searchQuery.length > 0,
                style: {
                  color: selected ? "gray" : "inherit",
                },
              }}
              sx={{
                boxShadow: "none",
                ".MuiOutlinedInput-notchedOutline": {
                  border: 0,
                  "& :focus": { border: 0 },
                },
                "& fieldset": {
                  display: "none",
                },
              }}
              label="Search"
            />
          )}
          getOptionLabel={(option) => option.question}
          renderOption={(props, option) => (
            <MenuItem
              {...props}
              className={`${props?.className} flex flex-col`}
              style={{ whiteSpace: "normal" }} // Allow text to wrap
            >
              <span className="text-sm self-start break-words">
                Q: {option.question}
              </span>
              <span className="text-sm text-gray-500 self-start break-words">
                A: {option.answer}
              </span>
            </MenuItem>
          )}
        />
      </div>
    </div>
  );
}

export default SearchBar;
