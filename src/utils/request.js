import checkStatus from 'utils/checkStatus';
import parseJSON from 'utils/parseJSON';

export const logError = error => console.error('request failed', error);

const request = (...args) =>
  fetch(...args)
    .then(checkStatus)
    .then(parseJSON);

export default request;
