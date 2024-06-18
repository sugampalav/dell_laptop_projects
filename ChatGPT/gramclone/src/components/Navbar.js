import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import { makeStyles } from "@material-ui/core/styles";
import { createTheme } from "@material-ui/core/styles";
import { responsiveFontSizes } from "@material-ui/core/styles";

import Logo from "../assets/icons8-grammarly-40.png";

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: "Inter, sans-serif",
    fontStyle: "italic",
    flexGrow: 1,
  },
  branding: {
    marginRight: theme.spacing(2),
  },
  navbar: {
    fontFamily: "Inter, sans-serif",
    background: "#fff",
    color: "#000",
  },
  logo: { width: "40px", height: "40px", marginRight: "10px" },
  logIn: { textTransform: "none", fontWeight: "bold" },
  title: {
    fontFamily: "Inter, sans-serif",
    letterSpacing: -0.5,
    fontWeight: "bold",
    flexGrow: 1,
  },
}));

function Navbar() {
  const classes = useStyles();

  let theme = createTheme();
  theme = responsiveFontSizes(theme);

  return (
    <div>
      <AppBar position="static">
        <Toolbar className={classes.navbar} disableGutters={false}>
          <img src={Logo} alt="Logo" className={classes.logo} />

          <Typography variant="h6" className={classes.title}>
            grammarly
          </Typography>

          <Button
            color="inherit"
            className={classes.logIn}
            disableElevation
            disableRipple
          >
            Log In
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
