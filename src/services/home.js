import { getApiUrl, getCachedTimeout } from "../utils/helper";
import {
  API_ABORT_DESC,
  API_FAIL_DESC,
  RESULT_CODE_FAIL_DESC,
} from "../utils/constants";

class HomeService {
  constructor() {
    this.isLoading = false;
    this.pendingPromise = null;
    this.cache = new Map();
    this.cacheTimeout = getCachedTimeout();
    this.apiUrl = `${getApiUrl()}/home`;
  }
  getData = async () => {
    try {
      const cachedData = this.cache.get("home");
      if (cachedData && Date.now() - cachedData.timestamp < this.cacheTimeout) {
        return cachedData.data;
      }

      if (this.isLoading) {
        return this.pendingPromise;
      }

      this.isLoading = true;
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000);

      this.pendingPromise = fetch(this.apiUrl, {
        signal: controller.signal,
      })
        .then((response) => {
          clearTimeout(timeoutId);
          if (!response.ok) {
            throw new Error(RESULT_CODE_FAIL_DESC);
          }
          return response.json();
        })
        .then((data) => {
          this.cache.set("home", { data, timestamp: Date.now() });
          const structuredData = {
            pastEvents: Array.isArray(data.pastEvents) ? data.pastEvents : [],
            news: Array.isArray(data.news) ? data.news : [],
            location:
              data.location && typeof data.location === "object"
                ? data.location
                : {},
          };
          this.cache.set("home", {
            data: structuredData,
            timestamp: Date.now(),
          });
          return structuredData;
        })
        .finally(() => {
          this.isLoading = false;
          this.pendingPromise = null;
        });

      return this.pendingPromise;
    } catch (error) {
      if (error.name === "AbortError") {
        throw new Error(API_ABORT_DESC);
      }
      console.error(API_FAIL_DESC, error);
      throw error;
    }
  };
}

const homeService = new HomeService();
export default homeService;
