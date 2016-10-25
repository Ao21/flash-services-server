import * as express from "express";
import RenewQuotes from './renew_quotes.controller';
export class RenewalRoutes {
	router: express.Router;
	renewQuotes: RenewQuotes = new RenewQuotes();

	constructor(rout) {
		this.router = rout;
		this.router.put('/reset', this.renewQuotes.reset);
		this.router.put('/users/me', this.renewQuotes.saveQuote);
		this.router.get('/users/me/quote', this.renewQuotes.retrieve);
		this.router.put('/users/me/offer', this.renewQuotes.offer);
		this.router.put('/users/me/cover/:coverlevel', this.renewQuotes.toggleCoverLevel);
		this.router.put('/users/me/members/:memberId', this.renewQuotes.addMember);
		this.router.delete('/users/me/members/:memberId', this.renewQuotes.removeMember);
	}

}