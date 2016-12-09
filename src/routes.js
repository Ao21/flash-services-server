"use strict";
const express = require("express");
const index_1 = require('./api/membership/index');
const _1 = require('./api/renew_quotes/');
const _2 = require('./api/motor/');
const _3 = require('./api/zendesk/');
class Routes {
    constructor() {
        this.router = express.Router();
        this.createMembershipRoutes();
        this.createRenewalRoutes();
        this.createMotorRoutes();
        this.createZendeskRoutes();
    }
    static bootstrap() {
        return new Routes();
    }
    createMembershipRoutes() {
        this.membershipRoutes = new index_1.MembershipRoutes(this.router);
    }
    createRenewalRoutes() {
        this.renewalRoutes = new _1.RenewalRoutes(this.router);
    }
    createMotorRoutes() {
        this.motorRoutes = new _2.MotorRoutes(this.router);
    }
    createZendeskRoutes() {
        this.zendeskRoutes = new _3.ZendeskRoutes(this.router);
    }
}
exports.Routes = Routes;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Routes;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9yb3V0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE1BQVksT0FBTyxXQUFNLFNBQVMsQ0FBQyxDQUFBO0FBQ25DLHdCQUFpQyx3QkFBd0IsQ0FBQyxDQUFBO0FBQzFELG1CQUE4QixxQkFBcUIsQ0FBQyxDQUFBO0FBQ3BELG1CQUE0QixjQUFjLENBQUMsQ0FBQTtBQUMzQyxtQkFBOEIsZ0JBQWdCLENBQUMsQ0FBQTtBQUUvQztJQWFDO1FBQ0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDL0IsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDNUIsQ0FBQztJQVZELE9BQWMsU0FBUztRQUN0QixNQUFNLENBQUMsSUFBSSxNQUFNLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBVUQsc0JBQXNCO1FBQ3JCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLHdCQUFnQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRUQsbUJBQW1CO1FBQ2xCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxnQkFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRUQsaUJBQWlCO1FBQ2hCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxjQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFRCxtQkFBbUI7UUFDbEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLGdCQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3JELENBQUM7QUFDRixDQUFDO0FBcENZLGNBQU0sU0FvQ2xCLENBQUE7QUFFRDtrQkFBZSxNQUFNLENBQUMiLCJmaWxlIjoicm91dGVzLmpzIiwic291cmNlc0NvbnRlbnQiOltudWxsXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
