"use strict";
const express = require("express");
const index_1 = require('./api/membership/index');
const _1 = require('./api/renew_quotes/');
const _2 = require('./api/motor/');
class Routes {
    constructor() {
        this.router = express.Router();
        this.createMembershipRoutes();
        this.createRenewalRoutes();
        this.createMotorRoutes();
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
}
exports.Routes = Routes;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Routes;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9yb3V0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE1BQVksT0FBTyxXQUFNLFNBQVMsQ0FBQyxDQUFBO0FBQ25DLHdCQUFpQyx3QkFBd0IsQ0FBQyxDQUFBO0FBQzFELG1CQUE4QixxQkFBcUIsQ0FBQyxDQUFBO0FBQ3BELG1CQUE0QixjQUFjLENBQUMsQ0FBQTtBQUUzQztJQVlDO1FBQ0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDL0IsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDMUIsQ0FBQztJQVRELE9BQWMsU0FBUztRQUN0QixNQUFNLENBQUMsSUFBSSxNQUFNLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBU0Qsc0JBQXNCO1FBQ3JCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLHdCQUFnQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRUQsbUJBQW1CO1FBQ2xCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxnQkFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRUQsaUJBQWlCO1FBQ2hCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxjQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2pELENBQUM7QUFDRixDQUFDO0FBOUJZLGNBQU0sU0E4QmxCLENBQUE7QUFFRDtrQkFBZSxNQUFNLENBQUMiLCJmaWxlIjoicm91dGVzLmpzIiwic291cmNlc0NvbnRlbnQiOltudWxsXX0=
