import Auth from "./auth";
import { AccessToken } from "../types";

export default new class Token {

  private accessToken: AccessToken;

  constructor() {
    this.refreshToken();
    setInterval(async () => {
      this.refreshToken();
    }, 30000);
  }

  public getAccessToken = async () => {
    while (true) {
      if (this.accessToken) {
        return this.accessToken;
      }

      await this.waitAsync(300);
    }
  }

  private waitAsync = (timeout: number) => {
    return new Promise((resolve) => {
      setTimeout(resolve, timeout);
    });
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