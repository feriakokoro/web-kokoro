import {
  API_FAIL_DESC,
  API_RESPONSE_DESC,
  RESULT_CODE_FAIL_DESC,
} from "../utils/constants";

class GalleryService {
  getData = async () => {
    try {
      const API_URL =
        process.env.REACT_APP_API_URL || "https://backend-kokoro.onrender.com";
      const response = await fetch(`${API_URL}/gallery`);
      if (!response.ok) {
        throw new Error(RESULT_CODE_FAIL_DESC);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(API_FAIL_DESC, error);
      throw error;
    }
  };
}

const galleryService = new GalleryService();
export default galleryService;