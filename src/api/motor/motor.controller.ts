import * as express from 'express';
import * as _ from 'lodash';
import { QUESTIONS, PAGES, CONFIG } from './../../constants_motor';
import { OCCUPATIONS } from './../../constants_occupations';
import { TOWNS, COUNTIES, GEOCODE, GEOCODE_SELECTED } from './../../constants_address';
import * as Fuse from 'fuse.js';

export default class Motor {
	fuseList: Fuse;
	countiesList: Fuse;
	townList: Fuse;

	constructor() {
		this.fuseList = new Fuse(OCCUPATIONS, {
			shouldSort: true,
			location: 0,
			threshold: 0.2,
			distance: 100,
			keys: ['text']
		});

		this.countiesList = new Fuse(COUNTIES, {
			shouldSort: true,
			location: 0,
			threshold: 0.2,
			distance: 100,
			keys: ['text']
		});

		this.townList = new Fuse(TOWNS, {
			shouldSort: true,
			location: 0,
			threshold: 0.2,
			distance: 100,
			keys: ['text']
		});
	}

	getConfig(req: express.Request, res: express.Response) { 
		res.send(CONFIG);
	}	
	getAllOccupations(req: express.Request, res: express.Response) {
		res.send(JSON.stringify(OCCUPATIONS));
	}

	getOccupation = (req: express.Request, res: express.Response) => {
		let list = this.fuseList.search(req.query.query);
		res.send(JSON.stringify(list));
	}

	getSection(req: express.Request, res: express.Response) {
		let section = PAGES[req.params.section];
		res.send(JSON.stringify(section)).status(200);
	}

	getSectionQuestions(req: express.Request, res: express.Response) {
		let sectionQuestions = QUESTIONS[req.params.section];
		res.send(JSON.stringify(sectionQuestions)).status(200);
	}

	/** Address Calls */

	getTown = (req: express.Request, res: express.Response) => {
		let list = this.townList.search(req.query.query);
		res.send(JSON.stringify(list));
	}
	getCounty = (req: express.Request, res: express.Response) => {
		let list = this.countiesList.search(req.query.query);
		res.send(JSON.stringify(list));
	}
	
	putAddress = (req: express.Request, res: express.Response) => { 
		res.send(JSON.stringify(GEOCODE));
	}

	selectAddress = (req: express.Request, res: express.Response) => {
		res.send(JSON.stringify(GEOCODE_SELECTED));
	}
	
}