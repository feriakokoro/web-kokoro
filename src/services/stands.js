
class StandsService {

  getData = async () => {
    try {
      const response = await fetch(`${process.env.PUBLIC_URL}/data/stands.json`);
      if (!response.ok) {
        throw new Error("Error al obtener datos");
      }

      const text = await response.text();
      console.log('Respuesta de la API:', text);

      const data = JSON.parse(text);
      return data.Stands;
    } catch (error) {
      console.error("Error en la API:", error);
      throw error;
    }
  };
}

export default new StandsService();