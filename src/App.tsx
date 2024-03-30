import Login from "./components/Login";
import { Route, Routes } from "react-router-dom";
import Register from "./components/Register";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
