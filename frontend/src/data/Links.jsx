import HODDashboard from "../screens/HOD/HODDashboard";
import AnnounceDocumentDate from "../screens/coordinator/AnnounceDocumentDate";
import CoordinatorDashboard from "../screens/coordinator/CoordinatorDashboard";
import ReportEvaluation from "../screens/coordinator/ReportEvaluation";
import WeeklyProgressEvaluation from "../screens/coordinator/WeeklyProgressEvaluation";
import AddWeeklyProgress from "../screens/student/AddWeeklyProgress";
import DocumentationSubmission from "../screens/student/DocumentationSubmission";
import GroupFormation from "../screens/student/GroupFormation";
import IdeaSubmission from "../screens/student/IdeaSubmission";
import StudentDashboard from "../screens/student/StudentDashboard";
import DocumentEvaluation from "../screens/supervisor/DocumentEvaluation";
import IdeaApproval from "../screens/supervisor/IdeaApproval";
import ReportEvaluationBySupervisor from "../screens/supervisor/ReportEvaluationBySupervisor";
import SupervisorDashboard from "../screens/supervisor/SupervisorDashboard";

export const studentLinks = [
  {
    to: "/",
    name: "Student Dashboard",
    components: <StudentDashboard />,
  },
  {
    to: "/add-weekly-progress",
    name: "Add Weekly Progress",
    components: <AddWeeklyProgress />,
  },
  {
    to: "/documentation-submission",
    name: "Documentation Submission",
    components: <DocumentationSubmission />,
  },
  {
    to: "/group-formation",
    name: "Group Formation",
    components: <GroupFormation />,
  },
  {
    to: "/idea-submission",
    name: "Idea Submission",
    components: <IdeaSubmission />,
  },
];
export const supervisorLinks = [
  {
    to: "/",
    name: "Supervisor Dashboard",
    components: <SupervisorDashboard />,
  },
  {
    to: "/document-evaluation",
    name: "Document Evaluation",
    components: <DocumentEvaluation />,
  },
  {
    to: "/idea-approval",
    name: "Idea Approval",
    components: <IdeaApproval />,
  },
  {
    to: "/report-evaluation",
    name: "Report Evaluation",
    components: <ReportEvaluationBySupervisor />,
  },
];
export const coordinatorLinks = [
  {
    to: "/",
    name: "Coordinator Dashboard",
    components: <CoordinatorDashboard />,
  },
  {
    to: "/announce-document-date",
    name: "Announce Document Date",
    components: <AnnounceDocumentDate />,
  },
  {
    to: "/report-evaluation",
    name: "Report Evaluation",
    components: <ReportEvaluation />,
  },
  {
    to: "/weekly-progress-evaluation",
    name: "Weekly Progress Evaluation",
    components: <WeeklyProgressEvaluation />,
  },
];
export const hodLinks = [
  {
    to: "/",
    name: "Dashboard",
    components: <HODDashboard />,
  },
];
export const cosupervisorLinks = [];
export const principalLinks = [];
