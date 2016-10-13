"use strict";
const express = require("express");
const index_1 = require('./api/membership/index');
const _1 = require('./api/renew_quotes/');
class Routes {
    constructor() {
        this.router = express.Router();
        this.createMembershipRoutes();
        this.createRenewalRoutes();
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
}
exports.Routes = Routes;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Routes;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9yb3V0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE1BQVksT0FBTyxXQUFNLFNBQVMsQ0FBQyxDQUFBO0FBQ25DLHdCQUFpQyx3QkFBd0IsQ0FBQyxDQUFBO0FBQzFELG1CQUE4QixxQkFBcUIsQ0FBQyxDQUFBO0FBRXBEO0lBV0M7UUFDQyxJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUMvQixJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztRQUM5QixJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBUkQsT0FBYyxTQUFTO1FBQ3RCLE1BQU0sQ0FBQyxJQUFJLE1BQU0sRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFRRCxzQkFBc0I7UUFDckIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksd0JBQWdCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFRCxtQkFBbUI7UUFDbEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLGdCQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3JELENBQUM7QUFDRixDQUFDO0FBeEJZLGNBQU0sU0F3QmxCLENBQUE7QUFFRDtrQkFBZSxNQUFNLENBQUMiLCJmaWxlIjoicm91dGVzLmpzIiwic291cmNlc0NvbnRlbnQiOltudWxsXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
