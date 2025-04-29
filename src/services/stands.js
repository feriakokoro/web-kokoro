import { getApiUrl, getCachedTimeout } from "../utils/helper";
import {
  API_ABORT_DESC,
  API_FAIL_DESC,
  API_RESPONSE_DESC,
  RESULT_CODE_FAIL_DESC,
} from "../utils/constants";

class StandsService {
  constructor() {
    this.cache = new Map();
    this.cacheTimeout = getCachedTimeout();
    this.apiUrl = `${getApiUrl()}/stands`;
  }
  getData = async () => {
    try {
      const cachedData = this.cache.get("stands");
      if (cachedData && Date.now() - cachedData.timestamp < this.cacheTimeout) {
        return cachedData.data;
      }

      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 5000);

      const response = await fetch(this.apiUrl, {
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(RESULT_CODE_FAIL_DESC);
      }
      const data = await response.json();
      this.cache.set("stands", { data, timestamp: Date.now() });
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

const standsService = new StandsService();

export default standsService;
