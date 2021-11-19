/* eslint-disable prettier/prettier */
const { Router } = require('express');

const SensorController = require('./controllers/sensor/SensorController')
const ActuatorController = require('./controllers/actuator/ActuatorController')

const routes = Router();

routes.post('/sensores', SensorController.store);
routes.get('/sensores/all', SensorController.index);
routes.get('/sensores/today', SensorController.indextoday);
routes.get('/sensores/week', SensorController.indexweek);
routes.get('/sensores/month', SensorController.indexmonth);
routes.get('/sensores/year', SensorController.indexyear);

// ---------------------------------------------------------------------------------------//

/// ///////////atuadores
routes.post('/actuator', ActuatorController.active)
routes.get('/actuator', ActuatorController.index)
routes.put('/actuator/:actuator_id', ActuatorController.update)

module.exports = routes;
