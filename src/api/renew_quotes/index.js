"use strict";
const renew_quotes_controller_1 = require('./renew_quotes.controller');
class RenewalRoutes {
    constructor(rout) {
        this.renewQuotes = new renew_quotes_controller_1.default();
        this.router = rout;
        this.router.put('/reset', this.renewQuotes.reset);
        this.router.put('/users/me', this.renewQuotes.saveQuote);
        this.router.get('/users/me/quote', this.renewQuotes.retrieve);
        this.router.put('/users/me/offer', this.renewQuotes.offer);
        this.router.put('/users/me/cover/:coverlevel', this.renewQuotes.toggleCoverLevel);
        this.router.put('/users/me/members/:memberId', this.renewQuotes.addMember);
        this.router.delete('/users/me/members/:memberId', this.renewQuotes.removeMember);
    }
}
exports.RenewalRoutes = RenewalRoutes;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcGkvcmVuZXdfcXVvdGVzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSwwQ0FBd0IsMkJBQTJCLENBQUMsQ0FBQTtBQUNwRDtJQUlDLFlBQVksSUFBSTtRQUZoQixnQkFBVyxHQUFnQixJQUFJLGlDQUFXLEVBQUUsQ0FBQztRQUc1QyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNuQixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzlELElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ2xGLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLDZCQUE2QixFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDM0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsNkJBQTZCLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNsRixDQUFDO0FBRUYsQ0FBQztBQWZZLHFCQUFhLGdCQWV6QixDQUFBIiwiZmlsZSI6ImFwaS9yZW5ld19xdW90ZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6W251bGxdfQ==
