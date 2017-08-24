export const RETRIEVE_QUOTE = {
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
}