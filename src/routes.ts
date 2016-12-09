import * as express from "express";
import { MembershipRoutes } from './api/membership/index';
import { RenewalRoutes } from './api/renew_quotes/';
import { MotorRoutes } from './api/motor/';
import { ZendeskRoutes } from './api/zendesk/';

export class Routes {

	router: express.Router;	
	membershipRoutes: MembershipRoutes;
	renewalRoutes: RenewalRoutes;
	motorRoutes: MotorRoutes;
	zendeskRoutes: ZendeskRoutes;
	

	public static bootstrap() {
		return new Routes();
	}

	constructor() {
		this.router = express.Router();
		this.createMembershipRoutes();
		this.createRenewalRoutes();
		this.createMotorRoutes();
		this.createZendeskRoutes();
	}

	createMembershipRoutes() {
		this.membershipRoutes = new MembershipRoutes(this.router);
	}

	createRenewalRoutes() {
		this.renewalRoutes = new RenewalRoutes(this.router);
	}

	createMotorRoutes() {
		this.motorRoutes = new MotorRoutes(this.router);
	}

	createZendeskRoutes() {
		this.zendeskRoutes = new ZendeskRoutes(this.router);
	}
}

export default Routes;