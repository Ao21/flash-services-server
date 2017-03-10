"use strict";
const _ = require('lodash');
const constants_membership_1 = require('./../../constants_membership');
class RenewQuotes {
    constructor() {
        this.quote = constants_membership_1.SIXTO_CONFIG;
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
                res.send(this.quote);
            }
        };
        this.toggleCoverLevel = (req, res) => {
            let params = req.params;
            this.quote.quotation.renewalOptions.offer.accepted = true;
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
            this.quote.quotation.renewalOptions.updateFamily = false;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcGkvcmVuZXdfcXVvdGVzL3JlbmV3X3F1b3Rlcy5jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxNQUFZLENBQUMsV0FBTSxRQUFRLENBQUMsQ0FBQTtBQUM1Qix1Q0FBK0csOEJBQThCLENBQUMsQ0FBQTtBQUU5STtJQUlDO1FBSE8sVUFBSyxHQUFHLG1DQUFZLENBQUM7UUFPckIsVUFBSyxHQUFHLENBQUMsR0FBb0IsRUFBRSxHQUFxQjtZQUMxRCxJQUFJLENBQUMsS0FBSyxHQUFHLDBDQUFtQixDQUFDO1lBQ2pDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDZixDQUFDLENBQUE7UUFFTSxjQUFTLEdBQUcsQ0FBQyxHQUFvQixFQUFFLEdBQXFCO1lBQzlELElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1lBQzFELE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekMsQ0FBQyxDQUFBO1FBQ00sYUFBUSxHQUFHLENBQUMsR0FBb0IsRUFBRSxHQUFxQjtZQUM3RCxJQUFJLE1BQU0sR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDO1lBQ3ZCLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLEtBQUssUUFBUSxJQUFJLE1BQU0sQ0FBQyxXQUFXLEtBQUssWUFBWSxDQUFDLENBQUMsQ0FBQztnQkFDMUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDekQsQ0FBQztZQUNELElBQUksQ0FBQyxDQUFDO2dCQUNMLFVBQVUsQ0FBQztvQkFDVixNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FB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QUMsSUFBSSxDQUFDLFNBQVMsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtvQkFDMUQsTUFBTSxFQUFFLFFBQVE7b0JBQ2hCLE9BQU8sRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLFFBQVE7b0JBQzVCLE9BQU8sRUFBRTt3QkFDUixTQUFTLEVBQUU7NEJBQ1YsUUFBUSxFQUFFLEdBQUc7NEJBQ2IsS0FBSyxFQUFFLE1BQU07NEJBQ2IsUUFBUSxFQUFFLEdBQUc7NEJBQ2IsVUFBVSxFQUFFLEtBQUs7NEJBQ2pCLFFBQVEsRUFBRSxPQUFPO3lCQUNqQjt3QkFDRCxRQUFRLEVBQUU7NEJBQ1QsUUFBUSxFQUFFLElBQUk7NEJBQ2QsS0FBSyxFQUFFLE9BQU87NEJBQ2QsUUFBUSxFQUFFLEdBQUc7NEJBQ2IsVUFBVSxFQUFFLEtBQUs7NEJBQ2pCLFFBQVEsRUFBRSxRQUFRO3lCQUNsQjtxQkFDRDtvQkFDRCxTQUFTLEVBQUUsS0FBSztpQkFDaEIsQ0FBQyxDQUFBO1lBQ0gsQ0FBQztZQUNELEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDeEIsQ0FBQyxDQUFBO0lBbklELENBQUM7QUFzSUYsQ0FBQztBQTVJRDs2QkE0SUMsQ0FBQSIsImZpbGUiOiJhcGkvcmVuZXdfcXVvdGVzL3JlbmV3X3F1b3Rlcy5jb250cm9sbGVyLmpzIiwic291cmNlc0NvbnRlbnQiOltudWxsXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
