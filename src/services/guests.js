import { getApiUrl } from "../utils/helper";
import {
  API_FAIL_DESC,
  API_RESPONSE_DESC,
  RESULT_CODE_FAIL_DESC,
} from "../utils/constants";

class GuestsService {
  getData = async () => {
    try {
      const API_URL = getApiUrl();
      const response = await fetch(`${API_URL}/guests`);
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

const guestsService = new GuestsService();
export default guestsService;
