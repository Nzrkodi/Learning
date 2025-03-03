import { Outlet } from "react-router-dom";

const Layouts = () => {
  return (
    <>
      <h1>Header</h1>
        <Outlet />
      <h2>Footer</h2>
    </>
  );
};

export default Layouts;
