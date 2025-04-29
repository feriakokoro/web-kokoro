export const getApiUrl = () => {
  return process.env.REACT_APP_API_URL || "https://backend-kokoro.onrender.com";
};

export const getCachedTimeout = () => {
  return process.env.REACT_APP_CACHE_TIMEOUT || 5 * 60 * 1000;
};
