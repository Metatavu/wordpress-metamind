import Auth from "./auth";
import { AccessToken, MetamindWP } from "../types";

declare var metamindmwp: MetamindWP;

class Token {

  private accessToken: AccessToken;

  constructor() {
    setInterval(async () => {
      this.refreshToken();
    }, 30000);
  }

  public getAccessToken = async () => {
    if (!this.accessToken) {
      this.accessToken = await Auth.login(metamindmwp.auth);
    }

    return this.accessToken;
  }

  private refreshToken = async () => {
    if (!this.accessToken) {
      return;
    }

    if (!Auth.isTokenValid(this.accessToken)) {
      const accessToken = await Auth.refreshToken(this.accessToken);
      if (accessToken) {
        this.accessToken = accessToken;
      }
    }
  }

}

export default new Token();