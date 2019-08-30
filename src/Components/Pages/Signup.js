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
  createMuiTheme
} from "@material-ui/core";
import ButtonUi from "../Components/Button";
import Input from "../Components/Input";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  avatar: {
    width: 50,
    height: 50
  },
  paper: {
    marginTop: 20,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  form: {
    width: "100%"
  },
  formBorder: {
    height: 600
  }
}));

function Signup() {
  const classes = useStyles();
  return (
    <div
      style={{
        justifyContent: "center",
        display: "flex",
        alignItems: "center"
      }}
    >
      <Grid xs={5} className="form-login" direction="column" spacing={6}>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          item
          xs={12}
        >
          <Grid item xs={3}>
            <Avatar
              src={logo}
              style={{ animation: "App-logo-spin infinite 20s linear" }}
              className={classes.avatar}
              alt="logo"
            />
          </Grid>
          <Grid item xs={3}>
            <Typography color="primary">Sign-Up</Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} container direction="row" spacing={5}>
          <Grid item xs={6}>
            <Input
              id="firstName"
              label="First Name"
              placeholder="First Name"
              type="text"
              multiline
              fullWidth="true"
              margin="normal"
              variant="outlined"
              autoFocus
              required
              borderColor="#68dbf9"
              rows="1"
            />
          </Grid>
          <Grid item xs={6}>
            <Input
              id="lastName"
              label="Last Name"
              placeholder="Last Name"
              multiline
              fullWidth="true"
              margin="normal"
              variant="outlined"
              autoComplete="email"
              autoFocus
              required
              borderColor="#68dbf9"
              rows="1"
            />
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          container
          direction="row"
          alignItems="flex-start"
          justify="flex-start"
          spacing={5}
        >
          <Grid item xs={12}>
            <Input
              id="email"
              label="Enter Email"
              placeholder="Enter Email"
              type="email"
              multiline
              fullWidth="true"
              margin="normal"
              variant="outlined"
              name="email"
              autoComplete="email"
              autoFocus
              required
              borderColor="#68dbf9"
              rows="1"
            />
          </Grid>
        </Grid>

        <Grid item xs={12} container direction="row" spacing={5}>
          <Grid item xs={6}>
            <Input
              id="password"
              label="Enter Password"
              placeholder="Enter Password"
              type="email"
              multiline
              fullWidth="true"
              margin="normal"
              variant="outlined"
              name="email"
              autoComplete="email"
              autoFocus
              required
              borderColor="#68dbf9"
              rows="1"
            />
          </Grid>
          <Grid item xs={6}>
            <Input
              id="confirmPassword"
              label="Confirm Password"
              placeholder="Confirm Password"
              type="email"
              multiline
              fullWidth="true"
              margin="normal"
              variant="outlined"
              name="email"
              autoComplete="email"
              autoFocus
              required
              borderColor="#68dbf9"
              rows="1"
            />
          </Grid>
        </Grid>
        <Grid
          xs={11}
          container
          justify="center"
          direction="row"
          style={{ marginTop: "20px" }}
          spacing={13}
        >
          <Grid item xs={6}>
            <ButtonUi variant="contained" color="primary" name="Login" />
          </Grid>
          <Grid item xs={0}>
            <ButtonUi name="SignUp" variant="contained" color="secondary" />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Signup;
