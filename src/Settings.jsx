import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { AiOutlineEdit } from "react-icons/ai";
import { IconContext } from "react-icons";
import SentModal from "./components/SentModal";
import { BsSend } from "react-icons/bs";
import EditNameModal from "./components/EditNameModal";
import EditEmailModal from "./components/EditEmailModal";
import DeleteAccountButton from "./components/DeleteAccountButton";
import LogOutButton from "./components/LogOutButton";

const Settings = () => {
  const [showModal, setShowModal] = useState(false);

  const handleSendMessage = (e) => {
    e.preventDefault();
    setShowModal(true);
  };
  const [name, setName] = useState("John Doe");
  const [email, setNewEmail] = useState("johndoe@gmail.com");
  const [isEditingName, setIsEditingName] = useState(false);
  const [isEditingEmail, setIsEditingEmail] = useState(false);

  const handleEditName = () => {
    setIsEditingName(true);
  };

  const handleSaveNameChanges = (newName) => {
    setName(newName);
    alert("Changes saved");
    handleCloseModal();
  };

  const handleCloseModal = () => {
    setIsEditingName(false);
  };

  const handleEditEmail = () => {
    setIsEditingEmail(true);
  };

  const handleSaveEmailChanges = (newEmail) => {
    setNewEmail(newEmail);
    alert("Changes saved");
    handleCloseModal2();
  };
  const handleCloseModal2 = () => {
    setIsEditingEmail(false);
  };

  return (
    <div>
      {" "}
      <Navbar />
      <div className="bg-gray-200 flex flex-row  p-8">
        <div className="flex-1  overflow-y-auto"></div>
        <div className="bg-white rounded-xl p-8 w-4/6">
          <h1 className="font-bold text-xl mb-8 text-[#babbff] text-left">
            Settings
          </h1>
          <form className="bg-white rounded-xl p-8 flex flex-col">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="email"
            >
              Name
            </label>
            <div className="relative mb-4">
              <div class="relative rounded-md border-2 border-gray-200 py-2 px-2">
                <span class="ml-3 text-gray-500 ">{name}</span>
              </div>
              <button
                className="absolute right-0 top-0 bottom-0 w-10 h-full  rounded-r-md border-gray-200"
                type="button"
                onClick={handleEditName}
              >
                <IconContext.Provider value={{ color: "gray", size: "20" }}>
                  <AiOutlineEdit />
                </IconContext.Provider>
              </button>
            </div>
            {isEditingName && (
              <EditNameModal
                currentName={name}
                onSaveChanges={handleSaveNameChanges}
                onCloseModal={handleCloseModal}
              />
            )}
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>

              <div className="relative mb-4">
                <div class="relative rounded-md border-2 border-gray-200 py-2 px-2">
                  <span class="ml-3 text-gray-500 ">{email}</span>
                </div>
                <button
                  className="absolute right-0 top-0 bottom-0 w-10 h-full  rounded-r-md border-gray-200"
                  type="button"
                  onClick={handleEditEmail}
                >
                  <IconContext.Provider value={{ color: "gray", size: "20" }}>
                    <AiOutlineEdit />
                  </IconContext.Provider>
                </button>
              </div>
              {isEditingEmail && (
                <EditEmailModal
                  currentEmail={email}
                  onSaveChanges={handleSaveEmailChanges}
                  onCloseModal={handleCloseModal2}
                />
              )}
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <div className="relative mb-4">
                {" "}
                <div class="relative rounded-md border-2 border-gray-200 py-2 px-2">
                  <span class="ml-3 text-gray-500 ">*******</span>
                </div>
              </div>
            </div>
          </form>
          <h2 className="font-bold text-lg mb-4">Support</h2>
          <p className="text-gray-600 mb-4">
            If you need help or have any questions, please email us at
            support@memo.com or send us a message and we will try to get back as
            soon as possible.
          </p>
          <div className="flex-1 mb-4">
            <label
              className="block text-gray-700 font-semibold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="border-2 border-gray-200 rounded-md py-2 px-3 w-full h-26 flex-grow"
              id="message"
              placeholder="Type your message here..."
            />
            <div className="flex justify-end p-4">
              <button
                className="bg-[#babbff] text-white rounded-xl py-2 px-4 hover:bg-[#8e94f2] mb-4 justify-end"
                type="submit"
                onClick={handleSendMessage}
              >
                Send Message
              </button>
            </div>
          </div>
          <div className="max-w-screen-lg mx-auto py-4 px-6 flex justify-center">
            <DeleteAccountButton className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
              Delete Account
            </DeleteAccountButton>
          </div>
          <div className="flex justify-end">
            <LogOutButton />
          </div>
        </div>

        <div className="flex-1"></div>
      </div>
      <SentModal></SentModal>
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
          <div className="relative w-auto max-w-3xl mx-auto my-6">
            <div className="relative flex flex-col w-full bg-[#babbff] border-0 rounded-lg shadow-lg outline-none focus:outline-none">
              <div className="flex items-start justify-between p-5 border-b border-solid border-white rounded-t">
                <h3 className="text-2xl font-semibold text-white">
                  Message Sent
                </h3>
                <button
                  className="p-1 ml-auto bg-transparent color-white border-0 text-white float-right text-3xl font-semibold mt-2"
                  onClick={() => setShowModal(false)}
                  style={{ marginTop: "-10px" }}
                >
                  <div className=" text-white h-6 w-6 text-2xl ">×</div>
                </button>
              </div>
              <div className="relative  p-8 flex-auto justify-center align-middle text-center">
                <div className="flex justify-center">
                  {" "}
                  <IconContext.Provider value={{ size: 30, color: "white" }}>
                    <BsSend />
                  </IconContext.Provider>
                </div>
                <div>
                  {" "}
                  <p className="mt-4 text-white text-lg leading-relaxed">
                    Your message has been sent successfully.
                  </p>
                  <p className=" text-white text-lg leading-relaxed">
                    We'll get back as soon as possible !
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Settings;
