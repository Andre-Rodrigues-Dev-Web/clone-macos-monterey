import { Outlet } from "react-router-dom";
import { ThemeMacOS } from "../components/ThemeMacOS/style";
import MenuTop from "../components/MenuTop";

const Layout = () => {
    return (
        <ThemeMacOS>
            <MenuTop />
            <Outlet />
        </ThemeMacOS>
    );
};

export default Layout;
