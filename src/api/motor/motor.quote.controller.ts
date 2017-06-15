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
	{ description: 'AA Motor', price: { monthly: createPrice(5000), annual: createPrice(60000) } },
	{ description: 'Fee', price: { monthly: createPrice(320), annual: createPrice(3840) } },
	{ description: 'Member Discount', price: { monthly: createPrice(5000), annual: createPrice(60000) }, discount: true },
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

const AAMembership = {
	name: 'AA Membership',
	id: 'AAMEMBERSHIP',
}

const AAHome = {
	name: 'AA Home Insurance',
	id: 'AAHOME',
}

const quote = {
	reference: '56565656',
	products: [AAMotor, AAValue],
	additionalProducts: [AAHome],
	selection: {
		scheduleCode: 'monthly',
		policyType: 'AAMOTOR',
		aaHome: null,
		aaMembershipId: '3453454',
		addAAMembership: true
	}

}

const TEST_Q = {
	"quote": {
		"reference": "HYLR07000001",
		"products": [{
			"benefits": [{
				"description": "Windscreen Cover",
				"included": true,
				"inHeader": true
			}, {
				"description": "Theft & Fire Protection",
				"included": true,
				"inHeader": true
			}, {
				"description": "Windscreen Cover",
				"included": true,
				"inHeader": true
			}, {
				"description": "Personal Accident",
				"included": true,
				"inHeader": false
			}, {
				"description": "Legal fees",
				"included": true,
				"inHeader": false
			}, {
				"description": "Fire Brigade Charges",
				"included": true,
				"inHeader": false
			}, {
				"description": "Car Valet",
				"included": true,
				"inHeader": false
			}, {
				"description": "Step Back Bonus Protection",
				"included": true,
				"inHeader": false
			}, {
				"description": "Personal Belongings/Sat Navs/Mobile Phones",
				"included": true,
				"inHeader": false
			}, {
				"description": "Replacement Locks & Alarms",
				"included": true,
				"inHeader": false
			}, {
				"description": "Child Car Seats",
				"included": true,
				"inHeader": false
			}, {
				"description": "Misfuel",
				"included": true,
				"inHeader": false
			}, {
				"description": "Courtesy Car",
				"included": true,
				"inHeader": false
			}],
			"breakdowns": [{
				"description": "Bring together",
				"price": {
					"amount": 161827,
					"str": "1618.27",
					"symbol": "€",
					"currency": "EUR",
					"pretty": "€1618.27"
				}
			}, {
				"description": "Protected NCD",
				"price": {
					"amount": 16183,
					"str": "161.83",
					"symbol": "€",
					"currency": "EUR",
					"pretty": "€161.83"
				}
			}, {
				"description": "Incl AD NCD",
				"price": {
					"amount": 0,
					"str": "0.00",
					"symbol": "€",
					"currency": "EUR",
					"pretty": "€0.00"
				}
			}, {
				"description": "Incl TP NCD",
				"price": {
					"amount": 0,
					"str": "0.00",
					"symbol": "€",
					"currency": "EUR",
					"pretty": "€0.00"
				}
			}, {
				"description": "Gov Levy",
				"price": {
					"amount": 8901,
					"str": "89.01",
					"symbol": "€",
					"currency": "EUR",
					"pretty": "€89.01"
				}
			}, {
				"description": "",
				"price": {
					"amount": 0,
					"str": "0.00",
					"symbol": "€",
					"currency": "EUR",
					"pretty": "€0.00"
				}
			}],
			"premium": {
				"monthly": {
					"deposit": {
						"amount": 15570,
						"str": "155.70",
						"symbol": "€",
						"currency": "EUR",
						"pretty": "€155.70"
					},
					"total": {
						"amount": 189357,
						"str": "1893.57",
						"symbol": "€",
						"currency": "EUR",
						"pretty": "€1893.57"
					},
					"apr": "0.000000%",
					"installments": {
						"code": "",
						"number": 11,
						"instalment": {
							"amount": 15576,
							"str": "155.76",
							"symbol": "€",
							"currency": "EUR",
							"pretty": "€155.76"
						},
						"deposit": {
							"amount": 15570,
							"str": "155.70",
							"symbol": "€",
							"currency": "EUR",
							"pretty": "€155.70"
						}
					},
					"annual": false,
					"monthly": true
				},
				"annual": {
					"deposit": {
						"amount": 0,
						"str": "0.00",
						"symbol": "€",
						"currency": "EUR",
						"pretty": "€0.00"
					},
					"total": {
						"amount": 189357,
						"str": "1893.57",
						"symbol": "€",
						"currency": "EUR",
						"pretty": "€1893.57"
					},
					"apr": "0%",
					"annual": true,
					"monthly": false
				}
			},
			"name": "STANDARD",
			"id": "STANDARD",
			"tagline": "Our Premium Product"
		}, {
			"benefits": [{
				"description": "Windscreen Cover",
				"included": true,
				"inHeader": true
			}, {
				"description": "Theft & Fire Protection",
				"included": true,
				"inHeader": true
			}, {
				"description": "Windscreen Cover",
				"included": true,
				"inHeader": true
			}, {
				"description": "Personal Accident",
				"included": true,
				"inHeader": false
			}, {
				"description": "Legal fees",
				"included": true,
				"inHeader": false
			}, {
				"description": "Fire Brigade Charges",
				"included": true,
				"inHeader": false
			}, {
				"description": "Car Valet",
				"included": true,
				"inHeader": false
			}, {
				"description": "Step Back Bonus Protection",
				"included": false,
				"inHeader": false
			}, {
				"description": "Personal Belongings/Sat Navs/Mobile Phones",
				"included": false,
				"inHeader": false
			}, {
				"description": "Replacement Locks & Alarms",
				"included": false,
				"inHeader": false
			}, {
				"description": "Child Car Seats",
				"included": false,
				"inHeader": false
			}, {
				"description": "Misfuel",
				"included": false,
				"inHeader": false
			}, {
				"description": "Courtesy Car",
				"included": false,
				"inHeader": false
			}],
			"breakdowns": [{
				"description": "Bring together",
				"price": {
					"amount": 144715,
					"str": "1447.15",
					"symbol": "€",
					"currency": "EUR",
					"pretty": "€1447.15"
				}
			}, {
				"description": "Incl AD NCD",
				"price": {
					"amount": 0,
					"str": "0.00",
					"symbol": "€",
					"currency": "EUR",
					"pretty": "€0.00"
				}
			}, {
				"description": "Incl TP NCD",
				"price": {
					"amount": 0,
					"str": "0.00",
					"symbol": "€",
					"currency": "EUR",
					"pretty": "€0.00"
				}
			}, {
				"description": "Gov Levy",
				"price": {
					"amount": 7236,
					"str": "72.36",
					"symbol": "€",
					"currency": "EUR",
					"pretty": "€72.36"
				}
			}, {
				"description": "",
				"price": {
					"amount": 0,
					"str": "0.00",
					"symbol": "€",
					"currency": "EUR",
					"pretty": "€0.00"
				}
			}],
			"premium": {
				"monthly": {
					"deposit": {
						"amount": 12658,
						"str": "126.58",
						"symbol": "€",
						"currency": "EUR",
						"pretty": "€126.58"
					},
					"total": {
						"amount": 154397,
						"str": "1543.97",
						"symbol": "€",
						"currency": "EUR",
						"pretty": "€1543.97"
					},
					"apr": "0.000000%",
					"installments": {
						"code": "",
						"number": 11,
						"instalment": {
							"amount": 12663,
							"str": "126.63",
							"symbol": "€",
							"currency": "EUR",
							"pretty": "€126.63"
						},
						"deposit": {
							"amount": 12658,
							"str": "126.58",
							"symbol": "€",
							"currency": "EUR",
							"pretty": "€126.58"
						}
					},
					"annual": false,
					"monthly": true
				},
				"annual": {
					"deposit": {
						"amount": 0,
						"str": "0.00",
						"symbol": "€",
						"currency": "EUR",
						"pretty": "€0.00"
					},
					"total": {
						"amount": 154397,
						"str": "1543.97",
						"symbol": "€",
						"currency": "EUR",
						"pretty": "€1543.97"
					},
					"apr": "0%",
					"annual": true,
					"monthly": false
				}
			},
			"name": "VALUE",
			"id": "VALUE",
			"tagline": "Your Essential Cover"
		}],
		"paymentFrequency": "monthly",
		"activeProduct": "STANDARD",
		"selection": {
			"policyType": "STANDARD",
			"scheduleCode": "monthly",
			"addAAMembership": false,
			"aaMembership": null,
			"aaHome": "4353434545"
		}
	},

}

export default class MotorQuote {

	testQuote = TEST_Q;
	constructor() { }


	checkAAMembership = (req: express.Request, res: express.Response) =>{
		let q = req.params.id === 'RESET' ? null : req.params.id;
		this.testQuote.quote.selection.aaMembership = q;
		res.send(200);
	}

	sendQuote = (req: express.Request, res: express.Response) =>{
		res.status(200).send(JSON.stringify(this.testQuote));

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