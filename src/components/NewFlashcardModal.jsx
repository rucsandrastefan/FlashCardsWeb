import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Modal from "react-modal";
import { auth, db } from "../lib/firebase";
import { addDoc, collection } from "firebase/firestore";

const NewFlashcardModal = ({
  boardId,
  showModal,
  setShowModal,
  handleCreateBoard,
}) => {
  const [user] = useAuthState(auth);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleCloseModal = () => {
    setShowModal(false);
    setQuestion("");
    setAnswer("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (question.trim() !== "" && answer.trim() !== "") {
      await addDoc(collection(db, "flashcards"), {
        userId: user.uid,
        boardId,
        question,
        answer,
        createdAt: Date.now(),
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
        className="w-3/4 h-500 bg-white rounded-xl p-8 flex flex-col items-center"
      >
        <label htmlFor="question" className="text-[#8e94f2] font-bold text-xl ">
          Question:
        </label>
        <input
          id="question"
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="flex border-2 border-gray-300 rounded-md py-2 px-3 mt-4 mb-6 w-full "
        />
        <label htmlFor="answer" className="text-[#8e94f2] font-bold text-xl ">
          Answer:
        </label>
        <input
          type="text"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          className="flex border-2 border-gray-300 rounded-md py-2 px-3 mt-4 mb-6 w-full "
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

export default NewFlashcardModal;
