import { Outlet, useNavigation } from "react-router";
import Header from "../Header";
import Loading from "../Loading";

function RootLayout() {
    const navigation = useNavigation();

    return (
        <>
            <Header />
            {navigation.state === "loading" ? <Loading /> : <Outlet />}
            <footer style={{ position: "fixed", bottom: "0px" }}>{new Date().toISOString()}</footer>

        </>
    );
}

export default RootLayout;