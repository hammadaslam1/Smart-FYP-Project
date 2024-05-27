/* eslint-disable no-unused-vars */
import "./App.css";
import AddWeeklyProgress from "./components/studentdashboardcomponents/AddWeeklyProgress";
import DocumentationSubmission from "./components/studentdashboardcomponents/DocumentationSubmission";

import Navigations from "./routes/Navigations";
import StudentDashboard from "./screens/student/StudentDashboard";
import WeeklyProgressEvaluation from "./screens/coordinator/WeeklyProgressEvaluation";
import ReportEvaluation from "./screens/coordinator/ReportEvaluation";
import AnnounceDocumentDate from "./screens/coordinator/AnnounceDocumentDate";

function App() {
  return (
    <AnnounceDocumentDate />
    // <AddWeeklyProgress/>
  );
}

export default App;
