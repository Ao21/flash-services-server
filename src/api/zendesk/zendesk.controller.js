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
            return res.send(JSON.stringify(defaultHelp));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcGkvemVuZGVzay96ZW5kZXNrLmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE1BQVksQ0FBQyxXQUFNLFFBQVEsQ0FBQyxDQUFBO0FBQzVCLElBQUksT0FBTyxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUV0QyxNQUFNLFdBQVcsR0FBRztJQUNuQixJQUFJLEVBQUUsSUFBSTtJQUNWLEtBQUssRUFBRSw4RkFBOEY7SUFDckcsVUFBVSxFQUFFLHlFQUF5RTtJQUNyRixXQUFXLEVBQUUsU0FBUztJQUN0QixtQkFBbUIsRUFBRSxJQUFJO0lBQ3pCLGFBQWEsRUFBRSxDQUFDLGVBQWUsQ0FBQztJQUNoQyxPQUFPLEVBQUUsSUFBSTtJQUNiLFVBQVUsRUFBRSxLQUFLO0lBQ2pCLFVBQVUsRUFBRSxDQUFDO0lBQ2IsVUFBVSxFQUFFLENBQUM7SUFDYixZQUFZLEVBQUUsQ0FBQztJQUNmLFlBQVksRUFBRSxTQUFTO0lBQ3ZCLFlBQVksRUFBRSxzQkFBc0I7SUFDcEMsWUFBWSxFQUFFLHNCQUFzQjtJQUNwQyxNQUFNLEVBQUUsWUFBWTtJQUNwQixPQUFPLEVBQUUsVUFBVTtJQUNuQixNQUFNLEVBQUUsNEJBQTRCO0lBQ3BDLGVBQWUsRUFBRSxPQUFPO0lBQ3hCLFFBQVEsRUFBRSxPQUFPO0lBQ2pCLFVBQVUsRUFBRSxLQUFLO0lBQ2pCLGtCQUFrQixFQUFFLEVBQUU7Q0FDdEIsQ0FBQztBQUVGO0lBTUM7UUFGQSxxQkFBZ0IsR0FBWSxLQUFLLENBQUM7UUFnQmxDLFdBQU0sR0FBRyxDQUFDLEdBQW9CLEVBQUUsR0FBcUI7WUFDcEQsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBTSxPQUFPLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQy9CLENBQUMsQ0FBQTtRQUVELG1CQUFjLEdBQUcsQ0FBQyxHQUFvQixFQUFFLEdBQXFCO1lBQzVELE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztRQUM5QyxDQUFDLENBQUE7UUFFRCxtQkFBYyxHQUFHLENBQUMsR0FBb0IsRUFBRSxHQUFxQjtZQUM1RCxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDekMsQ0FBQyxDQUFBO1FBeEJBLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQztZQUNsQyxRQUFRLEVBQUUseUJBQXlCO1lBQ25DLEtBQUssRUFBRSwwQ0FBMEM7WUFDakQsU0FBUyxFQUFFLHNEQUFzRDtZQUNqRSxVQUFVLEVBQUUsSUFBSTtTQUNoQixDQUFDLENBQUE7UUFFRixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUc7WUFDdkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7WUFDcEIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztRQUM5QixDQUFDLENBQUMsQ0FBQTtJQUNILENBQUM7QUFjRixDQUFDO0FBaENEO21DQWdDQyxDQUFBIiwiZmlsZSI6ImFwaS96ZW5kZXNrL3plbmRlc2suY29udHJvbGxlci5qcyIsInNvdXJjZXNDb250ZW50IjpbbnVsbF0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
