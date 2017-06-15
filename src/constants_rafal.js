"use strict";
exports.RETRIEVE_QUOTE = {
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
                                "id": "your-details",
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

//# sourceMappingURL=data:application/json;base64,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YixVQUFVLEVBQUUsS0FBSztnQ0FDakIsUUFBUSxFQUFFLE9BQU87NkJBQ3BCOzRCQUNELE9BQU8sRUFBRTtnQ0FDTCxRQUFRLEVBQUUsTUFBTTtnQ0FDaEIsS0FBSyxFQUFFLFNBQVM7Z0NBQ2hCLFFBQVEsRUFBRSxHQUFHO2dDQUNiLFVBQVUsRUFBRSxLQUFLO2dDQUNqQixRQUFRLEVBQUUsVUFBVTs2QkFDdkI7NEJBQ0QsS0FBSyxFQUFFLElBQUk7NEJBQ1gsUUFBUSxFQUFFLElBQUk7NEJBQ2QsU0FBUyxFQUFFLEtBQUs7eUJBQ25CO3FCQUNKO29CQUNELE1BQU0sRUFBRSxVQUFVO29CQUNsQixJQUFJLEVBQUUsVUFBVTtvQkFDaEIsU0FBUyxFQUFFLHFCQUFxQjtpQkFDbkMsQ0FBQztTQUNMO0tBQ0o7SUFDRCxVQUFVLEVBQUUsT0FBTztDQUN0QixDQUFBIiwiZmlsZSI6ImNvbnN0YW50c19yYWZhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbbnVsbF0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
