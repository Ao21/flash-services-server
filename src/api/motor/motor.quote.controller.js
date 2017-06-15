"use strict";
const BENEFITS = [
    { description: 'Lifetime NCD (Glass, Fire & Theft)', inHeader: true, included: true },
    { description: 'Personal Accident Protection (€75k)', inHeader: true, included: true },
    { description: 'Fire Brigade Charges', inHeader: true, included: true },
    { description: 'Temporary Replacement Vehicle', inHeader: true, included: false },
    { description: 'NCD Stepback', inHeader: false, included: false },
    { description: 'Windscreen/Glass Breakage', inHeader: false, included: true },
    { description: 'Foreign Travel', inHeader: false, included: true },
];
const BENEFITS_STANDARD = [
    { description: 'Lifetime NCD (Glass, Fire & Theft)', inHeader: true, included: true },
    { description: 'Personal Accident Protection (€75k)', inHeader: true, included: true },
    { description: 'Fire Brigade Charges', inHeader: true, included: true },
    { description: 'Temporary Replacement Vehicle', inHeader: true, included: true },
    { description: 'NCD Stepback', inHeader: false, included: true },
    { description: 'Windscreen/Glass Breakage', inHeader: false, included: true },
    { description: 'Foreign Travel', inHeader: false, included: true },
];
const BREAKDOWN_ITEMS = [
    { description: 'AA Motor', price: { monthly: createPrice(5000), annual: createPrice(60000) } },
    { description: 'Fee', price: { monthly: createPrice(320), annual: createPrice(3840) } },
    { description: 'Member Discount', price: { monthly: createPrice(5000), annual: createPrice(60000) }, discount: true },
];
const AAValue = {
    name: 'AA Value',
    id: 'AAVALUE',
    benefits: BENEFITS,
    tagline: 'Your Essential Cover',
    img: 'product-aavalue.svg',
    breakdowns: BREAKDOWN_ITEMS,
    premium: {
        monthly: {
            deposit: createPrice(2999),
            installments: {
                number: 11,
                instalment: createPrice(5999)
            },
            total: createPrice(5999),
            apr: '10%'
        },
        annual: {
            deposit: createPrice(0),
            installments: {
                number: 1,
                instalment: createPrice(151000)
            },
            total: createPrice(151000),
            apr: '4.5%',
        }
    }
};
const AAMotor = {
    name: 'AA Motor',
    id: 'AAMOTOR',
    preferred: true,
    tagline: 'Our Premium Product',
    benefits: BENEFITS_STANDARD,
    img: 'product-aastandard.svg',
    breakdowns: BREAKDOWN_ITEMS,
    premium: {
        monthly: {
            deposit: createPrice(4999),
            installments: {
                number: 11,
                instalment: createPrice(6999)
            },
            total: createPrice(6999),
            apr: '10%'
        },
        annual: {
            deposit: createPrice(0),
            installments: {
                number: 1,
                instalment: createPrice(125000)
            },
            total: createPrice(125000),
            apr: '4.5%',
        }
    }
};
const AAMembership = {
    name: 'AA Membership',
    id: 'AAMEMBERSHIP',
};
const AAHome = {
    name: 'AA Home Insurance',
    id: 'AAHOME',
};
const quote = {
    reference: '56565656',
    products: [AAMotor, AAValue],
    additionalProducts: [AAHome],
    selection: {
        scheduleCode: 'monthly',
        policyType: 'AAMOTOR',
        aaHome: null,
        aaMembershipId: '3453454',
        addAAMembership: true
    }
};
const TEST_Q = {
    "quote": {
        "reference": "HYLR07000001",
        "products": [{
                "benefits": [{
                        "description": "Windscreen Cover",
                        "included": true,
                        "inHeader": true
                    }, {
                        "description": "Theft & Fire Protection",
                        "included": true,
                        "inHeader": true
                    }, {
                        "description": "Windscreen Cover",
                        "included": true,
                        "inHeader": true
                    }, {
                        "description": "Personal Accident",
                        "included": true,
                        "inHeader": false
                    }, {
                        "description": "Legal fees",
                        "included": true,
                        "inHeader": false
                    }, {
                        "description": "Fire Brigade Charges",
                        "included": true,
                        "inHeader": false
                    }, {
                        "description": "Car Valet",
                        "included": true,
                        "inHeader": false
                    }, {
                        "description": "Step Back Bonus Protection",
                        "included": true,
                        "inHeader": false
                    }, {
                        "description": "Personal Belongings/Sat Navs/Mobile Phones",
                        "included": true,
                        "inHeader": false
                    }, {
                        "description": "Replacement Locks & Alarms",
                        "included": true,
                        "inHeader": false
                    }, {
                        "description": "Child Car Seats",
                        "included": true,
                        "inHeader": false
                    }, {
                        "description": "Misfuel",
                        "included": true,
                        "inHeader": false
                    }, {
                        "description": "Courtesy Car",
                        "included": true,
                        "inHeader": false
                    }],
                "breakdowns": [{
                        "description": "Bring together",
                        "price": {
                            "amount": 161827,
                            "str": "1618.27",
                            "symbol": "€",
                            "currency": "EUR",
                            "pretty": "€1618.27"
                        }
                    }, {
                        "description": "Protected NCD",
                        "price": {
                            "amount": 16183,
                            "str": "161.83",
                            "symbol": "€",
                            "currency": "EUR",
                            "pretty": "€161.83"
                        }
                    }, {
                        "description": "Incl AD NCD",
                        "price": {
                            "amount": 0,
                            "str": "0.00",
                            "symbol": "€",
                            "currency": "EUR",
                            "pretty": "€0.00"
                        }
                    }, {
                        "description": "Incl TP NCD",
                        "price": {
                            "amount": 0,
                            "str": "0.00",
                            "symbol": "€",
                            "currency": "EUR",
                            "pretty": "€0.00"
                        }
                    }, {
                        "description": "Gov Levy",
                        "price": {
                            "amount": 8901,
                            "str": "89.01",
                            "symbol": "€",
                            "currency": "EUR",
                            "pretty": "€89.01"
                        }
                    }, {
                        "description": "",
                        "price": {
                            "amount": 0,
                            "str": "0.00",
                            "symbol": "€",
                            "currency": "EUR",
                            "pretty": "€0.00"
                        }
                    }],
                "premium": {
                    "monthly": {
                        "deposit": {
                            "amount": 15570,
                            "str": "155.70",
                            "symbol": "€",
                            "currency": "EUR",
                            "pretty": "€155.70"
                        },
                        "total": {
                            "amount": 189357,
                            "str": "1893.57",
                            "symbol": "€",
                            "currency": "EUR",
                            "pretty": "€1893.57"
                        },
                        "apr": "0.000000%",
                        "installments": {
                            "code": "",
                            "number": 11,
                            "instalment": {
                                "amount": 15576,
                                "str": "155.76",
                                "symbol": "€",
                                "currency": "EUR",
                                "pretty": "€155.76"
                            },
                            "deposit": {
                                "amount": 15570,
                                "str": "155.70",
                                "symbol": "€",
                                "currency": "EUR",
                                "pretty": "€155.70"
                            }
                        },
                        "annual": false,
                        "monthly": true
                    },
                    "annual": {
                        "deposit": {
                            "amount": 0,
                            "str": "0.00",
                            "symbol": "€",
                            "currency": "EUR",
                            "pretty": "€0.00"
                        },
                        "total": {
                            "amount": 189357,
                            "str": "1893.57",
                            "symbol": "€",
                            "currency": "EUR",
                            "pretty": "€1893.57"
                        },
                        "apr": "0%",
                        "annual": true,
                        "monthly": false
                    }
                },
                "name": "STANDARD",
                "id": "STANDARD",
                "tagline": "Our Premium Product"
            }, {
                "benefits": [{
                        "description": "Windscreen Cover",
                        "included": true,
                        "inHeader": true
                    }, {
                        "description": "Theft & Fire Protection",
                        "included": true,
                        "inHeader": true
                    }, {
                        "description": "Windscreen Cover",
                        "included": true,
                        "inHeader": true
                    }, {
                        "description": "Personal Accident",
                        "included": true,
                        "inHeader": false
                    }, {
                        "description": "Legal fees",
                        "included": true,
                        "inHeader": false
                    }, {
                        "description": "Fire Brigade Charges",
                        "included": true,
                        "inHeader": false
                    }, {
                        "description": "Car Valet",
                        "included": true,
                        "inHeader": false
                    }, {
                        "description": "Step Back Bonus Protection",
                        "included": false,
                        "inHeader": false
                    }, {
                        "description": "Personal Belongings/Sat Navs/Mobile Phones",
                        "included": false,
                        "inHeader": false
                    }, {
                        "description": "Replacement Locks & Alarms",
                        "included": false,
                        "inHeader": false
                    }, {
                        "description": "Child Car Seats",
                        "included": false,
                        "inHeader": false
                    }, {
                        "description": "Misfuel",
                        "included": false,
                        "inHeader": false
                    }, {
                        "description": "Courtesy Car",
                        "included": false,
                        "inHeader": false
                    }],
                "breakdowns": [{
                        "description": "Bring together",
                        "price": {
                            "amount": 144715,
                            "str": "1447.15",
                            "symbol": "€",
                            "currency": "EUR",
                            "pretty": "€1447.15"
                        }
                    }, {
                        "description": "Incl AD NCD",
                        "price": {
                            "amount": 0,
                            "str": "0.00",
                            "symbol": "€",
                            "currency": "EUR",
                            "pretty": "€0.00"
                        }
                    }, {
                        "description": "Incl TP NCD",
                        "price": {
                            "amount": 0,
                            "str": "0.00",
                            "symbol": "€",
                            "currency": "EUR",
                            "pretty": "€0.00"
                        }
                    }, {
                        "description": "Gov Levy",
                        "price": {
                            "amount": 7236,
                            "str": "72.36",
                            "symbol": "€",
                            "currency": "EUR",
                            "pretty": "€72.36"
                        }
                    }, {
                        "description": "",
                        "price": {
                            "amount": 0,
                            "str": "0.00",
                            "symbol": "€",
                            "currency": "EUR",
                            "pretty": "€0.00"
                        }
                    }],
                "premium": {
                    "monthly": {
                        "deposit": {
                            "amount": 12658,
                            "str": "126.58",
                            "symbol": "€",
                            "currency": "EUR",
                            "pretty": "€126.58"
                        },
                        "total": {
                            "amount": 154397,
                            "str": "1543.97",
                            "symbol": "€",
                            "currency": "EUR",
                            "pretty": "€1543.97"
                        },
                        "apr": "0.000000%",
                        "installments": {
                            "code": "",
                            "number": 11,
                            "instalment": {
                                "amount": 12663,
                                "str": "126.63",
                                "symbol": "€",
                                "currency": "EUR",
                                "pretty": "€126.63"
                            },
                            "deposit": {
                                "amount": 12658,
                                "str": "126.58",
                                "symbol": "€",
                                "currency": "EUR",
                                "pretty": "€126.58"
                            }
                        },
                        "annual": false,
                        "monthly": true
                    },
                    "annual": {
                        "deposit": {
                            "amount": 0,
                            "str": "0.00",
                            "symbol": "€",
                            "currency": "EUR",
                            "pretty": "€0.00"
                        },
                        "total": {
                            "amount": 154397,
                            "str": "1543.97",
                            "symbol": "€",
                            "currency": "EUR",
                            "pretty": "€1543.97"
                        },
                        "apr": "0%",
                        "annual": true,
                        "monthly": false
                    }
                },
                "name": "VALUE",
                "id": "VALUE",
                "tagline": "Your Essential Cover"
            }],
        "paymentFrequency": "monthly",
        "activeProduct": "STANDARD",
        "selection": {
            "policyType": "STANDARD",
            "scheduleCode": "monthly",
            "addAAMembership": false,
            "aaMembership": null,
            "aaHome": "4353434545"
        }
    },
};
class MotorQuote {
    constructor() {
        this.testQuote = TEST_Q;
        this.checkAAMembership = (req, res) => {
            let q = req.params.id === 'RESET' ? null : req.params.id;
            this.testQuote.quote.selection.aaMembership = q;
            res.send(200);
        };
        this.sendQuote = (req, res) => {
            res.status(200).send(JSON.stringify(this.testQuote));
        };
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MotorQuote;
function createPrice(price) {
    return {
        "amount": price,
        "str": `${price / 100}`,
        "symbol": "€",
        "currency": "EUR",
        "pretty": `€${price / 100}`
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcGkvbW90b3IvbW90b3IucXVvdGUuY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBT0EsTUFBTSxRQUFRLEdBQUc7SUFDaEIsRUFBRSxXQUFXLEVBQUUsb0NBQW9DLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFO0lBQ3JGLEVBQUUsV0FBVyxFQUFFLHFDQUFxQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRTtJQUN0RixFQUFFLFdBQVcsRUFBRSxzQkFBc0IsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUU7SUFDdkUsRUFBRSxXQUFXLEVBQUUsK0JBQStCLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFO0lBQ2pGLEVBQUUsV0FBVyxFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUU7SUFDakUsRUFBRSxXQUFXLEVBQUUsMkJBQTJCLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFO0lBQzdFLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRTtDQUlsRSxDQUFBO0FBRUQsTUFBTSxpQkFBaUIsR0FBRztJQUV6QixFQUFFLFdBQVcsRUFBRSxvQ0FBb0MsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUU7SUFDckYsRUFBRSxXQUFXLEVBQUUscUNBQXFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFO0lBQ3RGLEVBQUUsV0FBVyxFQUFFLHNCQUFzQixFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRTtJQUN2RSxFQUFFLFdBQVcsRUFBRSwrQkFBK0Is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R0FBRzs0QkFDYixVQUFVLEVBQUUsS0FBSzs0QkFDakIsUUFBUSxFQUFFLE9BQU87eUJBQ2pCO3dCQUNELE9BQU8sRUFBRTs0QkFDUixRQUFRLEVBQUUsTUFBTTs0QkFDaEIsS0FBSyxFQUFFLFNBQVM7NEJBQ2hCLFFBQVEsRUFBRSxHQUFHOzRCQUNiLFVBQVUsRUFBRSxLQUFLOzRCQUNqQixRQUFRLEVBQUUsVUFBVTt5QkFDcEI7d0JBQ0QsS0FBSyxFQUFFLElBQUk7d0JBQ1gsUUFBUSxFQUFFLElBQUk7d0JBQ2QsU0FBUyxFQUFFLEtBQUs7cUJBQ2hCO2lCQUNEO2dCQUNELE1BQU0sRUFBRSxPQUFPO2dCQUNmLElBQUksRUFBRSxPQUFPO2dCQUNiLFNBQVMsRUFBRSxzQkFBc0I7YUFDakMsQ0FBQztRQUNGLGtCQUFrQixFQUFFLFNBQVM7UUFDN0IsZUFBZSxFQUFFLFVBQVU7UUFDM0IsV0FBVyxFQUFFO1lBQ1osWUFBWSxFQUFFLFVBQVU7WUFDeEIsY0FBYyxFQUFFLFNBQVM7WUFDekIsaUJBQWlCLEVBQUUsS0FBSztZQUN4QixjQUFjLEVBQUUsSUFBSTtZQUNwQixRQUFRLEVBQUUsWUFBWTtTQUN0QjtLQUNEO0NBRUQsQ0FBQTtBQUVEO0lBR0M7UUFEQSxjQUFTLEdBQUcsTUFBTSxDQUFDO1FBSW5CLHNCQUFpQixHQUFHLENBQUMsR0FBb0IsRUFBRSxHQUFxQjtZQUMvRCxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsS0FBSyxPQUFPLEdBQUcsSUFBSSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1lBQ3pELElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO1lBQ2hELEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDZixDQUFDLENBQUE7UUFFRCxjQUFTLEdBQUcsQ0FBQyxHQUFvQixFQUFFLEdBQXFCO1lBQ3ZELEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFFdEQsQ0FBQyxDQUFBO0lBWmUsQ0FBQztBQWFsQixDQUFDO0FBaEJEOzRCQWdCQyxDQUFBO0FBRUQscUJBQXFCLEtBQWE7SUFDakMsTUFBTSxDQUFDO1FBQ04sUUFBUSxFQUFFLEtBQUs7UUFDZixLQUFLLEVBQUUsR0FBRyxLQUFLLEdBQUcsR0FBRyxFQUFFO1FBQ3ZCLFFBQVEsRUFBRSxHQUFHO1FBQ2IsVUFBVSxFQUFFLEtBQUs7UUFDakIsUUFBUSxFQUFFLElBQUksS0FBSyxHQUFHLEdBQUcsRUFBRTtLQUMzQixDQUFBO0FBQ0YsQ0FBQyIsImZpbGUiOiJhcGkvbW90b3IvbW90b3IucXVvdGUuY29udHJvbGxlci5qcyIsInNvdXJjZXNDb250ZW50IjpbbnVsbF0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
