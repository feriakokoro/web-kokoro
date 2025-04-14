import {
  API_FAIL_DESC,
  API_RESPONSE_DESC,
  RESULT_CODE_FAIL_DESC,
} from "../utils/constants";

class StandsService {
  getData = async () => {
    try {
      const response = await fetch(
        `${process.env.PUBLIC_URL}/data/stands.json`
      );
      if (!response.ok) {
        throw new Error(RESULT_CODE_FAIL_DESC);
      }

      const text = await response.text();
      console.log(API_RESPONSE_DESC, text);

      const data = JSON.parse(text);
      return data.Stands;
    } catch (error) {
      console.error(API_FAIL_DESC, error);
      throw error;
    }
  };
}

const standsService = new StandsService();

export default standsService;
