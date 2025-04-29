import { getApiUrl, getCachedTimeout } from "../utils/helper";
import {
  API_ABORT_DESC,
  API_FAIL_DESC,
  API_RESPONSE_DESC,
} from "../utils/constants";

class GalleryService {
  constructor() {
    this.cache = new Map();
    this.cacheTimeout = getCachedTimeout();
    this.apiUrl = `${getApiUrl()}/gallery`;
  }

  getData = async () => {
    try {
      const cachedData = this.cache.get("gallery");
      if (cachedData && Date.now() - cachedData.timestamp < this.cacheTimeout) {
        return cachedData.data;
      }

      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 5000);

      const response = await fetch(this.apiUrl, {
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      const data = await response.json();
      this.cache.set("gallery", { data, timestamp: Date.now() });
      console.log(API_RESPONSE_DESC, data);
      return data;
    } catch (error) {
      if (error.name === "AbortError") {
        throw new Error(API_ABORT_DESC);
      }
      console.error(API_FAIL_DESC, error);
      throw error;
    }
  };
}

const galleryService = new GalleryService();
export default galleryService;
