import React, { useEffect, useState } from "react";
import Modal from "react-modal";

const EditFlashcardModal = ({
  flashcard,
  open,
  handleClose,
  handleDelete,
  handleUpdate,
}) => {
  const [question, setQuestion] = useState(flashcard?.question);
  const [answer, setAnswer] = useState(flashcard?.answer);

  const onUpdate = () => {
    handleUpdate({
      id: flashcard.id,
      question,
      answer,
    });
  };

  const onDelete = () => {
    handleDelete(flashcard.id);
  };

  useEffect(() => {
    if (flashcard) {
      setQuestion(flashcard.question);
      setAnswer(flashcard.answer);
    }
  }, [flashcard]);

  return (
    <Modal
      isOpen={open}
      className="fixed inset-0 flex items-center justify-center drop-shadow"
    >
      <div className="w-3/4 h-500 bg-white rounded-xl p-8 flex flex-col items-center justify-center">
        <div className="w-full">
          <label
            htmlFor="new-board-name"
            className="flex text-[#8e94f2] font-bold text-xl justify-center "

          >
            Question:
          </label>
          <input
            id="new-board-name"
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="flex justify-center border-2 border-gray-300 rounded-md py-2 px-3 mt-4 mb-6 w-full focus:outline-none"
          />
        </div>
        <div  className="w-full">
          <label
            htmlFor="new-board-name"
            className="flex justify-center text-[#8e94f2] font-bold text-xl "
          >
            Answer:
          </label>
          <input
            id="new-board-name"
            type="text"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className="flex justify-center border-2 border-gray-300 rounded-md py-2 px-3 mt-4 mb-6 w-full focus:outline-none"
          />
        </div>
        <div className="flex justify-center space-x-8 mt-4">
          <button
            type="submit"
            className="bg-[#babbff] text-white rounded-xl py-2 px-4 hover:bg-[#8e94f2]"
            onClick={() => onDelete()}
          >
            Delete
          </button>

          <button
            type="submit"
            className="bg-[#babbff] text-white rounded-xl py-2 px-4 hover:bg-[#8e94f2]"
            onClick={() => onUpdate()}
          >
            Save
          </button>
          <button
            type="button"
            onClick={() => handleClose()}
            className="bg-gray-200 text-gray-400 rounded-xl py-2 px-4 hover:bg-gray-300"
          >
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default EditFlashcardModal;
