import { getApiUrl, getCachedTimeout } from "../utils/helper";
import {
  API_ABORT_DESC,
  API_FAIL_DESC,
  RESULT_CODE_FAIL_DESC,
} from "../utils/constants";

class ActivityService {
  constructor() {
    this.isLoading = false;
    this.pendingPromise = null;
    this.cache = new Map();
    this.cacheName = "activity";
    this.cacheTimeout = getCachedTimeout();
    this.apiUrl = `${getApiUrl()}/activity`;
  }

  getData = async () => {
    try {
      const cachedData = this.cache.get(this.cacheName);
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
          this.cache.set(this.cacheName, { data, timestamp: Date.now() });
          const structuredData = this.validateAndStructureData(data);
          this.cache.set(this.cacheName, {
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

  validateAndStructureData(dataArray) {
    if (!Array.isArray(dataArray)) {
      console.error("Se esperaba un array de actividades");
      return [];
    }
    return dataArray
      .map((data) => {
        if (!data || typeof data !== "object") {
          console.warn("Actividad inválida en el array:", data);
          return null;
        }

        return {
          cardDetails: {
            icon: data.cardDetails?.icon || "fa-book",
            registrationDate: data.cardDetails?.registrationDate || "",
            title: data.cardDetails?.title || "",
          },
          descriptions: Array.isArray(data.descriptions)
            ? data.descriptions
            : [],
          exhibitors: Array.isArray(data.exhibitors) ? data.exhibitors : [],
          capacity: data.capacity || "0",
          urlPost: data.urlPost || "",
          urlForm: data.urlForm || "",
          tags: Array.isArray(data.tags) ? data.tags : [],
        };
      })
      .filter((item) => item !== null);
  }
}

const activityService = new ActivityService();
export default activityService;
