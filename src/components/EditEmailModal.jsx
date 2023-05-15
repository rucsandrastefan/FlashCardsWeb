import { useState } from "react";

function EditEmailModal(props) {
  const [email, setNewEmail] = useState(props.name);
 
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleEmailChange = (event) => {
    setNewEmail(event.target.value);
  };

  const handleSaveChanges = () => {
    props.onSaveChanges(email);
    setShowSuccessMessage(true);
    props.onCloseModal();
  };

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
          <div>
            <div className="mt-2 text-center  sm:mt-5 ">
              <h3 className="text-lg leading-6 font-medium text-gray-900 pb-2">Edit E-mail</h3>
              <div className="mt-2 p-2">
                <input
                  type="text"
                  value={email}
                  onChange={handleEmailChange}
                  className=" border-2 border-gray-200 block w-full p-2 sm:text-sm  rounded-md"
                  
                />
              </div>
            </div>
          </div>
          <div className="mt-5 sm:mt-6 mx-20">
            <button
              type="button"
              className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-[#babbff] text-base font-medium text-white sm:text-sm"
              onClick={handleSaveChanges}
            >
              Save changes
            </button>
           
          </div>
        </div>
      </div>
      {showSuccessMessage && (
        <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4" role="alert">
          <p className="font-bold">Changes saved successfully</p>
        </div>
      )}
    </div>
  );
}
export default EditEmailModal;
