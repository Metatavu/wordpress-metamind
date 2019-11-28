import * as React from "react";
import { MessageData } from "types";

export interface Props {
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
    return (
      <div className="metamind-message-list">
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
    return (
      <div key={ message.key } className="metamind-message">
        { message.content }
      </div>
    );
  }

}

export default MessageList;
