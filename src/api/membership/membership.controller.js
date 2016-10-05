"use strict";
const defaultConfig = {
    "code": {
        "id": "MEM100",
        "description": "PERSONAL MEMBERSHIP"
    },
    "name": "Personal Membership",
    "schemaCode": "PERSONALMEMBERSHIP",
    "coverLevel": [{
            "active": true,
            "display": "Roadside Rescue",
            "name": "rescue",
            "description": "Our AA Patrols fix 8 out of 10 cars at the roadside",
            "disabled": true,
            "benefits": [{
                    "name": "24/7 Cover",
                    "icon": "assets/images/benefits/24-7EMERGENCYCOVER.svg",
                    "pkg": "default",
                    "description": "Our roadside rescue service is available anytime, day or night.",
                    "code": "24-7EMERGENCYCOVER"
                }, {
                    "name": "Personal Cover",
                    "icon": "assets/images/benefits/ANYVEHICLECOVER.svg",
                    "pkg": "default",
                    "description": "AA Membership covers you in any car. This means if you happen to be broken down in someone else’s car as a driver or a passenger, you’re covered.",
                    "code": "ANYVEHICLECOVER"
                }, {
                    "name": "UK Cover",
                    "icon": "assets/images/benefits/UKCOVER.svg",
                    "pkg": "default",
                    "description": "AA Members are covered anywhere in Ireland and the UK. If you’re driving in the UK and you happen to breakdown, all the benefits you have on your cover will still apply.",
                    "code": "UKCOVER"
                }],
            "price": {
                "monthly": {
                    "amount": 825,
                    "str": "8.25",
                    "symbol": "€",
                    "currency": "EUR",
                    "pretty": "€8.25"
                },
                "annual": {
                    "amount": 9900,
                    "str": "99",
                    "symbol": "€",
                    "currency": "EUR",
                    "pretty": "€99"
                }
            }
        }, {
            "active": true,
            "display": "Home Start",
            "name": "homestart",
            "description": "Home start means you’re covered at your home or very near your home address",
            "disabled": true,
            "price": {
                "monthly": {
                    "amount": 0,
                    "str": "0.00",
                    "symbol": "€",
                    "currency": "EUR",
                    "pretty": "€0.00"
                },
                "annual": {
                    "amount": 0,
                    "str": "0",
                    "symbol": "€",
                    "currency": "EUR",
                    "pretty": "€0"
                }
            },
            "benefits": [{
                    "name": "Cover at your doorstep",
                    "icon": "assets/images/benefits/DOORSTEPCOVER.svg",
                    "pkg": "HOMESTART",
                    "description": "If your car can’t be fixed, we can arrange for it to be towed to the nearest AA Appointed garage or a destination of your choice.",
                    "code": "DOORSTEPCOVER"
                }]
        }, {
            "active": false,
            "display": "Rescue Plus",
            "name": "rescueplus",
            "description": "Rescue Plus covers you for a nationwide tow if needed.  If you breakdown away from your home we can also organise one of the following for you:",
            "disabled": false,
            "price": {
                "monthly": {
                    "amount": 575,
                    "str": "5.75",
                    "symbol": "€",
                    "currency": "EUR",
                    "pretty": "€5.75"
                },
                "annual": {
                    "amount": 6900,
                    "str": "69",
                    "symbol": "€",
                    "currency": "EUR",
                    "pretty": "€69"
                }
            },
            "benefits": [{
                    "name": "Up to 48 hours car hire",
                    "icon": "assets/images/benefits/CARHIRE.svg",
                    "pkg": "RESCUEPLUS",
                    "description": "We’ll organise a car rental for you so you’re not left stranded",
                    "code": "CARHIRE"
                }, {
                    "name": "Travel Expenses",
                    "icon": "assets/images/benefits/TRAVELEXPENSES.svg",
                    "pkg": "RESCUEPLUS",
                    "description": "Up to €200 travel expenses to make sure that you get to where you need to go",
                    "code": "TRAVELEXPENSES"
                }, {
                    "name": "Overnight accommodation",
                    "icon": "assets/images/benefits/ACCOMMODATION.svg",
                    "pkg": "RESCUEPLUS",
                    "description": "We can provide you with one night accommodation",
                    "code": "ACCOMMODATION"
                }]
        }],
    "paymentOptions": [{
            "display": "Month",
            "type": "monthly",
            "multiplier": 1,
            "active": true,
            "options": ["Card", "Bank"]
        }, {
            "display": "Year",
            "type": "annual",
            "multiplier": 12,
            "active": false,
            "options": ["Card", "Bank"]
        }],
    "criteria": [{
            "name": "adults",
            "header": "Adult 17+",
            "max": 4,
            "overrides": [{
                    "index": 0,
                    "type": "primaryUser",
                    "typeDisplay": "Primary User",
                    "minAge": 17,
                    "maxAge": 200,
                    "price": {
                        "monthly": {
                            "amount": 0,
                            "str": "0.00",
                            "symbol": "€",
                            "currency": "EUR",
                            "pretty": "€0.00"
                        },
                        "annual": {
                            "amount": 0,
                            "str": "0",
                            "symbol": "€",
                            "currency": "EUR",
                            "pretty": "€0"
                        }
                    },
                    "title": "Please enter your details",
                    "fields": [{
                            "name": "email",
                            "label": "Email",
                            "type": "email",
                            "placeholder": "example@theaa.ie",
                            "validation": ["required", "emailValidator"]
                        }, {
                            "name": "title",
                            "label": "Title",
                            "type": "title",
                            "placeholder": "",
                            "validation": ["required"]
                        }, {
                            "name": "firstName",
                            "label": "First Name",
                            "type": "text",
                            "placeholder": "Joe",
                            "validation": ["required"]
                        }, {
                            "name": "surname",
                            "label": "Last Name",
                            "type": "text",
                            "placeholder": "Bloggs",
                            "validation": ["required"]
                        }, {
                            "name": "dateOfBirth",
                            "label": "Date of Birth",
                            "type": "date",
                            "placeholder": "dd/mm/yyyy",
                            "validation": ["required", "ageRequirements"]
                        }, {
                            "name": "phoneNumber",
                            "label": "Phone Number",
                            "type": "number",
                            "placeholder": "08",
                            "validation": ["required", "notLetters", "phoneNumber"]
                        }, {
                            "name": "addressLine1",
                            "label": "Address Line 1",
                            "type": "text",
                            "placeholder": "",
                            "validation": ["required"]
                        }, {
                            "name": "addressLine2",
                            "label": "Address Line 2",
                            "type": "text",
                            "placeholder": "",
                            "validation": [""]
                        }, {
                            "name": "area",
                            "label": "Area",
                            "type": "autocomplete",
                            "placeholder": "",
                            "validation": ["required"],
                            "filterBy": "county",
                            "data": "areas"
                        }, {
                            "name": "county",
                            "label": "County",
                            "type": "autocomplete",
                            "placeholder": "",
                            "validation": ["required"],
                            "filterBy": "area",
                            "data": "counties"
                        }]
                }],
            "defaults": {
                "type": "adults",
                "typeDisplay": "Adult",
                "minAge": 0,
                "maxAge": 200,
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
                "title": "+ Add Additional Member",
                "fields": [{
                        "name": "firstName",
                        "label": "First Name",
                        "type": "text",
                        "placeholder": "Joe",
                        "validation": ["required"]
                    }, {
                        "name": "surname",
                        "label": "Last Name",
                        "type": "text",
                        "placeholder": "Bloggs",
                        "validation": ["required"]
                    }, {
                        "name": "dateOfBirth",
                        "label": "Date of Birth",
                        "type": "date",
                        "placeholder": "dd/mm/yyyy",
                        "validation": ["required", "ageRequirements"]
                    }]
            }
        }]
};
class Membership {
    static getConfig(req, res) {
        res.send(defaultConfig);
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Membership;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcGkvbWVtYmVyc2hpcC9tZW1iZXJzaGlwLmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVBLE1BQU0sYUFBYSxHQUFHO0lBQ3JCLE1BQU0sRUFBRTtRQUNQLElBQUksRUFBRSxRQUFRO1FBQ2QsYUFBYSxFQUFFLHFCQUFxQjtLQUNwQztJQUNELE1BQU0sRUFBRSxxQkFBcUI7SUFDN0IsWUFBWSxFQUFFLG9CQUFvQjtJQUNsQyxZQUFZLEVBQUUsQ0FBQztZQUNkLFFBQVEsRUFBRSxJQUFJO1lBQ2QsU0FBUyxFQUFFLGlCQUFpQjtZQUM1QixNQUFNLEVBQUUsUUFBUTtZQUNoQixhQUFhLEVBQUUscURBQXFEO1lBQ3BFLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLFVBQVUsRUFBRSxDQUFDO29CQUNaLE1BQU0sRUFBRSxZQUFZO29CQUNwQixNQUFNLEVBQUUsK0NBQStDO29CQUN2RCxLQUFLLEVBQUUsU0FBUztvQkFDaEIsYUFBYSxFQUFFLGlFQUFpRTtvQkFDaEYsTUFBTSxFQUFFLG9CQUFvQjtpQkFDNUIsRUFBRTtvQkFDRixNQUFNLEVBQUUsZ0JBQWdCO29CQUN4QixNQUFNLEVBQUUsNENBQTRDO29CQUNwRCxLQUFLLEVBQUUsU0FBUztvQkFDaEIsYUFBYSxFQUFFLG1KQUFtSjtvQkFDbEssTUFBTSxFQUFFLGlCQUFpQjtpQkFDekIsRUFBRTtvQkFDRixNQUFNLEVBQUUsVUFBVTtvQkFDbEIsTUFBTSxFQUFFLG9DQUFvQztvQkFDNUMsS0FBSyxFQUFFLFNBQVM7b0JBQ2hCLGFBQWEsRUFBRSwyS0FBMks7b0JBQzFMLE1BQU0sRUFBRSxTQUFTO2lCQUNqQixDQUFDO1lBQ0YsT0FBTyxFQUFFO2dCQUNSLFNBQVMsRUFBRTtvQkFDVixRQUFRLEVBQUUsR0FBRztvQkFDYixLQUFLLEVBQUUsTUFBTTtvQkFDYixRQUFRLEVBQUUsR0FBRztvQkFDYixVQUFVLEVBQUUsS0FBSztvQkFDakIsUUFBUSxFQUFFLE9BQU87aUJBQ2pCO2dC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QUFROzRCQUNqQixNQUFNLEVBQUUsY0FBYzs0QkFDdEIsYUFBYSxFQUFFLEVBQUU7NEJBQ2pCLFlBQVksRUFBRSxDQUFDLFVBQVUsQ0FBQzs0QkFDMUIsVUFBVSxFQUFFLE1BQU07NEJBQ2xCLE1BQU0sRUFBRSxVQUFVO3lCQUNsQixDQUFDO2lCQUNGLENBQUM7WUFDRixVQUFVLEVBQUU7Z0JBQ1gsTUFBTSxFQUFFLFFBQVE7Z0JBQ2hCLGFBQWEsRUFBRSxPQUFPO2dCQUN0QixRQUFRLEVBQUUsQ0FBQztnQkFDWCxRQUFRLEVBQUUsR0FBRztnQkFDYixPQUFPLEVBQUU7b0JBQ1IsU0FBUyxFQUFFO3dCQUNWLFFBQVEsRUFBRSxHQUFHO3dCQUNiLEtBQUssRUFBRSxNQUFNO3dCQUNiLFFBQVEsRUFBRSxHQUFHO3dCQUNiLFVBQVUsRUFBRSxLQUFLO3dCQUNqQixRQUFRLEVBQUUsT0FBTztxQkFDakI7b0JBQ0QsUUFBUSxFQUFFO3dCQUNULFFBQVEsRUFBRSxJQUFJO3dCQUNkLEtBQUssRUFBRSxJQUFJO3dCQUNYLFFBQVEsRUFBRSxHQUFHO3dCQUNiLFVBQVUsRUFBRSxLQUFLO3dCQUNqQixRQUFRLEVBQUUsS0FBSztxQkFDZjtpQkFDRDtnQkFDRCxPQUFPLEVBQUUseUJBQXlCO2dCQUNsQyxRQUFRLEVBQUUsQ0FBQzt3QkFDVixNQUFNLEVBQUUsV0FBVzt3QkFDbkIsT0FBTyxFQUFFLFlBQVk7d0JBQ3JCLE1BQU0sRUFBRSxNQUFNO3dCQUNkLGFBQWEsRUFBRSxLQUFLO3dCQUNwQixZQUFZLEVBQUUsQ0FBQyxVQUFVLENBQUM7cUJBQzFCLEVBQUU7d0JBQ0YsTUFBTSxFQUFFLFNBQVM7d0JBQ2pCLE9BQU8sRUFBRSxXQUFXO3dCQUNwQixNQUFNLEVBQUUsTUFBTTt3QkFDZCxhQUFhLEVBQUUsUUFBUTt3QkFDdkIsWUFBWSxFQUFFLENBQUMsVUFBVSxDQUFDO3FCQUMxQixFQUFFO3dCQUNGLE1BQU0sRUFBRSxhQUFhO3dCQUNyQixPQUFPLEVBQUUsZUFBZTt3QkFDeEIsTUFBTSxFQUFFLE1BQU07d0JBQ2QsYUFBYSxFQUFFLFlBQVk7d0JBQzNCLFlBQVksRUFBRSxDQUFDLFVBQVUsRUFBRSxpQkFBaUIsQ0FBQztxQkFDN0MsQ0FBQzthQUNGO1NBQ0QsQ0FBQztDQUNGLENBQUM7QUFFRjtJQUNDLE9BQWMsU0FBUyxDQUFDLEdBQW9CLEVBQUUsR0FBcUI7UUFDbEUsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUN6QixDQUFDO0FBQ0YsQ0FBQztBQUpEOzRCQUlDLENBQUEiLCJmaWxlIjoiYXBpL21lbWJlcnNoaXAvbWVtYmVyc2hpcC5jb250cm9sbGVyLmpzIiwic291cmNlc0NvbnRlbnQiOltudWxsXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
