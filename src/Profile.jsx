import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import { AiFillSetting } from "react-icons/ai";
import { IconContext } from "react-icons";

const ProfilePage = () => {
  const [username, setUsername] = useState("John Doe");
  const [email, setEmail] = useState("johndoe@gmail.com");

  const recentlyViewedBoards = [
    {
      id: 1,
      name: "Spanish Vocabulary",
    },
    {
      id: 2,
      name: "Chemistry Formulas",
    },
    {
      id: 3,
      name: "European History",
    },
  ];

  return (
    <div>
      <Navbar />

      <div className="flex pl-8 mt-8 justify-center">
        <div className="bg-[#8e94f2] rounded-lg shadow-lg p-4 w-3/5">
          <div className="flex justify-end ">
            <Link to={"/settings"}>
              <button className=" text-white ">
                <IconContext.Provider value={{ size: 22 }}>
                  <AiFillSetting />
                </IconContext.Provider>
              </button>
            </Link>
          </div>
          <div className="flex flex-col justify-center items-center align-center mb-4">
            <FaUserCircle className="h-16 w-16 text-white mb-2" />
            <div className="flex flex-col justify-center items-center">
              <p className="text-xl font-semibold text-white mb-2">John Doe</p>
              <p className="text-white text-sm">johndoe@example.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-lg mt-8 p-4">
        <h2 className="text-xl text-[#8e94f2] font-bold mb-4">
          Recently viewed boards
        </h2>
        {recentlyViewedBoards.map((board) => (
          <div
            key={board.id}
            className="flex items-center p-4 rounded-md shadow-md mb-1 bg-white hover:bg-[#e5e6e5]"
          >
            <div>
              <h3 className="text-base font-semibold mb-2 text-[#8e94f2]">
                {board.name}
              </h3>
              <p className=" text-sm text-[#babbff]">Last viewed: 2 days ago</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfilePage;
