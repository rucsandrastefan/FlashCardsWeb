import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import SearchBar from "./components/Searchbar";
import { AiOutlineEdit, AiOutlinePlus } from "react-icons/ai";
import { IconContext } from "react-icons";
import NewBoardModal from "./components/NewBoardModal";
import { getFirestore, collection } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { app } from "./lib/firebase";
import { useNavigate } from "react-router-dom";

const Boards = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [value, loading, error] = useCollection(
    collection(getFirestore(app), "boards"),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );
  useEffect(() => {
    if (value && !loading) {
      value.docs.map((doc) => console.log(doc.data()));
    }
  }, [value, loading]);
  const handleCreateBoard = (newBoardName) => {
    console.log(`New board created: ${newBoardName}`);
    // Add code here to create a new board with the given name
  };

  return (
    <div>
      <Navbar></Navbar>
      <SearchBar></SearchBar>
      <div className="grid grid-cols-2 gap-16 px-16 py-8 drop-shadow-md">
        <div className="bg-[#8e94f2] flex flex-col justify-between rounded-xl  ">
          <div className="flex justify-between items-center bg-white rounded-t-xl drop-shadow">
            <h1 className="font-bold text-xl p-4 px-8 text-[#babbff]">
              My flashcards
            </h1>{" "}
            <button
              className="bg-[#babbff] text-white rounded-xl py-2 px-4 mr-4  hover:bg-[#8e94f2] flex 
            items-center"
              onClick={() => setShowModal(true)}
            >
              <AiOutlinePlus />
              <p className="px-1">Create</p>
            </button>
            <NewBoardModal
              showModal={showModal}
              setShowModal={setShowModal}
              handleCreateBoard={handleCreateBoard}
            />
          </div>

          <ul className="flex flex-col space-y-4 p-1 flex-1 ">
            <div className="overflow-auto max-h-[500px] scrollbar scrollbar-w-2 scrollbar-h-1 scrollbar-thumb-gray-200 scrollbar-thumb-rounded  scrollbar-track-[#8e94f2] p-1 ">
              {value &&
                value.docs.map((doc) => (
                  <li
                    key={doc.id}
                    className="hover:bg-[#babbff] rounded-xl p-6 flex justify-between items-center"
                    onClick={() => navigate(`/boards/${doc.id}`)}
                  >
                    <div className="flex w-full">
                      <p className="text-lg text-white font-semibold flex-grow">
                        {doc.data().name}
                      </p>
                      <button className="ml-auto">
                        <IconContext.Provider
                          value={{ color: "white", opacity: "50", size: "20" }}
                        >
                          <AiOutlineEdit />
                        </IconContext.Provider>
                      </button>
                    </div>
                  </li>
                ))}
            </div>
          </ul>
        </div>
        <div className="bg-[#8e94f2] flex flex-col  rounded-xl">
          <div className="bg-white rounded-t-xl drop-shadow">
            <h1 className="font-bold text-xl p-4 px-8 text-[#babbff]">
              Saved flashcards
            </h1>
          </div>
          <ul className="flex flex-col space-y-4 p-1 flex-1">
            <div className="overflow-auto max-h-[500px] scrollbar scrollbar-w-2 scrollbar-h-1 scrollbar-thumb-gray-200 scrollbar-thumb-rounded  scrollbar-track-[#8e94f2] p-1 ">
             
              <li className="hover:bg-[#babbff] rounded-xl p-6 flex justify-between items-center">
                <div className="flex w-full">
                  <p className="text-lg text-white font-semibold flex-grow">
                    Korean for Beginners
                  </p>
                  <button className="ml-auto">
                    <IconContext.Provider
                      value={{ color: "white", opacity: "50", size: "20" }}
                    >
                      <AiOutlineEdit />
                    </IconContext.Provider>
                  </button>
                </div>
              </li>
              <li className="hover:bg-[#babbff] rounded-xl p-6 flex justify-between items-center">
                <div className="flex w-full">
                  <p className="text-lg text-white font-semibold flex-grow">
                    Famous Painters
                  </p>
                  <button className="ml-auto">
                    <IconContext.Provider
                      value={{ color: "white", opacity: "50", size: "20" }}
                    >
                      <AiOutlineEdit />
                    </IconContext.Provider>
                  </button>
                </div>
              </li>
              <li className="hover:bg-[#babbff] rounded-xl p-6 flex justify-between items-center">
                <div className="flex w-full">
                  <p className="text-lg text-white font-semibold flex-grow">
                    Korean Numbers
                  </p>
                  <button className="ml-auto">
                    <IconContext.Provider
                      value={{ color: "white", opacity: "50", size: "20" }}
                    >
                      <AiOutlineEdit />
                    </IconContext.Provider>
                  </button>
                </div>
              </li>
              <li className="hover:bg-[#babbff] rounded-xl p-6 flex justify-between items-center">
                <div className="flex w-full">
                  <p className="text-lg text-white font-semibold flex-grow">
                    Spanish Basic
                  </p>
                  <button className="ml-auto">
                    <IconContext.Provider
                      value={{ color: "white", opacity: "50", size: "20" }}
                    >
                      <AiOutlineEdit />
                    </IconContext.Provider>
                  </button>
                </div>
              </li>
              <li className="hover:bg-[#babbff] rounded-xl p-6 flex justify-between items-center">
                <div className="flex w-full">
                  <p className="text-lg text-white font-semibold flex-grow">
                    Geography
                  </p>
                  <button className="ml-auto">
                    <IconContext.Provider
                      value={{ color: "white", opacity: "50", size: "20" }}
                    >
                      <AiOutlineEdit />
                    </IconContext.Provider>
                  </button>
                </div>
              </li>
              <li className="hover:bg-[#babbff] rounded-xl p-6 flex justify-between items-center">
                <div className="flex w-full">
                  <p className="text-lg text-white font-semibold flex-grow">
                    Geography
                  </p>
                  <button className="ml-auto">
                    <IconContext.Provider
                      value={{ color: "white", opacity: "50", size: "20" }}
                    >
                      <AiOutlineEdit />
                    </IconContext.Provider>
                  </button>
                </div>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Boards;
