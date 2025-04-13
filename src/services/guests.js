class GuestsService {
  getData = async () => {
    try {
      const response = await fetch(
        `${process.env.PUBLIC_URL}/data/guests.json`
      );
      if (!response.ok) {
        throw new Error("Error al obtener datos");
      }

      const text = await response.text();
      console.log("Respuesta de la API:", text);

      const data = JSON.parse(text);
      return data.Invitados;
    } catch (error) {
      console.error("Error en la API:", error);
      throw error;
    }
  };
}

const guestsService = new GuestsService();
export default guestsService;
