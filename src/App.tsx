import Login from "./components/Login";
import { Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Home from "./components/Home";
import NavbarLayout from "./components/NavbarLayout";
import Bookmarked from "./components/Bookmarked";
import { useState } from "react";
import data from "../public/data.json";
function App() {
  const filteredData = data.filter((item) => item.isTrending === false);
  const [dataItems, setDataItems] = useState(filteredData);

  const toogleBkmark = (index: number) => {
    const updateItems = [...dataItems];
    updateItems[index].isBookmarked = !updateItems[index].isBookmarked;
    setDataItems(updateItems);
  };
  console.log(dataItems);

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<NavbarLayout />}>
        <Route path="/home" element={<Home toogleBkmark={toogleBkmark} />} />
        <Route path="/bookmark" element={<Bookmarked />} />
      </Route>
    </Routes>
  );
}

export default App;
