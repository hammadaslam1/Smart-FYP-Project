import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavigationCSS } from "../styles/NavigationCSS";
import Login from "../screens/Login";
import Register from "../screens/Register";
import { HOME, LOGIN } from "./Routes";
import Home from "../screens/Home";
const Navigations = () => {
  return (
    <div style={NavigationCSS.screen}>
      <BrowserRouter>
        {/* <Register/> */}
        {/* <Appbar /> */}
        <Routes>
          <Route exact path={HOME} element={<Home />} />
          <Route path={LOGIN} element={<Login />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
};

export default Navigations;
