import { Configuration, SessionsApi, MessagesApi, StoriesApi } from "../generated/client";
import { MetamindWP } from "types";
import token from "../auth/token";

declare var metamindmwp: MetamindWP;

/**
 * Utility class for loading api with predefined configuration
 */
class ApiUtils {

  /**
   * Gets initialized sessions api
   */
  public getSessionsApi = async () =>  {
    return new SessionsApi(await this.getConfiguration());
  }

  /**
   * Gets initialized messages api
   */
  public getMessagesApi = async () =>  {
    return new MessagesApi(await this.getConfiguration());
  }

  /**
   * Gets initialized stories api
   */
  public getStoriesApi = async () =>  {
    return new StoriesApi(await this.getConfiguration());
  }

  /**
   * Gets api configuration
   */
  private getConfiguration = async () =>  {
    const accessToken = await token.getAccessToken();

    return new Configuration({
      basePath: metamindmwp.api.url,
      accessToken: accessToken.access_token
    });
  }

}

export default new ApiUtils();