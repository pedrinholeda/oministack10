const Dev = require("../models/Dev");
const parseStringAsArray = require("../utils/parseStringAsArray");

module.exports = {
  async index(request, response) {
    const { latitude, longitude, techs } = request.query;

    const techsArray = parseStringAsArray(techs);

    const devs = await Dev.find({
      techs: {
        $in: techsArray //encontrar tecnologias dentro do techArray
      },
      location: {
        $near: {
          //encontra objetos perto de uma localização
          $geometry: {
            type: "Point",
            coordinates: [longitude, latitude]
          },
          $maxDistance: 10000 //distancia maxima de 10km
        }
      }
    });
    return response.json({ devs });
  }
};
