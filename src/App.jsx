import Register from "./Register";
import About from "./About";
import Contact from "./Contact";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  
} from "react-router-dom";
import Home from "./Home.jsx";
import Login from "./Login";
import MainPage from "./MainPage";
import Profile from "./Profile";
import Boards from "./Boards";
import SavedCards from "./SavedCards";



function App() {
  return (
    <div>

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/mainpage" element={<MainPage/>}></Route>
          <Route path="/profile" element={<Profile/>}></Route>
          <Route path="/boards" element={<Boards/>}></Route>
          <Route path="/saved" element={<SavedCards/>}></Route>
          
          
        </Routes>
      </Router>
    </div>

   

  );
}


export default App;
