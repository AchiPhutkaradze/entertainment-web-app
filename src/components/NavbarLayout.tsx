import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
export default function NavbarLayout(props: {
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <>
      <NavBar setInputValue={props.setInputValue} />
      <Outlet />
    </>
  );
}
