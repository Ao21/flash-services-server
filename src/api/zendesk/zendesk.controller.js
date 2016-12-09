"use strict";
const _ = require('lodash');
let zendesk = require('node-zendesk');
class ZendeskController {
    constructor() {
        this.isArticlesLoaded = false;
        this.search = (req, res) => {
            let els = _.filter(this.articles, (e) => { return e.draft == true; });
            res.send(JSON.stringify(els));
        };
        this.getArticleById = (req, res) => {
            res.send(JSON.stringify(_.find(this.articles, (e) => e.id == req.params.id)));
        };
        this.getAllArticles = (req, res) => {
            res.send(JSON.stringify(this.articles));
        };
        this.client = zendesk.createClient({
            username: 'vicky.sargeant@theaa.ie',
            token: 'sU9puhOh6NhZOHqYP2x5dOcyRi7rKsGlmvQJ8804',
            remoteUri: 'https://theaaireland.zendesk.com/api/v2/help_center/',
            helpcenter: true,
        });
        this.client.articles.list((err, req, res) => {
            this.articles = res;
            this.isArticlesLoaded = true;
        });
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ZendeskController;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcGkvemVuZGVzay96ZW5kZXNrLmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE1BQVksQ0FBQyxXQUFNLFFBQVEsQ0FBQyxDQUFBO0FBQzVCLElBQUksT0FBTyxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUV0QztJQU1DO1FBRkEscUJBQWdCLEdBQVksS0FBSyxDQUFDO1FBZ0JsQyxXQUFNLEdBQUcsQ0FBQyxHQUFvQixFQUFFLEdBQXFCO1lBQ3BELElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQU0sT0FBTyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxRSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUMvQixDQUFDLENBQUE7UUFFRCxtQkFBYyxHQUFHLENBQUMsR0FBb0IsRUFBRSxHQUFxQjtZQUM1RCxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBSyxLQUFNLENBQUMsQ0FBQyxFQUFFLElBQUksR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEYsQ0FBQyxDQUFBO1FBRUQsbUJBQWMsR0FBRyxDQUFDLEdBQW9CLEVBQUUsR0FBcUI7WUFDNUQsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ3pDLENBQUMsQ0FBQTtRQXhCQSxJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUM7WUFDbEMsUUFBUSxFQUFFLHlCQUF5QjtZQUNuQyxLQUFLLEVBQUUsMENBQTBDO1lBQ2pELFNBQVMsRUFBRSxzREFBc0Q7WUFDakUsVUFBVSxFQUFFLElBQUk7U0FDaEIsQ0FBQyxDQUFBO1FBRUYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHO1lBQ3ZDLElBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7UUFDOUIsQ0FBQyxDQUFDLENBQUE7SUFDSCxDQUFDO0FBY0YsQ0FBQztBQWhDRDttQ0FnQ0MsQ0FBQSIsImZpbGUiOiJhcGkvemVuZGVzay96ZW5kZXNrLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VzQ29udGVudCI6W251bGxdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
