import * as express from 'express';
import * as _ from 'lodash';
import { QUESTIONS, PAGES, CONFIG } from './../../constants_motor';
import { OCCUPATIONS } from './../../constants_occupations';
import { TOWNS, COUNTIES, GEOCODE, GEOCODE_SELECTED } from './../../constants_address';
import * as Fuse from 'fuse.js';

const BENEFITS = [
	{ description: 'Lifetime NCD (Glass, Fire & Theft)', inHeader: true, included: true },
	{ description: 'Personal Accident Protection (€75k)', inHeader: true, included: true },
	{ description: 'Fire Brigade Charges', inHeader: true, included: true },
	{ description: 'Temporary Replacement Vehicle', inHeader: true, included: false },
	{ description: 'NCD Stepback', inHeader: false, included: false },
	{ description: 'Windscreen/Glass Breakage', inHeader: false, included: true },
	{ description: 'Foreign Travel', inHeader: false, included: true },
	
	
	
]

const BENEFITS_STANDARD = [
	
	{ description: 'Lifetime NCD (Glass, Fire & Theft)', inHeader: true, included: true },
	{ description: 'Personal Accident Protection (€75k)', inHeader: true, included: true },
	{ description: 'Fire Brigade Charges', inHeader: true, included: true },
	{ description: 'Temporary Replacement Vehicle', inHeader: true, included: true },
	{ description: 'NCD Stepback', inHeader: false, included: true },
	{ description: 'Windscreen/Glass Breakage', inHeader: false, included: true },
	{ description: 'Foreign Travel', inHeader: false, included: true },
	
	
	
]

const BREAKDOWN_ITEMS = [
	{ description: 'AA Motor', price: { monthly: createPrice(5000), annual: createPrice(60000)} },
	{ description: 'Fee', price: { monthly: createPrice(320), annual: createPrice(3840)} },
	{ description: 'Member Discount', price: { monthly: createPrice(5000), annual: createPrice(60000)}, discount: true},
]

const AAValue = {
	name: 'AA Value',
	id: 'AAVALUE',
	benefits: BENEFITS,
	tagline: 'Your Essential Cover',
	img: 'product-aavalue.svg',
	breakdowns: BREAKDOWN_ITEMS,
	premium: {
		monthly: {
			deposit: createPrice(2999),
			installments: {
				number: 11,
				instalment: createPrice(5999) 
			},
			total: createPrice(5999),
			apr: '10%'

		},
		annual: {
			deposit: createPrice(0),
			installments: {
				number: 1,
				instalment: createPrice(151000)
			},
			total: createPrice(151000),
			apr: '4.5%',
		}
	}
}

const AAMotor = {
	name: 'AA Motor',
	id: 'AAMOTOR',
	preferred: true,
	tagline: 'Our Premium Product',
	benefits: BENEFITS_STANDARD,
	img: 'product-aastandard.svg',
	breakdown: BREAKDOWN_ITEMS,
	premium: {
		monthly: {
			deposit: createPrice(4999),
			installments: {
				number: 11,
				instalment: createPrice(6999) 
			},
			total: createPrice(6999),
			apr: '10%'

		},
		annual: {
			deposit: createPrice(0),
			installments: {
				number: 1,
				instalment: createPrice(125000)
			},
			total: createPrice(125000),
			apr: '4.5%',
		}
	}
}

const quote = {
	reference: '56565656',
	products: [AAMotor, AAValue],
	paymentFrequency: 'monthly',
	activeProduct: 'AAMOTOR'
}

const singleQuote = {
	reference: '56565656',
	products: [AAMotor],
	paymentFrequency: 'monthly',
	activeProduct: 'AAMOTOR'
}

let count = 0;
export default class MotorQuote {
	constructor() { }

	sendQuote(req: express.Request, res: express.Response) {
		if (count === 0) {
			res.status(200).send(JSON.stringify({ quote: quote }));
			return count++
		}
		res.status(200).send(JSON.stringify({ quote: singleQuote }));
		
	}
}

function createPrice(price: number) {
	return {
		"amount": price,
		"str": `${price / 100}`,
		"symbol": "€",
		"currency": "EUR",
		"pretty": `€${price / 100}`
	}
}