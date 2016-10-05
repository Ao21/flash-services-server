import * as express from "express";
import Membership from './membership.controller';
export class MembershipRoutes {
	router: express.Router;

	constructor(rout) {
		this.router = rout;
		this.router.get('/config', Membership.getConfig);
	}

}