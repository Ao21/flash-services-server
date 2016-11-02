"use strict";
const constants_motor_1 = require('./../../constants_motor');
class Motor {
    constructor() {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcGkvbW90b3IvbW90b3IuY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUEsa0NBQW1DLHlCQUF5QixDQUFDLENBQUE7QUFFN0Q7SUFFQztJQUVBLENBQUM7SUFFRCxVQUFVLENBQUMsR0FBb0IsRUFBRSxHQUFxQjtRQUNyRCxJQUFJLE9BQU8sR0FBRyx5QkFBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDMUMsT0FBTyxDQUFDLFNBQVMsR0FBRywyQkFBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbEQsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBRS9DLENBQUM7SUFFRCxtQkFBbUIsQ0FBQyxHQUFvQixFQUFFLEdBQXFCO1FBQzlELElBQUksZ0JBQWdCLEdBQUcsMkJBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JELEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3hELENBQUM7QUFFRixDQUFDO0FBbEJEO3VCQWtCQyxDQUFBIiwiZmlsZSI6ImFwaS9tb3Rvci9tb3Rvci5jb250cm9sbGVyLmpzIiwic291cmNlc0NvbnRlbnQiOltudWxsXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
