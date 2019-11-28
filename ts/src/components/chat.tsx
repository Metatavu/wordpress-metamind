import * as React from "react";
import apiUtils from "../utils/api-utils";
import { Session } from "generated/client";
import { MetamindWP } from "types";
import MessageList from "./message-list";
import { MessageData } from "../types/index";
import { Input } from "@material-ui/core";

declare var metamindmwp: MetamindWP;

/**
 * Component props
 */
interface Props {
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
  currentMessage: string
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
    return (
      <div className="metamind-chat">
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
      <MessageList messages={ this.state.messages }/>
    );
  }

  /**
   * Renders input
   */
  private renderInput = () => {
    return (
      <div className="metamind-input">
        <Input onKeyUp={ this.onInputKeyUp } value={ this.state.currentMessage } onChange={ this.onInputChange }/>
      </div>
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
    return "INIT" + (metamindmwp.story.initParams ? ` ${metamindmwp.story.initParams}` : "");
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

}

export default Chat;