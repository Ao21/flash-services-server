import * as express from 'express';
import * as _ from 'lodash';
import { QUESTIONS, PAGES, CONFIG } from './../../constants_motor';
import { OCCUPATIONS } from './../../constants_occupations';
import { TOWNS, COUNTIES, GEOCODE, GEOCODE_SELECTED } from './../../constants_address';
import * as Fuse from 'fuse.js';

const BENEFITS = [
	{ description: 'Windscreen Cover', inHeader: true, included: true },
	{ description: 'Lifetime Glass, Theft & Fire Protection', inHeader: true, included: true },
	{ description: 'Personal Accident', inHeader: true, included: true },
	{ description: 'Legal fees', inHeader: true, included: true },
	{ description: 'Fire Brigade Charges', inHeader: true, included: true },
	{ description: 'Car Valet', inHeader: true, included: true },
	{ description: 'Standard or Motor', inHeader: true, included: true },
	{ description: 'Step Back Bonus Protection', inHeader: true, included: true },
	{ description: 'Personal Belongings/Sat Navs/Mobile Phones', inHeader: true, included: true },
	{ description: 'Replacement Locks & Alarms', inHeader: true, included: true },
	{ description: 'Child Car Seats', inHeader: true, included: true },
	{ description: 'Misfuel', inHeader: true, included: true },
	{ description: 'Courtesy Car', inHeader: true, included: true },
]

const BENEFITS_STANDARD = [
	{ description: 'Windscreen Cover', inHeader: true, included: true },
	{ description: 'Lifetime Glass, Theft & Fire Protection', inHeader: true, included: true },
	{ description: 'Personal Accident', inHeader: true, included: true },
	{ description: 'Legal fees', inHeader: true, included: true },
	{ description: 'Fire Brigade Charges', inHeader: true, included: true },
	{ description: 'Car Valet', inHeader: true, included: true },
	{ description: 'Standard or Motor', inHeader: true, included: true },
	{ description: 'Step Back Bonus Protection', inHeader: true, included: true },
	{ description: 'Personal Belongings/Sat Navs/Mobile Phones', inHeader: true, included: true },
	{ description: 'Replacement Locks & Alarms', inHeader: true, included: true },
	{ description: 'Child Car Seats', inHeader: true, included: false },
	{ description: 'Misfuel', inHeader: true, included: false },
	{ description: 'Courtesy Car', inHeader: true, included: false },
]

const BREAKDOWN_ITEMS = [
	{ description: 'AA Motor', price: createPrice(5000) },
	{ description: 'Fee', price: createPrice(320) },
	{ description: 'Member Discount', price: createPrice(5000), discount: true},
]

const AAValue = {
	name: 'AA Value',
	id: 'AAVALUE',
	benefits: BENEFITS,
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
		annually: {
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
	benefits: BENEFITS_STANDARD,
	img: 'product-aastandard.svg',
	breakdowns: BREAKDOWN_ITEMS,
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
		annually: {
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
	activeProduct: null
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