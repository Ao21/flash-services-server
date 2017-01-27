import * as express from "express";
import Zendesk from './zendesk.controller';
export class ZendeskRoutes {
	router: express.Router;
	zendesk: Zendesk = new Zendesk();

	constructor(rout) {
		this.router = rout;
		this.router.get('/motor-ux-api/zendesk/search/:search', this.zendesk.search);
		this.router.get('/motor-ux-api/zendesk/article/:id', this.zendesk.getArticleById);
		this.router.get('/motor-ux-api/zendesk/articles', this.zendesk.getAllArticles);
	}

}