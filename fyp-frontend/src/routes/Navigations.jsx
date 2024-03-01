import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HOME } from "./Routes";
import Home from "../screens/Home";
import Appbar from "../components/navbars/Appbar";
import Footer from "../components/navbars/Footer";
import { NavigationCSS } from "../styles/NavigationCSS";
import Login from "../screens/Login";
const Navigations = () => {
    return (
        <div style={NavigationCSS.screen}>
            <BrowserRouter>
            <Login/>
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
