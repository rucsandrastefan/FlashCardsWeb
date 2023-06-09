import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { getFlashcardsForCategory } from "./lib/database";
//ii dinamic, pe orice category as merge imi displayuie ce am pe pagina asta.Pot sa copiez din flashcards designul si functiile de la next previous.

const Category = () => {
  const { category } = useParams();
  const [flashcards, loading, error] = getFlashcardsForCategory(category);
  const [shuffled, setShuffled] = useState([]);
  const [activeFlashcard, setActiveFlashcard] = useState();
  const [viewMode, setViewMode] = useState("question");

  const handlePrevious = () => {
    const idx = shuffled.findIndex(
      (flashcard) => flashcard.id === activeFlashcard.id
    );

    if (idx === 0) {
      setActiveFlashcard(shuffled[shuffled.length - 1]);
    } else {
      setActiveFlashcard(shuffled[idx - 1]);
    }
  };

  const handleNext = () => {
    const idx = shuffled.findIndex(
      (flashcard) => flashcard.id === activeFlashcard.id
    );

    if (idx === shuffled.length - 1) {
      setActiveFlashcard(shuffled[0]);
    } else {
      setActiveFlashcard(shuffled[idx + 1]);
    }
  };

  const toggleViewMode = () => {
    console.log("Toggle view mode");
    if (activeFlashcard && activeFlashcard.answer) {
      setViewMode((prev) => (prev === "question" ? "answer" : "question"));
    }
  };

  useEffect(() => {
    if (!!flashcards?.length) {
      const shuffledCards = flashcards.sort(() => Math.random() - 0.5);
      setActiveFlashcard(shuffledCards[0]);
      setShuffled(shuffledCards);
    }
  }, [flashcards, shuffled]);

  useEffect(() => {
    if (viewMode === "answer") {
      setViewMode("question");
    }
  }, [activeFlashcard]);

  if (loading) {
    return <p>Loading</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!flashcards.length) {
    return <p>No flashcards found.</p>;
  }

  return (
    <div>
      <Navbar></Navbar>

      <div className="flex mt-20 justify-center h-screen bg-[#e5e6e5]">
        <div className="relative w-2/5 h-3/5 rounded-md bg-white shadow-md p-6 flex flex-col justify-center items-center">
          <div className="absolute top-0 left-0 w-full h-full  rotate-2 bg-[#8e94f2] opacity-60 rounded-md"></div>

          <div
            className="flip-card w-full h-full relative"
            style={{
              transition: "transform 0.5s ease",
              transformStyle: "preserve-3d",
              transform: viewMode === "answer" ? "rotateY(180deg)" : "",
            }}
          >
            <div className="flip-card-inner absolute w-full h-full transition duration-500">
              {viewMode === "question" && (
                <button
                  className="flip-card-front w-full h-full bg-white rounded-md flex justify-center items-center"
                  onClick={() => {
                    console.log("question clicked");
                    toggleViewMode();
                  }}
                >
                  <h1 className="text-2xl font-bold mb-4 p-4">
                    {activeFlashcard?.question}
                  </h1>
                </button>
              )}
              {viewMode === "answer" && (
                <button
                  className="flip-card-back w-full h-full bg-white rounded-md flex justify-center items-center"
                  onClick={() => {
                    console.log("answer clicked");
                    toggleViewMode();
                  }}
                >
                  <p
                    className="text-lg p-4"
                    style={{
                      direction: "ltr",
                      transform: "rotateY(180deg)",
                    }}
                  >
                    {activeFlashcard?.answer}
                  </p>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        {" "}
        <div className="flex items-center justify-between absolute bottom-12 space-x-8">
          <div className="bg-white p-4 rounded-xl">
            <button
              className="flex items-center text-[#8e94f2] hover:text-[#babbff]"
              onClick={() => handlePrevious()}
            >
              <IoIosArrowBack className="mr-1" />
            </button>
          </div>
          <div className="bg-white p-4 rounded-xl">
            {" "}
            <button
              className="flex items-center text-[#8e94f2] hover:text-[#babbff]"
              onClick={() => handleNext()}
            >
              <IoIosArrowForward className="ml-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
