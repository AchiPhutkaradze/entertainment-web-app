import Login from "./components/Login";
import { Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/navbar" element={<NavBar />} />
        <Route path="/home/mn" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
