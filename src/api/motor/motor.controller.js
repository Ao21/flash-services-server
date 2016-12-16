"use strict";
const constants_motor_1 = require('./../../constants_motor');
const constants_occupations_1 = require('./../../constants_occupations');
const constants_address_1 = require('./../../constants_address');
const Fuse = require('fuse.js');
class Motor {
    constructor() {
        this.getOccupation = (req, res) => {
            let list = this.fuseList.search(req.query.query);
            res.send(JSON.stringify(list));
        };
        /** Address Calls */
        this.getTown = (req, res) => {
            let list = this.townList.search(req.query.query);
            res.send(JSON.stringify(list));
        };
        this.getCounty = (req, res) => {
            let list = this.countiesList.search(req.query.query);
            res.send(JSON.stringify(list));
        };
        this.putAddress = (req, res) => {
            res.send(JSON.stringify(constants_address_1.GEOCODE));
        };
        this.selectAddress = (req, res) => {
            res.send(JSON.stringify(constants_address_1.GEOCODE_SELECTED));
        };
        /** Car Calls */
        this.getVehicleRegistration = (req, res) => {
            let response = {
                dateOfRegistration: '01/01/2015',
                carMake: { text: 'Renault', value: 'Renault' },
                carModel: { text: 'Fiesta', value: 'Fiesta' },
                engineSize: '1500cc - 1999cc',
                exactModel: { text: 'FIESTA 1.6I 16V ZETEC MANUAL Hatchback 1596cc PETROL', value: 'ford' }
            };
            res.send(JSON.stringify(response));
        };
        this.fuseList = new Fuse(constants_occupations_1.OCCUPATIONS, {
            shouldSort: true,
            location: 0,
            threshold: 0.2,
            distance: 100,
            keys: ['text']
        });
        this.countiesList = new Fuse(constants_address_1.COUNTIES, {
            shouldSort: true,
            location: 0,
            threshold: 0.2,
            distance: 100,
            keys: ['text']
        });
        this.townList = new Fuse(constants_address_1.TOWNS, {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcGkvbW90b3IvbW90b3IuY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUEsa0NBQXlDLHlCQUF5QixDQUFDLENBQUE7QUFDbkUsd0NBQTRCLCtCQUErQixDQUFDLENBQUE7QUFDNUQsb0NBQTJELDJCQUEyQixDQUFDLENBQUE7QUFDdkYsTUFBWSxJQUFJLFdBQU0sU0FBUyxDQUFDLENBQUE7QUFFaEM7SUFLQztRQWlDQSxrQkFBYSxHQUFHLENBQUMsR0FBb0IsRUFBRSxHQUFxQjtZQUMzRCxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2pELEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ2hDLENBQUMsQ0FBQTtRQVlELG9CQUFvQjtRQUVwQixZQUFPLEdBQUcsQ0FBQyxHQUFvQixFQUFFLEdBQXFCO1lBQ3JELElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDakQsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDaEMsQ0FBQyxDQUFBO1FBQ0QsY0FBUyxHQUFHLENBQUMsR0FBb0IsRUFBRSxHQUFxQjtZQUN2RCxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3JELEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ2hDLENBQUMsQ0FBQTtRQUVELGVBQVUsR0FBRyxDQUFDLEdBQW9CLEVBQUUsR0FBcUI7WUFDeEQsR0FBRyxD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
