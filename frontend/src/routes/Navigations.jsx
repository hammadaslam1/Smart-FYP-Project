import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavigationCSS } from "../styles/NavigationCSS";
import Login from "../screens/Login";
import Register from "../screens/Register";
import { DASHBOARD, HOME, LOGIN } from "./Routes";
import Home from "../screens/Home";
import Appbar from "../components/navbars/Appbar";
import Footer from "../components/navbars/Footer";
import DashSidebar from "../components/sidebar/DashSidebar";
import Dashboard from "../screens/Dashboard";
const Navigations = () => {
  return (
    <div style={NavigationCSS.screen}>
      <BrowserRouter>
        {/* <Register/> */}
        <DashSidebar />
        <div style={{flex: 4, minHeight: '100vh'}}>
          <Appbar />
          <Routes>
            <Route exact path={HOME} element={<Home />} />
            <Route path={LOGIN} element={<Login />} />
            <Route path={DASHBOARD} element={<Dashboard />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default Navigations;
