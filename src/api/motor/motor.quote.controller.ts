import * as express from 'express';
import * as _ from 'lodash';
import { QUESTIONS, PAGES, CONFIG } from './../../constants_motor';
import { OCCUPATIONS } from './../../constants_occupations';
import { TOWNS, COUNTIES, GEOCODE, GEOCODE_SELECTED } from './../../constants_address';
import * as Fuse from 'fuse.js';

const BENEFITS = [
	{ description: 'Lifetime Glass', inHeader: true, included: true },
	{ description: 'Theft & Protection', inHeader: true, included: true },
	{ description: 'Windscreen Cover', inHeader: true, included: true },
	{ description: 'Personal Accident', inHeader: false, included: true },
	{ description: 'Blah', inHeader: false, included: true },
	{ description: 'Blah', inHeader: false, included: false }
]

const BREAKDOWN_ITEMS = [
	{ description: 'Text Here', price: createPrice(5000) },
	{ description: 'Text Here', price: createPrice(5000) },
	{ description: 'Text Here', price: createPrice(5000)},
]

const AAValue = {
	name: 'AA Value',
	benefits: BENEFITS,
	breakdown: BREAKDOWN_ITEMS,
	premium: {
		monthly: {
			deposit: createPrice(2999),
			installments: {
				number: 11,
				instalment: createPrice(5999) 
			},
			apr: '10%'

		},
		annual: {
			deposit: createPrice(0),
			installments: {
				number: 1,
				installment: createPrice(151000)
			},
			apr: '4.5%',
		}
	}
}

const AAMotor = {,
	name: 'AA Motor',
	benefits: BENEFITS,
	breakdown: BREAKDOWN_ITEMS,
	premium: {
		monthly: {
			deposit: createPrice(4999),
			installments: {
				number: 11,
				instalment: createPrice(6999) 
			},
			apr: '10%'

		},
		annual: {
			deposit: createPrice(0),
			installments: {
				number: 1,
				installment: createPrice(320000)
			},
			apr: '4.5%',
		}
	}
}

const quote = {
	reference: '56565656',
	products: [AAMotor, AAValue],
	paymentFrequency: 'Monthly'
}

export default class MotorQuote {
	constructor() { }

	sendQuote(req: express.Request, res: express.Response) {
		res.status(200).send(JSON.stringify({quote: quote}));
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