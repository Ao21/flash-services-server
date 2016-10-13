export const defaultSaveQuote = {
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
}


export const defaultConfig = {
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

export const configWithQuotation = {
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
            // "discount": {
            //     type: 'cover',
            //     ref: "HOMESTART",
            //     display: 'Home Start',
            //     "price": {
            //         "monthly": {
            //             "amount": 225,
            //             "str": "2.25",
            //             "symbol": "€",
            //             "currency": "EUR",
            //             "pretty": "€2.25"
            //         },
            //         "annual": {
            //             "amount": 2700,
            //             "str": "27.00",
            //             "symbol": "€",
            //             "currency": "EUR",
            //             "pretty": "€27.00"
            //         }
            //     },
            // },
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
}