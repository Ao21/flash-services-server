import * as express from "express";
import * as path from 'path';
import * as bodyParser from 'body-parser';
import * as slow from 'connect-slow';
import environment from './env/index';
const app = express();

app.use(bodyParser.json());

app.use(slow({
	url: /query/i,
	delay: 300
}))

app.use(function (req: any, res: any, next: any) {
	res.header("Access-Control-Allow-Origin", req.headers.origin);
	res.setHeader("Access-Control-Allow-Credentials", "true");
	res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
	res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Authorization, Access-Control-Request-Method, Access-Control-Request-Headers,x-xsrf-token");
	next();
});

export default app;
