import "./App.css";
import AddWeeklyProgress from "./components/studentdashboardcomponents/AddWeeklyProgress";
import DocumentationSubmission from "./components/studentdashboardcomponents/DocumentationSubmission";

import Navigations from "./routes/Navigations";
import StudentDashboard from "./screens/student/StudentDashboard";
import WeeklyProgressEvaluation from "./screens/supervisor/WeeklyProgressEvaluation";

function App() {
    return (
    <WeeklyProgressEvaluation />
    // <AddWeeklyProgress/>
);
}

export default App;
