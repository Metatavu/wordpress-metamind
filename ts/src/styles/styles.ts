import { createStyles } from "@material-ui/core";
import theme from "./theme";

export default createStyles({
  root: {
    position: "relative",
    height: 500,
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
  messageListContainer: {
    overflowY: "scroll",
    overflowX: "hidden",
    height: 400,
    backgroundColor: "#f7f7f7",
    "&:after": {
      position: "absolute",
      content: "''",
      display: "block",
      top: 0,
      left: 0,
      right: 0,
      height: 80,
      borderTopLeftRadius: 5,
      boxShadow: "inset -10px 20px 20px 0px rgba(255, 255, 255, 0.6)"
    }
  },
  messageList: {
    paddingTop: theme.spacing(2)
  },
  botMessage: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingBottom: theme.spacing(1)
  },
  messageAvatar: {
    width: 40,
    height: 40,
    backgroundColor: theme.palette.background.default,
    borderColor: theme.palette.primary.dark,
    borderWidth: 2,
    borderStyle: "solid"
  },
  botMessageBubble: {
    backgroundColor: theme.palette.primary.main,
    margin: theme.spacing(1),
    padding: theme.spacing(2),
    borderRadius: 30,
    display: "flex",
    width: "fit-content",
    boxShadow: "1px 1px 2px rgba(0,0,0,0.2)",
    "& p": {
      fontSize: 12,
      margin: 0
    }
  },
  message: {
    display: "flex",
    justifyContent: "flex-end",
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingBottom: theme.spacing(1)
  },
  messageBubble: {
    backgroundColor: theme.palette.background.paper,
    margin: theme.spacing(1),
    padding: theme.spacing(2),
    borderRadius: 30,
    display: "flex",
    width: "fit-content",
    boxShadow: "1px 1px 2px rgba(0,0,0,0.2)",
    "& p": {
      fontSize: 12,
      margin: 0
    }
  },
  responseList: {
    display: "flex",
    justifyContent: "flex-end",
    flexWrap: "wrap",
    padding: theme.spacing(1)
  },
  response: {
    borderRadius: 50,
    fontSize: 11,
    fontWeight: "bold",
    padding: theme.spacing(1),
    textTransform: "none",
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(1),
    "&:focus": {
      outline: "none"
    }
  },
  input: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: theme.spacing(1),
    "& input": {
      borderRadius: 50,
      height: 45,
      borderWidth: 1,
      fontSize: 14,
      "&:focus": {
        borderColor: theme.palette.primary.main,
        outline: "none"
      }
    }
  },
  start: {
    marginTop: theme.spacing(1),
    fontSize: 12,
    fontWeight: "bold",
    "&:focus": {
      outline: "none",
      background: "inherit"
    },
  },
  close: {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 1,
    transform: "translate3d(-50%, -50%, 0)",
    boxShadow: "1px 1px 1px rgba(0,0,0,0.2)",
    padding: theme.spacing(1),
    background: theme.palette.background.default,
    color: "#222",
    transition: "color 0.2s ease-out",
    "&:hover": {
      background: theme.palette.background.default,
      color: theme.palette.primary.main
    },
    "&:active": {
      outline: "none"
    },
    "&:focus": {
      outline: "none"
    }
  }
});