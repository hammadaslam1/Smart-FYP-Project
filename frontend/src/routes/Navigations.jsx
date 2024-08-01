/* eslint-disable no-unused-vars */
/* eslint-disable eqeqeq */
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavigationCSS } from "../styles/NavigationCSS";
import Login from "../../src/screens/Login";

import { DASHBOARD, HOME } from "./Routes";
import Appbar from "../components/navbars/Appbar";
import DashSidebar from "../components/sidebar/DashSidebar";
import { useSelector } from "react-redux";
import StudentHome from "../screens/student/StudentHome";
import StudentDashboard from "../screens/student/StudentDashboard";
import SupervisorHome from "../screens/supervisor/SupervisorHome";
import SupervisorDashboard from "../screens/supervisor/SupervisorDashboard";
import DocumentEvaluation from "../screens/supervisor/DocumentEvaluation";
import ReportEvaluationBySupervisor from "../screens/supervisor/ReportEvaluationBySupervisor";
const Navigations = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const { links } = useSelector((state) => state.links);
  // console.log(currentUser);
  console.log(currentUser);
  return (
    <div style={NavigationCSS.screen}>
      <BrowserRouter>
        {!currentUser ? (
          <Login />
        ) : (
          <>
            <Appbar />
            <Routes>
              {links.map((link, i) => (
                <Route exact path={link.to} element={link.components} />
              ))}
            </Routes>
          </>
        )}
      </BrowserRouter>
    </div>
  );
};

export default Navigations;
