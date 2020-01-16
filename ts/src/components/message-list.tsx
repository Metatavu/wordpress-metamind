import * as React from "react";
import { MessageData } from "types";
import { withStyles, WithStyles, Avatar, Fade, Button } from "@material-ui/core";
import styles from "../styles/styles";
import { MetamindWP } from "types";

declare var metamindmwp: MetamindWP;

/**
 * Component props
 */
export interface Props extends WithStyles<typeof styles> {
  messages: MessageData[];
  responses: string[];
  onQuickResponseClick: (response: string) => void;
}

export interface State {
}

/**
 * MessageList component
 */
class MessageList extends React.Component<Props, State> {

  private messagesEnd: any;

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

  public componentDidUpdate(prevProps: Props) {
    if (JSON.stringify(prevProps.messages) !== JSON.stringify(this.props.messages)) {
      this.setState({
        messages: this.props.messages
      });
    }

    this.scrollToBottom();
  }

  /**
   * Scroll to the bottom of the messages list
   */
  public scrollToBottom = () => {
    if (!this.messagesEnd) {
      return;
    }

    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  }

  /**
   * Component render method
   */
  public render() {
    return (
      <div className={ "metamind-messages-list-container" }>
        <div className={ "metamind-messages-list"}>
          {
            this.props.messages.map((message) => this.renderMessage(message) )
          }
        </div>
        <div className={ "metamind-quick-responses-list" }>
          {
            this.props.responses.map((response) => this.renderResponse(response) )
          }
        </div>
        <div style={{ float: "left", clear: "both" }} ref={(el) => { this.messagesEnd = el; }} />
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
    if ( message.from === "BOT" ) {

      return (
        <div key={ message.key } className={ "metamind-bot-message-container" }>
          <div>
            <Avatar alt="Metamind" className={ "metamind-bot-message-avatar" } src={ metamindmwp.widget.avatar }/>
          </div>
          <Fade in={ true }>
            <div className={ "metamind-bot-message-bubble" }>
              <p>
                { message.content }
              </p>
            </div>
          </Fade>
        </div>
      );
    }
    return (
      <div key={ message.key } className={ "metamind-user-message-container" }>
        <div className={ "metamind-user-message-bubble" }>
          <p>
            { message.content }
          </p>
        </div>
    </div>
    );
  }

  /**
   * Renders a quick response
   *
   * @param response response
   */
  private renderResponse = (response: string) => {
    return (
    <Button
      className={ "quick-response-button" }
      color="secondary"
      size="small"
      variant="contained"
      onClick={ () => this.props.onQuickResponseClick(response) }>
      { response }
    </Button>
    );
  }

}

export default withStyles(styles)(MessageList);
