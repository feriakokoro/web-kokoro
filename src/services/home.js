import {
  API_FAIL_DESC,
  RESULT_CODE_FAIL_DESC,
} from "../utils/constants";

class HomeService {
  getData = async () => {
    try {
      const response = await fetch(`${process.env.PUBLIC_URL}/data/home.json`);
      if (!response.ok) {
        throw new Error(RESULT_CODE_FAIL_DESC);
      }
      const text = await response.text();

      const data = JSON.parse(text);
      return data;
    } catch (error) {
      console.error(API_FAIL_DESC, error);
      throw error;
    }
  };
}

const homeService = new HomeService();
export default homeService;
