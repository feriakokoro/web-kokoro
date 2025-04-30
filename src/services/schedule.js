import { getApiUrl, getCachedTimeout } from "../utils/helper";
import {
  API_ABORT_DESC,
  API_FAIL_DESC,
  RESULT_CODE_FAIL_DESC,
} from "../utils/constants";

class ScheduleService {
  constructor() {
    this.cache = new Map();
    this.cacheTimeout = getCachedTimeout();
    this.apiUrl = `${getApiUrl()}/schedule`;
  }

  getData = async () => {
    try {
      const cachedData = this.cache.get("schedule");
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
      this.cache.set("schedule", { data, timestamp: Date.now() });
      
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

const scheduleService = new ScheduleService();
export default scheduleService;
