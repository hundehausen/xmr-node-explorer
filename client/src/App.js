import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navigation from "./components/Navigation";
import AddNode from "./pages/AddNode";
import Nodes from "./pages/Nodes";

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/add" element={<AddNode />} />
          <Route path="/" element={<Nodes />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
