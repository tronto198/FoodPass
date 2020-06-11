import { firebase } from '../firebase/firebase.config';
import { host } from './host.config';
export const environment = {
  production: true,
  firebase: firebase,
  host: host
};
