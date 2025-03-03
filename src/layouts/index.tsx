import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layouts = () => {
  return (
    <>
      <Navbar />
        <Outlet />
      <h2>Footer</h2>
    </>
  );
};

export default Layouts;
