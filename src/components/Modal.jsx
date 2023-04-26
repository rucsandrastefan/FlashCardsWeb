import React, { useState } from "react";

const Modal = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <div className="modal">
          <div className="modal-overlay" onClick={onClose}></div>
          <div className="modal-content"></div>
        </div>
      )}
    </>
  );
};

export default Modal;
