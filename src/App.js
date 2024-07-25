import logo from "./logo.svg";
import "./App.css";
import DashBoardComponent from "./components/pages/DashBoardComponent";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="container-fluid App">
      <Routes>
        <Route path="/" element={<DashBoardComponent />} />
      </Routes>
    </div>
  );
}

export default App;
