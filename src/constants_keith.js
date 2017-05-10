"use strict";
exports.KEITH = {
    "stages": [
        {
            "id": "quotation",
            "isComplete": false,
            "title": "Your Quote",
            "pages": [
                {
                    "id": "getting-started",
                    "title": "Getting Started",
                    "uiOptions": {
                        "nextPage": "your-details"
                    },
                    "order": 0,
                    "sections": [
                        {
                            "id": "pre-default",
                            "type": "default",
                            "fields": [
                                {
                                    "type": "myaaEmail",
                                    "uiOptions": {
                                        "summaryTitle": ""
                                    },
                                    "key": "email",
                                    "label": "What is your Email Address?",
                                    "order": 0,
                                    "required": true,
                                    "validators": [
                                        "validEmailValidate"
                                    ]
                                },
                                {
                                    "type": "memberSelector",
                                    "uiOptions": {
                                        "summaryTitle": "Amount of Drivers"
                                    },
                                    "key": "amountOfDrivers",
                                    "label": "How many drivers will there be on your policy including yourself?",
                                    "order": 1,
                                    "required": true,
                                    "value": 1,
                                    "max": 5,
                                    "min": 1
                                },
                                {
                                    "type": "questionText",
                                    "uiOptions": {
                                        "summaryHidden": "true"
                                    },
                                    "key": "termsConditions",
                                    "label": "Terms and Conditions",
                                    "order": 2,
                                    "timeline": false,
                                    "content": "By providing the requested data, you consent to AA's Data Protection and Privacy Policy and to AA using it for administration and keeping you informed by mail, telephone, email and SMS of other products and services from us. By proceeding, you consent to & confirm that you have read and accepted the AA Data Protection & Privacy Policy and the AA Terms & Conditions"
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": "your-details",
                    "title": "Details",
                    "uiOptions": {
                        "nextPage": "your-address",
                        "prevPage": "getting-started"
                    },
                    "order": 1,
                    "sections": [
                        {
                            "id": "details-default",
                            "title": "Primary Driver",
                            "type": "default",
                            "isDriver": true,
                            "fields": [
                                {
                                    "type": "radio",
                                    "uiOptions": {
                                        "summaryTitle": "Email"
                                    },
                                    "key": "title",
                                    "label": "Title",
                                    "order": 0,
                                    "required": true,
                                    "options": [
                                        {
                                            "id": "Mr",
                                            "description": "Mr"
                                        },
                                        {
                                            "id": "Mrs",
                                            "description": "Mrs"
                                        },
                                        {
                                            "id": "Miss",
                                            "description": "Miss"
                                        },
                                        {
                                            "id": "Ms",
                                            "description": "Ms"
                                        }
                                    ]
                                },
                                {
                                    "type": "text",
                                    "helpId": 214205625,
                                    "uiOptions": {
                                        "summaryTitle": "First Name"
                                    },
                                    "key": "firstName",
                                    "label": "First Name",
                                    "order": 0,
                                    "required": true
                                },
                                {
                                    "type": "text",
                                    "helpId": 213679469,
                                    "uiOptions": {
                                        "summaryTitle": "Last Name"
                                    },
                                    "key": "lastName",
                                    "label": "Last Name",
                                    "order": 1,
                                    "required": true
                                },
                                {
                                    "type": "date",
                                    "helpId": 213685289,
                                    "uiOptions": {
                                        "summaryTitle": "Date of Birth"
                                    },
                                    "key": "dateOfBirth",
                                    "label": "Date Of Birth",
                                    "order": 2,
                                    "required": true,
                                    "validators": [
                                        "validDateValidate",
                                        "validOverEighteenValidate"
                                    ],
                                    "disabled": false
                                },
                                {
                                    "type": "tel",
                                    "helpId": 214224585,
                                    "uiOptions": {
                                        "summaryTitle": "Phone Number"
                                    },
                                    "key": "phoneNumber",
                                    "label": "Contact Number",
                                    "order": 2,
                                    "required": true,
                                    "validators": [
                                        "validPhoneNumberValidate"
                                    ],
                                    "disabled": false
                                },
                                {
                                    "type": "dropdown",
                                    "uiOptions": {
                                        "summaryTitle": "Type of Employment"
                                    },
                                    "key": "typeOfEmployment",
                                    "label": "Type of Employment",
                                    "order": 2,
                                    "required": true,
                                    "options": [
                                        {
                                            "id": "Employed",
                                            "description": "Employed"
                                        },
                                        {
                                            "id": "HouseholdDuties",
                                            "description": "Household Duties"
                                        },
                                        {
                                            "id": "Retired",
                                            "description": "Retired"
                                        },
                                        {
                                            "id": "SelfEmployed",
                                            "description": "Self Employed"
                                        },
                                        {
                                            "id": "Unemployed",
                                            "description": "Unemployed"
                                        }
                                    ]
                                },
                                {
                                    "type": "autocomplete",
                                    "helpId": 1001,
                                    "uiOptions": {
                                        "summaryTitle": "Occupation"
                                    },
                                    "key": "occupation",
                                    "label": "What is your Occupation?",
                                    "order": 2,
                                    "required": true,
                                    "disabled": false,
                                    "placeholder": "Select an Occupation",
                                    "serviceUrl": "occupation/",
                                    "autoCompleteType": "search"
                                },
                                {
                                    "type": "autocomplete",
                                    "uiOptions": {
                                        "summaryTitle": "Type of business"
                                    },
                                    "key": "business",
                                    "label": "Type of Business",
                                    "order": 2,
                                    "required": true,
                                    "trigger": {
                                        "key": "occupation",
                                        "name": "occupation"
                                    },
                                    "placeholder": "Select an Area of Business",
                                    "serviceUrl": "occupation/",
                                    "autoCompleteType": "search"
                                },
                                {
                                    "type": "radio",
                                    "key": "livedOutsideIreland",
                                    "label": "Have you lived outside of Ireland or the UK in the past 12 months?",
                                    "order": 2,
                                    "required": true,
                                    "options": [
                                        {
                                            "id": "true",
                                            "description": "Yes"
                                        },
                                        {
                                            "id": "false",
                                            "description": "No"
                                        }
                                    ]
                                }
                            ]
                        }
                    ],
                    "templates": [
                        {
                            "type": "default",
                            "hasQuestionsByDefault": true,
                            "additional": true,
                            "fields": [
                                {
                                    "type": "radio",
                                    "uiOptions": {
                                        "summaryTitle": "Email"
                                    },
                                    "key": "title",
                                    "label": "Title",
                                    "order": 0,
                                    "required": true,
                                    "options": [
                                        {
                                            "id": "Mr",
                                            "description": "Mr"
                                        },
                                        {
                                            "id": "Mrs",
                                            "description": "Mrs"
                                        },
                                        {
                                            "id": "Miss",
                                            "description": "Miss"
                                        },
                                        {
                                            "id": "Ms",
                                            "description": "Ms"
                                        }
                                    ]
                                },
                                {
                                    "type": "text",
                                    "helpId": 214205625,
                                    "uiOptions": {
                                        "summaryTitle": "First Name"
                                    },
                                    "key": "firstName",
                                    "label": "First Name",
                                    "order": 0,
                                    "required": true
                                },
                                {
                                    "type": "text",
                                    "helpId": 213679469,
                                    "uiOptions": {
                                        "summaryTitle": "Last Name"
                                    },
                                    "key": "lastName",
                                    "label": "Last Name",
                                    "order": 1,
                                    "required": true
                                },
                                {
                                    "type": "date",
                                    "helpId": 213685289,
                                    "uiOptions": {
                                        "summaryTitle": "Date of Birth"
                                    },
                                    "key": "dateOfBirth",
                                    "label": "Date Of Birth",
                                    "order": 2,
                                    "required": true,
                                    "validators": [
                                        "validDateValidate",
                                        "validOverEighteenValidate"
                                    ],
                                    "disabled": false
                                },
                                {
                                    "type": "tel",
                                    "helpId": 214224585,
                                    "uiOptions": {
                                        "summaryTitle": "Phone Number"
                                    },
                                    "key": "phoneNumber",
                                    "label": "Contact Number",
                                    "order": 2,
                                    "required": true,
                                    "validators": [
                                        "validPhoneNumberValidate"
                                    ],
                                    "disabled": false
                                },
                                {
                                    "type": "dropdown",
                                    "helpId": 1001,
                                    "uiOptions": {
                                        "summaryTitle": "On who's policy"
                                    },
                                    "key": "relationToMainDriver",
                                    "label": "Relationship to Main Driver",
                                    "order": 1,
                                    "required": true,
                                    "options": [
                                        {
                                            "id": "Brother in Law",
                                            "description": "Brother in Law"
                                        },
                                        {
                                            "id": "Business Partner",
                                            "description": "Business Partner"
                                        },
                                        {
                                            "id": "Common Law Spouse",
                                            "description": "Common Law Spouse"
                                        },
                                        {
                                            "id": "Daughter",
                                            "description": "Daughter"
                                        },
                                        {
                                            "id": "Daughter in Law",
                                            "description": "Daughter in Law"
                                        },
                                        {
                                            "id": "Employee of Proposer",
                                            "description": "Employee of Proposer"
                                        },
                                        {
                                            "id": "Employer of Proposer",
                                            "description": "Employer of Proposer"
                                        },
                                        {
                                            "id": "Father in Law",
                                            "description": "Father in Law"
                                        },
                                        {
                                            "id": "Friend",
                                            "description": "Friend"
                                        },
                                        {
                                            "id": "Mother In Law",
                                            "description": "Mother In Law"
                                        },
                                        {
                                            "id": "Parent",
                                            "description": "Parent"
                                        },
                                        {
                                            "id": "Partner",
                                            "description": "Partner"
                                        },
                                        {
                                            "id": "Proposer",
                                            "description": "Proposer"
                                        },
                                        {
                                            "id": "Relative",
                                            "description": "Relative"
                                        },
                                        {
                                            "id": "Sister",
                                            "description": "Sister"
                                        },
                                        {
                                            "id": "Sister in Law",
                                            "description": "Sister in Law"
                                        },
                                        {
                                            "id": "Son",
                                            "description": "Son"
                                        },
                                        {
                                            "id": "Son in Law",
                                            "description": "Son in Law"
                                        },
                                        {
                                            "id": "Spouse",
                                            "description": "Spouse"
                                        },
                                        {
                                            "id": "Tenant",
                                            "description": "Tenant"
                                        },
                                        {
                                            "id": "Unrelated",
                                            "description": "Unrelated"
                                        }
                                    ]
                                },
                                {
                                    "type": "dropdown",
                                    "uiOptions": {
                                        "summaryTitle": "Type of Employment"
                                    },
                                    "key": "typeOfEmployment",
                                    "label": "Type of Employment",
                                    "order": 2,
                                    "required": true,
                                    "options": [
                                        {
                                            "id": "Employed",
                                            "description": "Employed"
                                        },
                                        {
                                            "id": "HouseholdDuties",
                                            "description": "Household Duties"
                                        },
                                        {
                                            "id": "Retired",
                                            "description": "Retired"
                                        },
                                        {
                                            "id": "SelfEmployed",
                                            "description": "Self Employed"
                                        },
                                        {
                                            "id": "Unemployed",
                                            "description": "Unemployed"
                                        }
                                    ]
                                },
                                {
                                    "type": "autocomplete",
                                    "helpId": 1001,
                                    "uiOptions": {
                                        "summaryTitle": "Occupation"
                                    },
                                    "key": "occupation",
                                    "label": "What is your Occupation?",
                                    "order": 2,
                                    "required": true,
                                    "disabled": false,
                                    "placeholder": "Select an Occupation",
                                    "serviceUrl": "occupation/",
                                    "autoCompleteType": "search"
                                },
                                {
                                    "type": "autocomplete",
                                    "uiOptions": {
                                        "summaryTitle": "Type of business"
                                    },
                                    "key": "business",
                                    "label": "Type of Business",
                                    "order": 2,
                                    "required": true,
                                    "trigger": {
                                        "key": "occupation",
                                        "name": "occupation"
                                    },
                                    "placeholder": "Select an Area of Business",
                                    "serviceUrl": "occupation/",
                                    "autoCompleteType": "search"
                                },
                                {
                                    "type": "radio",
                                    "key": "livedOutsideIreland",
                                    "label": "Have you lived outside of Ireland or the UK in the past 12 months?",
                                    "order": 2,
                                    "required": true,
                                    "options": [
                                        {
                                            "id": "true",
                                            "description": "Yes"
                                        },
                                        {
                                            "id": "false",
                                            "description": "No"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": "your-address",
                    "title": "Addresss",
                    "uiOptions": {
                        "nextPage": "your-car",
                        "prevPage": "your-details"
                    },
                    "order": 1,
                    "sections": [
                        {
                            "id": "address-default",
                            "title": "Primary Driver",
                            "type": "address",
                            "fields": [
                                {
                                    "type": "group",
                                    "key": "address",
                                    "isComplete": true,
                                    "fields": [
                                        {
                                            "type": "text",
                                            "uiOptions": {
                                                "summaryTitle": "Address line 1"
                                            },
                                            "key": "addressLine1",
                                            "label": "Address Line 1",
                                            "order": 0,
                                            "required": true
                                        },
                                        {
                                            "type": "text",
                                            "uiOptions": {
                                                "summaryTitle": "Address line 2"
                                            },
                                            "key": "addressLine2",
                                            "label": "Address Line 2",
                                            "order": 0,
                                            "required": false
                                        },
                                        {
                                            "type": "autocomplete",
                                            "uiOptions": {
                                                "summaryTitle": "Town"
                                            },
                                            "key": "area",
                                            "label": "Area",
                                            "order": 2,
                                            "required": true,
                                            "disabled": false,
                                            "serviceUrl": "reference/area/",
                                            "autoCompleteType": "search"
                                        },
                                        {
                                            "type": "autocomplete",
                                            "uiOptions": {
                                                "summaryTitle": "County"
                                            },
                                            "key": "county",
                                            "label": "County",
                                            "order": 2,
                                            "required": true,
                                            "trigger": {
                                                "name": "disabledBasedOnKey",
                                                "expectedType": "object",
                                                "key": "area"
                                            },
                                            "disabled": false,
                                            "link": "area",
                                            "serviceUrl": "reference/county/",
                                            "autoCompleteType": "linked"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": "your-car",
                    "title": "Car",
                    "uiOptions": {
                        "nextPage": "your-licence",
                        "prevPage": "your-address"
                    },
                    "order": 1,
                    "sections": [
                        {
                            "id": "car-default",
                            "title": "Primary Driver",
                            "type": "car",
                            "fields": [
                                {
                                    "type": "group",
                                    "key": "carInformation",
                                    "alignment": "none",
                                    "timeline": false,
                                    "order": 0,
                                    "isComplete": false,
                                    "uiOptions": {
                                        "summaryTitle": "Car Model"
                                    },
                                    "fields": [
                                        {
                                            "type": "autocomplete",
                                            "uiOptions": {
                                                "summaryTitle": "Make"
                                            },
                                            "key": "carMake",
                                            "label": "Car Make",
                                            "order": 1,
                                            "required": true,
                                            "disabled": false,
                                            "link": "carInformation",
                                            "serviceUrl": "reference/vehicle/make/",
                                            "autoCompleteType": "all"
                                        },
                                        {
                                            "type": "autocomplete",
                                            "uiOptions": {
                                                "summaryTitle": "Model"
                                            },
                                            "key": "carModel",
                                            "label": "Car Model",
                                            "order": 2,
                                            "required": true,
                                            "trigger": {
                                                "name": "disabledBasedOnKey",
                                                "expectedType": "object",
                                                "key": "carMake"
                                            },
                                            "disabled": false,
                                            "link": "carMake",
                                            "serviceUrl": "reference/vehicle/model/",
                                            "autoCompleteType": "linked"
                                        },
                                        {
                                            "type": "dropdown",
                                            "uiOptions": {
                                                "summaryTitle": "Make"
                                            },
                                            "key": "engineSizeRange",
                                            "label": "Engine Size",
                                            "order": 3,
                                            "required": true,
                                            "trigger": {
                                                "name": "disabledBasedOnKey",
                                                "expectedType": "object",
                                                "key": "carModel"
                                            },
                                            "options": [
                                                {
                                                    "id": "0cc - 1499cc",
                                                    "description": "0cc - 1499cc"
                                                },
                                                {
                                                    "id": "1500cc - 1999cc",
                                                    "description": "1500cc - 1999cc"
                                                },
                                                {
                                                    "id": "2000cc - 2499cc",
                                                    "description": "2000cc - 2499cc"
                                                },
                                                {
                                                    "id": "2500cc - 2999cc",
                                                    "description": "2500cc - 2999cc"
                                                },
                                                {
                                                    "id": "3000cc - 3449cc",
                                                    "description": "3000cc - 3449cc"
                                                },
                                                {
                                                    "id": "3500cc - 3999cc",
                                                    "description": "3500cc - 3999cc"
                                                },
                                                {
                                                    "id": "4000cc - 4449cc",
                                                    "description": "4000cc - 4449cc"
                                                },
                                                {
                                                    "id": "4500cc - 4999cc",
                                                    "description": "4500cc - 4999cc"
                                                },
                                                {
                                                    "id": "4500cc - 4999c",
                                                    "description": "4500cc - 4999cc"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "type": "date",
                                    "uiOptions": {
                                        "summaryTitle": "Date of Registration",
                                        "locked": "day"
                                    },
                                    "key": "dateOfRegistration",
                                    "label": "Date of Registration",
                                    "order": 0,
                                    "required": true,
                                    "disabled": false
                                },
                                {
                                    "type": "date",
                                    "uiOptions": {
                                        "summaryTitle": "Date of Purchase"
                                    },
                                    "key": "dateOfPurchase",
                                    "label": "Date of Purchase",
                                    "order": 5,
                                    "required": true,
                                    "disabled": false
                                },
                                {
                                    "type": "currency",
                                    "uiOptions": {
                                        "summaryTitle": "Car value "
                                    },
                                    "key": "currentValue",
                                    "label": "Current Value",
                                    "order": 6,
                                    "required": true,
                                    "disabled": false
                                },
                                {
                                    "type": "tel",
                                    "uiOptions": {
                                        "summaryTitle": "Kilometers per year"
                                    },
                                    "key": "kilometersPerYear",
                                    "label": "How many kilometres do you drive in a year?",
                                    "order": 7,
                                    "required": true,
                                    "disabled": false
                                },
                                {
                                    "type": "group",
                                    "key": "securityFeatures",
                                    "alignment": "half",
                                    "timeline": true,
                                    "label": "What security features are fitted to your vehicle?",
                                    "order": 8,
                                    "isComplete": false,
                                    "uiOptions": {
                                        "summaryTitle": "Security Features"
                                    },
                                    "fields": [
                                        {
                                            "type": "checkbox",
                                            "uiOptions": {
                                                "summaryTitle": "Security Alarm"
                                            },
                                            "key": "security-alarm",
                                            "required": false,
                                            "timeline": false,
                                            "name": "Alarm"
                                        },
                                        {
                                            "type": "checkbox",
                                            "uiOptions": {
                                                "summaryTitle": "Immobiliser"
                                            },
                                            "key": "security-immobiliser",
                                            "required": false,
                                            "timeline": false,
                                            "name": "Immobiliser"
                                        },
                                        {
                                            "type": "checkbox",
                                            "uiOptions": {
                                                "summaryTitle": "Tracker"
                                            },
                                            "key": "security-tracker",
                                            "required": false,
                                            "timeline": false,
                                            "name": "Tracker"
                                        }
                                    ]
                                },
                                {
                                    "type": "autocomplete",
                                    "key": "carMainlyUsedArea",
                                    "label": "In what area is your car usually used?",
                                    "order": 9,
                                    "required": true,
                                    "disabled": false,
                                    "placeholder": "Please type the neighbourhood, region, area",
                                    "serviceUrl": "reference/area/",
                                    "autoCompleteType": "search"
                                },
                                {
                                    "type": "autocomplete",
                                    "key": "carMainlyUsedCounty",
                                    "label": "In what county is your car usually used?",
                                    "order": 9,
                                    "required": true,
                                    "trigger": {
                                        "expectedType": "object",
                                        "key": "carMainlyUsedArea",
                                        "name": "disabledBasedOnKey"
                                    },
                                    "disabled": false,
                                    "placeholder": "Please enter a county",
                                    "link": "carMainlyUsedArea",
                                    "serviceUrl": "reference/county/",
                                    "autoCompleteType": "linked"
                                },
                                {
                                    "type": "dropdown",
                                    "key": "carKeptOvernight",
                                    "label": "Where is you car kept overnight?",
                                    "order": 10,
                                    "required": true,
                                    "options": [
                                        {
                                            "id": "carport",
                                            "description": "Carport"
                                        },
                                        {
                                            "id": "garaged",
                                            "description": "Garaged"
                                        },
                                        {
                                            "id": "keptPrivate",
                                            "description": "Kept on Private Property"
                                        },
                                        {
                                            "id": "keptPublic",
                                            "description": "Kept on Public Property"
                                        },
                                        {
                                            "id": "parkedInDrive",
                                            "description": "Parked on Drive"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "id": "car-secondary",
                            "title": "Second Car",
                            "type": "car",
                            "fields": [
                                {
                                    "type": "group",
                                    "key": "carInformation",
                                    "alignment": "none",
                                    "timeline": false,
                                    "order": 0,
                                    "isComplete": false,
                                    "uiOptions": {
                                        "summaryTitle": "Car Model"
                                    },
                                    "fields": [
                                        {
                                            "type": "autocomplete",
                                            "uiOptions": {
                                                "summaryTitle": "Make"
                                            },
                                            "key": "carMake",
                                            "label": "Car Make",
                                            "order": 1,
                                            "required": true,
                                            "disabled": false,
                                            "link": "carInformation",
                                            "serviceUrl": "reference/vehicle/make/",
                                            "autoCompleteType": "all"
                                        },
                                        {
                                            "type": "autocomplete",
                                            "uiOptions": {
                                                "summaryTitle": "Model"
                                            },
                                            "key": "carModel",
                                            "label": "Car Model",
                                            "order": 2,
                                            "required": true,
                                            "trigger": {
                                                "name": "disabledBasedOnKey",
                                                "expectedType": "object",
                                                "key": "carMake"
                                            },
                                            "disabled": false,
                                            "link": "carMake",
                                            "serviceUrl": "reference/vehicle/model/",
                                            "autoCompleteType": "linked"
                                        },
                                        {
                                            "type": "dropdown",
                                            "uiOptions": {
                                                "summaryTitle": "Make"
                                            },
                                            "key": "engineSizeRange",
                                            "label": "Engine Size",
                                            "order": 3,
                                            "required": true,
                                            "trigger": {
                                                "name": "disabledBasedOnKey",
                                                "expectedType": "object",
                                                "key": "carModel"
                                            },
                                            "options": [
                                                {
                                                    "id": "0cc - 1499cc",
                                                    "description": "0cc - 1499cc"
                                                },
                                                {
                                                    "id": "1500cc - 1999cc",
                                                    "description": "1500cc - 1999cc"
                                                },
                                                {
                                                    "id": "2000cc - 2499cc",
                                                    "description": "2000cc - 2499cc"
                                                },
                                                {
                                                    "id": "2500cc - 2999cc",
                                                    "description": "2500cc - 2999cc"
                                                },
                                                {
                                                    "id": "3000cc - 3449cc",
                                                    "description": "3000cc - 3449cc"
                                                },
                                                {
                                                    "id": "3500cc - 3999cc",
                                                    "description": "3500cc - 3999cc"
                                                },
                                                {
                                                    "id": "4000cc - 4449cc",
                                                    "description": "4000cc - 4449cc"
                                                },
                                                {
                                                    "id": "4500cc - 4999cc",
                                                    "description": "4500cc - 4999cc"
                                                },
                                                {
                                                    "id": "4500cc - 4999c",
                                                    "description": "4500cc - 4999cc"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "type": "date",
                                    "uiOptions": {
                                        "summaryTitle": "Date of Registration",
                                        "locked": "day"
                                    },
                                    "key": "dateOfRegistration",
                                    "label": "Date of Registration",
                                    "order": 0,
                                    "required": true,
                                    "disabled": false
                                },
                                {
                                    "type": "date",
                                    "uiOptions": {
                                        "summaryTitle": "Date of Purchase"
                                    },
                                    "key": "dateOfPurchase",
                                    "label": "Date of Purchase",
                                    "order": 5,
                                    "required": true,
                                    "disabled": false
                                },
                                {
                                    "type": "currency",
                                    "uiOptions": {
                                        "summaryTitle": "Car value "
                                    },
                                    "key": "currentValue",
                                    "label": "Current Value",
                                    "order": 6,
                                    "required": true,
                                    "disabled": false
                                },
                                {
                                    "type": "tel",
                                    "uiOptions": {
                                        "summaryTitle": "Kilometers per year"
                                    },
                                    "key": "kilometersPerYear",
                                    "label": "How many kilometres do you drive in a year?",
                                    "order": 7,
                                    "required": true,
                                    "disabled": false
                                },
                                {
                                    "type": "group",
                                    "key": "securityFeatures",
                                    "alignment": "half",
                                    "timeline": true,
                                    "label": "What security features are fitted to your vehicle?",
                                    "order": 8,
                                    "isComplete": false,
                                    "uiOptions": {
                                        "summaryTitle": "Security Features"
                                    },
                                    "fields": [
                                        {
                                            "type": "checkbox",
                                            "uiOptions": {
                                                "summaryTitle": "Security Alarm"
                                            },
                                            "key": "security-alarm",
                                            "required": false,
                                            "timeline": false,
                                            "name": "Alarm"
                                        },
                                        {
                                            "type": "checkbox",
                                            "uiOptions": {
                                                "summaryTitle": "Immobiliser"
                                            },
                                            "key": "security-immobiliser",
                                            "required": false,
                                            "timeline": false,
                                            "name": "Immobiliser"
                                        },
                                        {
                                            "type": "checkbox",
                                            "uiOptions": {
                                                "summaryTitle": "Tracker"
                                            },
                                            "key": "security-tracker",
                                            "required": false,
                                            "timeline": false,
                                            "name": "Tracker"
                                        }
                                    ]
                                },
                                {
                                    "type": "autocomplete",
                                    "key": "carMainlyUsedArea",
                                    "label": "In what area is your car usually used?",
                                    "order": 9,
                                    "required": true,
                                    "disabled": false,
                                    "placeholder": "Please type the neighbourhood, region, area",
                                    "serviceUrl": "reference/area/",
                                    "autoCompleteType": "search"
                                },
                                {
                                    "type": "autocomplete",
                                    "key": "carMainlyUsedCounty",
                                    "label": "In what county is your car usually used?",
                                    "order": 9,
                                    "required": true,
                                    "trigger": {
                                        "expectedType": "object",
                                        "key": "carMainlyUsedArea",
                                        "name": "disabledBasedOnKey"
                                    },
                                    "disabled": false,
                                    "placeholder": "Please enter a county",
                                    "link": "carMainlyUsedArea",
                                    "serviceUrl": "reference/county/",
                                    "autoCompleteType": "linked"
                                },
                                {
                                    "type": "dropdown",
                                    "key": "carKeptOvernight",
                                    "label": "Where is you car kept overnight?",
                                    "order": 10,
                                    "required": true,
                                    "options": [
                                        {
                                            "id": "carport",
                                            "description": "Carport"
                                        },
                                        {
                                            "id": "garaged",
                                            "description": "Garaged"
                                        },
                                        {
                                            "id": "keptPrivate",
                                            "description": "Kept on Private Property"
                                        },
                                        {
                                            "id": "keptPublic",
                                            "description": "Kept on Public Property"
                                        },
                                        {
                                            "id": "parkedInDrive",
                                            "description": "Parked on Drive"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": "your-licence",
                    "title": "Licence",
                    "uiOptions": {
                        "nextPage": "your-cover",
                        "prevPage": "your-car"
                    },
                    "order": 1,
                    "sections": [
                        {
                            "id": "licence-default",
                            "title": "Primary Driver",
                            "type": "default",
                            "isDriver": true,
                            "fields": [
                                {
                                    "type": "dropdown",
                                    "uiOptions": {
                                        "summaryTitle": "Type of Licence"
                                    },
                                    "key": "typeOfLicence",
                                    "label": "What type of licence do you hold?",
                                    "order": 0,
                                    "required": true,
                                    "disabled": false,
                                    "options": [
                                        {
                                            "id": "Foreign",
                                            "description": "Foreign"
                                        },
                                        {
                                            "id": "FullEuropeanUnion",
                                            "description": "Full EU"
                                        },
                                        {
                                            "id": "FullIrish",
                                            "description": "Full Irish"
                                        },
                                        {
                                            "id": "FullUnitedKingdom",
                                            "description": "Full UK"
                                        },
                                        {
                                            "id": "InternationalLicence",
                                            "description": "International Licence"
                                        },
                                        {
                                            "id": "ProvisionalIrish",
                                            "description": "Provisional Irish"
                                        },
                                        {
                                            "id": "LearnerPermit",
                                            "description": "Learner Permit"
                                        }
                                    ],
                                    value: {
                                        "id": "Foreign",
                                        "description": "Full Irish"
                                    }
                                },
                                {
                                    "type": "slider",
                                    "uiOptions": {
                                        "summaryTitle": "Amount of years you held your licence"
                                    },
                                    "key": "howLongLicenceHeld",
                                    "label": "How long have you held your licence?",
                                    "order": 1,
                                    "required": true,
                                    "value": {
                                        "id": "0",
                                        "description": "0"
                                    },
                                    "values": [
                                        {
                                            "id": "0",
                                            "description": "0"
                                        },
                                        {
                                            "id": "1",
                                            "description": "1"
                                        },
                                        {
                                            "id": "2",
                                            "description": "2"
                                        },
                                        {
                                            "id": "3",
                                            "description": "3"
                                        },
                                        {
                                            "id": "4",
                                            "description": "4"
                                        },
                                        {
                                            "id": "5",
                                            "description": "5"
                                        },
                                        {
                                            "id": "6",
                                            "description": "6"
                                        },
                                        {
                                            "id": "7",
                                            "description": "7"
                                        },
                                        {
                                            "id": "8",
                                            "description": "8"
                                        },
                                        {
                                            "id": "9",
                                            "description": "9+"
                                        }
                                    ]
                                },
                                {
                                    "type": "autocomplete",
                                    "uiOptions": {
                                        "summaryTitle": "Where did you earn your licence"
                                    },
                                    "key": "whereEarnLicence",
                                    "label": "Where did you earn your licence?",
                                    "order": 2,
                                    "required": true,
                                    "disabled": false,
                                    "placeholder": "Please enter a country",
                                    "serviceUrl": "reference/country/",
                                    "autoCompleteType": "search"
                                }
                            ]
                        }
                    ],
                    "templates": [
                        {
                            "id": "licence-template",
                            "type": "default",
                            "hasQuestionsByDefault": true,
                            "additional": true,
                            "fields": [
                                {
                                    "type": "dropdown",
                                    "uiOptions": {
                                        "summaryTitle": "Type of Licence"
                                    },
                                    "key": "typeOfLicence",
                                    "label": "What type of licence do you hold?",
                                    "order": 0,
                                    "required": true,
                                    "disabled": false,
                                    "options": [
                                        {
                                            "id": "Foreign",
                                            "description": "Foreign"
                                        },
                                        {
                                            "id": "FullEuropeanUnion",
                                            "description": "Full EU"
                                        },
                                        {
                                            "id": "FullIrish",
                                            "description": "Full Irish"
                                        },
                                        {
                                            "id": "FullUnitedKingdom",
                                            "description": "Full UK"
                                        },
                                        {
                                            "id": "InternationalLicence",
                                            "description": "International Licence"
                                        },
                                        {
                                            "id": "ProvisionalIrish",
                                            "description": "Provisional Irish"
                                        },
                                        {
                                            "id": "LearnerPermit",
                                            "description": "Learner Permit"
                                        }
                                    ]
                                },
                                {
                                    "type": "slider",
                                    "uiOptions": {
                                        "summaryTitle": "Amount of years you held your licence"
                                    },
                                    "key": "howLongLicenceHeld",
                                    "label": "How long have you held your licence?",
                                    "order": 1,
                                    "required": true,
                                    "value": {
                                        "id": "0",
                                        "description": "0"
                                    },
                                    "values": [
                                        {
                                            "id": "0",
                                            "description": "0"
                                        },
                                        {
                                            "id": "1",
                                            "description": "1"
                                        },
                                        {
                                            "id": "2",
                                            "description": "2"
                                        },
                                        {
                                            "id": "3",
                                            "description": "3"
                                        },
                                        {
                                            "id": "4",
                                            "description": "4"
                                        },
                                        {
                                            "id": "5",
                                            "description": "5"
                                        },
                                        {
                                            "id": "6",
                                            "description": "6"
                                        },
                                        {
                                            "id": "7",
                                            "description": "7"
                                        },
                                        {
                                            "id": "8",
                                            "description": "8"
                                        },
                                        {
                                            "id": "9",
                                            "description": "9+"
                                        }
                                    ]
                                },
                                {
                                    "type": "autocomplete",
                                    "uiOptions": {
                                        "summaryTitle": "Where did you earn your licence"
                                    },
                                    "key": "whereEarnLicence",
                                    "label": "Where did you earn your licence?",
                                    "order": 2,
                                    "required": true,
                                    "disabled": false,
                                    "placeholder": "Please enter a country",
                                    "serviceUrl": "reference/country/",
                                    "autoCompleteType": "search"
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": "your-cover",
                    "title": "Cover",
                    "uiOptions": {
                        "nextPage": "your-claims",
                        "prevPage": "your-licence"
                    },
                    "order": 1,
                    "sections": [
                        {
                            "id": "cover-default",
                            "title": "Primary Driver",
                            "type": "default",
                            "fields": [
                                {
                                    "type": "group",
                                    "key": "drivingExperience",
                                    "alignment": "none",
                                    "timeline": false,
                                    "order": 0,
                                    "isComplete": false,
                                    "fields": [
                                        {
                                            "type": "radio",
                                            "helpId": 1001,
                                            "uiOptions": {
                                                "summaryTitle": "Insured in your own Name"
                                            },
                                            "key": "insuredInYourOwnName",
                                            "label": "Have you been insured in your own name within the last two years?",
                                            "order": 0,
                                            "required": true,
                                            "options": [
                                                {
                                                    "id": "true",
                                                    "description": "Yes"
                                                },
                                                {
                                                    "id": "false",
                                                    "description": "No"
                                                }
                                            ]
                                        },
                                        {
                                            "type": "radio",
                                            "uiOptions": {
                                                "summaryTitle": "Named Driver"
                                            },
                                            "key": "insuredNamedDriver",
                                            "label": "Have you been a named driver on someone else’s policy?",
                                            "order": 0,
                                            "required": true,
                                            "trigger": {
                                                "key": "insuredInYourOwnName",
                                                "name": "hideBasedOnKey",
                                                "isObject": "true"
                                            },
                                            "options": [
                                                {
                                                    "id": "true",
                                                    "description": "Yes"
                                                },
                                                {
                                                    "id": "false",
                                                    "description": "No"
                                                }
                                            ]
                                        },
                                        {
                                            "type": "dropdown",
                                            "helpId": 1001,
                                            "uiOptions": {
                                                "summaryTitle": "On who's policy"
                                            },
                                            "key": "insuredNamedDriverOnPolicy",
                                            "label": "On whose policy",
                                            "order": 1,
                                            "required": true,
                                            "trigger": {
                                                "key": "insuredNamedDriver",
                                                "name": "showBasedOnKey",
                                                "isObject": "true"
                                            },
                                            "options": [
                                                {
                                                    "id": "Brother",
                                                    "description": "Brother"
                                                },
                                                {
                                                    "id": "BrotherInLaw",
                                                    "description": "Brother in Law"
                                                },
                                                {
                                                    "id": "BusinessPartner",
                                                    "description": "Business Partner"
                                                },
                                                {
                                                    "id": "CommonLawSpouse",
                                                    "description": "Common Law Spouse"
                                                },
                                                {
                                                    "id": "Daughter",
                                                    "description": "Daughter"
                                                },
                                                {
                                                    "id": "DaughterInLaw",
                                                    "description": "Daughter in Law"
                                                },
                                                {
                                                    "id": "EmployeeOfProposer",
                                                    "description": "Employee of Proposer"
                                                },
                                                {
                                                    "id": "EmployerOfProposer",
                                                    "description": "Employer of Proposer"
                                                },
                                                {
                                                    "id": "FatherInLaw",
                                                    "description": "Father in Law"
                                                },
                                                {
                                                    "id": "MotherInLaw",
                                                    "description": "Mother in Law"
                                                },
                                                {
                                                    "id": "Parent",
                                                    "description": "Parent"
                                                },
                                                {
                                                    "id": "Proposer",
                                                    "description": "Proposer"
                                                },
                                                {
                                                    "id": "Relative",
                                                    "description": "Relative"
                                                },
                                                {
                                                    "id": "Sister",
                                                    "description": "Sister"
                                                },
                                                {
                                                    "id": "SisterInLaw",
                                                    "description": "Sister in Law"
                                                },
                                                {
                                                    "id": "Son",
                                                    "description": "Son"
                                                },
                                                {
                                                    "id": "SonInLaw",
                                                    "description": "Son in Law"
                                                },
                                                {
                                                    "id": "Spouse",
                                                    "description": "Spouse"
                                                },
                                                {
                                                    "id": "Tenant",
                                                    "description": "Tenant"
                                                },
                                                {
                                                    "id": "Unrelated",
                                                    "description": "Unrelated"
                                                },
                                                {
                                                    "id": "Partner",
                                                    "description": "Partner"
                                                },
                                                {
                                                    "id": "Friend",
                                                    "description": "Friend"
                                                }
                                            ]
                                        },
                                        {
                                            "type": "dropdown",
                                            "uiOptions": {
                                                "summaryTitle": "Current Insurance Company"
                                            },
                                            "key": "insuranceCompany",
                                            "label": "Which is your current insurance company?",
                                            "order": 2,
                                            "required": true,
                                            "trigger": {
                                                "key1": "insuredInYourOwnName",
                                                "key2": "insuredNamedDriver",
                                                "name": "showDualKey",
                                                "isObject": "true"
                                            },
                                            "options": [
                                                {
                                                    "id": "Unspecified",
                                                    "description": "Unspecified"
                                                },
                                                {
                                                    "id": "AXA",
                                                    "description": "AXA Insurance"
                                                },
                                                {
                                                    "id": "Allianz",
                                                    "description": "Allianz"
                                                },
                                                {
                                                    "id": "Zurich",
                                                    "description": "Zurich"
                                                },
                                                {
                                                    "id": "Aviva",
                                                    "description": "Aviva"
                                                },
                                                {
                                                    "id": "RSA",
                                                    "description": "RSA"
                                                },
                                                {
                                                    "id": "Benchmark",
                                                    "description": "Benchmark Underwriting"
                                                },
                                                {
                                                    "id": "HCL",
                                                    "description": "Hickey Clarke and Langan"
                                                },
                                                {
                                                    "id": "ICI",
                                                    "description": "ICI"
                                                },
                                                {
                                                    "id": "AIG",
                                                    "description": "AIG"
                                                },
                                                {
                                                    "id": "Wrightway",
                                                    "description": "Wrightway Underwriting"
                                                },
                                                {
                                                    "id": "Prestige",
                                                    "description": "Prestige Underwriting Services"
                                                },
                                                {
                                                    "id": "GreatLakes",
                                                    "description": "Great Lakes"
                                                },
                                                {
                                                    "id": "Europa",
                                                    "description": "Europa General"
                                                },
                                                {
                                                    "id": "KennCo",
                                                    "description": "KennCo Underwriting"
                                                },
                                                {
                                                    "id": "XSDirect",
                                                    "description": "XS Direct"
                                                },
                                                {
                                                    "id": "Sertus",
                                                    "description": "Sertus Underwriting"
                                                },
                                                {
                                                    "id": "Travelers",
                                                    "description": "Travelers"
                                                },
                                                {
                                                    "id": "Provident",
                                                    "description": "Provident"
                                                },
                                                {
                                                    "id": "Setanta",
                                                    "description": "Setanta Insurance"
                                                },
                                                {
                                                    "id": "ARB",
                                                    "description": "ARB Underwriting"
                                                },
                                                {
                                                    "id": "Ecclesiastical",
                                                    "description": "Ecclesiastical"
                                                },
                                                {
                                                    "id": "Asgard",
                                                    "description": "Asgard"
                                                },
                                                {
                                                    "id": "Crest",
                                                    "description": "Crest"
                                                },
                                                {
                                                    "id": "DAS",
                                                    "description": "DAS"
                                                },
                                                {
                                                    "id": "JRClare",
                                                    "description": "JR Clare"
                                                },
                                                {
                                                    "id": "Dolmen",
                                                    "description": "Dolmen"
                                                },
                                                {
                                                    "id": "FBD",
                                                    "description": "FBD Insurance"
                                                },
                                                {
                                                    "id": "Finsure",
                                                    "description": "OBF Insurance Group"
                                                },
                                                {
                                                    "id": "FirstIreland",
                                                    "description": "First Ireland"
                                                },
                                                {
                                                    "id": "KiddSure",
                                                    "description": "Kidd Insurances"
                                                },
                                                {
                                                    "id": "Chubb",
                                                    "description": "Chubb Insurance"
                                                },
                                                {
                                                    "id": "Cigna",
                                                    "description": "Cigna Insurance"
                                                },
                                                {
                                                    "id": "Generali",
                                                    "description": "Generali Insurance"
                                                },
                                                {
                                                    "id": "Liberty",
                                                    "description": "Liberty Underwriting"
                                                },
                                                {
                                                    "id": "Quinn",
                                                    "description": "Quinn Direct"
                                                },
                                                {
                                                    "id": "Hastings",
                                                    "description": "Hastings and Co."
                                                },
                                                {
                                                    "id": "Securus",
                                                    "description": "Securus Insurance"
                                                },
                                                {
                                                    "id": "CoverCentre",
                                                    "description": "CoverCentre "
                                                },
                                                {
                                                    "id": "Inov8",
                                                    "description": "Inov8"
                                                },
                                                {
                                                    "id": "Stuart",
                                                    "description": "EverSure"
                                                },
                                                {
                                                    "id": "LloydsSyndicate",
                                                    "description": "Lloyds Syndicate"
                                                },
                                                {
                                                    "id": "OneTwoThree",
                                                    "description": "123.ie"
                                                },
                                                {
                                                    "id": "Novae",
                                                    "description": "Novae"
                                                },
                                                {
                                                    "id": "Culleton",
                                                    "description": "Culleton Insurances"
                                                },
                                                {
                                                    "id": "JLT",
                                                    "description": "Jardine Lloyd Thompson"
                                                },
                                                {
                                                    "id": "MISClaims",
                                                    "description": "MIS Claims"
                                                },
                                                {
                                                    "id": "MotoristLegalProtection",
                                                    "description": "Motorist Legal Protection"
                                                },
                                                {
                                                    "id": "GroupPersonalAccident",
                                                    "description": "Group Personal Accident"
                                                },
                                                {
                                                    "id": "Mapfre",
                                                    "description": "Mapfre"
                                                },
                                                {
                                                    "id": "Patrona",
                                                    "description": "Patrona Underwriting"
                                                },
                                                {
                                                    "id": "Axis",
                                                    "description": "Axis Ltd."
                                                },
                                                {
                                                    "id": "BroadgateUnderwriting",
                                                    "description": "Broadgate Underwriting"
                                                },
                                                {
                                                    "id": "CatlinUnderwriting",
                                                    "description": "Catlin Underwriting"
                                                },
                                                {
                                                    "id": "CanopiusUnderwriting",
                                                    "description": "Canopius Underwriting Ltd"
                                                },
                                                {
                                                    "id": "CGice",
                                                    "description": "Casualty and General Insurance Company Europe"
                                                },
                                                {
                                                    "id": "CollingwoodInsurance",
                                                    "description": "Collingwood Insurance Company Ltd"
                                                },
                                                {
                                                    "id": "EliteInsuranceCompany",
                                                    "description": "Elite Insurance Company Ltd"
                                                },
                                                {
                                                    "id": "HisCox",
                                                    "description": "HisCox"
                                                },
                                                {
                                                    "id": "HSBEngineeringInsurance",
                                                    "description": "HSB Engineering Insurance Ltd"
                                                },
                                                {
                                                    "id": "HathawayAndCope",
                                                    "description": "Hathaway and Cope"
                                                },
                                                {
                                                    "id": "SagicorAtLloyds",
                                                    "description": "Sagicor At Lloyds"
                                                },
                                                {
                                                    "id": "WRBerkley",
                                                    "description": "W. R. Berkley"
                                                },
                                                {
                                                    "id": "CrashServices",
                                                    "description": "Crash Services"
                                                },
                                                {
                                                    "id": "AlliedRiskManagement",
                                                    "description": "Allied Risk Management"
                                                },
                                                {
                                                    "id": "Footprint",
                                                    "description": "Footprint"
                                                },
                                                {
                                                    "id": "Bump",
                                                    "description": "Bump"
                                                },
                                                {
                                                    "id": "ChartisInsurance",
                                                    "description": "Chartis Insurance"
                                                },
                                                {
                                                    "id": "AXABroker",
                                                    "description": "AXA Broker"
                                                },
                                                {
                                                    "id": "AXADirect",
                                                    "description": "AXA Direct"
                                                },
                                                {
                                                    "id": "Cornhill",
                                                    "description": "Cornhill"
                                                },
                                                {
                                                    "id": "FCRebrokedAXABroker",
                                                    "description": "FC Rebroked AXA Broker"
                                                },
                                                {
                                                    "id": "FirstCallDirect",
                                                    "description": "First Call Direct"
                                                },
                                                {
                                                    "id": "OneDirect",
                                                    "description": "One Direct"
                                                },
                                                {
                                                    "id": "PatronaUnderwritingLtd",
                                                    "description": "Patrona Underwriting Ltd"
                                                },
                                                {
                                                    "id": "ProvidentInsurance",
                                                    "description": "Provident Insurance"
                                                },
                                                {
                                                    "id": "Torch",
                                                    "description": "Torch"
                                                },
                                                {
                                                    "id": "UnlistedInsurerNotIreland",
                                                    "description": "Unlisted Insurer - Not Ireland"
                                                },
                                                {
                                                    "id": "UnlistedInsurerIreland",
                                                    "description": "Unlisted Insurer - Ireland"
                                                },
                                                {
                                                    "id": "KeyCare",
                                                    "description": "KeyCare"
                                                },
                                                {
                                                    "id": "Octane",
                                                    "description": "Octane"
                                                },
                                                {
                                                    "id": "AAIreland",
                                                    "description": "AA Ireland"
                                                },
                                                {
                                                    "id": "Ivernia",
                                                    "description": "Ivernia"
                                                },
                                                {
                                                    "id": "Claimsafe",
                                                    "description": "Claimsafe"
                                                },
                                                {
                                                    "id": "ArachasInsurance",
                                                    "description": "Arachas Insurance"
                                                },
                                                {
                                                    "id": "Other",
                                                    "description": "Other"
                                                }
                                            ]
                                        },
                                        {
                                            "type": "slider",
                                            "uiOptions": {
                                                "summaryTitle": "Amount of Years No Claims Bonus"
                                            },
                                            "key": "namedDrivingExperienceYears",
                                            "label": "How many years named driving experience do you have?",
                                            "order": 3,
                                            "required": true,
                                            "trigger": {
                                                "key": "insuredNamedDriver",
                                                "name": "showBasedOnKey",
                                                "isObject": "true"
                                            },
                                            "value": 1
                                        },
                                        {
                                            "type": "autocomplete",
                                            "uiOptions": {
                                                "summaryTitle": "Where did you earn your licence"
                                            },
                                            "key": "countryNamedDrivingExperience",
                                            "label": "In what country did you earn your named driving experience?",
                                            "order": 2,
                                            "required": true,
                                            "trigger": {
                                                "key": "insuredNamedDriver",
                                                "name": "showBasedOnKey",
                                                "isObject": "true"
                                            },
                                            "disabled": false,
                                            "placeholder": "Please enter a country",
                                            "serviceUrl": "occupation/",
                                            "autoCompleteType": "options"
                                        },
                                        {
                                            "type": "date",
                                            "uiOptions": {
                                                "summaryTitle": "Amount of Years No Claims Bonus"
                                            },
                                            "key": "namedDrivingExperienceExpire",
                                            "label": "When does this named driving experience expire?",
                                            "order": 3,
                                            "required": true,
                                            "trigger": {
                                                "key": "insuredNamedDriver",
                                                "name": "showBasedOnKey",
                                                "isObject": "true"
                                            }
                                        },
                                        {
                                            "type": "slider",
                                            "uiOptions": {
                                                "summaryTitle": "Amount of Years No Claims Bonus"
                                            },
                                            "key": "noClaimsBonusYears",
                                            "label": "How many years no claims discount have you earned in your own name?",
                                            "order": 3,
                                            "required": true,
                                            "trigger": {
                                                "key": "insuredInYourOwnName",
                                                "name": "showBasedOnKey",
                                                "isObject": "true"
                                            },
                                            "value": {
                                                "id": "0",
                                                "description": "0"
                                            },
                                            "values": [
                                                {
                                                    "id": "0",
                                                    "description": "0"
                                                },
                                                {
                                                    "id": "1",
                                                    "description": "1"
                                                },
                                                {
                                                    "id": "2",
                                                    "description": "2"
                                                },
                                                {
                                                    "id": "3",
                                                    "description": "3"
                                                },
                                                {
                                                    "id": "4",
                                                    "description": "4"
                                                },
                                                {
                                                    "id": "5",
                                                    "description": "5"
                                                },
                                                {
                                                    "id": "6",
                                                    "description": "6"
                                                },
                                                {
                                                    "id": "7",
                                                    "description": "7"
                                                },
                                                {
                                                    "id": "8",
                                                    "description": "8"
                                                },
                                                {
                                                    "id": "9",
                                                    "description": "9+"
                                                }
                                            ]
                                        },
                                        {
                                            "type": "autocomplete",
                                            "helpId": 1001,
                                            "uiOptions": {
                                                "summaryTitle": "Location no claims bonus was earned"
                                            },
                                            "key": "whereNoClaimsBonus",
                                            "label": "Where did you earn your no claims bonus",
                                            "order": 4,
                                            "required": true,
                                            "trigger": {
                                                "key": "insuredInYourOwnName",
                                                "name": "showBasedOnKey",
                                                "isObject": "true"
                                            },
                                            "disabled": false,
                                            "placeholder": "Please enter a country",
                                            "serviceUrl": "reference/country/",
                                            "autoCompleteType": "search"
                                        },
                                        {
                                            "type": "date",
                                            "helpId": 1001,
                                            "uiOptions": {
                                                "summaryTitle": "Policy Expiration Date"
                                            },
                                            "key": "policyExpiryDate",
                                            "label": "When does your policy expire?",
                                            "order": 5,
                                            "required": true,
                                            "trigger": {
                                                "key1": "insuredInYourOwnName",
                                                "key2": "insuredNamedDriver",
                                                "name": "showDualKey",
                                                "isObject": "true"
                                            },
                                            "validators": [
                                                "validDateValidate"
                                            ],
                                            "disabled": false
                                        },
                                        {
                                            "type": "radio",
                                            "uiOptions": {
                                                "summaryTitle": "Policy Start Date"
                                            },
                                            "key": "startPolicySameDate",
                                            "label": "Would you like to start your policy from the same date?",
                                            "order": 6,
                                            "required": true,
                                            "trigger": {
                                                "key1": "insuredInYourOwnName",
                                                "key2": "insuredNamedDriver",
                                                "name": "showDualKey",
                                                "isObject": "true"
                                            },
                                            "options": [
                                                {
                                                    "id": "true",
                                                    "description": "Yes"
                                                },
                                                {
                                                    "id": "false",
                                                    "description": "No"
                                                }
                                            ]
                                        },
                                        {
                                            "type": "date",
                                            "key": "policyStartDate",
                                            "label": "What date would you like to start your policy from?",
                                            "order": 7,
                                            "required": true,
                                            "trigger": {
                                                "key": "startPolicySameDate",
                                                "name": "showIfKeyEquals",
                                                "equals": "false"
                                            }
                                        }
                                    ]
                                },
                                {
                                    "type": "radio",
                                    "uiOptions": {
                                        "summaryTitle": "Level of Cover"
                                    },
                                    "key": "levelOfCover",
                                    "label": "What level of cover do you need?",
                                    "order": 8,
                                    "required": true,
                                    "options": [
                                        {
                                            "id": "comprehensive",
                                            "description": "Comprehensive"
                                        },
                                        {
                                            "id": "thirdParty",
                                            "description": "Third Party, Fire and Theft"
                                        }
                                    ]
                                },
                                {
                                    "type": "radio",
                                    "helpId": 1001,
                                    "uiOptions": {
                                        "summaryTitle": "Level of no claims bonus"
                                    },
                                    "key": "levelOfNoClaimsBonus",
                                    "label": "What level of no claims bonus protection do you require?",
                                    "order": 9,
                                    "required": true,
                                    "options": [
                                        {
                                            "id": "full",
                                            "description": "Full"
                                        },
                                        {
                                            "id": "stepBack",
                                            "description": "Step Back"
                                        },
                                        {
                                            "id": "none",
                                            "description": "None"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": "your-claims",
                    "title": "Claims",
                    "uiOptions": {
                        "nextPage": "your-penalties",
                        "prevPage": "your-cover"
                    },
                    "order": 1,
                    "sections": [
                        {
                            "id": "claim-primary-driver",
                            "title": "Primary Driver",
                            "type": "claim",
                            "isDriver": true
                        }
                    ],
                    "templates": [
                        {
                            "id": "claim-template",
                            "type": "claim",
                            "additional": true,
                            "fields": [
                                {
                                    "type": "date",
                                    "uiOptions": {
                                        "summaryTitle": "Date of Claim"
                                    },
                                    "key": "dateOfClaim",
                                    "label": "Date of claim",
                                    "order": 0,
                                    "required": true,
                                    "validators": [
                                        "validDateValidate",
                                        "validLastFiveYearsValidate"
                                    ],
                                    "disabled": false
                                },
                                {
                                    "type": "dropdown",
                                    "uiOptions": {
                                        "summaryTitle": "Reason for Claim"
                                    },
                                    "key": "reasonForClaim",
                                    "label": "What was the reason for the claim?",
                                    "order": 0,
                                    "required": true,
                                    "options": [
                                        {
                                            "id": "Accident",
                                            "description": "Accident"
                                        },
                                        {
                                            "id": "AccidentalDamage",
                                            "description": "Accidental Damage"
                                        },
                                        {
                                            "id": "Fire",
                                            "description": "Fire"
                                        },
                                        {
                                            "id": "MaliciousDamageAsAResultOfTheft",
                                            "description": "Malicious Damage As A Result Of Theft"
                                        },
                                        {
                                            "id": "PersonalAccident",
                                            "description": "Personal Accident"
                                        },
                                        {
                                            "id": "PersonalEffects",
                                            "description": "Personal Effects"
                                        },
                                        {
                                            "id": "Theft",
                                            "description": "Theft"
                                        },
                                        {
                                            "id": "Vandalism",
                                            "description": "Vandalism"
                                        },
                                        {
                                            "id": "Windscreen",
                                            "description": "Windscreen"
                                        },
                                        {
                                            "id": "ThirdParty",
                                            "description": "Third Party"
                                        }
                                    ]
                                },
                                {
                                    "type": "radio",
                                    "uiOptions": {
                                        "summaryTitle": "Reason for Claim"
                                    },
                                    "key": "isClaimSettled",
                                    "label": "Is the claim settled?",
                                    "order": 0,
                                    "required": true,
                                    "options": [
                                        {
                                            "id": "true",
                                            "description": "Yes"
                                        },
                                        {
                                            "id": "false",
                                            "description": "No"
                                        }
                                    ]
                                },
                                {
                                    "type": "radio",
                                    "uiOptions": {
                                        "summaryTitle": "Reason for Claim"
                                    },
                                    "key": "thirdPartyInjuries",
                                    "label": "Were there any third party injuries?",
                                    "order": 0,
                                    "required": true,
                                    "options": [
                                        {
                                            "id": "true",
                                            "description": "Yes"
                                        },
                                        {
                                            "id": "false",
                                            "description": "No"
                                        }
                                    ]
                                },
                                {
                                    "type": "currency",
                                    "uiOptions": {
                                        "summaryTitle": "Cost of Claim"
                                    },
                                    "key": "costOfClaim",
                                    "label": "Cost of claim",
                                    "order": 0,
                                    "required": true,
                                    "placeholder": "How Much"
                                },
                                {
                                    "type": "radio",
                                    "helpId": 1001,
                                    "uiOptions": {
                                        "summaryTitle": "Claim Fault"
                                    },
                                    "key": "customerAtFault",
                                    "label": "Were you at fault?",
                                    "order": 2,
                                    "required": true,
                                    "options": [
                                        {
                                            "id": "true",
                                            "description": "Yes"
                                        },
                                        {
                                            "id": "false",
                                            "description": "No"
                                        }
                                    ]
                                },
                                {
                                    "type": "radio",
                                    "uiOptions": {
                                        "summaryTitle": "No Claim Bonus Protected"
                                    },
                                    "key": "noClaimsBonusProtected",
                                    "label": "Was your no claims bonus protected?",
                                    "order": 2,
                                    "required": true,
                                    "options": [
                                        {
                                            "id": "true",
                                            "description": "Yes"
                                        },
                                        {
                                            "id": "false",
                                            "description": "No"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": "your-penalties",
                    "title": "Penalty Points",
                    "uiOptions": {
                        "prevPage": "your-claims",
                        "nextPage": "choose-your-product"
                    },
                    "order": 1,
                    "sections": [
                        {
                            "id": "penalty-primary-driver",
                            "title": "Primary Driver",
                            "type": "penalty",
                            "isDriver": true
                        }
                    ],
                    "templates": [
                        {
                            "id": "penalty-template",
                            "title": "Primary Driver",
                            "type": "penalty",
                            "additional": true,
                            "fields": [
                                {
                                    "type": "date",
                                    "key": "dateOfPenalty",
                                    "label": "Date of Penalty",
                                    "order": 0,
                                    "required": true,
                                    "validators": [
                                        "validDateValidate",
                                        "validLastThreeYearsValidate"
                                    ],
                                    "disabled": false
                                },
                                {
                                    "type": "dropdown",
                                    "key": "reasonForPenalty",
                                    "label": "What was the reason?",
                                    "order": 0,
                                    "required": true,
                                    "options": [
                                        {
                                            "id": "ExceedingWeight",
                                            "description": "Exceeding weight"
                                        },
                                        {
                                            "id": "NoTestCertificate",
                                            "description": "No test cert"
                                        },
                                        {
                                            "id": "NoLicence",
                                            "description": "No licence"
                                        },
                                        {
                                            "id": "TryingToGetLicenceWhileDisqualified",
                                            "description": "Trying to get licence while disqualified"
                                        },
                                        {
                                            "id": "FailureToProduceLicence",
                                            "description": "Failure to produce licence"
                                        },
                                        {
                                            "id": "ExceedingSpeedLimit",
                                            "description": "Exceeding speed limit"
                                        },
                                        {
                                            "id": "DrivingVehicleWhenUnfit",
                                            "description": "Driving vehicle when unfit"
                                        },
                                        {
                                            "id": "CarelessDriving",
                                            "description": "Careless driving"
                                        },
                                        {
                                            "id": "DrivingDefectiveVehicle",
                                            "description": "Driving defective vehicle"
                                        },
                                        {
                                            "id": "ParkingInDangerousPosition",
                                            "description": "Parking in dangerous position"
                                        },
                                        {
                                            "id": "NoInsurance",
                                            "description": "No insurance"
                                        },
                                        {
                                            "id": "FailingToStopAtWarden",
                                            "description": "Failing to stop at warden"
                                        },
                                        {
                                            "id": "BreachOfDutyAtAccident",
                                            "description": "Breach of duty at accident"
                                        },
                                        {
                                            "id": "FailingToStopForGarda",
                                            "description": "Failing to stop for Garda"
                                        },
                                        {
                                            "id": "GivingFalseDetailsForLicence",
                                            "description": "Giving false details for licence"
                                        },
                                        {
                                            "id": "VehicleExceedsWidthLimit",
                                            "description": "Vehicle exceeds width limit"
                                        },
                                        {
                                            "id": "VehicleExceedsLengthLimit",
                                            "description": "Vehicle exceeds length limit"
                                        },
                                        {
                                            "id": "WornTyres",
                                            "description": "Worn tyres"
                                        },
                                        {
                                            "id": "PoorVisibilityOfRoad",
                                            "description": "Poor visibility of road"
                                        },
                                        {
                                            "id": "WindscreenNotSafetyGlass",
                                            "description": "Windscreen not safety glass"
                                        },
                                        {
                                            "id": "PoorWindscreenWipers",
                                            "description": "Poor windscreen wipers"
                                        },
                                        {
                                            "id": "NoDrivingMirror",
                                            "description": "No driving mirror"
                                        },
                                        {
                                            "id": "PoorBrakes",
                                            "description": "Poor brakes"
                                        },
                                        {
                                            "id": "PoorSeatBeltAnchoragePoints",
                                            "description": "Poor seat belt anchorage points"
                                        },
                                        {
                                            "id": "NoSeatBelts",
                                            "description": "Driver of car or goods vehicle not wearing safety belt"
                                        },
                                        {
                                            "id": "NoCrashHelmetOnMotorbike",
                                            "description": "No crash helmet on motorbike"
                                        },
                                        {
                                            "id": "NoPassengerCrashHelmet",
                                            "description": "No passenger crash helmet"
                                        },
                                        {
                                            "id": "TruckWithNoRearCrashBar",
                                            "description": "Truck with no rear crash bar"
                                        },
                                        {
                                            "id": "TruckWithNoSideCrashBar",
                                            "description": "Truck with no side crash bar"
                                        },
                                        {
                                            "id": "DrivingWithoutSeatBelt",
                                            "description": "Driver of car or goods vehicle not wearing safety belt"
                                        },
                                        {
                                            "id": "RearPassengersWithNoBelt",
                                            "description": "Driver permitting person under 17 years of age to occupy a seat when not wearing safety belt"
                                        },
                                        {
                                            "id": "NoSpeedLimitingDevice",
                                            "description": "No speed limiting device"
                                        },
                                        {
                                            "id": "SpeedLimiterNotCalibrated",
                                            "description": "Speed limiter not calibrated"
                                        },
                                        {
                                            "id": "UnsealedSpeedLimiter",
                                            "description": "Unsealed speed limiter"
                                        },
                                        {
                                            "id": "UsingMobilePhoneWhileDriving",
                                            "description": "Using mobile phone while driving"
                                        },
                                        {
                                            "id": "VehicleNotEquippedWithLamps",
                                            "description": "Vehicle not equipped with lamps"
                                        },
                                        {
                                            "id": "TrailerNotEquippedWithLamps",
                                            "description": "Trailer  not equipped with lamps"
                                        },
                                        {
                                            "id": "NonUseOfProjectingRoadLamps",
                                            "description": "Non use of projecting road lamps"
                                        },
                                        {
                                            "id": "NonUseOfTrailerMarkerLamps",
                                            "description": "Non use of trailer marker lamps"
                                        },
                                        {
                                            "id": "NoInternalLightingInPSV",
                                            "description": "No internal lighting in PSV"
                                        },
                                        {
                                            "id": "NoIndicators",
                                            "description": "No indicators"
                                        },
                                        {
                                            "id": "BreakingSpeedRestriction",
                                            "description": "Breaking speed restriction"
                                        },
                                        {
                                            "id": "FailureToYieldRightOfWay",
                                            "description": "Failure to yield right of way"
                                        },
                                        {
                                            "id": "FailureToDriveOnLeft",
                                            "description": "Failure to drive on left"
                                        },
                                        {
                                            "id": "DangerousOvertaking",
                                            "description": "Dangerous overtaking"
                                        },
                                        {
                                            "id": "PoorDrivingAtJunction",
                                            "description": "Poor driving at junction"
                                        },
                                        {
                                            "id": "PoorReversing",
                                            "description": "Poor reversing"
                                        },
                                        {
                                            "id": "BreachOfFootwayDrivingRules",
                                            "description": "Breach of footway driving rules"
                                        },
                                        {
                                            "id": "FailureToEnterRoundaboutOnLeft",
                                            "description": "Failure to enter roundabout on left"
                                        },
                                        {
                                            "id": "DrivingAlongOrAcrossMedianStrip",
                                            "description": "Driving along or across median strip"
                                        },
                                        {
                                            "id": "FailureToComplyWithGardaSignals",
                                            "description": "Failure to comply with Garda signals"
                                        },
                                        {
                                            "id": "FailureToStopAtStopSign",
                                            "description": "Failure to stop at stop sign"
                                        },
                                        {
                                            "id": "FailureToComplyWithTrafficSign",
                                            "description": "Failure to comply with traffic sign"
                                        },
                                        {
                                            "id": "FailureToKeepLeftAtCertainSigns",
                                            "description": "Failure to keep left at certain signs"
                                        },
                                        {
                                            "id": "CrossingWhiteLine",
                                            "description": "Crossing white line"
                                        },
                                        {
                                            "id": "EnteringMarkedHatchedArea",
                                            "description": "Entering marked hatched area"
                                        },
                                        {
                                            "id": "BreachOfLaneMarkings",
                                            "description": "Breach of lane markings"
                                        },
                                        {
                                            "id": "FailureToObeyTrafficLights",
                                            "description": "Failure to obey traffic lights"
                                        },
                                        {
                                            "id": "FailureToObeyLevelCrossingLights",
                                            "description": "Failure to obey level crossing lights"
                                        },
                                        {
                                            "id": "DrivingAgainstMotorwayFlow",
                                            "description": "Driving against motorway flow"
                                        },
                                        {
                                            "id": "DrivingOnBannedAreasOfMotorway",
                                            "description": "Driving on banned areas of motorway"
                                        },
                                        {
                                            "id": "DrivingVehicleRestrictedTo50MphOnOutsideLaneOfMotorway",
                                            "description": "Driving vehicle restricted to 50 mph on outside lane of motorway"
                                        },
                                        {
                                            "id": "FailureToHeedHeightRestrictions",
                                            "description": "Failure to heed height restrictions"
                                        },
                                        {
                                            "id": "ProvisionalLicenceHolderDrivingWithoutSupervisionOfQualifiedDriver",
                                            "description": "Provisional licence holder driving without supervision of qualified driver"
                                        },
                                        {
                                            "id": "Other",
                                            "description": "Other"
                                        },
                                        {
                                            "id": "DrivingOnACycleTrack",
                                            "description": "Driving on a cycle track"
                                        },
                                        {
                                            "id": "DrivingVehicleBeforeRemedyingDangerousDefect",
                                            "description": "Driving vehicle before remedying dangerous defect"
                                        },
                                        {
                                            "id": "IllegalEntryOntoAOneWayStreet",
                                            "description": "Illegal entry onto a one-way street"
                                        },
                                        {
                                            "id": "FailureToComplyWithProhibitoryTraffiSigns",
                                            "description": "Failure to comply with prohibitory traffic signs"
                                        },
                                        {
                                            "id": "FailureToYieldRightOfWayAtAYieldSignYieldLine",
                                            "description": "Failure to yield right of way at a yield sign/ yield line"
                                        },
                                        {
                                            "id": "InsurerPenaltyPointUpdate",
                                            "description": "Insurer Penalty Point Update"
                                        },
                                        {
                                            "id": "UsingVehicleWithoutCertificateOfRoadworthiness",
                                            "description": "Using vehicle without certificate of roadworthiness"
                                        },
                                        {
                                            "id": "FailureToLeaveAppropriateDistanceBetweenYouAndTheVehicleInFront",
                                            "description": "Failure to leave appropriate distance between you and the vehicle in front"
                                        },
                                        {
                                            "id": "DrivingWithoutReasonableConsideration",
                                            "description": "Driving without reasonable consideration"
                                        },
                                        {
                                            "id": "DrinkDrivingOffencesDependingOnLevelOfAlcoholPresentInTheBlood",
                                            "description": "Drink Driving Offences (depending on level of alcohol present in the blood)"
                                        },
                                        {
                                            "id": "DriverOfCarOrGoodsVehiclePermittingChildUnder3YearsOfAget",
                                            "description": "Driver of car or goods vehicle permitting child under 3 years of age to travel in without being restrainted by appropriate child restraint"
                                        },
                                        {
                                            "id": "DriverOfCarOrGoodsVehiclePermittingChildOver3YearsOfAgeTo",
                                            "description": "Driver of car or goods vehicle permitting child over 3 years of age to travel in without being restrainted by appropriate child restraint"
                                        },
                                        {
                                            "id": "DriverOfCarOrGoodsVehiclePermittingChildToBeRestrainedByRe",
                                            "description": "Driver of car or goods vehicle permitting child to be restrained by rearward facing child restraint fitted to a seat protected by active frontal air-bag "
                                        },
                                        {
                                            "id": "DriverOfBusNotWearingSafetyBelt",
                                            "description": "Driver of bus not wearing safety belt"
                                        },
                                        {
                                            "id": "UsingVehicleWhoseWeightUnLadenExceedsMaximumPermittedWe",
                                            "description": "Using vehicle - (a) whose weight un-laden exceeds maximum permitted weight"
                                        },
                                        {
                                            "id": "ContraventionOfBanOnUTurns",
                                            "description": "Contravention of ban on U-turns"
                                        },
                                        {
                                            "id": "ContraventionOfRulesForUseOfMiniRoundabouts",
                                            "description": "Contravention of rules for use of mini roundabouts"
                                        },
                                        {
                                            "id": "FailureToDisplayLPlateOrLTabard",
                                            "description": "Failure to display L-Plate or L tabard"
                                        },
                                        {
                                            "id": "FailureToDisplayNPlateOrNTabard",
                                            "description": "Failure to display N Plate or N tabard"
                                        },
                                        {
                                            "id": "GrossVehicleWeightExceedsMaximumSignDisplayed",
                                            "description": "Gross vehicle weight exceeds maximum sign displayed"
                                        },
                                        {
                                            "id": "LearnerPermitHolderDrivingUnaccompaniedByQualifiedPerson",
                                            "description": "Learner permit holder driving unaccompanied by qualified person"
                                        },
                                        {
                                            "id": "LengthOfVehicleExceedsMaximumSignDisplayed",
                                            "description": "Length of vehicle exceeds maximum sign displayed"
                                        },
                                        {
                                            "id": "NoSpeedLimitationDeviceNonCompliantSpeedLimitationDevice",
                                            "description": "No speed limitation device / non-compliant speed limitation device"
                                        },
                                        {
                                            "id": "PassingTrafficLaneControlSignNotInAccordanceWithSuchSign",
                                            "description": "Passing traffic lane control sign not in accordance with such sign"
                                        },
                                        {
                                            "id": "ProceedingBeyondNoEntryToVehiclesSign",
                                            "description": "Proceeding beyond no entry to vehicles sign"
                                        },
                                        {
                                            "id": "UsingModifiedAlteredVehicleWhereAuthorisationPlateIsInaccurate",
                                            "description": "Using modified/altered vehicle where authorisation plate is inaccurate"
                                        },
                                        {
                                            "id": "UsingVehicleInAPublicPlaceWithoutAnAuthorisationPlate",
                                            "description": "Using vehicle in a public place without an authorisation plate"
                                        },
                                        {
                                            "id": "VehicleAxleLoadingWeightExceedsMaximumSignDisplayed",
                                            "description": "Vehicle axle loading weight exceeds maximum sign displayed"
                                        },
                                        {
                                            "id": "WidthOfVehicleExceedsMaximumSignDisplayed",
                                            "description": "Width of vehicle exceeds maximum sign displayed"
                                        }
                                    ]
                                },
                                {
                                    "type": "text",
                                    "key": "howManyPoints",
                                    "label": "How many points?",
                                    "order": 0,
                                    "required": true,
                                    "placeholder": "How many?"
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "id": "price-presentation",
            "isComplete": false,
            "title": "Get Quote",
            "uiOptions": {
                "isWide": "true",
                "isPagesHidden": "true"
            },
            "pages": [
                {
                    "id": "choose-your-product",
                    "title": "Choose the best product for you",
                    "uiOptions": {
                        "prevPage": "your-penalties",
                        "nextPage": "are-you-a-member"
                    }
                },
                {
                    "id": "are-you-a-member",
                    "title": "Are you a Member?",
                    "uiOptions": {
                        "prevPage": "choose-your-product",
                        "nextPage": "choose-your-payment"
                    }
                },
                {
                    "id": "choose-your-payment",
                    "title": "Choose your payment",
                    "uiOptions": {
                        "prevPage": "are-you-a-member",
                        "nextPage": "additional-questions"
                    }
                }
            ]
        },
        {
            "id": "payments",
            "isComplete": false,
            "title": "Payment",
            "uiOptions": {
                "isWide": "true",
                "isPagesHidden": "true"
            },
            "pages": [
                {
                    "id": "additional-questions",
                    "title": "Additional Questions",
                    "uiOptions": {
                        "nextPage": "tokenisation",
                        "prevPage": "choose-your-payment"
                    },
                    "sections": [
                        {
                            "id": "additional-questions",
                            "type": "default",
                            "isDriver": true,
                            "fields": [
                                {
                                    "type": "text",
                                    "key": "driverLicenceNumber",
                                    "label": "What is your Drivers Licence number?",
                                    "required": false,
                                    "trigger": {
                                        "name": "getValueForValidationFromQuestion",
                                        "key": "typeOfLicence",
                                        "value": "FullIrish"
                                    },
                                    "validators": [
                                        "licenceNumberValidate"
                                    ],
                                    "disabled": false
                                }
                            ]
                        }
                    ],
                    "templates": [
                        {
                            "type": "default",
                            "hasQuestionsByDefault": true,
                            "additional": true,
                            "fields": [
                                {
                                    "type": "text",
                                    "key": "driverLicenceNumber",
                                    "label": "What is your Drivers Licence number?",
                                    "required": false,
                                    "validators": [
                                        "licenceNumberValidate"
                                    ],
                                    "disabled": false
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": "terms-and-conditions",
                    "title": "Terms and Conditions",
                    "uiOptions": {
                        "prevPage": "additional-question",
                        "nextPage": "tokenisation"
                    }
                },
                {
                    "id": "tokenisation",
                    "title": "Tokenisation",
                    "uiOptions": {
                        "prevPage": "terms-and-conditions",
                        "nextPage": "payment"
                    },
                    "sections": [
                        {
                            "id": "tokenisation",
                            "type": "default",
                            "fields": [
                                {
                                    "type": "radio",
                                    "key": "areYouCardholder",
                                    "label": "Are you the Cardholder?",
                                    "order": 2,
                                    "required": true,
                                    "value": "Yes",
                                    "options": [
                                        {
                                            "id": "true",
                                            "description": "Yes"
                                        },
                                        {
                                            "id": "false",
                                            "description": "No"
                                        }
                                    ]
                                },
                                {
                                    "type": "radio",
                                    "key": "doYouHavePermissionCardholder",
                                    "label": "We need to store the cardholders payment information securely to complete your purchase. Can you confirm that\n\t\t\t\tthe cardholder has consented to their payment details being stored for use with this AA product only?",
                                    "order": 2,
                                    "required": true,
                                    "trigger": {
                                        "key": "areYouCardholder",
                                        "name": "showIfKeyEquals",
                                        "equals": "false",
                                        "isObject": "true"
                                    },
                                    "value": "Yes",
                                    "options": [
                                        {
                                            "id": "true",
                                            "description": "Yes"
                                        },
                                        {
                                            "id": "false",
                                            "description": "No"
                                        }
                                    ]
                                },
                                {
                                    "type": "radio",
                                    "key": "saveCardFutureTransactions",
                                    "label": "Would you like us to save this card securely to us for future transactions?",
                                    "order": 2,
                                    "required": true,
                                    "value": "Yes",
                                    "options": [
                                        {
                                            "id": "true",
                                            "description": "Yes"
                                        },
                                        {
                                            "id": "false",
                                            "description": "No"
                                        }
                                    ]
                                },
                                {
                                    "type": "radio",
                                    "key": "saveCardAllAAProducts",
                                    "label": "Would you like to save this card use on all AA Products?",
                                    "order": 2,
                                    "required": true,
                                    "trigger": {
                                        "key": "saveCardFutureTransactions",
                                        "name": "showIfKeyEquals",
                                        "equals": "false",
                                        "isObject": "true"
                                    },
                                    "value": "Yes",
                                    "options": [
                                        {
                                            "id": "true",
                                            "description": "Yes"
                                        },
                                        {
                                            "id": "false",
                                            "description": "No"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": "payment",
                    "title": "Payment",
                    "uiOptions": {
                        "prevPage": "tokenisation",
                        "nextPage": "confirmation"
                    }
                }
            ]
        },
        {
            "id": "confirmation",
            "isComplete": false,
            "title": "Confirmation",
            "uiOptions": {
                "isWide": "true",
                "isProgressHidden": "true",
                "isSummaryHidden": "true",
                "isHelpCenterHidden": "true",
                "isHeaderExtended": "true",
                "isPagesHidden": "true"
            },
            "pages": [
                {
                    "id": "confirmation",
                    "title": "Confirmation",
                    "uiOptions": {
                        "prevPage": "payment",
                        "isSummaryHidden": "true",
                        "isTimelineHidden": "true"
                    }
                }
            ]
        }
    ]
};

//# sourceMappingURL=data:application/json;base64,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Q0FDUDs0Q0FDRyxJQUFJLEVBQUMsTUFBTTs0Q0FDWCxhQUFhLEVBQUMsS0FBSzt5Q0FDckI7d0NBQ0Q7NENBQ0csSUFBSSxFQUFDLE9BQU87NENBQ1osYUFBYSxFQUFDLElBQUk7eUNBQ3BCO3FDQUNIO2lDQUNIOzZCQUNIO3lCQUNIO3FCQUNIO2lCQUNIO2dCQUNEO29CQUNHLElBQUksRUFBQyxTQUFTO29CQUNkLE9BQU8sRUFBQyxTQUFTO29CQUNqQixXQUFXLEVBQUM7d0JBQ1QsVUFBVSxFQUFDLGNBQWM7d0JBQ3pCLFVBQVUsRUFBQyxjQUFjO3FCQUMzQjtpQkFDSDthQUNIO1NBQ0g7UUFDRDtZQUNHLElBQUksRUFBQyxjQUFjO1lBQ25CLFlBQVksRUFBQyxLQUFLO1lBQ2xCLE9BQU8sRUFBQyxjQUFjO1lBQ3RCLFdBQVcsRUFBQztnQkFDVCxRQUFRLEVBQUMsTUFBTTtnQkFDZixrQkFBa0IsRUFBQyxNQUFNO2dCQUN6QixpQkFBaUIsRUFBQyxNQUFNO2dCQUN4QixvQkFBb0IsRUFBQyxNQUFNO2dCQUMzQixrQkFBa0IsRUFBQyxNQUFNO2dCQUN6QixlQUFlLEVBQUMsTUFBTTthQUN4QjtZQUNELE9BQU8sRUFBQztnQkFDTDtvQkFDRyxJQUFJLEVBQUMsY0FBYztvQkFDbkIsT0FBTyxFQUFDLGNBQWM7b0JBQ3RCLFdBQVcsRUFBQzt3QkFDVCxVQUFVLEVBQUMsU0FBUzt3QkFDcEIsaUJBQWlCLEVBQUMsTUFBTTt3QkFDeEIsa0JBQWtCLEVBQUMsTUFBTTtxQkFDM0I7aUJBQ0g7YUFDSDtTQUNIO0tBQ0g7Q0FDSCxDQUFBIiwiZmlsZSI6ImNvbnN0YW50c19rZWl0aC5qcyIsInNvdXJjZXNDb250ZW50IjpbbnVsbF0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
