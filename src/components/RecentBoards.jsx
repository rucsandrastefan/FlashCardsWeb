import React from "react";
import { useState, useEffect } from "react";
import { getBoardsForUser } from "../lib/database";

function RecentBoards({ userId }) {
  const [recentlyViewedBoards, setRecentlyViewedBoards] = useState([]);

  const [boards, loading, error] = getBoardsForUser(userId);

  useEffect(() => {
    if (!boards) return;

    const recent = localStorage.getItem("recent");

    if (!recent) return;

    const storedBoards = JSON.parse(recent);
    console.log(storedBoards);

    const recentBoards = storedBoards.map((b) => {
      const differenceInMilliseconds = Date.now() - new Date(b.date).getTime();
      let difference = differenceInMilliseconds / 1000;
      let ago = "seconds";
      if (difference > 60) {
        difference /= 60;
        ago = "minutes";
      }
      if (difference > 60) {
        difference /= 60;
        ago = "hours";
      }

      for (let board of boards) {
        if (board.id === b.id) {
          return {
            board: board,
            lastViewed: `${difference.toFixed(0)} ${ago} ago`,
          };
        }
      }
    });

    setRecentlyViewedBoards(recentBoards);
  }, [boards]);

  return (
    <div className="  ">
      {recentlyViewedBoards.length > 0 && (
        <div
          key={recentlyViewedBoards[0].board.id}
          className="flex items-center p-4 rounded-md shadow-md mb-1 bg-white hover:bg-[#e5e6e5]"
        >
          <div>
            <h3 className="text-base font-semibold mb-2 text-[#8e94f2]">
              {recentlyViewedBoards[0].board.name}
            </h3>
            <p className="text-sm text-[#babbff]">
              Last viewed: {recentlyViewedBoards[0].lastViewed}
            </p>
          </div>
        </div>
      )}
    </div>
  );
  
}

export default RecentBoards;
