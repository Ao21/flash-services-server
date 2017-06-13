export const QUOTE = {
    "productConfig": {
        "uiOptions": {},
        "stages": [{
            "id": "quotation",
            "isComplete": false,
            "title": "Your Quote",
            "uiOptions": {},
            "pages": [{
                "id": "getting-started",
                "title": "Getting Started",
                "uiOptions": {
                    "nextPage": "your-details"
                },
                "order": 0,
                "sections": [{
                    "id": "pre-default",
                    "type": "default",
                    "uiOptions": {},
                    "fields": [{
                        "type": "myaaEmail",
                        "type": "myaaEmail",
                        "uiOptions": {
                            "summaryTitle": ""
                        },
                        "key": "email",
                        "label": "What is your Email Address?",
                        "order": 0,
                        "required": true,
                        "validators": ["validEmailValidate"],
                        "value": "testemail@theaa.ie"
                    }, {
                        "type": "memberSelector",
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
                    }, {
                        "type": "questionText",
                        "type": "questionText",
                        "uiOptions": {
                            "summaryHidden": "true"
                        },
                        "key": "termsConditions",
                        "label": "Terms and Conditions",
                        "order": 2,
                        "timeline": false,
                        "value": true,
                        "content": "By providing the requested data, you consent to AA's Data Protection and Privacy Policy and to AA using it for administration and keeping you informed by mail, telephone, email and SMS of other products and services from us. By proceeding, you consent to & confirm that you have read and accepted the AA Data Protection & Privacy Policy and the AA Terms & Conditions"
                    }]
                }]
            }, {
                "id": "your-details",
                "title": "Details",
                "uiOptions": {
                    "nextPage": "your-address",
                    "prevPage": "getting-started"
                },
                "order": 1,
                "sections": [{
                    "type": "default",
                    "uiOptions": {},
                    "fields": [{
                        "type": "radio",
                        "type": "radio",
                        "uiOptions": {
                            "summaryTitle": "Email"
                        },
                        "key": "title",
                        "label": "Title",
                        "order": 0,
                        "required": true,
                        "value": "Mr"
                    }, {
                        "type": "text",
                        "type": "text",
                        "helpId": 214205625,
                        "uiOptions": {
                            "summaryTitle": "First Name"
                        },
                        "key": "firstName",
                        "label": "First Name",
                        "order": 0,
                        "required": true,
                        "value": "Adam"
                    }, {
                        "type": "text",
                        "type": "text",
                        "helpId": 213679469,
                        "uiOptions": {
                            "summaryTitle": "Last Name"
                        },
                        "key": "lastName",
                        "label": "Last Name",
                        "order": 1,
                        "required": true,
                        "value": "Mccollum"
                    }, {
                        "type": "date",
                        "type": "date",
                        "helpId": 213685289,
                        "uiOptions": {
                            "summaryTitle": "Date of Birth"
                        },
                        "key": "dateOfBirth",
                        "label": "Date Of Birth",
                        "order": 2,
                        "required": true,
                        "validators": ["validDateValidate", "validOverEighteenValidate"],
                        "disabled": false,
                        "value": 677458800000
                    }, {
                        "type": "tel",
                        "type": "tel",
                        "helpId": 214224585,
                        "uiOptions": {
                            "summaryTitle": "Phone Number"
                        },
                        "key": "phoneNumber",
                        "label": "Contact Number",
                        "order": 2,
                        "required": true,
                        "validators": ["validPhoneNumberValidate"],
                        "disabled": false,
                        "value": "00353872782781"
                    }, {
                        "type": "dropdown",
                        "type": "dropdown",
                        "helpId": 1001,
                        "uiOptions": {
                            "summaryTitle": "On who's policy"
                        },
                        "key": "relationToMainDriver",
                        "label": "Relationship to Main Driver",
                        "order": 1,
                        "required": true,
                        "validators": [],
                        "options": [{
                            "id": "Brother",
                            "description": "Brother"
                        }, {
                            "id": "BrotherInLaw",
                            "description": "Brother in Law"
                        }, {
                            "id": "BusinessPartner",
                            "description": "Business Partner"
                        }, {
                            "id": "CommonLawSpouse",
                            "description": "Common Law Spouse"
                        }, {
                            "id": "Daughter",
                            "description": "Daughter"
                        }, {
                            "id": "DaughterInLaw",
                            "description": "Daughter in Law"
                        }, {
                            "id": "EmployeeOfProposer",
                            "description": "Employee of Proposer"
                        }, {
                            "id": "EmployerOfProposer",
                            "description": "Employer of Proposer"
                        }, {
                            "id": "FatherInLaw",
                            "description": "Father in Law"
                        }, {
                            "id": "MotherInLaw",
                            "description": "Mother in Law"
                        }, {
                            "id": "Parent",
                            "description": "Parent"
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
                            "id": "SisterInLaw",
                            "description": "Sister in Law"
                        }, {
                            "id": "Son",
                            "description": "Son"
                        }, {
                            "id": "SonInLaw",
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
                        }, {
                            "id": "Partner",
                            "description": "Partner"
                        }, {
                            "id": "Friend",
                            "description": "Friend"
                        }]
                    }, {
                        "type": "dropdown",
                        "type": "dropdown",
                        "uiOptions": {
                            "summaryTitle": "Type of Employment"
                        },
                        "key": "typeOfEmployment",
                        "label": "Type of Employment",
                        "order": 2,
                        "required": true,
                        "validators": [],
                        "value": {
                            "id": "Employed",
                            "description": "Employed"
                        }
                    }, {
                        "type": "autocomplete",
                        "type": "autocomplete",
                        "helpId": 1001,
                        "uiOptions": {
                            "summaryTitle": "Occupation"
                        },
                        "key": "occupation",
                        "label": "What is your Occupation?",
                        "order": 2,
                        "required": true,
                        "trigger": {
                            "key": "typeOfEmployment",
                            "equals": ["Unemployed", "Retired"],
                            "name": "hideIfKeyEqualsMulti"
                        },
                        "validators": [],
                        "disabled": false,
                        "value": {
                            "id": "SoftwareDeveloper",
                            "description": "Software Developer"
                        },
                        "placeholder": "Select an Occupation",
                        "serviceUrl": "reference/occupation/",
                        "autoCompleteType": "all"
                    }, {
                        "type": "autocomplete",
                        "type": "autocomplete",
                        "uiOptions": {
                            "summaryTitle": "Type of business"
                        },
                        "key": "business",
                        "label": "Type of Business",
                        "order": 2,
                        "required": true,
                        "trigger": {
                            "key": "typeOfEmployment",
                            "equals": ["Unemployed", "Retired"],
                            "name": "hideIfKeyEqualsMulti"
                        },
                        "validators": [],
                        "value": {
                            "id": "Accountancy",
                            "description": "Accountancy"
                        },
                        "placeholder": "Select an Area of Business",
                        "serviceUrl": "reference/employerBusinessType/",
                        "autoCompleteType": "all"
                    }, {
                        "type": "radio",
                        "type": "radio",
                        "uiOptions": {},
                        "key": "livedOutsideIreland",
                        "label": "Have you lived outside of Ireland or the UK in the past 12 months?",
                        "order": 2,
                        "required": true,
                        "validators": [],
                        "value": {
                            "id": false,
                            "description": "No"
                        }
                    }]
                }],
                "templates": [{
                    "id": "driver-template",
                    "type": "default",
                    "uiOptions": {},
                    "hasQuestionsByDefault": true,
                    "additional": true,
                    "fields": [{
                        "type": "radio",
                        "type": "radio",
                        "uiOptions": {
                            "summaryTitle": "Email"
                        },
                        "key": "title",
                        "label": "Title",
                        "order": 0,
                        "required": true
                    }, {
                        "type": "text",
                        "type": "text",
                        "helpId": 214205625,
                        "uiOptions": {
                            "summaryTitle": "First Name"
                        },
                        "key": "firstName",
                        "label": "First Name",
                        "order": 0,
                        "required": true
                    }, {
                        "type": "text",
                        "type": "text",
                        "helpId": 213679469,
                        "uiOptions": {
                            "summaryTitle": "Last Name"
                        },
                        "key": "lastName",
                        "label": "Last Name",
                        "order": 1,
                        "required": true
                    }, {
                        "type": "date",
                        "type": "date",
                        "helpId": 213685289,
                        "uiOptions": {
                            "summaryTitle": "Date of Birth"
                        },
                        "key": "dateOfBirth",
                        "label": "Date Of Birth",
                        "order": 2,
                        "required": true,
                        "validators": ["validDateValidate", "validOverEighteenValidate"],
                        "disabled": false
                    }, {
                        "type": "tel",
                        "type": "tel",
                        "helpId": 214224585,
                        "uiOptions": {
                            "summaryTitle": "Phone Number"
                        },
                        "key": "phoneNumber",
                        "label": "Contact Number",
                        "order": 2,
                        "required": true,
                        "validators": ["validPhoneNumberValidate"],
                        "disabled": false
                    }, {
                        "type": "dropdown",
                        "type": "dropdown",
                        "helpId": 1001,
                        "uiOptions": {
                            "summaryTitle": "On who's policy"
                        },
                        "key": "relationToMainDriver",
                        "label": "Relationship to Main Driver",
                        "order": 1,
                        "required": true,
                        "validators": [],
                        "options": [{
                            "id": "Brother",
                            "description": "Brother"
                        }, {
                            "id": "BrotherInLaw",
                            "description": "Brother in Law"
                        }, {
                            "id": "BusinessPartner",
                            "description": "Business Partner"
                        }, {
                            "id": "CommonLawSpouse",
                            "description": "Common Law Spouse"
                        }, {
                            "id": "Daughter",
                            "description": "Daughter"
                        }, {
                            "id": "DaughterInLaw",
                            "description": "Daughter in Law"
                        }, {
                            "id": "EmployeeOfProposer",
                            "description": "Employee of Proposer"
                        }, {
                            "id": "EmployerOfProposer",
                            "description": "Employer of Proposer"
                        }, {
                            "id": "FatherInLaw",
                            "description": "Father in Law"
                        }, {
                            "id": "MotherInLaw",
                            "description": "Mother in Law"
                        }, {
                            "id": "Parent",
                            "description": "Parent"
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
                            "id": "SisterInLaw",
                            "description": "Sister in Law"
                        }, {
                            "id": "Son",
                            "description": "Son"
                        }, {
                            "id": "SonInLaw",
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
                        }, {
                            "id": "Partner",
                            "description": "Partner"
                        }, {
                            "id": "Friend",
                            "description": "Friend"
                        }]
                    }, {
                        "type": "dropdown",
                        "type": "dropdown",
                        "uiOptions": {
                            "summaryTitle": "Type of Employment"
                        },
                        "key": "typeOfEmployment",
                        "label": "Type of Employment",
                        "order": 2,
                        "required": true,
                        "validators": []
                    }, {
                        "type": "autocomplete",
                        "type": "autocomplete",
                        "helpId": 1001,
                        "uiOptions": {
                            "summaryTitle": "Occupation"
                        },
                        "key": "occupation",
                        "label": "What is your Occupation?",
                        "order": 2,
                        "required": true,
                        "trigger": {
                            "key": "typeOfEmployment",
                            "equals": ["Unemployed", "Retired"],
                            "name": "hideIfKeyEqualsMulti"
                        },
                        "validators": [],
                        "disabled": false,
                        "placeholder": "Select an Occupation",
                        "serviceUrl": "reference/occupation/",
                        "autoCompleteType": "all"
                    }, {
                        "type": "autocomplete",
                        "type": "autocomplete",
                        "uiOptions": {
                            "summaryTitle": "Type of business"
                        },
                        "key": "business",
                        "label": "Type of Business",
                        "order": 2,
                        "required": true,
                        "trigger": {
                            "key": "typeOfEmployment",
                            "equals": ["Unemployed", "Retired"],
                            "name": "hideIfKeyEqualsMulti"
                        },
                        "validators": [],
                        "placeholder": "Select an Area of Business",
                        "serviceUrl": "reference/employerBusinessType/",
                        "autoCompleteType": "all"
                    }, {
                        "type": "radio",
                        "type": "radio",
                        "uiOptions": {},
                        "key": "livedOutsideIreland",
                        "label": "Have you lived outside of Ireland or the UK in the past 12 months?",
                        "order": 2,
                        "required": true,
                        "validators": []
                    }]
                }]
            }, {
                "id": "your-address",
                "title": "Addresss",
                "uiOptions": {
                    "nextPage": "your-car",
                    "prevPage": "your-details"
                },
                "order": 1,
                "sections": [{
                    "id": "address-default",
                    "title": "Primary Driver",
                    "type": "address",
                    "uiOptions": {},
                    "fields": [{
                        "type": "group",
                        "key": "address",
                        "type": "group",
                        "isComplete": true,
                        "uiOptions": {},
                        "fields": [{
                            "type": "text",
                            "type": "text",
                            "uiOptions": {
                                "summaryTitle": "Address line 1"
                            },
                            "key": "addressLine1",
                            "label": "Address Line 1",
                            "order": 0,
                            "required": true,
                            "validators": [],
                            "value": "1 Main Street"
                        }, {
                            "type": "text",
                            "type": "text",
                            "uiOptions": {
                                "summaryTitle": "Address line 2"
                            },
                            "key": "addressLine2",
                            "label": "Address Line 2",
                            "order": 0,
                            "required": false,
                            "validators": [],
                            "value": "Ballylinan",
                            "placeholder": "Optional"
                        }, {
                            "type": "dropdown",
                            "type": "dropdown",
                            "uiOptions": {
                                "summaryTitle": "County"
                            },
                            "key": "county",
                            "label": "County / Dublin Area e.g. Carlow, Dublin 18",
                            "order": 1,
                            "required": true,
                            "validators": [],
                            "value": {
                                "id": "Laois",
                                "description": "Laois"
                            },
                            "options": [{
                                "id": "Carlow",
                                "description": "Carlow"
                            }, {
                                "id": "Cavan",
                                "description": "Cavan"
                            }, {
                                "id": "Clare",
                                "description": "Clare"
                            }, {
                                "id": "Cork",
                                "description": "Cork"
                            }, {
                                "id": "Donegal",
                                "description": "Donegal"
                            }, {
                                "id": "Dublin1",
                                "description": "Dublin 1"
                            }, {
                                "id": "Dublin2",
                                "description": "Dublin 2"
                            }, {
                                "id": "Dublin3",
                                "description": "Dublin 3"
                            }, {
                                "id": "Dublin4",
                                "description": "Dublin 4"
                            }, {
                                "id": "Dublin5",
                                "description": "Dublin 5"
                            }, {
                                "id": "Dublin6",
                                "description": "Dublin 6"
                            }, {
                                "id": "Dublin6w",
                                "description": "Dublin 6w"
                            }, {
                                "id": "Dublin7",
                                "description": "Dublin 7"
                            }, {
                                "id": "Dublin8",
                                "description": "Dublin 8"
                            }, {
                                "id": "Dublin9",
                                "description": "Dublin 9"
                            }, {
                                "id": "Dublin10",
                                "description": "Dublin 10"
                            }, {
                                "id": "Dublin11",
                                "description": "Dublin 11"
                            }, {
                                "id": "Dublin12",
                                "description": "Dublin 12"
                            }, {
                                "id": "Dublin13",
                                "description": "Dublin 13"
                            }, {
                                "id": "Dublin14",
                                "description": "Dublin 14"
                            }, {
                                "id": "Dublin15",
                                "description": "Dublin 15"
                            }, {
                                "id": "Dublin16",
                                "description": "Dublin 16"
                            }, {
                                "id": "Dublin17",
                                "description": "Dublin 17"
                            }, {
                                "id": "Dublin18",
                                "description": "Dublin 18"
                            }, {
                                "id": "Dublin20",
                                "description": "Dublin 20"
                            }, {
                                "id": "Dublin22",
                                "description": "Dublin 22"
                            }, {
                                "id": "Dublin24",
                                "description": "Dublin 24"
                            }, {
                                "id": "Dublin",
                                "description": "Dublin County"
                            }, {
                                "id": "Galway",
                                "description": "Galway"
                            }, {
                                "id": "Kerry",
                                "description": "Kerry"
                            }, {
                                "id": "Kildare",
                                "description": "Kildare"
                            }, {
                                "id": "Kilkenny",
                                "description": "Kilkenny"
                            }, {
                                "id": "Laois",
                                "description": "Laois"
                            }, {
                                "id": "Leitrim",
                                "description": "Leitrim"
                            }, {
                                "id": "Limerick",
                                "description": "Limerick"
                            }, {
                                "id": "Longford",
                                "description": "Longford"
                            }, {
                                "id": "Louth",
                                "description": "Louth"
                            }, {
                                "id": "Mayo",
                                "description": "Mayo"
                            }, {
                                "id": "Meath",
                                "description": "Meath"
                            }, {
                                "id": "Monaghan",
                                "description": "Monaghan"
                            }, {
                                "id": "Offaly",
                                "description": "Offaly"
                            }, {
                                "id": "Roscommon",
                                "description": "Roscommon"
                            }, {
                                "id": "Sligo",
                                "description": "Sligo"
                            }, {
                                "id": "Tipperary",
                                "description": "Tipperary"
                            }, {
                                "id": "Waterford",
                                "description": "Waterford"
                            }, {
                                "id": "Westmeath",
                                "description": "Westmeath"
                            }, {
                                "id": "Wexford",
                                "description": "Wexford"
                            }, {
                                "id": "Wicklow",
                                "description": "Wicklow"
                            }]
                        }, {
                            "type": "autocomplete",
                            "type": "autocomplete",
                            "uiOptions": {
                                "summaryTitle": "Town"
                            },
                            "key": "area",
                            "label": "Town/Area",
                            "order": 2,
                            "required": true,
                            "trigger": {
                                "name": "disabledBasedOnKey",
                                "expectedType": "object",
                                "key": "county"
                            },
                            "validators": [],
                            "disabled": false,
                            "value": {
                                "id": "Ballylynan",
                                "description": "Ballylynan"
                            },
                            "link": "county",
                            "serviceUrl": "reference/area/",
                            "autoCompleteType": "linked"
                        }]
                    }]
                }]
            }, {
                "id": "your-car",
                "title": "Car",
                "uiOptions": {
                    "nextPage": "your-licence",
                    "prevPage": "your-address"
                },
                "order": 1,
                "sections": [{
                    "id": "car-default",
                    "title": "Primary Driver",
                    "type": "car",
                    "uiOptions": {},
                    "fields": [{
                        "type": "group",
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
                            "type": "autocomplete",
                            "type": "autocomplete",
                            "uiOptions": {
                                "summaryTitle": "Make"
                            },
                            "key": "carMake",
                            "label": "Car Make",
                            "order": 1,
                            "required": true,
                            "validators": [],
                            "disabled": false,
                            "value": {
                                "id": "KIA",
                                "description": "KIA"
                            },
                            "link": "carInformation",
                            "serviceUrl": "reference/vehicle/make/",
                            "autoCompleteType": "all"
                        }, {
                            "type": "autocomplete",
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
                            "validators": [],
                            "disabled": false,
                            "value": {
                                "id": "SPORTAGE 1.7 D EX 2WD",
                                "description": "SPORTAGE 1.7 D EX 2WD"
                            },
                            "link": "carMake",
                            "serviceUrl": "reference/vehicle/model/",
                            "autoCompleteType": "linked"
                        }, {
                            "type": "dropdown",
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
                            "validators": [],
                            "value": {
                                "id": "1500cc - 1999cc",
                                "description": "1500cc - 1999cc"
                            },
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
                            }]
                        }]
                    }, {
                        "type": "date",
                        "type": "date",
                        "uiOptions": {
                            "summaryTitle": "Date of Registration",
                            "locked": "day"
                        },
                        "key": "dateOfRegistration",
                        "label": "Date of Registration",
                        "order": 0,
                        "required": true,
                        "validators": [],
                        "disabled": false,
                        "value": 1356998400000
                    }, {
                        "type": "date",
                        "type": "date",
                        "uiOptions": {
                            "summaryTitle": "Date of Purchase"
                        },
                        "key": "dateOfPurchase",
                        "label": "Date of Purchase",
                        "order": 5,
                        "required": true,
                        "validators": [],
                        "disabled": false,
                        "value": 1356998400000
                    }, {
                        "type": "currency",
                        "type": "currency",
                        "uiOptions": {
                            "summaryTitle": "Car value "
                        },
                        "key": "currentValue",
                        "label": "Current Value",
                        "order": 6,
                        "required": true,
                        "validators": [],
                        "disabled": false,
                        "value": 500000
                    }, {
                        "type": "tel",
                        "type": "tel",
                        "uiOptions": {
                            "summaryTitle": "Kilometers per year"
                        },
                        "key": "kilometersPerYear",
                        "label": "How many kilometres do you drive in a year?",
                        "order": 7,
                        "required": true,
                        "validators": [],
                        "disabled": false,
                        "value": 20000
                    }, {
                        "type": "group",
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
                            "type": "checkbox",
                            "type": "checkbox",
                            "uiOptions": {
                                "summaryTitle": "Security Alarm"
                            },
                            "key": "security-alarm",
                            "required": false,
                            "timeline": false,
                            "value": true,
                            "name": "Alarm"
                        }, {
                            "type": "checkbox",
                            "type": "checkbox",
                            "uiOptions": {
                                "summaryTitle": "Immobiliser"
                            },
                            "key": "security-immobiliser",
                            "required": false,
                            "timeline": false,
                            "value": false,
                            "name": "Immobiliser"
                        }, {
                            "type": "checkbox",
                            "type": "checkbox",
                            "uiOptions": {
                                "summaryTitle": "Tracker"
                            },
                            "key": "security-tracker",
                            "required": false,
                            "timeline": false,
                            "value": false,
                            "name": "Tracker"
                        }]
                    }, {
                        "type": "dropdown",
                        "type": "dropdown",
                        "uiOptions": {},
                        "key": "carMainlyUsedCounty",
                        "label": "In what county is your car usually used?",
                        "order": 9,
                        "required": true,
                        "validators": [],
                        "value": {
                            "id": "Cork",
                            "description": "Cork"
                        },
                        "placeholder": "Please enter a county",
                        "options": [{
                            "id": "Carlow",
                            "description": "Carlow"
                        }, {
                            "id": "Cavan",
                            "description": "Cavan"
                        }, {
                            "id": "Clare",
                            "description": "Clare"
                        }, {
                            "id": "Cork",
                            "description": "Cork"
                        }, {
                            "id": "Donegal",
                            "description": "Donegal"
                        }, {
                            "id": "Dublin1",
                            "description": "Dublin 1"
                        }, {
                            "id": "Dublin2",
                            "description": "Dublin 2"
                        }, {
                            "id": "Dublin3",
                            "description": "Dublin 3"
                        }, {
                            "id": "Dublin4",
                            "description": "Dublin 4"
                        }, {
                            "id": "Dublin5",
                            "description": "Dublin 5"
                        }, {
                            "id": "Dublin6",
                            "description": "Dublin 6"
                        }, {
                            "id": "Dublin6w",
                            "description": "Dublin 6w"
                        }, {
                            "id": "Dublin7",
                            "description": "Dublin 7"
                        }, {
                            "id": "Dublin8",
                            "description": "Dublin 8"
                        }, {
                            "id": "Dublin9",
                            "description": "Dublin 9"
                        }, {
                            "id": "Dublin10",
                            "description": "Dublin 10"
                        }, {
                            "id": "Dublin11",
                            "description": "Dublin 11"
                        }, {
                            "id": "Dublin12",
                            "description": "Dublin 12"
                        }, {
                            "id": "Dublin13",
                            "description": "Dublin 13"
                        }, {
                            "id": "Dublin14",
                            "description": "Dublin 14"
                        }, {
                            "id": "Dublin15",
                            "description": "Dublin 15"
                        }, {
                            "id": "Dublin16",
                            "description": "Dublin 16"
                        }, {
                            "id": "Dublin17",
                            "description": "Dublin 17"
                        }, {
                            "id": "Dublin18",
                            "description": "Dublin 18"
                        }, {
                            "id": "Dublin20",
                            "description": "Dublin 20"
                        }, {
                            "id": "Dublin22",
                            "description": "Dublin 22"
                        }, {
                            "id": "Dublin24",
                            "description": "Dublin 24"
                        }, {
                            "id": "Dublin",
                            "description": "Dublin County"
                        }, {
                            "id": "Galway",
                            "description": "Galway"
                        }, {
                            "id": "Kerry",
                            "description": "Kerry"
                        }, {
                            "id": "Kildare",
                            "description": "Kildare"
                        }, {
                            "id": "Kilkenny",
                            "description": "Kilkenny"
                        }, {
                            "id": "Laois",
                            "description": "Laois"
                        }, {
                            "id": "Leitrim",
                            "description": "Leitrim"
                        }, {
                            "id": "Limerick",
                            "description": "Limerick"
                        }, {
                            "id": "Longford",
                            "description": "Longford"
                        }, {
                            "id": "Louth",
                            "description": "Louth"
                        }, {
                            "id": "Mayo",
                            "description": "Mayo"
                        }, {
                            "id": "Meath",
                            "description": "Meath"
                        }, {
                            "id": "Monaghan",
                            "description": "Monaghan"
                        }, {
                            "id": "Offaly",
                            "description": "Offaly"
                        }, {
                            "id": "Roscommon",
                            "description": "Roscommon"
                        }, {
                            "id": "Sligo",
                            "description": "Sligo"
                        }, {
                            "id": "Tipperary",
                            "description": "Tipperary"
                        }, {
                            "id": "Waterford",
                            "description": "Waterford"
                        }, {
                            "id": "Westmeath",
                            "description": "Westmeath"
                        }, {
                            "id": "Wexford",
                            "description": "Wexford"
                        }, {
                            "id": "Wicklow",
                            "description": "Wicklow"
                        }]
                    }, {
                        "type": "autocomplete",
                        "type": "autocomplete",
                        "uiOptions": {},
                        "key": "carMainlyUsedArea",
                        "label": "In what town/area is your car usually used?",
                        "order": 9,
                        "required": true,
                        "trigger": {
                            "name": "disabledBasedOnKey",
                            "expectedType": "object",
                            "key": "carMainlyUsedCounty"
                        },
                        "validators": [],
                        "disabled": false,
                        "value": {
                            "id": "Aghaville",
                            "description": "Aghaville"
                        },
                        "link": "carMainlyUsedCounty",
                        "serviceUrl": "reference/area/",
                        "autoCompleteType": "linked"
                    }, {
                        "type": "dropdown",
                        "type": "dropdown",
                        "uiOptions": {},
                        "key": "carKeptOvernight",
                        "label": "Where is you car kept overnight?",
                        "order": 10,
                        "required": true,
                        "validators": [],
                        "value": {
                            "id": "KeptOnPrivateProperty",
                            "description": "Kept on Private Property"
                        },
                        "options": [{
                            "id": "KeptOnPublicRoad",
                            "description": "Kept on Public Property"
                        }, {
                            "id": "ParkedOnDrive",
                            "description": "Parked on Drive"
                        }, {
                            "id": "Carport",
                            "description": "Carport"
                        }, {
                            "id": "KeptOnPrivateProperty",
                            "description": "Kept on Private Property"
                        }, {
                            "id": "Garaged",
                            "description": "Garaged"
                        }]
                    }]
                }, {
                    "id": "car-secondary",
                    "title": "Second Car",
                    "type": "car",
                    "uiOptions": {},
                    "fields": [{
                        "type": "group",
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
                            "type": "autocomplete",
                            "type": "autocomplete",
                            "uiOptions": {
                                "summaryTitle": "Make"
                            },
                            "key": "carMake",
                            "label": "Car Make",
                            "order": 1,
                            "required": true,
                            "validators": [],
                            "disabled": false,
                            "link": "carInformation",
                            "serviceUrl": "reference/vehicle/make/",
                            "autoCompleteType": "all"
                        }, {
                            "type": "autocomplete",
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
                            "validators": [],
                            "disabled": false,
                            "link": "carMake",
                            "serviceUrl": "reference/vehicle/model/",
                            "autoCompleteType": "linked"
                        }, {
                            "type": "dropdown",
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
                            "validators": [],
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
                            }]
                        }]
                    }, {
                        "type": "date",
                        "type": "date",
                        "uiOptions": {
                            "summaryTitle": "Date of Registration",
                            "locked": "day"
                        },
                        "key": "dateOfRegistration",
                        "label": "Date of Registration",
                        "order": 0,
                        "required": true,
                        "validators": [],
                        "disabled": false
                    }, {
                        "type": "date",
                        "type": "date",
                        "uiOptions": {
                            "summaryTitle": "Date of Purchase"
                        },
                        "key": "dateOfPurchase",
                        "label": "Date of Purchase",
                        "order": 5,
                        "required": true,
                        "validators": [],
                        "disabled": false
                    }, {
                        "type": "currency",
                        "type": "currency",
                        "uiOptions": {
                            "summaryTitle": "Car value "
                        },
                        "key": "currentValue",
                        "label": "Current Value",
                        "order": 6,
                        "required": true,
                        "validators": [],
                        "disabled": false
                    }, {
                        "type": "tel",
                        "type": "tel",
                        "uiOptions": {
                            "summaryTitle": "Kilometers per year"
                        },
                        "key": "kilometersPerYear",
                        "label": "How many kilometres do you drive in a year?",
                        "order": 7,
                        "required": true,
                        "validators": [],
                        "disabled": false
                    }, {
                        "type": "group",
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
                            "type": "checkbox",
                            "type": "checkbox",
                            "uiOptions": {
                                "summaryTitle": "Security Alarm"
                            },
                            "key": "security-alarm",
                            "required": false,
                            "timeline": false,
                            "name": "Alarm"
                        }, {
                            "type": "checkbox",
                            "type": "checkbox",
                            "uiOptions": {
                                "summaryTitle": "Immobiliser"
                            },
                            "key": "security-immobiliser",
                            "required": false,
                            "timeline": false,
                            "name": "Immobiliser"
                        }, {
                            "type": "checkbox",
                            "type": "checkbox",
                            "uiOptions": {
                                "summaryTitle": "Tracker"
                            },
                            "key": "security-tracker",
                            "required": false,
                            "timeline": false,
                            "name": "Tracker"
                        }]
                    }, {
                        "type": "autocomplete",
                        "type": "autocomplete",
                        "uiOptions": {},
                        "key": "carMainlyUsedArea",
                        "label": "In what area is your car usually used?",
                        "order": 9,
                        "required": true,
                        "validators": [],
                        "disabled": false,
                        "placeholder": "Please type the neighbourhood, region, area",
                        "serviceUrl": "reference/area/",
                        "autoCompleteType": "search"
                    }, {
                        "type": "autocomplete",
                        "type": "autocomplete",
                        "uiOptions": {},
                        "key": "carMainlyUsedCounty",
                        "label": "In what county is your car usually used?",
                        "order": 9,
                        "required": true,
                        "trigger": {
                            "expectedType": "object",
                            "key": "carMainlyUsedArea",
                            "name": "disabledBasedOnKey"
                        },
                        "validators": [],
                        "disabled": false,
                        "placeholder": "Please enter a county",
                        "link": "carMainlyUsedArea",
                        "serviceUrl": "reference/county/",
                        "autoCompleteType": "linked"
                    }, {
                        "type": "dropdown",
                        "type": "dropdown",
                        "uiOptions": {},
                        "key": "carKeptOvernight",
                        "label": "Where is you car kept overnight?",
                        "order": 10,
                        "required": true,
                        "validators": [],
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
                        }]
                    }]
                }]
            }, {
                "id": "your-licence",
                "title": "Licence",
                "uiOptions": {
                    "nextPage": "your-cover",
                    "prevPage": "your-car"
                },
                "order": 1,
                "sections": [{
                    "id": "licence-default",
                    "title": "Primary Driver",
                    "type": "default",
                    "uiOptions": {},
                    "isDriver": true,
                    "fields": [{
                        "type": "dropdown",
                        "type": "dropdown",
                        "uiOptions": {
                            "summaryTitle": "Type of Licence"
                        },
                        "key": "typeOfLicence",
                        "label": "What type of licence do you hold?",
                        "order": 0,
                        "required": true,
                        "validators": [],
                        "disabled": false,
                        "value": {
                            "id": "FullIrish",
                            "description": "Full Irish"
                        },
                        "options": [{
                            "id": "Foreign",
                            "description": "Foreign"
                        }, {
                            "id": "FullEuropeanUnion",
                            "description": "Full EU"
                        }, {
                            "id": "FullIrish",
                            "description": "Full Irish"
                        }, {
                            "id": "FullUnitedKingdom",
                            "description": "Full UK"
                        }, {
                            "id": "InternationalLicence",
                            "description": "International Licence"
                        }, {
                            "id": "ProvisionalIrish",
                            "description": "Provisional Irish"
                        }, {
                            "id": "LearnerPermit",
                            "description": "Learner Permit"
                        }]
                    }, {
                        "type": "slider",
                        "type": "slider",
                        "uiOptions": {
                            "summaryTitle": "Amount of years you held your licence"
                        },
                        "key": "howLongLicenceHeld",
                        "label": "How long have you held your licence?",
                        "order": 1,
                        "required": true,
                        "value": {
                            "id": "7",
                            "description": "7"
                        },
                        "values": [{
                            "id": "0",
                            "description": "0"
                        }, {
                            "id": "1",
                            "description": "1"
                        }, {
                            "id": "2",
                            "description": "2"
                        }, {
                            "id": "3",
                            "description": "3"
                        }, {
                            "id": "4",
                            "description": "4"
                        }, {
                            "id": "5",
                            "description": "5"
                        }, {
                            "id": "6",
                            "description": "6"
                        }, {
                            "id": "7",
                            "description": "7"
                        }, {
                            "id": "8",
                            "description": "8"
                        }, {
                            "id": "9",
                            "description": "9+"
                        }]
                    }, {
                        "type": "autocomplete",
                        "type": "autocomplete",
                        "uiOptions": {
                            "summaryTitle": "Where did you earn your licence"
                        },
                        "key": "whereEarnLicence",
                        "label": "Where did you earn your licence?",
                        "order": 2,
                        "required": true,
                        "validators": [],
                        "disabled": false,
                        "value": {
                            "id": "Ireland",
                            "description": "Ireland"
                        },
                        "placeholder": "Please enter a country",
                        "serviceUrl": "reference/country/",
                        "autoCompleteType": "search"
                    }]
                }],
                "templates": [{
                    "id": "licence-template",
                    "type": "default",
                    "uiOptions": {},
                    "hasQuestionsByDefault": true,
                    "additional": true,
                    "fields": [{
                        "type": "dropdown",
                        "type": "dropdown",
                        "uiOptions": {
                            "summaryTitle": "Type of Licence"
                        },
                        "key": "typeOfLicence",
                        "label": "What type of licence do you hold?",
                        "order": 0,
                        "required": true,
                        "validators": [],
                        "disabled": false,
                        "options": [{
                            "id": "Foreign",
                            "description": "Foreign"
                        }, {
                            "id": "FullEuropeanUnion",
                            "description": "Full EU"
                        }, {
                            "id": "FullIrish",
                            "description": "Full Irish"
                        }, {
                            "id": "FullUnitedKingdom",
                            "description": "Full UK"
                        }, {
                            "id": "InternationalLicence",
                            "description": "International Licence"
                        }, {
                            "id": "ProvisionalIrish",
                            "description": "Provisional Irish"
                        }, {
                            "id": "LearnerPermit",
                            "description": "Learner Permit"
                        }]
                    }, {
                        "type": "slider",
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
                        "values": [{
                            "id": "0",
                            "description": "0"
                        }, {
                            "id": "1",
                            "description": "1"
                        }, {
                            "id": "2",
                            "description": "2"
                        }, {
                            "id": "3",
                            "description": "3"
                        }, {
                            "id": "4",
                            "description": "4"
                        }, {
                            "id": "5",
                            "description": "5"
                        }, {
                            "id": "6",
                            "description": "6"
                        }, {
                            "id": "7",
                            "description": "7"
                        }, {
                            "id": "8",
                            "description": "8"
                        }, {
                            "id": "9",
                            "description": "9+"
                        }]
                    }, {
                        "type": "autocomplete",
                        "type": "autocomplete",
                        "uiOptions": {
                            "summaryTitle": "Where did you earn your licence"
                        },
                        "key": "whereEarnLicence",
                        "label": "Where did you earn your licence?",
                        "order": 2,
                        "required": true,
                        "validators": [],
                        "disabled": false,
                        "placeholder": "Please enter a country",
                        "serviceUrl": "reference/country/",
                        "autoCompleteType": "search"
                    }]
                }]
            }, {
                "id": "your-cover",
                "title": "Cover",
                "uiOptions": {
                    "nextPage": "your-claims",
                    "prevPage": "your-licence"
                },
                "order": 1,
                "sections": [{
                    "id": "cover-default",
                    "title": "Primary Driver",
                    "type": "default",
                    "uiOptions": {},
                    "fields": [{
                        "type": "group",
                        "key": "drivingExperience",
                        "type": "group",
                        "alignment": "none",
                        "timeline": false,
                        "order": 0,
                        "isComplete": false,
                        "uiOptions": {},
                        "fields": [{
                            "type": "radio",
                            "type": "radio",
                            "helpId": 1001,
                            "uiOptions": {
                                "summaryTitle": "Insured in your own Name"
                            },
                            "key": "insuredInYourOwnName",
                            "label": "Have you been insured in your own name within the last two years?",
                            "order": 0,
                            "required": true,
                            "trigger": {
                                "key": "insuredNamedDriver",
                                "name": "hideBasedOnKey",
                                "isObject": true
                            },
                            "value": {
                                "id": true,
                                "description": "Yes"
                            },
                            "options": [{
                                "id": true,
                                "description": "Yes"
                            }, {
                                "id": false,
                                "description": "No"
                            }]
                        }, {
                            "type": "radio",
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
                                "isObject": true
                            },
                            "value": {
                                "id": false,
                                "description": "No"
                            },
                            "options": [{
                                "id": true,
                                "description": "Yes"
                            }, {
                                "id": false,
                                "description": "No"
                            }]
                        }, {
                            "type": "dropdown",
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
                                "isObject": true
                            },
                            "validators": [],
                            "options": [{
                                "id": "Brother",
                                "description": "Brother"
                            }, {
                                "id": "BrotherInLaw",
                                "description": "Brother in Law"
                            }, {
                                "id": "BusinessPartner",
                                "description": "Business Partner"
                            }, {
                                "id": "CommonLawSpouse",
                                "description": "Common Law Spouse"
                            }, {
                                "id": "Daughter",
                                "description": "Daughter"
                            }, {
                                "id": "DaughterInLaw",
                                "description": "Daughter in Law"
                            }, {
                                "id": "EmployeeOfProposer",
                                "description": "Employee of Proposer"
                            }, {
                                "id": "EmployerOfProposer",
                                "description": "Employer of Proposer"
                            }, {
                                "id": "FatherInLaw",
                                "description": "Father in Law"
                            }, {
                                "id": "MotherInLaw",
                                "description": "Mother in Law"
                            }, {
                                "id": "Parent",
                                "description": "Parent"
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
                                "id": "SisterInLaw",
                                "description": "Sister in Law"
                            }, {
                                "id": "Son",
                                "description": "Son"
                            }, {
                                "id": "SonInLaw",
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
                            }, {
                                "id": "Partner",
                                "description": "Partner"
                            }, {
                                "id": "Friend",
                                "description": "Friend"
                            }]
                        }, {
                            "type": "dropdown",
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
                                "isObject": true
                            },
                            "validators": [],
                            "value": {
                                "id": "Prestige",
                                "description": "Prestige Underwriting Services"
                            },
                            "options": [{
                                "id": "AIG",
                                "description": "AIG"
                            }, {
                                "id": "Allianz",
                                "description": "Allianz"
                            }, {
                                "id": "ARB",
                                "description": "ARB Underwriting"
                            }, {
                                "id": "Asgard",
                                "description": "Asgard"
                            }, {
                                "id": "Aviva",
                                "description": "Aviva"
                            }, {
                                "id": "AXABroker",
                                "description": "AXA Broker"
                            }, {
                                "id": "AXADirect",
                                "description": "AXA Direct"
                            }, {
                                "id": "AXA",
                                "description": "AXA Insurance"
                            }, {
                                "id": "Bump",
                                "description": "Bump"
                            }, {
                                "id": "ChartisInsurance",
                                "description": "Chartis Insurance"
                            }, {
                                "id": "Chubb",
                                "description": "Chubb Insurance"
                            }, {
                                "id": "Cigna",
                                "description": "Cigna Insurance"
                            }, {
                                "id": "Cornhill",
                                "description": "Cornhill"
                            }, {
                                "id": "Ecclesiastical",
                                "description": "Ecclesiastical"
                            }, {
                                "id": "Europa",
                                "description": "Europa General"
                            }, {
                                "id": "FBD",
                                "description": "FBD Insurance"
                            }, {
                                "id": "FCRebrokedAXABroker",
                                "description": "FC Rebroked AXA Broker"
                            }, {
                                "id": "FirstCallDirect",
                                "description": "First Call Direct"
                            }, {
                                "id": "Footprint",
                                "description": "Footprint"
                            }, {
                                "id": "Generali",
                                "description": "Generali Insurance"
                            }, {
                                "id": "KennCo",
                                "description": "KennCo Underwriting"
                            }, {
                                "id": "Liberty",
                                "description": "Liberty Underwriting"
                            }, {
                                "id": "Octane",
                                "description": "Octane"
                            }, {
                                "id": "OneDirect",
                                "description": "One Direct"
                            }, {
                                "id": "PatronaUnderwritingLtd",
                                "description": "Patrona Underwriting Ltd"
                            }, {
                                "id": "Prestige",
                                "description": "Prestige Underwriting Services"
                            }, {
                                "id": "ProvidentInsurance",
                                "description": "Provident Insurance"
                            }, {
                                "id": "Quinn",
                                "description": "Quinn Direct"
                            }, {
                                "id": "RSA",
                                "description": "RSA"
                            }, {
                                "id": "Sertus",
                                "description": "Sertus Underwriting"
                            }, {
                                "id": "Setanta",
                                "description": "Setanta Insurance"
                            }, {
                                "id": "Torch",
                                "description": "Torch"
                            }, {
                                "id": "Travelers",
                                "description": "Travelers"
                            }, {
                                "id": "UnlistedInsurerIreland",
                                "description": "Unlisted Insurer - Ireland"
                            }, {
                                "id": "UnlistedInsurerNotIreland",
                                "description": "Unlisted Insurer - Not Ireland"
                            }, {
                                "id": "Wrightway",
                                "description": "Wrightway Underwriting"
                            }, {
                                "id": "XSDirect",
                                "description": "XS Direct"
                            }, {
                                "id": "Zurich",
                                "description": "Zurich"
                            }, {
                                "id": "Unspecified",
                                "description": "Unspecified"
                            }]
                        }, {
                            "type": "dropdown",
                            "type": "dropdown",
                            "uiOptions": {},
                            "key": "drivingExperienceType",
                            "label": "Type of driving experience",
                            "required": true,
                            "trigger": {
                                "key": "insuredNamedDriver",
                                "name": "showBasedOnKey",
                                "isObject": true
                            },
                            "options": [{
                                "id": "FullTimeCompanyCarExperience",
                                "description": "Full-time Company Car Experience"
                            }, {
                                "id": "InsuranceInOwnName",
                                "description": "Insurance in Own Name"
                            }, {
                                "id": "NamedDriverExperience",
                                "description": "Named Driver Experience"
                            }, {
                                "id": "PartTimeCompanyCarExperience",
                                "description": "Part-time Company Car Experience"
                            }]
                        }, {
                            "type": "slider",
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
                                "isObject": true
                            },
                            "value": {
                                "id": "0",
                                "description": "0"
                            },
                            "values": [{
                                "id": "0",
                                "description": "0"
                            }, {
                                "id": "1",
                                "description": "1"
                            }, {
                                "id": "2",
                                "description": "2"
                            }, {
                                "id": "3",
                                "description": "3"
                            }, {
                                "id": "4",
                                "description": "4"
                            }, {
                                "id": "5",
                                "description": "5"
                            }, {
                                "id": "6",
                                "description": "6"
                            }, {
                                "id": "7",
                                "description": "7"
                            }, {
                                "id": "8",
                                "description": "8"
                            }, {
                                "id": "9",
                                "description": "9+"
                            }]
                        }, {
                            "type": "autocomplete",
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
                                "isObject": true
                            },
                            "validators": [],
                            "disabled": false,
                            "placeholder": "Please enter a country",
                            "serviceUrl": "reference/country/",
                            "autoCompleteType": "search"
                        }, {
                            "type": "date",
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
                                "isObject": true
                            }
                        }, {
                            "type": "slider",
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
                                "isObject": true
                            },
                            "value": {
                                "id": "5",
                                "description": "5"
                            },
                            "values": [{
                                "id": "0",
                                "description": "0"
                            }, {
                                "id": "1",
                                "description": "1"
                            }, {
                                "id": "2",
                                "description": "2"
                            }, {
                                "id": "3",
                                "description": "3"
                            }, {
                                "id": "4",
                                "description": "4"
                            }, {
                                "id": "5",
                                "description": "5"
                            }, {
                                "id": "6",
                                "description": "6"
                            }, {
                                "id": "7",
                                "description": "7"
                            }, {
                                "id": "8",
                                "description": "8"
                            }, {
                                "id": "9",
                                "description": "9+"
                            }]
                        }, {
                            "type": "autocomplete",
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
                                "isObject": true
                            },
                            "validators": [],
                            "disabled": false,
                            "value": {
                                "id": "Ireland",
                                "description": "Ireland"
                            },
                            "placeholder": "Please enter a country",
                            "serviceUrl": "reference/country/",
                            "autoCompleteType": "search"
                        }, {
                            "type": "date",
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
                                "key": "insuredInYourOwnName",
                                "name": "showBasedOnKey",
                                "isObject": true
                            },
                            "validators": ["validDateValidate"],
                            "disabled": false,
                            "value": 1493074800000
                        }]
                    }, {
                        "type": "date",
                        "type": "date",
                        "uiOptions": {},
                        "key": "policyStartDate",
                        "label": "What date would you like to start your policy from?",
                        "order": 7,
                        "required": true,
                        "value": 1496364708000
                    }, {
                        "type": "radio",
                        "type": "radio",
                        "uiOptions": {
                            "summaryTitle": "Level of Cover"
                        },
                        "key": "levelOfCover",
                        "label": "What level of cover do you need?",
                        "order": 8,
                        "required": true,
                        "value": {
                            "id": "Comprehensive",
                            "description": "Comprehensive"
                        },
                        "options": [{
                            "id": "COMPREHENSIVE",
                            "description": "Comprehensive"
                        }, {
                            "id": "THIRDPARTY",
                            "description": "Third Party, Fire and Theft"
                        }],
                        "alignment": "vertical"
                    }, {
                        "type": "radio",
                        "type": "radio",
                        "helpId": 1001,
                        "uiOptions": {
                            "summaryTitle": "Level of no claims bonus"
                        },
                        "key": "levelOfNoClaimsBonus",
                        "label": "What level of no claims bonus protection do you require?",
                        "order": 9,
                        "required": true,
                        "value": {
                            "id": "Full",
                            "description": "Full"
                        },
                        "options": [{
                            "id": "Full",
                            "description": "Full"
                        }, {
                            "id": "StepBack",
                            "description": "Step Back"
                        }]
                    }]
                }]
            }, {
                "id": "your-claims",
                "title": "Claims",
                "uiOptions": {
                    "nextPage": "your-penalties",
                    "prevPage": "your-cover"
                },
                "order": 1,
                "sections": [{
                    "id": "claim-primary-driver",
                    "title": "Primary Driver",
                    "type": "claim",
                    "uiOptions": {},
                    "isDriver": true,
                    "fields": []
                }],
                "templates": [{
                    "id": "claim-template",
                    "type": "claim",
                    "uiOptions": {},
                    "additional": true,
                    "fields": [{
                        "type": "date",
                        "type": "date",
                        "uiOptions": {
                            "summaryTitle": "Date of Claim"
                        },
                        "key": "dateOfClaim",
                        "label": "Date of claim",
                        "order": 0,
                        "required": true,
                        "validators": ["validDateValidate", "validLastFiveYearsValidate"],
                        "disabled": false
                    }, {
                        "type": "dropdown",
                        "type": "dropdown",
                        "uiOptions": {
                            "summaryTitle": "Reason for Claim"
                        },
                        "key": "reasonForClaim",
                        "label": "What was the reason for the claim?",
                        "order": 0,
                        "required": true,
                        "validators": [],
                        "options": [{
                            "id": "Accident",
                            "description": "Accident"
                        }, {
                            "id": "AccidentalDamage",
                            "description": "Accidental Damage"
                        }, {
                            "id": "Fire",
                            "description": "Fire"
                        }, {
                            "id": "MaliciousDamageAsAResultOfTheft",
                            "description": "Malicious Damage As A Result Of Theft"
                        }, {
                            "id": "PersonalAccident",
                            "description": "Personal Accident"
                        }, {
                            "id": "PersonalEffects",
                            "description": "Personal Effects"
                        }, {
                            "id": "Theft",
                            "description": "Theft"
                        }, {
                            "id": "Vandalism",
                            "description": "Vandalism"
                        }, {
                            "id": "Windscreen",
                            "description": "Windscreen"
                        }, {
                            "id": "ThirdParty",
                            "description": "Third Party"
                        }]
                    }, {
                        "type": "radio",
                        "type": "radio",
                        "uiOptions": {
                            "summaryTitle": "Reason for Claim"
                        },
                        "key": "isClaimSettled",
                        "label": "Is the claim settled?",
                        "order": 0,
                        "required": true,
                        "validators": [],
                        "options": [{
                            "id": true,
                            "description": "Yes"
                        }, {
                            "id": false,
                            "description": "No"
                        }]
                    }, {
                        "type": "radio",
                        "type": "radio",
                        "uiOptions": {
                            "summaryTitle": "Reason for Claim"
                        },
                        "key": "thirdPartyInjuries",
                        "label": "Were there any third party injuries?",
                        "order": 0,
                        "required": true,
                        "validators": [],
                        "options": [{
                            "id": true,
                            "description": "Yes"
                        }, {
                            "id": false,
                            "description": "No"
                        }]
                    }, {
                        "type": "currency",
                        "type": "currency",
                        "uiOptions": {
                            "summaryTitle": "Cost of Claim"
                        },
                        "key": "costOfClaim",
                        "label": "Cost of claim",
                        "order": 0,
                        "required": true,
                        "placeholder": "How Much"
                    }, {
                        "type": "radio",
                        "type": "radio",
                        "helpId": 1001,
                        "uiOptions": {
                            "summaryTitle": "Claim Fault"
                        },
                        "key": "customerAtFault",
                        "label": "Were you at fault?",
                        "order": 2,
                        "required": true,
                        "validators": [],
                        "options": [{
                            "id": true,
                            "description": "Yes"
                        }, {
                            "id": false,
                            "description": "No"
                        }]
                    }, {
                        "type": "radio",
                        "type": "radio",
                        "uiOptions": {
                            "summaryTitle": "No Claim Bonus Protected"
                        },
                        "key": "noClaimsBonusProtected",
                        "label": "Was your no claims bonus protected?",
                        "order": 2,
                        "required": true,
                        "validators": [],
                        "options": [{
                            "id": true,
                            "description": "Yes"
                        }, {
                            "id": false,
                            "description": "No"
                        }]
                    }]
                }]
            }, {
                "id": "your-penalties",
                "title": "Penalty Points",
                "uiOptions": {
                    "prevPage": "your-claims",
                    "nextPage": "choose-your-product"
                },
                "order": 1,
                "sections": [{
                    "id": "penalty-primary-driver",
                    "title": "Primary Driver",
                    "type": "penalty",
                    "uiOptions": {},
                    "isDriver": true,
                    "fields": []
                }],
                "templates": [{
                    "id": "penalty-template",
                    "title": "Primary Driver",
                    "type": "penalty",
                    "uiOptions": {},
                    "additional": true,
                    "fields": [{
                        "type": "date",
                        "type": "date",
                        "uiOptions": {},
                        "key": "dateOfPenalty",
                        "label": "Date of Penalty",
                        "order": 0,
                        "required": true,
                        "validators": ["validDateValidate", "validLastThreeYearsValidate"],
                        "disabled": false
                    }, {
                        "type": "dropdown",
                        "type": "dropdown",
                        "uiOptions": {},
                        "key": "reasonForPenalty",
                        "label": "What was the reason?",
                        "order": 0,
                        "required": true,
                        "validators": [],
                        "options": [{
                            "id": "ExceedingWeight",
                            "description": "Exceeding weight"
                        }, {
                            "id": "NoTestCertificate",
                            "description": "No test cert"
                        }, {
                            "id": "NoLicence",
                            "description": "No licence"
                        }, {
                            "id": "TryingToGetLicenceWhileDisqualified",
                            "description": "Trying to get licence while disqualified"
                        }, {
                            "id": "FailureToProduceLicence",
                            "description": "Failure to produce licence"
                        }, {
                            "id": "ExceedingSpeedLimit",
                            "description": "Exceeding speed limit"
                        }, {
                            "id": "DrivingVehicleWhenUnfit",
                            "description": "Driving vehicle when unfit"
                        }, {
                            "id": "CarelessDriving",
                            "description": "Careless driving"
                        }, {
                            "id": "DrivingDefectiveVehicle",
                            "description": "Driving defective vehicle"
                        }, {
                            "id": "ParkingInDangerousPosition",
                            "description": "Parking in dangerous position"
                        }, {
                            "id": "NoInsurance",
                            "description": "No insurance"
                        }, {
                            "id": "FailingToStopAtWarden",
                            "description": "Failing to stop at warden"
                        }, {
                            "id": "BreachOfDutyAtAccident",
                            "description": "Breach of duty at accident"
                        }, {
                            "id": "FailingToStopForGarda",
                            "description": "Failing to stop for Garda"
                        }, {
                            "id": "GivingFalseDetailsForLicence",
                            "description": "Giving false details for licence"
                        }, {
                            "id": "VehicleExceedsWidthLimit",
                            "description": "Vehicle exceeds width limit"
                        }, {
                            "id": "VehicleExceedsLengthLimit",
                            "description": "Vehicle exceeds length limit"
                        }, {
                            "id": "WornTyres",
                            "description": "Worn tyres"
                        }, {
                            "id": "PoorVisibilityOfRoad",
                            "description": "Poor visibility of road"
                        }, {
                            "id": "WindscreenNotSafetyGlass",
                            "description": "Windscreen not safety glass"
                        }, {
                            "id": "PoorWindscreenWipers",
                            "description": "Poor windscreen wipers"
                        }, {
                            "id": "NoDrivingMirror",
                            "description": "No driving mirror"
                        }, {
                            "id": "PoorBrakes",
                            "description": "Poor brakes"
                        }, {
                            "id": "PoorSeatBeltAnchoragePoints",
                            "description": "Poor seat belt anchorage points"
                        }, {
                            "id": "NoSeatBelts",
                            "description": "Driver of car or goods vehicle not wearing safety belt"
                        }, {
                            "id": "NoCrashHelmetOnMotorbike",
                            "description": "No crash helmet on motorbike"
                        }, {
                            "id": "NoPassengerCrashHelmet",
                            "description": "No passenger crash helmet"
                        }, {
                            "id": "TruckWithNoRearCrashBar",
                            "description": "Truck with no rear crash bar"
                        }, {
                            "id": "TruckWithNoSideCrashBar",
                            "description": "Truck with no side crash bar"
                        }, {
                            "id": "DrivingWithoutSeatBelt",
                            "description": "Driver of car or goods vehicle not wearing safety belt"
                        }, {
                            "id": "RearPassengersWithNoBelt",
                            "description": "Driver permitting person under 17 years of age to occupy a seat when not wearing safety belt"
                        }, {
                            "id": "NoSpeedLimitingDevice",
                            "description": "No speed limiting device"
                        }, {
                            "id": "SpeedLimiterNotCalibrated",
                            "description": "Speed limiter not calibrated"
                        }, {
                            "id": "UnsealedSpeedLimiter",
                            "description": "Unsealed speed limiter"
                        }, {
                            "id": "UsingMobilePhoneWhileDriving",
                            "description": "Using mobile phone while driving"
                        }, {
                            "id": "VehicleNotEquippedWithLamps",
                            "description": "Vehicle not equipped with lamps"
                        }, {
                            "id": "TrailerNotEquippedWithLamps",
                            "description": "Trailer  not equipped with lamps"
                        }, {
                            "id": "NonUseOfProjectingRoadLamps",
                            "description": "Non use of projecting road lamps"
                        }, {
                            "id": "NonUseOfTrailerMarkerLamps",
                            "description": "Non use of trailer marker lamps"
                        }, {
                            "id": "NoInternalLightingInPSV",
                            "description": "No internal lighting in PSV"
                        }, {
                            "id": "NoIndicators",
                            "description": "No indicators"
                        }, {
                            "id": "BreakingSpeedRestriction",
                            "description": "Breaking speed restriction"
                        }, {
                            "id": "FailureToYieldRightOfWay",
                            "description": "Failure to yield right of way"
                        }, {
                            "id": "FailureToDriveOnLeft",
                            "description": "Failure to drive on left"
                        }, {
                            "id": "DangerousOvertaking",
                            "description": "Dangerous overtaking"
                        }, {
                            "id": "PoorDrivingAtJunction",
                            "description": "Poor driving at junction"
                        }, {
                            "id": "PoorReversing",
                            "description": "Poor reversing"
                        }, {
                            "id": "BreachOfFootwayDrivingRules",
                            "description": "Breach of footway driving rules"
                        }, {
                            "id": "FailureToEnterRoundaboutOnLeft",
                            "description": "Failure to enter roundabout on left"
                        }, {
                            "id": "DrivingAlongOrAcrossMedianStrip",
                            "description": "Driving along or across median strip"
                        }, {
                            "id": "FailureToComplyWithGardaSignals",
                            "description": "Failure to comply with Garda signals"
                        }, {
                            "id": "FailureToStopAtStopSign",
                            "description": "Failure to stop at stop sign"
                        }, {
                            "id": "FailureToComplyWithTrafficSign",
                            "description": "Failure to comply with traffic sign"
                        }, {
                            "id": "FailureToKeepLeftAtCertainSigns",
                            "description": "Failure to keep left at certain signs"
                        }, {
                            "id": "CrossingWhiteLine",
                            "description": "Crossing white line"
                        }, {
                            "id": "EnteringMarkedHatchedArea",
                            "description": "Entering marked hatched area"
                        }, {
                            "id": "BreachOfLaneMarkings",
                            "description": "Breach of lane markings"
                        }, {
                            "id": "FailureToObeyTrafficLights",
                            "description": "Failure to obey traffic lights"
                        }, {
                            "id": "FailureToObeyLevelCrossingLights",
                            "description": "Failure to obey level crossing lights"
                        }, {
                            "id": "DrivingAgainstMotorwayFlow",
                            "description": "Driving against motorway flow"
                        }, {
                            "id": "DrivingOnBannedAreasOfMotorway",
                            "description": "Driving on banned areas of motorway"
                        }, {
                            "id": "DrivingVehicleRestrictedTo50MphOnOutsideLaneOfMotorway",
                            "description": "Driving vehicle restricted to 50 mph on outside lane of motorway"
                        }, {
                            "id": "FailureToHeedHeightRestrictions",
                            "description": "Failure to heed height restrictions"
                        }, {
                            "id": "ProvisionalLicenceHolderDrivingWithoutSupervisionOfQualifiedDriver",
                            "description": "Provisional licence holder driving without supervision of qualified driver"
                        }, {
                            "id": "Other",
                            "description": "Other"
                        }, {
                            "id": "DrivingOnACycleTrack",
                            "description": "Driving on a cycle track"
                        }, {
                            "id": "DrivingVehicleBeforeRemedyingDangerousDefect",
                            "description": "Driving vehicle before remedying dangerous defect"
                        }, {
                            "id": "IllegalEntryOntoAOneWayStreet",
                            "description": "Illegal entry onto a one-way street"
                        }, {
                            "id": "FailureToComplyWithProhibitoryTraffiSigns",
                            "description": "Failure to comply with prohibitory traffic signs"
                        }, {
                            "id": "FailureToYieldRightOfWayAtAYieldSignYieldLine",
                            "description": "Failure to yield right of way at a yield sign/ yield line"
                        }, {
                            "id": "InsurerPenaltyPointUpdate",
                            "description": "Insurer Penalty Point Update"
                        }, {
                            "id": "UsingVehicleWithoutCertificateOfRoadworthiness",
                            "description": "Using vehicle without certificate of roadworthiness"
                        }, {
                            "id": "FailureToLeaveAppropriateDistanceBetweenYouAndTheVehicleInFront",
                            "description": "Failure to leave appropriate distance between you and the vehicle in front"
                        }, {
                            "id": "DrivingWithoutReasonableConsideration",
                            "description": "Driving without reasonable consideration"
                        }, {
                            "id": "DrinkDrivingOffencesDependingOnLevelOfAlcoholPresentInTheBlood",
                            "description": "Drink Driving Offences (depending on level of alcohol present in the blood)"
                        }, {
                            "id": "DriverOfCarOrGoodsVehiclePermittingChildUnder3YearsOfAget",
                            "description": "Driver of car or goods vehicle permitting child under 3 years of age to travel in without being restrainted by appropriate child restraint"
                        }, {
                            "id": "DriverOfCarOrGoodsVehiclePermittingChildOver3YearsOfAgeTo",
                            "description": "Driver of car or goods vehicle permitting child over 3 years of age to travel in without being restrainted by appropriate child restraint"
                        }, {
                            "id": "DriverOfCarOrGoodsVehiclePermittingChildToBeRestrainedByRe",
                            "description": "Driver of car or goods vehicle permitting child to be restrained by rearward facing child restraint fitted to a seat protected by active frontal air-bag "
                        }, {
                            "id": "DriverOfBusNotWearingSafetyBelt",
                            "description": "Driver of bus not wearing safety belt"
                        }, {
                            "id": "UsingVehicleWhoseWeightUnLadenExceedsMaximumPermittedWe",
                            "description": "Using vehicle - (a) whose weight un-laden exceeds maximum permitted weight"
                        }, {
                            "id": "ContraventionOfBanOnUTurns",
                            "description": "Contravention of ban on U-turns"
                        }, {
                            "id": "ContraventionOfRulesForUseOfMiniRoundabouts",
                            "description": "Contravention of rules for use of mini roundabouts"
                        }, {
                            "id": "FailureToDisplayLPlateOrLTabard",
                            "description": "Failure to display L-Plate or L tabard"
                        }, {
                            "id": "FailureToDisplayNPlateOrNTabard",
                            "description": "Failure to display N Plate or N tabard"
                        }, {
                            "id": "GrossVehicleWeightExceedsMaximumSignDisplayed",
                            "description": "Gross vehicle weight exceeds maximum sign displayed"
                        }, {
                            "id": "LearnerPermitHolderDrivingUnaccompaniedByQualifiedPerson",
                            "description": "Learner permit holder driving unaccompanied by qualified person"
                        }, {
                            "id": "LengthOfVehicleExceedsMaximumSignDisplayed",
                            "description": "Length of vehicle exceeds maximum sign displayed"
                        }, {
                            "id": "NoSpeedLimitationDeviceNonCompliantSpeedLimitationDevice",
                            "description": "No speed limitation device / non-compliant speed limitation device"
                        }, {
                            "id": "PassingTrafficLaneControlSignNotInAccordanceWithSuchSign",
                            "description": "Passing traffic lane control sign not in accordance with such sign"
                        }, {
                            "id": "ProceedingBeyondNoEntryToVehiclesSign",
                            "description": "Proceeding beyond no entry to vehicles sign"
                        }, {
                            "id": "UsingModifiedAlteredVehicleWhereAuthorisationPlateIsInaccurate",
                            "description": "Using modified/altered vehicle where authorisation plate is inaccurate"
                        }, {
                            "id": "UsingVehicleInAPublicPlaceWithoutAnAuthorisationPlate",
                            "description": "Using vehicle in a public place without an authorisation plate"
                        }, {
                            "id": "VehicleAxleLoadingWeightExceedsMaximumSignDisplayed",
                            "description": "Vehicle axle loading weight exceeds maximum sign displayed"
                        }, {
                            "id": "WidthOfVehicleExceedsMaximumSignDisplayed",
                            "description": "Width of vehicle exceeds maximum sign displayed"
                        }]
                    }, {
                        "type": "text",
                        "type": "text",
                        "uiOptions": {},
                        "key": "howManyPoints",
                        "label": "How many points?",
                        "order": 0,
                        "required": true,
                        "placeholder": "How many?"
                    }]
                }]
            }]
        }, {
            "id": "price-presentation",
            "isComplete": false,
            "title": "Get Quote",
            "uiOptions": {
                "isWide": "true",
                "isPagesHidden": "true"
            },
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
            }]
        }, {
            "id": "payments",
            "isComplete": false,
            "title": "Payment",
            "uiOptions": {
                "isWide": "true",
                "isPagesHidden": "true"
            },
            "pages": [{
                "id": "additional-questions",
                "title": "Additional Questions",
                "uiOptions": {
                    "nextPage": "tokenisation",
                    "prevPage": "choose-your-payment"
                },
                "sections": [{
                    "id": "additional-questions",
                    "type": "default",
                    "uiOptions": {},
                    "isDriver": true,
                    "fields": [{
                        "type": "text",
                        "type": "text",
                        "uiOptions": {},
                        "key": "driverLicenceNumber",
                        "label": "What is your Drivers Licence number?",
                        "required": false,
                        "trigger": {
                            "name": "getValueForValidationFromQuestion",
                            "key": "typeOfLicence",
                            "value": "FullIrish"
                        },
                        "validators": ["licenceNumberValidate"],
                        "disabled": false
                    }]
                }],
                "templates": [{
                    "type": "default",
                    "uiOptions": {},
                    "hasQuestionsByDefault": true,
                    "additional": true,
                    "fields": [{
                        "type": "text",
                        "type": "text",
                        "uiOptions": {},
                        "key": "driverLicenceNumber",
                        "label": "What is your Drivers Licence number?",
                        "required": false,
                        "validators": ["licenceNumberValidate"],
                        "disabled": false
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
                    "uiOptions": {},
                    "fields": [{
                        "type": "radio",
                        "type": "radio",
                        "uiOptions": {},
                        "key": "areYouCardholder",
                        "label": "Are you the Cardholder?",
                        "order": 2,
                        "required": true,
                        "validators": [],
                        "value": "Yes",
                        "options": [{
                            "id": true,
                            "description": "Yes"
                        }, {
                            "id": false,
                            "description": "No"
                        }]
                    }, {
                        "type": "radio",
                        "type": "radio",
                        "uiOptions": {},
                        "key": "doYouHavePermissionCardholder",
                        "label": "We need to store the cardholders payment information securely to complete your purchase. Can you confirm that\n\t\t\t\tthe cardholder has consented to their payment details being stored for use with this AA product only?",
                        "order": 2,
                        "required": true,
                        "trigger": {
                            "key": "areYouCardholder",
                            "name": "showIfKeyEquals",
                            "equals": false,
                            "isObject": true
                        },
                        "validators": [],
                        "value": "Yes",
                        "options": [{
                            "id": true,
                            "description": "Yes"
                        }, {
                            "id": false,
                            "description": "No"
                        }]
                    }, {
                        "type": "radio",
                        "type": "radio",
                        "uiOptions": {},
                        "key": "saveCardFutureTransactions",
                        "label": "Would you like us to save this card securely to us for future transactions?",
                        "order": 2,
                        "required": true,
                        "validators": [],
                        "value": "Yes",
                        "options": [{
                            "id": true,
                            "description": "Yes"
                        }, {
                            "id": false,
                            "description": "No"
                        }]
                    }, {
                        "type": "radio",
                        "type": "radio",
                        "uiOptions": {},
                        "key": "saveCardAllAAProducts",
                        "label": "Would you like to save this card use on all AA Products?",
                        "order": 2,
                        "required": true,
                        "trigger": {
                            "key": "saveCardFutureTransactions",
                            "name": "showIfKeyEquals",
                            "equals": false,
                            "isObject": true
                        },
                        "validators": [],
                        "value": "Yes",
                        "options": [{
                            "id": true,
                            "description": "Yes"
                        }, {
                            "id": false,
                            "description": "No"
                        }]
                    }]
                }]
            }, {
                "id": "payment",
                "title": "Payment",
                "uiOptions": {
                    "prevPage": "tokenisation",
                    "nextPage": "confirmation"
                }
            }]
        }, {
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
            "pages": [{
                "id": "confirmation",
                "title": "Confirmation",
                "uiOptions": {
                    "prevPage": "payment",
                    "isSummaryHidden": "true",
                    "isTimelineHidden": "true"
                }
            }]
        }]
    },
    "nextPage": "choose-your-product",
    "quoteResponse": {
        "quote": {
            "reference": "COLA27000375",
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
                    "description": "Third Party",
                    "price": {
                        "amount": 252567,
                        "str": "2525.67",
                        "symbol": "€",
                        "currency": "EUR",
                        "pretty": "€2525.67"
                    }
                }, {
                    "description": "Accidental Damage",
                    "price": {
                        "amount": 20075,
                        "str": "200.75",
                        "symbol": "€",
                        "currency": "EUR",
                        "pretty": "€200.75"
                    }
                }, {
                    "description": "No Claims Discount",
                    "price": {
                        "amount": -122689,
                        "str": "-1226.89",
                        "symbol": "€",
                        "currency": "EUR",
                        "pretty": "€-1226.89"
                    }
                }, {
                    "description": "Windscreen",
                    "price": {
                        "amount": 2100,
                        "str": "21.00",
                        "symbol": "€",
                        "currency": "EUR",
                        "pretty": "€21.00"
                    }
                }, {
                    "description": "Round before Gov Levy",
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
                        "amount": 7603,
                        "str": "76.03",
                        "symbol": "€",
                        "currency": "EUR",
                        "pretty": "€76.03"
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
                            "amount": 55880,
                            "str": "558.80",
                            "symbol": "€",
                            "currency": "EUR",
                            "pretty": "€558.80"
                        },
                        "total": {
                            "amount": 162102,
                            "str": "1621.02",
                            "symbol": "€",
                            "currency": "EUR",
                            "pretty": "€1621.02"
                        },
                        "apr": "9.200000%",
                        "installments": {
                            "code": "MO_DD09",
                            "number": 11,
                            "instalment": {
                                "amount": 10302,
                                "str": "103.02",
                                "symbol": "€",
                                "currency": "EUR",
                                "pretty": "€103.02"
                            },
                            "deposit": {
                                "amount": 55880,
                                "str": "558.80",
                                "symbol": "€",
                                "currency": "EUR",
                                "pretty": "€558.80"
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
                            "amount": 162102,
                            "str": "1621.02",
                            "symbol": "€",
                            "currency": "EUR",
                            "pretty": "€1621.02"
                        },
                        "apr": "0%",
                        "annual": true,
                        "monthly": false
                    }
                },
                "name": "STANDARD",
                "id": "STANDARD",
                "tagline": "Our Premium Product"
            }]
        }
    },
    "quoteAge": "Fresh"
}