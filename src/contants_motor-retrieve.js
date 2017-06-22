"use strict";
exports.retrieveQuote = {
    "stages": [{
            "id": "quotation",
            "title": "Your Quote",
            "pages": [{
                    "id": "getting-started",
                    "title": "Getting Started",
                    "order": 0,
                    "uiOptions": {
                        "nextPage": "your-details",
                        "isComplete": true,
                        "isErrored": false
                    },
                    "sections": [{
                            "id": "pre-default",
                            "type": "default",
                            "fields": [{
                                    "key": "email",
                                    "label": "What is your Email Address?",
                                    "type": "myaaEmail",
                                    "required": true,
                                    "order": 0,
                                    "value": "ro.brett@gmail.com",
                                    "validators": ["validEmailValidate"],
                                    "uiOptions": {
                                        "summaryTitle": ""
                                    }
                                }, {
                                    "key": "amountOfDrivers",
                                    "label": "How many drivers will there be on your policy including yourself?",
                                    "type": "memberSelector",
                                    "required": true,
                                    "order": 1,
                                    "value": 2,
                                    "min": 1,
                                    "max": 5,
                                    "uiOptions": {
                                        "summaryTitle": "Amount of Drivers"
                                    }
                                }, {
                                    "key": "termsConditions",
                                    "label": "Terms and Conditions",
                                    "type": "questionText",
                                    "order": 2,
                                    "timeline": false,
                                    "content": "By providing the requested data, you consent to AA's Data Protection and Privacy Policy and to AA using it for administration and keeping you informed by mail, telephone, email and SMS of other products and services from us. By proceeding, you consent to & confirm that you have read and accepted the AA Data Protection & Privacy Policy and the AA Terms & Conditions",
                                    "uiOptions": {
                                        "summaryHidden": true
                                    }
                                }]
                        }]
                }, {
                    "id": "your-details",
                    "title": "Details",
                    "order": 1,
                    "uiOptions": {
                        "nextPage": "your-address",
                        "prevPage": "getting-started",
                        "isComplete": true,
                        "isErrored": false
                    },
                    "templates": [{
                            "type": "default",
                            "additional": true,
                            "hasQuestionsByDefault": true,
                            "fields": [{
                                    "key": "title",
                                    "label": "Title",
                                    "type": "radio",
                                    "value": {
                                        "id": "Mr",
                                        "description": "Mr"
                                    },
                                    "order": 0,
                                    "options": [{
                                            "id": "Mr",
                                            "description": "Mr"
                                        }, {
                                            "id": "Mrs",
                                            "description": "Mrs"
                                        }, {
                                            "id": "Miss",
                                            "description": "Miss"
                                        }, {
                                            "id": "Ms",
                                            "description": "Ms"
                                        }],
                                    "required": true,
                                    "uiOptions": {
                                        "summaryTitle": "Email"
                                    }
                                }, {
                                    "key": "firstName",
                                    "label": "First Name",
                                    "type": "text",
                                    "required": true,
                                    "helpId": 214205625,
                                    "order": 0,
                                    "uiOptions": {
                                        "summaryTitle": "First Name"
                                    }
                                }, {
                                    "key": "lastName",
                                    "label": "Last Name",
                                    "type": "text",
                                    "helpId": 213679469,
                                    "required": true,
                                    "order": 1,
                                    "uiOptions": {
                                        "summaryTitle": "Last Name"
                                    }
                                }, {
                                    "key": "dateOfBirth",
                                    "label": "Date Of Birth",
                                    "type": "date",
                                    "required": true,
                                    "helpId": 213685289,
                                    "disabled": false,
                                    "order": 2,
                                    "validators": ["validDateValidate", "validOverEighteenValidate"],
                                    "uiOptions": {
                                        "summaryTitle": "Date of Birth"
                                    }
                                }, {
                                    "key": "phoneNumber",
                                    "label": "Contact Number",
                                    "type": "tel",
                                    "required": true,
                                    "disabled": false,
                                    "helpId": 214224585,
                                    "order": 2,
                                    "validators": ["validPhoneNumberValidate"],
                                    "uiOptions": {
                                        "summaryTitle": "Phone Number"
                                    }
                                }, {
                                    "key": "typeOfEmployment",
                                    "label": "Type of Employment",
                                    "type": "dropdown",
                                    "options": [{
                                            "id": "Employed",
                                            "description": "Employed"
                                        }, {
                                            "id": "Household Duties",
                                            "description": "Household Duties"
                                        }, {
                                            "id": "Retired",
                                            "description": "Retired"
                                        }, {
                                            "id": "Self Employed",
                                            "description": "Self Employed"
                                        }, {
                                            "id": "Unemployed",
                                            "description": "Unemployed"
                                        }],
                                    "required": true,
                                    "order": 2,
                                    "validators": [],
                                    "uiOptions": {
                                        "summaryTitle": "Type of Employment"
                                    }
                                }, {
                                    "key": "occupation",
                                    "label": "What is your Occupation?",
                                    "type": "autocomplete",
                                    "placeholder": "Select an Occupation",
                                    "serviceUrl": "motor/occupation/",
                                    "autoCompleteType": "search",
                                    "required": true,
                                    "disabled": false,
                                    "helpId": 1001,
                                    "order": 2,
                                    "validators": [],
                                    "uiOptions": {
                                        "summaryTitle": "Occupation"
                                    }
                                }, {
                                    "key": "business",
                                    "label": "Type of Business",
                                    "type": "autocomplete",
                                    "placeholder": "Select an Area of Business",
                                    "trigger": {
                                        "key": "occupation",
                                        "name": "occupation"
                                    },
                                    "serviceUrl": "motor/occupation/",
                                    "autoCompleteType": "search",
                                    "required": true,
                                    "order": 2,
                                    "validators": [],
                                    "uiOptions": {
                                        "summaryTitle": "Type of business"
                                    }
                                }, {
                                    "key": "livedOutsideIreland",
                                    "label": "Have you lived outside of Ireland or the UK in the past 12 months?",
                                    "type": "radio",
                                    "options": [{
                                            "id": "Yes",
                                            "description": "Yes"
                                        }, {
                                            "id": "No",
                                            "description": "No"
                                        }],
                                    "required": true,
                                    "order": 2,
                                    "validators": []
                                }]
                        }],
                    "sections": [{
                            "id": "details-default",
                            "type": "default",
                            "isDriver": true,
                            "title": "Primary Driver",
                            "fields": [{
                                    "key": "title",
                                    "label": "Title",
                                    "type": "radio",
                                    "order": 0,
                                    "value": {
                                        "id": "Mr",
                                        "description": "Mr"
                                    },
                                    "options": [{
                                            "id": "Mr",
                                            "description": "Mr"
                                        }, {
                                            "id": "Mrs",
                                            "description": "Mrs"
                                        }, {
                                            "id": "Miss",
                                            "description": "Miss"
                                        }, {
                                            "id": "Ms",
                                            "description": "Ms"
                                        }],
                                    "required": true,
                                    "uiOptions": {
                                        "summaryTitle": "Email"
                                    }
                                }, {
                                    "key": "firstName",
                                    "label": "First Name",
                                    "type": "text",
                                    "required": true,
                                    "value": "Ronan",
                                    "helpId": 214205625,
                                    "order": 0,
                                    "uiOptions": {
                                        "summaryTitle": "First Name"
                                    }
                                }, {
                                    "key": "lastName",
                                    "label": "Last Name",
                                    "type": "text",
                                    "value": "Brett",
                                    "helpId": 213679469,
                                    "required": true,
                                    "order": 1,
                                    "uiOptions": {
                                        "summaryTitle": "Last Name"
                                    }
                                }, {
                                    "key": "dateOfBirth",
                                    "label": "Date Of Birth",
                                    "type": "date",
                                    "value": "29/12/1987",
                                    "required": true,
                                    "helpId": 213685289,
                                    "disabled": false,
                                    "order": 2,
                                    "validators": ["validDateValidate", "validOverEighteenValidate"],
                                    "uiOptions": {
                                        "summaryTitle": "Date of Birth"
                                    }
                                }, {
                                    "key": "phoneNumber",
                                    "label": "Contact Number",
                                    "type": "tel",
                                    "value": "0838000761",
                                    "required": true,
                                    "disabled": false,
                                    "helpId": 214224585,
                                    "order": 2,
                                    "validators": ["validPhoneNumberValidate"],
                                    "uiOptions": {
                                        "summaryTitle": "Phone Number"
                                    }
                                }, {
                                    "key": "typeOfEmployment",
                                    "label": "Type of Employment",
                                    "type": "dropdown",
                                    "options": [{
                                            "id": "Employed",
                                            "description": "Employed"
                                        }, {
                                            "id": "Household Duties",
                                            "description": "Household Duties"
                                        }, {
                                            "id": "Retired",
                                            "description": "Retired"
                                        }, {
                                            "id": "Self Employed",
                                            "description": "Self Employed"
                                        }, {
                                            "id": "Unemployed",
                                            "description": "Unemployed"
                                        }],
                                    "required": true,
                                    "order": 2,
                                    "validators": [],
                                    "uiOptions": {
                                        "summaryTitle": "Type of Employment"
                                    }
                                }, {
                                    "key": "occupation",
                                    "label": "What is your Occupation?",
                                    "type": "autocomplete",
                                    "placeholder": "Select an Occupation",
                                    "serviceUrl": "motor/occupation/",
                                    "autoCompleteType": "search",
                                    "required": true,
                                    "disabled": false,
                                    "helpId": 1001,
                                    "order": 2,
                                    "validators": [],
                                    "uiOptions": {
                                        "summaryTitle": "Occupation"
                                    }
                                }, {
                                    "key": "business",
                                    "label": "Type of Business",
                                    "type": "autocomplete",
                                    "placeholder": "Select an Area of Business",
                                    "trigger": {
                                        "key": "occupation",
                                        "name": "occupation"
                                    },
                                    "serviceUrl": "motor/occupation/",
                                    "autoCompleteType": "search",
                                    "required": true,
                                    "order": 2,
                                    "validators": [],
                                    "uiOptions": {
                                        "summaryTitle": "Type of business"
                                    }
                                }, {
                                    "key": "livedOutsideIreland",
                                    "label": "Have you lived outside of Ireland or the UK in the past 12 months?",
                                    "type": "radio",
                                    "options": [{
                                            "id": "Yes",
                                            "description": "Yes"
                                        }, {
                                            "id": "No",
                                            "description": "No"
                                        }],
                                    "required": true,
                                    "order": 2,
                                    "validators": []
                                }]
                        }]
                }, {
                    "id": "your-address",
                    "title": "Addresss",
                    "order": 1,
                    "uiOptions": {
                        "nextPage": "your-car",
                        "prevPage": "your-details"
                    },
                    "sections": [{
                            "id": "address-default",
                            "type": "address",
                            "title": "Primary Driver",
                            "fields": [{
                                    "key": "address",
                                    "type": "group",
                                    "isComplete": true,
                                    "fields": [{
                                            "key": "addressLine1",
                                            "label": "Address Line 1",
                                            "type": "text",
                                            "required": true,
                                            "order": 0,
                                            "validators": [],
                                            "uiOptions": {
                                                "summaryTitle": "Address line 1"
                                            }
                                        }, {
                                            "key": "addressLine2",
                                            "label": "Address Line 2",
                                            "type": "text",
                                            "required": false,
                                            "order": 0,
                                            "validators": [],
                                            "uiOptions": {
                                                "summaryTitle": "Address line 2"
                                            }
                                        }, {
                                            "key": "area",
                                            "label": "Area",
                                            "type": "autocomplete",
                                            "serviceUrl": "motor/reference/town/",
                                            "autoCompleteType": "search",
                                            "required": true,
                                            "disabled": false,
                                            "order": 2,
                                            "validators": [],
                                            "uiOptions": {
                                                "summaryTitle": "Town"
                                            }
                                        }, {
                                            "key": "county",
                                            "label": "County",
                                            "type": "autocomplete",
                                            "serviceUrl": "motor/reference/county/",
                                            "autoCompleteType": "linked",
                                            "link": "area",
                                            "trigger": {
                                                "name": "disabledBasedOnKey",
                                                "expectedType": "object",
                                                "key": "area"
                                            },
                                            "required": true,
                                            "disabled": false,
                                            "order": 2,
                                            "validators": [],
                                            "uiOptions": {
                                                "summaryTitle": "County"
                                            }
                                        }]
                                }]
                        }]
                }, {
                    "id": "your-car",
                    "title": "Car",
                    "order": 1,
                    "uiOptions": {
                        "nextPage": "your-licence",
                        "prevPage": "your-address"
                    },
                    "sections": [{
                            "id": "car-default",
                            "type": "car",
                            "title": "Primary Driver",
                            "fields": [{
                                    "key": "carInformation",
                                    "type": "group",
                                    "alignment": "none",
                                    "timeline": false,
                                    "order": 0,
                                    "isComplete": false,
                                    "uiOptions": {
                                        "summaryTitle": "Car Model"
                                    },
                                    "fields": [{
                                            "key": "carMake",
                                            "label": "Car Make",
                                            "type": "autocomplete",
                                            "serviceUrl": "motor/reference/car/make/",
                                            "autoCompleteType": "linked",
                                            "link": "carInformation",
                                            "required": true,
                                            "disabled": false,
                                            "order": 1,
                                            "validators": [],
                                            "uiOptions": {
                                                "summaryTitle": "Make"
                                            }
                                        }, {
                                            "key": "carModel",
                                            "label": "Car Model",
                                            "type": "autocomplete",
                                            "serviceUrl": "motor/reference/car/model/",
                                            "autoCompleteType": "linked",
                                            "link": "carInformation",
                                            "required": true,
                                            "disabled": false,
                                            "trigger": {
                                                "name": "disabledBasedOnKey",
                                                "expectedType": "object",
                                                "key": "carMake"
                                            },
                                            "order": 2,
                                            "validators": [],
                                            "uiOptions": {
                                                "summaryTitle": "Model"
                                            }
                                        }, {
                                            "key": "fuelType",
                                            "label": "Fuel Type",
                                            "type": "dropdown",
                                            "options": [{
                                                    "id": "petrol",
                                                    "description": "Petrol"
                                                }, {
                                                    "id": "diesel",
                                                    "description": "Diesel"
                                                }],
                                            "required": true,
                                            "trigger": {
                                                "name": "disabledBasedOnKey",
                                                "expectedType": "object",
                                                "key": "carModel"
                                            },
                                            "order": 3,
                                            "validators": [],
                                            "uiOptions": {
                                                "summaryTitle": "Make"
                                            }
                                        }, {
                                            "key": "engineSize",
                                            "label": "Engine Size",
                                            "type": "dropdown",
                                            "options": [{
                                                    "id": "0cc - 1499cc",
                                                    "description": "0cc - 1499cc"
                                                }, {
                                                    "id": "1500cc - 1999cc",
                                                    "description": "1500cc - 1999cc"
                                                }, {
                                                    "id": "2000cc - 2499cc",
                                                    "description": "2000cc - 2499cc"
                                                }, {
                                                    "id": "2500cc - 2999cc",
                                                    "description": "2500cc - 2999cc"
                                                }, {
                                                    "id": "3000cc - 3449cc",
                                                    "description": "3000cc - 3449cc"
                                                }, {
                                                    "id": "3500cc - 3999cc",
                                                    "description": "3500cc - 3999cc"
                                                }, {
                                                    "id": "4000cc - 4449cc",
                                                    "description": "4000cc - 4449cc"
                                                }, {
                                                    "id": "4500cc - 4999cc",
                                                    "description": "4500cc - 4999cc"
                                                }, {
                                                    "id": "4500cc - 4999c",
                                                    "description": "4500cc - 4999cc"
                                                }],
                                            "required": true,
                                            "trigger": {
                                                "name": "disabledBasedOnKey",
                                                "expectedType": "object",
                                                "key": "fuelType"
                                            },
                                            "order": 3,
                                            "validators": [],
                                            "uiOptions": {
                                                "summaryTitle": "Make"
                                            }
                                        }]
                                }, {
                                    "key": "dateOfRegistration",
                                    "label": "Date of Registration",
                                    "type": "date",
                                    "required": true,
                                    "disabled": false,
                                    "order": 0,
                                    "validators": [],
                                    "uiOptions": {
                                        "summaryTitle": "Date of Registration",
                                        "locked": "day"
                                    }
                                }, {
                                    "key": "dateOfPurchase",
                                    "label": "Date of Purchase",
                                    "type": "date",
                                    "required": true,
                                    "disabled": false,
                                    "order": 5,
                                    "validators": [],
                                    "uiOptions": {
                                        "summaryTitle": "Date of Purchase"
                                    }
                                }, {
                                    "key": "currentValue",
                                    "label": "Current Value",
                                    "type": "currency",
                                    "required": true,
                                    "disabled": false,
                                    "order": 6,
                                    "validators": [],
                                    "uiOptions": {
                                        "summaryTitle": "Car value "
                                    }
                                }, {
                                    "key": "kilometersPerYear",
                                    "label": "How many kilometres do you drive in a year?",
                                    "type": "tel",
                                    "required": true,
                                    "disabled": false,
                                    "order": 7,
                                    "validators": [],
                                    "uiOptions": {
                                        "summaryTitle": "Kilometers per year"
                                    }
                                }, {
                                    "key": "securityFeatures",
                                    "type": "group",
                                    "alignment": "half",
                                    "timeline": true,
                                    "label": "What security features are fitted to your vehicle?",
                                    "order": 8,
                                    "isComplete": false,
                                    "uiOptions": {
                                        "summaryTitle": "Security Features"
                                    },
                                    "fields": [{
                                            "key": "security-alarm",
                                            "name": "Alarm",
                                            "type": "checkbox",
                                            "timeline": false,
                                            "required": false,
                                            "uiOptions": {
                                                "summaryTitle": "Security Alarm"
                                            }
                                        }, {
                                            "key": "security-immobiliser",
                                            "name": "Immobiliser",
                                            "type": "checkbox",
                                            "timeline": false,
                                            "required": false,
                                            "uiOptions": {
                                                "summaryTitle": "Immobiliser"
                                            }
                                        }, {
                                            "key": "security-tracker",
                                            "name": "Tracker",
                                            "type": "checkbox",
                                            "timeline": false,
                                            "required": false,
                                            "uiOptions": {
                                                "summaryTitle": "Tracker"
                                            }
                                        }]
                                }, {
                                    "key": "carMainlyUsedCounty",
                                    "label": "In what county is your car usually used?",
                                    "placeholder": "Please enter a county",
                                    "type": "autocomplete",
                                    "serviceUrl": "motor/reference/county/",
                                    "autoCompleteType": "search",
                                    "required": true,
                                    "disabled": false,
                                    "order": 9,
                                    "validators": []
                                }, {
                                    "key": "carMainlyUsedArea",
                                    "label": "In what area is your car usually used?",
                                    "placeholder": "Please type the neighbourhood, region, area",
                                    "type": "autocomplete",
                                    "serviceUrl": "motor/reference/county/",
                                    "autoCompleteType": "search",
                                    "required": true,
                                    "disabled": false,
                                    "order": 9,
                                    "validators": []
                                }, {
                                    "key": "carKeptOvernight",
                                    "label": "Where is you car kept overnight?",
                                    "type": "dropdown",
                                    "options": [{
                                            "id": "carport",
                                            "description": "Carport"
                                        }, {
                                            "id": "garaged",
                                            "description": "Garaged"
                                        }, {
                                            "id": "keptPrivate",
                                            "description": "Kept on Private Property"
                                        }, {
                                            "id": "keptPublic",
                                            "description": "Kept on Public Property"
                                        }, {
                                            "id": "parkedInDrive",
                                            "description": "Parked on Drive"
                                        }],
                                    "required": true,
                                    "order": 10,
                                    "validators": []
                                }]
                        }]
                }, {
                    "id": "your-licence",
                    "title": "Licence",
                    "order": 1,
                    "uiOptions": {
                        "nextPage": "your-cover",
                        "prevPage": "your-car"
                    },
                    "templates": [{
                            "type": "default",
                            "additional": true,
                            "hasQuestionsByDefault": true,
                            "fields": [{
                                    "key": "typeOfLicence",
                                    "label": "What type of licence do you hold?",
                                    "type": "dropdown",
                                    "options": [{
                                            "id": "Full Irish Licence",
                                            "description": "Full Irish Licence"
                                        }, {
                                            "id": "Irish Learners Permit",
                                            "description": "Irish Learners Permit"
                                        }, {
                                            "id": "Full EU Licence",
                                            "description": "Full EU Licence"
                                        }, {
                                            "id": "Non-EU Licence",
                                            "description": "Non-EU Licence"
                                        }],
                                    "required": true,
                                    "disabled": false,
                                    "order": 0,
                                    "validators": [],
                                    "uiOptions": {
                                        "summaryTitle": "Type of Licence"
                                    }
                                }, {
                                    "key": "howLongLicenceHeld",
                                    "label": "How long have you held your licence?",
                                    "type": "slider",
                                    "required": true,
                                    "order": 1,
                                    "value": "0",
                                    "values": ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9+"],
                                    "uiOptions": {
                                        "summaryTitle": "Amount of years you held your licence"
                                    }
                                }, {
                                    "key": "whereEarnLicence",
                                    "label": "Where did you earn your licence?",
                                    "type": "autocomplete",
                                    "placeholder": "Please enter a country",
                                    "serviceUrl": "motor/occupation/",
                                    "autoCompleteType": "options",
                                    "options": [{
                                            "id": "Dublin",
                                            "description": "Dublin"
                                        }, {
                                            "id": "Cork",
                                            "description": "cork"
                                        }],
                                    "required": true,
                                    "disabled": false,
                                    "order": 2,
                                    "validators": [],
                                    "uiOptions": {
                                        "summaryTitle": "Where did you earn your licence"
                                    }
                                }]
                        }],
                    "sections": [{
                            "id": "licence-default",
                            "type": "default",
                            "isDriver": true,
                            "title": "Primary Driver",
                            "fields": [{
                                    "key": "typeOfLicence",
                                    "label": "What type of licence do you hold?",
                                    "type": "dropdown",
                                    "options": [{
                                            "id": "Full Irish Licence",
                                            "description": "Full Irish Licence"
                                        }, {
                                            "id": "Irish Learners Permit",
                                            "description": "Irish Learners Permit"
                                        }, {
                                            "id": "Full EU Licence",
                                            "description": "Full EU Licence"
                                        }, {
                                            "id": "Non-EU Licence",
                                            "description": "Non-EU Licence"
                                        }],
                                    "required": true,
                                    "disabled": false,
                                    "order": 0,
                                    "validators": [],
                                    "uiOptions": {
                                        "summaryTitle": "Type of Licence"
                                    }
                                }, {
                                    "key": "howLongLicenceHeld",
                                    "label": "How long have you held your licence?",
                                    "type": "slider",
                                    "required": true,
                                    "order": 1,
                                    "value": "0",
                                    "values": ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9+"],
                                    "uiOptions": {
                                        "summaryTitle": "Amount of years you held your licence"
                                    }
                                }, {
                                    "key": "whereEarnLicence",
                                    "label": "Where did you earn your licence?",
                                    "type": "autocomplete",
                                    "placeholder": "Please enter a country",
                                    "serviceUrl": "motor/occupation/",
                                    "autoCompleteType": "options",
                                    "options": [{
                                            "id": "Dublin",
                                            "description": "Dublin"
                                        }, {
                                            "id": "Cork",
                                            "description": "cork"
                                        }],
                                    "required": true,
                                    "disabled": false,
                                    "order": 2,
                                    "validators": [],
                                    "uiOptions": {
                                        "summaryTitle": "Where did you earn your licence"
                                    }
                                }]
                        }]
                }, {
                    "id": "your-cover",
                    "title": "Cover",
                    "order": 1,
                    "uiOptions": {
                        "nextPage": "your-claims",
                        "prevPage": "your-licence"
                    },
                    "sections": [{
                            "id": "cover-default",
                            "type": "default",
                            "title": "Primary Driver",
                            "fields": [{
                                    "key": "drivingExperience",
                                    "type": "group",
                                    "alignment": "none",
                                    "timeline": false,
                                    "order": 0,
                                    "isComplete": false,
                                    "fields": [{
                                            "key": "insuredInYourOwnName",
                                            "label": "Have you been insured in your own name within the last two years?",
                                            "type": "radio",
                                            "order": 0,
                                            "helpId": 1001,
                                            "options": [{
                                                    "id": true,
                                                    "description": "Yes"
                                                }, {
                                                    "id": false,
                                                    "description": "No"
                                                }],
                                            "required": true,
                                            "uiOptions": {
                                                "summaryTitle": "Insured in your own Name"
                                            }
                                        }, {
                                            "key": "insuredNamedDriver",
                                            "label": "Have you been a named driver on someone else’s policy?",
                                            "type": "radio",
                                            "order": 0,
                                            "trigger": {
                                                "key": "insuredInYourOwnName",
                                                "name": "hideBasedOnKey",
                                                "isObject": true
                                            },
                                            "options": [{
                                                    "id": true,
                                                    "description": "Yes"
                                                }, {
                                                    "id": false,
                                                    "description": "No"
                                                }],
                                            "required": true,
                                            "uiOptions": {
                                                "summaryTitle": "Named Driver"
                                            }
                                        }, {
                                            "key": "insuredNamedDriverOnPolicy",
                                            "label": "On whose policy",
                                            "helpId": 1001,
                                            "type": "dropdown",
                                            "trigger": {
                                                "key": "insuredNamedDriver",
                                                "name": "showBasedOnKey",
                                                "isObject": true
                                            },
                                            "options": [{
                                                    "id": "Brother in Law",
                                                    "description": "Brother in Law"
                                                }, {
                                                    "id": "Business Partner",
                                                    "description": "Business Partner"
                                                }, {
                                                    "id": "Common Law Spouse",
                                                    "description": "Common Law Spouse"
                                                }, {
                                                    "id": "Daughter",
                                                    "description": "Daughter"
                                                }, {
                                                    "id": "Daughter in Law",
                                                    "description": "Daughter in Law"
                                                }, {
                                                    "id": "Employee of Proposer",
                                                    "description": "Employee of Proposer"
                                                }, {
                                                    "id": "Employer of Proposer",
                                                    "description": "Employer of Proposer"
                                                }, {
                                                    "id": "Father in Law",
                                                    "description": "Father in Law"
                                                }, {
                                                    "id": "Friend",
                                                    "description": "Friend"
                                                }, {
                                                    "id": "Mother In Law",
                                                    "description": "Mother In Law"
                                                }, {
                                                    "id": "Parent",
                                                    "description": "Parent"
                                                }, {
                                                    "id": "Partner",
                                                    "description": "Partner"
                                                }, {
                                                    "id": "Proposer",
                                                    "description": "Proposer"
                                                }, {
                                                    "id": "Relative",
                                                    "description": "Relative"
                                                }, {
                                                    "id": "Sister",
                                                    "description": "Sister"
                                                }, {
                                                    "id": "Sister in Law",
                                                    "description": "Sister in Law"
                                                }, {
                                                    "id": "Son",
                                                    "description": "Son"
                                                }, {
                                                    "id": "Son in Law",
                                                    "description": "Son in Law"
                                                }, {
                                                    "id": "Spouse",
                                                    "description": "Spouse"
                                                }, {
                                                    "id": "Tenant",
                                                    "description": "Tenant"
                                                }, {
                                                    "id": "Unrelated",
                                                    "description": "Unrelated"
                                                }],
                                            "required": true,
                                            "order": 1,
                                            "validators": [],
                                            "uiOptions": {
                                                "summaryTitle": "On who's policy"
                                            }
                                        }, {
                                            "key": "insuranceCompany",
                                            "label": "Which is your current insurance company?",
                                            "type": "dropdown",
                                            "trigger": {
                                                "key1": "insuredInYourOwnName",
                                                "key2": "insuredNamedDriver",
                                                "name": "showDualKey",
                                                "isObject": true
                                            },
                                            "options": [{
                                                    "id": "ARB Underwriting Ltd",
                                                    "description": "ARB Underwriting Ltd"
                                                }, {
                                                    "id": "AXA Broker",
                                                    "description": "AXA Broker"
                                                }, {
                                                    "id": "AXA Direct",
                                                    "description": "AXA Direct"
                                                }, {
                                                    "id": "AXA Insurance",
                                                    "description": "AXA Insurance"
                                                }, {
                                                    "id": "Allianz",
                                                    "description": "Allianz"
                                                }, {
                                                    "id": "Asgard",
                                                    "description": "Asgard"
                                                }, {
                                                    "id": "Aviva",
                                                    "description": "Aviva"
                                                }, {
                                                    "id": "Chartis Insurance",
                                                    "description": "Chartis Insurance"
                                                }, {
                                                    "id": "Chubb Insurance",
                                                    "description": "Chubb Insurance"
                                                }, {
                                                    "id": "Cigna Insurance of Europe",
                                                    "description": "Cigna Insurance of Europe"
                                                }, {
                                                    "id": "Cornhill",
                                                    "description": "Cornhill"
                                                }, {
                                                    "id": "Ecclesiastical Insurance Office Plc",
                                                    "description": "Ecclesiastical Insurance Office Plc"
                                                }, {
                                                    "id": "Europa General",
                                                    "description": "Europa General"
                                                }, {
                                                    "id": "FBD Insurance",
                                                    "description": "FBD Insurance"
                                                }, {
                                                    "id": "FC Rebroked AXA Broker",
                                                    "description": "FC Rebroked AXA Broker"
                                                }, {
                                                    "id": "First Call Direct",
                                                    "description": "First Call Direct"
                                                }, {
                                                    "id": "Generali Insurance",
                                                    "description": "Generali Insurance"
                                                }, {
                                                    "id": "Kennco Underwriting Ltd",
                                                    "description": "Kennco Underwriting Ltd"
                                                }, {
                                                    "id": "Liberty Underwriting",
                                                    "description": "Liberty Underwriting"
                                                }, {
                                                    "id": "One Direct",
                                                    "description": "One Direct"
                                                }, {
                                                    "id": "Prestige Underwriting Services",
                                                    "description": "Prestige Underwriting Services"
                                                }, {
                                                    "id": "Provident Insurance",
                                                    "description": "Provident Insurance"
                                                }, {
                                                    "id": "Quinn Direct",
                                                    "description": "Quinn Direct"
                                                }, {
                                                    "id": "RSA Insurance Ireland",
                                                    "description": "RSA Insurance Ireland"
                                                }, {
                                                    "id": "Sertus Underwriting",
                                                    "description": "Sertus Underwriting"
                                                }, {
                                                    "id": "Setanta Insurance",
                                                    "description": "Setanta Insurance"
                                                }, {
                                                    "id": "Torch",
                                                    "description": "Torch"
                                                }, {
                                                    "id": "Travelers Insurance",
                                                    "description": "Travelers Insurance"
                                                }, {
                                                    "id": "Unlisted Insurer - Ireland",
                                                    "description": "Unlisted Insurer - Ireland"
                                                }, {
                                                    "id": "Unlisted Insurer - Not Ireland",
                                                    "description": "Unlisted Insurer - Not Ireland"
                                                }, {
                                                    "id": "Wright Way Underwriting",
                                                    "description": "Wright Way Underwriting"
                                                }, {
                                                    "id": "XS Direct",
                                                    "description": "XS Direct"
                                                }, {
                                                    "id": "Zurich",
                                                    "description": "Zurich"
                                                }],
                                            "required": true,
                                            "order": 2,
                                            "validators": [],
                                            "uiOptions": {
                                                "summaryTitle": "Current Insurance Company"
                                            }
                                        }, {
                                            "key": "namedDrivingExperienceYears",
                                            "label": "How many years named driving experience do you have?",
                                            "type": "slider",
                                            "trigger": {
                                                "key": "insuredNamedDriver",
                                                "name": "showBasedOnKey",
                                                "isObject": true
                                            },
                                            "required": true,
                                            "order": 3,
                                            "value": 1,
                                            "min": 0,
                                            "max": 9,
                                            "uiOptions": {
                                                "summaryTitle": "Amount of Years No Claims Bonus"
                                            }
                                        }, {
                                            "key": "countryNamedDrivingExperience",
                                            "label": "In what country did you earn your named driving experience?",
                                            "type": "autocomplete",
                                            "placeholder": "Please enter a country",
                                            "serviceUrl": "motor/occupation/",
                                            "trigger": {
                                                "key": "insuredNamedDriver",
                                                "name": "showBasedOnKey",
                                                "isObject": true
                                            },
                                            "autoCompleteType": "options",
                                            "options": [{
                                                    "id": "Dublin",
                                                    "description": "Dublin"
                                                }, {
                                                    "id": "Cork",
                                                    "description": "cork"
                                                }],
                                            "required": true,
                                            "disabled": false,
                                            "order": 2,
                                            "validators": [],
                                            "uiOptions": {
                                                "summaryTitle": "Where did you earn your licence"
                                            }
                                        }, {
                                            "key": "namedDrivingExperienceExpire",
                                            "label": "When does this named driving experience expire?",
                                            "type": "date",
                                            "trigger": {
                                                "key": "insuredNamedDriver",
                                                "name": "showBasedOnKey",
                                                "isObject": true
                                            },
                                            "required": true,
                                            "order": 3,
                                            "uiOptions": {
                                                "summaryTitle": "Amount of Years No Claims Bonus"
                                            }
                                        }, {
                                            "key": "noClaimsBonusYears",
                                            "label": "How many years no claims discount have you earned in your own name?",
                                            "type": "slider",
                                            "trigger": {
                                                "key": "insuredInYourOwnName",
                                                "name": "showBasedOnKey",
                                                "isObject": true
                                            },
                                            "required": true,
                                            "order": 3,
                                            "value": 1,
                                            "min": 0,
                                            "max": 9,
                                            "uiOptions": {
                                                "summaryTitle": "Amount of Years No Claims Bonus"
                                            }
                                        }, {
                                            "key": "whereNoClaimsBonus",
                                            "label": "Where did you earn your no claims bonus",
                                            "type": "autocomplete",
                                            "helpId": 1001,
                                            "placeholder": "Please enter a country",
                                            "autoCompleteType": "options",
                                            "trigger": {
                                                "key": "insuredInYourOwnName",
                                                "name": "showBasedOnKey",
                                                "isObject": true
                                            },
                                            "options": [{
                                                    "id": "Dublin",
                                                    "description": "Dublin"
                                                }, {
                                                    "id": "Cork",
                                                    "description": "cork"
                                                }],
                                            "required": true,
                                            "disabled": false,
                                            "order": 4,
                                            "validators": [],
                                            "uiOptions": {
                                                "summaryTitle": "Location no claims bonus was earned"
                                            }
                                        }, {
                                            "key": "policyExpiryDate",
                                            "label": "When does your policy expire?",
                                            "type": "date",
                                            "helpId": 1001,
                                            "trigger": {
                                                "key1": "insuredInYourOwnName",
                                                "key2": "insuredNamedDriver",
                                                "name": "showDualKey",
                                                "isObject": true
                                            },
                                            "required": true,
                                            "disabled": false,
                                            "order": 5,
                                            "validators": ["validDateValidate"],
                                            "uiOptions": {
                                                "summaryTitle": "Policy Expiration Date"
                                            }
                                        }, {
                                            "key": "startPolicySameDate",
                                            "label": "Would you like to start your policy from the same date?",
                                            "type": "radio",
                                            "order": 6,
                                            "trigger": {
                                                "key1": "insuredInYourOwnName",
                                                "key2": "insuredNamedDriver",
                                                "name": "showDualKey",
                                                "isObject": true
                                            },
                                            "options": [{
                                                    "id": true,
                                                    "description": "Yes"
                                                }, {
                                                    "id": false,
                                                    "description": "No"
                                                }],
                                            "required": true,
                                            "uiOptions": {
                                                "summaryTitle": "Policy Start Date"
                                            }
                                        }, {
                                            "key": "policyStartDate",
                                            "label": "What date would you like to start your policy from?",
                                            "type": "date",
                                            "order": 7,
                                            "trigger": {
                                                "key": "startPolicySameDate",
                                                "name": "showIfKeyEquals",
                                                "equals": false
                                            },
                                            "required": true
                                        }]
                                }, {
                                    "key": "levelOfCover",
                                    "label": "What level of cover do you need?",
                                    "type": "radio",
                                    "alignment": "vertical",
                                    "order": 8,
                                    "options": [{
                                            "id": "comprehensive",
                                            "description": "Comprehensive"
                                        }, {
                                            "id": "thirdParty",
                                            "description": "Third Party, Fire and Theft"
                                        }],
                                    "required": true,
                                    "uiOptions": {
                                        "summaryTitle": "Level of Cover"
                                    }
                                }, {
                                    "key": "levelOfNoClaimsBonus",
                                    "label": "What level of no claims bonus protection do you require?",
                                    "type": "radio",
                                    "helpId": 1001,
                                    "order": 9,
                                    "options": [{
                                            "id": "full",
                                            "description": "Full"
                                        }, {
                                            "id": "stepBack",
                                            "description": "Step Back"
                                        }, {
                                            "id": "none",
                                            "description": "None"
                                        }],
                                    "required": true,
                                    "uiOptions": {
                                        "summaryTitle": "Level of no claims bonus"
                                    }
                                }]
                        }]
                }, {
                    "id": "your-claims",
                    "title": "Claims",
                    "order": 1,
                    "uiOptions": {
                        "nextPage": "your-penalties",
                        "prevPage": "your-cover"
                    },
                    "templates": [{
                            "type": "claim",
                            "userHasClaim": null,
                            "additional": true,
                            "fields": [{
                                    "key": "dateOfClaim",
                                    "label": "Date of claim",
                                    "type": "date",
                                    "required": true,
                                    "disabled": false,
                                    "order": 0,
                                    "validators": ["validDateValidate", "validLastFiveYearsValidate"],
                                    "uiOptions": {
                                        "summaryTitle": "Date of Claim"
                                    }
                                }, {
                                    "key": "reasonForClaim",
                                    "label": "What was the reason for the claim?",
                                    "type": "dropdown",
                                    "options": [{
                                            "id": "Accident",
                                            "description": "Accident"
                                        }, {
                                            "id": "Accidental Damage",
                                            "description": "Accidental Damage"
                                        }, {
                                            "id": "Fire",
                                            "description": "Fire"
                                        }, {
                                            "id": "Malicious Damage As A Result Of Theft",
                                            "description": "Malicious Damage As A Result Of Theft"
                                        }, {
                                            "id": "Personal Accident",
                                            "description": "Personal Accident"
                                        }, {
                                            "id": "Personal Effects",
                                            "description": "Personal Effects"
                                        }, {
                                            "id": "Theft",
                                            "description": "Theft"
                                        }, {
                                            "id": "Third Party",
                                            "description": "Third Party"
                                        }, {
                                            "id": "Vandalism",
                                            "description": "Vandalism"
                                        }, {
                                            "id": "Windscreen",
                                            "description": "Windscreen"
                                        }],
                                    "required": true,
                                    "order": 0,
                                    "validators": [],
                                    "uiOptions": {
                                        "summaryTitle": "Reason for Claim"
                                    }
                                }, {
                                    "key": "isClaimSettled",
                                    "label": "Is the claim settled?",
                                    "type": "radio",
                                    "options": [{
                                            "id": true,
                                            "description": "Yes"
                                        }, {
                                            "id": false,
                                            "description": "No"
                                        }],
                                    "required": true,
                                    "order": 0,
                                    "validators": [],
                                    "uiOptions": {
                                        "summaryTitle": "Reason for Claim"
                                    }
                                }, {
                                    "key": "thirdPartyInjuries",
                                    "label": "Were there any third party injuries?",
                                    "type": "radio",
                                    "options": [{
                                            "id": true,
                                            "description": "Yes"
                                        }, {
                                            "id": false,
                                            "description": "No"
                                        }],
                                    "required": true,
                                    "order": 0,
                                    "validators": [],
                                    "uiOptions": {
                                        "summaryTitle": "Reason for Claim"
                                    }
                                }, {
                                    "key": "costOfClaim",
                                    "label": "Cost of claim",
                                    "type": "currency",
                                    "required": true,
                                    "placeholder": "How Much",
                                    "order": 0,
                                    "uiOptions": {
                                        "summaryTitle": "Cost of Claim"
                                    }
                                }, {
                                    "key": "customerAtFault",
                                    "label": "Were you at fault?",
                                    "type": "radio",
                                    "helpId": 1001,
                                    "options": [{
                                            "id": "Yes",
                                            "description": "Yes"
                                        }, {
                                            "id": "No",
                                            "description": "No"
                                        }],
                                    "required": true,
                                    "order": 2,
                                    "validators": [],
                                    "uiOptions": {
                                        "summaryTitle": "Claim Fault"
                                    }
                                }, {
                                    "key": "noClaimsBonusProtected",
                                    "label": "Was your no claims bonus protected?",
                                    "type": "radio",
                                    "options": [{
                                            "id": "Yes",
                                            "description": "Yes"
                                        }, {
                                            "id": "No",
                                            "description": "No"
                                        }],
                                    "required": true,
                                    "order": 2,
                                    "validators": [],
                                    "uiOptions": {
                                        "summaryTitle": "No Claim Bonus Protected"
                                    }
                                }]
                        }],
                    "sections": [{
                            "id": "claim-primary-driver",
                            "title": "Primary Driver",
                            "userHasClaim": null,
                            "isDriver": true,
                            "type": "claim",
                            "fields": []
                        }]
                }, {
                    "id": "your-penalties",
                    "title": "Penalty Points",
                    "order": 1,
                    "uiOptions": {
                        "prevPage": "your-claims",
                        "nextPage": "choose-your-product"
                    },
                    "templates": [{
                            "type": "penalty",
                            "title": "Primary Driver",
                            "userHasPenalty": null,
                            "additional": true,
                            "fields": [{
                                    "key": "dateOfPenalty",
                                    "label": "Date of Penalty",
                                    "type": "date",
                                    "required": true,
                                    "disabled": false,
                                    "order": 0,
                                    "validators": ["validDateValidate", "validLastThreeYearsValidate"]
                                }, {
                                    "key": "reasonForPenalty",
                                    "label": "What was the reason?",
                                    "type": "dropdown",
                                    "options": [{
                                            "id": "Accident",
                                            "description": "Accident"
                                        }, {
                                            "id": "Accidental Damage",
                                            "description": "Accidental Damage"
                                        }, {
                                            "id": "Fire",
                                            "description": "Fire"
                                        }, {
                                            "id": "Malicious Damage As A Result Of Theft",
                                            "description": "Malicious Damage As A Result Of Theft"
                                        }, {
                                            "id": "Personal Accident",
                                            "description": "Personal Accident"
                                        }, {
                                            "id": "Personal Effects",
                                            "description": "Personal Effects"
                                        }, {
                                            "id": "Theft",
                                            "description": "Theft"
                                        }, {
                                            "id": "Third Party",
                                            "description": "Third Party"
                                        }, {
                                            "id": "Vandalism",
                                            "description": "Vandalism"
                                        }, {
                                            "id": "Windscreen",
                                            "description": "Windscreen"
                                        }],
                                    "required": true,
                                    "order": 0,
                                    "validators": []
                                }, {
                                    "key": "howManyPoints",
                                    "label": "How many points?",
                                    "type": "text",
                                    "required": true,
                                    "placeholder": "How many?",
                                    "order": 0
                                }]
                        }],
                    "sections": [{
                            "id": "penalty-primary-driver",
                            "title": "Primary Driver",
                            "userHasPenalty": null,
                            "isDriver": true,
                            "type": "penalty",
                            "fields": []
                        }]
                }],
            "isComplete": false,
            "uiOptions": {}
        }, {
            "id": "price-presentation",
            "title": "Get Quote",
            "pages": [{
                    "id": "choose-your-product",
                    "title": "Choose the best product for you",
                    "uiOptions": {
                        "prevPage": "your-penalties",
                        "nextPage": "are-you-a-member"
                    }
                }, {
                    "id": "are-you-a-member",
                    "title": "Are you a Member?",
                    "uiOptions": {
                        "prevPage": "choose-your-product",
                        "nextPage": "choose-your-payment"
                    }
                }, {
                    "id": "choose-your-payment",
                    "title": "Choose your payment",
                    "uiOptions": {
                        "prevPage": "are-you-a-member",
                        "nextPage": "additional-questions"
                    }
                }],
            "isComplete": false,
            "uiOptions": {
                "isWide": true,
                "isPagesHidden": true
            }
        }, {
            "id": "payments",
            "title": "Payment",
            "pages": [{
                    "id": "additional-questions",
                    "title": "Additional Questions",
                    "uiOptions": {
                        "nextPage": "terms-and-conditions",
                        "prevPage": "choose-your-payment"
                    },
                    "sections": [{
                            "id": "additional-questions",
                            "type": "default",
                            "fields": [{
                                    "key": "driverLicenceNumber",
                                    "label": "What is your Drivers Licence number?",
                                    "type": "text",
                                    "required": false,
                                    "disabled": false,
                                    "validators": []
                                }, {
                                    "key": "previousPolicyNumber",
                                    "label": "What was your previous policy number?",
                                    "type": "text",
                                    "required": false,
                                    "disabled": false,
                                    "validators": []
                                }]
                        }]
                }, {
                    "id": "terms-and-conditions",
                    "title": "Terms and Conditions",
                    "uiOptions": {
                        "prevPage": "additional-question",
                        "nextPage": "tokenisation"
                    }
                }, {
                    "id": "tokenisation",
                    "title": "Tokenisation",
                    "uiOptions": {
                        "prevPage": "terms-and-conditions",
                        "nextPage": "payment"
                    },
                    "sections": [{
                            "id": "tokenisation",
                            "type": "default",
                            "fields": [{
                                    "key": "areYouCardholder",
                                    "label": "Are you the Cardholder?",
                                    "type": "radio",
                                    "options": [{
                                            "id": true,
                                            "description": "Yes"
                                        }, {
                                            "id": false,
                                            "description": "No"
                                        }],
                                    "required": true,
                                    "value": "Yes",
                                    "order": 2,
                                    "validators": []
                                }, {
                                    "key": "doYouHavePermissionCardholder",
                                    "label": "We need to store the cardholders payment information securely to complete your purchase. Can you confirm that\n\t\t\t\tthe cardholder has consented to their payment details being stored for use with this AA product only?",
                                    "type": "radio",
                                    "options": [{
                                            "id": true,
                                            "description": "Yes"
                                        }, {
                                            "id": false,
                                            "description": "No"
                                        }],
                                    "trigger": {
                                        "key": "areYouCardholder",
                                        "name": "showIfKeyEquals",
                                        "equals": false,
                                        "isObject": true
                                    },
                                    "required": true,
                                    "value": "Yes",
                                    "order": 2,
                                    "validators": []
                                }, {
                                    "key": "saveCardFutureTransactions",
                                    "label": "Would you like us to save this card securely to us for future transactions?",
                                    "type": "radio",
                                    "options": [{
                                            "id": true,
                                            "description": "Yes"
                                        }, {
                                            "id": false,
                                            "description": "No"
                                        }],
                                    "required": true,
                                    "value": "Yes",
                                    "order": 2,
                                    "validators": []
                                }, {
                                    "key": "saveCardAllAAProducts",
                                    "label": "Would you like to save this card use on all AA Products?",
                                    "type": "radio",
                                    "options": [{
                                            "id": true,
                                            "description": "Yes"
                                        }, {
                                            "id": false,
                                            "description": "No"
                                        }],
                                    "trigger": {
                                        "key": "saveCardFutureTransactions",
                                        "name": "showIfKeyEquals",
                                        "equals": false,
                                        "isObject": true
                                    },
                                    "required": true,
                                    "value": "Yes",
                                    "order": 2,
                                    "validators": []
                                }]
                        }]
                }, {
                    "id": "payment",
                    "title": "Payment",
                    "uiOptions": {
                        "prevPage": "tokenisation",
                        "nextPage": "confirmation"
                    }
                }],
            "isComplete": false,
            "uiOptions": {
                "isWide": true,
                "isPagesHidden": true
            }
        }, {
            "id": "confirmation",
            "title": "Confirmation",
            "pages": [{
                    "id": "confirmation",
                    "title": "Confirmation",
                    "uiOptions": {
                        "prevPage": "payment",
                        "isSummaryHidden": true,
                        "isTimelineHidden": true
                    }
                }],
            "isComplete": false,
            "uiOptions": {
                "isWide": true,
                "isProgressHidden": true,
                "isSummaryHidden": true,
                "isHelpCenterHidden": true,
                "isHeaderExtended": true,
                "isPagesHidden": true
            }
        }]
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb250YW50c19tb3Rvci1yZXRyaWV2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ1cscUJBQWEsR0FBRztJQUN2QixRQUFRLEVBQUUsQ0FBQztZQUNQLElBQUksRUFBRSxXQUFXO1lBQ2pCLE9BQU8sRUFBRSxZQUFZO1lBQ3JCLE9BQU8sRUFBRSxDQUFDO29CQUNOLElBQUksRUFBRSxpQkFBaUI7b0JBQ3ZCLE9BQU8sRUFBRSxpQkFBaUI7b0JBQzFCLE9BQU8sRUFBRSxDQUFDO29CQUNWLFdBQVcsRUFBRTt3QkFDVCxVQUFVLEVBQUUsY0FBYzt3QkFDMUIsWUFBWSxFQUFFLElBQUk7d0JBQ2xCLFdBQVcsRUFBRSxLQUFLO3FCQUNyQjtvQkFDRCxVQUFVLEVBQUUsQ0FBQzs0QkFDVCxJQUFJLEVBQUUsYUFBYTs0QkFDbkIsTUFBTSxFQUFFLFNBQVM7NEJBQ2pCLFFBQVEsRUFBRSxDQUFDO29DQUNQLEtBQUssRUFBRSxPQUFPO29DQUNkLE9BQU8sRUFBRSw2QkFBNkI7b0NBQ3RDLE1BQU0sRUFBRSxXQUFXO29DQUNuQixVQUFVLEVBQUUsSUFBSTtvQ0FDL0IsT0FBTyxFQUFFLENBQUM7b0NBQ1YsT0FBTyxFQUFFLG9CQUFvQjtvQ0FDZCxZQUFZLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztvQ0FDcEMsV0FBVyxFQUFFO3dDQUNULGNBQWMsRUFBRSxFQUFFO3FDQUNyQjtpQ0FDSixFQUFFO29DQUNDLEtBQUssRUFBRSxpQkFBaUI7b0NBQ3hCLE9BQU8sRUFBRSxtRUFBbUU7b0NBQzVFLE1BQU0sRUFBRSxnQkFBZ0I7b0NBQ3hCLFVBQVUsRUFBRSxJQUFJO29DQUNoQixPQUFPLEVBQUUsQ0FBQztvQ0FDVixPQUFPLEVBQUUsQ0FBQztvQ0FDVixLQUFLLEVBQUUsQ0FBQztvQ0FDUixLQUFLLEVBQUUsQ0FBQztvQ0FDUixXQUFXLEVBQUU7d0NBQ1QsY0FBYyxFQUFFLG1CQUFtQjtxQ0FDdEM7aUNBQ0osRUFBRTtvQ0FDQyxLQUFLLEVBQUUsaUJB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QUNWLFlBQVksRUFBRSxFQUFFO2lDQUNuQixFQUFFO29DQUNDLEtBQUssRUFBRSx1QkFBdUI7b0NBQzlCLE9BQU8sRUFBRSwwREFBMEQ7b0NBQ25FLE1BQU0sRUFBRSxPQUFPO29DQUNmLFNBQVMsRUFBRSxDQUFDOzRDQUNSLElBQUksRUFBRSxJQUFJOzRDQUNWLGFBQWEsRUFBRSxLQUFLO3lDQUN2QixFQUFFOzRDQUNDLElBQUksRUFBRSxLQUFLOzRDQUNYLGFBQWEsRUFBRSxJQUFJO3lDQUN0QixDQUFDO29DQUNGLFNBQVMsRUFBRTt3Q0FDUCxLQUFLLEVBQUUsNEJBQTRCO3dDQUNuQyxNQUFNLEVBQUUsaUJBQWlCO3dDQUN6QixRQUFRLEVBQUUsS0FBSzt3Q0FDZixVQUFVLEVBQUUsSUFBSTtxQ0FDbkI7b0NBQ0QsVUFBVSxFQUFFLElBQUk7b0NBQ2hCLE9BQU8sRUFBRSxLQUFLO29DQUNkLE9BQU8sRUFBRSxDQUFDO29DQUNWLFlBQVksRUFBRSxFQUFFO2lDQUNuQixDQUFDO3lCQUNMLENBQUM7aUJBQ0wsRUFBRTtvQkFDQyxJQUFJLEVBQUUsU0FBUztvQkFDZixPQUFPLEVBQUUsU0FBUztvQkFDbEIsV0FBVyxFQUFFO3dCQUNULFVBQVUsRUFBRSxjQUFjO3dCQUMxQixVQUFVLEVBQUUsY0FBYztxQkFDN0I7aUJBQ0osQ0FBQztZQUNGLFlBQVksRUFBRSxLQUFLO1lBQ25CLFdBQVcsRUFBRTtnQkFDVCxRQUFRLEVBQUUsSUFBSTtnQkFDZCxlQUFlLEVBQUUsSUFBSTthQUN4QjtTQUNKLEVBQUU7WUFDQyxJQUFJLEVBQUUsY0FBYztZQUNwQixPQUFPLEVBQUUsY0FBYztZQUN2QixPQUFPLEVBQUUsQ0FBQztvQkFDTixJQUFJLEVBQUUsY0FBYztvQkFDcEIsT0FBTyxFQUFFLGNBQWM7b0JBQ3ZCLFdBQVcsRUFBRTt3QkFDVCxVQUFVLEVBQUUsU0FBUzt3QkFDckIsaUJBQWlCLEVBQUUsSUFBSTt3QkFDdkIsa0JBQWtCLEVBQUUsSUFBSTtxQkFDM0I7aUJBQ0osQ0FBQztZQUNGLFlBQVksRUFBRSxLQUFLO1lBQ25CLFdBQVcsRUFBRTtnQkFDVCxRQUFRLEVBQUUsSUFBSTtnQkFDZCxrQkFBa0IsRUFBRSxJQUFJO2dCQUN4QixpQkFBaUIsRUFBRSxJQUFJO2dCQUN2QixvQkFBb0IsRUFBRSxJQUFJO2dCQUMxQixrQkFBa0IsRUFBRSxJQUFJO2dCQUN4QixlQUFlLEVBQUUsSUFBSTthQUN4QjtTQUNKLENBQUM7Q0FDTCxDQUFBIiwiZmlsZSI6ImNvbnRhbnRzX21vdG9yLXJldHJpZXZlLmpzIiwic291cmNlc0NvbnRlbnQiOltudWxsXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
