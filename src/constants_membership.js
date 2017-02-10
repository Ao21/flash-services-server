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
exports.defaultOffer = {};
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
            "disabled": false,
            "price": createPrice(425),
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
            "price": createPrice(575),
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
exports.configWithQuotationNoOffer = {
    "code": {
        "id": "MEM100",
        "description": "AA PERSONAL MEMBERSHIP"
    },
    "name": "AA PERSONAL MEMBERSHIP",
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
            "price": createPrice(825)
        }, {
            "active": true,
            "display": "Home Start",
            "name": "homestart",
            "description": "Home start means you’re covered at your home or very near your home address",
            "disabled": false,
            "price": createPrice(600),
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
            "price": createPrice(575),
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
                    "price": createPrice(0),
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
                    "price": createPrice(0),
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
                "price": createPrice(425),
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
                "price": createPrice(0),
                "typeDisplay": "Primary User",
                "type": "primaryUser",
                "index": 0
            }
        }
    },
    "quotation": {
        "reference": "BRER17000001",
        "renewalOptions": {
            updateDetails: true
        },
        premiumWithOffer: {},
        premium: createPrice(1975),
        "breakdown": [{
                "description": "Roo Bree",
                "type": "cover",
                "name": "RESCUE",
                "price": createPrice(825),
                "mandatory": true
            }, {
                "description": "Rescue Plus",
                "type": "cover",
                "name": "RESCUEPLUS",
                "price": createPrice(575),
                "mandatory": false
            }, {
                "description": "Home Start",
                "type": "cover",
                "name": "HOMESTART",
                "price": createPrice(575),
                "mandatory": false
            }]
    }
};
exports.configWithQuotation = {
    "code": {
        "id": "MEM100",
        "description": "AA PERSONAL MEMBERSHIP"
    },
    "name": "AA PERSONAL MEMBERSHIP",
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
            "price": createPrice(825)
        }, {
            "active": false,
            "display": "Home Start",
            "name": "homestart",
            "description": "Home start means you’re covered at your home or very near your home address",
            "disabled": false,
            "price": createPrice(600),
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
            "price": createPrice(575),
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
                    "price": createPrice(0),
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
                    "price": createPrice(0),
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
                "price": createPrice(425),
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
                "price": createPrice(0),
                "typeDisplay": "Primary User",
                "type": "primaryUser",
                "index": 0
            },
            "1": {
                "firstName": "Ronan",
                "surname": "Brett",
                "dateOfBirth": "29/12/1987",
                "price": createPrice(425),
                "typeDisplay": "Adult",
                "type": "adults",
                "index": 1
            },
            "2": {
                "price": createPrice(0),
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
            updateDetails: true,
            offer: {
                'accepted': null,
                'description': '(Firstname), your Membership renewal is €45.50',
                'price': createPrice(825),
                'originalPrice': createPrice(1525),
                'discounts': [{
                        'type': 'cover',
                        'ref': 'HOMESTART',
                        'active': true,
                        'priority': true,
                        'price': createPrice(0),
                        'description': `<b>Free Home Start worth ${createPrice(225).monthly.pretty}.</b> - this means you're covered right at your doorstep.`
                    }, {
                        'type': 'cover',
                        'ref': 'RESCUEPLUS',
                        'description': `<b>Free rescue plus worth ${createPrice(425).monthly.pretty}</b> - covers you for a nationwide tow if needed. We can also organise one of the following for you - car hire, travel expenses or free accommodation if something goes wrong.`,
                        'price': createPrice(0),
                        'active': true
                    }, {
                        'type': 'member',
                        'index': 1,
                        'price': createPrice(0),
                        'description': `<b>${createPrice(125).monthly.pretty} off additional Member  worth ${createPrice(425).monthly.pretty}</b> - add someone in your home to your AA Membership.`,
                        'fields': [{
                                'name': 'firstName',
                                'label': 'First Name',
                                'type': 'text',
                                'placeholder': 'Joe',
                                'validation': ['required']
                            }, {
                                'name': 'surname',
                                'label': 'Last Name',
                                'type': 'text',
                                'placeholder': 'Bloggs',
                                'validation': ['required']
                            }, {
                                'name': 'dateOfBirth',
                                'label': 'Date of Birth',
                                'type': 'date',
                                'placeholder': 'dd/mm/yyyy',
                                'validation': ['required', 'ageRequirements']
                            }]
                    }, {
                        'type': 'member',
                        'index': 2,
                        'price': createPrice(0),
                        'description': `<b>Free additional Member worth ${createPrice(425).monthly.pretty}</b>- Add someone in your home to your Membership for free`,
                        'fields': [{
                                'name': 'firstName',
                                'label': 'First Name',
                                'type': 'text',
                                'placeholder': 'Joe',
                                'validation': ['required']
                            }, {
                                'name': 'surname',
                                'label': 'Last Name',
                                'type': 'text',
                                'placeholder': 'Bloggs',
                                'validation': ['required']
                            }, {
                                'name': 'dateOfBirth',
                                'label': 'Date of Birth',
                                'type': 'date',
                                'placeholder': 'dd/mm/yyyy',
                                'validation': ['required', 'ageRequirements']
                            }]
                    }]
            }
        },
        premium: createPrice(1825),
        "breakdown": [{
                "description": "Roo Bree",
                "type": "cover",
                "name": "RESCUE",
                "price": createPrice(825),
                "mandatory": true
            }, {
                "description": "Ronan Brett",
                "type": "member",
                "index": 1,
                "price": createPrice(425),
                "mandatory": false
            }, {
                "description": "Rescue Plus",
                "type": "cover",
                "name": "RESCUEPLUS",
                "price": createPrice(575),
                "mandatory": false
            }]
    }
};
function createPrice(price) {
    return {
        monthly: {
            "amount": price,
            "str": `${price / 100}`,
            "symbol": "€",
            "currency": "EUR",
            "pretty": `€${price / 100}`
        },
        annual: {
            "amount": price * 12,
            "str": `${(price * 12) / 100}`,
            "symbol": "€",
            "currency": "EUR",
            "pretty": `€${(price * 12) / 100}`
        }
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb25zdGFudHNfbWVtYmVyc2hpcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQWEsd0JBQWdCLEdBQUc7SUFDNUIsT0FBTyxFQUFFLElBQUk7SUFDYixXQUFXLEVBQUUsS0FBSztJQUNsQixTQUFTLEVBQUUsTUFBTTtJQUNqQixPQUFPLEVBQUUsMEJBQTBCO0lBQ25DLGFBQWEsRUFBRSxZQUFZO0lBQzNCLGFBQWEsRUFBRSxRQUFRO0lBQ3ZCLGdCQUFnQixFQUFFLGNBQWM7SUFDaEMsU0FBUyxFQUFFO1FBQ1AsY0FBYyxFQUFFLG9CQUFvQjtRQUNwQyxjQUFjLEVBQUUsRUFBRTtRQUNsQixNQUFNLEVBQUUsaUJBQWlCO1FBQ3pCLFFBQVEsRUFBRSxVQUFVO0tBQ3ZCO0lBQ0QsVUFBVSxFQUFFLEtBQUs7SUFDakIsT0FBTyxFQUFFLEtBQUs7Q0FDakIsQ0FBQTtBQUdZLG9CQUFZLEdBQUcsRUFFM0IsQ0FBQTtBQUVZLHFCQUFhLEdBQUc7SUFDekIsTUFBTSxFQUFFO1FBQ0osSUFBSSxFQUFFLFFBQVE7UUFDZCxhQUFhLEVBQUUscUJBQXFCO0tBQ3ZDO0lBQ0QsTUFBTSxFQUFFLHFCQUFxQjtJQUM3QixZQUFZLEVBQUUsb0JBQW9CO0lBQ2xDLFlBQVksRUFBRSxDQUFDO1lBQ1gsUUFBUSxFQUFFLElBQUk7WUFDZCxTQUFTLEVBQUUsaUJBQWlCO1lBQzVCLE1BQU0sRUFBRSxRQUFRO1lBQ2hCLGFBQWEsRUFBRSxxREFBcUQ7WUFDcEUsVUFBVSxFQUFFLElBQUk7WUFDaEIsVUFBVSxFQUFFLENBQUM7b0JBQ1QsTUFBTSxFQUFFLFlBQVk7b0JBQ3BCLE1BQU0sRUFBRSwrQ0FBK0M7b0JBQ3ZELEtBQUssRUFBRSxTQUFTO29CQUNoQixhQUFhLEVBQUUsaUVBQWlFO29CQUNoRixNQUFNLEVBQUUsb0JBQW9CO2lCQUMvQixFQUFFO29CQUNDLE1BQU0sRUFBRSxnQkFBZ0I7b0JBQ3hCLE1BQU0sRUFBRSw0Q0FBNEM7b0JBQ3BELEtBQUssRUFBRSxT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LENBQUM7UUFDSCxPQUFPLEVBQUU7WUFDTCxRQUFRLEVBQUUsS0FBSztZQUNmLEtBQUssRUFBRSxHQUFHLEtBQUssR0FBRyxHQUFHLEVBQUU7WUFDdkIsUUFBUSxFQUFFLEdBQUc7WUFDYixVQUFVLEVBQUUsS0FBSztZQUNqQixRQUFRLEVBQUUsSUFBSSxLQUFLLEdBQUcsR0FBRyxFQUFFO1NBQzlCO1FBQ0QsTUFBTSxFQUFFO1lBQ0osUUFBUSxFQUFFLEtBQUssR0FBRyxFQUFFO1lBQ3BCLEtBQUssRUFBRSxHQUFHLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRTtZQUM5QixRQUFRLEVBQUUsR0FBRztZQUNiLFVBQVUsRUFBRSxLQUFLO1lBQ2pCLFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRTtTQUNyQztLQUNKLENBQUE7QUFDTCxDQUFDIiwiZmlsZSI6ImNvbnN0YW50c19tZW1iZXJzaGlwLmpzIiwic291cmNlc0NvbnRlbnQiOltudWxsXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
