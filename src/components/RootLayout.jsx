import { Outlet } from "react-router";
import Header from "./Header";

function RootLayout() {
    return (
        <>
            <Header />

            <Outlet />

            <footer style={{ position: "fixed", bottom: "0px" }}>{new Date().toISOString()}</footer>

        </>
    );
}

export default RootLayout;