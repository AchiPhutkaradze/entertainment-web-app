import Login from "./components/Login";
import { Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Home from "./components/Home";
import NavbarLayout from "./components/NavbarLayout";
import Bookmarked from "./components/Bookmarked";
import Movies from "./components/Movies";
import Series from "./components/Series";
import { useState } from "react";
function App() {
  const [inputValue, setInputValue] = useState<string>("");
  console.log(inputValue);
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<NavbarLayout setInputValue={setInputValue} />}>
        <Route path="/home" element={<Home inputValue={inputValue} />} />
        <Route path="/bookmark" element={<Bookmarked />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/series" element={<Series />} />
      </Route>
    </Routes>
  );
}

export default App;
