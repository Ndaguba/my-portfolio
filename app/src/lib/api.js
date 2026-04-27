const getBaseUrl = () => {
  return process.env.REACT_APP_API_URL || '';
};

export const apiFetch = async (endpoint, options = {}) => {
  const url = `${getBaseUrl()}${endpoint}`;
  return fetch(url, options);
};
