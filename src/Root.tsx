import { Outlet } from "react-router-dom";
import Navbar from "./utils/Navbar";
import Footer from "./utils/Footer";

function Root() {
  return (
    <>
      <div className=" w-full  ">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default Root;
