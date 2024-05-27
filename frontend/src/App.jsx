/* eslint-disable no-unused-vars */
import "./App.css";
import AddWeeklyProgress from "./components/studentdashboardcomponents/AddWeeklyProgress";
import DocumentationSubmission from "./components/studentdashboardcomponents/DocumentationSubmission";

import Navigations from "./routes/Navigations";
import StudentDashboard from "./screens/student/StudentDashboard";
import WeeklyProgressEvaluation from "./screens/coordinator/WeeklyProgressEvaluation";
import ReportEvaluation from "./screens/coordinator/ReportEvaluation";
import AnnounceDocumentDate from "./screens/coordinator/AnnounceDocumentDate";
import IdeaApproval from "./screens/supervisor/IdeaApproval";
import DocumentEvaluation from "./screens/supervisor/DocumentEvaluation";

function App() {
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
  );
}

export default App;
