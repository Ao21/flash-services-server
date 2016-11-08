"use strict";
const _ = require('lodash');
const constants_membership_1 = require('./../../constants_membership');
class RenewQuotes {
    constructor() {
        this.quote = constants_membership_1.configWithQuotation;
        this.reset = (req, res) => {
            this.quote = constants_membership_1.configWithQuotation;
            res.send(200);
        };
        this.saveQuote = (req, res) => {
            this.quote.quotation.renewalOptions.updateDetails = false;
            return res.status(200).send(this.quote);
        };
        this.retrieve = (req, res) => {
            let params = req.query;
            if (params.reference === '123456' && params.dateOfBirth === '29/12/1987') {
                return res.status(200).send(JSON.stringify(this.quote));
            }
            else {
                setTimeout(() => {
                    return res.status(200).send(JSON.stringify(this.quote));
                }, 1000);
            }
        };
        this.offer = (req, res) => {
            if (req.body.accepted) {
                this.quote.quotation.renewalOptions.offer.accepted = true;
                res.send(this.quote);
            }
            else {
                this.quote.quotation.renewalOptions.offer.accepted = false;
                res.send(constants_membership_1.configWithQuotationNoOffer);
            }
        };
        this.toggleCoverLevel = (req, res) => {
            let params = req.params;
            let coverIndex = _.findIndex(this.quote.coverLevel, (e) => {
                return e.name === req.params.coverlevel.toLowerCase();
            });
            let breakdownIndex = _.findIndex(this.quote.quotation.breakdown, (e) => {
                return e.name === req.params.coverlevel.toUpperCase();
            });
            let cover = this.quote.coverLevel[coverIndex];
            if (breakdownIndex === -1) {
                this.quote.quotation.breakdown.push({
                    description: cover.display,
                    type: 'cover',
                    name: cover.name.toUpperCase(),
                    price: cover.price,
                    mandatory: false
                });
                this.quote.coverLevel[coverIndex].active = true;
            }
            else {
                this.quote.coverLevel[coverIndex].active = false;
                this.quote.quotation.breakdown.splice(breakdownIndex, 1);
            }
            res.status(200).send();
        };
        this.removeMember = (req, res) => {
            let breakdownIndex = _.findIndex(this.quote.quotation.breakdown, (e) => {
                return e.index === Number(req.params.memberId);
            });
            delete this.quote.members.adults[`${req.params.memberId}`];
            this.quote.quotation.breakdown.splice(breakdownIndex, 1);
            res.status(200).send();
        };
        this.addMember = (req, res) => {
            console.log(req.body);
            let breakdownIndex = _.findIndex(this.quote.quotation.breakdown, (e) => {
                return e.index === Number(req.params.memberId);
            });
            this.quote.members.adults[`${req.params.memberId}`] = {
                "firstName": `${req.body.firstName}`,
                "surname": `${req.body.surname}`,
                "dateOfBirth": `${req.body.dateOfBirth}`,
                "price": {
                    "monthly": {
                        "amount": 425,
                        "str": "4.25",
                        "symbol": "€",
                        "currency": "EUR",
                        "pretty": "€4.25"
                    },
                    "annual": {
                        "amount": 5100,
                        "str": "51",
                        "symbol": "€",
                        "currency": "EUR",
                        "pretty": "€51"
                    }
                },
                "typeDisplay": "Adult",
                "type": "adults",
                "index": req.params.memberId
            };
            if (breakdownIndex != -1) {
                this.quote.members[req.params.memberId];
                this.quote.quotation.breakdown[breakdownIndex].description = `${req.body.firstName} ${req.body.surname}`;
            }
            else {
                this.quote.quotation.breakdown.push({
                    "description": `${req.body.firstName} ${req.body.surname}`,
                    "type": "member",
                    "index": req.params.memberId,
                    "price": {
                        "monthly": {
                            "amount": 425,
                            "str": "4.25",
                            "symbol": "€",
                            "currency": "EUR",
                            "pretty": "€4.25"
                        },
                        "annual": {
                            "amount": 5100,
                            "str": "51.00",
                            "symbol": "€",
                            "currency": "EUR",
                            "pretty": "€51.00"
                        }
                    },
                    mandatory: false
                });
            }
            res.status(200).send();
        };
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = RenewQuotes;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcGkvcmVuZXdfcXVvdGVzL3JlbmV3X3F1b3Rlcy5jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxNQUFZLENBQUMsV0FBTSxRQUFRLENBQUMsQ0FBQTtBQUM1Qix1Q0FBaUcsOEJBQThCLENBQUMsQ0FBQTtBQUVoSTtJQUdDO1FBRk8sVUFBSyxHQUFHLDBDQUFtQixDQUFDO1FBTTVCLFVBQUssR0FBRyxDQUFDLEdBQW9CLEVBQUUsR0FBcUI7WUFDMUQsSUFBSSxDQUFDLEtBQUssR0FBRywwQ0FBbUIsQ0FBQztZQUNqQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsQ0FBQyxDQUFBO1FBRU0sY0FBUyxHQUFHLENBQUMsR0FBb0IsRUFBRSxHQUFxQjtZQUM5RCxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztZQUMxRCxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pDLENBQUMsQ0FBQTtRQUNNLGFBQVEsR0FBRyxDQUFDLEdBQW9CLEVBQUUsR0FBcUI7WUFDN0QsSUFBSSxNQUFNLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQztZQUN2QixFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxLQUFLLFFBQVEsSUFBSSxNQUFNLENBQUMsV0FBVyxLQUFLLFlBQVksQ0FBQyxDQUFDLENBQUM7Z0JBQzFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ3pELENBQUM7WUFDRCxJQUFJLENBQUMsQ0FBQztnQkFDTCxVQUFVLENBQUM7b0JBQ1YsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENB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OzRCQUNWLFFBQVEsRUFBRSxHQUFHOzRCQUNiLEtBQUssRUFBRSxNQUFNOzRCQUNiLFFBQVEsRUFBRSxHQUFHOzRCQUNiLFVBQVUsRUFBRSxLQUFLOzRCQUNqQixRQUFRLEVBQUUsT0FBTzt5QkFDakI7d0JBQ0QsUUFBUSxFQUFFOzRCQUNULFFBQVEsRUFBRSxJQUFJOzRCQUNkLEtBQUssRUFBRSxPQUFPOzRCQUNkLFFBQVEsRUFBRSxHQUFHOzRCQUNiLFVBQVUsRUFBRSxLQUFLOzRCQUNqQixRQUFRLEVBQUUsUUFBUTt5QkFDbEI7cUJBQ0Q7b0JBQ0QsU0FBUyxFQUFFLEtBQUs7aUJBQ2hCLENBQUMsQ0FBQTtZQUNILENBQUM7WUFDRCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3hCLENBQUMsQ0FBQTtJQWxJRCxDQUFDO0FBcUlGLENBQUM7QUExSUQ7NkJBMElDLENBQUEiLCJmaWxlIjoiYXBpL3JlbmV3X3F1b3Rlcy9yZW5ld19xdW90ZXMuY29udHJvbGxlci5qcyIsInNvdXJjZXNDb250ZW50IjpbbnVsbF19
