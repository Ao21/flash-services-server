import * as express from 'express';
import * as _ from 'lodash';
let zendesk = require('node-zendesk');

export default class ZendeskController {
	client: any;
	articles;

	isArticlesLoaded: boolean = false;

	constructor() {
		this.client = zendesk.createClient({
			username: 'vicky.sargeant@theaa.ie',
			token: 'sU9puhOh6NhZOHqYP2x5dOcyRi7rKsGlmvQJ8804',
			remoteUri: 'https://theaaireland.zendesk.com/api/v2/help_center/',
			helpcenter: true,
		})

		this.client.articles.list((err, req, res) => {
			this.articles = res;
			this.isArticlesLoaded = true;
		})
	}

	search = (req: express.Request, res: express.Response) => {
		let els = _.filter(this.articles, (e: any) => { return e.draft == true });
		res.send(JSON.stringify(els));
	}

	getArticleById = (req: express.Request, res: express.Response) => {
		res.send(JSON.stringify(_.find(this.articles, (e:any) =>  e.id == req.params.id)));
	}
	
	getAllArticles = (req: express.Request, res: express.Response) => { 
		res.send(JSON.stringify(this.articles));
	}	
}
