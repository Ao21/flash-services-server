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
                            "nextPage": "your-details",
                            "isComplete": true
                        },
                        "order": 0,
                        "sections": [{
                                "id": "pre-default",
                                "type": "default",
                                "uiOptions": {},
                                "fields": [{
                                        "type": "myaaEmail",
                                        "helpId": 115001401969,
                                        "uiOptions": {
                                            "summaryTitle": ""
                                        },
                                        "key": "email",
                                        "label": "Email Address",
                                        "order": 0,
                                        "required": true,
                                        "validators": ["validEmailValidate"],
                                        "value": "mototest1@theaa.ie"
                                    }, {
                                        "type": "memberSelector",
                                        "helpId": 115001413725,
                                        "uiOptions": {
                                            "summaryTitle": "Number of Drivers"
                                        },
                                        "key": "amountOfDrivers",
                                        "label": "Do you want any additional drivers on your policy?",
                                        "order": 1,
                                        "required": true,
                                        "value": 1,
                                        "max": 5,
                                        "min": 1
                                    }, {
                                        "type": "questionText",
                                        "uiOptions": {
                                            "summaryHidden": true
                                        },
                                        "key": "termsConditions",
                                        "label": "Terms and Conditions",
                                        "order": 2,
                                        "timeline": false,
                                        "value": true,
                                        "content": "<p>By proceeding, I agree to the <a href=\"http://www.theaa.ie/~/media/files/motor/assumptions.ashx\" target=\"_blank\">AA Assumptions</a> and <a href=\"https://www.theaa.ie/~/media/Files/AA%20Ireland/Terms%20And%20Conditions/MyAATerms.ashx\" target=\"_blank\">myAA Terms and Conditions</a>. I have read and agree to the <a href=\"http://www.theaa.ie/aa/about-us/privacy-policy.aspx\" target=\"_blank\">AA Privacy Policy</a> and <a href=\"http://www.theaa.ie/~/media/Files/AA%20Ireland/Terms%20and%20conditions/Motor-Terms-Business.aspx\" target=\"_blank\">Terms of Business</a></p>"
                                    }]
                            }],
                        "subheading": "First we need some details to get started."
                    }, {
                        "id": "your-details",
                        "title": "Your Details",
                        "uiOptions": {
                            "nextPage": "your-address",
                            "prevPage": "getting-started",
                            "isComplete": true
                        },
                        "order": 1,
                        "sections": [{
                                "id": "details-default",
                                "title": "asfd",
                                "type": "default",
                                "uiOptions": {},
                                "fields": [{
                                        "type": "radio",
                                        "uiOptions": {
                                            "summaryTitle": "Email"
                                        },
                                        "key": "title",
                                        "label": "Title",
                                        "order": 0,
                                        "required": true,
                                        "value": {
                                            "id": "Mr",
                                            "description": "Mr"
                                        },
                                        "options": [{
                                                "id": "Mr",
                                                "description": "Mr"
                                            }, {
                                                "id": "Ms",
                                                "description": "Ms"
                                            }, {
                                                "id": "Miss",
                                                "description": "Miss"
                                            }, {
                                                "id": "Mrs",
                                                "description": "Mrs"
                                            }]
                                    }, {
                                        "type": "text",
                                        "uiOptions": {
                                            "summaryTitle": "First Name"
                                        },
                                        "key": "firstName",
                                        "label": "First Name",
                                        "order": 0,
                                        "required": true,
                                        "validators": ["inputFieldValidate"],
                                        "value": "asfd"
                                    }, {
                                        "type": "text",
                                        "uiOptions": {
                                            "summaryTitle": "Last Name"
                                        },
                                        "key": "lastName",
                                        "label": "Last Name",
                                        "order": 1,
                                        "required": true,
                                        "validators": ["inputFieldValidate"],
                                        "value": "adsf"
                                    }, {
                                        "type": "date",
                                        "uiOptions": {
                                            "summaryTitle": "Date of Birth"
                                        },
                                        "key": "dateOfBirth",
                                        "label": "Date Of Birth",
                                        "order": 2,
                                        "required": true,
                                        "validators": ["validDateValidate", "validOverEighteenValidate"],
                                        "disabled": false,
                                        "value": "02/02/1980"
                                    }, {
                                        "type": "tel",
                                        "uiOptions": {
                                            "summaryTitle": "Phone Number"
                                        },
                                        "key": "phoneNumber",
                                        "label": "Phone Number",
                                        "order": 2,
                                        "required": true,
                                        "validators": ["validPhoneNumberValidate"],
                                        "disabled": false,
                                        "value": "003538544455545"
                                    }, {
                                        "type": "dropdown",
                                        "helpId": 115000449309,
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
                                        },
                                        "options": [{
                                                "id": "Employed",
                                                "description": "Employed"
                                            }, {
                                                "id": "Retired",
                                                "description": "Retired"
                                            }, {
                                                "id": "SelfEmployed",
                                                "description": "Self Employed"
                                            }, {
                                                "id": "HouseholdDuties",
                                                "description": "Household Duties"
                                            }, {
                                                "id": "Unemployed",
                                                "description": "Unemployed"
                                            }]
                                    }, {
                                        "type": "autocomplete",
                                        "helpId": 115001402229,
                                        "uiOptions": {
                                            "summaryTitle": "Occupation"
                                        },
                                        "key": "occupation",
                                        "label": "Occupation",
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
                                        "placeholder": "Start typing",
                                        "serviceUrl": "reference/occupation/",
                                        "autoCompleteType": "all"
                                    }, {
                                        "type": "autocomplete",
                                        "helpId": 115003803469,
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
                                            "id": "FinanceCompany",
                                            "description": "Finance Company"
                                        },
                                        "placeholder": "Select an Area of Business",
                                        "serviceUrl": "reference/employerBusinessType/",
                                        "autoCompleteType": "all"
                                    }, {
                                        "type": "radio",
                                        "helpId": 115001361705,
                                        "uiOptions": {},
                                        "key": "livedOutsideIreland",
                                        "label": "Have you lived outside of Ireland or the UK in the past 12 months?",
                                        "order": 2,
                                        "required": true,
                                        "validators": [],
                                        "value": {
                                            "id": false,
                                            "description": "No"
                                        },
                                        "options": [{
                                                "id": false,
                                                "description": "No"
                                            }, {
                                                "id": true,
                                                "description": "Yes"
                                            }]
                                    }],
                                "driverIndex": 0
                            }],
                        "templates": [{
                                "id": "driver-template",
                                "type": "default",
                                "uiOptions": {},
                                "hasQuestionsByDefault": true,
                                "additional": true,
                                "fields": [{
                                        "type": "radio",
                                        "uiOptions": {
                                            "summaryTitle": "Email"
                                        },
                                        "key": "title",
                                        "label": "Title",
                                        "order": 0,
                                        "required": true,
                                        "options": [{
                                                "id": "Mr",
                                                "description": "Mr"
                                            }, {
                                                "id": "Ms",
                                                "description": "Ms"
                                            }, {
                                                "id": "Miss",
                                                "description": "Miss"
                                            }, {
                                                "id": "Mrs",
                                                "description": "Mrs"
                                            }]
                                    }, {
                                        "type": "text",
                                        "uiOptions": {
                                            "summaryTitle": "First Name"
                                        },
                                        "key": "firstName",
                                        "label": "First Name",
                                        "order": 0,
                                        "required": true,
                                        "validators": ["inputFieldValidate"]
                                    }, {
                                        "type": "text",
                                        "uiOptions": {
                                            "summaryTitle": "Last Name"
                                        },
                                        "key": "lastName",
                                        "label": "Last Name",
                                        "order": 1,
                                        "required": true,
                                        "validators": ["inputFieldValidate"]
                                    }, {
                                        "type": "date",
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
                                        "uiOptions": {
                                            "summaryTitle": "Phone Number"
                                        },
                                        "key": "phoneNumber",
                                        "label": "Phone Number",
                                        "order": 2,
                                        "required": true,
                                        "validators": ["validPhoneNumberValidate"],
                                        "disabled": false
                                    }, {
                                        "type": "dropdown",
                                        "uiOptions": {
                                            "summaryTitle": "On whose policy?"
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
                                        "helpId": 115000449309,
                                        "uiOptions": {
                                            "summaryTitle": "Type of Employment"
                                        },
                                        "key": "typeOfEmployment",
                                        "label": "Type of Employment",
                                        "order": 2,
                                        "required": true,
                                        "validators": [],
                                        "options": [{
                                                "id": "Employed",
                                                "description": "Employed"
                                            }, {
                                                "id": "Retired",
                                                "description": "Retired"
                                            }, {
                                                "id": "SelfEmployed",
                                                "description": "Self Employed"
                                            }, {
                                                "id": "HouseholdDuties",
                                                "description": "Household Duties"
                                            }, {
                                                "id": "Unemployed",
                                                "description": "Unemployed"
                                            }]
                                    }, {
                                        "type": "autocomplete",
                                        "helpId": 115001402229,
                                        "uiOptions": {
                                            "summaryTitle": "Occupation"
                                        },
                                        "key": "occupation",
                                        "label": "Occupation",
                                        "order": 2,
                                        "required": true,
                                        "trigger": {
                                            "key": "typeOfEmployment",
                                            "equals": ["Unemployed", "Retired"],
                                            "name": "hideIfKeyEqualsMulti"
                                        },
                                        "validators": [],
                                        "disabled": false,
                                        "placeholder": "Start typing",
                                        "serviceUrl": "reference/occupation/",
                                        "autoCompleteType": "all"
                                    }, {
                                        "type": "autocomplete",
                                        "helpId": 115003803469,
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
                                        "helpId": 115001361705,
                                        "uiOptions": {},
                                        "key": "livedOutsideIreland",
                                        "label": "Have you lived outside of Ireland or the UK in the past 12 months?",
                                        "order": 2,
                                        "required": true,
                                        "validators": [],
                                        "options": [{
                                                "id": false,
                                                "description": "No"
                                            }, {
                                                "id": true,
                                                "description": "Yes"
                                            }]
                                    }]
                            }]
                    }, {
                        "id": "your-address",
                        "title": "Your Address",
                        "uiOptions": {
                            "nextPage": "your-car",
                            "prevPage": "your-details",
                            "isComplete": true
                        },
                        "order": 1,
                        "sections": [{
                                "id": "address-default",
                                "type": "address",
                                "uiOptions": {},
                                "fields": [{
                                        "key": "address",
                                        "type": "group",
                                        "isComplete": true,
                                        "uiOptions": {},
                                        "value": {
                                            "addressLine1": "369 Captain's Road",
                                            "addressLine2": "",
                                            "area": {
                                                "id": "Crumlin",
                                                "description": "Crumlin"
                                            },
                                            "county": {
                                                "id": "Dublin12",
                                                "description": "Dublin 12"
                                            },
                                            "selected": {
                                                "address": "369 Captain's Road,Crumlin,Dublin 12",
                                                "id": 0,
                                                "echo": false
                                            }
                                        },
                                        "fields": [{
                                                "type": "text",
                                                "helpId": 115001402349,
                                                "uiOptions": {
                                                    "summaryTitle": "Address line 1"
                                                },
                                                "key": "addressLine1",
                                                "label": "Address Line 1",
                                                "order": 0,
                                                "required": true,
                                                "validators": [],
                                                "value": "369 Captain's Road"
                                            }, {
                                                "type": "text",
                                                "helpId": 115001402469,
                                                "uiOptions": {
                                                    "summaryTitle": "Address line 2"
                                                },
                                                "key": "addressLine2",
                                                "label": "Address Line 2",
                                                "order": 0,
                                                "required": false,
                                                "validators": [],
                                                "value": "",
                                                "placeholder": "Optional"
                                            }, {
                                                "type": "dropdown",
                                                "helpId": 115001414145,
                                                "uiOptions": {
                                                    "summaryTitle": "County"
                                                },
                                                "key": "county",
                                                "label": "County / Dublin postcode",
                                                "order": 1,
                                                "required": true,
                                                "validators": [],
                                                "value": {
                                                    "id": "Dublin12",
                                                    "description": "Dublin 12"
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
                                                "helpId": 115001402489,
                                                "uiOptions": {
                                                    "summaryTitle": "Town"
                                                },
                                                "key": "area",
                                                "label": "Area/Town/Townland",
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
                                                    "id": "Crumlin",
                                                    "description": "Crumlin"
                                                },
                                                "link": "county",
                                                "serviceUrl": "reference/area/",
                                                "autoCompleteType": "linked"
                                            }]
                                    }]
                            }]
                    }, {
                        "id": "your-car",
                        "title": "Your Car",
                        "helpId": 115001414305,
                        "uiOptions": {
                            "nextPage": "your-licence",
                            "prevPage": "your-address",
                            "isComplete": true
                        },
                        "order": 1,
                        "sections": [{
                                "id": "car-default",
                                "title": "Nearly there! We just need a little more information",
                                "type": "car",
                                "uiOptions": {},
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
                                        "value": {
                                            "dateOfRegistration": -1704153600000,
                                            "carMake": {
                                                "id": "TOYOTA",
                                                "description": "TOYOTA"
                                            },
                                            "carModel": {
                                                "id": "AVENSIS 1.6 D-4D SOL NAVI",
                                                "description": "AVENSIS 1.6 D-4D SOL NAVI"
                                            },
                                            "engineSizeRange": {
                                                "id": "1500cc - 1999cc",
                                                "description": "1500cc - 1999cc"
                                            },
                                            "fuelType": {
                                                "id": "Diesel",
                                                "description": "Diesel"
                                            },
                                            "numberOfDoors": 5,
                                            "cubicCapacity": 1598,
                                            "vehicleRegistrationNumber": "16D",
                                            "yearManufactured": 2016
                                        },
                                        "fields": [{
                                                "type": "text",
                                                "hidden": true,
                                                "uiOptions": {},
                                                "key": "yearManufactured",
                                                "order": 4,
                                                "required": false,
                                                "validators": [],
                                                "value": "2016"
                                            }, {
                                                "type": "text",
                                                "hidden": true,
                                                "uiOptions": {},
                                                "key": "vehicleRegistrationNumber",
                                                "order": 4,
                                                "required": false,
                                                "validators": [],
                                                "value": "16D"
                                            }, {
                                                "type": "autocomplete",
                                                "helpId": 115001414385,
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
                                                    "id": "TOYOTA",
                                                    "description": "TOYOTA"
                                                },
                                                "link": "carInformation",
                                                "serviceUrl": "reference/vehicle/make/",
                                                "autoCompleteType": "all"
                                            }, {
                                                "type": "autocomplete",
                                                "helpId": 115001402669,
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
                                                    "id": "AVENSIS 1.6 D-4D SOL NAVI",
                                                    "description": "AVENSIS 1.6 D-4D SOL NAVI"
                                                },
                                                "link": "carMake",
                                                "serviceUrl": "reference/vehicle/model/",
                                                "autoCompleteType": "linked"
                                            }, {
                                                "type": "dropdown",
                                                "helpId": 115001402749,
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
                                        "helpId": 115001414365,
                                        "hidden": true,
                                        "uiOptions": {
                                            "summaryTitle": "Date of Registration",
                                            "locked": "day"
                                        },
                                        "key": "dateOfRegistration",
                                        "label": "Date of Registration",
                                        "order": 0,
                                        "validators": [],
                                        "value": "01/01/2016"
                                    }, {
                                        "type": "date",
                                        "helpId": 115001414625,
                                        "uiOptions": {
                                            "summaryTitle": "Date of Purchase"
                                        },
                                        "key": "dateOfPurchase",
                                        "label": "When did you buy your car?",
                                        "order": 5,
                                        "required": true,
                                        "validators": ["dateOfPurchaseValidate"],
                                        "disabled": false,
                                        "value": "02/02/2016"
                                    }, {
                                        "type": "currency",
                                        "helpId": 115001404989,
                                        "uiOptions": {
                                            "summaryTitle": "Car value "
                                        },
                                        "key": "currentValue",
                                        "label": "Current Value",
                                        "order": 6,
                                        "required": true,
                                        "validators": [],
                                        "disabled": false,
                                        "value": 1500000
                                    }, {
                                        "type": "tel",
                                        "helpId": 115001416805,
                                        "uiOptions": {
                                            "summaryTitle": "Miles per year"
                                        },
                                        "key": "kilometersPerYear",
                                        "label": "How many miles do you drive in a year?",
                                        "order": 7,
                                        "required": true,
                                        "validators": [],
                                        "disabled": false,
                                        "value": 9000
                                    }, {
                                        "key": "securityFeatures",
                                        "type": "group",
                                        "alignment": "half",
                                        "timeline": true,
                                        "label": "What security features are fitted to your vehicle? Please select all that apply.",
                                        "order": 8,
                                        "isComplete": false,
                                        "helpId": 115001417705,
                                        "uiOptions": {
                                            "summaryTitle": "Security Features"
                                        },
                                        "fields": [{
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
                                        "uiOptions": {},
                                        "key": "carMainlyUsedCounty",
                                        "label": "In what county is your car usually used?",
                                        "order": 9,
                                        "required": true,
                                        "validators": [],
                                        "value": {
                                            "id": "Dublin",
                                            "description": "Dublin"
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
                                                "id": "Dublin",
                                                "description": "Dublin"
                                            }, {
                                                "id": "CountyDublin",
                                                "description": "County Dublin"
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
                                                "id": "TipperaryNorth",
                                                "description": "Tipperary North"
                                            }, {
                                                "id": "TipperarySouth",
                                                "description": "Tipperary South"
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
                                            "id": "Dublin12",
                                            "description": "Dublin12"
                                        },
                                        "link": "carMainlyUsedCounty",
                                        "serviceUrl": "reference/areaCarUsed/",
                                        "autoCompleteType": "linked"
                                    }, {
                                        "type": "dropdown",
                                        "uiOptions": {},
                                        "key": "carKeptOvernight",
                                        "label": "Overnight Parking",
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
                                        "key": "carInformation",
                                        "type": "group",
                                        "alignment": "none",
                                        "timeline": false,
                                        "order": 0,
                                        "isComplete": false,
                                        "uiOptions": {
                                            "summaryTitle": "Car Model"
                                        },
                                        "value": {
                                            "dateOfRegistration": 1451606400000,
                                            "carMake": {
                                                "id": "NISSAN",
                                                "description": "NISSAN"
                                            },
                                            "carModel": {
                                                "id": "MICRA",
                                                "description": "MICRA"
                                            },
                                            "engineSizeRange": {
                                                "id": "0cc - 1499cc",
                                                "description": "0cc - 1499cc"
                                            },
                                            "fuelType": {
                                                "id": "Diesel",
                                                "description": "Diesel"
                                            },
                                            "numberOfDoors": 5,
                                            "cubicCapacity": 1461,
                                            "vehicleRegistrationNumber": "16D",
                                            "yearManufactured": 2016
                                        },
                                        "fields": [{
                                                "type": "text",
                                                "hidden": true,
                                                "uiOptions": {},
                                                "key": "yearManufactured",
                                                "order": 4,
                                                "required": false,
                                                "validators": [],
                                                "value": "2016"
                                            }, {
                                                "type": "text",
                                                "hidden": true,
                                                "uiOptions": {},
                                                "key": "vehicleRegistrationNumber",
                                                "order": 4,
                                                "required": false,
                                                "validators": [],
                                                "value": "16D"
                                            }, {
                                                "type": "autocomplete",
                                                "helpId": 115001414385,
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
                                                    "id": "NISSAN",
                                                    "description": "NISSAN"
                                                },
                                                "link": "carInformation",
                                                "serviceUrl": "reference/vehicle/make/",
                                                "autoCompleteType": "all"
                                            }, {
                                                "type": "autocomplete",
                                                "helpId": 115001402669,
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
                                                    "id": "MICRA",
                                                    "description": "MICRA"
                                                },
                                                "link": "carMake",
                                                "serviceUrl": "reference/vehicle/model/",
                                                "autoCompleteType": "linked"
                                            }, {
                                                "type": "dropdown",
                                                "helpId": 115001402749,
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
                                                    "id": "0cc - 1499cc",
                                                    "description": "0cc - 1499cc"
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
                                    }]
                            }]
                    }, {
                        "id": "your-licence",
                        "title": "Licence",
                        "uiOptions": {
                            "nextPage": "your-cover",
                            "prevPage": "your-car",
                            "isComplete": true
                        },
                        "order": 1,
                        "sections": [{
                                "id": "licence-default",
                                "type": "default",
                                "uiOptions": {},
                                "fields": [{
                                        "type": "dropdown",
                                        "helpId": 115001405929,
                                        "uiOptions": {
                                            "summaryTitle": "Type of Licence"
                                        },
                                        "key": "typeOfLicence",
                                        "label": "Your Driving Licence",
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
                                        "helpId": 115001418565,
                                        "uiOptions": {
                                            "summaryTitle": "How many years have you held your licence?"
                                        },
                                        "key": "howLongLicenceHeld",
                                        "label": "How many years have you held your licence?",
                                        "order": 1,
                                        "required": true,
                                        "validators": ["licenceDateValidate"],
                                        "value": {
                                            "id": "11",
                                            "description": "11"
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
                                                "description": "9"
                                            }, {
                                                "id": "10",
                                                "description": "10"
                                            }, {
                                                "id": "11",
                                                "description": "11"
                                            }, {
                                                "id": "12",
                                                "description": "12"
                                            }, {
                                                "id": "13",
                                                "description": "13"
                                            }, {
                                                "id": "14",
                                                "description": "14"
                                            }, {
                                                "id": "15",
                                                "description": "15"
                                            }, {
                                                "id": "16",
                                                "description": "16"
                                            }, {
                                                "id": "17",
                                                "description": "17"
                                            }, {
                                                "id": "18",
                                                "description": "18"
                                            }, {
                                                "id": "19",
                                                "description": "19"
                                            }, {
                                                "id": "20",
                                                "description": "20+"
                                            }]
                                    }, {
                                        "type": "autocomplete",
                                        "helpId": 115001418525,
                                        "uiOptions": {
                                            "summaryTitle": "Where did you earn your licence"
                                        },
                                        "key": "whereEarnLicence",
                                        "label": "Where did you pass your driving test?",
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
                                    }],
                                "driverIndex": 0
                            }],
                        "templates": [{
                                "id": "licence-template",
                                "type": "default",
                                "uiOptions": {},
                                "hasQuestionsByDefault": true,
                                "additional": true,
                                "fields": [{
                                        "type": "dropdown",
                                        "helpId": 115001405929,
                                        "uiOptions": {
                                            "summaryTitle": "Type of Licence"
                                        },
                                        "key": "typeOfLicence",
                                        "label": "Your Driving Licence",
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
                                        "helpId": 115001418565,
                                        "uiOptions": {
                                            "summaryTitle": "How many years have you held your licence?"
                                        },
                                        "key": "howLongLicenceHeld",
                                        "label": "How many years have you held your licence?",
                                        "order": 1,
                                        "required": true,
                                        "validators": ["licenceDateValidate"],
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
                                                "description": "9"
                                            }, {
                                                "id": "10",
                                                "description": "10"
                                            }, {
                                                "id": "11",
                                                "description": "11"
                                            }, {
                                                "id": "12",
                                                "description": "12"
                                            }, {
                                                "id": "13",
                                                "description": "13"
                                            }, {
                                                "id": "14",
                                                "description": "14"
                                            }, {
                                                "id": "15",
                                                "description": "15"
                                            }, {
                                                "id": "16",
                                                "description": "16"
                                            }, {
                                                "id": "17",
                                                "description": "17"
                                            }, {
                                                "id": "18",
                                                "description": "18"
                                            }, {
                                                "id": "19",
                                                "description": "19"
                                            }, {
                                                "id": "20",
                                                "description": "20+"
                                            }]
                                    }, {
                                        "type": "autocomplete",
                                        "helpId": 115001418525,
                                        "uiOptions": {
                                            "summaryTitle": "Where did you earn your licence"
                                        },
                                        "key": "whereEarnLicence",
                                        "label": "Where did you pass your driving test?",
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
                            }]
                    }, {
                        "id": "your-cover",
                        "title": "Your Driving Experience",
                        "uiOptions": {
                            "nextPage": "your-claims",
                            "prevPage": "your-licence",
                            "isComplete": true
                        },
                        "order": 1,
                        "sections": [{
                                "id": "cover-default",
                                "type": "default",
                                "uiOptions": {},
                                "fields": [{
                                        "key": "drivingExperience",
                                        "type": "group",
                                        "alignment": "none",
                                        "timeline": false,
                                        "order": 0,
                                        "isComplete": false,
                                        "uiOptions": {},
                                        "fields": [{
                                                "type": "radio",
                                                "helpId": 115001418625,
                                                "uiOptions": {
                                                    "summaryTitle": "Insured in your own Name"
                                                },
                                                "key": "insuredInYourOwnName",
                                                "label": "Insured in your own name?",
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
                                                "helpId": 115001407089,
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
                                                "helpId": 115001407149,
                                                "uiOptions": {
                                                    "summaryTitle": "On whose policy?"
                                                },
                                                "key": "insuredNamedDriverOnPolicy",
                                                "label": "On whose policy?",
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
                                                "helpId": 115001418685,
                                                "uiOptions": {
                                                    "summaryTitle": "Current Insurance Company"
                                                },
                                                "key": "insuranceCompany",
                                                "label": "Who is your current insurer?",
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
                                                    "id": "Aviva",
                                                    "description": "Aviva"
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
                                                "helpId": 115001407209,
                                                "uiOptions": {
                                                    "summaryTitle": "Years of Name Driving Experience"
                                                },
                                                "key": "namedDrivingExperienceYears",
                                                "label": "Years of Name Driving Experience",
                                                "order": 3,
                                                "required": true,
                                                "validators": ['namedDriverExperience'],
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
                                                "helpId": 115001407329,
                                                "uiOptions": {
                                                    "summaryTitle": "Where did you earn your licence"
                                                },
                                                "key": "countryNamedDrivingExperience",
                                                "label": "Where did you earn your named driving experience?",
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
                                                "helpId": 115001407469,
                                                "uiOptions": {
                                                    "summaryTitle": "Amount of Years No Claims Bonus"
                                                },
                                                "key": "namedDrivingExperienceExpire",
                                                "label": "When does your named driving experience end?",
                                                "order": 3,
                                                "required": true,
                                                "trigger": {
                                                    "key": "insuredNamedDriver",
                                                    "name": "showBasedOnKey",
                                                    "isObject": true
                                                }
                                            }, {
                                                "type": "slider",
                                                "helpId": 115001418725,
                                                "uiOptions": {
                                                    "summaryTitle": "Amount of Years No Claims Bonus"
                                                },
                                                "key": "noClaimsBonusYears",
                                                "label": "Years of no claims bonus",
                                                "order": 3,
                                                "required": true,
                                                "trigger": {
                                                    "key": "insuredInYourOwnName",
                                                    "name": "showBasedOnKey",
                                                    "isObject": true
                                                },
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
                                                "helpId": 115001419005,
                                                "uiOptions": {
                                                    "summaryTitle": "Location no claims bonus was earned"
                                                },
                                                "key": "whereNoClaimsBonus",
                                                "label": "Where did you earn your no claims bonus?",
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
                                                "helpId": 115001419065,
                                                "uiOptions": {
                                                    "summaryTitle": "Policy Expiration Date"
                                                },
                                                "key": "policyExpiryDate",
                                                "label": "When does your current policy end?",
                                                "order": 5,
                                                "required": true,
                                                "trigger": {
                                                    "key": "insuredInYourOwnName",
                                                    "name": "showBasedOnKey",
                                                    "isObject": true
                                                },
                                                "validators": ["validDateValidate"],
                                                "disabled": false,
                                                "value": "01/08/2017"
                                            }]
                                    }, {
                                        "type": "date",
                                        "helpId": 115001407029,
                                        "uiOptions": {},
                                        "key": "policyStartDate",
                                        "label": "What date would you like your new policy to start?",
                                        "order": 7,
                                        "required": true,
                                        "validators": ["policyStartDateValidate"],
                                        "value": "01/08/2017"
                                    }, {
                                        "type": "radio",
                                        "helpId": 115001004829,
                                        "uiOptions": {
                                            "summaryTitle": "Level of Cover"
                                        },
                                        "key": "levelOfCover",
                                        "label": "What level of cover would you prefer?",
                                        "order": 8,
                                        "required": true,
                                        "value": {
                                            "id": "COMPREHENSIVE",
                                            "description": "Comprehensive"
                                        },
                                        "options": [{
                                                "id": "COMPREHENSIVE",
                                                "description": "Comprehensive"
                                            }, {
                                                "id": "THIRDPARTYFIREANDTHEFT",
                                                "description": "Third Party, Fire And Theft"
                                            }],
                                        "alignment": "vertical"
                                    }, {
                                        "type": "radio",
                                        "helpId": 115001407589,
                                        "uiOptions": {
                                            "summaryTitle": "Level of no claims bonus"
                                        },
                                        "key": "levelOfNoClaimsBonus",
                                        "label": "Choose No Claims Bonus Protection ",
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
                        "helpId": 115001407729,
                        "uiOptions": {
                            "nextPage": "your-penalties",
                            "prevPage": "your-cover",
                            "isComplete": true
                        },
                        "order": 1,
                        "sections": [{
                                "id": "claim-primary-driver",
                                "type": "claim",
                                "uiOptions": {},
                                "userHasClaim": false,
                                "fields": [],
                                "driverIndex": 0
                            }],
                        "templates": [{
                                "id": "claim-template",
                                "type": "claim",
                                "helpId": 115001407729,
                                "uiOptions": {},
                                "additional": true,
                                "fields": [{
                                        "type": "date",
                                        "helpId": 115001419745,
                                        "uiOptions": {
                                            "summaryTitle": "Date of Claim"
                                        },
                                        "key": "dateOfClaim",
                                        "label": "Date of claim",
                                        "order": 0,
                                        "required": true,
                                        "validators": ["validDateValidate", "validLastFiveYearsValidate", "claimDateValidator"],
                                        "disabled": false
                                    }, {
                                        "type": "dropdown",
                                        "helpId": 115001419765,
                                        "uiOptions": {
                                            "summaryTitle": "Reason for Claim"
                                        },
                                        "key": "reasonForClaim",
                                        "label": "Type of Claim",
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
                                        "uiOptions": {
                                            "summaryTitle": "Reason for Claim"
                                        },
                                        "key": "claimSettled",
                                        "label": "Is the claim settled?",
                                        "order": 0,
                                        "required": true,
                                        "validators": [],
                                        "options": [{
                                                "id": "false",
                                                "description": "No"
                                            }, {
                                                "id": "true",
                                                "description": "Yes"
                                            }]
                                    }, {
                                        "type": "radio",
                                        "helpId": 115001419825,
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
                                        "helpId": 115001419845,
                                        "uiOptions": {
                                            "summaryTitle": "Value Of Claim"
                                        },
                                        "key": "costOfClaim",
                                        "label": "Value Of Claim",
                                        "order": 0,
                                        "required": true,
                                        "placeholder": "How Much"
                                    }, {
                                        "type": "radio",
                                        "uiOptions": {
                                            "summaryTitle": "Claim Fault"
                                        },
                                        "key": "customerAtFault",
                                        "label": "Were you deemed to be at fault?",
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
                                        "helpId": 115001419885,
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
                        "helpId": 115001419965,
                        "uiOptions": {
                            "prevPage": "your-claims",
                            "nextPage": "choose-your-product",
                            "isComplete": true
                        },
                        "order": 1,
                        "sections": [{
                                "id": "penalty-primary-driver",
                                "type": "penalty",
                                "uiOptions": {},
                                "userHasPenalty": false,
                                "fields": [],
                                "driverIndex": 0
                            }],
                        "templates": [{
                                "id": "penalty-template",
                                "title": "Primary Driver",
                                "type": "penalty",
                                "uiOptions": {},
                                "additional": true,
                                "fields": [{
                                        "type": "date",
                                        "helpId": 115001420025,
                                        "uiOptions": {},
                                        "key": "dateOfPenalty",
                                        "label": "Date of Penalty",
                                        "order": 0,
                                        "required": true,
                                        "validators": ["validDateValidate", "validLastThreeYearsValidate", "penaltyDateValidator"],
                                        "disabled": false
                                    }, {
                                        "type": "dropdown",
                                        "helpId": 115001420085,
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
                                        "helpId": 115001420185,
                                        "uiOptions": {},
                                        "key": "howManyPoints",
                                        "label": "How many penalty points did you get?",
                                        "order": 0,
                                        "required": true,
                                        "validators": ["maxPenaltyPoints"],
                                        "value": 1,
                                        "placeholder": "How many?"
                                    }]
                            }]
                    }]
            }, {
                "id": "price-presentation",
                "isComplete": false,
                "title": "Get Quote",
                "uiOptions": {
                    "isWide": true,
                    "isPagesHidden": true
                },
                "pages": [{
                        "id": "choose-your-product",
                        "title": "Choose the best cover for you",
                        "uiOptions": {
                            "prevPage": "your-penalties",
                            "nextPage": "choose-your-payment",
                            "isComplete": true
                        }
                    }, {
                        "id": "choose-your-payment",
                        "title": "Choose your payment",
                        "uiOptions": {
                            "prevPage": "choose-your-product",
                            "nextPage": "additional-questions",
                            "isComplete": true
                        }
                    }]
            }, {
                "id": "payments",
                "isComplete": false,
                "title": "Payment",
                "uiOptions": {
                    "isWide": true,
                    "isPagesHidden": true
                },
                "pages": [{
                        "id": "additional-questions",
                        "title": "Additional Questions",
                        "uiOptions": {
                            "nextPage": "payment",
                            "prevPage": "choose-your-payment",
                            "isComplete": true
                        },
                        "sections": [{
                                "id": "additional-questions",
                                "type": "default",
                                "uiOptions": {},
                                "isDriver": true,
                                "fields": [{
                                        "type": "radio",
                                        "helpId": 115001420245,
                                        "uiOptions": {
                                            "summaryTitle": "Registered card holder."
                                        },
                                        "key": "registeredCardHolder",
                                        "label": "Are you the registered cardholder?",
                                        "required": true,
                                        "options": [{
                                                "id": true,
                                                "description": "Yes"
                                            }, {
                                                "id": false,
                                                "description": "No"
                                            }]
                                    }, {
                                        "type": "text",
                                        "uiOptions": {},
                                        "key": "carRegistration",
                                        "label": "Please enter your car registration in order to purchase.",
                                        "required": true,
                                        "trigger": {
                                            "name": "lockOnValue",
                                            "key": "vehicleRegistrationNumber"
                                        },
                                        "disabled": false
                                    }]
                            }],
                        "templates": []
                    }, {
                        "id": "payment",
                        "title": "Payment",
                        "uiOptions": {
                            "prevPage": "additional-questions",
                            "nextPage": "confirmation",
                            "isComplete": true
                        }
                    }]
            }, {
                "id": "confirmation",
                "isComplete": false,
                "title": "Confirmation",
                "uiOptions": {
                    "isWide": true,
                    "isProgressHidden": true,
                    "isSummaryHidden": true,
                    "isHelpCenterHidden": true,
                    "isHeaderExtended": true,
                    "isPagesHidden": true
                },
                "pages": [{
                        "id": "confirmation",
                        "title": "Confirmation",
                        "uiOptions": {
                            "prevPage": "payment",
                            "isSummaryHidden": true,
                            "isTimelineHidden": true,
                            "isComplete": true
                        }
                    }]
            }]
    },
    "nextPage": "choose-your-product",
    "quoteResponse": {
        "reference": "ADSA22000002",
        "products": [{
                "benefits": [{
                        "description": "AA Instalment Plan",
                        "included": true,
                        "inHeader": true
                    }, {
                        "description": "NCD Protection",
                        "included": false,
                        "inHeader": true
                    }, {
                        "description": "Windscreen/Glass Breakage (Comprehensive policies only)",
                        "included": true,
                        "inHeader": true
                    }, {
                        "description": "Temporary Replacement Car",
                        "included": false,
                        "inHeader": false
                    }, {
                        "description": "Lifetime NCD Protection (Fire & Theft)",
                        "included": true,
                        "inHeader": false
                    }, {
                        "description": "Personal Accident Protection up to €75,000",
                        "included": true,
                        "inHeader": false
                    }, {
                        "description": "Replacement Locks & Alarms",
                        "included": false,
                        "inHeader": false
                    }, {
                        "description": "Foreign Travel",
                        "included": true,
                        "inHeader": false
                    }, {
                        "description": "Fire Brigade Charges",
                        "included": true,
                        "inHeader": false
                    }, {
                        "description": "Child Car Seats",
                        "included": false,
                        "inHeader": false
                    }],
                "breakdowns": [{
                        "description": "Third Party",
                        "price": {
                            "amount": 281679,
                            "str": "2816.79",
                            "symbol": "€",
                            "currency": "EUR",
                            "pretty": "€2816.79"
                        }
                    }, {
                        "description": "Accidental Damage",
                        "price": {
                            "amount": 22389,
                            "str": "223.89",
                            "symbol": "€",
                            "currency": "EUR",
                            "pretty": "€223.89"
                        }
                    }, {
                        "description": "No Claims Discount",
                        "price": {
                            "amount": -173319,
                            "str": "-1733.19",
                            "symbol": "€",
                            "currency": "EUR",
                            "pretty": "€-1733.19"
                        }
                    }, {
                        "description": "Policy Excess",
                        "price": {
                            "amount": -1961,
                            "str": "-19.61",
                            "symbol": "€",
                            "currency": "EUR",
                            "pretty": "€-19.61"
                        }
                    }, {
                        "description": "NCD Protection",
                        "price": {
                            "amount": -9015,
                            "str": "-90.15",
                            "symbol": "€",
                            "currency": "EUR",
                            "pretty": "€-90.15"
                        }
                    }, {
                        "description": "Windscreen",
                        "price": {
                            "amount": 2700,
                            "str": "27.00",
                            "symbol": "€",
                            "currency": "EUR",
                            "pretty": "€27.00"
                        }
                    }, {
                        "description": "AA Membership",
                        "price": {
                            "amount": -6124,
                            "str": "-61.24",
                            "symbol": "€",
                            "currency": "EUR",
                            "pretty": "€-61.24"
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
                            "amount": 5817,
                            "str": "58.17",
                            "symbol": "€",
                            "currency": "EUR",
                            "pretty": "€58.17"
                        }
                    }, {
                        "description": "",
                        "price": {
                            "amount": 13927,
                            "str": "139.27",
                            "symbol": "€",
                            "currency": "EUR",
                            "pretty": "€139.27"
                        }
                    }, {
                        "description": "",
                        "price": {
                            "amount": 122166,
                            "str": "1221.66",
                            "symbol": "€",
                            "currency": "EUR",
                            "pretty": "€1221.66"
                        }
                    }, {
                        "description": "",
                        "price": {
                            "amount": 116349,
                            "str": "1163.49",
                            "symbol": "€",
                            "currency": "EUR",
                            "pretty": "€1163.49"
                        }
                    }, {
                        "description": "",
                        "price": {
                            "amount": 23270,
                            "str": "232.70",
                            "symbol": "€",
                            "currency": "EUR",
                            "pretty": "€232.70"
                        }
                    }, {
                        "description": "",
                        "price": {
                            "amount": 93079,
                            "str": "930.79",
                            "symbol": "€",
                            "currency": "EUR",
                            "pretty": "€930.79"
                        }
                    }, {
                        "description": "",
                        "price": {
                            "amount": 5817,
                            "str": "58.17",
                            "symbol": "€",
                            "currency": "EUR",
                            "pretty": "€58.17"
                        }
                    }, {
                        "description": "",
                        "price": {
                            "amount": 17165,
                            "str": "171.65",
                            "symbol": "€",
                            "currency": "EUR",
                            "pretty": "€171.65"
                        }
                    }, {
                        "description": "",
                        "price": {
                            "amount": 17165,
                            "str": "171.65",
                            "symbol": "€",
                            "currency": "EUR",
                            "pretty": "€171.65"
                        }
                    }, {
                        "description": "",
                        "price": {
                            "amount": 116061,
                            "str": "1160.61",
                            "symbol": "€",
                            "currency": "EUR",
                            "pretty": "€1160.61"
                        }
                    }, {
                        "description": "",
                        "price": {
                            "amount": 13927,
                            "str": "139.27",
                            "symbol": "€",
                            "currency": "EUR",
                            "pretty": "€139.27"
                        }
                    }, {
                        "description": "",
                        "price": {
                            "amount": 16172,
                            "str": "161.72",
                            "symbol": "€",
                            "currency": "EUR",
                            "pretty": "€161.72"
                        }
                    }],
                "premium": {
                    "monthly": {
                        "deposit": {
                            "amount": 41477,
                            "str": "414.77",
                            "symbol": "€",
                            "currency": "EUR",
                            "pretty": "€414.77"
                        },
                        "total": {
                            "amount": 118507,
                            "str": "1185.07",
                            "symbol": "€",
                            "currency": "EUR",
                            "pretty": "€1185.07"
                        },
                        "apr": "9.20%",
                        "installments": {
                            "code": "MO_DD09",
                            "number": 11,
                            "instalment": {
                                "amount": 7647,
                                "str": "76.47",
                                "symbol": "€",
                                "currency": "EUR",
                                "pretty": "€76.47"
                            },
                            "deposit": {
                                "amount": 41477,
                                "str": "414.77",
                                "symbol": "€",
                                "currency": "EUR",
                                "pretty": "€414.77"
                            },
                            "firstCollectionDate": 1504220400000
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
                            "amount": 118507,
                            "str": "1185.07",
                            "symbol": "€",
                            "currency": "EUR",
                            "pretty": "€1185.07"
                        },
                        "apr": "0%",
                        "annual": true,
                        "monthly": false
                    }
                },
                "name": "AA Value Insurance",
                "tagline": "",
                "insurerName": "Allianz",
                "type": "VALUE"
            }],
        "selection": {
            "policyType": "VALUE",
            "scheduleCode": "monthly",
            "addAaMembership": false
        }
    },
    "quoteAge": "Fresh"
};

//# sourceMappingURL=data:application/json;base64,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QkFDaEIsS0FBSyxFQUFFLFNBQVM7NEJBQ2hCLFFBQVEsRUFBRSxHQUFHOzRCQUNiLFVBQVUsRUFBRSxLQUFLOzRCQUNqQixRQUFRLEVBQUUsVUFBVTt5QkFDdkI7cUJBQ0osRUFBRTt3QkFDQyxhQUFhLEVBQUUsRUFBRTt3QkFDakIsT0FBTyxFQUFFOzRCQUNMLFFBQVEsRUFBRSxLQUFLOzRCQUNmLEtBQUssRUFBRSxRQUFROzRCQUNmLFFBQVEsRUFBRSxHQUFHOzRCQUNiLFVBQVUsRUFBRSxLQUFLOzRCQUNqQixRQUFRLEVBQUUsU0FBUzt5QkFDdEI7cUJBQ0osRUFBRTt3QkFDQyxhQUFhLEVBQUUsRUFBRTt3QkFDakIsT0FBTyxFQUFFOzRCQUNMLFFBQVEsRUFBRSxLQUFLOzRCQUNmLEtBQUssRUFBRSxRQUFROzRCQUNmLFFBQVEsRUFBRSxHQUFHOzRCQUNiLFVBQVUsRUFBRSxLQUFLOzRCQUNqQixRQUFRLEVBQUUsU0FBUzt5QkFDdEI7cUJBQ0osRUFBRTt3QkFDQyxhQUFhLEVBQUUsRUFBRTt3QkFDakIsT0FBTyxFQUFFOzRCQUNMLFFBQVEsRUFBRSxJQUFJOzRCQUNkLEtBQUssRUFBRSxPQUFPOzRCQUNkLFFBQVEsRUFBRSxHQUFHOzRCQUNiLFVBQVUsRUFBRSxLQUFLOzRCQUNqQixRQUFRLEVBQUUsUUFBUTt5QkFDckI7cUJBQ0osRUFBRTt3QkFDQyxhQUFhLEVBQUUsRUFBRTt3QkFDakIsT0FBTyxFQUFFOzRCQUNMLFFBQVEsRUFBRSxLQUFLOzRCQUNmLEtBQUssRUFBRSxRQUFROzRCQUNmLFFBQVEsRUFBRSxHQUFHOzRCQUNiLFVBQVUsRUFBRSxLQUFLOzRCQUNqQixRQUFRLEVBQUUsU0FBUzt5QkFDdEI7cUJBQ0osRUFBRTt3QkFDQyxhQUFhLEVBQUUsRUFBRTt3QkFDakIsT0FBTyxFQUFFOzRCQUNMLFFBQVEsRUFBRSxLQUFLOzRCQUNmLEtBQUssRUFBRSxRQUFROzRCQUNmLFFBQVEsRUFBRSxHQUFHOzRCQUNiLFVBQVUsRUFBRSxLQUFLOzRCQUNqQixRQUFRLEVBQUUsU0FBUzt5QkFD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
