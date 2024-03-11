import { BrowserRouter, Routes } from "react-router-dom";
import { NavigationCSS } from "../styles/NavigationCSS";
import Login from "../screens/Login";
import Register from "../screens/Register";
const Navigations = () => {
    return (
        <div style={NavigationCSS.screen}>
            <BrowserRouter>
                <Login />
                <Register/>
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
