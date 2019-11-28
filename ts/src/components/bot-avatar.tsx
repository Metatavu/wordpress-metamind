import * as React from "react";
import { Avatar } from "@material-ui/core";
import { MetamindWP } from "types";

declare var metamindmwp: MetamindWP;

/**
 * Component props
 */
interface Props {
  onAvatarClick: () => void
}

/**
 * Component state
 */
interface State {
  bottom: number
}

/**
 * Global editor
 */
class BotAvatar extends React.Component<Props, State> {

  private intervalId: number;

  /**
   * Constructor
   *
   * @param props props
   */
  constructor(props: Props) {
    super(props);
    this.state = {
      bottom: 0
    };
  }

  /**
   * Component did mount life-cycle event
   */
  public componentDidMount = () => {
    this.intervalId = setInterval(() => {
      this.setState({
        bottom: this.state.bottom > 0 ? 0 : 3
      });
    }, 1000);
  }

  /**
   * Component willl unmount life-cycle event
   */
  public componentWillUnmount = () => {
    clearInterval(this.intervalId);
  }

  /**
   * Component render method
   */
  public render() {
    return (
      <div className="metamind-avatar">
        <Avatar alt="Metamind"
          onClick={ this.props.onAvatarClick }
          style={{
            width: 60,
            height: 60,
            cursor: "pointer",
            transition: "margin-bottom 1s ease-in-out",
            marginBottom: this.state.bottom,
            backgroundColor: "#fff"
          }}
          src={ metamindmwp.widget.avatar } />
      </div>
    );
  }

}

export default BotAvatar;