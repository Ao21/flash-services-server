"use strict";
const _ = require('lodash');
const constants_motor_1 = require('./../../constants_motor');
const constants_occupations_1 = require('./../../constants_occupations');
const constants_address_1 = require('./../../constants_address');
const contants_motor_retrieve_1 = require('./../../contants_motor-retrieve');
const constants_carmakes_1 = require('./../../constants_carmakes');
const Fuse = require('fuse.js');
class Motor {
    constructor() {
        this.isRetrieveQuote = false;
        this.retrieveQuote = (req, res) => {
            this.isRetrieveQuote = true;
            res.send(contants_motor_retrieve_1.retrieveQuote);
        };
        this.updateQuote = (req, res) => {
            res.send(200);
        };
        this.getConfig = (req, res) => {
            if (!this.isRetrieveQuote) {
                res.send(constants_motor_1.CONFIG);
            }
            else {
                res.send(contants_motor_retrieve_1.retrieveQuote);
                this.isRetrieveQuote = false;
            }
        };
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
        this.setCarDetails = (req, res) => {
            let options = {
                tags: [
                    { id: 'SE', description: 'SE' },
                    { id: '1998cc', description: '1998cc' }
                ],
                list: [
                    { id: '0', description: 'A4 SE 1998cc 2003 5-door Petrol' },
                    { id: '2', description: 'A4 SE 1998cc 2003 5-door Petrol' },
                    { id: '3', description: 'A4 SE 1998cc 2003 5-door Petrol' },
                    { id: '4', description: 'A4 SE 1998cc 2003 5-door Petrol' },
                    { id: '5', description: 'A4 SE 1998cc 2003 5-door Petrol' },
                    { id: '6', description: 'A4 SE 1998cc 2003 5-door Petrol' },
                    { id: '7', description: 'A4 SE 1998cc 2003 5-door Petrol' },
                    { id: '8', description: 'A4 SE 1998cc 2003 5-door Petrol' },
                    { id: '9', description: 'A4 SE 1998cc 2003 5-door Petrol' },
                    { id: '10', description: 'A4 SE 1998cc 2003 5-door Petrol' },
                    { id: '11', description: 'A4 SE 1998cc 2003 5-door Petrol' },
                    { id: '12', description: 'A4 SE 1998cc 2003 5-door Petrol' },
                ]
            };
            res.status(200).send(JSON.stringify(options));
        };
        this.setCarTag = (req, res) => {
            let tags = [
                { id: 'SE', description: 'SE' },
                { id: '1998cc', description: '1998cc' }
            ];
            let filteredTags = _.filter(tags, (tag) => {
                return !_.find(req.body, (bodyTag) => {
                    return bodyTag.id === tag.id;
                });
            });
            let options = {
                tags: filteredTags,
                list: [
                    { id: '0', description: 'A4 SE 1998cc 2003 5-door Petrol' },
                    { id: '2', description: 'A4 SE 1998cc 2003 5-door Petrol' },
                    { id: '3', description: 'A4 SE 1998cc 2003 5-door Petrol' },
                ]
            };
            res.status(200).send(JSON.stringify(options));
        };
        this.getVehicleRegistration = (req, res) => {
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
                    "id": "petrol", "description": "Petrol",
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
    /** MYAA */
    checkMyAAEmail(req, res) {
        if (req.params.email === 'ro.brett@gmail.com') {
            return res.status(200).send({ status: 1 });
        }
        return res.status(200).send({ status: 0 });
    }
    loginToMyAA(req, res) {
        return res.status(200).send({
            savedQuotes: [{
                    dateOfQuote: '12/01/2017',
                    driverName: 'Ro Brett',
                    price: '€126.78',
                    ref: 'REFERENCE'
                }, {
                    dateOfQuote: '12/01/2017',
                    driverName: 'Ro Brett',
                    price: '€126.78',
                    ref: 'REFERENCE'
                }]
        });
    }
    /** Updating Pages */
    updatePage(req, res) {
        res.status(200).send();
    }
    updateSection(req, res) {
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
    checkBankVerification(req, res) {
        let bankDetails = {
            name: 'Ronan Brett',
            iban: 'IE64BOFI90583812345678',
            bic: 'BOFIIE7OXXX',
            bankName: 'Bank of Ireland',
            bankAddress: '40 Mespil Road, Dublin'
        };
        res.send(JSON.stringify(bankDetails)).status(200);
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Motor;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcGkvbW90b3IvbW90b3IuY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsTUFBWSxDQUFDLFdBQU0sUUFBUSxDQUFDLENBQUE7QUFDNUIsa0NBQXlDLHlCQUF5QixDQUFDLENBQUE7QUFDbkUsd0NBQTRCLCtCQUErQixDQUFDLENBQUE7QUFDNUQsb0NBQTJELDJCQUEyQixDQUFDLENBQUE7QUFDdkYsMENBQThCLGlDQUFpQyxDQUFDLENBQUE7QUFDaEUscUNBQXlCLDRCQUE0QixDQUFDLENBQUE7QUFDdEQsTUFBWSxJQUFJLFdBQU0sU0FBUyxDQUFDLENBQUE7QUFRaEM7SUFRQztRQUZBLG9CQUFlLEdBQVksS0FBSyxDQUFDO1FBNkNqQyxrQkFBYSxHQUFHLENBQUMsR0FBb0IsRUFBRSxHQUFxQjtZQUMzRCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztZQUM1QixHQUFHLENBQUMsSUFBSSxDQUFDLHVDQUFhLENBQUMsQ0FBQztRQUN6QixDQUFDLENBQUE7UUEyQkQsZ0JBQVcsR0FBRyxDQUFDLEdBQW9CLEVBQUUsR0FBcUI7WUFDekQsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNmLENBQUMsQ0FBQTtRQUVELGNBQVMsR0FBRyxDQUFDLEdBQW9CLEVBQUUsR0FBcUI7WUFDdkQsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUEsQ0FBQztnQkFDMUIsR0FBRyxDQUFDLElBQUksQ0FBQyx3QkFBTSxDQUFDLENBQUM7WUFDbEIsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNQLEdBQUcsQ0FBQyxJQUFJLENBQUMsdUNBQWEsQ0FBQyxDQUFDO2dCQUN4QixJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztZQUM5QixDQUFDO1FBQ0YsQ0FBQyxDQUFBO1FBS0Qsa0JBQWEsR0FBRyxDQUFDLEdBQW9CLEVBQUUsR0FBcUI7WUFDM0QsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNqRCxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNoQyxDQUFDLENBQUE7UUF1QkQsb0JBQW9CO1FBRXBCLFlBQU8sR0FBRyxDQUFDLEdBQW9CLEVBQUUsR0FBcUI7WUFDckQsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNqRCxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNoQyxDQUFDLENBQUE7UUFDRCxjQUFTLEdBQUcsQ0FBQyxHQUFvQixFQUFFLEdBQXFCO1lBQ3ZELElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDckQsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDaEMsQ0FBQyxDQUFBO1FBRUQsZUFBVSxHQUFHLENBQUMsR0FBb0IsRUFBRSxHQUFxQjtZQUN4RCxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsMkJBQU8sQ0FBQyxDQUFDLENBQUM7UUFDbkMsQ0FBQyxDQUFBO1FBRUQsa0JBQWEsR0FBRyxDQUFDLEdBQW9CLEVBQUUsR0FBcUI7WUFDM0QsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLG9DQUFnQixDQUFDLENBQUMsQ0FBQztRQUM1QyxDQUFDLENBQUE7UUFFRCxnQkFBZ0I7UUFJaEIsa0JBQWEsR0FBRyxDQUFDLEdBQW9CLEVBQUUsR0FBcUI7WUFDM0QsSUFBSSxPQUFPLEdBQUc7Z0JBQ2IsSUFBSSxFQUFFO29CQUNMLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFO29CQUMvQixFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRTtpQkFDdkM7Z0JBQ0QsSUFBSSxFQUFFO29CQUNMLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxXQUFXLEVBQUUsaUNBQWlDLEVBQUU7b0JBQzNELEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxXQUFXLEVBQUUsaUNBQWlDLEVBQUU7b0JBQzNELEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxXQUFXLEVBQUUsaUNBQWlDLEVBQUU7b0JBQzNELEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxXQUFXLEVBQUUsaUNBQWlDLEVBQUU7b0JBQzNELEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxXQUFXLEVBQUUsaUNBQWlDLEVBQUU7b0JBQzNELEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxXQUFXLEVBQUUsaUNBQWlDLEVBQUU7b0JBQzNELEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxXQUFXLEVBQUUsaUNBQWlDLEVBQUU7b0JBQzNELEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxXQUFXLEVBQUUsaUNBQWlDLEVBQUU7b0JBQzNELEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxXQUFXLEVBQUUsaUNBQWlDLEVBQUU7b0JBQzNELEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsaUNBQWlDLEVBQUU7b0JBQzVELEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsaUNBQWlDLEVBQUU7b0JBQzVELEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsaUNBQWlDLEVBQUU7aUJBQzVEO2FBQ0QsQ0FBQTtZQUNELEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUMvQyxDQUFDLENBQUE7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dEIsS0FBSyxFQUFFLFNBQVM7b0JBQ2hCLEdBQUcsRUFBRSxXQUFXO2lCQUNoQixDQUFDO1NBQ0YsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVELHFCQUFxQjtJQUNyQixVQUFVLENBQUMsR0FBb0IsRUFBRSxHQUFxQjtRQUNyRCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCxhQUFhLENBQUMsR0FBb0IsRUFBRSxHQUFxQjtJQUV6RCxDQUFDO0lBY0QsaUJBQWlCLENBQUMsR0FBb0IsRUFBRSxHQUFxQjtRQUM1RCxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsbUNBQVcsQ0FBQyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQU9ELFVBQVUsQ0FBQyxHQUFvQixFQUFFLEdBQXFCO1FBQ3JELElBQUksT0FBTyxHQUFHLHVCQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN4QyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVELG1CQUFtQixDQUFDLEdBQW9CLEVBQUUsR0FBcUI7UUFDOUQsSUFBSSxnQkFBZ0IsR0FBRywyQkFBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDckQsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUVELHFCQUFxQixDQUFDLEdBQW9CLEVBQUUsR0FBcUI7UUFDaEUsSUFBSSxXQUFXLEdBQUc7WUFDakIsSUFBSSxFQUFFLGFBQWE7WUFDbkIsSUFBSSxFQUFFLHdCQUF3QjtZQUM5QixHQUFHLEVBQUUsYUFBYTtZQUNsQixRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLFdBQVcsRUFBRSx3QkFBd0I7U0FDckMsQ0FBQTtRQUNELEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNuRCxDQUFDO0FBZ0dGLENBQUM7QUF6TkQ7dUJBeU5DLENBQUEiLCJmaWxlIjoiYXBpL21vdG9yL21vdG9yLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VzQ29udGVudCI6W251bGxdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
