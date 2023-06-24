import { FaUserCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import { AiFillSetting } from "react-icons/ai";
import { IconContext } from "react-icons";
import { auth } from "./lib/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import RecentBoards from "./components/RecentBoards";



const Profile = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />

      <div className="flex items-center justify-center">
        <div className="flex pl-8 mt-16 justify-center flex-col items-center w-3/5">
          <div className="bg-[#8e94f2] rounded-lg shadow-lg p-4 w-full">
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
                <p className="text-xl font-semibold text-white mb-2">
                  {user?.displayName}
                </p>
                <p className="text-white text-sm">{user?.email}</p>
              </div>
            </div>
          </div>
          <div className="w-full mt-8 p-4">
            <h2 className="text-xl text-[#8e94f2] font-bold mb-4">
              Recently viewed
            </h2>
            {user && user.uid && <RecentBoards userId={user.uid} />}
          </div>
          <div className="flex bg-[#8e94f2] rounded-lg mt-8  hover:bg-[#babbff]">
            
            <button className="p-4"
             onClick={() => navigate("/boards")}>
              <h1 className="text-white">My boards</h1>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
