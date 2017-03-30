import * as express from "express";
import Motor from './motor.controller';
import MotorQuote from './motor.quote.controller';
export class MotorRoutes {
	router: express.Router;
	motor: Motor = new Motor();
	quote: MotorQuote = new MotorQuote();

	constructor(rout) {
		this.router = rout;
		this.router.get('/motor-ux-api/motor/config', this.motor.getConfig);
		this.router.get('/motor-ux-api/motor/occupation/all', this.motor.getAllOccupations);
		this.router.get('/motor-ux-api/motor/occupation/search', this.motor.getOccupation);
		
		this.router.post('/motor-ux-api/motor/page/:page', this.motor.updatePage);
		this.router.post('/motor-ux-api/motor/update', this.motor.updateQuote);
		this.router.get('/motor-ux-api/motor/quote', this.quote.sendQuote)
		
		this.router.get('/motor-ux-api/myaa/email/:email', this.motor.checkMyAAEmail);
		this.router.post('/motor-ux-api/myaa/login', this.motor.loginToMyAA);

		this.router.get('/motor-ux-api/motor/section/:section', this.motor.getSection);
		this.router.post('/motor-ux-api/motor/section/:section', this.motor.updateSection);
		this.router.get('/motor-ux-api/motor/section/:section/questions', this.motor.getSectionQuestions);

		this.router.get('/motor-ux-api/motor/reference/town/:town', this.motor.getTown);
		this.router.get('/motor-ux-api/motor/reference/county/:county', this.motor.getCounty);
		
		this.router.put('/motor-ux-api/motor/reference/address', this.motor.putAddress);
		this.router.post('/motor-ux-api/motor/reference/address/selected', this.motor.selectAddress);

		this.router.get('/motor-ux-api/motor/reference/getVehicleRegistration/:registration',this.motor.getVehicleRegistration)		
		this.router.get('/motor-ux-api/motor/reference/car/make/search', this.motor.getCarMake);
		this.router.get('/motor-ux-api/motor/reference/car/make/linked', this.motor.getCarMake);
		this.router.get('/motor-ux-api/motor/reference/car/model/search', this.motor.getCarMake);
		this.router.get('/motor-ux-api/motor/reference/car/model/linked', this.motor.getCarMake);
		this.router.get('/motor-ux-api/motor/reference/car/exactModel/search', this.motor.getOccupation);

		this.router.post('/motor-ux-api/motor/reference/manualCarDetails', this.motor.setCarDetails)
		this.router.post('/motor-ux-api/motor/reference/manualCarTag', this.motor.setCarTag);

		this.router.post('/motor-ux-api/motor/reference/bankVerification', this.motor.checkBankVerification);

		this.router.get('/motor-ux-api/motor/retrieveQuote', this.motor.retrieveQuote);



		
	}

}