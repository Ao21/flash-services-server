"use strict";
const _ = require('lodash');
const constants_motor_1 = require('./../../constants_motor');
const constants_occupations_1 = require('./../../constants_occupations');
const constants_address_1 = require('./../../constants_address');
const contants_motor_retrieve_1 = require('./../../contants_motor-retrieve');
const constants_rafal_1 = require('./../../constants_rafal');
const constants_carmakes_1 = require('./../../constants_carmakes');
const Fuse = require('fuse.js');
const constants_keith_1 = require('./../../constants_keith');
class Motor {
    constructor() {
        this.isRetrieveQuote = false;
        this.retrieveQuote = (req, res) => {
            res.send(constants_rafal_1.RETRIEVE_QUOTE);
        };
        this.updateQuote = (req, res) => {
            res.send(200);
        };
        this.getConfig = (req, res) => {
            if (!this.isRetrieveQuote) {
                res.send(constants_keith_1.CONFIG);
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
        this.getLinkedTown = (req, res) => {
            res.send(JSON.stringify(constants_address_1.TOWNS));
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
                exactModels: [
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
            if (req.body.tags && req.body.tags.length > 0) {
                let tags = [
                    { id: 'SE', description: 'SE' },
                    { id: '1998cc', description: '1998cc' }
                ];
                let filteredTags = _.filter(tags, (tag) => {
                    return !_.find(req.body, (bodyTag) => {
                        return bodyTag.id === tag.id;
                    });
                });
                options = {
                    tags: filteredTags,
                    exactModels: [
                        { id: '0', description: 'A4 SE 1998cc 2003 5-door Petrol' },
                        { id: '2', description: 'A4 SE 1998cc 2003 5-door Petrol' },
                        { id: '3', description: 'A4 SE 1998cc 2003 5-door Petrol' },
                    ]
                };
            }
            res.status(200).send(JSON.stringify(options));
        };
        this.selectCar = (req, res) => {
            res.send(200);
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
                exactModelDetails: [
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
                "engineSizeRange": {
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
    triggerFormError(req, res) {
        res.send(403, JSON.stringify({
            type: 'fields',
            errors: {
                carRegistration: 'carRegInvalid'
            } }));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcGkvbW90b3IvbW90b3IuY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsTUFBWSxDQUFDLFdBQU0sUUFBUSxDQUFDLENBQUE7QUFDNUIsa0NBQWlDLHlCQUF5QixDQUFDLENBQUE7QUFDM0Qsd0NBQTRCLCtCQUErQixDQUFDLENBQUE7QUFDNUQsb0NBQTJELDJCQUEyQixDQUFDLENBQUE7QUFDdkYsMENBQThCLGlDQUFpQyxDQUFDLENBQUE7QUFDaEUsa0NBQStCLHlCQUF5QixDQUFDLENBQUE7QUFDekQscUNBQXlCLDRCQUE0QixDQUFDLENBQUE7QUFDdEQsTUFBWSxJQUFJLFdBQU0sU0FBUyxDQUFDLENBQUE7QUFNaEMsa0NBQXVCLHlCQUF5QixDQUFDLENBQUE7QUFFakQ7SUFRQztRQUZBLG9CQUFlLEdBQVksS0FBSyxDQUFDO1FBOENqQyxrQkFBYSxHQUFHLENBQUMsR0FBb0IsRUFBRSxHQUFxQjtZQUMzRCxHQUFHLENBQUMsSUFBSSxDQUFDLGdDQUFjLENBQUMsQ0FBQztRQUMxQixDQUFDLENBQUE7UUFtQ0QsZ0JBQVcsR0FBRyxDQUFDLEdBQW9CLEVBQUUsR0FBcUI7WUFDekQsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNmLENBQUMsQ0FBQTtRQUVELGNBQVMsR0FBRyxDQUFDLEdBQW9CLEVBQUUsR0FBcUI7WUFDdkQsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztnQkFDM0IsR0FBRyxDQUFDLElBQUksQ0FBQyx3QkFBTSxDQUFDLENBQUM7WUFDbEIsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNQLEdBQUcsQ0FBQyxJQUFJLENBQUMsdUNBQWEsQ0FBQyxDQUFDO2dCQUN4QixJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztZQUM5QixDQUFDO1FBQ0YsQ0FBQyxDQUFBO1FBS0Qsa0JBQWEsR0FBRyxDQUFDLEdBQW9CLEVBQUUs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Q3JELEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFFRCxxQkFBcUIsQ0FBQyxHQUFvQixFQUFFLEdBQXFCO1FBQ2hFLElBQUksV0FBVyxHQUFHO1lBQ2pCLElBQUksRUFBRSxhQUFhO1lBQ25CLElBQUksRUFBRSx3QkFBd0I7WUFDOUIsR0FBRyxFQUFFLGFBQWE7WUFDbEIsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixXQUFXLEVBQUUsd0JBQXdCO1NBQ3JDLENBQUE7UUFDRCxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbkQsQ0FBQztBQStIRixDQUFDO0FBaFFEO3VCQWdRQyxDQUFBIiwiZmlsZSI6ImFwaS9tb3Rvci9tb3Rvci5jb250cm9sbGVyLmpzIiwic291cmNlc0NvbnRlbnQiOltudWxsXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
