import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Modal from "react-modal";
import { auth, db } from "../lib/firebase";
import { addDoc, collection } from "firebase/firestore";

const NewBoardModal = ({ showModal, setShowModal, handleCreateBoard }) => {
  const [user] = useAuthState(auth);
  const [newBoardName, setNewBoardName] = useState("");

  const handleCloseModal = () => {
    setShowModal(false);
    setNewBoardName("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newBoardName.trim() !== "") {
      await addDoc(collection(db, "boards"), {
        userId: user.uid,
        name: newBoardName,
      });
      handleCloseModal();
    }
  };

  return (
    <Modal
      isOpen={showModal}
      className="fixed inset-0 flex items-center justify-center drop-shadow"
    >
      <form
        onSubmit={handleSubmit}
        className="w-2/4 h-500 bg-white rounded-xl p-8 flex flex-col items-center"
      >
        <label
          htmlFor="new-board-name"
          className="text-[#8e94f2] font-bold text-xl "
        >
          Board name:
        </label>
        <input
          id="new-board-name"
          type="text"
          value={newBoardName}
          onChange={(e) => setNewBoardName(e.target.value)}
          className="border-2 border-gray-300 rounded-md py-2 px-3 mt-4 mb-6 w-3/4 "
        />
        <div className="flex justify-center space-x-4">
          <button
            type="submit"
            className="bg-[#babbff] text-white rounded-xl py-2 px-4 hover:bg-[#8e94f2]"
          >
            Create
          </button>
          <button
            type="button"
            onClick={handleCloseModal}
            className="bg-gray-200 text-gray-400 rounded-xl py-2 px-4 hover:bg-gray-300"
          >
            Cancel
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default NewBoardModal;
