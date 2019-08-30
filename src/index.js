import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import { red, amber } from "@material-ui/core/colors";
import { dark } from "@material-ui/core/styles/createPalette";

const theme = createMuiTheme({
  palette: {
    primary: { main: "#04c2f7", dark: "black" },
    secondary: {
      main: amber[600],
      light: amber[200],
      dark: "#04c2f7"
    }
  },
  typography: {
    fontFamily: ["sans-serif;"],
    fontWeight: "bold"
  }
});

console.log(theme);

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
