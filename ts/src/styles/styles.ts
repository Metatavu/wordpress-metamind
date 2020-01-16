import { createStyles } from "@material-ui/core";
import theme from "./theme";
import { MetamindWP } from "types";

declare var metamindmwp: MetamindWP;

export default createStyles({
  root: {
    position: "relative",
    height: metamindmwp.widget.height || 500,
    width: metamindmwp.widget.width || 320,
    [theme.breakpoints.down("md")]: {
      width: metamindmwp.widget.mobileWidth || 280,
    },
    backgroundColor: theme.palette.background.default,
    borderColor: theme.palette.primary.dark,
    boxShadow: "0 0 30px rgba(0, 0, 0, 0.2)",
    borderTopLeftRadius: 5,
    // Message list container
    "& .metamind-messages-list-container": {
      overflowY: "scroll",
      overflowX: "hidden",
      height: "80%",
      backgroundColor: "#f7f7f7",
      // Top white opaque effect
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
    // Messages list
    "& .metamind-messages-list": {
      paddingTop: theme.spacing(2)
    },
    // Quick responses
    "& .metamind-quick-responses-list": {
      display: "flex",
      justifyContent: "flex-end",
      flexWrap: "wrap",
      padding: theme.spacing(1)
    },
    // Quick response button
    "& .quick-response-button": {
      backgroundColor: theme.palette.secondary.main,
      borderRadius: 50,
      fontSize: 11,
      fontWeight: "bold",
      padding: theme.spacing(1),
      textTransform: "none",
      marginRight: theme.spacing(1),
      marginBottom: theme.spacing(1),
      transition: "box-shadow 0.2s ease-out",
      "&:focus": {
        outline: "none"
      }
    },
    // Bot message container
    "& .metamind-bot-message-container": {
      display: "flex",
      alignItems: "center",
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2)
    },
    // bot message avatar
    "& .metamind-bot-message-avatar": {
      width: 40,
      height: 40,
      backgroundColor: theme.palette.background.default,
      borderColor: theme.palette.primary.dark,
      borderWidth: 1,
      borderStyle: "solid",
      boxShadow: "1px 1px 2px rgba(0,0,0,0.2)"
    },
    // Bot message bubble
    "& .metamind-bot-message-bubble": {
      backgroundColor: theme.palette.primary.main,
      margin: theme.spacing(1),
      padding: theme.spacing(2),
      borderRadius: 30,
      display: "flex",
      width: "fit-content",
      boxShadow: "1px 1px 2px rgba(0,0,0,0.2)",
      borderColor: "#92cc69",
      borderWidth: 1,
      borderStyle: "solid",
      "& p": {
        fontSize: 14,
        margin: 0,
        fontFamily: theme.typography.body1.fontFamily
      }
    },
    // User message container
    "& .metamind-user-message-container": {
      display: "flex",
      justifyContent: "flex-end",
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2)
    },
    // user message bubble
    "& .metamind-user-message-bubble": {
      backgroundColor: theme.palette.background.paper,
      margin: theme.spacing(1),
      padding: theme.spacing(2),
      borderRadius: 30,
      display: "flex",
      width: "fit-content",
      boxShadow: "1px 1px 2px rgba(0,0,0,0.2)",
      borderColor: "#e0dddd",
      borderWidth: 1,
      borderStyle: "solid",
      "& p": {
        fontSize: 14,
        margin: 0,
        fontFamily: theme.typography.body1.fontFamily
      }
    },
    // Input area
    "& .metamind-input-field": {
      height: "20%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: theme.spacing(1),
      // Input field
      "& input[type='text']": {
        borderRadius: 50,
        height: 45,
        borderWidth: 1,
        fontSize: 14,
        background: "#fff",
        border: "solid 1px #ccc",
        boxSizing: "border-box",
        outline: "none",
        padding: "0.36rem 0.66rem",
        paddingRight: 45,
        outlineOffset: 0,
        width: "100%",
        margin: 0,
        display: "block",
        "&:focus": {
          borderColor: theme.palette.primary.main,
          outline: "none"
        }
      }
    },
    // Send message button
    "& .metamind-send-button": {
      right: 5,
      top: 5,
      backgroundColor: "#fff",
      position: "absolute",
      padding: 5,
      outline: "none",
      borderRadius: "50%",
      "&:focus": {
        backgroundColor: "#fff",
        outline: "none",
        outlineOffset: "none"
      }
    },
    // Send icon
    "& .metamind-send-icon": {
      fontSize: 24
    },
    // Start chat from beginning button
    "& .metamind-restart-button": {
      marginTop: theme.spacing(1),
      fontSize: 12,
      fontWeight: "bold",
      backgroundColor: "#fff",
      "&:focus": {
        outline: "none",
        background: "inherit"
      }
    },
    // Close chat button
    "& .metamind-close-button": {
      position: "absolute",
      top: 0,
      left: 0,
      zIndex: 1,
      transform: "translate3d(-50%, -50%, 0)",
      boxShadow: "1px 1px 1px rgba(0,0,0,0.2)",
      padding: theme.spacing(1),
      backgroundColor: "#fff",
      borderRadius: "50%",
      border: "1px solid #f5f5f5",
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
  },
  // Bot avatar container
  botAvatarContainer: {
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
  // Bot avatar
  botAvatar: {
    position: "relative",
    width: 60,
    height: 60,
    cursor: "pointer",
    transition: "transform 1s ease-in-out",
    backgroundColor: theme.palette.background.default,
    borderColor: theme.palette.primary.dark,
    borderWidth: 1,
    borderStyle: "solid"
  },
});