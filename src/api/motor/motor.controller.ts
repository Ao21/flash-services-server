import * as express from 'express';
import * as _ from 'lodash';
import { QUESTIONS, PAGES, CONFIG } from './../../constants_motor';
import { OCCUPATIONS } from './../../constants_occupations';
import { TOWNS, COUNTIES, GEOCODE, GEOCODE_SELECTED } from './../../constants_address';
import { retrieveQuote } from './../../contants_motor-retrieve';
import { CARMAKES } from './../../constants_carmakes';
import * as Fuse from 'fuse.js';


import { QUOTE } from './../../sixto_consts';


import { KEITH } from './../../constants_keith';

export default class Motor {
	fuseList: Fuse;
	countiesList: Fuse;
	townList: Fuse;
	carList: Fuse;

	isRetrieveQuote: boolean = false;

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

	/** MYAA */

	checkMyAAEmail(req: express.Request, res: express.Response) {
		if (req.params.email === 'ro.brett@gmail.com') {
			return res.status(200).send({ status: 1 });
		}
		return res.status(200).send({ status: 0 });
	}

	retrieveQuote = (req: express.Request, res: express.Response) => {
		this.isRetrieveQuote = true;
		res.send(retrieveQuote);
	}

	loginToMyAA(req: express.Request, res: express.Response) {
		return res.status(200).send({
			savedQuotes: [{
				dateOfQuote: '12/01/2017',
				driverName: 'Ro Brett',
				price: '€126.78',
				ref: 'REFERENCE'
			},{
				dateOfQuote: '12/01/2017',
				driverName: 'Ro Brett',
				price: '€126.78',
				ref: 'REFERENCE'
			}]
		});
	}

	/** Updating Pages */
	updatePage(req: express.Request, res: express.Response) {
		res.status(200).send();
	}

	updateSection(req: express.Request, res: express.Response) {

	}

	updateQuote = (req: express.Request, res: express.Response) => {
		res.send(200);
	}

	getConfig = (req: express.Request, res: express.Response) => {
		if (!this.isRetrieveQuote){
			res.send(CONFIG);
		} else {
			res.send(retrieveQuote);
			this.isRetrieveQuote = false;
		}
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

	checkBankVerification(req: express.Request, res: express.Response) {
		let bankDetails = {
			name: 'Ronan Brett',
			iban: 'IE64BOFI90583812345678',
			bic: 'BOFIIE7OXXX',
			bankName: 'Bank of Ireland',
			bankAddress: '40 Mespil Road, Dublin'
		}
		res.send(JSON.stringify(bankDetails)).status(200);
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
		let options = {
			tags: [
				{ id: 'SE', description: 'SE' },
				{ id: '1998cc', description: '1998cc' }
			],
			list: [
				{ id: '0', description: 'A4 SE 1998cc 2003 5-door Petrol' },
				{ id: '2', description: 'A4 SE 1998cc 2003 5-door Petrol' },
				{ id: '3', description: 'A4 SE 1998cc 2003 5-door Petrol' },
				{ id: '4', description: 'A4 SE 1998cc 2003 5-door Petrol' },
				{ id: '5', description: 'A4 SE 1998cc 2003 5-door Petrol' },
				{ id: '6', description: 'A4 SE 1998cc 2003 5-door Petrol' },
				{ id: '7', description: 'A4 SE 1998cc 2003 5-door Petrol' },
				{ id: '8', description: 'A4 SE 1998cc 2003 5-door Petrol' },
				{ id: '9', description: 'A4 SE 1998cc 2003 5-door Petrol' },
				{ id: '10', description: 'A4 SE 1998cc 2003 5-door Petrol' },
				{ id: '11', description: 'A4 SE 1998cc 2003 5-door Petrol' },
				{ id: '12', description: 'A4 SE 1998cc 2003 5-door Petrol' },
			]
		}
		res.status(200).send(JSON.stringify(options));
	}

	selectCar = (req: express.Request, res: express.Response) => { 
		res.send(200);
	}

	setCarTag = (req: express.Request, res: express.Response) => {

		let tags = [
			{ id: 'SE', description: 'SE' },
			{ id: '1998cc', description: '1998cc' }
		];

		let filteredTags = _.filter(tags, (tag) => {
			return !_.find(req.body, (bodyTag: any) => {
				return bodyTag.id === tag.id;
			});
		})
		let options = {
			tags: filteredTags,
			list: [
				{ id: '0', description: 'A4 SE 1998cc 2003 5-door Petrol' },
				{ id: '2', description: 'A4 SE 1998cc 2003 5-door Petrol' },
				{ id: '3', description: 'A4 SE 1998cc 2003 5-door Petrol' },
			]
		}
		res.status(200).send(JSON.stringify(options));
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