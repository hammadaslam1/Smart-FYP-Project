
import CoordinatorDashboard from "../screens/coordinator/CoordinatorDashboard";
import ReportEvaluation from "../screens/coordinator/ReportEvaluation";
import WeeklyProgressEvaluation from "../screens/coordinator/WeeklyProgressEvaluation";
import HODdashboard from "../screens/hod/HODDashboard";

import AddWeeklyProgress from "../screens/student/AddWeeklyProgress";
import DocumentationSubmission from "../screens/student/DocumentationSubmission";
import GroupFormation from "../screens/student/GroupFormation";
import IdeaSubmission from "../screens/student/IdeaSubmission";
import StudentDashboard from "../screens/student/StudentDashboard";
import DocumentEvaluation from "../screens/supervisor/DocumentEvaluation";
import IdeaApproval from "../screens/supervisor/IdeaApproval";
import ReportEvaluationBySupervisor from "../screens/supervisor/ReportEvaluationBySupervisor";
import SupervisorDashboard from "../screens/supervisor/SupervisorDashboard";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import CampaignIcon from "@mui/icons-material/Campaign";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import TaskIcon from "@mui/icons-material/Task";
import VisibilityIcon from "@mui/icons-material/Visibility";
import GradingIcon from '@mui/icons-material/Grading';
// import ViewFYPGroups from "../screens/coordinator/ViewFYPGroups";
// import ManageProjectIdeas from "../screens/coordinator/ManageProjectIdeas";
import ManageGroups from "../screens/coordinator/ManageGroups";
import ViewFYPGroups from "../screens/coordinator/ViewFYPGroups";
import GroupDetails from "../screens/coordinator/GroupDetails";
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import Announcements from "../screens/coordinator/AnnounceDocumentDate";
import ManageGroupDetails from "../screens/coordinator/ManageGroupDetails";
import SubmitFunctionalRequirements from "../screens/student/SubmitFunctionalRequirements";
import EvaluateGroupProgess from "../screens/coordinator/EvalutaeGroupProgress";

export const studentLinks = [
  {
    to: "/",
    name: "Student Dashboard",
    components: <StudentDashboard />,
    icon: DashboardIcon,
    flag: true,
  },
  {
    to: "/add-weekly-progress",
    name: "Add Weekly Progress",
    components: <AddWeeklyProgress />,
    icon: PublishedWithChangesIcon,
    flag: true,
  },
  {
    to: "/fr-submission",
    name: "Functional Requirements",
    components: <SubmitFunctionalRequirements/>,
    icon: GradingIcon,
    flag: false,
  },
  {
    to: "/documentation-submission",
    name: "Documentation Submission",
    components: <DocumentationSubmission />,
    icon: UploadFileIcon,
    flag: true,
  },
  {
    to: "/group-formation",
    name: "Group Formation",
    components: <GroupFormation />,
    icon: GroupAddIcon,
    flag: true,
  },
  {
    to: "/idea-submission",
    name: "Idea Submission",
    components: <IdeaSubmission />,
    icon: TipsAndUpdatesIcon,
    flag: true,
  },
];
export const supervisorLinks = [
  {
    to: "/",
    name: "Supervisor Dashboard",
    components: <SupervisorDashboard />,
    icon: DashboardIcon,
    flag: true,
  },
  {
    to: "/document-evaluation",
    name: "Document Evaluation",
    components: <DocumentEvaluation />,
    icon: DashboardIcon,
    flag: true,
  },
  {
    to: "/idea-approval",
    name: "Idea Approval",
    components: <IdeaApproval />,
    icon: DashboardIcon,
    flag: true,
  },
  {
    to: "/report-evaluation",
    name: "Report Evaluation",
    components: <ReportEvaluationBySupervisor />,
    icon: DashboardIcon,
    flag: true,
  },
];
export const coordinatorLinks = [
  {
    to: "/",
    name: "Coordinator Dashboard",
    components: <CoordinatorDashboard />,
    icon: DashboardIcon,
    flag: true,
  },
  {
    to: "/view-fyp-groups",
    name: "View FYP Groups",
    components: <ViewFYPGroups />,
    icon: VisibilityIcon,
    flag: true,
  },
  {
    to: "/group-details",
    name: "Group Details",
    components: <GroupDetails />,
    icon: DashboardIcon,
    flag: false,
  },
  {
    to: "/manage-group-details",
    name: "Manage Group Details",
    components: <ManageGroupDetails />,
    icon: DashboardIcon,
    flag: false,
  },{
    to: "/evaluate-group-progress",
    name: "Evaluate Group Progress",
    components: <EvaluateGroupProgess/>,
    icon: DashboardIcon,
    flag: false,
  },
  {
    to: "/manage-groups",
    name: "Manage Groups",
    components: <ManageGroups />,
    icon: ManageAccountsIcon,
    flag: true,
  },
  {
    to: "/announcements",
    name: "Announcements",
    components: <Announcements />,
    icon: CampaignIcon,
    flag: true,
  },
  {
    to: "/report-evaluation",
    name: "Report Evaluation",
    components: <ReportEvaluation />,
    icon: CheckCircleIcon,
    flag: true,
  },
  {
    to: "/weekly-progress-evaluation",
    name: "Weekly Progress Evaluation",
    components: <WeeklyProgressEvaluation />,
    icon: TaskIcon,
    flag: true,
  },
];
export const hodLinks = [
  {
    to: "/",
    name: "Dashboard",
    components: <HODdashboard />,
    icon: DashboardIcon,
    flag: true,
  },
];
export const cosupervisorLinks = [];
export const principalLinks = [];
