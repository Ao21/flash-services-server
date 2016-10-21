"use strict";
const _ = require('lodash');
const constants_membership_1 = require('./../../constants_membership');
class RenewQuotes {
    constructor() {
        this.quote = constants_membership_1.configWithQuotation;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcGkvcmVuZXdfcXVvdGVzL3JlbmV3X3F1b3Rlcy5jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxNQUFZLENBQUMsV0FBTSxRQUFRLENBQUMsQ0FBQTtBQUM1Qix1Q0FBaUcsOEJBQThCLENBQUMsQ0FBQTtBQUVoSTtJQUdDO1FBRk8sVUFBSyxHQUFHLDBDQUFtQixDQUFDO1FBTTVCLGNBQVMsR0FBRyxDQUFDLEdBQW9CLEVBQUUsR0FBcUI7WUFDOUQsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7WUFDMUQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN6QyxDQUFDLENBQUE7UUFDTSxhQUFRLEdBQUcsQ0FBQyxHQUFvQixFQUFFLEdBQXFCO1lBQzdELElBQUksTUFBTSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUM7WUFDdkIsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsS0FBSyxRQUFRLElBQUksTUFBTSxDQUFDLFdBQVcsS0FBSyxZQUFZLENBQUMsQ0FBQyxDQUFDO2dCQUMxRSxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUN6RCxDQUFDO1lBQ0QsSUFBSSxDQUFDLENBQUM7Z0JBQ0wsVUFBVSxDQUFDO29CQUNWLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUN6RCxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDVixDQUFDO1FBQ0YsQ0FBQyxD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QUNqQjtvQkFDRCxRQUFRLEVBQUU7d0JBQ1QsUUFBUSxFQUFFLElBQUk7d0JBQ2QsS0FBSyxFQUFFLElBQUk7d0JBQ1gsUUFBUSxFQUFFLEdBQUc7d0JBQ2IsVUFBVSxFQUFFLEtBQUs7d0JBQ2pCLFFBQVEsRUFBRSxLQUFLO3FCQUNmO2lCQUNEO2dCQUNELGFBQWEsRUFBRSxPQUFPO2dCQUN0QixNQUFNLEVBQUUsUUFBUTtnQkFDaEIsT0FBTyxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsUUFBUTthQUU1QixDQUFDO1lBRUYsRUFBRSxDQUFDLENBQUMsY0FBYyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDMUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDeEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFdBQVcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDMUcsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNQLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7b0JBQ25DLGFBQWEsRUFBRSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO29CQUMxRCxNQUFNLEVBQUUsUUFBUTtvQkFDaEIsT0FBTyxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsUUFBUTtvQkFDNUIsT0FBTyxFQUFFO3dCQUNSLFNBQVMsRUFBRTs0QkFDVixRQUFRLEVBQUUsR0FBRzs0QkFDYixLQUFLLEVBQUUsTUFBTTs0QkFDYixRQUFRLEVBQUUsR0FBRzs0QkFDYixVQUFVLEVBQUUsS0FBSzs0QkFDakIsUUFBUSxFQUFFLE9BQU87eUJBQ2pCO3dCQUNELFFBQVEsRUFBRTs0QkFDVCxRQUFRLEVBQUUsSUFBSTs0QkFDZCxLQUFLLEVBQUUsT0FBTzs0QkFDZCxRQUFRLEVBQUUsR0FBRzs0QkFDYixVQUFVLEVBQUUsS0FBSzs0QkFDakIsUUFBUSxFQUFFLFFBQVE7eUJBQ2xCO3FCQUNEO29CQUNELFNBQVMsRUFBRSxLQUFLO2lCQUNoQixDQUFDLENBQUE7WUFDSCxDQUFDO1lBQ0QsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN4QixDQUFDLENBQUE7SUE3SEQsQ0FBQztBQWdJRixDQUFDO0FBcklEOzZCQXFJQyxDQUFBIiwiZmlsZSI6ImFwaS9yZW5ld19xdW90ZXMvcmVuZXdfcXVvdGVzLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VzQ29udGVudCI6W251bGxdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
