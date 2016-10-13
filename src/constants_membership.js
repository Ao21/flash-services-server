"use strict";
exports.defaultSaveQuote = {
    "title": "Mr",
    "firstName": "Roo",
    "surname": "Bree",
    "email": "ronanbrett@hotcharts.com",
    "dateOfBirth": "29/12/1987",
    "phoneNumber": "083333",
    "quoteReference": "BRER17000001",
    "address": {
        "addressLine1": "14 Harcourt Street",
        "addressLine2": "",
        "area": "Harcourt Street",
        "county": "Dublin 2"
    },
    "saveMyAA": false,
    "login": false
};
exports.defaultConfig = {
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
exports.configWithQuotation = {
    "code": {
        "id": "MEM100",
        "description": "AA PERSONAL MEMBERSHIP RENEWAL"
    },
    "name": "AA PERSONAL MEMBERSHIP RENEWAL",
    "schemaCode": "MEM100",
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
                    "str": "99.00",
                    "symbol": "€",
                    "currency": "EUR",
                    "pretty": "€99.00"
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
            "benefits": [{
                    "name": "Cover at your doorstep",
                    "icon": "assets/images/benefits/DOORSTEPCOVER.svg",
                    "pkg": "HOMESTART",
                    "description": "If your car can’t be fixed, we can arrange for it to be towed to the nearest AA Appointed garage or a destination of your choice.",
                    "code": "DOORSTEPCOVER"
                }]
        }, {
            "active": true,
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
                    "str": "69.00",
                    "symbol": "€",
                    "currency": "EUR",
                    "pretty": "€69.00"
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
                },
                {
                    "index": 2,
                    "type": "adults",
                    "typeDisplay": "Adult",
                    "minAge": 0,
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
        }],
    "members": {
        "adults": {
            "0": {
                "title": "Mr",
                "firstName": "Roo",
                "surname": "Bree",
                "dateOfBirth": "29/12/1987",
                "phoneNumber": "083333",
                "addressLine1": "14 Harcourt Street",
                "addressLine2": "",
                "county": "Dublin 2",
                "area": "Harcourt Street",
                "price": {
                    "monthly": {
                        "amount": 0,
                        "str": "0",
                        "symbol": "€",
                        "currency": "EUR",
                        "pretty": "€0"
                    },
                    "annual": {
                        "amount": 0,
                        "str": "0",
                        "symbol": "€",
                        "currency": "EUR",
                        "pretty": "€0"
                    }
                },
                "typeDisplay": "Primary User",
                "type": "primaryUser",
                "index": 0
            },
            "1": {
                "firstName": "Ronan",
                "surname": "Brett",
                "dateOfBirth": "29/12/1987",
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
                "index": 1
            },
            "2": {
                "price": {
                    "monthly": {
                        "amount": 0,
                        "str": "0",
                        "symbol": "€",
                        "currency": "EUR",
                        "pretty": "€0"
                    },
                    "annual": {
                        "amount": 0,
                        "str": "0",
                        "symbol": "€",
                        "currency": "EUR",
                        "pretty": "€0"
                    }
                },
                "placeholder": true,
                "typeDisplay": "Adult",
                "type": "adults",
                "index": 2
            }
        }
    },
    "quotation": {
        "reference": "BRER17000001",
        "renewalOptions": {
            "updateDetails": true,
            "discount": {
                "type": 'additionalMember'
            }
        },
        "total": {
            "annual": {
                "deposit": {
                    "amount": 0,
                    "str": "0.00",
                    "symbol": "€",
                    "currency": "EUR",
                    "pretty": "€0.00"
                },
                "instalment": {
                    "charge": {
                        "amount": 0,
                        "str": "0.00",
                        "symbol": "€",
                        "currency": "EUR",
                        "pretty": "€0.00"
                    },
                    "number": 0
                }
            },
            "monthly": {
                "deposit": {
                    "amount": 1824,
                    "str": "18.24",
                    "symbol": "€",
                    "currency": "EUR",
                    "pretty": "€18.24"
                },
                "instalment": {
                    "charge": {
                        "amount": 1825,
                        "str": "18.25",
                        "symbol": "€",
                        "currency": "EUR",
                        "pretty": "€18.25"
                    },
                    "number": 11
                }
            }
        },
        "premium": {
            "annual": {
                "amount": 21900,
                "str": "219.00",
                "symbol": "€",
                "currency": "EUR",
                "pretty": "€219.00"
            },
            "monthly": {
                "amount": 1825,
                "str": "18.25",
                "symbol": "€",
                "currency": "EUR",
                "pretty": "€18.25"
            }
        },
        "breakdown": [{
                "description": "Roo Bree",
                "type": "cover",
                "name": "RESCUE",
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
                        "str": "99.00",
                        "symbol": "€",
                        "currency": "EUR",
                        "pretty": "€99.00"
                    }
                },
                "mandatory": true
            }, {
                "description": "Ronan Brett",
                "type": "member",
                "index": 1,
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
                "mandatory": false
            }, {
                "description": "Rescue Plus",
                "type": "cover",
                "name": "RESCUEPLUS",
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
                        "str": "69.00",
                        "symbol": "€",
                        "currency": "EUR",
                        "pretty": "€69.00"
                    }
                },
                "mandatory": false
            }]
    }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb25zdGFudHNfbWVtYmVyc2hpcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQWEsd0JBQWdCLEdBQUc7SUFDNUIsT0FBTyxFQUFFLElBQUk7SUFDYixXQUFXLEVBQUUsS0FBSztJQUNsQixTQUFTLEVBQUUsTUFBTTtJQUNqQixPQUFPLEVBQUUsMEJBQTBCO0lBQ25DLGFBQWEsRUFBRSxZQUFZO0lBQzNCLGFBQWEsRUFBRSxRQUFRO0lBQ3ZCLGdCQUFnQixFQUFFLGNBQWM7SUFDaEMsU0FBUyxFQUFFO1FBQ1AsY0FBYyxFQUFFLG9CQUFvQjtRQUNwQyxjQUFjLEVBQUUsRUFBRTtRQUNsQixNQUFNLEVBQUUsaUJBQWlCO1FBQ3pCLFFBQVEsRUFBRSxVQUFVO0tBQ3ZCO0lBQ0QsVUFBVSxFQUFFLEtBQUs7SUFDakIsT0FBTyxFQUFFLEtBQUs7Q0FDakIsQ0FBQTtBQUdZLHFCQUFhLEdBQUc7SUFDekIsTUFBTSxFQUFFO1FBQ0osSUFBSSxFQUFFLFFBQVE7UUFDZCxhQUFhLEVBQUUscUJBQXFCO0tBQ3ZDO0lBQ0QsTUFBTSxFQUFFLHFCQUFxQjtJQUM3QixZQUFZLEVBQUUsb0JBQW9CO0lBQ2xDLFlBQVksRUFBRSxDQUFDO1lBQ1gsUUFBUSxFQUFFLElBQUk7WUFDZCxTQUFTLEVBQUUsaUJBQWlCO1lBQzVCLE1BQU0sRUFBRSxRQUFRO1lBQ2hCLGFBQWEsRUFBRSxxREFBcUQ7WUFDcEUsVUFBVSxFQUFFLElBQUk7WUFDaEIsVUFBVSxFQUFFLENBQUM7b0JBQ1QsTUFBTSxFQUFFLFlBQVk7b0JBQ3BCLE1BQU0sRUFBRSwrQ0FBK0M7b0JBQ3ZELEtBQUssRUFBRSxTQUFTO29CQUNoQixhQUFhLEVBQUUsaUVBQWlFO29CQUNoRixNQUFNLEVBQUUsb0JBQW9CO2lCQUMvQixFQUFFO29CQUNDLE1BQU0sRUFBRSxnQkFBZ0I7b0JBQ3hCLE1BQU0sRUFBRSw0Q0FBNEM7b0JBQ3BELEtBQUssRUFBRSxTQUFTO29CQUNoQixhQUFhLEVBQUUsbUpBQW1K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
