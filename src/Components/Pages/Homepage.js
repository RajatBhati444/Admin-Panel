import React from "react";
import logo from "../logo.svg";
import "../App.css";
import {
  Container,
  Typography,
  Grid,
  Avatar,
  Box,
  CssBaseline,
  Link,
  MuiThemeProvider,
  createMuiTheme,
  Toolbar,
  AppBar
} from "@material-ui/core";
import ButtonUi from "../Components/Button";
import Input from "../Components/Input";
import { makeStyles } from "@material-ui/styles";
import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";
import { width } from "@material-ui/system";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  icons: {
    height: 100,
    width: 110
  }
}));
const Homepage = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container direction="column">
        <Grid xs={12}>
          <AppBar position="static">
            <Toolbar>
              <Grid xs={6}>
                <Typography variant="h6">Home Page</Typography>
              </Grid>
              <Grid xs={6} container justify="flex-end">
                <ButtonUi name="Logout" variant="contained" color="secondary" />
              </Grid>
            </Toolbar>
          </AppBar>
        </Grid>
        <Grid
          container
          xs={12}
          direction="column"
          justify="center"
          alignItems="center"
          spacing={6}
        >
          <Grid item xs={6}>
            <AccountCircleRoundedIcon className={classes.icons} />
          </Grid>
          <Grid item xs={6}>
            <Typography> User full name</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography> User Email adress</Typography>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Homepage;
