"use strict";
const constants_motor_1 = require('./../../constants_motor');
const constants_occupations_1 = require('./../../constants_occupations');
const Fuse = require('fuse.js');
class Motor {
    constructor() {
        this.getOccupation = (req, res) => {
            let list = this.fuseList.search(req.query.query);
            res.send(JSON.stringify(list));
        };
        this.fuseList = new Fuse(constants_occupations_1.OCCUPATIONS, {
            shouldSort: true,
            location: 0,
            threshold: 0.2,
            distance: 100,
            keys: ['text']
        });
    }
    getConfig(req, res) {
        res.send(constants_motor_1.CONFIG);
    }
    getAllOccupations(req, res) {
        res.send(JSON.stringify(constants_occupations_1.OCCUPATIONS));
    }
    getSection(req, res) {
        let section = constants_motor_1.PAGES[req.params.section];
        res.send(JSON.stringify(section)).status(200);
    }
    getSectionQuestions(req, res) {
        let sectionQuestions = constants_motor_1.QUESTIONS[req.params.section];
        res.send(JSON.stringify(sectionQuestions)).status(200);
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Motor;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcGkvbW90b3IvbW90b3IuY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUEsa0NBQXlDLHlCQUF5QixDQUFDLENBQUE7QUFDbkUsd0NBQTRCLCtCQUErQixDQUFDLENBQUE7QUFDNUQsTUFBWSxJQUFJLFdBQU0sU0FBUyxDQUFDLENBQUE7QUFFaEM7SUFHQztRQWlCQSxrQkFBYSxHQUFHLENBQUMsR0FBb0IsRUFBRSxHQUFxQjtZQUMzRCxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2pELEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ2hDLENBQUMsQ0FBQTtRQW5CQSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksSUFBSSxDQUFDLG1DQUFXLEVBQUU7WUFDckMsVUFBVSxFQUFFLElBQUk7WUFDaEIsUUFBUSxFQUFFLENBQUM7WUFDWCxTQUFTLEVBQUUsR0FBRztZQUNkLFFBQVEsRUFBRSxHQUFHO1lBQ2IsSUFBSSxFQUFFLENBQUMsTUFBTSxDQUFDO1NBQ2QsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVELFNBQVMsQ0FBQyxHQUFvQixFQUFFLEdBQXFCO1FBQ3BELEdBQUcsQ0FBQyxJQUFJLENBQUMsd0JBQU0sQ0FBQyxDQUFDO0lBQ2xCLENBQUM7SUFDRCxpQkFBaUIsQ0FBQyxHQUFvQixFQUFFLEdBQXFCO1FBQzVELEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxtQ0FBVyxDQUFDLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBUUQsVUFBVSxDQUFDLEdBQW9CLEVBQUUsR0FBcUI7UUFDckQsSUFBSSxPQUFPLEdBQUcsdUJBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3hDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUUvQyxDQUFDO0lBRUQsbUJBQW1CLENBQUMsR0FBb0IsRUFBRSxHQUFxQjtRQUM5RCxJQUFJLGdCQUFnQixHQUFHLDJCQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNyRCxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN4RCxDQUFDO0FBRUYsQ0FBQztBQXJDRDt1QkFxQ0MsQ0FBQSIsImZpbGUiOiJhcGkvbW90b3IvbW90b3IuY29udHJvbGxlci5qcyIsInNvdXJjZXNDb250ZW50IjpbbnVsbF19
