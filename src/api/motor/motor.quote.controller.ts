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

const AAMembershipProduct = {
	name: 'AA Membership',
	type: 'AAMembership',
	breakdowns: [{ description: 'AA Membership', price: { monthly: createPrice(5000), annual: createPrice(60000) } }],
	premium: {
		total: createPrice(4999),
		monthly: {
			deposit: createPrice(4999),
			installments: {
				number: 11,
				instalment: createPrice(6999)
			},
			total: createPrice(6999),

		},
		annual: {
			deposit: createPrice(0),
			installments: {
				number: 1,
				instalment: createPrice(125000)
			},
			total: createPrice(125000),
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
	additionalProducts: [AAMembershipProduct],
	selection: {
		scheduleCode: 'monthly',
		policyType: 'AAMOTOR',
		aaHome: null,
		aaMembershipId: null,
		addAaMembership: false
	}

}

const TEST_Q = {"quote":{"reference":"BR0001000001","products":[{"benefits":[{"description":"AA Instalment Plan","included":true,"inHeader":true},{"description":"NCD Protection","included":true,"inHeader":true},{"description":"Windscreen/Glass Breakage","included":true,"inHeader":true},{"description":"Temporary Replacement Car","included":true,"inHeader":false},{"description":"Lifetime NCD Protection (Glass, Fire & Theft)","included":true,"inHeader":false},{"description":"Personal Accident Protection up to €75,000","included":true,"inHeader":false},{"description":"Replacement Locks & Alarms","included":true,"inHeader":false},{"description":"Foreign Travel","included":true,"inHeader":false},{"description":"Fire Brigade Charges","included":true,"inHeader":false},{"description":"Child Car Seats","included":true,"inHeader":false}],"breakdowns":[{"description":"Bring together","price":{"amount":150796,"str":"1507.96","symbol":"€","currency":"EUR","pretty":"€1507.96"}},{"description":"Protected NCD","price":{"amount":15080,"str":"150.80","symbol":"€","currency":"EUR","pretty":"€150.80"}},{"description":"Incl AD NCD","price":{"amount":0,"str":"0.00","symbol":"€","currency":"EUR","pretty":"€0.00"}},{"description":"Incl TP NCD","price":{"amount":0,"str":"0.00","symbol":"€","currency":"EUR","pretty":"€0.00"}},{"description":"Gov Levy","price":{"amount":8294,"str":"82.94","symbol":"€","currency":"EUR","pretty":"€82.94"}},{"description":"","price":{"amount":12552,"str":"125.52","symbol":"€","currency":"EUR","pretty":"€125.52"}},{"description":"","price":{"amount":174170,"str":"1741.70","symbol":"€","currency":"EUR","pretty":"€1741.70"}},{"description":"","price":{"amount":165876,"str":"1658.76","symbol":"€","currency":"EUR","pretty":"€1658.76"}},{"description":"","price":{"amount":33175,"str":"331.75","symbol":"€","currency":"EUR","pretty":"€331.75"}},{"description":"","price":{"amount":132701,"str":"1327.01","symbol":"€","currency":"EUR","pretty":"€1327.01"}},{"description":"","price":{"amount":8294,"str":"82.94","symbol":"€","currency":"EUR","pretty":"€82.94"}},{"description":"","price":{"amount":26356,"str":"263.56","symbol":"€","currency":"EUR","pretty":"€263.56"}},{"description":"","price":{"amount":26356,"str":"263.56","symbol":"€","currency":"EUR","pretty":"€263.56"}},{"description":"","price":{"amount":167351,"str":"1673.51","symbol":"€","currency":"EUR","pretty":"€1673.51"}},{"description":"","price":{"amount":17659,"str":"176.59","symbol":"€","currency":"EUR","pretty":"€176.59"}},{"description":"","price":{"amount":20871,"str":"208.71","symbol":"€","currency":"EUR","pretty":"€208.71"}}],"premium":{"monthly":{"deposit":{"amount":59429,"str":"594.29","symbol":"€","currency":"EUR","pretty":"€594.29"},"total":{"amount":169797,"str":"1697.97","symbol":"€","currency":"EUR","pretty":"€1697.97"},"apr":"19.50%","installments":{"code":"MO_DD09","number":11,"instalment":{"amount":10957,"str":"109.57","symbol":"€","currency":"EUR","pretty":"€109.57"},"deposit":{"amount":59429,"str":"594.29","symbol":"€","currency":"EUR","pretty":"€594.29"},"firstCollectionDate":1506812400000},"annual":false,"monthly":true},"annual":{"deposit":{"amount":0,"str":"0.00","symbol":"€","currency":"EUR","pretty":"€0.00"},"total":{"amount":169797,"str":"1697.97","symbol":"€","currency":"EUR","pretty":"€1697.97"},"apr":"0%","annual":true,"monthly":false}},"name":"AA Car Insurance","tagline":"","insurerName":"AXA","type":"STANDARD"},{"benefits":[{"description":"AA Instalment Plan","included":true,"inHeader":true},{"description":"NCD Protection","included":false,"inHeader":true},{"description":"Windscreen/Glass Breakage (Comprehensive only)","included":false,"inHeader":true},{"description":"Temporary Replacement Car","included":false,"inHeader":false},{"description":"Lifetime NCD Protection (Fire & Theft)","included":true,"inHeader":false},{"description":"Personal Accident Protection up to €75,000","included":true,"inHeader":false},{"description":"Replacement Locks & Alarms","included":false,"inHeader":false},{"description":"Foreign Travel","included":true,"inHeader":false},{"description":"Fire Brigade Charges","included":true,"inHeader":false},{"description":"Child Car Seats","included":false,"inHeader":false}],"breakdowns":[{"description":"Bring together","price":{"amount":134863,"str":"1348.63","symbol":"€","currency":"EUR","pretty":"€1348.63"}},{"description":"Incl AD NCD","price":{"amount":0,"str":"0.00","symbol":"€","currency":"EUR","pretty":"€0.00"}},{"description":"Incl TP NCD","price":{"amount":0,"str":"0.00","symbol":"€","currency":"EUR","pretty":"€0.00"}},{"description":"Gov Levy","price":{"amount":6743,"str":"67.43","symbol":"€","currency":"EUR","pretty":"€67.43"}},{"description":"","price":{"amount":10620,"str":"106.20","symbol":"€","currency":"EUR","pretty":"€106.20"}},{"description":"","price":{"amount":141606,"str":"1416.06","symbol":"€","currency":"EUR","pretty":"€1416.06"}},{"description":"","price":{"amount":134863,"str":"1348.63","symbol":"€","currency":"EUR","pretty":"€1348.63"}},{"description":"","price":{"amount":26973,"str":"269.73","symbol":"€","currency":"EUR","pretty":"€269.73"}},{"description":"","price":{"amount":107890,"str":"1078.90","symbol":"€","currency":"EUR","pretty":"€1078.90"}},{"description":"","price":{"amount":6743,"str":"67.43","symbol":"€","currency":"EUR","pretty":"€67.43"}},{"description":"","price":{"amount":26973,"str":"269.73","symbol":"€","currency":"EUR","pretty":"€269.73"}},{"description":"","price":{"amount":26973,"str":"269.73","symbol":"€","currency":"EUR","pretty":"€269.73"}},{"description":"","price":{"amount":141606,"str":"1416.06","symbol":"€","currency":"EUR","pretty":"€1416.06"}},{"description":"","price":{"amount":12811,"str":"128.11","symbol":"€","currency":"EUR","pretty":"€128.11"}},{"description":"","price":{"amount":15749,"str":"157.49","symbol":"€","currency":"EUR","pretty":"€157.49"}}],"premium":{"monthly":{"deposit":{"amount":50418,"str":"504.18","symbol":"€","currency":"EUR","pretty":"€504.18"},"total":{"amount":144052,"str":"1440.52","symbol":"€","currency":"EUR","pretty":"€1440.52"},"apr":"19.50%","installments":{"code":"MO_DD09","number":11,"instalment":{"amount":9295,"str":"92.95","symbol":"€","currency":"EUR","pretty":"€92.95"},"deposit":{"amount":50418,"str":"504.18","symbol":"€","currency":"EUR","pretty":"€504.18"},"firstCollectionDate":1506812400000},"annual":false,"monthly":true},"annual":{"deposit":{"amount":0,"str":"0.00","symbol":"€","currency":"EUR","pretty":"€0.00"},"total":{"amount":144052,"str":"1440.52","symbol":"€","currency":"EUR","pretty":"€1440.52"},"apr":"0%","annual":true,"monthly":false}},"name":"AA Value Insurance","tagline":"","insurerName":"AXA","type":"VALUE"}],"selection":{"policyType":"STANDARD","scheduleCode":"monthly","addAaMembership":false}}}
const TEST_Q_WITH_ADD = {"quote":{"reference":"BR0001000002","additionalProducts":[{"premium":{"monthly":{"deposit":{"amount":700,"str":"7.00","symbol":"€","currency":"EUR","pretty":"€7.00"},"total":{"amount":8400,"str":"84.00","symbol":"€","currency":"EUR","pretty":"€84.00"},"installments":{"number":11,"instalment":{"amount":700,"str":"7.00","symbol":"€","currency":"EUR","pretty":"€7.00"}},"annual":false,"monthly":true},"annual":{"deposit":{"amount":0,"str":"0.00","symbol":"€","currency":"EUR","pretty":"€0.00"},"total":{"amount":8400,"str":"84.00","symbol":"€","currency":"EUR","pretty":"€84.00"},"apr":"0%","annual":true,"monthly":false}},"name":"AA Membership","type":"AAMembership"}],"products":[{"benefits":[{"description":"AA Instalment Plan","included":true,"inHeader":true},{"description":"NCD Protection","included":true,"inHeader":true},{"description":"Windscreen/Glass Breakage","included":true,"inHeader":true},{"description":"Temporary Replacement Car","included":true,"inHeader":false},{"description":"Lifetime NCD Protection (Glass, Fire & Theft)","included":true,"inHeader":false},{"description":"Personal Accident Protection up to €75,000","included":true,"inHeader":false},{"description":"Replacement Locks & Alarms","included":true,"inHeader":false},{"description":"Foreign Travel","included":true,"inHeader":false},{"description":"Fire Brigade Charges","included":true,"inHeader":false},{"description":"Child Car Seats","included":true,"inHeader":false}],"breakdowns":[{"description":"Bring together","price":{"amount":143351,"str":"1433.51","symbol":"€","currency":"EUR","pretty":"€1433.51"}},{"description":"Protected NCD","price":{"amount":14335,"str":"143.35","symbol":"€","currency":"EUR","pretty":"€143.35"}},{"description":"Incl AD NCD","price":{"amount":0,"str":"0.00","symbol":"€","currency":"EUR","pretty":"€0.00"}},{"description":"Incl TP NCD","price":{"amount":0,"str":"0.00","symbol":"€","currency":"EUR","pretty":"€0.00"}},{"description":"Gov Levy","price":{"amount":7884,"str":"78.84","symbol":"€","currency":"EUR","pretty":"€78.84"}},{"description":"","price":{"amount":11932,"str":"119.32","symbol":"€","currency":"EUR","pretty":"€119.32"}},{"description":"","price":{"amount":165570,"str":"1655.70","symbol":"€","currency":"EUR","pretty":"€1655.70"}},{"description":"","price":{"amount":157686,"str":"1576.86","symbol":"€","currency":"EUR","pretty":"€1576.86"}},{"description":"","price":{"amount":31537,"str":"315.37","symbol":"€","currency":"EUR","pretty":"€315.37"}},{"description":"","price":{"amount":126149,"str":"1261.49","symbol":"€","currency":"EUR","pretty":"€1261.49"}},{"description":"","price":{"amount":7884,"str":"78.84","symbol":"€","currency":"EUR","pretty":"€78.84"}},{"description":"","price":{"amount":25054,"str":"250.54","symbol":"€","currency":"EUR","pretty":"€250.54"}},{"description":"","price":{"amount":25054,"str":"250.54","symbol":"€","currency":"EUR","pretty":"€250.54"}},{"description":"","price":{"amount":159087,"str":"1590.87","symbol":"€","currency":"EUR","pretty":"€1590.87"}},{"description":"","price":{"amount":16786,"str":"167.86","symbol":"€","currency":"EUR","pretty":"€167.86"}},{"description":"","price":{"amount":19840,"str":"198.40","symbol":"€","currency":"EUR","pretty":"€198.40"}}],"premium":{"monthly":{"deposit":{"amount":56537,"str":"565.37","symbol":"€","currency":"EUR","pretty":"€565.37"},"total":{"amount":161533,"str":"1615.33","symbol":"€","currency":"EUR","pretty":"€1615.33"},"apr":"19.50%","installments":{"code":"MO_DD09","number":11,"instalment":{"amount":10423,"str":"104.23","symbol":"€","currency":"EUR","pretty":"€104.23"},"deposit":{"amount":56537,"str":"565.37","symbol":"€","currency":"EUR","pretty":"€565.37"},"firstCollectionDate":1506812400000},"annual":false,"monthly":true},"annual":{"deposit":{"amount":0,"str":"0.00","symbol":"€","currency":"EUR","pretty":"€0.00"},"total":{"amount":161533,"str":"1615.33","symbol":"€","currency":"EUR","pretty":"€1615.33"},"apr":"0%","annual":true,"monthly":false}},"name":"AA Car Insurance","tagline":"","insurerName":"AXA","type":"STANDARD"},{"benefits":[{"description":"AA Instalment Plan","included":true,"inHeader":true},{"description":"NCD Protection","included":false,"inHeader":true},{"description":"Windscreen/Glass Breakage (Comprehensive only)","included":false,"inHeader":true},{"description":"Temporary Replacement Car","included":false,"inHeader":false},{"description":"Lifetime NCD Protection (Fire & Theft)","included":true,"inHeader":false},{"description":"Personal Accident Protection up to €75,000","included":true,"inHeader":false},{"description":"Replacement Locks & Alarms","included":false,"inHeader":false},{"description":"Foreign Travel","included":true,"inHeader":false},{"description":"Fire Brigade Charges","included":true,"inHeader":false},{"description":"Child Car Seats","included":false,"inHeader":false}],"breakdowns":[{"description":"Bring together","price":{"amount":128215,"str":"1282.15","symbol":"€","currency":"EUR","pretty":"€1282.15"}},{"description":"Incl AD NCD","price":{"amount":0,"str":"0.00","symbol":"€","currency":"EUR","pretty":"€0.00"}},{"description":"Incl TP NCD","price":{"amount":0,"str":"0.00","symbol":"€","currency":"EUR","pretty":"€0.00"}},{"description":"Gov Levy","price":{"amount":6411,"str":"64.11","symbol":"€","currency":"EUR","pretty":"€64.11"}},{"description":"","price":{"amount":10097,"str":"100.97","symbol":"€","currency":"EUR","pretty":"€100.97"}},{"description":"","price":{"amount":134626,"str":"1346.26","symbol":"€","currency":"EUR","pretty":"€1346.26"}},{"description":"","price":{"amount":128215,"str":"1282.15","symbol":"€","currency":"EUR","pretty":"€1282.15"}},{"description":"","price":{"amount":25643,"str":"256.43","symbol":"€","currency":"EUR","pretty":"€256.43"}},{"description":"","price":{"amount":102572,"str":"1025.72","symbol":"€","currency":"EUR","pretty":"€1025.72"}},{"description":"","price":{"amount":6411,"str":"64.11","symbol":"€","currency":"EUR","pretty":"€64.11"}},{"description":"","price":{"amount":25643,"str":"256.43","symbol":"€","currency":"EUR","pretty":"€256.43"}},{"description":"","price":{"amount":25643,"str":"256.43","symbol":"€","currency":"EUR","pretty":"€256.43"}},{"description":"","price":{"amount":134626,"str":"1346.26","symbol":"€","currency":"EUR","pretty":"€1346.26"}},{"description":"","price":{"amount":12180,"str":"121.80","symbol":"€","currency":"EUR","pretty":"€121.80"}},{"description":"","price":{"amount":14973,"str":"149.73","symbol":"€","currency":"EUR","pretty":"€149.73"}}],"premium":{"monthly":{"deposit":{"amount":47975,"str":"479.75","symbol":"€","currency":"EUR","pretty":"€479.75"},"total":{"amount":137072,"str":"1370.72","symbol":"€","currency":"EUR","pretty":"€1370.72"},"apr":"19.50%","installments":{"code":"MO_DD09","number":11,"instalment":{"amount":8845,"str":"88.45","symbol":"€","currency":"EUR","pretty":"€88.45"},"deposit":{"amount":47975,"str":"479.75","symbol":"€","currency":"EUR","pretty":"€479.75"},"firstCollectionDate":1506812400000},"annual":false,"monthly":true},"annual":{"deposit":{"amount":0,"str":"0.00","symbol":"€","currency":"EUR","pretty":"€0.00"},"total":{"amount":137072,"str":"1370.72","symbol":"€","currency":"EUR","pretty":"€1370.72"},"apr":"0%","annual":true,"monthly":false}},"name":"AA Value Insurance","tagline":"","insurerName":"AXA","type":"VALUE"}],"selection":{"policyType":"STANDARD","scheduleCode":"monthly","addAaMembership":true}}}


const vQuote = { "quote": { "reference": "FDGG09000001", "products": [{ "benefits": [{ "description": "Windscreen Cover", "included": true, "inHeader": true }, { "description": "Theft & Fire Protection", "included": true, "inHeader": true }, { "description": "Windscreen Cover", "included": true, "inHeader": true }, { "description": "Personal Accident", "included": true, "inHeader": false }, { "description": "Legal fees", "included": true, "inHeader": false }, { "description": "Fire Brigade Charges", "included": true, "inHeader": false }, { "description": "Car Valet", "included": true, "inHeader": false }, { "description": "Step Back Bonus Protection", "included": true, "inHeader": false }, { "description": "Personal Belongings/Sat Navs/Mobile Phones", "included": true, "inHeader": false }, { "description": "Replacement Locks & Alarms", "included": true, "inHeader": false }, { "description": "Child Car Seats", "included": true, "inHeader": false }, { "description": "Misfuel", "included": true, "inHeader": false }, { "description": "Courtesy Car", "included": true, "inHeader": false }], "breakdowns": [{ "description": "Third Party", "price": { "amount": 227989, "str": "2279.89", "symbol": "€", "currency": "EUR", "pretty": "€2279.89" } }, { "description": "Accidental Damage", "price": { "amount": 18122, "str": "181.22", "symbol": "€", "currency": "EUR", "pretty": "€181.22" } }, { "description": "No Claims Discount", "price": { "amount": -142745, "str": "-1427.45", "symbol": "€", "currency": "EUR", "pretty": "€-1427.45" } }, { "description": "Windscreen", "price": { "amount": 2300, "str": "23.00", "symbol": "€", "currency": "EUR", "pretty": "€23.00" } }, { "description": "Round before Gov Levy", "price": { "amount": 0, "str": "0.00", "symbol": "€", "currency": "EUR", "pretty": "€0.00" } }, { "description": "Gov Levy", "price": { "amount": 5283, "str": "52.83", "symbol": "€", "currency": "EUR", "pretty": "€52.83" } }, { "description": "", "price": { "amount": 8904, "str": "89.04", "symbol": "€", "currency": "EUR", "pretty": "€89.04" } }, { "description": "", "price": { "amount": 110949, "str": "1109.49", "symbol": "€", "currency": "EUR", "pretty": "€1109.49" } }, { "description": "", "price": { "amount": 105666, "str": "1056.66", "symbol": "€", "currency": "EUR", "pretty": "€1056.66" } }, { "description": "", "price": { "amount": 21133, "str": "211.33", "symbol": "€", "currency": "EUR", "pretty": "€211.33" } }, { "description": "", "price": { "amount": 84533, "str": "845.33", "symbol": "€", "currency": "EUR", "pretty": "€845.33" } }, { "description": "", "price": { "amount": 5283, "str": "52.83", "symbol": "€", "currency": "EUR", "pretty": "€52.83" } }, { "description": "", "price": { "amount": 9122, "str": "91.22", "symbol": "€", "currency": "EUR", "pretty": "€91.22" } }, { "description": "", "price": { "amount": 9122, "str": "91.22", "symbol": "€", "currency": "EUR", "pretty": "€91.22" } }, { "description": "", "price": { "amount": 98938, "str": "989.38", "symbol": "€", "currency": "EUR", "pretty": "€989.38" } }, { "description": "", "price": { "amount": 8904, "str": "89.04", "symbol": "€", "currency": "EUR", "pretty": "€89.04" } }, { "description": "", "price": { "amount": 10752, "str": "107.52", "symbol": "€", "currency": "EUR", "pretty": "€107.52" } }], "premium": { "monthly": { "deposit": { "amount": 34628, "str": "346.28", "symbol": "€", "currency": "EUR", "pretty": "€346.28" }, "total": { "amount": 101384, "str": "1013.84", "symbol": "€", "currency": "EUR", "pretty": "€1013.84" }, "apr": "9.20%", "installments": { "code": "MO_DD09", "number": 11, "instalment": { "amount": 6384, "str": "63.84", "symbol": "€", "currency": "EUR", "pretty": "€63.84" }, "deposit": { "amount": 34628, "str": "346.28", "symbol": "€", "currency": "EUR", "pretty": "€346.28" } }, "annual": false, "monthly": true }, "annual": { "deposit": { "amount": 0, "str": "0.00", "symbol": "€", "currency": "EUR", "pretty": "€0.00" }, "total": { "amount": 101384, "str": "1013.84", "symbol": "€", "currency": "EUR", "pretty": "€1013.84" }, "apr": "0%", "annual": true, "monthly": false } }, "name": "AA Car Insurance", "tagline": "", "type": "STANDARD" }, { "benefits": [{ "description": "Windscreen Cover", "included": true, "inHeader": true }, { "description": "Theft & Fire Protection", "included": true, "inHeader": true }, { "description": "Windscreen Cover", "included": true, "inHeader": true }, { "description": "Personal Accident", "included": true, "inHeader": false }, { "description": "Legal fees", "included": true, "inHeader": false }, { "description": "Fire Brigade Charges", "included": true, "inHeader": false }, { "description": "Car Valet", "included": true, "inHeader": false }, { "description": "Step Back Bonus Protection", "included": false, "inHeader": false }, { "description": "Personal Belongings/Sat Navs/Mobile Phones", "included": false, "inHeader": false }, { "description": "Replacement Locks & Alarms", "included": false, "inHeader": false }, { "description": "Child Car Seats", "included": false, "inHeader": false }, { "description": "Misfuel", "included": false, "inHeader": false }, { "description": "Courtesy Car", "included": false, "inHeader": false }], "breakdowns": [{ "description": "Third Party", "price": { "amount": 227989, "str": "2279.89", "symbol": "€", "currency": "EUR", "pretty": "€2279.89" } }, { "description": "Accidental Damage", "price": { "amount": 18122, "str": "181.22", "symbol": "€", "currency": "EUR", "pretty": "€181.22" } }, { "description": "No Claims Discount", "price": { "amount": -142745, "str": "-1427.45", "symbol": "€", "currency": "EUR", "pretty": "€-1427.45" } }, { "description": "Policy Excess", "price": { "amount": -1550, "str": "-15.50", "symbol": "€", "currency": "EUR", "pretty": "€-15.50" } }, { "description": "NCD Protection", "price": { "amount": -7127, "str": "-71.27", "symbol": "€", "currency": "EUR", "pretty": "€-71.27" } }, { "description": "Windscreen", "price": { "amount": 2300, "str": "23.00", "symbol": "€", "currency": "EUR", "pretty": "€23.00" } }, { "description": "Round before Gov Levy", "price": { "amount": 0, "str": "0.00", "symbol": "€", "currency": "EUR", "pretty": "€0.00" } }, { "description": "Gov Levy", "price": { "amount": 4849, "str": "48.49", "symbol": "€", "currency": "EUR", "pretty": "€48.49" } }, { "description": "", "price": { "amount": 8626, "str": "86.26", "symbol": "€", "currency": "EUR", "pretty": "€86.26" } }, { "description": "", "price": { "amount": 101838, "str": "1018.38", "symbol": "€", "currency": "EUR", "pretty": "€1018.38" } }, { "description": "", "price": { "amount": 96989, "str": "969.89", "symbol": "€", "currency": "EUR", "pretty": "€969.89" } }, { "description": "", "price": { "amount": 19398, "str": "193.98", "symbol": "€", "currency": "EUR", "pretty": "€193.98" } }, { "description": "", "price": { "amount": 77591, "str": "775.91", "symbol": "€", "currency": "EUR", "pretty": "€775.91" } }, { "description": "", "price": { "amount": 4849, "str": "48.49", "symbol": "€", "currency": "EUR", "pretty": "€48.49" } }, { "description": "", "price": { "amount": 13414, "str": "134.14", "symbol": "€", "currency": "EUR", "pretty": "€134.14" } }, { "description": "", "price": { "amount": 13414, "str": "134.14", "symbol": "€", "currency": "EUR", "pretty": "€134.14" } }, { "description": "", "price": { "amount": 95854, "str": "958.54", "symbol": "€", "currency": "EUR", "pretty": "€958.54" } }, { "description": "", "price": { "amount": 8626, "str": "86.26", "symbol": "€", "currency": "EUR", "pretty": "€86.26" } }, { "description": "", "price": { "amount": 10524, "str": "105.24", "symbol": "€", "currency": "EUR", "pretty": "€105.24" } }], "premium": { "monthly": { "deposit": { "amount": 33549, "str": "335.49", "symbol": "€", "currency": "EUR", "pretty": "€335.49" }, "total": { "amount": 98300, "str": "983.00", "symbol": "€", "currency": "EUR", "pretty": "€983.00" }, "apr": "9.20%", "installments": { "code": "MO_DD09", "number": 11, "instalment": { "amount": 6185, "str": "61.85", "symbol": "€", "currency": "EUR", "pretty": "€61.85" }, "deposit": { "amount": 33549, "str": "335.49", "symbol": "€", "currency": "EUR", "pretty": "€335.49" } }, "annual": false, "monthly": true }, "annual": { "deposit": { "amount": 0, "str": "0.00", "symbol": "€", "currency": "EUR", "pretty": "€0.00" }, "total": { "amount": 98300, "str": "983.00", "symbol": "€", "currency": "EUR", "pretty": "€983.00" }, "apr": "0%", "annual": true, "monthly": false } }, "name": "AA Value Insurance", "tagline": "", "type": "VALUE" }], "selection": { "policyType": "STANDARD", "scheduleCode": "monthly", "addAaMembership": false } } };

export interface ServerErrorObj {
	section?: string;
	type?: string;
	code: number;
	category: string;
}


const defError: ServerErrorObj = {
	category: 'REFERRAL',
	type: 'blah',
	code: 54545
}

export default class MotorQuote {

	testQuote = TEST_Q;
	constructor() { }


	addAAMember = (req: express.Request, res: express.Response) =>{
		let q = req.params.id === 'RESET' ? null : req.params.id;
		this.testQuote = TEST_Q_WITH_ADD;
		res.send(200);
	}

	addAAMembership = (req: express.Request, res: express.Response) => { 
		this.testQuote = TEST_Q_WITH_ADD;
		res.send(200);
	}

	removeAAMembership = (req: express.Request, res: express.Response) => { 
		this.testQuote = TEST_Q;
		res.send(200);
	}





	sendQuote = (req: express.Request, res: express.Response) => {
		// res.status(400).send(JSON.stringify([defError]));

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