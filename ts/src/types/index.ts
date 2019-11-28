export interface AccessToken {
  created: Date;
  access_token: string;
  expires_in: number;
  refresh_token: number;
  refresh_expires_in: number;
  url: string;
  client_id: string;
  realmId: string;
  firstName: string;
  lastName: string;
  userId: string;
}

export interface AuthConfig {
  url: string;
  realmId: string;
  clientId: string;
  username: string;
  password: string;
}

export interface MetamindWP {
  api: {
    url: string
  },
  story: {
    id: string,
    locale: string,
    timeZone: string,
    initParams?: string
  },
  auth: {
    url: string,
    realmId: string,
    clientId: string,
    username: string,
    password: string
  },
  widget: {
    avatar: string
  }
}

export interface MessageData {
  key: string,
  content: string,
  from: "USER" | "BOT"
}