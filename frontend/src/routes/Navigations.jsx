/* eslint-disable eqeqeq */
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavigationCSS } from "../styles/NavigationCSS";
import Login from "../screens/Login";
import { DASHBOARD, HOME } from "./Routes";
import Appbar from "../components/navbars/Appbar";
import DashSidebar from "../components/sidebar/DashSidebar";
import { useSelector } from "react-redux";
import StudentHome from "../screens/student/StudentHome";
import StudentDashboard from "../screens/student/StudentDashboard";
import SupervisorHome from "../screens/supervisor/SupervisorHome";
import SupervisorDashboard from "../screens/supervisor/SupervisorDashboard";
const Navigations = () => {
  const { currentUser } = useSelector((state) => state.user);
  // console.log(currentUser);
  return (
    <div style={NavigationCSS.screen}>
      <BrowserRouter>
        {/* <Register/> */}
        {/* {currentUser && <Login />} */}
        <div style={{ flex: 4, minHeight: "100vh" }}>
          {currentUser && <Appbar />}
          {currentUser && currentUser.role == "Student" && (
            <>
              {/* <Appbar /> */}
              <Routes>
                <Route exact path={HOME} element={<StudentHome />} />
                <Route path={DASHBOARD} element={<StudentDashboard />} />
              </Routes>
            </>
          )}
          {currentUser && currentUser.role == "Supervisor" && (
            <>
              {/* <Appbar /> */}
              <Routes>
                <Route exact path={HOME} element={<SupervisorHome />} />
                <Route path={DASHBOARD} element={<SupervisorDashboard />} />
              </Routes>
            </>
          )}
          {currentUser && currentUser.role == "Coordinator" && (
            <>
              {/* <Appbar /> */}
              <Routes>
                <Route exact path={HOME} element={<SupervisorHome />} />
                <Route path={DASHBOARD} element={<SupervisorDashboard />} />
              </Routes>
            </>
          )}
        </div>
      </BrowserRouter>
    </div>
  );
};

export default Navigations;
