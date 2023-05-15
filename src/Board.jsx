import { useParams, Link } from "react-router-dom";
import { doc, collection, deleteDoc, updateDoc } from "firebase/firestore";
import { useDocument, useCollection } from "react-firebase-hooks/firestore";
import { app, db } from "./lib/firebase";
import Navbar from "./components/Navbar";
import SearchBar from "./components/Searchbar";
import { AiOutlineEdit, AiOutlinePlus } from "react-icons/ai";
import { BsFillPlayFill } from "react-icons/bs";
import { IconContext } from "react-icons";
import NewFlashcardModal from "./components/NewFlashcardModal";
import { useMemo, useState } from "react";
import EditFlashcardModal from "./components/EditFlashcardModal";

const Board = () => {
  const { boardId } = useParams();
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editFlashcard, setEditFlashcard] = useState();

  const handleUpdate = async (flashcard) => {
    const { id, ...data } = flashcard;
    const docRef = doc(db, "flashcards", id);

    await updateDoc(docRef, data);
    setShowEditModal(false);
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "flashcards", id));
    setShowEditModal(false);
  };

  //folosim useCollectionData -> query, where (stergem flashcards (useMemo) cum ai in flashcard)
  const [flashcardsValues, loadingFlashcards] = useCollection(
    collection(db, "flashcards"),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  const [value, loading] = useDocument(doc(db, "boards", boardId), {
    snapshotListenOptions: { includeMetadataChanges: true },
  });

  const flashcards = useMemo(
    () =>
      flashcardsValues?.docs
        .map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
        .filter((doc) => doc.boardId === boardId),
    [boardId, flashcardsValues]
  );

  if (loading) {
    return <p>Loading</p>;
  }

  return (
    <div>
      <Navbar></Navbar>
      <SearchBar></SearchBar>
      <div className=" px-16 py-8 drop-shadow-md">
        <div className="bg-[#8e94f2] flex flex-col justify-between rounded-xl  ">
          <div className="flex justify-between items-center bg-white rounded-t-xl drop-shadow">
            <h1 className="font-bold text-xl p-4 px-8 text-[#babbff]">
              {value?.data()?.name}
            </h1>{" "}
            <div className="flex flex-row">
              {" "}
              <Link
                to={flashcards.length ? `/boards/${boardId}/flashcards` : "#"}
                className="bg-[#8e94f2] text-white rounded-xl py-2 px-4 mr-4 hover:bg-[#babbff] flex items-center"
              >
                <BsFillPlayFill />
                <p className="px-3">Start</p>
              </Link>
              <button
                className="bg-[#babbff] text-white rounded-xl py-2 px-4 mr-4  hover:bg-[#8e94f2] flex 
        items-center"
                onClick={() => setShowModal(true)}
              >
                <AiOutlinePlus />
                <p className="px-1">Create</p>
              </button>
            </div>
            <NewFlashcardModal
              boardId={boardId}
              showModal={showModal}
              setShowModal={setShowModal}
            />
          </div>

          <ul className="flex flex-col space-y-4 p-1 flex-1 ">
            <div className="overflow-auto max-h-[500px] scrollbar scrollbar-w-2 scrollbar-h-1 scrollbar-thumb-gray-200 scrollbar-thumb-rounded  scrollbar-track-[#8e94f2] p-1 ">
              {flashcards &&
                flashcards.map((flashcard) => (
                  <li
                    key={flashcard.id}
                    className="hover:bg-[#babbff] rounded-xl p-6 flex justify-between items-center"
                  >
                    <div className="flex w-full">
                      <p className="text-lg text-white font-semibold flex-grow">
                        {flashcard?.question}
                      </p>

                      <button
                        className="ml-auto"
                        onClick={() => {
                          setEditFlashcard(flashcard);
                          setShowEditModal(true);
                        }}
                      >
                        <IconContext.Provider
                          value={{ color: "white", opacity: "50", size: "20" }}
                        >
                          <AiOutlineEdit />
                        </IconContext.Provider>
                      </button>
                    </div>
                  </li>
                ))}
              <EditFlashcardModal
                flashcard={editFlashcard}
                open={showEditModal}
                handleClose={() => setShowEditModal(false)}
                handleUpdate={(data) => handleUpdate(data)}
                handleDelete={(id) => handleDelete(id)}
              />
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Board;
