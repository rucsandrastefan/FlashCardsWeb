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
  /*
  Certainly! The provided code snippet shows a `handleSearch` function that performs a search operation in a Firestore database. Here's a breakdown of the code:

1. The `handleSearch` function is defined as an asynchronous function using the `async` keyword. This allows the function to use `await` when making asynchronous calls.

2. Inside the `try` block, the function constructs a Firestore query using the `searchQuery` parameter. The query is performed on the "flashcards" collection using the `collectionGroup` function,
 which allows querying across multiple collections with the same name. The query filters documents based on the "question" field.

3. Two `where` clauses are used to specify the search criteria. The first `where` clause checks if the "question" field is greater than or equal to the `searchQuery`,
 while the second `where` clause checks if it is less than or equal to `searchQuery + "\uf8ff"`. The "\uf8ff" character is used as a placeholder to indicate an upper bound for the search query.

4. The constructed query is then executed using the `getDocs` function, which retrieves the documents that match the query from the Firestore database.

5. The retrieved query results are stored in the `querySnapshot` variable.

6. Next, the code maps over the `querySnapshot.docs` array, extracting the data of each document using the `data()` method. The extracted data is then stored in the `results` array.

7. Finally, the `setSearchResults` function is called to update the search results state with the retrieved data.

8. In case of any errors during the search operation, the `catch` block will be executed, and the error will be logged to the console.

Overall, this code performs a search operation in Firestore, retrieves the matching documents, and updates the search results state with the retrieved data.
  */

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
