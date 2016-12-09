"use strict";
const express_1 = require('./config/express');
const env_1 = require('./config/env');
const routes_1 = require('./routes');
class Server {
    constructor() {
        this.routes = routes_1.default.bootstrap();
        express_1.default.use(this.routes.router);
        express_1.default.listen(env_1.default.port, () => {
            console.log(`server started on port ${env_1.default.port} (${env_1.default.env})`);
        });
    }
    static bootstrap() {
        return new Server();
    }
}
Server.bootstrap();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = express_1.default;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsMEJBQWdCLGtCQUFrQixDQUFDLENBQUE7QUFDbkMsc0JBQW1CLGNBQWMsQ0FBQyxDQUFBO0FBQ2xDLHlCQUFtQixVQUFVLENBQUMsQ0FBQTtBQUU5QjtJQVNDO1FBQ0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxnQkFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2pDLGlCQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDNUIsaUJBQUcsQ0FBQyxNQUFNLENBQUMsYUFBTSxDQUFDLElBQUksRUFBRTtZQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLDBCQUEwQixhQUFNLENBQUMsSUFBSSxLQUFLLGFBQU0sQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ3RFLENBQUMsQ0FBQyxDQUFBO0lBQ0gsQ0FBQztJQVZELE9BQWMsU0FBUztRQUN0QixNQUFNLENBQUMsSUFBSSxNQUFNLEVBQUUsQ0FBQztJQUNyQixDQUFDO0FBU0YsQ0FBQztBQUNELE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQztBQUNuQjtrQkFBZSxpQkFBRyxDQUFDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOltudWxsXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
