import * as express from "express";
import * as path from 'path';
import * as bodyParser from 'body-parser';

const app = express();

app.use(bodyParser());

app.use(function (req: any, res: any, next: any) {
	res.header("Access-Control-Allow-Origin", "http://m928418.theaa.local:8080");
	res.setHeader("Access-Control-Allow-Credentials", "true");
	res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
	res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Authorization, Access-Control-Request-Method, Access-Control-Request-Headers,x-xsrf-token");
	next();
});

export default app;
