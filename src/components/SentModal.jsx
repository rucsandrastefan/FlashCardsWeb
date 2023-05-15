import React from "react";

const SentModal = ({ showModal, setShowModal }) => {
  return (
    <div
      className={`fixed z-50 inset-0 overflow-y-auto ${
        showModal ? "block" : "hidden"
      }`}
    >
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="font-bold text-lg mb-4">Message Sent!</h2>
          <p>Your message has been sent successfully.</p>
          <button
            className="bg-[#babbff] text-white rounded-xl py-2 px-4 hover:bg-[#8e94f2] mt-4"
            onClick={() => setShowModal(false)}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default SentModal;