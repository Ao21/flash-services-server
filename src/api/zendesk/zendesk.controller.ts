import * as express from 'express';
import * as _ from 'lodash';
let zendesk = require('node-zendesk');

const defaultHelp = {
	"id": 1001,
	"url": "https://theaaireland.zendesk.com/api/v2/help_center/en-ie/articles/214205625-First-Name.json",
	"html_url": "https://theaaireland.zendesk.com/hc/en-ie/articles/214205625-First-Name",
	"author_id": 560309542,
	"comments_disabled": true,
	"label_names": ["motor-journey"],
	"draft": true,
	"promoted": false,
	"position": 0,
	"vote_sum": 0,
	"vote_count": 0,
	"section_id": 201802795,
	"created_at": "2016-11-28T14:20:17Z",
	"updated_at": "2016-11-29T10:27:58Z",
	"name": "First Name",
	"title": "CONGRATS",
	"body": "<p>You found the help!</p>",
	"source_locale": "en-ie",
	"locale": "en-ie",
	"outdated": false,
	"outdated_locales": []
};

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
		console.log(req);
		if (req.params.id === '1001') {
			return res.send(JSON.stringify(defaultHelp));
		}
		res.send(JSON.stringify(_.find(this.articles, (e:any) =>  e.id == req.params.id)));
	}
	
	getAllArticles = (req: express.Request, res: express.Response) => { 
		res.send(JSON.stringify(this.articles));
	}	
}
