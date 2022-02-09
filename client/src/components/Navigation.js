import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="border-2">
      <ul className="mx-auto flex flex-row justify-center">
        <li className="mx-4 my-2">
          <Link to="/">Nodes</Link>
        </li>
        <li className="mx-4 my-2">
          <Link to="/add">Add Node</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;