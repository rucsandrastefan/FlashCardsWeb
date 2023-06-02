import Register from "./Register";
import About from "./About";
import Contact from "./Contact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home.jsx";
import Login from "./Login";
import MainPage from "./MainPage";
import Profile from "./Profile";
import Boards from "./Boards";
import SavedCards from "./SavedCards";
import Settings from "./Settings";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./lib/firebase";
import Board from "./Board";
import Flashcard from "./Flashcard";
import HistoryComponent from "./components/HistoryComponent";
import ArtComponent from "./components/ArtComponent";
import MathComponent from "./components/MathComponent";
import MoviesComponent from "./components/MoviesComponent";
import LiteratureComponent from "./components/LiteratureComponent";
import MedComponent from "./components/MedComponent";
import Category from "./Category";
import Discover from "./components/Discover";

function App() {
  const [user] = useAuthState(auth);

  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route exact path="/mainpage" element={<MainPage />}></Route>
          <Route exact path="/profile" element={<Profile />}></Route>
          <Route exact path="/boards" element={<Boards />}></Route>
          <Route exact path="/boards/:boardId" element={<Board />}></Route>
          <Route exact path="/flashcards/:category" element={<Category />} />
          <Route exact path="/saved" element={<SavedCards />}></Route>
          <Route exact path="/settings" element={<Settings />}></Route>
          <Route
            exact
            path="/boards/:boardId/flashcards"
            element={<Flashcard />}
          />
          <Route
            exact
            path="/historycomponent"
            element={<HistoryComponent />}
          ></Route>
          <Route exact path="/artcomponent" element={<ArtComponent />}></Route>
          <Route
            exact
            path="/mathcomponent"
            element={<MathComponent />}
          ></Route>
          <Route
            exact
            path="/moviescomponent"
            element={<MoviesComponent />}
          ></Route>
          <Route
            exact
            path="/literaturecomponent"
            element={<LiteratureComponent />}
          ></Route>
          <Route exact path="/medcomponent" element={<MedComponent />}></Route>
          <Route exact path="/discover" element={<Discover />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
