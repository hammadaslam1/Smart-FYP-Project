import { BrowserRouter, Routes } from "react-router-dom";
import { NavigationCSS } from "../styles/NavigationCSS";
import Login from "../screens/Login";
const Navigations = () => {
    return (
        <div style={NavigationCSS.screen}>
            <BrowserRouter>
                <Login />
                {/* <Appbar /> */}
                <Routes>
                    {/* <Route exact path={HOME} element={<Home />} /> */}
                </Routes>
                {/* <Footer /> */}
            </BrowserRouter>
        </div>
    );
};

export default Navigations;
