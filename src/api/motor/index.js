"use strict";
const motor_controller_1 = require('./motor.controller');
const motor_quote_controller_1 = require('./motor.quote.controller');
class MotorRoutes {
    constructor(rout) {
        this.motor = new motor_controller_1.default();
        this.quote = new motor_quote_controller_1.default();
        this.router = rout;
        this.router.get('/motor-ux-api/motor/config', this.motor.getConfig);
        this.router.get('/motor-ux-api/motor/occupation/all', this.motor.getAllOccupations);
        this.router.get('/motor-ux-api/motor/occupation/search', this.motor.getOccupation);
        this.router.post('/motor-ux-api/motor/page/:page', this.motor.updatePage);
        this.router.post('/motor-ux-api/motor/update', this.motor.updateQuote);
        this.router.get('/motor-ux-api/motor/quote', this.quote.sendQuote);
        this.router.get('/motor-ux-api/myaa/email/:email', this.motor.checkMyAAEmail);
        this.router.post('/motor-ux-api/myaa/login', this.motor.loginToMyAA);
        this.router.get('/motor-ux-api/motor/section/:section', this.motor.getSection);
        this.router.post('/motor-ux-api/motor/section/:section', this.motor.updateSection);
        this.router.get('/motor-ux-api/motor/section/:section/questions', this.motor.getSectionQuestions);
        this.router.get('/motor-ux-api/motor/reference/town/:town', this.motor.getTown);
        this.router.get('/motor-ux-api/motor/reference/county/:county', this.motor.getCounty);
        this.router.put('/motor-ux-api/motor/reference/address', this.motor.putAddress);
        this.router.post('/motor-ux-api/motor/reference/address/selected', this.motor.selectAddress);
        this.router.get('/motor-ux-api/motor/reference/firstvehicle/:registration', this.motor.getVehicleRegistration);
        this.router.get('/motor-ux-api/motor/reference/secondvehicle/:registration', this.motor.getVehicleRegistration);
        this.router.get('/motor-ux-api/motor/reference/car/make/search', this.motor.getCarMake);
        this.router.get('/motor-ux-api/motor/reference/car/make/linked', this.motor.getCarMake);
        this.router.get('/motor-ux-api/motor/reference/car/model/search', this.motor.getCarMake);
        this.router.get('/motor-ux-api/motor/reference/car/model/linked', this.motor.getCarMake);
        this.router.get('/motor-ux-api/motor/reference/car/exactModel/search', this.motor.getOccupation);
        this.router.post('/motor-ux-api/motor/reference/manualCarDetails', this.motor.setCarDetails);
        this.router.post('/motor-ux-api/motor/reference/manualCarTag', this.motor.setCarTag);
        this.router.put('/motor-ux-api/motor/reference/firstvehicle/selected/:id', this.motor.selectCar);
        this.router.put('/motor-ux-api/motor/reference/secondvehicle/selected/:id', this.motor.selectCar);
        this.router.post('/motor-ux-api/motor/reference/bankVerification', this.motor.checkBankVerification);
        this.router.get('/motor-ux-api/motor/retrieveQuote', this.motor.retrieveQuote);
    }
}
exports.MotorRoutes = MotorRoutes;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcGkvbW90b3IvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLG1DQUFrQixvQkFBb0IsQ0FBQyxDQUFBO0FBQ3ZDLHlDQUF1QiwwQkFBMEIsQ0FBQyxDQUFBO0FBQ2xEO0lBS0MsWUFBWSxJQUFJO1FBSGhCLFVBQUssR0FBVSxJQUFJLDBCQUFLLEVBQUUsQ0FBQztRQUMzQixVQUFLLEdBQWUsSUFBSSxnQ0FBVSxFQUFFLENBQUM7UUFHcEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDbkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsNEJBQTRCLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNwRSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxvQ0FBb0MsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsdUNBQXVDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUVuRixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxnQ0FBZ0MsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLDRCQUE0QixFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDdkUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsMkJBQTJCLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQTtRQUVsRSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxpQ0FBaUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQzlFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLDBCQUEwQixFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFckUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsc0NBQXNDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMvRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxzQ0FBc0MsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ25GLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLGdEQUFnRCxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUVsRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQywwQ0FBMEMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2hGLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLDhDQUE4QyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFdEYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsdUNBQXVDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNoRixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxnREFBZ0QsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBRTdGLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLDBEQUEwRCxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsc0JBQXNCLENBQUMsQ0FBQTtRQUM5RyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQywyREFBMkQsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLHNCQUFzQixDQUFDLENBQUE7UUFFL0csSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsK0NBQStDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN4RixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQywrQ0FBK0MsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3hGLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLGdEQUFnRCxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDekYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsZ0RBQWdELEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN6RixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxxREFBcUQsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBRWpHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGdEQUFnRCxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUE7UUFDNUYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsNENBQTRDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUVyRixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyx5REFBeUQsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2pHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLDBEQUEwRCxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFbEcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0RBQWdELEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBRXJHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLG1DQUFtQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUM7SUFLaEYsQ0FBQztBQUVGLENBQUM7QUFwRFksbUJBQVcsY0FvRHZCLENBQUEiLCJmaWxlIjoiYXBpL21vdG9yL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOltudWxsXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
