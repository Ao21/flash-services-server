"use strict";
exports.CONFIG = {
    "stages": [
        {
            "id": "quotation",
            "title": "Your Quote",
            "pages": [
                {
                    "id": "getting-started",
                    "title": "Getting Started",
                    "helpId": "213679469",
                    "subheading": "First we need some details to get started.",
                    "order": 0,
                    "uiOptions": {
                        "nextPage": "your-details"
                    },
                    "sections": [
                        {
                            "id": "pre-default",
                            "type": "default",
                            "fields": [
                                {
                                    "key": "email",
                                    "label": "What is your Email Address?",
                                    "type": "myaaEmail",
                                    "required": true,
                                    "order": 0,
                                    "validators": [
                                        "validEmailValidate"
                                    ],
                                    "uiOptions": {
                                        "summaryTitle": ""
                                    }
                                },
                                {
                                    "key": "amountOfDrivers",
                                    "label": "How many drivers will there be on your policy including yourself?",
                                    "type": "memberSelector",
                                    "required": true,
                                    "order": 1,
                                    "value": 1,
                                    "min": 1,
                                    "max": 5,
                                    "uiOptions": {
                                        "summaryTitle": "Amount of Drivers"
                                    }
                                },
                                {
                                    "key": "termsConditions",
                                    "label": "Terms and Conditions",
                                    "type": "questionText",
                                    "order": 2,
                                    "timeline": false,
                                    "content": "<p>By proceeding, I agree to the <a href=\"\" target=\"_blank\">AA Assumptions</a> and <a href=\"https://www.theaa.ie/~/media/Files/AA%20Ireland/Terms%20And%20Conditions/MyAATerms.ashx\" target=\"_blank\">myAA Terms and Conditions</a>. I have read and agree to the <a href=\"http://www.theaa.ie/aa/about-us/privacy-policy.aspx\" target=\"_blank\">AA Privacy Policy</a> and <a href=\"http://www.theaa.ie/~/media/Files/AA%20Ireland/Terms%20and%20conditions/Motor-Terms-Business.aspx\" target=\"_blank\">Terms of Business</a></p>",
                                    "uiOptions": {
                                        "summaryHidden": true
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": "your-details",
                    "title": "Details",
                    "subheading": "We need to know some details about you so that we can give you the best quote.",
                    "order": 1,
                    "uiOptions": {
                        "nextPage": "your-address",
                        "prevPage": "getting-started"
                    },
                    "templates": [
                        {
                            "type": "default",
                            "additional": true,
                            "hasQuestionsByDefault": true,
                            "fields": [
                                {
                                    "key": "title",
                                    "label": "Title",
                                    "type": "radio",
                                    "order": 0,
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
                                    ],
                                    "required": true,
                                    "uiOptions": {
                                        "summaryTitle": "Email"
                                    }
                                },
                                {
                                    "key": "firstName",
                                    "label": "First Name",
                                    "type": "text",
                                    "required": true,
                                    "helpId": 214205625,
                                    "order": 0,
                                    "uiOptions": {
                                        "summaryTitle": "First Name"
                                    }
                                },
                                {
                                    "key": "lastName",
                                    "label": "Last Name",
                                    "type": "text",
                                    "helpId": 213679469,
                                    "required": true,
                                    "order": 1,
                                    "uiOptions": {
                                        "summaryTitle": "Last Name"
                                    }
                                },
                                {
                                    "key": "dateOfBirth",
                                    "label": "Date Of Birth",
                                    "type": "date",
                                    "required": true,
                                    "helpId": 213685289,
                                    "disabled": false,
                                    "order": 2,
                                    "validators": [
                                        "validDateValidate",
                                        "validOverEighteenValidate"
                                    ],
                                    "uiOptions": {
                                        "summaryTitle": "Date of Birth"
                                    }
                                },
                                {
                                    "key": "phoneNumber",
                                    "label": "Contact Number",
                                    "type": "tel",
                                    "required": true,
                                    "disabled": false,
                                    "helpId": 214224585,
                                    "order": 2,
                                    "validators": [
                                        "validPhoneNumberValidate"
                                    ],
                                    "uiOptions": {
                                        "summaryTitle": "Phone Number"
                                    }
                                },
                                {
                                    "key": "relationToMainDriver",
                                    "label": "Relationship to Main Driver",
                                    "helpId": 1001,
                                    "type": "dropdown",
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
                                    ],
                                    "required": true,
                                    "order": 1,
                                    "validators": [],
                                    "uiOptions": {
                                        "summaryTitle": "On who's policy"
                                    }
                                },
                                {
                                    "key": "typeOfEmployment",
                                    "label": "Type of Employment",
                                    "type": "dropdown",
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
                                    ],
                                    "required": true,
                                    "order": 2,
                                    "validators": [],
                                    "uiOptions": {
                                        "summaryTitle": "Type of Employment"
                                    }
                                },
                                {
                                    "key": "occupation",
                                    "label": "What is your Occupation?",
                                    "type": "autocomplete",
                                    "placeholder": "Select an Occupation",
                                    "serviceUrl": "reference/occupation/",
                                    "autoCompleteType": "all",
                                    "required": true,
                                    "trigger": {
                                        "key": "typeOfEmployment",
                                        "equals": ["Unemployed", "Retired"],
                                        "name": "hideIfKeyEqualsMulti"
                                    },
                                    "disabled": false,
                                    "helpId": 1001,
                                    "order": 2,
                                    "validators": [],
                                    "uiOptions": {
                                        "summaryTitle": "Occupation"
                                    }
                                },
                                {
                                    "key": "business",
                                    "label": "Type of Business",
                                    "type": "autocomplete",
                                    "placeholder": "Select an Area of Business",
                                    "serviceUrl": "reference/employerBusinessType/",
                                    "autoCompleteType": "all",
                                    "required": true,
                                    "trigger": {
                                        "key": "typeOfEmployment",
                                        "equals": ["Unemployed", "Retired"],
                                        "name": "hideIfKeyEqualsMulti"
                                    },
                                    "order": 2,
                                    "validators": [],
                                    "uiOptions": {
                                        "summaryTitle": "Type of business"
                                    }
                                },
                                {
                                    "key": "livedOutsideIreland",
                                    "label": "Have you lived outside of Ireland or the UK in the past 12 months?",
                                    "type": "radio",
                                    "options": [
                                        {
                                            "id": true,
                                            "description": "Yes"
                                        },
                                        {
                                            "id": false,
                                            "description": "No"
                                        }
                                    ],
                                    "required": true,
                                    "order": 2,
                                    "validators": []
                                }
                            ]
                        }
                    ],
                    "sections": [
                        {
                            "id": "details-default",
                            "type": "default",
                            "isDriver": true,
                            "title": "Primary Driver",
                            "fields": [
                                {
                                    "key": "title",
                                    "label": "Title",
                                    "type": "radio",
                                    "order": 0,
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
                                    ],
                                    "required": true,
                                    "uiOptions": {
                                        "summaryTitle": "Email"
                                    }
                                },
                                {
                                    "key": "firstName",
                                    "label": "First Name",
                                    "type": "text",
                                    "required": true,
                                    "helpId": 214205625,
                                    "order": 0,
                                    "uiOptions": {
                                        "summaryTitle": "First Name"
                                    }
                                },
                                {
                                    "key": "lastName",
                                    "label": "Last Name",
                                    "type": "text",
                                    "helpId": 213679469,
                                    "required": true,
                                    "order": 1,
                                    "uiOptions": {
                                        "summaryTitle": "Last Name"
                                    }
                                },
                                {
                                    "key": "dateOfBirth",
                                    "label": "Date Of Birth",
                                    "type": "date",
                                    "required": true,
                                    "helpId": 213685289,
                                    "disabled": false,
                                    "order": 2,
                                    "validators": [
                                        "validDateValidate",
                                        "validOverEighteenValidate"
                                    ],
                                    "uiOptions": {
                                        "summaryTitle": "Date of Birth"
                                    }
                                },
                                {
                                    "key": "phoneNumber",
                                    "label": "Contact Number",
                                    "type": "tel",
                                    "required": true,
                                    "disabled": false,
                                    "helpId": 214224585,
                                    "order": 2,
                                    "validators": [
                                        "validPhoneNumberValidate"
                                    ],
                                    "uiOptions": {
                                        "summaryTitle": "Phone Number"
                                    }
                                },
                                {
                                    "key": "typeOfEmployment",
                                    "label": "Type of Employment",
                                    "type": "dropdown",
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
                                    ],
                                    "required": true,
                                    "order": 2,
                                    "validators": [],
                                    "uiOptions": {
                                        "summaryTitle": "Type of Employment"
                                    }
                                },
                                {
                                    "key": "occupation",
                                    "label": "What is your Occupation?",
                                    "type": "autocomplete",
                                    "placeholder": "Select an Occupation",
                                    "serviceUrl": "reference/occupation/",
                                    "autoCompleteType": "all",
                                    "required": true,
                                    "trigger": {
                                        "key": "typeOfEmployment",
                                        "equals": ["Unemployed", "Retired"],
                                        "name": "hideIfKeyEqualsMulti"
                                    },
                                    "disabled": false,
                                    "helpId": 1001,
                                    "order": 2,
                                    "validators": [],
                                    "uiOptions": {
                                        "summaryTitle": "Occupation"
                                    }
                                },
                                {
                                    "key": "business",
                                    "label": "Type of Business",
                                    "type": "autocomplete",
                                    "placeholder": "Select an Area of Business",
                                    "serviceUrl": "reference/employerBusinessType/",
                                    "autoCompleteType": "all",
                                    "required": true,
                                    "trigger": {
                                        "key": "typeOfEmployment",
                                        "equals": ["Unemployed", "Retired"],
                                        "name": "hideIfKeyEqualsMulti"
                                    },
                                    "order": 2,
                                    "validators": [],
                                    "uiOptions": {
                                        "summaryTitle": "Type of business"
                                    }
                                },
                                {
                                    "key": "livedOutsideIreland",
                                    "label": "Have you lived outside of Ireland or the UK in the past 12 months?",
                                    "type": "radio",
                                    "options": [
                                        {
                                            "id": true,
                                            "description": "Yes"
                                        },
                                        {
                                            "id": false,
                                            "description": "No"
                                        }
                                    ],
                                    "required": true,
                                    "order": 2,
                                    "validators": []
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": "your-address",
                    "title": "Addresss",
                    "order": 1,
                    "uiOptions": {
                        "nextPage": "your-car",
                        "prevPage": "your-details"
                    },
                    "sections": [
                        {
                            "id": "address-default",
                            "type": "address",
                            "title": "Primary Driver",
                            "fields": [
                                {
                                    "key": "address",
                                    "type": "group",
                                    "isComplete": true,
                                    "fields": [
                                        {
                                            "key": "addressLine1",
                                            "label": "Address Line 1",
                                            "type": "text",
                                            "required": true,
                                            "order": 0,
                                            "validators": [],
                                            "uiOptions": {
                                                "summaryTitle": "Address line 1"
                                            }
                                        },
                                        {
                                            "key": "addressLine2",
                                            "label": "Address Line 2",
                                            "placeholder": "Optional",
                                            "type": "text",
                                            "required": false,
                                            "order": 0,
                                            "validators": [],
                                            "uiOptions": {
                                                "summaryTitle": "Address line 2"
                                            }
                                        },
                                        {
                                            "key": "county",
                                            "label": "County / Dublin Area e.g. Carlow, Dublin 18",
                                            "type": "dropdown",
                                            "options": [
                                                { id: 'Antrim', description: 'Antrim' },
                                                { id: 'Armagh', description: 'Armagh' },
                                                { id: 'Carlow', description: 'Carlow' },
                                                { id: 'Cavan', description: 'Cavan' },
                                                { id: 'Clare', description: 'Clare' },
                                                { id: 'Cork', description: 'Cork' },
                                                { id: 'Derry', description: 'Derry' },
                                                { id: 'Donegal', description: 'Donegal' },
                                                { id: 'Down', description: 'Down' },
                                                { id: 'Dublin', description: 'Dublin' },
                                                { id: 'Fermanagh', description: 'Fermanagh' },
                                                { id: 'Galway', description: 'Galway' },
                                                { id: 'Kerry', description: 'Kerry' },
                                                { id: 'Kildare', description: 'Kildare' },
                                                { id: 'Kilkenny', description: 'Kilkenny' },
                                                { id: 'Laois', description: 'Laois' },
                                                { id: 'Leitrim', description: 'Leitrim' },
                                                { id: 'Limerick', description: 'Limerick' },
                                                { id: 'Longford', description: 'Longford' },
                                                { id: 'Louth', description: 'Louth' },
                                                { id: 'Mayo', description: 'Mayo' },
                                                { id: 'Meath', description: 'Meath' },
                                                { id: 'Monaghan', description: 'Monaghan' },
                                                { id: 'Offaly', description: 'Offaly' },
                                                { id: 'Roscommon', description: 'Roscommon' },
                                                { id: 'Sligo', description: 'Sligo' },
                                                { id: 'Tipperary', description: 'Tipperary' },
                                                { id: 'Tyrone', description: 'Tyrone' },
                                                { id: 'Waterford', description: 'Waterford' },
                                                { id: 'Westmeath', description: 'Westmeath' },
                                                { id: 'Wexford', description: 'Wexford' },
                                                { id: 'Wicklow', description: 'Wicklow' },
                                            ],
                                            "required": true,
                                            "order": 1,
                                            "validators": [],
                                            "uiOptions": {
                                                "summaryTitle": "County"
                                            }
                                        },
                                        {
                                            "key": "area",
                                            "label": "Town/Area",
                                            "type": "autocomplete",
                                            "serviceUrl": "reference/area/",
                                            "autoCompleteType": "linked",
                                            "link": "county",
                                            "trigger": {
                                                "name": "disabledBasedOnKey",
                                                "expectedType": "object",
                                                "key": "county"
                                            },
                                            "required": true,
                                            "disabled": false,
                                            "order": 2,
                                            "validators": [],
                                            "uiOptions": {
                                                "summaryTitle": "Town"
                                            }
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
                    "order": 1,
                    "uiOptions": {
                        "nextPage": "your-licence",
                        "prevPage": "your-address"
                    },
                    "sections": [
                        {
                            "id": "car-default",
                            "type": "car",
                            "title": "Primary Driver",
                            "fields": [
                                {
                                    "key": "carInformation",
                                    "type": "group",
                                    "alignment": "none",
                                    "timeline": false,
                                    "order": 0,
                                    "isComplete": false,
                                    "uiOptions": {
                                        "summaryTitle": "Car Model"
                                    },
                                    "fields": [
                                        {
                                            "key": "carMake",
                                            "label": "Car Make",
                                            "type": "autocomplete",
                                            "serviceUrl": "reference/vehicle/make/",
                                            "autoCompleteType": "all",
                                            "link": "carInformation",
                                            "required": true,
                                            "disabled": false,
                                            "order": 1,
                                            "validators": [],
                                            "uiOptions": {
                                                "summaryTitle": "Make"
                                            }
                                        },
                                        {
                                            "key": "carModel",
                                            "label": "Car Model",
                                            "type": "autocomplete",
                                            "serviceUrl": "reference/vehicle/model/",
                                            "autoCompleteType": "linked",
                                            "link": "carMake",
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
                                        },
                                        {
                                            "key": "engineSizeRange",
                                            "label": "Engine Size",
                                            "type": "dropdown",
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
                                            ],
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
                                        }
                                    ]
                                },
                                {
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
                                },
                                {
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
                                },
                                {
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
                                },
                                {
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
                                },
                                {
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
                                    "fields": [
                                        {
                                            "key": "security-alarm",
                                            "name": "Alarm",
                                            "type": "checkbox",
                                            "timeline": false,
                                            "required": false,
                                            "uiOptions": {
                                                "summaryTitle": "Security Alarm"
                                            }
                                        },
                                        {
                                            "key": "security-immobiliser",
                                            "name": "Immobiliser",
                                            "type": "checkbox",
                                            "timeline": false,
                                            "required": false,
                                            "uiOptions": {
                                                "summaryTitle": "Immobiliser"
                                            }
                                        },
                                        {
                                            "key": "security-tracker",
                                            "name": "Tracker",
                                            "type": "checkbox",
                                            "timeline": false,
                                            "required": false,
                                            "uiOptions": {
                                                "summaryTitle": "Tracker"
                                            }
                                        }
                                    ]
                                },
                                {
                                    "key": "carMainlyUsedCounty",
                                    "label": "In what county is your car usually used?",
                                    "placeholder": "Please enter a county",
                                    "type": "dropdown",
                                    "options": [
                                        { id: 'Antrim', description: 'Antrim' },
                                        { id: 'Armagh', description: 'Armagh' },
                                        { id: 'Carlow', description: 'Carlow' },
                                        { id: 'Cavan', description: 'Cavan' },
                                        { id: 'Clare', description: 'Clare' },
                                        { id: 'Cork', description: 'Cork' },
                                        { id: 'Derry', description: 'Derry' },
                                        { id: 'Donegal', description: 'Donegal' },
                                        { id: 'Down', description: 'Down' },
                                        { id: 'Dublin', description: 'Dublin' },
                                        { id: 'Fermanagh', description: 'Fermanagh' },
                                        { id: 'Galway', description: 'Galway' },
                                        { id: 'Kerry', description: 'Kerry' },
                                        { id: 'Kildare', description: 'Kildare' },
                                        { id: 'Kilkenny', description: 'Kilkenny' },
                                        { id: 'Laois', description: 'Laois' },
                                        { id: 'Leitrim', description: 'Leitrim' },
                                        { id: 'Limerick', description: 'Limerick' },
                                        { id: 'Longford', description: 'Longford' },
                                        { id: 'Louth', description: 'Louth' },
                                        { id: 'Mayo', description: 'Mayo' },
                                        { id: 'Meath', description: 'Meath' },
                                        { id: 'Monaghan', description: 'Monaghan' },
                                        { id: 'Offaly', description: 'Offaly' },
                                        { id: 'Roscommon', description: 'Roscommon' },
                                        { id: 'Sligo', description: 'Sligo' },
                                        { id: 'Tipperary', description: 'Tipperary' },
                                        { id: 'Tyrone', description: 'Tyrone' },
                                        { id: 'Waterford', description: 'Waterford' },
                                        { id: 'Westmeath', description: 'Westmeath' },
                                        { id: 'Wexford', description: 'Wexford' },
                                        { id: 'Wicklow', description: 'Wicklow' },
                                    ],
                                    "required": true,
                                    "order": 9,
                                    "validators": []
                                },
                                {
                                    "key": "carMainlyUsedArea",
                                    "label": "In what town/area is your car usually used?",
                                    "type": "autocomplete",
                                    "serviceUrl": "reference/area/",
                                    "autoCompleteType": "linked",
                                    "link": "carMainlyUsedCounty",
                                    "trigger": {
                                        "name": "disabledBasedOnKey",
                                        "expectedType": "object",
                                        "key": "carMainlyUsedCounty"
                                    },
                                    "required": true,
                                    "disabled": false,
                                    "order": 9,
                                    "validators": []
                                },
                                {
                                    "key": "carKeptOvernight",
                                    "label": "Where is you car kept overnight?",
                                    "type": "dropdown",
                                    "options": [
                                        {
                                            "id": "Carport",
                                            "description": "Carport"
                                        },
                                        {
                                            "id": "Garaged",
                                            "description": "Garaged"
                                        },
                                        {
                                            "id": "KeptOnPrivateProperty",
                                            "description": "Kept on Private Property"
                                        },
                                        {
                                            "id": "KeptOnPublicRoad",
                                            "description": "Kept on Public Property"
                                        },
                                        {
                                            "id": "ParkedOnDrive",
                                            "description": "Parked on Drive"
                                        }
                                    ],
                                    "required": true,
                                    "order": 10,
                                    "validators": []
                                }
                            ]
                        },
                        {
                            "id": "car-secondary",
                            "type": "car",
                            "title": "Second Car",
                            "fields": [
                                {
                                    "key": "carInformation",
                                    "type": "group",
                                    "alignment": "none",
                                    "timeline": false,
                                    "order": 0,
                                    "isComplete": false,
                                    "uiOptions": {
                                        "summaryTitle": "Car Model"
                                    },
                                    "fields": [
                                        {
                                            "key": "carMake",
                                            "label": "Car Make",
                                            "type": "autocomplete",
                                            "serviceUrl": "reference/vehicle/make/",
                                            "autoCompleteType": "all",
                                            "link": "carInformation",
                                            "required": true,
                                            "disabled": false,
                                            "order": 1,
                                            "validators": [],
                                            "uiOptions": {
                                                "summaryTitle": "Make"
                                            }
                                        },
                                        {
                                            "key": "carModel",
                                            "label": "Car Model",
                                            "type": "autocomplete",
                                            "serviceUrl": "reference/vehicle/model/",
                                            "autoCompleteType": "linked",
                                            "link": "carMake",
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
                                        },
                                        {
                                            "key": "engineSizeRange",
                                            "label": "Engine Size",
                                            "type": "dropdown",
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
                                            ],
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
                                        }
                                    ]
                                },
                                {
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
                                },
                                {
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
                                },
                                {
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
                                },
                                {
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
                                },
                                {
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
                                    "fields": [
                                        {
                                            "key": "security-alarm",
                                            "name": "Alarm",
                                            "type": "checkbox",
                                            "timeline": false,
                                            "required": false,
                                            "uiOptions": {
                                                "summaryTitle": "Security Alarm"
                                            }
                                        },
                                        {
                                            "key": "security-immobiliser",
                                            "name": "Immobiliser",
                                            "type": "checkbox",
                                            "timeline": false,
                                            "required": false,
                                            "uiOptions": {
                                                "summaryTitle": "Immobiliser"
                                            }
                                        },
                                        {
                                            "key": "security-tracker",
                                            "name": "Tracker",
                                            "type": "checkbox",
                                            "timeline": false,
                                            "required": false,
                                            "uiOptions": {
                                                "summaryTitle": "Tracker"
                                            }
                                        }
                                    ]
                                },
                                {
                                    "key": "carMainlyUsedArea",
                                    "label": "In what area is your car usually used?",
                                    "placeholder": "Please type the neighbourhood, region, area",
                                    "type": "autocomplete",
                                    "serviceUrl": "reference/area/",
                                    "autoCompleteType": "search",
                                    "required": true,
                                    "disabled": false,
                                    "order": 9,
                                    "validators": []
                                },
                                {
                                    "key": "carMainlyUsedCounty",
                                    "label": "In what county is your car usually used?",
                                    "placeholder": "Please enter a county",
                                    "type": "autocomplete",
                                    "serviceUrl": "reference/county/",
                                    "link": "carMainlyUsedArea",
                                    "trigger": {
                                        "expectedType": "object",
                                        "key": "carMainlyUsedArea",
                                        "name": "disabledBasedOnKey"
                                    },
                                    "autoCompleteType": "linked",
                                    "required": true,
                                    "disabled": false,
                                    "order": 9,
                                    "validators": []
                                },
                                {
                                    "key": "carKeptOvernight",
                                    "label": "Where is you car kept overnight?",
                                    "type": "dropdown",
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
                                    ],
                                    "required": true,
                                    "order": 10,
                                    "validators": []
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": "your-licence",
                    "title": "Licence",
                    "order": 1,
                    "uiOptions": {
                        "nextPage": "your-cover",
                        "prevPage": "your-car"
                    },
                    "templates": [
                        {
                            "id": "licence-template",
                            "type": "default",
                            "additional": true,
                            "hasQuestionsByDefault": true,
                            "fields": [
                                {
                                    "key": "typeOfLicence",
                                    "label": "What type of licence do you hold?",
                                    "type": "dropdown",
                                    "options": [
                                        {
                                            "id": "Full Irish Licence",
                                            "description": "Full Irish Licence"
                                        },
                                        {
                                            "id": "Irish Learners Permit",
                                            "description": "Irish Learners Permit"
                                        },
                                        {
                                            "id": "Full EU Licence",
                                            "description": "Full EU Licence"
                                        },
                                        {
                                            "id": "Non-EU Licence",
                                            "description": "Non-EU Licence"
                                        }
                                    ],
                                    "required": true,
                                    "disabled": false,
                                    "order": 0,
                                    "validators": [],
                                    "uiOptions": {
                                        "summaryTitle": "Type of Licence"
                                    }
                                },
                                {
                                    "key": "howLongLicenceHeld",
                                    "label": "How long have you held your licence?",
                                    "type": "slider",
                                    "required": true,
                                    "order": 1,
                                    "value": { "id": "0", "description": "0" },
                                    "values": [
                                        { "id": "0", "description": "0" },
                                        { "id": "1", "description": "1" },
                                        { "id": "2", "description": "2" },
                                        { "id": "3", "description": "3" },
                                        { "id": "4", "description": "4" },
                                        { "id": "5", "description": "5" },
                                        { "id": "6", "description": "6" },
                                        { "id": "7", "description": "7" },
                                        { "id": "8", "description": "8" },
                                        { "id": "9", "description": "9+" }
                                    ],
                                    "uiOptions": {
                                        "summaryTitle": "Amount of years you held your licence"
                                    }
                                },
                                {
                                    "key": "whereEarnLicence",
                                    "label": "Where did you earn your licence?",
                                    "placeholder": "Please enter a country",
                                    "type": "autocomplete",
                                    "serviceUrl": "reference/country/",
                                    "autoCompleteType": "search",
                                    "required": true,
                                    "disabled": false,
                                    "order": 2,
                                    "validators": [],
                                    "uiOptions": {
                                        "summaryTitle": "Where did you earn your licence"
                                    }
                                }
                            ]
                        }
                    ],
                    "sections": [
                        {
                            "id": "licence-default",
                            "type": "default",
                            "isDriver": true,
                            "title": "Primary Driver",
                            "fields": [
                                {
                                    "key": "typeOfLicence",
                                    "label": "What type of licence do you hold?",
                                    "type": "dropdown",
                                    "options": [
                                        {
                                            "id": "Full Irish Licence",
                                            "description": "Full Irish Licence"
                                        },
                                        {
                                            "id": "Irish Learners Permit",
                                            "description": "Irish Learners Permit"
                                        },
                                        {
                                            "id": "Full EU Licence",
                                            "description": "Full EU Licence"
                                        },
                                        {
                                            "id": "Non-EU Licence",
                                            "description": "Non-EU Licence"
                                        }
                                    ],
                                    "required": true,
                                    "disabled": false,
                                    "order": 0,
                                    "validators": [],
                                    "uiOptions": {
                                        "summaryTitle": "Type of Licence"
                                    }
                                },
                                {
                                    "key": "howLongLicenceHeld",
                                    "label": "How long have you held your licence?",
                                    "type": "slider",
                                    "required": true,
                                    "order": 1,
                                    "value": { "id": "0", "description": "0" },
                                    "values": [
                                        { "id": "0", "description": "0" },
                                        { "id": "1", "description": "1" },
                                        { "id": "2", "description": "2" },
                                        { "id": "3", "description": "3" },
                                        { "id": "4", "description": "4" },
                                        { "id": "5", "description": "5" },
                                        { "id": "6", "description": "6" },
                                        { "id": "7", "description": "7" },
                                        { "id": "8", "description": "8" },
                                        { "id": "9", "description": "9+" }
                                    ],
                                    "uiOptions": {
                                        "summaryTitle": "Amount of years you held your licence"
                                    }
                                },
                                {
                                    "key": "whereEarnLicence",
                                    "label": "Where did you earn your licence?",
                                    "placeholder": "Please enter a country",
                                    "type": "autocomplete",
                                    "serviceUrl": "reference/country/",
                                    "autoCompleteType": "search",
                                    "required": true,
                                    "disabled": false,
                                    "order": 2,
                                    "validators": [],
                                    "uiOptions": {
                                        "summaryTitle": "Where did you earn your licence"
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": "your-cover",
                    "title": "Cover",
                    "order": 1,
                    "uiOptions": {
                        "nextPage": "your-claims",
                        "prevPage": "your-licence"
                    },
                    "sections": [
                        {
                            "id": "cover-default",
                            "type": "default",
                            "title": "Primary Driver",
                            "fields": [
                                {
                                    "key": "drivingExperience",
                                    "type": "group",
                                    "alignment": "none",
                                    "timeline": false,
                                    "order": 0,
                                    "isComplete": false,
                                    "fields": [
                                        {
                                            "key": "insuredInYourOwnName",
                                            "label": "Have you been insured in your own name within the last two years?",
                                            "type": "radio",
                                            "order": 0,
                                            "helpId": 1001,
                                            "trigger": {
                                                "key": "insuredNamedDriver",
                                                "name": "hideBasedOnKey",
                                                "isObject": true
                                            },
                                            "options": [
                                                {
                                                    "id": true,
                                                    "description": "Yes"
                                                },
                                                {
                                                    "id": false,
                                                    "description": "No"
                                                }
                                            ],
                                            "required": true,
                                            "uiOptions": {
                                                "summaryTitle": "Insured in your own Name"
                                            }
                                        },
                                        {
                                            "key": "insuredNamedDriver",
                                            "label": "Have you been a named driver on someone else’s policy?",
                                            "type": "radio",
                                            "order": 0,
                                            "trigger": {
                                                "key": "insuredInYourOwnName",
                                                "name": "hideBasedOnKey",
                                                "isObject": true
                                            },
                                            "options": [
                                                {
                                                    "id": true,
                                                    "description": "Yes"
                                                },
                                                {
                                                    "id": false,
                                                    "description": "No"
                                                }
                                            ],
                                            "required": true,
                                            "uiOptions": {
                                                "summaryTitle": "Named Driver"
                                            }
                                        },
                                        {
                                            "key": "insuredNamedDriverOnPolicy",
                                            "label": "On whose policy",
                                            "helpId": 1001,
                                            "type": "dropdown",
                                            "trigger": {
                                                "key": "insuredNamedDriver",
                                                "name": "showBasedOnKey",
                                                "isObject": true
                                            },
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
                                            ],
                                            "required": true,
                                            "order": 1,
                                            "validators": [],
                                            "uiOptions": {
                                                "summaryTitle": "On who's policy"
                                            }
                                        },
                                        {
                                            "key": "insuranceCompany",
                                            "label": "Which is your current insurance company?",
                                            "type": "dropdown",
                                            "trigger": {
                                                "key1": "insuredInYourOwnName",
                                                "key2": "insuredNamedDriver",
                                                "name": "showDualKey",
                                                "isObject": true
                                            },
                                            "options": [
                                                {
                                                    "id": "ARB Underwriting Ltd",
                                                    "description": "ARB Underwriting Ltd"
                                                },
                                                {
                                                    "id": "AXA Broker",
                                                    "description": "AXA Broker"
                                                },
                                                {
                                                    "id": "AXA Direct",
                                                    "description": "AXA Direct"
                                                },
                                                {
                                                    "id": "AXA Insurance",
                                                    "description": "AXA Insurance"
                                                },
                                                {
                                                    "id": "Allianz",
                                                    "description": "Allianz"
                                                },
                                                {
                                                    "id": "Asgard",
                                                    "description": "Asgard"
                                                },
                                                {
                                                    "id": "Aviva",
                                                    "description": "Aviva"
                                                },
                                                {
                                                    "id": "Chartis Insurance",
                                                    "description": "Chartis Insurance"
                                                },
                                                {
                                                    "id": "Chubb Insurance",
                                                    "description": "Chubb Insurance"
                                                },
                                                {
                                                    "id": "Cigna Insurance of Europe",
                                                    "description": "Cigna Insurance of Europe"
                                                },
                                                {
                                                    "id": "Cornhill",
                                                    "description": "Cornhill"
                                                },
                                                {
                                                    "id": "Ecclesiastical Insurance Office Plc",
                                                    "description": "Ecclesiastical Insurance Office Plc"
                                                },
                                                {
                                                    "id": "Europa General",
                                                    "description": "Europa General"
                                                },
                                                {
                                                    "id": "FBD Insurance",
                                                    "description": "FBD Insurance"
                                                },
                                                {
                                                    "id": "FC Rebroked AXA Broker",
                                                    "description": "FC Rebroked AXA Broker"
                                                },
                                                {
                                                    "id": "First Call Direct",
                                                    "description": "First Call Direct"
                                                },
                                                {
                                                    "id": "Generali Insurance",
                                                    "description": "Generali Insurance"
                                                },
                                                {
                                                    "id": "Kennco Underwriting Ltd",
                                                    "description": "Kennco Underwriting Ltd"
                                                },
                                                {
                                                    "id": "Liberty Underwriting",
                                                    "description": "Liberty Underwriting"
                                                },
                                                {
                                                    "id": "One Direct",
                                                    "description": "One Direct"
                                                },
                                                {
                                                    "id": "Prestige Underwriting Services",
                                                    "description": "Prestige Underwriting Services"
                                                },
                                                {
                                                    "id": "Provident Insurance",
                                                    "description": "Provident Insurance"
                                                },
                                                {
                                                    "id": "Quinn Direct",
                                                    "description": "Quinn Direct"
                                                },
                                                {
                                                    "id": "RSA Insurance Ireland",
                                                    "description": "RSA Insurance Ireland"
                                                },
                                                {
                                                    "id": "Sertus Underwriting",
                                                    "description": "Sertus Underwriting"
                                                },
                                                {
                                                    "id": "Setanta Insurance",
                                                    "description": "Setanta Insurance"
                                                },
                                                {
                                                    "id": "Torch",
                                                    "description": "Torch"
                                                },
                                                {
                                                    "id": "Travelers Insurance",
                                                    "description": "Travelers Insurance"
                                                },
                                                {
                                                    "id": "Unlisted Insurer - Ireland",
                                                    "description": "Unlisted Insurer - Ireland"
                                                },
                                                {
                                                    "id": "Unlisted Insurer - Not Ireland",
                                                    "description": "Unlisted Insurer - Not Ireland"
                                                },
                                                {
                                                    "id": "Wright Way Underwriting",
                                                    "description": "Wright Way Underwriting"
                                                },
                                                {
                                                    "id": "XS Direct",
                                                    "description": "XS Direct"
                                                },
                                                {
                                                    "id": "Zurich",
                                                    "description": "Zurich"
                                                }
                                            ],
                                            "required": true,
                                            "order": 2,
                                            "validators": [],
                                            "uiOptions": {
                                                "summaryTitle": "Current Insurance Company"
                                            }
                                        },
                                        {
                                            "key": "drivingExperienceType",
                                            "label": "Type of driving experience",
                                            "type": "dropdown",
                                            "trigger": {
                                                "key": "insuredNamedDriver",
                                                "name": "showBasedOnKey",
                                                "isObject": true
                                            },
                                            "required": true,
                                            "options": []
                                        },
                                        {
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
                                            "value": { "id": "0", "description": "0" },
                                            "values": [
                                                { "id": "0", "description": "0" },
                                                { "id": "1", "description": "1" },
                                                { "id": "2", "description": "2" },
                                                { "id": "3", "description": "3" },
                                                { "id": "4", "description": "4" },
                                                { "id": "5", "description": "5" },
                                                { "id": "6", "description": "6" },
                                                { "id": "7", "description": "7" },
                                                { "id": "8", "description": "8" },
                                                { "id": "9", "description": "9+" }
                                            ],
                                            "uiOptions": {
                                                "summaryTitle": "Amount of Years No Claims Bonus"
                                            }
                                        },
                                        {
                                            "key": "countryNamedDrivingExperience",
                                            "label": "In what country did you earn your named driving experience?",
                                            "type": "autocomplete",
                                            "placeholder": "Please enter a country",
                                            "serviceUrl": "reference/country/",
                                            "trigger": {
                                                "key": "insuredNamedDriver",
                                                "name": "showBasedOnKey",
                                                "isObject": true
                                            },
                                            "autoCompleteType": "search",
                                            "options": [
                                                {
                                                    "id": "Dublin",
                                                    "description": "Dublin"
                                                },
                                                {
                                                    "id": "Cork",
                                                    "description": "cork"
                                                }
                                            ],
                                            "required": true,
                                            "disabled": false,
                                            "order": 2,
                                            "validators": [],
                                            "uiOptions": {
                                                "summaryTitle": "Where did you earn your licence"
                                            }
                                        },
                                        {
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
                                        },
                                        {
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
                                            "value": { "id": "0", "description": "0" },
                                            "values": [
                                                { "id": "0", "description": "0" },
                                                { "id": "1", "description": "1" },
                                                { "id": "2", "description": "2" },
                                                { "id": "3", "description": "3" },
                                                { "id": "4", "description": "4" },
                                                { "id": "5", "description": "5" },
                                                { "id": "6", "description": "6" },
                                                { "id": "7", "description": "7" },
                                                { "id": "8", "description": "8" },
                                                { "id": "9", "description": "9+" }
                                            ],
                                            "uiOptions": {
                                                "summaryTitle": "Amount of Years No Claims Bonus"
                                            }
                                        },
                                        {
                                            "key": "whereNoClaimsBonus",
                                            "label": "Where did you earn your no claims bonus",
                                            "type": "autocomplete",
                                            "helpId": 1001,
                                            "placeholder": "Please enter a country",
                                            "serviceUrl": "reference/country/",
                                            "autoCompleteType": "search",
                                            "trigger": {
                                                "key": "insuredInYourOwnName",
                                                "name": "showBasedOnKey",
                                                "isObject": true
                                            },
                                            "required": true,
                                            "disabled": false,
                                            "order": 4,
                                            "validators": [],
                                            "uiOptions": {
                                                "summaryTitle": "Location no claims bonus was earned"
                                            }
                                        },
                                        {
                                            "key": "policyExpiryDate",
                                            "label": "When does your policy expire?",
                                            "type": "date",
                                            "helpId": 1001,
                                            "trigger": {
                                                "key": "insuredInYourOwnName",
                                                "name": "showBasedOnKey",
                                                "isObject": true
                                            },
                                            "required": true,
                                            "disabled": false,
                                            "order": 5,
                                            "validators": [
                                                "validDateValidate"
                                            ],
                                            "uiOptions": {
                                                "summaryTitle": "Policy Expiration Date"
                                            }
                                        }
                                    ]
                                },
                                {
                                    "key": "policyStartDate",
                                    "label": "What date would you like to start your policy from?",
                                    "type": "date",
                                    "order": 7,
                                    "required": true
                                },
                                {
                                    "key": "levelOfCover",
                                    "label": "What level of cover do you need?",
                                    "type": "radio",
                                    "alignment": "vertical",
                                    "order": 8,
                                    "options": [
                                        {
                                            "id": "COMPREHENSIVE",
                                            "description": "Comprehensive"
                                        },
                                        {
                                            "id": "THIRDPARTY",
                                            "description": "Third Party, Fire and Theft"
                                        }
                                    ],
                                    "required": true,
                                    "uiOptions": {
                                        "summaryTitle": "Level of Cover"
                                    }
                                },
                                {
                                    "key": "levelOfNoClaimsBonus",
                                    "label": "What level of no claims bonus protection do you require?",
                                    "type": "radio",
                                    "helpId": 1001,
                                    "order": 9,
                                    "options": [
                                        {
                                            "id": "Full",
                                            "description": "Full"
                                        },
                                        {
                                            "id": "StepBack",
                                            "description": "Step Back"
                                        }
                                    ],
                                    "required": true,
                                    "uiOptions": {
                                        "summaryTitle": "Level of no claims bonus"
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": "your-claims",
                    "title": "Claims",
                    "order": 1,
                    "helpId": "213679469",
                    "uiOptions": {
                        "nextPage": "your-penalties",
                        "prevPage": "your-cover"
                    },
                    "templates": [
                        {
                            "id": "claim-template",
                            "type": "claim",
                            "userHasClaim": null,
                            "additional": true,
                            "fields": [
                                {
                                    "key": "dateOfClaim",
                                    "label": "Date of claim",
                                    "type": "date",
                                    "required": true,
                                    "disabled": false,
                                    "order": 0,
                                    "validators": [
                                        "validDateValidate",
                                        "validLastFiveYearsValidate"
                                    ],
                                    "uiOptions": {
                                        "summaryTitle": "Date of Claim"
                                    }
                                },
                                {
                                    "key": "reasonForClaim",
                                    "label": "What was the reason for the claim?",
                                    "type": "dropdown",
                                    "options": [
                                        {
                                            "id": "Accident",
                                            "description": "Accident"
                                        },
                                        {
                                            "id": "Accidental Damage",
                                            "description": "Accidental Damage"
                                        },
                                        {
                                            "id": "Fire",
                                            "description": "Fire"
                                        },
                                        {
                                            "id": "Malicious Damage As A Result Of Theft",
                                            "description": "Malicious Damage As A Result Of Theft"
                                        },
                                        {
                                            "id": "Personal Accident",
                                            "description": "Personal Accident"
                                        },
                                        {
                                            "id": "Personal Effects",
                                            "description": "Personal Effects"
                                        },
                                        {
                                            "id": "Theft",
                                            "description": "Theft"
                                        },
                                        {
                                            "id": "Third Party",
                                            "description": "Third Party"
                                        },
                                        {
                                            "id": "Vandalism",
                                            "description": "Vandalism"
                                        },
                                        {
                                            "id": "Windscreen",
                                            "description": "Windscreen"
                                        }
                                    ],
                                    "required": true,
                                    "order": 0,
                                    "validators": [],
                                    "uiOptions": {
                                        "summaryTitle": "Reason for Claim"
                                    }
                                },
                                {
                                    "key": "isClaimSettled",
                                    "label": "Is the claim settled?",
                                    "type": "radio",
                                    "options": [
                                        {
                                            "id": true,
                                            "description": "Yes"
                                        },
                                        {
                                            "id": false,
                                            "description": "No"
                                        }
                                    ],
                                    "required": true,
                                    "order": 0,
                                    "validators": [],
                                    "uiOptions": {
                                        "summaryTitle": "Reason for Claim"
                                    }
                                },
                                {
                                    "key": "thirdPartyInjuries",
                                    "label": "Were there any third party injuries?",
                                    "type": "radio",
                                    "options": [
                                        {
                                            "id": true,
                                            "description": "Yes"
                                        },
                                        {
                                            "id": false,
                                            "description": "No"
                                        }
                                    ],
                                    "required": true,
                                    "order": 0,
                                    "validators": [],
                                    "uiOptions": {
                                        "summaryTitle": "Reason for Claim"
                                    }
                                },
                                {
                                    "key": "costOfClaim",
                                    "label": "Cost of claim",
                                    "type": "currency",
                                    "required": true,
                                    "placeholder": "How Much",
                                    "order": 0,
                                    "uiOptions": {
                                        "summaryTitle": "Cost of Claim"
                                    }
                                },
                                {
                                    "key": "customerAtFault",
                                    "label": "Were you at fault?",
                                    "type": "radio",
                                    "helpId": 1001,
                                    "options": [
                                        {
                                            "id": true,
                                            "description": "Yes"
                                        },
                                        {
                                            "id": false,
                                            "description": "No"
                                        }
                                    ],
                                    "required": true,
                                    "order": 2,
                                    "validators": [],
                                    "uiOptions": {
                                        "summaryTitle": "Claim Fault"
                                    }
                                },
                                {
                                    "key": "noClaimsBonusProtected",
                                    "label": "Was your no claims bonus protected?",
                                    "type": "radio",
                                    "options": [
                                        {
                                            "id": true,
                                            "description": "Yes"
                                        },
                                        {
                                            "id": false,
                                            "description": "No"
                                        }
                                    ],
                                    "required": true,
                                    "order": 2,
                                    "validators": [],
                                    "uiOptions": {
                                        "summaryTitle": "No Claim Bonus Protected"
                                    }
                                }
                            ]
                        }
                    ],
                    "sections": [
                        {
                            "id": "claim-primary-driver",
                            "title": "Primary Driver",
                            "userHasClaim": null,
                            "isDriver": true,
                            "type": "claim",
                            "fields": []
                        }
                    ]
                },
                {
                    "id": "your-penalties",
                    "title": "Penalty Points",
                    "order": 1,
                    "uiOptions": {
                        "prevPage": "your-claims",
                        "nextPage": "choose-your-product"
                    },
                    "templates": [
                        {
                            "id": "penalty-template",
                            "type": "penalty",
                            "title": "Primary Driver",
                            "userHasPenalty": null,
                            "additional": true,
                            "fields": [
                                {
                                    "key": "dateOfPenalty",
                                    "label": "Date of Penalty",
                                    "type": "date",
                                    "required": true,
                                    "disabled": false,
                                    "order": 0,
                                    "validators": [
                                        "validDateValidate",
                                        "validLastThreeYearsValidate"
                                    ]
                                },
                                {
                                    "key": "reasonForPenalty",
                                    "label": "What was the reason?",
                                    "type": "dropdown",
                                    "options": [
                                        {
                                            "id": "Accident",
                                            "description": "Accident"
                                        },
                                        {
                                            "id": "Accidental Damage",
                                            "description": "Accidental Damage"
                                        },
                                        {
                                            "id": "Fire",
                                            "description": "Fire"
                                        },
                                        {
                                            "id": "Malicious Damage As A Result Of Theft",
                                            "description": "Malicious Damage As A Result Of Theft"
                                        },
                                        {
                                            "id": "Personal Accident",
                                            "description": "Personal Accident"
                                        },
                                        {
                                            "id": "Personal Effects",
                                            "description": "Personal Effects"
                                        },
                                        {
                                            "id": "Theft",
                                            "description": "Theft"
                                        },
                                        {
                                            "id": "Third Party",
                                            "description": "Third Party"
                                        },
                                        {
                                            "id": "Vandalism",
                                            "description": "Vandalism"
                                        },
                                        {
                                            "id": "Windscreen",
                                            "description": "Windscreen"
                                        }
                                    ],
                                    "required": true,
                                    "order": 0,
                                    "validators": []
                                },
                                {
                                    "key": "howManyPoints",
                                    "label": "How many points?",
                                    "type": "text",
                                    "required": true,
                                    "placeholder": "How many?",
                                    "order": 0
                                }
                            ]
                        }
                    ],
                    "sections": [
                        {
                            "id": "penalty-primary-driver",
                            "title": "Primary Driver",
                            "userHasPenalty": null,
                            "isDriver": true,
                            "type": "penalty",
                            "fields": []
                        }
                    ]
                }
            ],
            "isComplete": false,
            "uiOptions": {}
        },
        {
            "id": "price-presentation",
            "title": "Get Quote",
            "pages": [
                {
                    "id": "choose-your-product",
                    "title": "Choose the best product for you",
                    "uiOptions": {
                        "prevPage": "your-penalties",
                        "nextPage": "choose-your-payment"
                    }
                },
                {
                    "id": "choose-your-payment",
                    "title": "Choose your payment",
                    "uiOptions": {
                        "prevPage": "choose-your-product",
                        "nextPage": "additional-questions"
                    }
                }
            ],
            "isComplete": false,
            "uiOptions": {
                "isWide": true,
                "isPagesHidden": true
            }
        },
        {
            "id": "payments",
            "title": "Payment",
            "pages": [
                {
                    "id": "additional-questions",
                    "title": "Additional Questions",
                    "uiOptions": {
                        "nextPage": "payment",
                        "prevPage": "choose-your-payment"
                    },
                    "templates": [],
                    "sections": [
                        {
                            "id": "additional-questions",
                            "type": "default",
                            "isDriver": true,
                            "fields": [
                                {
                                    "key": "areYouCardholder",
                                    "helpId": "213679469",
                                    "label": "Are you the Cardholder?",
                                    "type": "radio",
                                    "options": [
                                        {
                                            "id": true,
                                            "description": "Yes"
                                        },
                                        {
                                            "id": false,
                                            "description": "No"
                                        }
                                    ],
                                    "required": true,
                                    "value": "Yes",
                                    "order": 2,
                                    "validators": []
                                },
                                {
                                    "key": "driverLicenceNumber",
                                    "helpId": "213679469",
                                    "label": "What is your Drivers Licence number?",
                                    "type": "text",
                                    "required": false,
                                    "disabled": false,
                                    "validators": ["licenceNumberValidate"],
                                    "trigger": {
                                        "name": "getValueForValidationFromQuestion",
                                        "key": "typeOfLicence",
                                        "value": "FullIrish"
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": "payment",
                    "title": "Payment",
                    "uiOptions": {
                        "prevPage": "additional-questions",
                        "nextPage": "confirmation"
                    }
                }
            ],
            "isComplete": false,
            "uiOptions": {
                "isWide": true,
                "isPagesHidden": true
            }
        },
        {
            "id": "confirmation",
            "title": "Confirmation",
            "pages": [
                {
                    "id": "confirmation",
                    "title": "Confirmation",
                    "uiOptions": {
                        "prevPage": "payment",
                        "isSummaryHidden": true,
                        "isTimelineHidden": true
                    }
                }
            ],
            "isComplete": false,
            "uiOptions": {
                "isWide": true,
                "isProgressHidden": true,
                "isSummaryHidden": true,
                "isHelpCenterHidden": true,
                "isHeaderExtended": true,
                "isPagesHidden": true
            }
        }
    ]
};

//# sourceMappingURL=data:application/json;base64,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QU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFO2dEQUNuQyxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRTtnREFDdkMsRUFBRSxFQUFFLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUU7Z0RBQzdDLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFO2dEQUN2QyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE9BQU8sRUFBRTtnREFDckMsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUU7Z0RBQ3pDLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFO2dEQUMzQyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE9BQU8sRUFBRTtnREFDckMsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUU7Z0RBQ3pDLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFO2dEQUMzQyxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRTtnREFDM0MsRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxPQUFPLEVBQUU7Z0RBQ3JDLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFO2dEQUNuQyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE9BQU8sRUFBRTtnREFDckMsRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUU7Z0RBQzNDLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFO2dEQUN2QyxFQUFFLEVBQUUsRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRTtnREFDN0MsRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFB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O29DQUNsQixTQUFTLEVBQUU7d0NBQ1AsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUU7d0NBQ3ZDLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFO3dDQUN2QyxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRTt3Q0FDdkMsRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxPQUFPLEVBQUU7d0NBQ3JDLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFO3dDQUNyQyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRTt3Q0FDbkMsRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxPQUFPLEVBQUU7d0NBQ3JDLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFO3dDQUN6QyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRTt3Q0FDbkMsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUU7d0NBQ3ZDLEVBQUUsRUFBRSxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFO3dDQUM3QyxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRTt3Q0FDdkMsRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxPQUFPLEVBQUU7d0NBQ3JDLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFO3dDQUN6QyxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRTt3Q0FDM0MsRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxPQUFPLEVBQUU7d0NBQ3JDLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFF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USxFQUFFLFdBQVc7b0NBQ3JCLE9BQU8sRUFBRSx5QkFBeUI7b0NBQ2xDLE1BQU0sRUFBRSxPQUFPO29DQUNmLFNBQVMsRUFBRTt3Q0FDUDs0Q0FDSSxJQUFJLEVBQUUsSUFBSTs0Q0FDVixhQUFhLEVBQUUsS0FBSzt5Q0FDdkI7d0NBQ0Q7NENBQ0ksSUFBSSxFQUFFLEtBQUs7NENBQ1gsYUFBYSxFQUFFLElBQUk7eUNBQ3RCO3FDQUNKO29DQUNELFVBQVUsRUFBRSxJQUFJO29DQUNoQixPQUFPLEVBQUUsS0FBSztvQ0FDZCxPQUFPLEVBQUUsQ0FBQztvQ0FDVixZQUFZLEVBQUUsRUFBRTtpQ0FDbkI7Z0NBQ0Q7b0NBQ0ksS0FBSyxFQUFFLHFCQUFxQjtvQ0FDNUIsUUFBUSxFQUFFLFdBQVc7b0NBQ3JCLE9BQU8sRUFBRSxzQ0FBc0M7b0NBQy9DLE1BQU0sRUFBRSxNQUFNO29DQUNkLFVBQVUsRUFBRSxLQUFLO29DQUNqQixVQUFVLEVBQUUsS0FBSztvQ0FDakIsWUFBWSxFQUFFLENBQUMsdUJBQXVCLENBQUM7b0NBQ3ZDLFNBQVMsRUFBRTt3Q0FDUCxNQUFNLEVBQUUsbUNBQW1DO3dDQUMzQyxLQUFLLEVBQUUsZUFBZTt3Q0FDdEIsT0FBTyxFQUFFLFdBQVc7cUNBQ3ZCO2lDQUNKOzZCQUNKO3lCQUNKO3FCQUNKO2lCQUNKO2dCQUNEO29CQUNJLElBQUksRUFBRSxTQUFTO29CQUNmLE9BQU8sRUFBRSxTQUFTO29CQUNsQixXQUFXLEVBQUU7d0JBQ1QsVUFBVSxFQUFFLHNCQUFzQjt3QkFDbEMsVUFBVSxFQUFFLGNBQWM7cUJBQzdCO2lCQUNKO2FBQ0o7WUFDRCxZQUFZLEVBQUUsS0FBSztZQUNuQixXQUFXLEVBQUU7Z0JBQ1QsUUFBUSxFQUFFLElBQUk7Z0JBQ2QsZUFBZSxFQUFFLElBQUk7YUFDeEI7U0FDSjtRQUNEO1lBQ0ksSUFBSSxFQUFFLGNBQWM7WUFDcEIsT0FBTyxFQUFFLGNBQWM7WUFDdkIsT0FBTyxFQUFFO2dCQUNMO29CQUNJLElBQUksRUFBRSxjQUFjO29CQUNwQixPQUFPLEVBQUUsY0FBYztvQkFDdkIsV0FBVyxFQUFFO3dCQUNULFVBQVUsRUFBRSxTQUFTO3dCQUNyQixpQkFBaUIsRUFBRSxJQUFJO3dCQUN2QixrQkFBa0IsRUFBRSxJQUFJO3FCQUMzQjtpQkFDSjthQUNKO1lBQ0QsWUFBWSxFQUFFLEtBQUs7WUFDbkIsV0FBVyxFQUFFO2dCQUNULFFBQVEsRUFBRSxJQUFJO2dCQUNkLGtCQUFrQixFQUFFLElBQUk7Z0JBQ3hCLGlCQUFpQixFQUFFLElBQUk7Z0JBQ3ZCLG9CQUFvQixFQUFFLElBQUk7Z0JBQzFCLGtCQUFrQixFQUFFLElBQUk7Z0JBQ3hCLGVBQWUsRUFBRSxJQUFJO2FBQ3hCO1NBQ0o7S0FDSjtDQUNKLENBQUEiLCJmaWxlIjoiY29uc3RhbnRzX2tlaXRoLmpzIiwic291cmNlc0NvbnRlbnQiOltudWxsXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
