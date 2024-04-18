import Login from "./components/Login";
import { Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Home from "./components/Home";
import NavbarLayout from "./components/NavbarLayout";
import Bookmarked from "./components/Bookmarked";
import Movies from "./components/Movies";
import Series from "./components/Series";
import { useEffect, useState } from "react";
function App() {
  const [inputValue, setInputValue] = useState<string>("");
  console.log(inputValue);
  const [resolution, setResolution] = useState<number>(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setResolution(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  console.log(resolution);
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<NavbarLayout setInputValue={setInputValue} />}>
        <Route
          path="/home"
          element={<Home inputValue={inputValue} resolution={resolution} />}
        />
        <Route
          path="/bookmark"
          element={<Bookmarked inputValue={inputValue} />}
        />
        <Route path="/movies" element={<Movies inputValue={inputValue} />} />
        <Route path="/series" element={<Series inputValue={inputValue} />} />
      </Route>
    </Routes>
  );
}

export default App;
