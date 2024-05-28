/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
import "./App.css";
import AddWeeklyProgress from "./screens/student/AddWeeklyProgress";
import DocumentationSubmission from "./screens/student/DocumentationSubmission";

import Navigations from "./routes/Navigations";
import StudentDashboard from "./screens/student/StudentDashboard";
import WeeklyProgressEvaluation from "./screens/coordinator/WeeklyProgressEvaluation";
import ReportEvaluation from "./screens/coordinator/ReportEvaluation";
import AnnounceDocumentDate from "./screens/coordinator/AnnounceDocumentDate";
import IdeaApproval from "./screens/supervisor/IdeaApproval";
import DocumentEvaluation from "./screens/supervisor/DocumentEvaluation";
import CoordinatorDashboard from "./screens/coordinator/CoordinatorDashboard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { toggleLink } from "./redux/links/LinkReducer";
import {
  coordinatorLinks,
  hodLinks,
  principalLinks,
  studentLinks,
  supervisorLinks,
} from "./data/Links";
// import HODDashboard from "./screens/hod/HODDashboard";

function App() {
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  if(currentUser)
    {
      console.log("jugaar",currentUser);

    }
  // useEffect(() => {
  if (currentUser && currentUser.role == "Student") {
    dispatch(toggleLink(studentLinks));
  } else if (currentUser && currentUser.role == "Coordinator") {
    dispatch(toggleLink(coordinatorLinks));
  } else if (currentUser && currentUser.role == "Supervisor") {
    dispatch(toggleLink(supervisorLinks));
  } else if (currentUser && currentUser.role == "HOD") {
    dispatch(toggleLink(hodLinks));
  } else if (currentUser && currentUser.role == "Principal") {
    dispatch(toggleLink(principalLinks));
  } else {
    dispatch(toggleLink(studentLinks));
  }
  // }, []);
  return (
    // <IdeaApproval />
    // <AddWeeklyProgress />
    // <DocumentationSubmission />
    <Navigations />
    // <StudentDashboard />
    // <WeeklyProgressEvaluation />
    // <ReportEvaluation />
    // <AnnounceDocumentDate />
    // <IdeaApproval />
    // <DocumentEvaluation />
    // <CoordinatorDashboard/>
    // <HODDashboard/>
  );
}

export default App;
