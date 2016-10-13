"use strict";
const renew_quotes_controller_1 = require('./renew_quotes.controller');
class RenewalRoutes {
    constructor(rout) {
        this.renewQuotes = new renew_quotes_controller_1.default();
        this.router = rout;
        this.router.put('/users/me', this.renewQuotes.saveQuote);
        this.router.get('/users/me/quote', this.renewQuotes.retrieve);
        this.router.put('/users/me/cover/:coverlevel', this.renewQuotes.toggleCoverLevel);
        this.router.put('/users/me/members/:memberId', this.renewQuotes.addMember);
        this.router.delete('/users/me/members/:memberId', this.renewQuotes.removeMember);
    }
}
exports.RenewalRoutes = RenewalRoutes;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcGkvcmVuZXdfcXVvdGVzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSwwQ0FBd0IsMkJBQTJCLENBQUMsQ0FBQTtBQUNwRDtJQUlDLFlBQVksSUFBSTtRQUZoQixnQkFBVyxHQUFnQixJQUFJLGlDQUFXLEVBQUUsQ0FBQztRQUc1QyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNuQixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzlELElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLDZCQUE2QixFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUNsRixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzNFLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLDZCQUE2QixFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDbEYsQ0FBQztBQUVGLENBQUM7QUFiWSxxQkFBYSxnQkFhekIsQ0FBQSIsImZpbGUiOiJhcGkvcmVuZXdfcXVvdGVzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOltudWxsXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
