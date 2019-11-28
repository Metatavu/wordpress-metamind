import * as React from "react";
import { Avatar, WithStyles, withStyles } from "@material-ui/core";
import { MetamindWP } from "types";
import styles from "../styles/styles";

declare var metamindmwp: MetamindWP;

/**
 * Component props
 */
interface Props extends WithStyles<typeof styles> {
  onAvatarClick: () => void
}

/**
 * Component state
 */
interface State {
  scale: number
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
      scale: 1
    };
  }

  /**
   * Component did mount life-cycle event
   */
  public componentDidMount = () => {
    this.intervalId = setInterval(() => {
      this.setState({
        scale: this.state.scale > 1 ? 1 : 1.1
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
    const { classes } = this.props;
    return (
      <div className={ classes.avatarContainer }>
        <Avatar alt="Metamind"
          onClick={ this.props.onAvatarClick }
          className={ classes.avatar }
          style={{
            transform: `scale(${ this.state.scale })`,
          }}
          src={ metamindmwp.widget.avatar } />
      </div>
    );
  }

}

export default withStyles(styles)(BotAvatar);