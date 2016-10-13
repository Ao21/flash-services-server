import * as express from "express";
import { MembershipRoutes } from './api/membership/index';
import { RenewalRoutes } from './api/renew_quotes/';

export class Routes {

	router: express.Router;	
	membershipRoutes: MembershipRoutes;
	renewalRoutes: RenewalRoutes
	

	public static bootstrap() {
		return new Routes();
	}

	constructor() {
		this.router = express.Router();
		this.createMembershipRoutes();
		this.createRenewalRoutes();
	}

	createMembershipRoutes() {
		this.membershipRoutes = new MembershipRoutes(this.router);
	}

	createRenewalRoutes() {
		this.renewalRoutes = new RenewalRoutes(this.router);
	}
}

export default Routes;