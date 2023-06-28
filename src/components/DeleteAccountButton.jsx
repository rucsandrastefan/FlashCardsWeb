import React, { useState } from "react";
import { auth } from "../lib/firebase";

const DeleteAccountButton = ({ onDeleteAccount }) => {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleDelete = () => {
    setShowConfirmation(true);
  };

  const handleCancel = () => {
    setShowConfirmation(false);
  };

  const handleConfirm = () => {
    const user = auth.currentUser;

    if (user) {
      user
        .delete()
        .then(() => {
          
          console.log("User account deleted");
          window.location.href = "/";
          
        })
        .catch((error) => {
          
          console.log("Error deleting user account:", error);

          
        });
    }
  };

  return (
    <>
      {showConfirmation ? (
        <div className="bg-white rounded-lg p-4 ">
          <p className="text-gray-800 mb-2">
            Are you sure you want to delete your account?
          </p>
          <div className="flex justify-center">
            <button
              className="px-4 py-1 bg-red-500 text-white rounded mr-2"
              onClick={handleConfirm}
            >
              Yes
            </button>

            <button
              className="px-4 py-1 border border-gray-500 rounded"
              onClick={handleCancel}
            >
              No
            </button>
          </div>
        </div>
      ) : (
        <button
          className="bg-red-500 text-white px-4 py-2 rounded"
          onClick={handleDelete}
        >
          Delete Account
        </button>
      )}
    </>
  );
};
export default DeleteAccountButton;
