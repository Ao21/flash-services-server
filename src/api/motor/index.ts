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
		this.router.get('/motor-ux-api/reference/occupation/all', this.motor.getAllOccupations);
		this.router.get('/motor-ux-api/reference/employerBusinessType/all', this.motor.getAllOccupations);
		this.router.get('/motor-ux-api/occupation/search', this.motor.getOccupation);
		
		this.router.post('/motor-ux-api/motor/page/:page', this.motor.updatePage);
		this.router.post('/motor-ux-api/motor/update', this.motor.updateQuote);
		this.router.get('/motor-ux-api/motor/quote', this.quote.sendQuote)
		this.router.get('/motor-ux-api/motor/quote/:id', this.motor.getError)
		
		this.router.get('/motor-ux-api/myaa/email/:email', this.motor.checkMyAAEmail);
		this.router.post('/motor-ux-api/myaa/login', this.motor.loginToMyAA);

		this.router.get('/motor-ux-api/motor/section/:section', this.motor.getSection);
		this.router.post('/motor-ux-api/motor/section/:section', this.motor.updateSection);
		this.router.get('/motor-ux-api/motor/section/:section/questions', this.motor.getSectionQuestions);

		this.router.get('/motor-ux-api/reference/area/linked', this.motor.getLinkedTown);
		this.router.get('/motor-ux-api/reference/area/:town', this.motor.getTown);

		

		this.router.get('/motor-ux-api/reference/county/:county', this.motor.getCounty);
		this.router.get('/motor-ux-api/reference/country/:county', this.motor.getCounty);

		this.router.get('/motor-ux-api/reference/areaCarUsed/:query', this.motor.getCounty);
		
		this.router.put('/motor-ux-api/motor/reference/address', this.motor.putAddress);
		this.router.post('/motor-ux-api/motor/reference/address/selected', this.motor.selectAddress);

		this.router.get('/motor-ux-api/motor/reference/firstvehicle/:registration', this.motor.getVehicleRegistration)	
		this.router.get('/motor-ux-api/motor/reference/secondvehicle/:registration', this.motor.getVehicleRegistration)	
		
		this.router.get('/motor-ux-api/motor/reference/vehicle/:id', this.motor.checkVehicle);

		this.router.get('/motor-ux-api/reference/vehicle/make/all', this.motor.getCarMake);
		this.router.get('/motor-ux-api/reference/vehicle/make/linked', this.motor.getCarMake);
		this.router.get('/motor-ux-api/reference/vehicle/model/search', this.motor.getCarMake);
		this.router.get('/motor-ux-api/reference/vehicle/model/linked', this.motor.getCarMake);
		this.router.get('/motor-ux-api/reference/vehicle/exactModel/search', this.motor.getOccupation);

		this.router.post('/motor-ux-api/motor/reference/manualCarDetails', this.motor.setCarDetails)
		this.router.post('/motor-ux-api/motor/reference/manualCarTag', this.motor.setCarTag);
		
		this.router.put('/motor-ux-api/motor/reference/firstvehicle/selected/:id', this.motor.selectCar);
		this.router.put('/motor-ux-api/motor/reference/secondvehicle/selected/:id', this.motor.selectCar);

		this.router.post('/motor-ux-api/motor/reference/bankVerification', this.motor.getError);

		this.router.put('/motor-ux-api/motor/reference/additional', this.motor.checkBankVerification);

		this.router.put('/motor-ux-api/quote-selection', this.motor.checkBankVerification);

		this.router.get('/motor-ux-api/motor/retrieveQuote', this.motor.getError);

	

		this.router.post('/motor-ux-api/membership-purchase', this.quote.addAAMembership);
		this.router.delete('/motor-ux-api/membership-purchase', this.quote.removeAAMembership);
		
		this.router.get('/motor-ux-api/membership/:id', this.motor.getError);
		

		this.router.put('/motor-ux-api/error', this.motor.triggerFormError);


		
	}

}