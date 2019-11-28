import * as React from "react";
import { MessageData } from "types";
import { withStyles, WithStyles } from "@material-ui/core";
import styles from "../styles/styles";

export interface Props extends WithStyles<typeof styles> {
  messages: MessageData[]
}

export interface State {
}

/**
 * MessageList component
 */
class MessageList extends React.Component<Props, State> {

  /**
   * Constructor
   * 
   * @param props component props
   */
  constructor(props: Props) {
    super(props);
    this.state = {
    };
  }

  /**
   * Component render method
   */
  public render() {
    const { classes } = this.props;
    return (
      <div className={ classes.messageList }>
        {
          this.props.messages.map((message) => this.renderMessage(message) )
        }
      </div>
    );
  }

  /**
   * Renders a message
   *
   * @param message message
   */
  private renderMessage = (message: MessageData) => {
    const { classes } = this.props;
    return (
      <div key={ message.key } className={ classes.message }>
        { message.content }
      </div>
    );
  }

}

export default withStyles(styles)(MessageList);
