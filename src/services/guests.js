import { API_FAIL_DESC, API_RESPONSE_DESC, RESULT_CODE_FAIL_DESC } from "../utils/constants";

class GuestsService {
  getData = async () => {
    try {
      const response = await fetch(
        `${process.env.PUBLIC_URL}/data/guests.json`
      );
      if (!response.ok) {
        throw new Error(RESULT_CODE_FAIL_DESC);
      }

      const text = await response.text();
      console.log(API_RESPONSE_DESC, text);

      const data = JSON.parse(text);
      return data.Invitados;
    } catch (error) {
      console.error(API_FAIL_DESC, error);
      throw error;
    }
  };
}

const guestsService = new GuestsService();
export default guestsService;
