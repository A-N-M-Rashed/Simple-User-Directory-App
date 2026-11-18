import { Outlet } from "react-router";
import Navbar from "../pages/Navbar";

const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    )
}

export default MainLayout;