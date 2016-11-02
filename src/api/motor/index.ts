import * as express from "express";
import Motor from './motor.controller';
export class MotorRoutes {
	router: express.Router;
	motor: Motor = new Motor();

	constructor(rout) {
		this.router = rout;
		this.router.get('/motor/section/:section', this.motor.getSection);
		this.router.get('/motor/section/:section/questions', this.motor.getSectionQuestions);
		
	}

}