import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HOME } from "./Routes";
import Home from "../screens/Home";
import Appbar from "../components/navbars/Appbar";
import Footer from "../components/navbars/Footer";
import { NavigationCSS } from "../styles/NavigationCSS";
const Navigations = () => {
    return (
        <div style={NavigationCSS.screen}>
            <BrowserRouter>
            <Appbar />
            <Routes>
                <Route exact path={HOME} element={<Home />} />
            </Routes>
            <Footer />
        </BrowserRouter>
        </div>
    );
};

export default Navigations;
