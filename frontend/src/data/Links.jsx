import AnnounceDocumentDate from "../screens/coordinator/AnnounceDocumentDate";
import CoordinatorDashboard from "../screens/coordinator/CoordinatorDashboard";
import ReportEvaluation from "../screens/coordinator/ReportEvaluation";
import WeeklyProgressEvaluation from "../screens/coordinator/WeeklyProgressEvaluation";
import HODdashboard from "../screens/hod/HODdashboard";

import AddWeeklyProgress from "../screens/student/AddWeeklyProgress";
import DocumentationSubmission from "../screens/student/DocumentationSubmission";
import GroupFormation from "../screens/student/GroupFormation";
import IdeaSubmission from "../screens/student/IdeaSubmission";
import StudentDashboard from "../screens/student/StudentDashboard";
import DocumentEvaluation from "../screens/supervisor/DocumentEvaluation";
import IdeaApproval from "../screens/supervisor/IdeaApproval";
import ReportEvaluationBySupervisor from "../screens/supervisor/ReportEvaluationBySupervisor";
import SupervisorDashboard from "../screens/supervisor/SupervisorDashboard";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import CampaignIcon from '@mui/icons-material/Campaign';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import TaskIcon from '@mui/icons-material/Task';
export const studentLinks = [
  {
    to: "/",
    name: "Student Dashboard",
    components: <StudentDashboard />,
    icon:DashboardIcon,
  },
  {
    to: "/add-weekly-progress",
    name: "Add Weekly Progress",
    components: <AddWeeklyProgress />,
    icon:PublishedWithChangesIcon,
  },
  {
    to: "/documentation-submission",
    name: "Documentation Submission",
    components: <DocumentationSubmission />,
    icon:UploadFileIcon,
  },
  {
    to: "/group-formation",
    name: "Group Formation",
    components: <GroupFormation />,
    icon:GroupAddIcon,
  },
  {
    to: "/idea-submission",
    name: "Idea Submission",
    components: <IdeaSubmission />,
    icon:TipsAndUpdatesIcon,
  },
];
export const supervisorLinks = [
  {
    to: "/",
    name: "Supervisor Dashboard",
    components: <SupervisorDashboard />,
    icon:DashboardIcon,
  },
  {
    to: "/document-evaluation",
    name: "Document Evaluation",
    components: <DocumentEvaluation />,
    icon:DashboardIcon,
  },
  {
    to: "/idea-approval",
    name: "Idea Approval",
    components: <IdeaApproval />,
    icon:DashboardIcon,
  },
  {
    to: "/report-evaluation",
    name: "Report Evaluation",
    components: <ReportEvaluationBySupervisor />,
    icon:DashboardIcon,
  },
];
export const coordinatorLinks = [
  {
    to: "/",
    name: "Coordinator Dashboard",
    components: <CoordinatorDashboard />,
    icon:DashboardIcon,
  },
  {
    to: "/announce-document-date",
    name: "Announce Document Date",
    components: <AnnounceDocumentDate />,
    icon:CampaignIcon,
  },
  {
    to: "/report-evaluation",
    name: "Report Evaluation",
    components: <ReportEvaluation />,
    icon:CheckCircleIcon,
  },
  {
    to: "/weekly-progress-evaluation",
    name: "Weekly Progress Evaluation",
    components: <WeeklyProgressEvaluation />,
    icon:TaskIcon,
  },
];
export const hodLinks = [
  {
    to: "/",
    name: "Dashboard",
    components: <HODdashboard/>,
    icon:DashboardIcon,
  },
];
export const cosupervisorLinks = [];
export const principalLinks = [];
