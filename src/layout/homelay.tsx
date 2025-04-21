import Header from "../components/header";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer";

const Homelay = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Homelay;
