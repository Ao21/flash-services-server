"use strict";
exports.CONFIG = {
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
                                    "helpId": 115001401969,
                                    "uiOptions": {
                                        "summaryTitle": ""
                                    },
                                    "key": "email",
                                    "label": "Email Address",
                                    "order": 0,
                                    "required": true,
                                    "validators": ["validEmailValidate"]
                                }, {
                                    "type": "memberSelector",
                                    "helpId": 115001413725,
                                    "uiOptions": {
                                        "summaryTitle": "Number of Drivers"
                                    },
                                    "key": "amountOfDrivers",
                                    "label": "Number of drivers on the policy",
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
                                    "content": "<p>By proceeding, I agree to the <a href=\"http://www.theaa.ie/~/media/files/motor/assumptions.ashx\" target=\"_blank\">AA Assumptions</a> and <a href=\"https://www.theaa.ie/~/media/Files/AA%20Ireland/Terms%20And%20Conditions/MyAATerms.ashx\" target=\"_blank\">myAA Terms and Conditions</a>. I have read and agree to the <a href=\"http://www.theaa.ie/aa/about-us/privacy-policy.aspx\" target=\"_blank\">AA Privacy Policy</a> and <a href=\"http://www.theaa.ie/~/media/Files/AA%20Ireland/Terms%20and%20conditions/Motor-Terms-Business.aspx\" target=\"_blank\">Terms of Business</a></p>"
                                }]
                        }],
                    "subheading": "First we need some details to get started."
                }, {
                    "id": "your-details",
                    "title": "Your Details",
                    "uiOptions": {
                        "nextPage": "your-address",
                        "prevPage": "getting-started"
                    },
                    "order": 1,
                    "sections": [{
                            "id": "details-default",
                            "title": "We need to know some details about you so that we can give you the best quote.",
                            "type": "default",
                            "uiOptions": {},
                            "isDriver": true,
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
                                    validators: ['inputFieldValidate'],
                                    "required": true
                                }, {
                                    "type": "text",
                                    "uiOptions": {
                                        "summaryTitle": "Last Name"
                                    },
                                    "key": "lastName",
                                    "label": "Last Name",
                                    "order": 1,
                                    validators: ['inputFieldValidate'],
                                    "required": true
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
                                    "label": "Occupation?",
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
                                    "required": true
                                }, {
                                    "type": "text",
                                    "uiOptions": {
                                        "summaryTitle": "Last Name"
                                    },
                                    "key": "lastName",
                                    "label": "Last Name",
                                    "order": 1,
                                    "required": true
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
                                    "placeholder": "Select an Occupation",
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
                        "prevPage": "your-details"
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
                                            "validators": []
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
                        "prevPage": "your-address"
                    },
                    "order": 1,
                    "sections": [{
                            "id": "car-default",
                            "title": "You're half way there, we just need to know a little more.",
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
                                    "fields": [{
                                            "type": "text",
                                            "hidden": true,
                                            "uiOptions": {},
                                            "key": "yearManufactured",
                                            "order": 4,
                                            "required": false,
                                            "validators": []
                                        }, {
                                            "type": "text",
                                            "hidden": true,
                                            "uiOptions": {},
                                            "key": "vehicleRegistrationNumber",
                                            "order": 4,
                                            "required": false,
                                            "validators": []
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
                                    "validators": []
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
                                    "disabled": false
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
                                    "disabled": false
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
                                    "disabled": false
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
                                            "name": "Alarm"
                                        }, {
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
                                            "uiOptions": {
                                                "summaryTitle": "Tracker"
                                            },
                                            "key": "security-tracker",
                                            "required": false,
                                            "timeline": false,
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
                                    "fields": [{
                                            "type": "text",
                                            "hidden": true,
                                            "uiOptions": {},
                                            "key": "yearManufactured",
                                            "order": 4,
                                            "required": false,
                                            "validators": []
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
                        "prevPage": "your-car"
                    },
                    "order": 1,
                    "sections": [{
                            "id": "licence-default",
                            "type": "default",
                            "uiOptions": {},
                            "isDriver": true,
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
                                        "summaryTitle": "Number of years you held your licence"
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
                                            "description": "9+"
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
                                            "description": "9+"
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
                        "prevPage": "your-licence"
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
                                            "trigger": {
                                                "key": "insuredNamedDriver",
                                                "name": "showBasedOnKey",
                                                "isObject": true
                                            },
                                            "validators": ['namedDriverExperience'],
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
                                            "validators": ['noclaimsBonusValidate'],
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
                                            "label": "When does your currnet policy end?",
                                            "order": 5,
                                            "required": true,
                                            "trigger": {
                                                "key": "insuredInYourOwnName",
                                                "name": "showBasedOnKey",
                                                "isObject": true
                                            },
                                            "validators": ["validDateValidate"],
                                            "disabled": false
                                        }]
                                }, {
                                    "type": "date",
                                    "helpId": 115001407029,
                                    "uiOptions": {},
                                    "key": "policyStartDate",
                                    "label": "What date would you like your new policy to start?",
                                    "order": 7,
                                    "required": true,
                                    "validators": ["policyStartDateValidate"]
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
                        "nextPage": "your-penalty-points",
                        "prevPage": "your-cover"
                    },
                    "order": 1,
                    "sections": [{
                            "id": "claim-primary-driver",
                            "type": "claim",
                            "uiOptions": {},
                            "isDriver": true,
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
                                    // "validators": ["validDateValidate", "validLastFiveYearsValidate", "claimDateValidator"],
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
                    "id": "your-penalty-points",
                    "title": "Penalty Points",
                    "helpId": 115001419965,
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
                                    // "validators": ["validDateValidate", "validLastThreeYearsValidate", "penaltyDateValidator"],
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
                                    "type": "number",
                                    "helpId": 115001420185,
                                    "uiOptions": {},
                                    "key": "howManyPoints",
                                    "validators": ['maxPenaltyPoints'],
                                    "label": "How many penalty points did you get?",
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
                "isWide": true,
                "isPagesHidden": true
            },
            "pages": [{
                    "id": "choose-your-product",
                    "title": "Choose the best cover for you",
                    "uiOptions": {
                        "prevPage": "your-penalty-points",
                        "nextPage": "choose-your-payment"
                    }
                }, {
                    "id": "are-you-a-member",
                    "title": "Are you a Member?",
                    "helpId": 115001402049,
                    "uiOptions": {
                        "prevPage": "choose-your-product",
                        "nextPage": "choose-your-payment"
                    }
                }, {
                    "id": "choose-your-payment",
                    "title": "Choose your payment",
                    "uiOptions": {
                        "prevPage": "choose-your-product",
                        "nextPage": "additional-questions"
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
                        "prevPage": "choose-your-payment"
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
                                    "helpId": 115001408249,
                                    "uiOptions": {},
                                    "key": "driverLicenceNumber",
                                    "label": "Driver's Licence number",
                                    "required": false,
                                    "trigger": {
                                        "name": "getValueForValidationFromQuestion",
                                        "key": "typeOfLicence",
                                        "value": "FullIrish"
                                    },
                                    "validators": ["licenceNumberValidate"],
                                    "disabled": false
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
                    "templates": [{
                            "type": "default",
                            "uiOptions": {},
                            "hasQuestionsByDefault": true,
                            "additional": true,
                            "fields": [{
                                    "type": "text",
                                    "helpId": 115001408249,
                                    "uiOptions": {},
                                    "key": "driverLicenceNumber",
                                    "label": "Driver's Licence number",
                                    "required": false,
                                    "validators": ["licenceNumberValidate"],
                                    "disabled": false
                                }]
                        }]
                }, {
                    "id": "payment",
                    "title": "Payment",
                    "uiOptions": {
                        "prevPage": "additional-questions",
                        "nextPage": "confirmation"
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
                        "isTimelineHidden": true
                    }
                }]
        }]
};

//# sourceMappingURL=data:application/json;base64,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N0I7aUJBQ0osQ0FBQztTQUNMLEVBQUU7WUFDQyxJQUFJLEVBQUUsY0FBYztZQUNwQixZQUFZLEVBQUUsS0FBSztZQUNuQixPQUFPLEVBQUUsY0FBYztZQUN2QixXQUFXLEVBQUU7Z0JBQ1QsUUFBUSxFQUFFLElBQUk7Z0JBQ2Qsa0JBQWtCLEVBQUUsSUFBSTtnQkFDeEIsaUJBQWlCLEVBQUUsSUFBSTtnQkFDdkIsb0JBQW9CLEVBQUUsSUFBSTtnQkFDMUIsa0JBQWtCLEVBQUUsSUFBSTtnQkFDeEIsZUFBZSxFQUFFLElBQUk7YUFDeEI7WUFDRCxPQUFPLEVBQUUsQ0FBQztvQkFDTixJQUFJLEVBQUUsY0FBYztvQkFDcEIsT0FBTyxFQUFFLGNBQWM7b0JBQ3ZCLFdBQVcsRUFBRTt3QkFDVCxVQUFVLEVBQUUsU0FBUzt3QkFDckIsaUJBQWlCLEVBQUUsSUFBSTt3QkFDdkIsa0JBQWtCLEVBQUUsSUFBSTtxQkFDM0I7aUJBQ0osQ0FBQztTQUNMLENBQUM7Q0FDTCxDQUFBIiwiZmlsZSI6ImNvbnN0YW50c19rZWl0aC5qcyIsInNvdXJjZXNDb250ZW50IjpbbnVsbF0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
