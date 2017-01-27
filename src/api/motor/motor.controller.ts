import * as express from 'express';
import * as _ from 'lodash';
import { QUESTIONS, PAGES, CONFIG } from './../../constants_motor';
import { OCCUPATIONS } from './../../constants_occupations';
import { TOWNS, COUNTIES, GEOCODE, GEOCODE_SELECTED } from './../../constants_address';
import { CARMAKES } from './../../constants_carmakes';
import * as Fuse from 'fuse.js';


import { QUOTE } from './../../sixto_consts';

export default class Motor {
	fuseList: Fuse;
	countiesList: Fuse;
	townList: Fuse;
	carList: Fuse;

	constructor() {
		this.fuseList = new Fuse(OCCUPATIONS, {
			shouldSort: true,
			location: 0,
			threshold: 0.2,
			distance: 100,
			keys: ['description']
		});

		this.countiesList = new Fuse(COUNTIES, {
			shouldSort: true,
			location: 0,
			threshold: 0.2,
			distance: 100,
			keys: ['description']
		});

		this.townList = new Fuse(TOWNS, {
			shouldSort: true,
			location: 0,
			threshold: 0.2,
			distance: 100,
			keys: ['description']
		});

		this.carList = new Fuse(CARMAKES, {
			shouldSort: true,
			location: 0,
			threshold: 0.2,
			distance: 100,
			keys: ['description']
		});
	}

	updatePage(req: express.Request, res: express.Response) {
		console.log(req.body);
		res.send(200);
	}	

	updateSection(req: express.Request, res: express.Response) {

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

	/** Car Calls */

	getVehicleRegistration = (req: express.Request, res: express.Response) => {
		let response = {
			dateOfRegistration: '01/01/2015',
			carMake: {text:'Renault', value:'Renault'},
			carModel: { text: 'Fiesta', value: 'Fiesta' },
			engineSize: '1500cc - 1999cc',
			exactModel: {text:'FIESTA 1.6I 16V ZETEC MANUAL Hatchback 1596cc PETROL', value: 'ford'}
		}
		res.send(JSON.stringify(response));
	}

	getCarMake = (req: express.Request, res: express.Response) => { 
		let list = this.carList.search(req.query.query);
		res.send(JSON.stringify(list));
	}
	
}