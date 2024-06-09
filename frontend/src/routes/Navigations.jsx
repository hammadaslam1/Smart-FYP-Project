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
  console.log(currentUser)
  return (
    <div style={NavigationCSS.screen}>
      <BrowserRouter>
        {/* <Register/> */}
        {/* {currentUser && <Login />} */}
        {/* <div style={{ flex: 4, minHeight: "100vh" }}> */}
        {/* { <Appbar />} */}

        {!currentUser?<Login/>:<>
          <Appbar />
          <Routes>
          {links.map((link, i) => (
            <Route exact path={link.to} element={link.components} />
          ))}
        </Routes>
        </>}





{/* 
        {currentUser && <Appbar />}
        <Routes>
          {links.map((link, i) => (
            <Route exact path={link.to} element={link.components} />
          ))}
        </Routes> */}
        {/* {currentUser && currentUser.role == "Student" && (
          <>
            <Routes>
              <Route exact path={HOME} element={<StudentHome />} />
              <Route path={DASHBOARD} element={<StudentDashboard />} />
            </Routes>
          </>
        )}
        {currentUser && currentUser.role == "Supervisor" && (
          <>
            <Routes>
              <Route exact path={HOME} element={<SupervisorHome />} />
              <Route path={DASHBOARD} element={<SupervisorDashboard />} />
            </Routes>
          </>
        )}
        {currentUser && currentUser.role == "Coordinator" && (
          <>
            <Routes>
              <Route exact path={HOME} element={<SupervisorHome />} />
              <Route path={DASHBOARD} element={<SupervisorDashboard />} />
            </Routes>
          </>
        )} */}
        {/* <IdeaApproval /> */}
        {/* <AddWeeklyProgress /> */}
        {/* <DocumentationSubmission /> */}
        {/* <Navigations /> */}
        {/* <StudentDashboard /> */}
        {/* <WeeklyProgressEvaluation /> */}
        {/* <ReportEvaluation /> */}
        {/* <AnnounceDocumentDate /> */}
        {/* <IdeaApproval /> */}
        {/* <DocumentEvaluation /> */}
        {/* <Routes>
          <Route path="/" element={<ReportEvaluationBySupervisor />} />
        </Routes> */}
        {/* </div> */}
      </BrowserRouter>
    </div>
  );
};

export default Navigations;
