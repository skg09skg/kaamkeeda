import { fetchCall } from '../utils/ajax';
import { API_CONSTANTS, API_METHODS } from '../constants/api-constants';


export const TopJobLists = (callback, payload) => {
  const url = `${API_CONSTANTS.TOP_JOB_LISTS}`;
  return fetchCall((response) => {
    callback(response);
  }, url, API_METHODS.GET);
};
