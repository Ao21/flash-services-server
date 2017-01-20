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
            let response = {
                dateOfRegistration: '01/01/2015',
                carMake: { text: 'Renault', value: 'Renault' },
                carModel: { text: 'Fiesta', value: 'Fiesta' },
                engineSize: '1500cc - 1999cc',
                exactModel: { text: 'FIESTA 1.6I 16V ZETEC MANUAL Hatchback 1596cc PETROL', value: 'ford' }
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
        this.carList = new Fuse(constants_carmakes_1.CARMAKES, {
            shouldSort: true,
            location: 0,
            threshold: 0.2,
            distance: 100,
            keys: ['text']
        });
    }
    updatePage(req, res) {
        console.log(req.body);
        res.send(200);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcGkvbW90b3IvbW90b3IuY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUEsa0NBQXlDLHlCQUF5QixDQUFDLENBQUE7QUFDbkUsd0NBQTRCLCtCQUErQixDQUFDLENBQUE7QUFDNUQsb0NBQTJELDJCQUEyQixDQUFDLENBQUE7QUFDdkYscUNBQXlCLDRCQUE0QixDQUFDLENBQUE7QUFDdEQsTUFBWSxJQUFJLFdBQU0sU0FBUyxDQUFDLENBQUE7QUFLaEM7SUFNQztRQWtEQSxrQkFBYSxHQUFHLENBQUMsR0FBb0IsRUFBRSxHQUFxQjtZQUMzRCxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2pELEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ2hDLENBQUMsQ0FBQTtRQVlELG9CQUFvQjtRQUVwQixZQUFPLEdBQUcsQ0FBQyxHQUFvQixFQUFFLEdBQXFCO1lBQ3JELElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDakQsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDaEMsQ0FBQyxDQUFBO1FBQ0QsY0FBUyxHQUFHLENBQUMsR0FBb0IsRUFBRSxHQUFxQjtZQUN2RCxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3JELEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ2hDLENBQUMsQ0FBQTtRQUVELGVBQVUsR0FBRyxDQUFDLEdBQW9CLEVBQUUsR0FBcUI7WUFDeEQsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLDJCQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ25DLENBQUMsQ0FBQTtRQUVELGtCQUFhLEdBQUcsQ0FBQyxHQUFvQixFQUFFLEdBQXFCO1lBQzNELEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxvQ0FBZ0IsQ0FBQyxDQUFDLENBQUM7UUFDNUMsQ0FBQyxDQUFBO1FBRUQsZ0JBQWdCO1FBRWhCLDJCQUFzQixHQUFHLENBQUMsR0FBb0IsRUFBRSxHQUFxQjtZQUNwRSxJQUFJLFFBQVEsR0FBRztnQkFDZCxrQkFBa0IsRUFBRSxZQUFZO2dCQUNoQyxPQUFPLEVBQUUsRUFBQyxJQUFJLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBQyxTQUFTLEVBQUM7Z0JBQzFDLFFBQVEsRUFBRSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRTtnQkFDN0MsVUFBVSxFQUFFLGlCQUFpQjtnQkFDN0IsVUFBVSxFQUFFLEVBQUMsSUFBSSxFQUFDLHNEQUFzRCxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUM7YUFDeEYsQ0FBQTtZQUNELEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ3BDLENBQUMsQ0FBQTtRQUVELGVBQVUsR0FBRyxDQUFDLEdBQW9CLEVBQUUsR0FBcUI7WUFDeEQsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNoRCxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNoQyxDQUFDLENBQUE7UUFuR0EsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLElBQUksQ0FBQyxtQ0FBVyxFQUFFO1lBQ3JDLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLFFBQVEsRUFBRSxDQUFDO1lBQ1gsU0FBUyxFQUFFLEdBQUc7WUFDZCxRQUFRLEVBQUUsR0FBRztZQUNiLElBQUksRUFBRSxDQUFDLE1BQU0sQ0FBQztTQUNkLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxJQUFJLENBQUMsNEJBQVEsRUFBRTtZQUN0QyxVQUFVLEVBQUUsSUFBSTtZQUNoQixRQUFRLEVBQUUsQ0FBQztZQUNYLFNBQVMsRUFBRSxHQUFHO1lBQ2QsUUFBUSxFQUFFLEdBQUc7WUFDYixJQUFJLEVBQUUsQ0FBQyxNQUFNLENBQUM7U0FDZCxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksSUFBSSxDQUFDLHlCQUFLLEVBQUU7WUFDL0IsVUFBVSxFQUFFLElBQUk7WUFDaEIsUUFBUSxFQUFFLENBQUM7WUFDWCxTQUFTLEVBQUUsR0FBRztZQUNkLFFBQVEsRUFBRSxHQUFHO1lBQ2IsSUFBSSxFQUFFLENBQUMsTUFBTSxDQUFDO1NBQ2QsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLElBQUksQ0FBQyw2QkFBUSxFQUFFO1lBQ2pDLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLFFBQVEsRUFBRSxDQUFDO1lBQ1gsU0FBUyxFQUFFLEdBQUc7WUFDZCxRQUFRLEVBQUUsR0FBRztZQUNiLElBQUksRUFBRSxDQUFDLE1BQU0sQ0FBQztTQUNkLENBQUMsQ0FBQztJQUNKLENBQUM7SUFFRCxVQUFVLENBQUMsR0FBb0IsRUFBRSxHQUFxQjtRQUNyRCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2YsQ0FBQztJQUVELGFBQWEsQ0FBQyxHQUFvQixFQUFFLEdBQXFCO0lBRXpELENBQUM7SUFFRCxTQUFTLENBQUMsR0FBb0IsRUFBRSxHQUFxQjtRQUNwRCxHQUFHLENBQUMsSUFBSSxDQUFDLHdCQUFNLENBQUMsQ0FBQztJQUNsQixDQUFDO0lBQ0QsaUJBQWlCLENBQUMsR0FBb0IsRUFBRSxHQUFxQjtRQUM1RCxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsbUNBQVcsQ0FBQyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQU9ELFVBQVUsQ0FBQyxHQUFvQixFQUFFLEdBQXFCO1FBQ3JELElBQUksT0FBTyxHQUFHLHVCQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN4QyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVELG1CQUFtQixDQUFDLEdBQW9CLEVBQUUsR0FBcUI7UUFDOUQsSUFBSSxnQkFBZ0IsR0FBRywyQkFBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDckQsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDeEQsQ0FBQztBQXVDRixDQUFDO0FBNUdEO3VCQTRHQyxDQUFBIiwiZmlsZSI6ImFwaS9tb3Rvci9tb3Rvci5jb250cm9sbGVyLmpzIiwic291cmNlc0NvbnRlbnQiOltudWxsXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
