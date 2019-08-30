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

function Login() {
  const classes = useStyles();
  return (
    <div
      style={{
        justifyContent: "center",
        display: "flex",
        alignItems: "center"
      }}
    >
      <Grid xs={4} className="form-login">
        <Grid
          xs={12}
          container
          direction="row"
          item
          alignItems="center"
          justify="center"
        >
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
              <Typography color="primary">Login</Typography>
            </Grid>
          </Grid>

          <Grid item sm={10}>
            <Input
              id="email"
              label="Enter Username"
              placeholder="Enter UserName"
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

          <Grid item sm={10}>
            <Input
              id="password"
              label="Enter Password"
              placeholder="Enter Password"
              multiline
              required
              fullWidth
              margin="normal"
              variant="outlined"
              type="password"
              borderColor="#68dbf9"
            />
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
      </Grid>
    </div>
  );
}

export default Login;
