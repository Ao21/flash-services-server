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
    getAllOccupations(req, res) {
        res.send(JSON.stringify(constants_occupations_1.OCCUPATIONS));
    }
    getSection(req, res) {
        let section = constants_motor_1.SECTION[req.params.section];
        section.questions = constants_motor_1.QUESTIONS[req.params.section];
        res.send(JSON.stringify(section)).status(200);
    }
    getSectionQuestions(req, res) {
        let sectionQuestions = constants_motor_1.QUESTIONS[req.params.section];
        res.send(JSON.stringify(sectionQuestions)).status(200);
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Motor;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcGkvbW90b3IvbW90b3IuY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUEsa0NBQW1DLHlCQUF5QixDQUFDLENBQUE7QUFDN0Qsd0NBQTRCLCtCQUErQixDQUFDLENBQUE7QUFDNUQsTUFBWSxJQUFJLFdBQU0sU0FBUyxDQUFDLENBQUE7QUFFaEM7SUFHQztRQWNBLGtCQUFhLEdBQUcsQ0FBQyxHQUFvQixFQUFFLEdBQXFCO1lBQzNELElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDakQsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDaEMsQ0FBQyxDQUFBO1FBaEJBLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxJQUFJLENBQUMsbUNBQVcsRUFBRTtZQUNyQyxVQUFVLEVBQUUsSUFBSTtZQUNoQixRQUFRLEVBQUUsQ0FBQztZQUNYLFNBQVMsRUFBRSxHQUFHO1lBQ2QsUUFBUSxFQUFFLEdBQUc7WUFDYixJQUFJLEVBQUUsQ0FBQyxNQUFNLENBQUM7U0FDZCxDQUFDLENBQUM7SUFDSixDQUFDO0lBRUQsaUJBQWlCLENBQUMsR0FBb0IsRUFBRSxHQUFxQjtRQUM1RCxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsbUNBQVcsQ0FBQyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQVFELFVBQVUsQ0FBQyxHQUFvQixFQUFFLEdBQXFCO1FBQ3JELElBQUksT0FBTyxHQUFHLHlCQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMxQyxPQUFPLENBQUMsU0FBUyxHQUFHLDJCQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNsRCxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7SUFFL0MsQ0FBQztJQUVELG1CQUFtQixDQUFDLEdBQW9CLEVBQUUsR0FBcUI7UUFDOUQsSUFBSSxnQkFBZ0IsR0FBRywyQkFBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDckQsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDeEQsQ0FBQztBQUVGLENBQUM7QUFuQ0Q7dUJBbUNDLENBQUEiLCJmaWxlIjoiYXBpL21vdG9yL21vdG9yLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VzQ29udGVudCI6W251bGxdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
