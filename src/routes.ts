import * as express from "express";
import { MembershipRoutes } from './api/membership/index';

export class Routes {

	router: express.Router;	
	membershipRoutes: MembershipRoutes;
	

	public static bootstrap() {
		return new Routes();
	}

	constructor() {
		this.router = express.Router();
		this.createMembershipRoutes();
	}

	createMembershipRoutes() {
		this.membershipRoutes = new MembershipRoutes(this.router);
	}
}

export default Routes;