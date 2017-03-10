"use strict";
const constants_motor_1 = require('./../../constants_motor');
const constants_occupations_1 = require('./../../constants_occupations');
const constants_address_1 = require('./../../constants_address');
const constants_carmakes_1 = require('./../../constants_carmakes');
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
            // let response = {
            // 	dateOfRegistration: '01/01/2015',
            // 	carMake: {description:'Renault', id:'Renault'},
            // 	carModel: { description: 'Fiesta', id: 'Fiesta' },
            // 	engineSize: { id: '1500cc - 1999cc', description: '1500cc - 1999cc' },
            // 	exactModel: {description:'FIESTA 1.6I 16V ZETEC MANUAL Hatchback 1596cc PETROL', id: 'ford'}
            // }
            let response = {
                dateOfRegistration: '01/01/2015',
                "carMake": {
                    "id": "nissan", "description": "NISSAN",
                },
                "carModel": {
                    "id": "almera", "description": "ALMERA FLARE",
                },
                "engineSize": {
                    id: '1500cc - 1999cc', description: '1500cc - 1999cc'
                },
                "fuelType": {
                    "id": "0", "description": "Petrol",
                }
            };
            res.send(JSON.stringify(response));
        };
        this.getCarMake = (req, res) => {
            let list = this.carList.search(req.query.query);
            res.send(JSON.stringify(list));
        };
        this.fuseList = new Fuse(constants_occupations_1.OCCUPATIONS, {
            shouldSort: true,
            location: 0,
            threshold: 0.2,
            distance: 100,
            keys: ['description']
        });
        this.countiesList = new Fuse(constants_address_1.COUNTIES, {
            shouldSort: true,
            location: 0,
            threshold: 0.2,
            distance: 100,
            keys: ['description']
        });
        this.townList = new Fuse(constants_address_1.TOWNS, {
            shouldSort: true,
            location: 0,
            threshold: 0.2,
            distance: 100,
            keys: ['description']
        });
        this.carList = new Fuse(constants_carmakes_1.CARMAKES, {
            shouldSort: true,
            location: 0,
            threshold: 0.2,
            distance: 100,
            keys: ['description']
        });
    }
    updatePage(req, res) {
        res.status(400).send('There was a problem in the last section');
    }
    updateSection(req, res) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcGkvbW90b3IvbW90b3IuY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUEsa0NBQXlDLHlCQUF5QixDQUFDLENBQUE7QUFDbkUsd0NBQTRCLCtCQUErQixDQUFDLENBQUE7QUFDNUQsb0NBQTJELDJCQUEyQixDQUFDLENBQUE7QUFDdkYscUNBQXlCLDRCQUE0QixDQUFDLENBQUE7QUFDdEQsTUFBWSxJQUFJLFdBQU0sU0FBUyxDQUFDLENBQUE7QUFLaEM7SUFNQztRQWlEQSxrQkFBYSxHQUFHLENBQUMsR0FBb0IsRUFBRSxHQUFxQjtZQUMzRCxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2pELEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ2hDLENBQUMsQ0FBQTtRQVlELG9CQUFvQjtRQUVwQixZQUFPLEdBQUcsQ0FBQyxHQUFvQixFQUFFLEdBQXFCO1lBQ3JELElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDakQsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDaEMsQ0FBQyxDQUFBO1FBQ0QsY0FBUyxHQUFHLENBQUMsR0FBb0IsRUFBRSxHQUFxQjtZQUN2RCxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3JELEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ2hDLENBQUMsQ0FBQTtRQUVELGVBQVUsR0FBRyxDQUFD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QztJQUVELGFBQWEsQ0FBQyxHQUFvQixFQUFFLEdBQXFCO0lBRXpELENBQUM7SUFFRCxTQUFTLENBQUMsR0FBb0IsRUFBRSxHQUFxQjtRQUNwRCxHQUFHLENBQUMsSUFBSSxDQUFDLHdCQUFNLENBQUMsQ0FBQztJQUNsQixDQUFDO0lBQ0QsaUJBQWlCLENBQUMsR0FBb0IsRUFBRSxHQUFxQjtRQUM1RCxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsbUNBQVcsQ0FBQyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQU9ELFVBQVUsQ0FBQyxHQUFvQixFQUFFLEdBQXFCO1FBQ3JELElBQUksT0FBTyxHQUFHLHVCQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN4QyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVELG1CQUFtQixDQUFDLEdBQW9CLEVBQUUsR0FBcUI7UUFDOUQsSUFBSSxnQkFBZ0IsR0FBRywyQkFBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDckQsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDeEQsQ0FBQztBQXNERixDQUFDO0FBMUhEO3VCQTBIQyxDQUFBIiwiZmlsZSI6ImFwaS9tb3Rvci9tb3Rvci5jb250cm9sbGVyLmpzIiwic291cmNlc0NvbnRlbnQiOltudWxsXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
