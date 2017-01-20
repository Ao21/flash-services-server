"use strict";
const _ = require('lodash');
let zendesk = require('node-zendesk');
const defaultHelp = {
    "id": 1001,
    "url": "https://theaaireland.zendesk.com/api/v2/help_center/en-ie/articles/214205625-First-Name.json",
    "html_url": "https://theaaireland.zendesk.com/hc/en-ie/articles/214205625-First-Name",
    "author_id": 560309542,
    "comments_disabled": true,
    "label_names": ["motor-journey"],
    "draft": true,
    "promoted": false,
    "position": 0,
    "vote_sum": 0,
    "vote_count": 0,
    "section_id": 201802795,
    "created_at": "2016-11-28T14:20:17Z",
    "updated_at": "2016-11-29T10:27:58Z",
    "name": "First Name",
    "title": "CONGRATS",
    "body": "<p>You found the help!</p>",
    "source_locale": "en-ie",
    "locale": "en-ie",
    "outdated": false,
    "outdated_locales": []
};
class ZendeskController {
    constructor() {
        this.isArticlesLoaded = false;
        this.search = (req, res) => {
            let els = _.filter(this.articles, (e) => { return e.draft == true; });
            res.send(JSON.stringify(els));
        };
        this.getArticleById = (req, res) => {
            console.log(req);
            if (req.params.id === '1001') {
                return res.send(JSON.stringify(defaultHelp));
            }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcGkvemVuZGVzay96ZW5kZXNrLmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE1BQVksQ0FBQyxXQUFNLFFBQVEsQ0FBQyxDQUFBO0FBQzVCLElBQUksT0FBTyxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUV0QyxNQUFNLFdBQVcsR0FBRztJQUNuQixJQUFJLEVBQUUsSUFBSTtJQUNWLEtBQUssRUFBRSw4RkFBOEY7SUFDckcsVUFBVSxFQUFFLHlFQUF5RTtJQUNyRixXQUFXLEVBQUUsU0FBUztJQUN0QixtQkFBbUIsRUFBRSxJQUFJO0lBQ3pCLGFBQWEsRUFBRSxDQUFDLGVBQWUsQ0FBQztJQUNoQyxPQUFPLEVBQUUsSUFBSTtJQUNiLFVBQVUsRUFBRSxLQUFLO0lBQ2pCLFVBQVUsRUFBRSxDQUFDO0lBQ2IsVUFBVSxFQUFFLENBQUM7SUFDYixZQUFZLEVBQUUsQ0FBQztJQUNmLFlBQVksRUFBRSxTQUFTO0lBQ3ZCLFlBQVksRUFBRSxzQkFBc0I7SUFDcEMsWUFBWSxFQUFFLHNCQUFzQjtJQUNwQyxNQUFNLEVBQUUsWUFBWTtJQUNwQixPQUFPLEVBQUUsVUFBVTtJQUNuQixNQUFNLEVBQUUsNEJBQTRCO0lBQ3BDLGVBQWUsRUFBRSxPQUFPO0lBQ3hCLFFBQVEsRUFBRSxPQUFPO0lBQ2pCLFVBQVUsRUFBRSxLQUFLO0lBQ2pCLGtCQUFrQixFQUFFLEVBQUU7Q0FDdEIsQ0FBQztBQUVGO0lBTUM7UUFGQSxxQkFBZ0IsR0FBWSxLQUFLLENBQUM7UUFnQmxDLFdBQU0sR0FBRyxDQUFDLEdBQW9CLEVBQUUsR0FBcUI7WUFDcEQsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBTSxPQUFPLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQy9CLENBQUMsQ0FBQTtRQUVELG1CQUFjLEdBQUcsQ0FBQyxHQUFvQixFQUFFLEdBQXFCO1lBQzVELE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDakIsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDOUIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQzlDLENBQUM7WUFDRCxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBSyxLQUFNLENBQUMsQ0FBQyxFQUFFLElBQUksR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEYsQ0FBQyxDQUFBO1FBRUQsbUJBQWMsR0FBRyxDQUFDLEdBQW9CLEVBQUUsR0FBcUI7WUFDNUQsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ3pDLENBQUMsQ0FBQTtRQTVCQSxJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUM7WUFDbEMsUUFBUSxFQUFFLHlCQUF5QjtZQUNuQyxLQUFLLEVBQUUsMENBQTBDO1lBQ2pELFNBQVMsRUFBRSxzREFBc0Q7WUFDakUsVUFBVSxFQUFFLElBQUk7U0FDaEIsQ0FBQyxDQUFBO1FBRUYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHO1lBQ3ZDLElBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7UUFDOUIsQ0FBQyxDQUFDLENBQUE7SUFDSCxDQUFDO0FBa0JGLENBQUM7QUFwQ0Q7bUNBb0NDLENBQUEiLCJmaWxlIjoiYXBpL3plbmRlc2svemVuZGVzay5jb250cm9sbGVyLmpzIiwic291cmNlc0NvbnRlbnQiOltudWxsXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
