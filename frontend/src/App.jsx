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
import LoginForm from "./components/forms/LoginForm";
import RegisterForm from "./components/forms/RegisterForm";
import Login from "./screens/Login";
import { setStudent } from "./redux/studentReducer/studentSlice";
// import { setCoordinator } from "./redux/coordinatorReducer/coordinatorSlice";
// import HODDashboard from "./screens/hod/HODDashboard";

function App() {
  const currentUser = useSelector((state) => state.user.currentUser);
  // const student = useSelector((state) => state.student.student);
  const dispatch = useDispatch();
  const fetchStudent = () => {
    fetch(`http://127.0.0.1:3001/api/student/getstudent/${currentUser.id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        dispatch(setStudent(data));
      })
      .catch((error) => alert(error.message));
  };
  // const fetchCoordinator = () => {
  //   fetch(`http://127.0.0.1:3001/api/coordinator/getcoordinator/${currentUser.id}`)
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       dispatch(setCoordinator(data));
  //     })
  //     .catch((error) => alert(error.message));
  // };
  if (currentUser) {
    console.log("jugaar", currentUser);
  }
  // useEffect(() => {
  if (currentUser && currentUser.role == "Student") {
    dispatch(toggleLink(studentLinks));
    fetchStudent();
  } else if (currentUser && currentUser.role == "Coordinator") {
    dispatch(toggleLink(coordinatorLinks));
  } else if (currentUser && currentUser.role == "Supervisor") {
    dispatch(toggleLink(supervisorLinks));
  } else if (currentUser && currentUser.role == "HOD") {
    dispatch(toggleLink(hodLinks));
  } else if (currentUser && currentUser.role == "Principal") {
    dispatch(toggleLink(principalLinks));
  }

  // }, []);
  return (
    // <IdeaApproval />
    // <AddWeeklyProgress />
    // <DocumentationSubmission />
    <Navigations />
    // <LoginForm/>
    // <RegisterForm/>
    // <Login/>
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
