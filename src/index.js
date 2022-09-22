import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./Navbar";
import MyGoals from "./MyGoals";
import Suggested from "./suggested";
import Search from "./search"
import "./styles/App.scss";


const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<MyGoals />} />
      <Route path="/suggested-workouts" element={<Suggested/>} />
      <Route path="/search-workouts" element={<Search/>} />
    </Routes>
  </BrowserRouter>
);
