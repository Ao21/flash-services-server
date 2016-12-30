"use strict";
const motor_controller_1 = require('./motor.controller');
const motor_quote_controller_1 = require('./motor.quote.controller');
class MotorRoutes {
    constructor(rout) {
        this.motor = new motor_controller_1.default();
        this.quote = new motor_quote_controller_1.default();
        this.router = rout;
        this.router.get('/motor/config', this.motor.getConfig);
        this.router.get('/motor/occupation/all', this.motor.getAllOccupations);
        this.router.get('/motor/occupation/search', this.motor.getOccupation);
        this.router.post('/motor/page/:page', this.quote.sendQuote);
        this.router.get('/motor/quote', this.quote.sendQuote);
        this.router.get('/motor/section/:section', this.motor.getSection);
        this.router.post('/motor/section/:section', this.motor.updateSection);
        this.router.get('/motor/section/:section/questions', this.motor.getSectionQuestions);
        this.router.get('/motor/reference/town/:town', this.motor.getTown);
        this.router.get('/motor/reference/county/:county', this.motor.getCounty);
        this.router.put('/motor/reference/address', this.motor.putAddress);
        this.router.post('/motor/reference/address/selected', this.motor.selectAddress);
        this.router.get('/motor/reference/getVehicleRegistration/:registration', this.motor.getVehicleRegistration);
        this.router.get('/motor/reference/car/make/search', this.motor.getCarMake);
        this.router.get('/motor/reference/car/make/linked', this.motor.getCarMake);
        this.router.get('/motor/reference/car/model/search', this.motor.getCarMake);
        this.router.get('/motor/reference/car/model/linked', this.motor.getCarMake);
        this.router.get('/motor/reference/car/exactModel/search', this.motor.getOccupation);
    }
}
exports.MotorRoutes = MotorRoutes;

//# sourceMappingURL=data:application/json;base64,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
