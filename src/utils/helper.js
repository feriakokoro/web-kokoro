export const getApiUrl = () => {
  return process.env.REACT_APP_API_URL || "https://backend-kokoro.onrender.com";
};
