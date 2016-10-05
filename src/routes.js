"use strict";
const express = require("express");
const index_1 = require('./api/membership/index');
class Routes {
    constructor() {
        this.router = express.Router();
        this.createMembershipRoutes();
    }
    static bootstrap() {
        return new Routes();
    }
    createMembershipRoutes() {
        this.membershipRoutes = new index_1.MembershipRoutes(this.router);
    }
}
exports.Routes = Routes;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Routes;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9yb3V0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE1BQVksT0FBTyxXQUFNLFNBQVMsQ0FBQyxDQUFBO0FBQ25DLHdCQUFpQyx3QkFBd0IsQ0FBQyxDQUFBO0FBRTFEO0lBVUM7UUFDQyxJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUMvQixJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztJQUMvQixDQUFDO0lBUEQsT0FBYyxTQUFTO1FBQ3RCLE1BQU0sQ0FBQyxJQUFJLE1BQU0sRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFPRCxzQkFBc0I7UUFDckIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksd0JBQWdCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzNELENBQUM7QUFDRixDQUFDO0FBbEJZLGNBQU0sU0FrQmxCLENBQUE7QUFFRDtrQkFBZSxNQUFNLENBQUMiLCJmaWxlIjoicm91dGVzLmpzIiwic291cmNlc0NvbnRlbnQiOltudWxsXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
