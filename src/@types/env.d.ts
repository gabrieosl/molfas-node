/* eslint-disable @typescript-eslint/naming-convention */
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      APP_SECRET: string;
      MAIL_DRIVER: string;
      NODE_ENV: 'development' | 'production';
    }
  }
}

export {};
