export const QUOTE = {
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
}