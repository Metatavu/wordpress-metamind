import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";
import { MetamindWP } from "types";
declare var metamindmwp: MetamindWP;

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

export default createMuiTheme({
  palette: {
    primary: {
      main: metamindmwp.widget.primaryColor,
      dark: "#000"
    },
    secondary: {
      main: metamindmwp.widget.secondaryColor
    },
    background: {
      default: "#fff",
      paper: "#e4e4e4"
    }
  }
});