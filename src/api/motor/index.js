"use strict";
const motor_controller_1 = require('./motor.controller');
const motor_quote_controller_1 = require('./motor.quote.controller');
class MotorRoutes {
    constructor(rout) {
        this.motor = new motor_controller_1.default();
        this.quote = new motor_quote_controller_1.default();
        this.router = rout;
        this.router.get('/motor-ux-api/motor/config', this.motor.getConfig);
        this.router.get('/motor-ux-api/reference/occupation/all', this.motor.getAllOccupations);
        this.router.get('/motor-ux-api/reference/employerBusinessType/all', this.motor.getAllOccupations);
        this.router.get('/motor-ux-api/occupation/search', this.motor.getOccupation);
        this.router.post('/motor-ux-api/motor/page/:page', this.motor.updatePage);
        this.router.post('/motor-ux-api/motor/update', this.motor.updateQuote);
        this.router.get('/motor-ux-api/motor/quote', this.quote.sendQuote);
        this.router.get('/motor-ux-api/myaa/email/:email', this.motor.checkMyAAEmail);
        this.router.post('/motor-ux-api/myaa/login', this.motor.loginToMyAA);
        this.router.get('/motor-ux-api/motor/section/:section', this.motor.getSection);
        this.router.post('/motor-ux-api/motor/section/:section', this.motor.updateSection);
        this.router.get('/motor-ux-api/motor/section/:section/questions', this.motor.getSectionQuestions);
        this.router.get('/motor-ux-api/reference/area/:town', this.motor.getTown);
        this.router.get('/motor-ux-api/reference/county/:county', this.motor.getCounty);
        this.router.get('/motor-ux-api/reference/country/:county', this.motor.getCounty);
        this.router.put('/motor-ux-api/motor/reference/address', this.motor.putAddress);
        this.router.post('/motor-ux-api/motor/reference/address/selected', this.motor.selectAddress);
        this.router.get('/motor-ux-api/motor/reference/firstvehicle/:registration', this.motor.getVehicleRegistration);
        this.router.get('/motor-ux-api/motor/reference/secondvehicle/:registration', this.motor.getVehicleRegistration);
        this.router.get('/motor-ux-api/reference/vehicle/make/all', this.motor.getCarMake);
        this.router.get('/motor-ux-api/reference/vehicle/make/linked', this.motor.getCarMake);
        this.router.get('/motor-ux-api/reference/vehicle/model/search', this.motor.getCarMake);
        this.router.get('/motor-ux-api/reference/vehicle/model/linked', this.motor.getCarMake);
        this.router.get('/motor-ux-api/reference/vehicle/exactModel/search', this.motor.getOccupation);
        this.router.post('/motor-ux-api/motor/reference/manualCarDetails', this.motor.setCarDetails);
        this.router.post('/motor-ux-api/motor/reference/manualCarTag', this.motor.setCarTag);
        this.router.put('/motor-ux-api/motor/reference/firstvehicle/selected/:id', this.motor.selectCar);
        this.router.put('/motor-ux-api/motor/reference/secondvehicle/selected/:id', this.motor.selectCar);
        this.router.post('/motor-ux-api/motor/reference/bankVerification', this.motor.checkBankVerification);
        this.router.put('/motor-ux-api/motor/reference/additional', this.motor.checkBankVerification);
        this.router.put('/motor-ux-api/quote-selection', this.motor.checkBankVerification);
        this.router.get('/motor-ux-api/motor/retrieveQuote', this.motor.retrieveQuote);
        this.router.get('/motor-ux-api/reference/checkAAStatus/:id', this.quote.checkAAMembership);
        this.router.put('/motor-ux-api/error', this.motor.triggerFormError);
    }
}
exports.MotorRoutes = MotorRoutes;

//# sourceMappingURL=data:application/json;base64,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QUFNLENBQUMsR0FBRyxDQUFDLDBDQUEwQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUU5RixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQywrQkFBK0IsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFFbkYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsbUNBQW1DLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUUvRSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQywyQ0FBMkMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFFM0YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMscUJBQXFCLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBS3JFLENBQUM7QUFFRixDQUFDO0FBOURZLG1CQUFXLGNBOER2QixDQUFBIiwiZmlsZSI6ImFwaS9tb3Rvci9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbbnVsbF0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
