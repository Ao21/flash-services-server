import * as express from 'express';
import * as _ from 'lodash';
import { QUESTIONS, SECTION } from './../../constants_motor';

export default class Motor {

	constructor() {
		
	}

	getSection(req: express.Request, res: express.Response) {
		let section = SECTION[req.params.section];
		section.questions = QUESTIONS[req.params.section];
		res.send(JSON.stringify(section)).status(200);

	}

	getSectionQuestions(req: express.Request, res: express.Response) {
		let sectionQuestions = QUESTIONS[req.params.section];
		res.send(JSON.stringify(sectionQuestions)).status(200);
	}
	
}