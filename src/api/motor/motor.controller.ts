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
		res.status(200).send();
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


	setCarDetails = (req: express.Request, res: express.Response) => {
		res.send(200);
	}

	getVehicleRegistration = (req: express.Request, res: express.Response) => {
		let response = {
			dateOfRegistration: '01/01/2015',
			"carMake": {
				"id": "nissan", "description": "NISSAN", 
			},
			"carModel": {
				"id": "almera", "description": "ALMERA FLARE", 
			},
			"engineSize": {
				id: '1500cc - 1999cc', description: '1500cc - 1999cc'
			},
			"fuelType": {
				"id": "petrol", "description": "Petrol", 
			}
		}
		res.send(JSON.stringify(response));
	}

	getCarMake = (req: express.Request, res: express.Response) => {
		let list = this.carList.search(req.query.query);
		res.send(JSON.stringify(list));
	}

}