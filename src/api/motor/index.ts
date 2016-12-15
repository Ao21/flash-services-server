import * as express from "express";
import Motor from './motor.controller';
export class MotorRoutes {
	router: express.Router;
	motor: Motor = new Motor();

	constructor(rout) {
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

		this.router.get('/motor/reference/car/make', this.motor.getAllOccupations);
		this.router.get('/motor/reference/car/model', this.motor.getAllOccupations);
		this.router.get('/motor/reference/car/exactModel', this.motor.getAllOccupations);
		
	}

}