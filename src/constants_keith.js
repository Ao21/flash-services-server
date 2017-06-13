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

//# sourceMappingURL=data:application/json;base64,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LEVBQUU7Z0RBQ25DLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFO2dEQUN2QyxFQUFFLEVBQUUsRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRTtnREFDN0MsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUU7Z0RBQ3ZDLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFO2dEQUNyQyxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRTtnREFDekMsRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUU7Z0RBQzNDLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFO2dEQUNyQyxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRTtnREFDekMsRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUU7Z0RBQzNDLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFO2dEQUMzQyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE9BQU8sRUFBRTtnREFDckMsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUU7Z0RBQ25DLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFO2dEQUNyQyxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRTtnREFDM0MsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUU7Z0RBQ3ZDLEVBQUUsRUFBRSxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFO2dEQUM3QyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE9BQU8sRUFBRTtnREFDckMsRUFB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UCxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRTt3Q0FDdkMsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUU7d0NBQ3ZDLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFO3dDQUN2QyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE9BQU8sRUFBRTt3Q0FDckMsRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxPQUFPLEVBQUU7d0NBQ3JDLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFO3dDQUNuQyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE9BQU8sRUFBRTt3Q0FDckMsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUU7d0NBQ3pDLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFO3dDQUNuQyxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRTt3Q0FDdkMsRUFBRSxFQUFFLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUU7d0NBQzdDLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFO3dDQUN2QyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE9BQU8sRUFBRTt3Q0FDckMsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUU7d0NBQ3pDLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFO3dDQUMzQyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE9BQU8sRUFBRTt3Q0FDckMsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUU7d0NBQ3pDLEVBQUUsRUFBRSxFQUFF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QVMsRUFBRTt3Q0FDUDs0Q0FDSSxJQUFJLEVBQUUsSUFBSTs0Q0FDVixhQUFhLEVBQUUsS0FBSzt5Q0FDdkI7d0NBQ0Q7NENBQ0ksSUFBSSxFQUFFLEtBQUs7NENBQ1gsYUFBYSxFQUFFLElBQUk7eUNBQ3RCO3FDQUNKO29DQUNELFVBQVUsRUFBRSxJQUFJO29DQUNoQixPQUFPLEVBQUUsS0FBSztvQ0FDZCxPQUFPLEVBQUUsQ0FBQztvQ0FDVixZQUFZLEVBQUUsRUFBRTtpQ0FDbkI7Z0NBQ0Q7b0NBQ0ksS0FBSyxFQUFFLHFCQUFxQjtvQ0FDNUIsT0FBTyxFQUFFLHNDQUFzQztvQ0FDL0MsTUFBTSxFQUFFLE1BQU07b0NBQ2QsVUFBVSxFQUFFLEtBQUs7b0NBQ2pCLFVBQVUsRUFBRSxLQUFLO29DQUNqQixZQUFZLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztvQ0FDdkMsU0FBUyxFQUFFO3dDQUNQLE1BQU0sRUFBRSxtQ0FBbUM7d0NBQzNDLEtBQUssRUFBRSxlQUFlO3dDQUN0QixPQUFPLEVBQUUsV0FBVztxQ0FDdkI7aUNBQ0o7NkJBQ0o7eUJBQ0o7cUJBQ0o7aUJBQ0o7Z0JBQ0Q7b0JBQ0ksSUFBSSxFQUFFLFNBQVM7b0JBQ2YsT0FBTyxFQUFFLFNBQVM7b0JBQ2xCLFdBQVcsRUFBRTt3QkFDVCxVQUFVLEVBQUUsc0JBQXNCO3dCQUNsQyxVQUFVLEVBQUUsY0FBYztxQkFDN0I7aUJBQ0o7YUFDSjtZQUNELFlBQVksRUFBRSxLQUFLO1lBQ25CLFdBQVcsRUFBRTtnQkFDVCxRQUFRLEVBQUUsSUFBSTtnQkFDZCxlQUFlLEVBQUUsSUFBSTthQUN4QjtTQUNKO1FBQ0Q7WUFDSSxJQUFJLEVBQUUsY0FBYztZQUNwQixPQUFPLEVBQUUsY0FBYztZQUN2QixPQUFPLEVBQUU7Z0JBQ0w7b0JBQ0ksSUFBSSxFQUFFLGNBQWM7b0JBQ3BCLE9BQU8sRUFBRSxjQUFjO29CQUN2QixXQUFXLEVBQUU7d0JBQ1QsVUFBVSxFQUFFLFNBQVM7d0JBQ3JCLGlCQUFpQixFQUFFLElBQUk7d0JBQ3ZCLGtCQUFrQixFQUFFLElBQUk7cUJBQzNCO2lCQUNKO2FBQ0o7WUFDRCxZQUFZLEVBQUUsS0FBSztZQUNuQixXQUFXLEVBQUU7Z0JBQ1QsUUFBUSxFQUFFLElBQUk7Z0JBQ2Qsa0JBQWtCLEVBQUUsSUFBSTtnQkFDeEIsaUJBQWlCLEVBQUUsSUFBSTtnQkFDdkIsb0JBQW9CLEVBQUUsSUFBSTtnQkFDMUIsa0JBQWtCLEVBQUUsSUFBSTtnQkFDeEIsZUFBZSxFQUFFLElBQUk7YUFDeEI7U0FDSjtLQUNKO0NBQ0osQ0FBQSIsImZpbGUiOiJjb25zdGFudHNfa2VpdGguanMiLCJzb3VyY2VzQ29udGVudCI6W251bGxdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
