import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import SearchBar from "./components/Searchbar";
import { AiOutlineEdit, AiOutlinePlus } from "react-icons/ai";
import { IconContext } from "react-icons";
import NewBoardModal from "./components/NewBoardModal";
import { useNavigate } from "react-router-dom";
import EditBoardNameModal from "./components/EditBoardNameModal";
import { deleteBoard, getBoardsForUser, updateBoard } from "./lib/database";
import { auth } from "./lib/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import UserBoards from "./components/UserBoards";

const Boards = () => {
  const [user] = useAuthState(auth);
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedBoard, setSelectedBoard] = useState(null);

  const handleCreateBoard = (newBoardName) => {
    console.log(`New board created: ${newBoardName}`);
  };
  const handleDeleteBoard = async (boardId) => {
    await deleteBoard(boardId);
    setShowEditModal(false);
    // Add code here to delete the board with the given ID
  };

  const handleUpdateBoard = async (board) => {
    const { id, ...data } = board;
    await updateBoard(id, data);
    setShowEditModal(false);
    // Add code here to update the board with the new name
  };

  return (
    <div>
      <Navbar></Navbar>
      <SearchBar></SearchBar>
      <div className="px-16 py-8 drop-shadow-md">
        <div className="bg-[#8e94f2] flex flex-col justify-between rounded-xl  ">
          <div className="flex justify-between items-center bg-white rounded-t-xl drop-shadow">
            <h1 className="font-bold text-xl p-4 px-8 text-[#babbff]">
              My boards
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

          {user && (
            <UserBoards
              userId={user.uid}
              setSelectedBoard={setSelectedBoard}
              setShowEditModal={setShowEditModal}
            />
          )}

          {selectedBoard && (
            <EditBoardNameModal
              id={selectedBoard.id}
              board={selectedBoard.data}
              open={showEditModal}
              handleClose={() => setShowEditModal(false)}
              handleUpdate={handleUpdateBoard}
              handleDelete={handleDeleteBoard}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Boards;
