import "./home.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import EventNoteIcon from "@mui/icons-material/EventNote";
import PolicyIcon from "@mui/icons-material/Policy";
import LogoutIcon from "@mui/icons-material/Logout";
import React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import {
  Link,
  NavLink,
  BrowserRouter,
  Route,
  Routes,
  Switch,
} from "react-router-dom";
import Cancellation from "../cancellationpolicy/Cancellation";
import Privacy from "../privacy/Privacy";
import Faqs from "../faqs/faqs";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

function Home() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            ParkNB
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />

        <nav>
          <ul className="nav nav-pills sidemenus ">
            <li className="hover">
              <NavLink to="/home/users" activeClassName="active">
                <DashboardIcon className="icon" />
                <span>DashBoard</span>
              </NavLink>
            </li>
            <li className="hover">
              <NavLink to="/home/category" activeClassName="active">
                <PersonOutlineIcon className="icon" />
                <span>Users</span>
              </NavLink>
            </li>
            <li className="hover">
              <NavLink to="/home/faqs" activeClassName="active">
                <EventNoteIcon className="icon" />
                <span>FAQS</span>
              </NavLink>
            </li>
            <li className="hover">
              <NavLink to="/home/privacy" activeClassName="active">
                <PolicyIcon className="icon" />
                <span>Privacy Policy</span>
              </NavLink>
            </li>
            <li className="hover">
              <NavLink
                to="/home/cancel"
                activeClassName="active"
              >
                <PolicyIcon className="icon" />
                <span>Cancel Policy</span>
              </NavLink>
            </li>
          </ul>
        </nav>
        {/* <div>
          <li className="logout">
            <Button variant="contained" href="#contained-buttons">
              <LogoutIcon />
            </Button>
          </li>
        </div> */}
        <div className = "logout">
         <NavLink
                to="/Dashboard/logout"
                activeClassName="active"
              >
          <Button variant="contained" href="#contained-buttons">
            <LogoutIcon />
          </Button>
          </NavLink>

        </div>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <Routes>
        <Route exact path="cancel" element={<Cancellation />}/>
        <Route exact path="privacy" element={<Privacy />}/>
        <Route exact path="faqs" element={<Faqs />}/>
        </Routes>
      </Main>
    </Box>
  );
}

export default Home;
