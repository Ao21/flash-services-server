"use strict";
const motor_controller_1 = require('./motor.controller');
class MotorRoutes {
    constructor(rout) {
        this.motor = new motor_controller_1.default();
        this.router = rout;
        this.router.get('/motor/config', this.motor.getConfig);
        this.router.get('/motor/occupation/all', this.motor.getAllOccupations);
        this.router.get('/motor/occupation/search', this.motor.getOccupation);
        this.router.get('/motor/section/:section', this.motor.getSection);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcGkvbW90b3IvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLG1DQUFrQixvQkFBb0IsQ0FBQyxDQUFBO0FBQ3ZDO0lBSUMsWUFBWSxJQUFJO1FBRmhCLFVBQUssR0FBVSxJQUFJLDBCQUFLLEVBQUUsQ0FBQztRQUcxQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNuQixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDdkUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUN0RSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2xFLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLG1DQUFtQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUVyRixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ25FLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLGlDQUFpQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFekUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNuRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxtQ0FBbUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBRWhGLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLHVEQUF1RCxFQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsc0JBQXNCLENBQUMsQ0FBQTtRQUMxRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxrQ0FBa0MsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzNFLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLGtDQUFrQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDM0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsbUNBQW1DLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUM1RSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxtQ0FBbUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzVFLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLHdDQUF3QyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUM7SUFFckYsQ0FBQztBQUVGLENBQUM7QUEzQlksbUJBQVcsY0EyQnZCLENBQUEiLCJmaWxlIjoiYXBpL21vdG9yL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOltudWxsXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
