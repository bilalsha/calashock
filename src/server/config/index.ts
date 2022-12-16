import * as dotenv from 'dotenv';

dotenv.config();

export enum NodeEnv {
  TEST = 'test',
  DEV = 'development',
}

interface Env {
  env: NodeEnv;
  dummyUrl: string;
  port: number;
}

export const config: Env = {
  env: (process.env.NODE_ENV as NodeEnv) || NodeEnv.DEV,
  dummyUrl: process.env.DUMMY_URL || '',
  port: Number(process.env.PORT) || 8050, // set our port
};
