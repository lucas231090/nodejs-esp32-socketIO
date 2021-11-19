const {
  startOfDay,
  endOfDay,
  startOfWeek,
  endOfWeek,
  startOfMonth,
  endOfMonth,
  startOfYear,
  endOfYear,
} = require('date-fns');

const current = new Date();
const Sensor = require('../../models/Sensor');

module.exports = {
  async index(request, response) {
    const sensores = await Sensor.find();

    return response.json(sensores);
  },

  async indextoday(request, response) {
    const sensores = await Sensor.find({
      timestamp: { $gte: startOfDay(current), $lte: endOfDay(current) },
    });

    return response.status(200).json(sensores);
  },

  async indexweek(request, response) {
    const sensores = await Sensor.find({
      timestamp: { $gte: startOfWeek(current), $lte: endOfWeek(current) },
    });

    return response.status(200).json(sensores);
  },

  async indexmonth(request, response) {
    const sensores = await Sensor.find({
      timestamp: { $gte: startOfMonth(current), $lte: endOfMonth(current) },
    });

    return response.status(200).json(sensores);
  },

  async indexyear(request, response) {
    const sensores = await Sensor.find({
      timestamp: { $gte: startOfYear(current), $lte: endOfYear(current) },
    });

    return response.status(200).json(sensores);
  },

  async store(request, response) {
    const {
      user_id,
      tipoMedida1,
      tipoMedida2,
      unidadeMedida1,
      unidadeMedida2,
      modeloSensor,
      valor1,
      valor2,
      ipArduino,
    } = request.body;

    const sensores = await Sensor.create({
      user_id,
      tipoMedida1,
      tipoMedida2,
      unidadeMedida1,
      unidadeMedida2,
      modeloSensor,
      valor1,
      valor2,
      ipArduino,
    });

    return response.json({ sensores });
  },
};
