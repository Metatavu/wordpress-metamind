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
    const { classes } = this.props;
    return (
      <div className={ classes.messageListContainer }>
        <div className={ classes.messageList }>
          {
            this.props.messages.map((message) => this.renderMessage(message) )
          }
        </div>
        <div className={ classes.responseList }>
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
        <div key={ message.key } className={ classes.botMessage }>
          <div>
            <Avatar alt="Metamind" className={ classes.messageAvatar } src={ metamindmwp.widget.avatar }/>
          </div>
          <Fade in={ true }>
            <div className={ classes.botMessageBubble }>
              <p>
                { message.content }
              </p>
            </div>
          </Fade>
        </div>
      );
    }
    return (
      <div key={ message.key } className={ classes.message }>
        <div className={ classes.messageBubble }>
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
    const { classes } = this.props;
    return (
    <Fade in={ true }>
      <Button className={ classes.response } color="secondary" size="small" variant="contained" onClick={ () => this.props.onQuickResponseClick(response) }>
        { response }
      </Button>
    </Fade>
    );
  }

}

export default withStyles(styles)(MessageList);
