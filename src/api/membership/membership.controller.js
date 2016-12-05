"use strict";
const defaultConfig = {
    "code": {
        "id": "MEMRENEW100",
        "description": "PERSONAL MEMBERSHIP RENEWAL",
        "renewal": true
    },
    "name": "Personal Membership RENEWAL",
    "schemaCode": "PERSONALMEMBERSHIPRENEWAL",
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
            "active": false,
            "display": "Home Start",
            "name": "homestart",
            "description": "Home start means you’re covered at your home or very near your home address",
            "disabled": false,
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcGkvbWVtYmVyc2hpcC9tZW1iZXJzaGlwLmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVBLE1BQU0sYUFBYSxHQUFHO0lBQ3JCLE1BQU0sRUFBRTtRQUNQLElBQUksRUFBRSxhQUFhO1FBQ25CLGFBQWEsRUFBRSw2QkFBNkI7UUFDNUMsU0FBUyxFQUFFLElBQUk7S0FDZjtJQUNELE1BQU0sRUFBRSw2QkFBNkI7SUFDckMsWUFBWSxFQUFFLDJCQUEyQjtJQUN6QyxZQUFZLEVBQUUsQ0FBQztZQUNkLFFBQVEsRUFBRSxJQUFJO1lBQ2QsU0FBUyxFQUFFLGlCQUFpQjtZQUM1QixNQUFNLEVBQUUsUUFBUTtZQUNoQixhQUFhLEVBQUUscURBQXFEO1lBQ3BFLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLFVBQVUsRUFBRSxDQUFDO29CQUNaLE1BQU0sRUFBRSxZQUFZO29CQUNwQixNQUFNLEVBQUUsK0NBQStDO29CQUN2RCxLQUFLLEVBQUUsU0FBUztvQkFDaEIsYUFBYSxFQUFFLGlFQUFpRTtvQkFDaEYsTUFBTSxFQUFFLG9CQUFvQjtpQkFDNUIsRUFBRTtvQkFDRixNQUFNLEVBQUUsZ0JBQWdCO29CQUN4QixNQUFNLEVBQUUsNENBQTRDO29CQUNwRCxLQUFLLEVBQUUsU0FBUztvQkFDaEIsYUFBYSxFQUFFLG1KQUFtSjtvQkFDbEssTUFBTSxFQUFFLGlCQUFpQjtpQkFDekIsRUFBRTtvQkFDRixNQUFNLEVBQUUsVUFBVTtvQkFDbEIsTUFBTSxFQUFFLG9DQUFvQztvQkFDNUMsS0FBSyxFQUFFLFNBQVM7b0JBQ2hCLGFBQWEsRUFBRSwyS0FBMks7b0JBQzFMLE1BQU0sRUFBRSxTQUFTO2lCQUNqQixDQUFDO1lBQ0YsT0FBTyxFQUFFO2dCQUNSLFNBQVMsRUFBRTtvQkFDVixRQUFRLEVBQUUsR0FBRztvQkFDYixLQUFLLEVBQUUsTUFBTTtvQkFDYixRQUFRLEVBQUUsR0FBRztvQkFDYixVQUFVLEVBQUUsS0FBSztvQkFDakIsUUFB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VTt5QkFDbEIsQ0FBQztpQkFDRixDQUFDO1lBQ0YsVUFBVSxFQUFFO2dCQUNYLE1BQU0sRUFBRSxRQUFRO2dCQUNoQixhQUFhLEVBQUUsT0FBTztnQkFDdEIsUUFBUSxFQUFFLENBQUM7Z0JBQ1gsUUFBUSxFQUFFLEdBQUc7Z0JBQ2IsT0FBTyxFQUFFO29CQUNSLFNBQVMsRUFBRTt3QkFDVixRQUFRLEVBQUUsR0FBRzt3QkFDYixLQUFLLEVBQUUsTUFBTTt3QkFDYixRQUFRLEVBQUUsR0FBRzt3QkFDYixVQUFVLEVBQUUsS0FBSzt3QkFDakIsUUFBUSxFQUFFLE9BQU87cUJBQ2pCO29CQUNELFFBQVEsRUFBRTt3QkFDVCxRQUFRLEVBQUUsSUFBSTt3QkFDZCxLQUFLLEVBQUUsSUFBSTt3QkFDWCxRQUFRLEVBQUUsR0FBRzt3QkFDYixVQUFVLEVBQUUsS0FBSzt3QkFDakIsUUFBUSxFQUFFLEtBQUs7cUJBQ2Y7aUJBQ0Q7Z0JBQ0QsT0FBTyxFQUFFLHlCQUF5QjtnQkFDbEMsUUFBUSxFQUFFLENBQUM7d0JBQ1YsTUFBTSxFQUFFLFdBQVc7d0JBQ25CLE9BQU8sRUFBRSxZQUFZO3dCQUNyQixNQUFNLEVBQUUsTUFBTTt3QkFDZCxhQUFhLEVBQUUsS0FBSzt3QkFDcEIsWUFBWSxFQUFFLENBQUMsVUFBVSxDQUFDO3FCQUMxQixFQUFFO3dCQUNGLE1BQU0sRUFBRSxTQUFTO3dCQUNqQixPQUFPLEVBQUUsV0FBVzt3QkFDcEIsTUFBTSxFQUFFLE1BQU07d0JBQ2QsYUFBYSxFQUFFLFFBQVE7d0JBQ3ZCLFlBQVksRUFBRSxDQUFDLFVBQVUsQ0FBQztxQkFDMUIsRUFBRTt3QkFDRixNQUFNLEVBQUUsYUFBYTt3QkFDckIsT0FBTyxFQUFFLGVBQWU7d0JBQ3hCLE1BQU0sRUFBRSxNQUFNO3dCQUNkLGFBQWEsRUFBRSxZQUFZO3dCQUMzQixZQUFZLEVBQUUsQ0FBQyxVQUFVLEVBQUUsaUJBQWlCLENBQUM7cUJBQzdDLENBQUM7YUFDRjtTQUNELENBQUM7Q0FDRixDQUFDO0FBRUY7SUFDQyxPQUFjLFNBQVMsQ0FBQyxHQUFvQixFQUFFLEdBQXFCO1FBQ2xFLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDekIsQ0FBQztBQUNGLENBQUM7QUFKRDs0QkFJQyxDQUFBIiwiZmlsZSI6ImFwaS9tZW1iZXJzaGlwL21lbWJlcnNoaXAuY29udHJvbGxlci5qcyIsInNvdXJjZXNDb250ZW50IjpbbnVsbF19
