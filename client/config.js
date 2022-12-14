import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();

export const PRODUCTION = publicRuntimeConfig.PRODUCTION;
export const WITHOUT_DOCKER = !publicRuntimeConfig.PRODUCTION
  ? publicRuntimeConfig.WITHOUT_DOCKER
  : 0;
export const APP_DOMAIN = !publicRuntimeConfig.PRODUCTION ? 'localhost' : process.env.APP_DOMAIN;
export const API_BASE_URL_WITHOUT_DOCKER = 'http://localhost:8000';
export const GOOGLE_AUTH_CLIENT_ID = !publicRuntimeConfig.PRODUCTION
  ? process.env.GOOGLE_AUTH_CLIENT_ID_DEVELOPMENT
  : process.env.GOOGLE_AUTH_CLIENT_ID_PRODUCTION;
export const MICROSOFT_AUTH_CLIENT_ID = !publicRuntimeConfig.PRODUCTION
  ? process.env.MICROSOFT_AUTH_CLIENT_ID_DEVELOPMENT
  : process.env.MICROSOFT_AUTH_CLIENT_ID_PRODUCTION;
export const FACEBOOK_AUTH_CLIENT_ID = !publicRuntimeConfig.PRODUCTION
  ? process.env.FACEBOOK_AUTH_CLIENT_ID_DEVELOPMENT
  : process.env.FACEBOOK_AUTH_CLIENT_ID_PRODUCTION;
