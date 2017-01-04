"use strict";
exports.QUOTE = {
    "stages": [
        {
            "id": "quotation",
            "title": "Your Quote",
            "pages": [
                {
                    "id": "getting-started",
                    "title": "Getting Started",
                    "order": 0,
                    "uiOptions": {
                        "nextPage": "your-details",
                        "isVisible": true
                    },
                    "sections": [
                        {
                            "id": "pre-default",
                            "type": "default",
                            "fields": [
                                {
                                    "key": "email",
                                    "label": "What is your email?",
                                    "type": "email",
                                    "required": true,
                                    "order": 0
                                },
                                {
                                    "key": "amountOfDrivers",
                                    "label": "How many drivers?",
                                    "type": "counter",
                                    "required": true,
                                    "order": 1,
                                    "value": 1,
                                    "min": 1,
                                    "max": 5,
                                    "trigger": {
                                        "name": "additionalDrivers"
                                    }
                                },
                                {
                                    "key": "termsConditions",
                                    "label": "Terms and Conditions",
                                    "type": "questionText",
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
                    "order": 1,
                    "uiOptions": {
                        "nextPage": "choose-your-product",
                        "prevPage": "getting-started",
                        "isVisible": true
                    },
                    "templates": {
                        "additionalDriver": {
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
                                            "value": "Mr",
                                            "text": "Mr"
                                        },
                                        {
                                            "value": "Mrs",
                                            "text": "Mrs"
                                        },
                                        {
                                            "value": "Miss",
                                            "text": "Miss"
                                        },
                                        {
                                            "value": "Ms",
                                            "text": "Ms"
                                        }
                                    ],
                                    "required": true
                                },
                                {
                                    "key": "firstName",
                                    "label": "First Name",
                                    "type": "text",
                                    "required": true,
                                    "helpId": 214205625,
                                    "placeholder": "John",
                                    "order": 0
                                },
                                {
                                    "key": "lastName",
                                    "label": "Last Name",
                                    "placeholder": "Snow",
                                    "type": "text",
                                    "helpId": 213679469,
                                    "required": true,
                                    "order": 1
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
                                    ]
                                },
                                {
                                    "key": "phoneNumber",
                                    "label": "Phone Number",
                                    "type": "tel",
                                    "required": true,
                                    "disabled": false,
                                    "helpId": 214224585,
                                    "order": 2,
                                    "validators": [
                                        "validPhoneNumberValidate"
                                    ]
                                },
                                {
                                    "key": "typeOfEmployment",
                                    "label": "Type of Employment",
                                    "type": "dropdown",
                                    "options": [
                                        "Employed",
                                        "Household Duties",
                                        "Retired",
                                        "Self Employed",
                                        "Unemployed"
                                    ],
                                    "required": true,
                                    "order": 2,
                                    "validators": []
                                },
                                {
                                    "key": "occupation",
                                    "label": "Occupation",
                                    "type": "autocomplete",
                                    "placeholder": "Select an Occupation",
                                    "serviceUrl": "motor/occupation/",
                                    "autoCompleteType": "search",
                                    "required": true,
                                    "disabled": false,
                                    "order": 2,
                                    "validators": []
                                },
                                {
                                    "key": "business",
                                    "label": "Type of Business",
                                    "type": "autocomplete",
                                    "placeholder": "Select an Area of Business",
                                    "trigger": {
                                        "key": "occupation",
                                        "name": "occupation"
                                    },
                                    "serviceUrl": "motor/occupation/",
                                    "autoCompleteType": "search",
                                    "required": true,
                                    "order": 2,
                                    "validators": []
                                },
                                {
                                    "key": "livedOutsideIreland",
                                    "label": "Have you lived outside the Republic of Ireland or the UK in the last 12 months?",
                                    "type": "radio",
                                    "options": [
                                        {
                                            "value": "Yes",
                                            "text": "Yes"
                                        },
                                        {
                                            "value": "No",
                                            "text": "No"
                                        }
                                    ],
                                    "required": true,
                                    "order": 2,
                                    "validators": []
                                }
                            ]
                        }
                    },
                    "sections": [
                        {
                            "id": "details-default",
                            "type": "default",
                            "title": "Primary Driver",
                            "fields": [
                                {
                                    "key": "title",
                                    "label": "Title",
                                    "type": "radio",
                                    "order": 0,
                                    "options": [
                                        {
                                            "value": "Mr",
                                            "text": "Mr"
                                        },
                                        {
                                            "value": "Mrs",
                                            "text": "Mrs"
                                        },
                                        {
                                            "value": "Miss",
                                            "text": "Miss"
                                        },
                                        {
                                            "value": "Ms",
                                            "text": "Ms"
                                        }
                                    ],
                                    "required": true
                                },
                                {
                                    "key": "firstName",
                                    "label": "First Name",
                                    "type": "text",
                                    "required": true,
                                    "helpId": 214205625,
                                    "placeholder": "John",
                                    "order": 0
                                },
                                {
                                    "key": "lastName",
                                    "label": "Last Name",
                                    "placeholder": "Snow",
                                    "type": "text",
                                    "helpId": 213679469,
                                    "required": true,
                                    "order": 1
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
                                    ]
                                },
                                {
                                    "key": "phoneNumber",
                                    "label": "Phone Number",
                                    "type": "tel",
                                    "required": true,
                                    "disabled": false,
                                    "helpId": 214224585,
                                    "order": 2,
                                    "validators": [
                                        "validPhoneNumberValidate"
                                    ]
                                },
                                {
                                    "key": "typeOfEmployment",
                                    "label": "Type of Employment",
                                    "type": "dropdown",
                                    "options": [
                                        "Employed",
                                        "Household Duties",
                                        "Retired",
                                        "Self Employed",
                                        "Unemployed"
                                    ],
                                    "required": true,
                                    "order": 2,
                                    "validators": []
                                },
                                {
                                    "key": "occupation",
                                    "label": "Occupation",
                                    "type": "autocomplete",
                                    "placeholder": "Select an Occupation",
                                    "serviceUrl": "motor/occupation/",
                                    "autoCompleteType": "search",
                                    "required": true,
                                    "disabled": false,
                                    "order": 2,
                                    "validators": []
                                },
                                {
                                    "key": "business",
                                    "label": "Type of Business",
                                    "type": "autocomplete",
                                    "placeholder": "Select an Area of Business",
                                    "trigger": {
                                        "key": "occupation",
                                        "name": "occupation"
                                    },
                                    "serviceUrl": "motor/occupation/",
                                    "autoCompleteType": "search",
                                    "required": true,
                                    "order": 2,
                                    "validators": []
                                },
                                {
                                    "key": "livedOutsideIreland",
                                    "label": "Have you lived outside the Republic of Ireland or the UK in the last 12 months?",
                                    "type": "radio",
                                    "options": [
                                        {
                                            "value": "Yes",
                                            "text": "Yes"
                                        },
                                        {
                                            "value": "No",
                                            "text": "No"
                                        }
                                    ],
                                    "required": true,
                                    "order": 2,
                                    "validators": []
                                }
                            ]
                        }
                    ]
                }
            ],
            "isComplete": false,
            "uiOptions": {}
        },
        {
            "id": "price-presentation",
            "pages": [
                {
                    "id": "choose-your-product",
                    "title": "Choose a Product",
                    "uiOptions": {
                        "prevPage": "your-penalties",
                        "nextPage": "choose-your-payment",
                        "isTitleHidden": true,
                        "isVisible": true
                    }
                },
                {
                    "id": "choose-your-payment",
                    "title": "Choose your payment",
                    "uiOptions": {
                        "prevPage": "choose-your-product",
                        "isVisible": true
                    }
                }
            ],
            "isComplete": false,
            "uiOptions": {
                "isWide": true,
                "isTitleHidden": true
            }
        }
    ]
};

//# sourceMappingURL=data:application/json;base64,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QUFFLEtBQUs7NENBQ2QsTUFBTSxFQUFFLEtBQUs7eUNBQ2Q7d0NBQ0Q7NENBQ0UsT0FBTyxFQUFFLElBQUk7NENBQ2IsTUFBTSxFQUFFLElBQUk7eUNBQ2I7cUNBQ0Y7b0NBQ0QsVUFBVSxFQUFFLElBQUk7b0NBQ2hCLE9BQU8sRUFBRSxDQUFDO29DQUNWLFlBQVksRUFBRSxFQUFFO2lDQUNqQjs2QkFDRjt5QkFDRjtxQkFDRjtpQkFDRjthQUNGO1lBQ0QsWUFBWSxFQUFFLEtBQUs7WUFDbkIsV0FBVyxFQUFFLEVBQUU7U0FDaEI7UUFDRDtZQUNFLElBQUksRUFBRSxvQkFBb0I7WUFDMUIsT0FBTyxFQUFFO2dCQUNQO29CQUNFLElBQUksRUFBRSxxQkFBcUI7b0JBQzNCLE9BQU8sRUFBRSxrQkFBa0I7b0JBQzNCLFdBQVcsRUFBRTt3QkFDWCxVQUFVLEVBQUUsZ0JBQWdCO3dCQUM1QixVQUFVLEVBQUUscUJBQXFCO3dCQUNqQyxlQUFlLEVBQUUsSUFBSTt3QkFDckIsV0FBVyxFQUFFLElBQUk7cUJBQ2xCO2lCQUNGO2dCQUNEO29CQUNFLElBQUksRUFBRSxxQkFBcUI7b0JBQzNCLE9BQU8sRUFBRSxxQkFBcUI7b0JBQzlCLFdBQVcsRUFBRTt3QkFDWCxVQUFVLEVBQUUscUJBQXFCO3dCQUNqQyxXQUFXLEVBQUUsSUFBSTtxQkFDbEI7aUJBQ0Y7YUFDRjtZQUNELFlBQVksRUFBRSxLQUFLO1lBQ25CLFdBQVcsRUFBRTtnQkFDWCxRQUFRLEVBQUUsSUFBSTtnQkFDZCxlQUFlLEVBQUUsSUFBSTthQUN0QjtTQUNGO0tBQ0Y7Q0FDRixDQUFBIiwiZmlsZSI6InNpeHRvX2NvbnN0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbbnVsbF0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
