// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useLocation, useNavigate } from "react-router-dom";
// import { toggleTab } from "../../redux/tabs/TabSlice";
// import { Box, Tab, Tabs } from "@mui/material";
// import { DashboardCSS } from "../../styles/DashboardCSS";

// const DashSidebar = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const location = useLocation();
//   const { tabs } = useSelector((state) => state.tab);
//   useEffect(() => {
//     const urlParams = new URLSearchParams(location.search);
//     const tabFromUrl = urlParams.get("tab");
//     dispatch(toggleTab(tabFromUrl));
//   }, [dispatch, location.search]);
//   const allTabs = [
//     { label: "Profile", value: 0, name: "profile" },
//     { label: "Account", value: 1, name: "account" },
//     { label: "Dashboard", value: 2, name: "dashboard" },
//     { label: "Sign out", value: 3, name: "signout" },
//   ];
//   return (
//     <Box sx={{ flex: 1 }}>
//       <Tabs
//         orientation="vertical"
//         variant="scrollable"
//         aria-label="Vertical tabs example"
//         sx={[DashboardCSS.sideMain, { borderRight: 1, borderColor: "divider" }]}
//       >
//         {allTabs.map((data, i) => (
//           <Tab
//             key={i}
//             sx={
//               tabs === data.name
//                 ? [DashboardCSS.tabTitle, DashboardCSS.tabActive]
//                 : DashboardCSS.tabTitle
//             }
//             //   icon={<AccountBoxIcon sx={DashboardCSS.tabIcon} />}
//             iconPosition="start"
//             label={data.label}
//             value={data.value}
//             //   onClick={() => navigate(PROFILE)}
//           />
//         ))}
//       </Tabs>
//     </Box>
//   );
// };

// export default DashSidebar;
