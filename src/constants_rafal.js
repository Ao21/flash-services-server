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
                                        "helpId": 115001401969,
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
                                        "helpId": 115001413725,
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
                                        "content": "<p>By proceeding, I agree to the <a href=\"http://www.theaa.ie/~/media/files/motor/assumptions.ashx\" target=\"_blank\">AA Assumptions</a> and <a href=\"https://www.theaa.ie/~/media/Files/AA%20Ireland/Terms%20And%20Conditions/MyAATerms.ashx\" target=\"_blank\">myAA Terms and Conditions</a>. I have read and agree to the <a href=\"http://www.theaa.ie/aa/about-us/privacy-policy.aspx\" target=\"_blank\">AA Privacy Policy</a> and <a href=\"http://www.theaa.ie/~/media/Files/AA%20Ireland/Terms%20and%20conditions/Motor-Terms-Business.aspx\" target=\"_blank\">Terms of Business</a></p>"
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
                                "id": "your-details",
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
                                        }
                                    }, {
                                        "type": "autocomplete",
                                        "type": "autocomplete",
                                        "helpId": 115001402229,
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
                                        "helpId": 115000449309,
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
                                        "helpId": 115001402229,
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
                                        "helpId": 115001361705,
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
                                                "helpId": 115001402349,
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
                                                "helpId": 115001402469,
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
                                                "helpId": 115001414145,
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
                                                "helpId": 115001402489,
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
                        "helpId": 115001414305,
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
                                                    "id": "KIA",
                                                    "description": "KIA"
                                                },
                                                "link": "carInformation",
                                                "serviceUrl": "reference/vehicle/make/",
                                                "autoCompleteType": "all"
                                            }, {
                                                "type": "autocomplete",
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
                                                    "id": "SPORTAGE 1.7 D EX 2WD",
                                                    "description": "SPORTAGE 1.7 D EX 2WD"
                                                },
                                                "link": "carMake",
                                                "serviceUrl": "reference/vehicle/model/",
                                                "autoCompleteType": "linked"
                                            }, {
                                                "type": "dropdown",
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
                                        "type": "date",
                                        "helpId": 115001414365,
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
                                        "helpId": 115001414625,
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
                                        "value": 500000
                                    }, {
                                        "type": "tel",
                                        "type": "tel",
                                        "helpId": 115001416805,
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
                                        "helpId": 115001417705,
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
                                        "serviceUrl": "reference/areaCarUsed/",
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
                                        "type": "date",
                                        "helpId": 115001414365,
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
                                        "helpId": 115001414625,
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
                                        "type": "tel",
                                        "helpId": 115001416805,
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
                                        "helpId": 115001417705,
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
                                        "helpId": 115001405929,
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
                                        "helpId": 115001418565,
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
                                        "helpId": 115001418525,
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
                                        "helpId": 115001405929,
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
                                        "helpId": 115001418565,
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
                                        "helpId": 115001418525,
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
                                                "helpId": 115001418625,
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
                                                "type": "dropdown",
                                                "helpId": 115001407149,
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
                                                "helpId": 115001418685,
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
                                                    "id": "Allianz",
                                                    "description": "Allianz"
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
                                                "helpId": 115001407209,
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
                                                "helpId": 115001407329,
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
                                                "helpId": 115001407469,
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
                                                "helpId": 115001418725,
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
                                                "helpId": 115001419005,
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
                                                "helpId": 115001419065,
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
                                        "helpId": 115001407029,
                                        "uiOptions": {},
                                        "key": "policyStartDate",
                                        "label": "What date would you like to start your policy from?",
                                        "order": 7,
                                        "required": true,
                                        "value": 1497919908000
                                    }, {
                                        "type": "radio",
                                        "type": "radio",
                                        "helpId": 115001004829,
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
                                                "id": "THIRDPARTYFIREANDTHEFT",
                                                "description": "Third Party, Fire and Theft"
                                            }],
                                        "alignment": "vertical"
                                    }, {
                                        "type": "radio",
                                        "type": "radio",
                                        "helpId": 115001407589,
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
                        "helpId": 115001407729,
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
                                "helpId": 115001407729,
                                "uiOptions": {},
                                "additional": true,
                                "fields": [{
                                        "type": "date",
                                        "type": "date",
                                        "helpId": 115001419745,
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
                                        "helpId": 115001419765,
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
                                        "type": "currency",
                                        "helpId": 115001419845,
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
                                        "helpId": 115001420025,
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
                                        "type": "text",
                                        "helpId": 115001420185,
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
                    "isWide": "true",
                    "isPagesHidden": "true"
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
                                        "type": "text",
                                        "helpId": 115001408249,
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
                                    }, {
                                        "type": "text",
                                        "type": "text",
                                        "uiOptions": {},
                                        "key": "carRegistration",
                                        "label": "Please enter your car registration in order to purchase.",
                                        "required": true,
                                        "trigger": {
                                            "name": "getValueFromQuestion",
                                            "key": "carSearchQuestion"
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
                                        "type": "text",
                                        "helpId": 115001408249,
                                        "uiOptions": {},
                                        "key": "driverLicenceNumber",
                                        "label": "What is your Drivers Licence number?",
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
        "reference": "COLA27000414",
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
                            "amount": 295632,
                            "str": "2956.32",
                            "symbol": "€",
                            "currency": "EUR",
                            "pretty": "€2956.32"
                        }
                    }, {
                        "description": "Accidental Damage",
                        "price": {
                            "amount": 23498,
                            "str": "234.98",
                            "symbol": "€",
                            "currency": "EUR",
                            "pretty": "€234.98"
                        }
                    }, {
                        "description": "No Claims Discount",
                        "price": {
                            "amount": -143608,
                            "str": "-1436.08",
                            "symbol": "€",
                            "currency": "EUR",
                            "pretty": "€-1436.08"
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
                            "amount": 8911,
                            "str": "89.11",
                            "symbol": "€",
                            "currency": "EUR",
                            "pretty": "€89.11"
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
                            "amount": 65497,
                            "str": "654.97",
                            "symbol": "€",
                            "currency": "EUR",
                            "pretty": "€654.97"
                        },
                        "total": {
                            "amount": 189579,
                            "str": "1895.79",
                            "symbol": "€",
                            "currency": "EUR",
                            "pretty": "€1895.79"
                        },
                        "apr": "9.20%",
                        "installments": {
                            "code": "MO_DD09",
                            "number": 11,
                            "instalment": {
                                "amount": 12075,
                                "str": "120.75",
                                "symbol": "€",
                                "currency": "EUR",
                                "pretty": "€120.75"
                            },
                            "deposit": {
                                "amount": 65497,
                                "str": "654.97",
                                "symbol": "€",
                                "currency": "EUR",
                                "pretty": "€654.97"
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
                            "amount": 189579,
                            "str": "1895.79",
                            "symbol": "€",
                            "currency": "EUR",
                            "pretty": "€1895.79"
                        },
                        "apr": "0%",
                        "annual": true,
                        "monthly": false
                    }
                },
                "name": "STANDARD",
                "id": "STANDARD",
                "tagline": "Our Premium Product"
            }],
        "selection": {
            "policyType": "STANDARD",
            "scheduleCode": "monthly",
            "addAaMembership": false
        }
    },
    "quoteAge": "Fresh"
};

//# sourceMappingURL=data:application/json;base64,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RSxTQUFTOzZCQUN0Qjs0QkFDRCxTQUFTLEVBQUU7Z0NBQ1AsUUFBUSxFQUFFLEtBQUs7Z0NBQ2YsS0FBSyxFQUFFLFFBQVE7Z0NBQ2YsUUFBUSxFQUFFLEdBQUc7Z0NBQ2IsVUFBVSxFQUFFLEtBQUs7Z0NBQ2pCLFFBQVEsRUFBRSxTQUFTOzZCQUN0Qjt5QkFDSjt3QkFDRCxRQUFRLEVBQUUsS0FBSzt3QkFDZixTQUFTLEVBQUUsSUFBSTtxQkFDbEI7b0JBQ0QsUUFBUSxFQUFFO3dCQUNOLFNBQVMsRUFBRTs0QkFDUCxRQUFRLEVBQUUsQ0FBQzs0QkFDWCxLQUFLLEVBQUUsTUFBTTs0QkFDYixRQUFRLEVBQUUsR0FBRzs0QkFDYixVQUFVLEVBQUUsS0FBSzs0QkFDakIsUUFBUSxFQUFFLE9BQU87eUJBQ3BCO3dCQUNELE9BQU8sRUFBRTs0QkFDTCxRQUFRLEVBQUUsTUFBTTs0QkFDaEIsS0FBSyxFQUFFLFNBQVM7NEJBQ2hCLFFBQVEsRUFBRSxHQUFHOzRCQUNiLFVBQVUsRUFBRSxLQUFLOzRCQUNqQixRQUFRLEVBQUUsVUFBVTt5QkFDdkI7d0JBQ0QsS0FBSyxFQUFFLElBQUk7d0JBQ1gsUUFBUSxFQUFFLElBQUk7d0JBQ2QsU0FBUyxFQUFFLEtBQUs7cUJBQ25CO2lCQUNKO2dCQUNELE1BQU0sRUFBRSxVQUFVO2dCQUNsQixJQUFJLEVBQUUsVUFBVTtnQkFDaEIsU0FBUyxFQUFFLHFCQUFxQjthQUNuQyxDQUFDO1FBQ0YsV0FBVyxFQUFFO1lBQ1QsWUFBWSxFQUFFLFVBQVU7WUFDeEIsY0FBYyxFQUFFLFNBQVM7WUFDekIsaUJBQWlCLEVBQUUsS0FBSztTQUMzQjtLQUNKO0lBQ0QsVUFBVSxFQUFFLE9BQU87Q0FDdEIsQ0FBQSIsImZpbGUiOiJjb25zdGFudHNfcmFmYWwuanMiLCJzb3VyY2VzQ29udGVudCI6W251bGxdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
