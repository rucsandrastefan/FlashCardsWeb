import { useNavigate } from "react-router-dom";
import { getBoardsForUser } from "../lib/database";
import { IconContext } from "react-icons";
import { AiOutlineEdit } from "react-icons/ai";

const UserBoards = ({ userId, setSelectedBoard, setShowEditModal }) => {
  const navigate = useNavigate();
  const [boards, loading, error] = getBoardsForUser(userId);

  return (
    <ul className="flex-grow p-2">
      <div className="overflow-auto max-h-[500px] scrollbar scrollbar-w-2 scrollbar-h-1 scrollbar-thumb-gray-200 scrollbar-thumb-rounded  scrollbar-track-[#8e94f2] p-1 ">
        {boards &&
          boards.map((board) => (
            <li
              key={board.id}
              className="hover:bg-[#babbff] rounded-xl p-6 flex  items-center"
              onClick={() => navigate(`/boards/${board.id}`)}
            >
              <div className="flex ">
                <p className="text-lg text-white font-semibold flex-grow">
                  {board.name}
                </p>
              </div>
              <button
                className="ml-auto justify-end"
                onClick={(event) => {
                  event.stopPropagation();
                  setSelectedBoard({
                    id: board.id,
                    data: board,
                  });
                  setShowEditModal(true);
                }}
              >
                <IconContext.Provider
                  value={{ color: "white", opacity: "50", size: "20" }}
                >
                  <AiOutlineEdit />
                </IconContext.Provider>
              </button>
            </li>
          ))}
      </div>
    </ul>
  );
};

export default UserBoards;
