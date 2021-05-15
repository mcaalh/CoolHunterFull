declare namespace NodeJS {
  export interface ProcessEnv {
    HOST: string;
    DB_URL: string;
    DB_NAME?: string;
    API_URL: string;
    PORT: number;
    CLIENT_URL: string;
    DATABASE_CLOUD: string;
    DATABASE_LOCAL: string;
  }
}