import {
  API_FAIL_DESC,
  API_RESPONSE_DESC,
  RESULT_CODE_FAIL_DESC,
} from "../utils/constants";

class GalleryService {
  getData = async () => {
    try {
      const response = await fetch(
        'https://backend-kokoro.onrender.com/gallery'
      );
      if (!response.ok) {
        throw new Error(RESULT_CODE_FAIL_DESC);
      }

      const data = await response.json();
      console.log(API_RESPONSE_DESC, data);
      return data;
    } catch (error) {
      console.error(API_FAIL_DESC, error);
      throw error;
    }
  };
}

const galleryService = new GalleryService();
export default galleryService;
