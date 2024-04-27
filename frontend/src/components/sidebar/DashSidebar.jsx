import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { toggleTab } from "../../redux/tabs/TabSlice";
import { Box, Tab, Tabs } from "@mui/material";
import { DashboardCSS } from "../../styles/DashboardCSS";


const DashSidebar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const { tabs } = useSelector((state) => state.tab);
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    dispatch(toggleTab(tabFromUrl));
  }, [dispatch, location.search]);
  return (
    <Box sx={{flex: 1}}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        aria-label="Vertical tabs example"
        sx={[DashboardCSS.sideMain, { borderRight: 1, borderColor: "divider" }]}
      >
        <Tab
          sx={
            tabs === "profile"
              ? [DashboardCSS.tabTitle, DashboardCSS.tabActive]
              : DashboardCSS.tabTitle
          }
        //   icon={<AccountBoxIcon sx={DashboardCSS.tabIcon} />}
          iconPosition="start"
          label="Profile"
          value={0}
        //   onClick={() => navigate(PROFILE)}
        />
        <Tab
          sx={
            tabs === "signout"
              ? [DashboardCSS.tabTitle, DashboardCSS.tabActive]
              : DashboardCSS.tabTitle
          }
        //   icon={<LogoutIcon sx={DashboardCSS.tabIcon} />}
          iconPosition="start"
          label="Sign out"
          value={1}
        //   onClick={() => navigate(SIGNOUT)}
        />
      </Tabs>
    </Box>
  );
};

export default DashSidebar;