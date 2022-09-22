import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar-wrapper">
      <div className="title">
        <Link to="/"><h2>FITNESS GOALS</h2></Link>
      </div>
    </div>
  );
}