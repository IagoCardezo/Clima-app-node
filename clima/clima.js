const axios = require("axios");

const getClima = async (lat, lng) => {
  const resp = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=0db7f42bdb6a92a39f9c126a1691d419&units=metric`
  );

  return resp.data.main.temp;
};

module.exports = {
  getClima
};
