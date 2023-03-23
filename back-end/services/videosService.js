const axios = require("axios");
const axiosInstance = axios.create({
  baseURL: "https://challenge.lexicondigital.com.au/api/v2/",
  timeout: 10000,
  headers: { "x-api-key": process.env.API_KEY },
});

const Service = {
  list(api) {
    return axiosInstance
      .get(api)
      .then(async function (response) {
        // handle success
        return response.data.Movies;
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        return null;
      })
      .finally(function () {
        // always executed
      });
  },
};

exports.Service = Service;