import * as React from "react";
import apiUtils from "../utils/api-utils";
import { Session } from "generated/client";
import { MetamindWP } from "types";
import MessageList from "./message-list";
import { MessageData } from "../types/index";
import { Input, withStyles, WithStyles, Button, IconButton } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import styles from "../styles/styles";
import CloseIcon from "@material-ui/icons/CloseSharp";

declare var metamindmwp: MetamindWP;

/**
 * Component props
 */
interface Props extends WithStyles<typeof styles> {
  initParams: string | null,
  onClose(): void
}

/**
 * Component state
 */
interface State {
  session?: Session,
  quickResponses: string[],
  globalQuickResponses: string[],
  hint?: string,
  messages: MessageData[],
  currentMessage: string,
}

/**
 * Global editor
 */
class Chat extends React.Component<Props, State> {

  /**
   * Constructor
   *
   * @param props props
   */
  constructor(props: Props) {
    super(props);
    this.state = {
      globalQuickResponses: [],
      quickResponses: [],
      messages: [],
      currentMessage: ""
    };
  }

  /**
   * Component did mount life-cycle event
   */
  public componentDidMount = async () => {
    const sessionsApi = await apiUtils.getSessionsApi();
    const storiesApi = await apiUtils.getStoriesApi();

    const story = await storiesApi.findStory({
      storyId: metamindmwp.story.id
    });

    const session = await sessionsApi.createSession({
      session: {
        locale: metamindmwp.story.locale,
        visitor: navigator.userAgent.toString(),
        timeZone: metamindmwp.story.timeZone
      },
      storyId: metamindmwp.story.id
    });

    await this.sendInitMessage(session);

    this.setState({
      session: session,
      globalQuickResponses: story.quickResponses || []
    });
  }

  /**
   * Component render method
   */
  public render() {
    const { classes } = this.props;
    return (
      <div className={ classes.root }>
        { this.renderCloseButton() }
        { this.renderMessageList() }
        { this.renderInput() }
      </div>
    );
  }

  /**
   * Renders message list
   */
  private renderMessageList = () => {
    return (
        <MessageList
          messages={ this.state.messages }
          responses={ this.state.quickResponses }
          onQuickResponseClick={ this.sendMessage }
        />
      );
    }

  /**
   * Renders input
   */
  private renderInput = () => {
    const { classes } = this.props;
    return (
      <div className={ classes.input }>
        {/* TextField would give better visuals */}
        <div style={{ position: "relative" }}>
          <Input disableUnderline fullWidth onKeyUp={ this.onInputKeyUp } value={ this.state.currentMessage } onChange={ this.onInputChange }/>
          <IconButton size="small" className={ classes.sendButton } color="primary" onClick={() => this.onSendButtonClick() }>
            <SendIcon className={ classes.sendIcon } />
          </IconButton>
        </div>
        <Button variant="text" color="primary" className={ classes.start } onClick={() => this.restartConversation()}>Aloita alusta</Button>
      </div>
    );
  }

  private restartConversation = () => {
    this.sendMessage("Aloita alusta");
  }

  /**
   * Render close button
   */
  private renderCloseButton = () => {
    const { classes } = this.props;
    return (
      <IconButton
        className={ classes.close }
        color="primary"
        onClick={ () => this.props.onClose() }
      >
      <CloseIcon fontSize="small" />
    </IconButton>
    );
  }
  /**
   * Sends an init message
   *
   * @param session session
   */
  private sendInitMessage = async (session: Session) => {
    return await this.postMessage(session, this.getInitMessage(), false);
  }

  /**
   * Sends message
   *
   * @param content content
   */
  private sendMessage = async (content: string) => {
    if (!this.state.session) {
      return;
    }

    return await this.postMessage(this.state.session, content, true);
  }

  /**
   * Posts message into API
   *
   * @param session session
   * @param content content
   * @param contentVisible whether content should be visible to user
   */
  private postMessage = async (session: Session, content: string, contentVisible: boolean) => {

    const messagesApi = await apiUtils.getMessagesApi();

    const message = await messagesApi.createMessage({
      message: {
        content: content,
        sessionId: session.id!
      },
      storyId: metamindmwp.story.id
    });

    const messages = [ ... this.state.messages ];

    if (contentVisible) {
      messages.push({
        key: `user-${message.id}`,
        content: message.content,
        from: "USER"
      });
    }

    if (message.response) {
      message.response.forEach((response: string, index: number) => {
        messages.push({
          key: `bot-${message.id}-${index}`,
          content: response,
          from: "BOT"
        });
      });
    }

    this.setState({
      quickResponses: message.quickResponses || [],
      messages: messages
    });
  }

  /**
   * Returns an init message
   *
   * @returns an init message
   */
  private getInitMessage = () => {
    return "INIT" + (this.props.initParams ? ` ${this.props.initParams}` : "");
  }

  /**
   * Event handler for change event
   *
   * @param event event
   */
  private onInputChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    this.setState({
      currentMessage: event.target.value
    });
  }

  /**
   * Event handler for keyup event
   *
   * @param event event
   */
  private onInputKeyUp = (event: React.KeyboardEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    if (event.keyCode === 13) {
      this.sendMessage(this.state.currentMessage);
      this.setState({
        currentMessage: ""
      });
    }
  }

  /**
   * Send message with send button
   *
   */
  private onSendButtonClick = () => {
    this.sendMessage(this.state.currentMessage);
    this.setState({
      currentMessage: ""
    });
  }
}

export default withStyles(styles)(Chat);