"use strict";
const _ = require('lodash');
const constants_membership_1 = require('./../../constants_membership');
class RenewQuotes {
    constructor() {
        this.quote = constants_membership_1.configWithQuotation;
        this.saveQuote = (req, res) => {
            this.quote.quotation.renewalOptions.updateDetails = false;
            return res.status(200).send(constants_membership_1.defaultSaveQuote);
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
                if (coverIndex === 1) {
                    this.quote.quotation.renewalOptions.discount = null;
                }
            }
            else {
                if (coverIndex === 1) {
                    this.quote.quotation.renewalOptions.discount = {
                        type: 'cover',
                        ref: "HOMESTART",
                        display: 'Home Start',
                        "price": {
                            "monthly": {
                                "amount": 225,
                                "str": "2.25",
                                "symbol": "€",
                                "currency": "EUR",
                                "pretty": "€2.25"
                            },
                            "annual": {
                                "amount": 2700,
                                "str": "27.00",
                                "symbol": "€",
                                "currency": "EUR",
                                "pretty": "€27.00"
                            }
                        },
                    };
                }
                this.quote.coverLevel[coverIndex].active = false;
                this.quote.quotation.breakdown.splice(breakdownIndex, 1);
            }
            res.status(200).send();
        };
        this.removeMember = (req, res) => {
            console.log(req.params.memberId);
            let breakdownIndex = _.findIndex(this.quote.quotation.breakdown, (e) => {
                return e.index === Number(req.params.memberId);
            });
            delete this.quote.members.adults[`${req.params.memberId}`];
            this.quote.quotation.breakdown.splice(breakdownIndex, 1);
            res.status(200).send();
        };
        this.addMember = (req, res) => {
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
            console.log(this.quote.members);
            res.status(200).send();
        };
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = RenewQuotes;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcGkvcmVuZXdfcXVvdGVzL3JlbmV3X3F1b3Rlcy5jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxNQUFZLENBQUMsV0FBTSxRQUFRLENBQUMsQ0FBQTtBQUM1Qix1Q0FBcUUsOEJBQThCLENBQUMsQ0FBQTtBQUVwRztJQUdDO1FBRk8sVUFBSyxHQUFHLDBDQUFtQixDQUFDO1FBTTVCLGNBQVMsR0FBRyxDQUFDLEdBQW9CLEVBQUUsR0FBcUI7WUFDOUQsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7WUFDMUQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLHVDQUFnQixDQUFDLENBQUM7UUFDL0MsQ0FBQyxDQUFBO1FBQ00sYUFBUSxHQUFHLENBQUMsR0FBb0IsRUFBRSxHQUFxQjtZQUM3RCxJQUFJLE1BQU0sR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDO1lBQ3ZCLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLEtBQUssUUFBUSxJQUFJLE1BQU0sQ0FBQyxXQUFXLEtBQUssWUFBWSxDQUFDLENBQUMsQ0FBQztnQkFDMUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDekQsQ0FBQztZQUNELElBQUksQ0FBQyxDQUFDO2dCQUNMLFVBQVUsQ0FBQztvQkFDVixNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDekQsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ1YsQ0FBQztRQUNGLENBQUMsQ0FBQTtRQUVN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QkFDaEIsT0FBTyxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsUUFBUTtvQkFDNUIsT0FBTyxFQUFFO3dCQUNSLFNBQVMsRUFBRTs0QkFDVixRQUFRLEVBQUUsR0FBRzs0QkFDYixLQUFLLEVBQUUsTUFBTTs0QkFDYixRQUFRLEVBQUUsR0FBRzs0QkFDYixVQUFVLEVBQUUsS0FBSzs0QkFDakIsUUFBUSxFQUFFLE9BQU87eUJBQ2pCO3dCQUNELFFBQVEsRUFBRTs0QkFDVCxRQUFRLEVBQUUsSUFBSTs0QkFDZCxLQUFLLEVBQUUsT0FBTzs0QkFDZCxRQUFRLEVBQUUsR0FBRzs0QkFDYixVQUFVLEVBQUUsS0FBSzs0QkFDakIsUUFBUSxFQUFFLFFBQVE7eUJBQ2xCO3FCQUNEO29CQUNELFNBQVMsRUFBRSxLQUFLO2lCQUNoQixDQUFDLENBQUE7WUFDSCxDQUFDO1lBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ2hDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDeEIsQ0FBQyxDQUFBO0lBOUlELENBQUM7QUFpSkYsQ0FBQztBQXRKRDs2QkFzSkMsQ0FBQSIsImZpbGUiOiJhcGkvcmVuZXdfcXVvdGVzL3JlbmV3X3F1b3Rlcy5jb250cm9sbGVyLmpzIiwic291cmNlc0NvbnRlbnQiOltudWxsXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
