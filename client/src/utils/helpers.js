import { APP_DOMAIN } from '@/root/config';

export const generateKey = (length = 16) => {
  var result = '';
  var characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!?.><,=-)(*&^%$#@!~';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

export const websocketApiRoute = (url) => {
  return `ws://${APP_DOMAIN}${url}`;
};
