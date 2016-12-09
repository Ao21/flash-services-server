"use strict";
const _ = require('lodash');
let zendesk = require('node-zendesk');
class ZendeskController {
    constructor() {
        this.isArticlesLoaded = false;
        this.search = (req, res) => {
            let els = _.filter(this.articles, (e) => { return e.draft == true; });
            console.log(els);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcGkvemVuZGVzay96ZW5kZXNrLmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE1BQVksQ0FBQyxXQUFNLFFBQVEsQ0FBQyxDQUFBO0FBQzVCLElBQUksT0FBTyxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUV0QztJQU1DO1FBRkEscUJBQWdCLEdBQVksS0FBSyxDQUFDO1FBZ0JsQyxXQUFNLEdBQUcsQ0FBQyxHQUFvQixFQUFFLEdBQXFCO1lBQ3BELElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQU0sT0FBTyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxRSxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2pCLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQy9CLENBQUMsQ0FBQTtRQUVELG1CQUFjLEdBQUcsQ0FBQyxHQUFvQixFQUFFLEdBQXFCO1lBQzVELEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFLLEtBQU0sQ0FBQyxDQUFDLEVBQUUsSUFBSSxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNwRixDQUFDLENBQUE7UUFFRCxtQkFBYyxHQUFHLENBQUMsR0FBb0IsRUFBRSxHQUFxQjtZQUM1RCxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDekMsQ0FBQyxDQUFBO1FBekJBLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQztZQUNsQyxRQUFRLEVBQUUseUJBQXlCO1lBQ25DLEtBQUssRUFBRSwwQ0FBMEM7WUFDakQsU0FBUyxFQUFFLHNEQUFzRDtZQUNqRSxVQUFVLEVBQUUsSUFBSTtTQUNoQixDQUFDLENBQUE7UUFFRixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUc7WUFDdkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7WUFDcEIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztRQUM5QixDQUFDLENBQUMsQ0FBQTtJQUNILENBQUM7QUFlRixDQUFDO0FBakNEO21DQWlDQyxDQUFBIiwiZmlsZSI6ImFwaS96ZW5kZXNrL3plbmRlc2suY29udHJvbGxlci5qcyIsInNvdXJjZXNDb250ZW50IjpbbnVsbF0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
