import * as React from "react";
import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline, Fade } from "@material-ui/core";
import theme from "../styles/theme";
import BotAvatar from "./bot-avatar";
import Chat from "./chat";

/**
 * Component props
 */
interface Props {
  initParams: string | null
}

/**
 * Component state
 */
interface State {
  chatVisible: boolean
}

/**
 * Global editor
 */
class Bot extends React.Component<Props, State> {

  /**
   * Constructor
   *
   * @param props props
   */
  constructor(props: Props) {
    super(props);
    this.state = {
      chatVisible: false
    };
  }

  /**
   * Component render method
   */
  public render() {
    return (
      <ThemeProvider theme={ theme }>
        <CssBaseline />
        <div className="metamind-bot" style={{ position: "fixed", right: 0, bottom: 0, zIndex: 2000 }}>
          { this.renderAvatar() }
          { this.renderChat() }
        </div>
      </ThemeProvider>
    );
  }

  private renderAvatar = () => {
    if (this.state.chatVisible) {
      return null;
    }

    return <BotAvatar onAvatarClick={ this.onAvatarClick }/>;
  }

  /**
   * Renders chat component
   */
  private renderChat = () => {
    if (!this.state.chatVisible) {
      return null;
    }

    return <Chat initParams={ this.props.initParams } onClose={ () => this.setState({ chatVisible: false }) }/>;
  }

  /**
   * Event handler for avatar click
   */
  private onAvatarClick = () => {
    this.setState({
      chatVisible: true
    });
  }

}

export default Bot;