"use strict";
const zendesk_controller_1 = require('./zendesk.controller');
class ZendeskRoutes {
    constructor(rout) {
        this.zendesk = new zendesk_controller_1.default();
        this.router = rout;
        this.router.get('/zendesk/search/:search', this.zendesk.search);
        this.router.get('/zendesk/article/:id', this.zendesk.getArticleById);
        this.router.get('/zendesk/articles', this.zendesk.getAllArticles);
    }
}
exports.ZendeskRoutes = ZendeskRoutes;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcGkvemVuZGVzay9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EscUNBQW9CLHNCQUFzQixDQUFDLENBQUE7QUFDM0M7SUFJQyxZQUFZLElBQUk7UUFGaEIsWUFBTyxHQUFZLElBQUksNEJBQU8sRUFBRSxDQUFDO1FBR2hDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ25CLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLHlCQUF5QixFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDaEUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUNyRSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ25FLENBQUM7QUFFRixDQUFDO0FBWFkscUJBQWEsZ0JBV3pCLENBQUEiLCJmaWxlIjoiYXBpL3plbmRlc2svaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6W251bGxdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
