"use strict";
const membership_controller_1 = require('./membership.controller');
class MembershipRoutes {
    constructor(rout) {
        this.router = rout;
        this.router.get('/config', membership_controller_1.default.getConfig);
    }
}
exports.MembershipRoutes = MembershipRoutes;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcGkvbWVtYmVyc2hpcC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0Esd0NBQXVCLHlCQUF5QixDQUFDLENBQUE7QUFDakQ7SUFHQyxZQUFZLElBQUk7UUFDZixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNuQixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsK0JBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNsRCxDQUFDO0FBRUYsQ0FBQztBQVJZLHdCQUFnQixtQkFRNUIsQ0FBQSIsImZpbGUiOiJhcGkvbWVtYmVyc2hpcC9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbbnVsbF19
