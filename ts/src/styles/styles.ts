import { createStyles } from "@material-ui/core";
import theme from "./theme";

export default createStyles({
  root: {
    height: 400,
    width: 300,
    backgroundColor: theme.palette.background.default,
    borderColor: theme.palette.primary.dark,
    boxShadow: "0 0 30px rgba(0, 0, 0, 0.2)",
    borderTopLeftRadius: 5,
  },
  avatarContainer: {
    margin: theme.spacing(1),
    borderRadius: "50%",
    position: "relative",
    "&:after": {
      content: "''",
      display: "block",
      position: "absolute",
      top: 0,
      width: 50,
      height: 50,
      zIndex: -1,
      borderRadius: "50%",
      boxShadow: `0 0 20px ${ theme.palette.primary.main }`,
      opacity: 0,
      transition: "opacity 0.2s ease-out",
    },
    "&:hover": {
      "&:after": {
        opacity: 0.5
      }
    }
  },
  avatar: {
    position: "relative",
    width: 60,
    height: 60,
    cursor: "pointer",
    transition: "transform 1s ease-in-out",
    backgroundColor: theme.palette.background.default,
    borderColor: theme.palette.primary.dark,
    borderWidth: 2,
    borderStyle: "solid"
  },
  messageList: {
    overflowY: "scroll",
    height: 340,
    borderTopLeftRadius: 5,
    "&:after": {
      position: "absolute",
      content: "''",
      display: "block",
      top: 0,
      left: 0,
      right: 0,
      height: 340,
      borderTopLeftRadius: 5,
      boxShadow: "inset -10px 20px 20px 0px rgba(255, 255, 255, 0.6)"
    }
  },
  message: {
    backgroundColor: theme.palette.background.paper,
    margin: theme.spacing(1),
    padding: theme.spacing(2),
    borderRadius: 50,
    boxShadow: "1px 1px 2px rgba(0,0,0,0.2)",
  },
  input: {
    height: 50,
    padding: theme.spacing(1),
    "& input": {
      borderRadius: 5
    }
  }
});