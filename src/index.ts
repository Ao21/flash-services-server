import * as express from "express";
import app from './config/express';
import config from './config/env';
import Routes from './routes';

class Server {
	
	public app: Express.Application;
	public routes: Routes;
	
	public static bootstrap() {
		return new Server();
	}

	constructor() {
		this.routes = Routes.bootstrap();
		app.use(this.routes.router);
		app.listen(config.port, () => {
			console.log(`server started on port ${config.port} (${config.env})`);
		})
	}
}
Server.bootstrap();
export default app;
