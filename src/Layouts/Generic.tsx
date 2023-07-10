import { Outlet } from "react-router-dom";
import Nav from "./Nav";

function Generic() {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
}

export default Generic;
