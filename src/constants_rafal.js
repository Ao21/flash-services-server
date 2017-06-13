"use strict";
exports.QUOTE = {
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
};

//# sourceMappingURL=data:application/json;base64,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RUFBRSxNQUFNO2dDQUNiLFFBQVEsRUFBRSxHQUFHO2dDQUNiLFVBQVUsRUFBRSxLQUFLO2dDQUNqQixRQUFRLEVBQUUsT0FBTzs2QkFDcEI7eUJBQ0osQ0FBQztvQkFDRixTQUFTLEVBQUU7d0JBQ1AsU0FBUyxFQUFFOzRCQUNQLFNBQVMsRUFBRTtnQ0FDUCxRQUFRLEVBQUUsS0FBSztnQ0FDZixLQUFLLEVBQUUsUUFBUTtnQ0FDZixRQUFRLEVBQUUsR0FBRztnQ0FDYixVQUFVLEVBQUUsS0FBSztnQ0FDakIsUUFBUSxFQUFFLFNBQVM7NkJBQ3RCOzRCQUNELE9BQU8sRUFBRTtnQ0FDTCxRQUFRLEVBQUUsTUFBTTtnQ0FDaEIsS0FBSyxFQUFFLFNBQVM7Z0NBQ2hCLFFBQVEsRUFBRSxHQUFHO2dDQUNiLFVBQVUsRUFBRSxLQUFLO2dDQUNqQixRQUFRLEVBQUUsVUFBVTs2QkFDdkI7NEJBQ0QsS0FBSyxFQUFFLFdBQVc7NEJBQ2xCLGNBQWMsRUFBRTtnQ0FDWixNQUFNLEVBQUUsU0FBUztnQ0FDakIsUUFBUSxFQUFFLEVBQUU7Z0NBQ1osWUFBWSxFQUFFO29DQUNWLFFBQVEsRUFBRSxLQUFLO29DQUNmLEtBQUssRUFBRSxRQUFRO29DQUNmLFFBQVEsRUFBRSxHQUFHO29DQUNiLFVBQVUsRUFBRSxLQUFLO29DQUNqQixRQUFRLEVBQUUsU0FBUztpQ0FDdEI7Z0NBQ0QsU0FBUyxFQUFFO29DQUNQLFFBQVEsRUFBRSxLQUFLO29DQUNmLEtBQUssRUFBRSxRQUFRO29DQUNmLFFBQVEsRUFBRSxHQUFHO29DQUNiLFVBQVUsRUFBRSxLQUFLO29DQUNqQixRQUFRLEVBQUUsU0FBUztpQ0FDdEI7NkJBQ0o7NEJBQ0QsUUFBUSxFQUFFLEtBQUs7NEJBQ2YsU0FBUyxFQUFFLElBQUk7eUJBQ2xCO3dCQUNELFFBQVEsRUFBRTs0QkFDTixTQUFTLEVBQUU7Z0NBQ1AsUUFBUSxFQUFFLENBQUM7Z0NBQ1gsS0FBSyxFQUFFLE1BQU07Z0NBQ2IsUUFBUSxFQUFFLEdBQUc7Z0NBQ2IsVUFBVSxFQUFFLEtBQUs7Z0NBQ2pCLFFBQVEsRUFBRSxPQUFPOzZCQUNwQjs0QkFDRCxPQUFPLEVBQUU7Z0NBQ0wsUUFBUSxFQUFFLE1BQU07Z0NBQ2hCLEtBQUssRUFBRSxTQUFTO2dDQUNoQixRQUFRLEVBQUUsR0FBRztnQ0FDYixVQUFVLEVBQUUsS0FBSztnQ0FDakIsUUFBUSxFQUFFLFVBQVU7NkJBQ3ZCOzRCQUNELEtBQUssRUFBRSxJQUFJOzRCQUNYLFFBQVEsRUFBRSxJQUFJOzRCQUNkLFNBQVMsRUFBRSxLQUFLO3lCQUNuQjtxQkFDSjtvQkFDRCxNQUFNLEVBQUUsVUFBVTtvQkFDbEIsSUFBSSxFQUFFLFVBQVU7b0JBQ2hCLFNBQVMsRUFBRSxxQkFBcUI7aUJBQ25DLENBQUM7U0FDTDtLQUNKO0lBQ0QsVUFBVSxFQUFFLE9BQU87Q0FDdEIsQ0FBQSIsImZpbGUiOiJjb25zdGFudHNfcmFmYWwuanMiLCJzb3VyY2VzQ29udGVudCI6W251bGxdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
