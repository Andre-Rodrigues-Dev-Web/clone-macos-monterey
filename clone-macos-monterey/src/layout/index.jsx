import { Outlet } from "react-router-dom";
import { ThemeMacOS } from "../components/ThemeMacOS/style";

const Layout = () => {
    return (
        <ThemeMacOS>
            <Outlet />
        </ThemeMacOS>
    )
}

export default Layout;