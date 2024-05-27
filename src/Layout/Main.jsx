import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Navbar";
import Footer from "../Pages/Footer";


const Main = () => {
    return (
        <div>
           <Navbar></Navbar>
            <Outlet></Outlet>
            <div className="mt-10">
            <Footer></Footer>
            </div>
        </div>
    );
};

export default Main;