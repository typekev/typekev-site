const throwError = response => {
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
};

export default throwError;
