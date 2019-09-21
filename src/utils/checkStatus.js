import checkValidity from 'utils/checkValidity';
import throwError from 'utils/throwError';

const checkStatus = response => (checkValidity(response.status) ? response : throwError(response));

export default checkStatus;
