export const checkValidity = status => status >= 200 && status < 300;

export const throwError = response => {
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
};

export const checkStatus = response =>
  checkValidity(response.status) ? response : throwError(response);

export const parseJSON = response => response.json();

const request = (...args) =>
  fetch(...args)
    .then(checkStatus)
    .then(parseJSON)
    .catch(error => console.error('request failed', error));

export default request;
