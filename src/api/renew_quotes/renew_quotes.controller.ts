import * as express from 'express';
import * as _ from 'lodash';
import { defaultConfig, configWithQuotation, defaultSaveQuote } from './../../constants_membership';

export default class RenewQuotes {
	public quote = configWithQuotation;

	constructor() {

	}

	public saveQuote = (req: express.Request, res: express.Response) => {
		this.quote.quotation.renewalOptions.updateDetails = false;
		return res.status(200).send(defaultSaveQuote);
	}
	public retrieve = (req: express.Request, res: express.Response) => {
		let params = req.query;
		if (params.reference === '123456' && params.dateOfBirth === '29/12/1987') {
			return res.status(200).send(JSON.stringify(this.quote));
		}
		else {
			setTimeout(() => {
				return res.status(200).send(JSON.stringify(this.quote));
			}, 1000);
		}
	}

	public toggleCoverLevel = (req: express.Request, res: express.Response) => {
		let params = req.params;

		let coverIndex = _.findIndex(this.quote.coverLevel, (e: any) => {
			return e.name === req.params.coverlevel.toLowerCase();
		})

		let breakdownIndex = _.findIndex(this.quote.quotation.breakdown, (e: any) => {
			return e.name === req.params.coverlevel.toUpperCase();
		})

		let cover = this.quote.coverLevel[coverIndex];
		if (breakdownIndex === -1) {
			this.quote.quotation.breakdown.push({
				description: cover.display,
				type: 'cover',
				name: cover.name.toUpperCase(),
				price: cover.price,
				mandatory: false
			})
			this.quote.coverLevel[coverIndex].active = true;
			if (coverIndex === 1) {
				this.quote.quotation.renewalOptions.discount = null;
			}
		} else {
			if (coverIndex === 1) {
				this.quote.quotation.renewalOptions.discount = {
					type: 'cover',
					ref: "HOMESTART",
					display: 'Home Start',
					"price": {
						"monthly": {
							"amount": 225,
							"str": "2.25",
							"symbol": "€",
							"currency": "EUR",
							"pretty": "€2.25"
						},
						"annual": {
							"amount": 2700,
							"str": "27.00",
							"symbol": "€",
							"currency": "EUR",
							"pretty": "€27.00"
						}
					},
				}
			}
			this.quote.coverLevel[coverIndex].active = false;
			this.quote.quotation.breakdown.splice(breakdownIndex, 1)
		}
		res.status(200).send();
	}

	public removeMember = (req: express.Request, res: express.Response) => {
		console.log(req.params.memberId);
		let breakdownIndex = _.findIndex(this.quote.quotation.breakdown, (e: any) => {
			return e.index === Number(req.params.memberId)
		})
		delete this.quote.members.adults[`${req.params.memberId}`];
		this.quote.quotation.breakdown.splice(breakdownIndex, 1);

		res.status(200).send();
	}
	public addMember = (req: express.Request, res: express.Response) => {
		let breakdownIndex = _.findIndex(this.quote.quotation.breakdown, (e: any) => {
			return e.index === Number(req.params.memberId)
		})

		this.quote.members.adults[`${req.params.memberId}`] = {
			"firstName": `${req.body.firstName}`,
			"surname": `${req.body.surname}`,
			"dateOfBirth": `${req.body.dateOfBirth}`,
			"price": {
				"monthly": {
					"amount": 425,
					"str": "4.25",
					"symbol": "€",
					"currency": "EUR",
					"pretty": "€4.25"
				},
				"annual": {
					"amount": 5100,
					"str": "51",
					"symbol": "€",
					"currency": "EUR",
					"pretty": "€51"
				}
			},
			"typeDisplay": "Adult",
			"type": "adults",
			"index": req.params.memberId

		};

		if (breakdownIndex != -1) {
			this.quote.members[req.params.memberId]
			this.quote.quotation.breakdown[breakdownIndex].description = `${req.body.firstName} ${req.body.surname}`
		} else {
			this.quote.quotation.breakdown.push({
				"description": `${req.body.firstName} ${req.body.surname}`,
				"type": "member",
				"index": req.params.memberId,
				"price": {
					"monthly": {
						"amount": 425,
						"str": "4.25",
						"symbol": "€",
						"currency": "EUR",
						"pretty": "€4.25"
					},
					"annual": {
						"amount": 5100,
						"str": "51.00",
						"symbol": "€",
						"currency": "EUR",
						"pretty": "€51.00"
					}
				},
				mandatory: false
			})
		}
		console.log(this.quote.members);
		res.status(200).send();
	}


}
