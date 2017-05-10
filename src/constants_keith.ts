export const KEITH = { 
   "stages":[ 
      { 
         "id":"quotation",
         "isComplete":false,
         "title":"Your Quote",
         "pages":[ 
            { 
               "id":"getting-started",
               "title":"Getting Started",
               "uiOptions":{ 
                  "nextPage":"your-details"
               },
               "order":0,
               "sections":[ 
                  { 
                     "id":"pre-default",
                     "type":"default",
                     "fields":[ 
                        { 
                           "type":"myaaEmail",
                           "uiOptions":{ 
                              "summaryTitle":""
                           },
                           "key":"email",
                           "label":"What is your Email Address?",
                           "order":0,
                           "required":true,
                           "validators":[ 
                              "validEmailValidate"
                           ]
                        },
                        { 
                           "type":"memberSelector",
                           "uiOptions":{ 
                              "summaryTitle":"Amount of Drivers"
                           },
                           "key":"amountOfDrivers",
                           "label":"How many drivers will there be on your policy including yourself?",
                           "order":1,
                           "required":true,
                           "value":1,
                           "max":5,
                           "min":1
                        },
                        { 
                           "type":"questionText",
                           "uiOptions":{ 
                              "summaryHidden":"true"
                           },
                           "key":"termsConditions",
                           "label":"Terms and Conditions",
                           "order":2,
                           "timeline":false,
                           "content":"By providing the requested data, you consent to AA's Data Protection and Privacy Policy and to AA using it for administration and keeping you informed by mail, telephone, email and SMS of other products and services from us. By proceeding, you consent to & confirm that you have read and accepted the AA Data Protection & Privacy Policy and the AA Terms & Conditions"
                        }
                     ]
                  }
               ]
            },
            { 
               "id":"your-details",
               "title":"Details",
               "uiOptions":{ 
                  "nextPage":"your-address",
                  "prevPage":"getting-started"
               },
               "order":1,
               "sections":[ 
                  { 
                     "id":"details-default",
                     "title":"Primary Driver",
                     "type":"default",
                     "isDriver":true,
                     "fields":[ 
                        { 
                           "type":"radio",
                           "uiOptions":{ 
                              "summaryTitle":"Email"
                           },
                           "key":"title",
                           "label":"Title",
                           "order":0,
                           "required":true,
                           "options":[ 
                              { 
                                 "id":"Mr",
                                 "description":"Mr"
                              },
                              { 
                                 "id":"Mrs",
                                 "description":"Mrs"
                              },
                              { 
                                 "id":"Miss",
                                 "description":"Miss"
                              },
                              { 
                                 "id":"Ms",
                                 "description":"Ms"
                              }
                           ]
                        },
                        { 
                           "type":"text",
                           "helpId":214205625,
                           "uiOptions":{ 
                              "summaryTitle":"First Name"
                           },
                           "key":"firstName",
                           "label":"First Name",
                           "order":0,
                           "required":true
                        },
                        { 
                           "type":"text",
                           "helpId":213679469,
                           "uiOptions":{ 
                              "summaryTitle":"Last Name"
                           },
                           "key":"lastName",
                           "label":"Last Name",
                           "order":1,
                           "required":true
                        },
                        { 
                           "type":"date",
                           "helpId":213685289,
                           "uiOptions":{ 
                              "summaryTitle":"Date of Birth"
                           },
                           "key":"dateOfBirth",
                           "label":"Date Of Birth",
                           "order":2,
                           "required":true,
                           "validators":[ 
                              "validDateValidate",
                              "validOverEighteenValidate"
                           ],
                           "disabled":false
                        },
                        { 
                           "type":"tel",
                           "helpId":214224585,
                           "uiOptions":{ 
                              "summaryTitle":"Phone Number"
                           },
                           "key":"phoneNumber",
                           "label":"Contact Number",
                           "order":2,
                           "required":true,
                           "validators":[ 
                              "validPhoneNumberValidate"
                           ],
                           "disabled":false
                        },
                        { 
                           "type":"dropdown",
                           "uiOptions":{ 
                              "summaryTitle":"Type of Employment"
                           },
                           "key":"typeOfEmployment",
                           "label":"Type of Employment",
                           "order":2,
                           "required":true,
                           "options":[ 
                              { 
                                 "id":"Employed",
                                 "description":"Employed"
                              },
                              { 
                                 "id":"HouseholdDuties",
                                 "description":"Household Duties"
                              },
                              { 
                                 "id":"Retired",
                                 "description":"Retired"
                              },
                              { 
                                 "id":"SelfEmployed",
                                 "description":"Self Employed"
                              },
                              { 
                                 "id":"Unemployed",
                                 "description":"Unemployed"
                              }
                           ]
                        },
                        { 
                           "type":"autocomplete",
                           "helpId":1001,
                           "uiOptions":{ 
                              "summaryTitle":"Occupation"
                           },
                           "key":"occupation",
                           "label":"What is your Occupation?",
                           "order":2,
                           "required":true,
                           "disabled":false,
                           "placeholder":"Select an Occupation",
                           "serviceUrl":"occupation/",
                           "autoCompleteType":"search"
                        },
                        { 
                           "type":"autocomplete",
                           "uiOptions":{ 
                              "summaryTitle":"Type of business"
                           },
                           "key":"business",
                           "label":"Type of Business",
                           "order":2,
                           "required":true,
                           "trigger":{ 
                              "key":"occupation",
                              "name":"occupation"
                           },
                           "placeholder":"Select an Area of Business",
                           "serviceUrl":"occupation/",
                           "autoCompleteType":"search"
                        },
                        { 
                           "type":"radio",
                           "key":"livedOutsideIreland",
                           "label":"Have you lived outside of Ireland or the UK in the past 12 months?",
                           "order":2,
                           "required":true,
                           "options":[ 
                              { 
                                 "id":"true",
                                 "description":"Yes"
                              },
                              { 
                                 "id":"false",
                                 "description":"No"
                              }
                           ]
                        }
                     ]
                  }
               ],
               "templates":[ 
                  { 
                     "type":"default",
                     "hasQuestionsByDefault":true,
                     "additional":true,
                     "fields":[ 
                        { 
                           "type":"radio",
                           "uiOptions":{ 
                              "summaryTitle":"Email"
                           },
                           "key":"title",
                           "label":"Title",
                           "order":0,
                           "required":true,
                           "options":[ 
                              { 
                                 "id":"Mr",
                                 "description":"Mr"
                              },
                              { 
                                 "id":"Mrs",
                                 "description":"Mrs"
                              },
                              { 
                                 "id":"Miss",
                                 "description":"Miss"
                              },
                              { 
                                 "id":"Ms",
                                 "description":"Ms"
                              }
                           ]
                        },
                        { 
                           "type":"text",
                           "helpId":214205625,
                           "uiOptions":{ 
                              "summaryTitle":"First Name"
                           },
                           "key":"firstName",
                           "label":"First Name",
                           "order":0,
                           "required":true
                        },
                        { 
                           "type":"text",
                           "helpId":213679469,
                           "uiOptions":{ 
                              "summaryTitle":"Last Name"
                           },
                           "key":"lastName",
                           "label":"Last Name",
                           "order":1,
                           "required":true
                        },
                        { 
                           "type":"date",
                           "helpId":213685289,
                           "uiOptions":{ 
                              "summaryTitle":"Date of Birth"
                           },
                           "key":"dateOfBirth",
                           "label":"Date Of Birth",
                           "order":2,
                           "required":true,
                           "validators":[ 
                              "validDateValidate",
                              "validOverEighteenValidate"
                           ],
                           "disabled":false
                        },
                        { 
                           "type":"tel",
                           "helpId":214224585,
                           "uiOptions":{ 
                              "summaryTitle":"Phone Number"
                           },
                           "key":"phoneNumber",
                           "label":"Contact Number",
                           "order":2,
                           "required":true,
                           "validators":[ 
                              "validPhoneNumberValidate"
                           ],
                           "disabled":false
                        },
                        { 
                           "type":"dropdown",
                           "helpId":1001,
                           "uiOptions":{ 
                              "summaryTitle":"On who's policy"
                           },
                           "key":"relationToMainDriver",
                           "label":"Relationship to Main Driver",
                           "order":1,
                           "required":true,
                           "options":[ 
                              { 
                                 "id":"Brother in Law",
                                 "description":"Brother in Law"
                              },
                              { 
                                 "id":"Business Partner",
                                 "description":"Business Partner"
                              },
                              { 
                                 "id":"Common Law Spouse",
                                 "description":"Common Law Spouse"
                              },
                              { 
                                 "id":"Daughter",
                                 "description":"Daughter"
                              },
                              { 
                                 "id":"Daughter in Law",
                                 "description":"Daughter in Law"
                              },
                              { 
                                 "id":"Employee of Proposer",
                                 "description":"Employee of Proposer"
                              },
                              { 
                                 "id":"Employer of Proposer",
                                 "description":"Employer of Proposer"
                              },
                              { 
                                 "id":"Father in Law",
                                 "description":"Father in Law"
                              },
                              { 
                                 "id":"Friend",
                                 "description":"Friend"
                              },
                              { 
                                 "id":"Mother In Law",
                                 "description":"Mother In Law"
                              },
                              { 
                                 "id":"Parent",
                                 "description":"Parent"
                              },
                              { 
                                 "id":"Partner",
                                 "description":"Partner"
                              },
                              { 
                                 "id":"Proposer",
                                 "description":"Proposer"
                              },
                              { 
                                 "id":"Relative",
                                 "description":"Relative"
                              },
                              { 
                                 "id":"Sister",
                                 "description":"Sister"
                              },
                              { 
                                 "id":"Sister in Law",
                                 "description":"Sister in Law"
                              },
                              { 
                                 "id":"Son",
                                 "description":"Son"
                              },
                              { 
                                 "id":"Son in Law",
                                 "description":"Son in Law"
                              },
                              { 
                                 "id":"Spouse",
                                 "description":"Spouse"
                              },
                              { 
                                 "id":"Tenant",
                                 "description":"Tenant"
                              },
                              { 
                                 "id":"Unrelated",
                                 "description":"Unrelated"
                              }
                           ]
                        },
                        { 
                           "type":"dropdown",
                           "uiOptions":{ 
                              "summaryTitle":"Type of Employment"
                           },
                           "key":"typeOfEmployment",
                           "label":"Type of Employment",
                           "order":2,
                           "required":true,
                           "options":[ 
                              { 
                                 "id":"Employed",
                                 "description":"Employed"
                              },
                              { 
                                 "id":"HouseholdDuties",
                                 "description":"Household Duties"
                              },
                              { 
                                 "id":"Retired",
                                 "description":"Retired"
                              },
                              { 
                                 "id":"SelfEmployed",
                                 "description":"Self Employed"
                              },
                              { 
                                 "id":"Unemployed",
                                 "description":"Unemployed"
                              }
                           ]
                        },
                        { 
                           "type":"autocomplete",
                           "helpId":1001,
                           "uiOptions":{ 
                              "summaryTitle":"Occupation"
                           },
                           "key":"occupation",
                           "label":"What is your Occupation?",
                           "order":2,
                           "required":true,
                           "disabled":false,
                           "placeholder":"Select an Occupation",
                           "serviceUrl":"occupation/",
                           "autoCompleteType":"search"
                        },
                        { 
                           "type":"autocomplete",
                           "uiOptions":{ 
                              "summaryTitle":"Type of business"
                           },
                           "key":"business",
                           "label":"Type of Business",
                           "order":2,
                           "required":true,
                           "trigger":{ 
                              "key":"occupation",
                              "name":"occupation"
                           },
                           "placeholder":"Select an Area of Business",
                           "serviceUrl":"occupation/",
                           "autoCompleteType":"search"
                        },
                        { 
                           "type":"radio",
                           "key":"livedOutsideIreland",
                           "label":"Have you lived outside of Ireland or the UK in the past 12 months?",
                           "order":2,
                           "required":true,
                           "options":[ 
                              { 
                                 "id":"true",
                                 "description":"Yes"
                              },
                              { 
                                 "id":"false",
                                 "description":"No"
                              }
                           ]
                        }
                     ]
                  }
               ]
            },
            { 
               "id":"your-address",
               "title":"Addresss",
               "uiOptions":{ 
                  "nextPage":"your-car",
                  "prevPage":"your-details"
               },
               "order":1,
               "sections":[ 
                  { 
                     "id":"address-default",
                     "title":"Primary Driver",
                     "type":"address",
                     "fields":[ 
                        { 
                           "type":"group",
                           "key":"address",
                           "isComplete":true,
                           "fields":[ 
                              { 
                                 "type":"text",
                                 "uiOptions":{ 
                                    "summaryTitle":"Address line 1"
                                 },
                                 "key":"addressLine1",
                                 "label":"Address Line 1",
                                 "order":0,
                                 "required":true
                              },
                              { 
                                 "type":"text",
                                 "uiOptions":{ 
                                    "summaryTitle":"Address line 2"
                                 },
                                 "key":"addressLine2",
                                 "label":"Address Line 2",
                                 "order":0,
                                 "required":false
                              },
                              { 
                                 "type":"autocomplete",
                                 "uiOptions":{ 
                                    "summaryTitle":"Town"
                                 },
                                 "key":"area",
                                 "label":"Area",
                                 "order":2,
                                 "required":true,
                                 "disabled":false,
                                 "serviceUrl":"reference/area/",
                                 "autoCompleteType":"search"
                              },
                              { 
                                 "type":"autocomplete",
                                 "uiOptions":{ 
                                    "summaryTitle":"County"
                                 },
                                 "key":"county",
                                 "label":"County",
                                 "order":2,
                                 "required":true,
                                 "trigger":{ 
                                    "name":"disabledBasedOnKey",
                                    "expectedType":"object",
                                    "key":"area"
                                 },
                                 "disabled":false,
                                 "link":"area",
                                 "serviceUrl":"reference/county/",
                                 "autoCompleteType":"linked"
                              }
                           ]
                        }
                     ]
                  }
               ]
            },
            { 
               "id":"your-car",
               "title":"Car",
               "uiOptions":{ 
                  "nextPage":"your-licence",
                  "prevPage":"your-address"
               },
               "order":1,
               "sections":[ 
                  { 
                     "id":"car-default",
                     "title":"Primary Driver",
                     "type":"car",
                     "fields":[ 
                        { 
                           "type":"group",
                           "key":"carInformation",
                           "alignment":"none",
                           "timeline":false,
                           "order":0,
                           "isComplete":false,
                           "uiOptions":{ 
                              "summaryTitle":"Car Model"
                           },
                           "fields":[ 
                              { 
                                 "type":"autocomplete",
                                 "uiOptions":{ 
                                    "summaryTitle":"Make"
                                 },
                                 "key":"carMake",
                                 "label":"Car Make",
                                 "order":1,
                                 "required":true,
                                 "disabled":false,
                                 "link":"carInformation",
                                 "serviceUrl":"reference/vehicle/make/",
                                 "autoCompleteType":"all"
                              },
                              { 
                                 "type":"autocomplete",
                                 "uiOptions":{ 
                                    "summaryTitle":"Model"
                                 },
                                 "key":"carModel",
                                 "label":"Car Model",
                                 "order":2,
                                 "required":true,
                                 "trigger":{ 
                                    "name":"disabledBasedOnKey",
                                    "expectedType":"object",
                                    "key":"carMake"
                                 },
                                 "disabled":false,
                                 "link":"carMake",
                                 "serviceUrl":"reference/vehicle/model/",
                                 "autoCompleteType":"linked"
                              },
                              { 
                                 "type":"dropdown",
                                 "uiOptions":{ 
                                    "summaryTitle":"Make"
                                 },
                                 "key":"engineSizeRange",
                                 "label":"Engine Size",
                                 "order":3,
                                 "required":true,
                                 "trigger":{ 
                                    "name":"disabledBasedOnKey",
                                    "expectedType":"object",
                                    "key":"carModel"
                                 },
                                 "options":[ 
                                    { 
                                       "id":"0cc - 1499cc",
                                       "description":"0cc - 1499cc"
                                    },
                                    { 
                                       "id":"1500cc - 1999cc",
                                       "description":"1500cc - 1999cc"
                                    },
                                    { 
                                       "id":"2000cc - 2499cc",
                                       "description":"2000cc - 2499cc"
                                    },
                                    { 
                                       "id":"2500cc - 2999cc",
                                       "description":"2500cc - 2999cc"
                                    },
                                    { 
                                       "id":"3000cc - 3449cc",
                                       "description":"3000cc - 3449cc"
                                    },
                                    { 
                                       "id":"3500cc - 3999cc",
                                       "description":"3500cc - 3999cc"
                                    },
                                    { 
                                       "id":"4000cc - 4449cc",
                                       "description":"4000cc - 4449cc"
                                    },
                                    { 
                                       "id":"4500cc - 4999cc",
                                       "description":"4500cc - 4999cc"
                                    },
                                    { 
                                       "id":"4500cc - 4999c",
                                       "description":"4500cc - 4999cc"
                                    }
                                ]
                              }
                           ]
                        },
                        { 
                           "type":"date",
                           "uiOptions":{ 
                              "summaryTitle":"Date of Registration",
                              "locked":"day"
                           },
                           "key":"dateOfRegistration",
                           "label":"Date of Registration",
                           "order":0,
                           "required":true,
                           "disabled":false
                        },
                        { 
                           "type":"date",
                           "uiOptions":{ 
                              "summaryTitle":"Date of Purchase"
                           },
                           "key":"dateOfPurchase",
                           "label":"Date of Purchase",
                           "order":5,
                           "required":true,
                           "disabled":false
                        },
                        { 
                           "type":"currency",
                           "uiOptions":{ 
                              "summaryTitle":"Car value "
                           },
                           "key":"currentValue",
                           "label":"Current Value",
                           "order":6,
                           "required":true,
                           "disabled":false
                        },
                        { 
                           "type":"tel",
                           "uiOptions":{ 
                              "summaryTitle":"Kilometers per year"
                           },
                           "key":"kilometersPerYear",
                           "label":"How many kilometres do you drive in a year?",
                           "order":7,
                           "required":true,
                           "disabled":false
                        },
                        { 
                           "type":"group",
                           "key":"securityFeatures",
                           "alignment":"half",
                           "timeline":true,
                           "label":"What security features are fitted to your vehicle?",
                           "order":8,
                           "isComplete":false,
                           "uiOptions":{ 
                              "summaryTitle":"Security Features"
                           },
                           "fields":[ 
                              { 
                                 "type":"checkbox",
                                 "uiOptions":{ 
                                    "summaryTitle":"Security Alarm"
                                 },
                                 "key":"security-alarm",
                                 "required":false,
                                 "timeline":false,
                                 "name":"Alarm"
                              },
                              { 
                                 "type":"checkbox",
                                 "uiOptions":{ 
                                    "summaryTitle":"Immobiliser"
                                 },
                                 "key":"security-immobiliser",
                                 "required":false,
                                 "timeline":false,
                                 "name":"Immobiliser"
                              },
                              { 
                                 "type":"checkbox",
                                 "uiOptions":{ 
                                    "summaryTitle":"Tracker"
                                 },
                                 "key":"security-tracker",
                                 "required":false,
                                 "timeline":false,
                                 "name":"Tracker"
                              }
                           ]
                        },
                        { 
                           "type":"autocomplete",
                           "key":"carMainlyUsedArea",
                           "label":"In what area is your car usually used?",
                           "order":9,
                           "required":true,
                           "disabled":false,
                           "placeholder":"Please type the neighbourhood, region, area",
                           "serviceUrl":"reference/area/",
                           "autoCompleteType":"search"
                        },
                        { 
                           "type":"autocomplete",
                           "key":"carMainlyUsedCounty",
                           "label":"In what county is your car usually used?",
                           "order":9,
                           "required":true,
                           "trigger":{ 
                              "expectedType":"object",
                              "key":"carMainlyUsedArea",
                              "name":"disabledBasedOnKey"
                           },
                          "disabled":false,
                           "placeholder":"Please enter a county",
                           "link":"carMainlyUsedArea",
                           "serviceUrl":"reference/county/",
                           "autoCompleteType":"linked"
                        },
                        { 
                           "type":"dropdown",
                           "key":"carKeptOvernight",
                           "label":"Where is you car kept overnight?",
                           "order":10,
                           "required":true,
                           "options":[ 
                              { 
                                 "id":"carport",
                                 "description":"Carport"
                              },
                              { 
                                 "id":"garaged",
                                 "description":"Garaged"
                              },
                              { 
                                 "id":"keptPrivate",
                                 "description":"Kept on Private Property"
                              },
                              { 
                                 "id":"keptPublic",
                                 "description":"Kept on Public Property"
                              },
                              { 
                                 "id":"parkedInDrive",
                                 "description":"Parked on Drive"
                              }
                           ]
                        }
                     ]
                  },
                  { 
                     "id":"car-secondary",
                     "title":"Second Car",
                     "type":"car",
                     "fields":[ 
                        { 
                           "type":"group",
                           "key":"carInformation",
                           "alignment":"none",
                           "timeline":false,
                           "order":0,
                           "isComplete":false,
                           "uiOptions":{ 
                              "summaryTitle":"Car Model"
                           },
                           "fields":[ 
                              { 
                                 "type":"autocomplete",
                                 "uiOptions":{ 
                                    "summaryTitle":"Make"
                                 },
                                 "key":"carMake",
                                 "label":"Car Make",
                                 "order":1,
                                 "required":true,
                                 "disabled":false,
                                 "link":"carInformation",
                                 "serviceUrl":"reference/vehicle/make/",
                                 "autoCompleteType":"all"
                              },
                              { 
                                 "type":"autocomplete",
                                 "uiOptions":{ 
                                    "summaryTitle":"Model"
                                 },
                                 "key":"carModel",
                                 "label":"Car Model",
                                 "order":2,
                                 "required":true,
                                 "trigger":{ 
                                    "name":"disabledBasedOnKey",
                                   "expectedType":"object",
                                    "key":"carMake"
                                 },
                                 "disabled":false,
                                 "link":"carMake",
                                 "serviceUrl":"reference/vehicle/model/",
                                 "autoCompleteType":"linked"
                              },
                              { 
                                 "type":"dropdown",
                                 "uiOptions":{ 
                                    "summaryTitle":"Make"
                                 },
                                 "key":"engineSizeRange",
                                 "label":"Engine Size",
                                 "order":3,
                                 "required":true,
                                 "trigger":{ 
                                    "name":"disabledBasedOnKey",
                                    "expectedType":"object",
                                    "key":"carModel"
                                 },
                                 "options":[ 
                                    { 
                                       "id":"0cc - 1499cc",
                                       "description":"0cc - 1499cc"
                                    },
                                    { 
                                       "id":"1500cc - 1999cc",
                                       "description":"1500cc - 1999cc"
                                    },
                                    { 
                                       "id":"2000cc - 2499cc",
                                       "description":"2000cc - 2499cc"
                                    },
                                    { 
                                       "id":"2500cc - 2999cc",
                                       "description":"2500cc - 2999cc"
                                    },
                                    { 
                                       "id":"3000cc - 3449cc",
                                       "description":"3000cc - 3449cc"
                                    },
                                    { 
                                       "id":"3500cc - 3999cc",
                                       "description":"3500cc - 3999cc"
                                    },
                                    { 
                                       "id":"4000cc - 4449cc",
                                       "description":"4000cc - 4449cc"
                                    },
                                    { 
                                       "id":"4500cc - 4999cc",
                                       "description":"4500cc - 4999cc"
                                    },
                                    { 
                                       "id":"4500cc - 4999c",
                                       "description":"4500cc - 4999cc"
                                    }
                                 ]
                              }
                           ]
                        },
                        { 
                           "type":"date",
                           "uiOptions":{ 
                              "summaryTitle":"Date of Registration",
                              "locked":"day"
                           },
                           "key":"dateOfRegistration",
                           "label":"Date of Registration",
                           "order":0,
                           "required":true,
                           "disabled":false
                        },
                        { 
                           "type":"date",
                           "uiOptions":{ 
                              "summaryTitle":"Date of Purchase"
                           },
                           "key":"dateOfPurchase",
                           "label":"Date of Purchase",
                           "order":5,
                           "required":true,
                           "disabled":false
                        },
                        { 
                           "type":"currency",
                           "uiOptions":{ 
                              "summaryTitle":"Car value "
                           },
                           "key":"currentValue",
                           "label":"Current Value",
                           "order":6,
                           "required":true,
                           "disabled":false
                        },
                        { 
                           "type":"tel",
                           "uiOptions":{ 
                              "summaryTitle":"Kilometers per year"
                           },
                           "key":"kilometersPerYear",
                           "label":"How many kilometres do you drive in a year?",
                           "order":7,
                           "required":true,
                           "disabled":false
                        },
                        { 
                           "type":"group",
                           "key":"securityFeatures",
                           "alignment":"half",
                           "timeline":true,
                           "label":"What security features are fitted to your vehicle?",
                           "order":8,
                           "isComplete":false,
                           "uiOptions":{ 
                              "summaryTitle":"Security Features"
                           },
                           "fields":[ 
                              { 
                                 "type":"checkbox",
                                 "uiOptions":{ 
                                    "summaryTitle":"Security Alarm"
                                 },
                                 "key":"security-alarm",
                                 "required":false,
                                 "timeline":false,
                                 "name":"Alarm"
                              },
                              { 
                                 "type":"checkbox",
                                 "uiOptions":{ 
                                    "summaryTitle":"Immobiliser"
                                 },
                                 "key":"security-immobiliser",
                                 "required":false,
                                 "timeline":false,
                                 "name":"Immobiliser"
                              },
                              { 
                                 "type":"checkbox",
                                 "uiOptions":{ 
                                    "summaryTitle":"Tracker"
                                 },
                                 "key":"security-tracker",
                                 "required":false,
                                 "timeline":false,
                                 "name":"Tracker"
                              }
                           ]
                        },
                        { 
                           "type":"autocomplete",
                           "key":"carMainlyUsedArea",
                           "label":"In what area is your car usually used?",
                           "order":9,
                           "required":true,
                           "disabled":false,
                           "placeholder":"Please type the neighbourhood, region, area",
                           "serviceUrl":"reference/area/",
                           "autoCompleteType":"search"
                        },
                        { 
                           "type":"autocomplete",
                           "key":"carMainlyUsedCounty",
                           "label":"In what county is your car usually used?",
                           "order":9,
                           "required":true,
                           "trigger":{ 
                              "expectedType":"object",
                              "key":"carMainlyUsedArea",
                              "name":"disabledBasedOnKey"
                           },
                           "disabled":false,
                           "placeholder":"Please enter a county",
                           "link":"carMainlyUsedArea",
                           "serviceUrl":"reference/county/",
                           "autoCompleteType":"linked"
                        },
                        { 
                           "type":"dropdown",
                           "key":"carKeptOvernight",
                           "label":"Where is you car kept overnight?",
                           "order":10,
                           "required":true,
                           "options":[ 
                              { 
                                 "id":"carport",
                                 "description":"Carport"
                             },
                              { 
                                 "id":"garaged",
                                 "description":"Garaged"
                              },
                              { 
                                 "id":"keptPrivate",
                                 "description":"Kept on Private Property"
                              },
                              { 
                                 "id":"keptPublic",
                                 "description":"Kept on Public Property"
                              },
                              { 
                                 "id":"parkedInDrive",
                                 "description":"Parked on Drive"
                              }
                           ]
                        }
                     ]
                  }
               ]
            },
            { 
               "id":"your-licence",
               "title":"Licence",
               "uiOptions":{ 
                  "nextPage":"your-cover",
                  "prevPage":"your-car"
               },
               "order":1,
               "sections":[ 
                  { 
                     "id":"licence-default",
                     "title":"Primary Driver",
                     "type":"default",
                     "isDriver":true,
                     "fields":[ 
                        { 
                           "type":"dropdown",
                           "uiOptions":{ 
                              "summaryTitle":"Type of Licence"
                           },
                           "key":"typeOfLicence",
                           "label":"What type of licence do you hold?",
                           "order":0,
                           "required":true,
                           "disabled":false,
                           "options":[ 
                              { 
                                 "id":"Foreign",
                                 "description":"Foreign"
                              },
                              { 
                                 "id":"FullEuropeanUnion",
                                 "description":"Full EU"
                              },
                              { 
                                 "id":"FullIrish",
                                 "description":"Full Irish"
                              },
                              { 
                                 "id":"FullUnitedKingdom",
                                 "description":"Full UK"
                              },
                              { 
                                 "id":"InternationalLicence",
                                 "description":"International Licence"
                              },
                              { 
                                 "id":"ProvisionalIrish",
                                 "description":"Provisional Irish"
                              },
                              { 
                                 "id":"LearnerPermit",
                                 "description":"Learner Permit"
                              }
                           ],
                           value: {
                               "id":"Foreign",
                                "description":"Full Irish"
                           }
                        },
                        { 
                           "type":"slider",
                           "uiOptions":{ 
                              "summaryTitle":"Amount of years you held your licence"
                           },
                           "key":"howLongLicenceHeld",
                           "label":"How long have you held your licence?",
                           "order":1,
                           "required":true,
                           "value":{ 
                              "id":"0",
                              "description":"0"
                           },
                           "values":[ 
                              { 
                                 "id":"0",
                                 "description":"0"
                              },
                              { 
                                 "id":"1",
                                 "description":"1"
                              },
                              {  
                                 "id":"2",
                                 "description":"2"
                              },
                              { 
                                 "id":"3",
                                 "description":"3"
                              },
                              { 
                                 "id":"4",
                                 "description":"4"
                              },
                              { 
                                 "id":"5",
                                 "description":"5"
                              },
                              { 
                                 "id":"6",
                                 "description":"6"
                              },
                              { 
                                 "id":"7",
                                 "description":"7"
                              },
                              { 
                                 "id":"8",
                                 "description":"8"
                              },
                              { 
                                 "id":"9",
                                 "description":"9+"
                              }
                           ]
                        },
                        { 
                           "type":"autocomplete",
                           "uiOptions":{ 
                              "summaryTitle":"Where did you earn your licence"
                           },
                           "key":"whereEarnLicence",
                           "label":"Where did you earn your licence?",
                           "order":2,
                           "required":true,
                           "disabled":false,
                           "placeholder":"Please enter a country",
                           "serviceUrl":"reference/country/",
                           "autoCompleteType":"search"
                        }
                     ]
                  }
               ],
               "templates":[ 
                  { 
                     "id":"licence-template",
                     "type":"default",
                     "hasQuestionsByDefault":true,
                     "additional":true,
                     "fields":[ 
                        { 
                           "type":"dropdown",
                           "uiOptions":{ 
                              "summaryTitle":"Type of Licence"
                           },
                           "key":"typeOfLicence",
                           "label":"What type of licence do you hold?",
                           "order":0,
                           "required":true,
                           "disabled":false,
                           "options":[ 
                              { 
                                 "id":"Foreign",
                                 "description":"Foreign"
                              },
                              { 
                                 "id":"FullEuropeanUnion",
                                 "description":"Full EU"
                              },
                              { 
                                 "id":"FullIrish",
                                 "description":"Full Irish"
                              },
                              { 
                                 "id":"FullUnitedKingdom",
                                 "description":"Full UK"
                              },
                              { 
                                 "id":"InternationalLicence",
                                 "description":"International Licence"
                              },
                              { 
                                 "id":"ProvisionalIrish",
                                 "description":"Provisional Irish"
                              },
                              { 
                                 "id":"LearnerPermit",
                                 "description":"Learner Permit"
                              }
                           ]
                        },
                        { 
                           "type":"slider",
                           "uiOptions":{ 
                              "summaryTitle":"Amount of years you held your licence"
                           },
                           "key":"howLongLicenceHeld",
                           "label":"How long have you held your licence?",
                           "order":1,
                           "required":true,
                           "value":{ 
                              "id":"0",
                              "description":"0"
                           },
                           "values":[ 
                              { 
                                 "id":"0",
                                 "description":"0"
                              },
                              { 
                                 "id":"1",
                                 "description":"1"
                              },
                              { 
                                 "id":"2",
                                 "description":"2"
                              },
                              { 
                                 "id":"3",
                                 "description":"3"
                              },
                              { 
                                 "id":"4",
                                 "description":"4"
                              },
                              { 
                                 "id":"5",
                                 "description":"5"
                              },
                              { 
                                 "id":"6",
                                 "description":"6"
                              },
                              { 
                                 "id":"7",
                                 "description":"7"
                             },
                              { 
                                 "id":"8",
                                 "description":"8"
                              },
                              { 
                                 "id":"9",
                                 "description":"9+"
                              }
                           ]
                        },
                        { 
                           "type":"autocomplete",
                           "uiOptions":{ 
                              "summaryTitle":"Where did you earn your licence"
                           },
                           "key":"whereEarnLicence",
                           "label":"Where did you earn your licence?",
                           "order":2,
                           "required":true,
                           "disabled":false,
                           "placeholder":"Please enter a country",
                           "serviceUrl":"reference/country/",
                           "autoCompleteType":"search"
                        }
                     ]
                  }
               ]
            },
            { 
               "id":"your-cover",
               "title":"Cover",
               "uiOptions":{ 
                  "nextPage":"your-claims",
                  "prevPage":"your-licence"
               },
               "order":1,
               "sections":[ 
                  { 
                     "id":"cover-default",
                     "title":"Primary Driver",
                     "type":"default",
                     "fields":[ 
                        { 
                           "type":"group",
                           "key":"drivingExperience",
                           "alignment":"none",
                           "timeline":false,
                           "order":0,
                           "isComplete":false,
                           "fields":[ 
                              { 
                                 "type":"radio",
                                 "helpId":1001,
                                 "uiOptions":{ 
                                    "summaryTitle":"Insured in your own Name"
                                 },
                                 "key":"insuredInYourOwnName",
                                 "label":"Have you been insured in your own name within the last two years?",
                                 "order":0,
                                 "required":true,
                                 "options":[ 
                                    { 
                                       "id":"true",
                                       "description":"Yes"
                                    },
                                    { 
                                       "id":"false",
                                       "description":"No"
                                    }
                                 ]
                              },
                              { 
                                 "type":"radio",
                                 "uiOptions":{ 
                                    "summaryTitle":"Named Driver"
                                 },
                                 "key":"insuredNamedDriver",
                                 "label":"Have you been a named driver on someone else’s policy?",
                                 "order":0,
                                 "required":true,
                                 "trigger":{ 
                                    "key":"insuredInYourOwnName",
                                    "name":"hideBasedOnKey",
                                    "isObject":"true"
                                 },
                                 "options":[ 
                                    { 
                                       "id":"true",
                                       "description":"Yes"
                                    },
                                    { 
                                       "id":"false",
                                       "description":"No"
                                    }
                                 ]
                              },
                              { 
                                 "type":"dropdown",
                                 "helpId":1001,
                                 "uiOptions":{ 
                                    "summaryTitle":"On who's policy"
                                 },
                                 "key":"insuredNamedDriverOnPolicy",
                                 "label":"On whose policy",
                                 "order":1,
                                 "required":true,
                                 "trigger":{ 
                                    "key":"insuredNamedDriver",
                                    "name":"showBasedOnKey",
                                    "isObject":"true"
                                 },
                                 "options":[ 
                                    { 
                                       "id":"Brother",
                                       "description":"Brother"
                                    },
                                    { 
                                       "id":"BrotherInLaw",
                                       "description":"Brother in Law"
                                    },
                                    { 
                                       "id":"BusinessPartner",
                                       "description":"Business Partner"
                                    },
                                    { 
                                       "id":"CommonLawSpouse",
                                       "description":"Common Law Spouse"
                                    },
                                    { 
                                       "id":"Daughter",
                                       "description":"Daughter"
                                    },
                                    { 
                                       "id":"DaughterInLaw",
                                       "description":"Daughter in Law"
                                    },
                                    { 
                                       "id":"EmployeeOfProposer",
                                       "description":"Employee of Proposer"
                                    },
                                    { 
                                       "id":"EmployerOfProposer",
                                       "description":"Employer of Proposer"
                                    },
                                    { 
                                       "id":"FatherInLaw",
                                       "description":"Father in Law"
                                    },
                                    { 
                                       "id":"MotherInLaw",
                                       "description":"Mother in Law"
                                    },
                                    { 
                                       "id":"Parent",
                                       "description":"Parent"
                                    },
                                    { 
                                       "id":"Proposer",
                                       "description":"Proposer"
                                    },
                                    { 
                                       "id":"Relative",
                                       "description":"Relative"
                                    },
                                    { 
                                       "id":"Sister",
                                       "description":"Sister"
                                    },
                                    { 
                                       "id":"SisterInLaw",
                                       "description":"Sister in Law"
                                    },
                                    { 
                                       "id":"Son",
                                       "description":"Son"
                                    },
                                    { 
                                       "id":"SonInLaw",
                                       "description":"Son in Law"
                                    },
                                    { 
                                       "id":"Spouse",
                                       "description":"Spouse"
                                    },
                                    { 
                                       "id":"Tenant",
                                       "description":"Tenant"
                                    },
                                    { 
                                       "id":"Unrelated",
                                       "description":"Unrelated"
                                    },
                                    { 
                                       "id":"Partner",
                                       "description":"Partner"
                                    },
                                    { 
                                       "id":"Friend",
                                       "description":"Friend"
                                    }
                                 ]
                              },
                              { 
                                 "type":"dropdown",
                                 "uiOptions":{ 
                                    "summaryTitle":"Current Insurance Company"
                                 },
                                 "key":"insuranceCompany",
                                 "label":"Which is your current insurance company?",
                                 "order":2,
                                 "required":true,
                                 "trigger":{ 
                                    "key1":"insuredInYourOwnName",
                                    "key2":"insuredNamedDriver",
                                    "name":"showDualKey",
                                    "isObject":"true"
                                 },
                                 "options":[ 
                                    { 
                                       "id":"Unspecified",
                                       "description":"Unspecified"
                                    },
                                    { 
                                       "id":"AXA",
                                       "description":"AXA Insurance"
                                    },
                                    { 
                                       "id":"Allianz",
                                       "description":"Allianz"
                                    },
                                    { 
                                       "id":"Zurich",
                                       "description":"Zurich"
                                    },
                                    { 
                                       "id":"Aviva",
                                       "description":"Aviva"
                                    },
                                    { 
                                       "id":"RSA",
                                       "description":"RSA"
                                    },
                                    { 
                                       "id":"Benchmark",
                                       "description":"Benchmark Underwriting"
                                    },
                                    { 
                                       "id":"HCL",
                                       "description":"Hickey Clarke and Langan"
                                    },
                                    { 
                                       "id":"ICI",
                                       "description":"ICI"
                                    },
                                    { 
                                       "id":"AIG",
                                       "description":"AIG"
                                    },
                                    { 
                                       "id":"Wrightway",
                                       "description":"Wrightway Underwriting"
                                    },
                                    { 
                                       "id":"Prestige",
                                       "description":"Prestige Underwriting Services"
                                    },
                                    { 
                                       "id":"GreatLakes",
                                       "description":"Great Lakes"
                                    },
                                    { 
                                       "id":"Europa",
                                       "description":"Europa General"
                                    },
                                    { 
                                       "id":"KennCo",
                                       "description":"KennCo Underwriting"
                                    },
                                    { 
                                       "id":"XSDirect",
                                       "description":"XS Direct"
                                    },
                                    { 
                                       "id":"Sertus",
                                       "description":"Sertus Underwriting"
                                    },
                                    { 
                                       "id":"Travelers",
                                       "description":"Travelers"
                                    },
                                    { 
                                       "id":"Provident",
                                       "description":"Provident"
                                    },
                                    { 
                                       "id":"Setanta",
                                       "description":"Setanta Insurance"
                                    },
                                    { 
                                       "id":"ARB",
                                       "description":"ARB Underwriting"
                                    },
                                    { 
                                       "id":"Ecclesiastical",
                                       "description":"Ecclesiastical"
                                    },
                                    { 
                                       "id":"Asgard",
                                       "description":"Asgard"
                                    },
                                    { 
                                       "id":"Crest",
                                       "description":"Crest"
                                    },
                                    { 
                                       "id":"DAS",
                                       "description":"DAS"
                                    },
                                    { 
                                       "id":"JRClare",
                                       "description":"JR Clare"
                                    },
                                    { 
                                       "id":"Dolmen",
                                       "description":"Dolmen"
                                    },
                                    { 
                                       "id":"FBD",
                                       "description":"FBD Insurance"
                                    },
                                    { 
                                       "id":"Finsure",
                                       "description":"OBF Insurance Group"
                                    },
                                    { 
                                       "id":"FirstIreland",
                                       "description":"First Ireland"
                                    },
                                    { 
                                       "id":"KiddSure",
                                       "description":"Kidd Insurances"
                                    },
                                    { 
                                       "id":"Chubb",
                                       "description":"Chubb Insurance"
                                    },
                                    { 
                                       "id":"Cigna",
                                       "description":"Cigna Insurance"
                                    },
                                    { 
                                       "id":"Generali",
                                       "description":"Generali Insurance"
                                    },
                                    { 
                                       "id":"Liberty",
                                       "description":"Liberty Underwriting"
                                    },
                                    { 
                                       "id":"Quinn",
                                       "description":"Quinn Direct"
                                    },
                                    { 
                                       "id":"Hastings",
                                       "description":"Hastings and Co."
                                    },
                                    { 
                                       "id":"Securus",
                                       "description":"Securus Insurance"
                                    },
                                    { 
                                       "id":"CoverCentre",
                                       "description":"CoverCentre "
                                    },
                                    { 
                                       "id":"Inov8",
                                       "description":"Inov8"
                                    },
                                    { 
                                       "id":"Stuart",
                                       "description":"EverSure"
                                    },
                                    { 
                                       "id":"LloydsSyndicate",
                                       "description":"Lloyds Syndicate"
                                    },
                                    { 
                                       "id":"OneTwoThree",
                                       "description":"123.ie"
                                    },
                                    { 
                                       "id":"Novae",
                                       "description":"Novae"
                                    },
                                    { 
                                       "id":"Culleton",
                                       "description":"Culleton Insurances"
                                    },
                                    { 
                                       "id":"JLT",
                                       "description":"Jardine Lloyd Thompson"
                                    },
                                    { 
                                       "id":"MISClaims",
                                       "description":"MIS Claims"
                                    },
                                    { 
                                       "id":"MotoristLegalProtection",
                                       "description":"Motorist Legal Protection"
                                    },
                                    { 
                                       "id":"GroupPersonalAccident",
                                       "description":"Group Personal Accident"
                                    },
                                    { 
                                       "id":"Mapfre",
                                       "description":"Mapfre"
                                    },
                                    { 
                                       "id":"Patrona",
                                       "description":"Patrona Underwriting"
                                    },
                                    { 
                                       "id":"Axis",
                                       "description":"Axis Ltd."
                                    },
                                    { 
                                       "id":"BroadgateUnderwriting",
                                       "description":"Broadgate Underwriting"
                                    },
                                    { 
                                       "id":"CatlinUnderwriting",
                                       "description":"Catlin Underwriting"
                                    },
                                    { 
                                       "id":"CanopiusUnderwriting",
                                       "description":"Canopius Underwriting Ltd"
                                    },
                                    { 
                                       "id":"CGice",
                                       "description":"Casualty and General Insurance Company Europe"
                                    },
                                    { 
                                       "id":"CollingwoodInsurance",
                                       "description":"Collingwood Insurance Company Ltd"
                                    },
                                    { 
                                       "id":"EliteInsuranceCompany",
                                       "description":"Elite Insurance Company Ltd"
                                    },
                                    { 
                                       "id":"HisCox",
                                       "description":"HisCox"
                                    },
                                    { 
                                       "id":"HSBEngineeringInsurance",
                                       "description":"HSB Engineering Insurance Ltd"
                                    },
                                    { 
                                       "id":"HathawayAndCope",
                                       "description":"Hathaway and Cope"
                                    },
                                    { 
                                       "id":"SagicorAtLloyds",
                                       "description":"Sagicor At Lloyds"
                                    },
                                    { 
                                       "id":"WRBerkley",
                                       "description":"W. R. Berkley"
                                    },
                                    { 
                                       "id":"CrashServices",
                                       "description":"Crash Services"
                                    },
                                    { 
                                       "id":"AlliedRiskManagement",
                                       "description":"Allied Risk Management"
                                    },
                                    { 
                                       "id":"Footprint",
                                       "description":"Footprint"
                                    },
                                    { 
                                       "id":"Bump",
                                       "description":"Bump"
                                    },
                                    { 
                                       "id":"ChartisInsurance",
                                      "description":"Chartis Insurance"
                                    },
                                    { 
                                       "id":"AXABroker",
                                       "description":"AXA Broker"
                                    },
                                    { 
                                       "id":"AXADirect",
                                       "description":"AXA Direct"
                                    },
                                    { 
                                       "id":"Cornhill",
                                       "description":"Cornhill"
                                    },
                                    { 
                                       "id":"FCRebrokedAXABroker",
                                       "description":"FC Rebroked AXA Broker"
                                    },
                                    { 
                                       "id":"FirstCallDirect",
                                       "description":"First Call Direct"
                                    },
                                    { 
                                       "id":"OneDirect",
                                       "description":"One Direct"
                                    },
                                    { 
                                       "id":"PatronaUnderwritingLtd",
                                       "description":"Patrona Underwriting Ltd"
                                    },
                                    { 
                                       "id":"ProvidentInsurance",
                                       "description":"Provident Insurance"
                                    },
                                    { 
                                       "id":"Torch",
                                       "description":"Torch"
                                    },
                                    { 
                                       "id":"UnlistedInsurerNotIreland",
                                       "description":"Unlisted Insurer - Not Ireland"
                                    },
                                    { 
                                       "id":"UnlistedInsurerIreland",
                                       "description":"Unlisted Insurer - Ireland"
                                    },
                                    { 
                                       "id":"KeyCare",
                                       "description":"KeyCare"
                                    },
                                    { 
                                       "id":"Octane",
                                       "description":"Octane"
                                    },
                                    { 
                                       "id":"AAIreland",
                                       "description":"AA Ireland"
                                    },
                                    { 
                                       "id":"Ivernia",
                                       "description":"Ivernia"
                                    },
                                    { 
                                       "id":"Claimsafe",
                                       "description":"Claimsafe"
                                    },
                                    { 
                                       "id":"ArachasInsurance",
                                       "description":"Arachas Insurance"
                                    },
                                    { 
                                       "id":"Other",
                                       "description":"Other"
                                    }
                                 ]
                              },
                              { 
                                 "type":"slider",
                                 "uiOptions":{ 
                                    "summaryTitle":"Amount of Years No Claims Bonus"
                                 },
                                 "key":"namedDrivingExperienceYears",
                                 "label":"How many years named driving experience do you have?",
                                 "order":3,
                                 "required":true,
                                 "trigger":{ 
                                    "key":"insuredNamedDriver",
                                    "name":"showBasedOnKey",
                                    "isObject":"true"
                                 },
                                 "value":1
                              },
                              { 
                                 "type":"autocomplete",
                                 "uiOptions":{ 
                                    "summaryTitle":"Where did you earn your licence"
                                 },
                                 "key":"countryNamedDrivingExperience",
                                 "label":"In what country did you earn your named driving experience?",
                                 "order":2,
                                 "required":true,
                                 "trigger":{ 
                                    "key":"insuredNamedDriver",
                                    "name":"showBasedOnKey",
                                    "isObject":"true"
                                 },
                                 "disabled":false,
                                 "placeholder":"Please enter a country",
                                 "serviceUrl":"occupation/",
                                 "autoCompleteType":"options"
                              },
                              { 
                                 "type":"date",
                                 "uiOptions":{ 
                                    "summaryTitle":"Amount of Years No Claims Bonus"
                                 },
                                 "key":"namedDrivingExperienceExpire",
                                 "label":"When does this named driving experience expire?",
                                 "order":3,
                                 "required":true,
                                 "trigger":{ 
                                    "key":"insuredNamedDriver",
                                    "name":"showBasedOnKey",
                                    "isObject":"true"
                                 }
                              },
                              { 
                                 "type":"slider",
                                 "uiOptions":{ 
                                    "summaryTitle":"Amount of Years No Claims Bonus"
                                 },
                                 "key":"noClaimsBonusYears",
                                 "label":"How many years no claims discount have you earned in your own name?",
                                 "order":3,
                                 "required":true,
                                 "trigger":{ 
                                    "key":"insuredInYourOwnName",
                                    "name":"showBasedOnKey",
                                    "isObject":"true"
                                 },
                                 "value":{ 
                                    "id":"0",
                                    "description":"0"
                                 },
                                 "values":[ 
                                    { 
                                       "id":"0",
                                       "description":"0"
                                    },
                                    { 
                                       "id":"1",
                                       "description":"1"
                                    },
                                    { 
                                       "id":"2",
                                       "description":"2"
                                    },
                                    { 
                                       "id":"3",
                                       "description":"3"
                                    },
                                    { 
                                       "id":"4",
                                       "description":"4"
                                    },
                                    { 
                                       "id":"5",
                                       "description":"5"
                                    },
                                    { 
                                       "id":"6",
                                       "description":"6"
                                    },
                                    { 
                                       "id":"7",
                                       "description":"7"
                                    },
                                    { 
                                       "id":"8",
                                       "description":"8"
                                    },
                                    { 
                                       "id":"9",
                                       "description":"9+"
                                    }
                                 ]
                              },
                              { 
                                 "type":"autocomplete",
                                 "helpId":1001,
                                 "uiOptions":{ 
                                    "summaryTitle":"Location no claims bonus was earned"
                                 },
                                 "key":"whereNoClaimsBonus",
                                 "label":"Where did you earn your no claims bonus",
                                 "order":4,
                                 "required":true,
                                 "trigger":{ 
                                    "key":"insuredInYourOwnName",
                                    "name":"showBasedOnKey",
                                    "isObject":"true"
                                 },
                                 "disabled":false,
                                 "placeholder":"Please enter a country",
                                 "serviceUrl":"reference/country/",
                                 "autoCompleteType":"search"
                              },
                              { 
                                 "type":"date",
                                 "helpId":1001,
                                 "uiOptions":{ 
                                    "summaryTitle":"Policy Expiration Date"
                                 },
                                 "key":"policyExpiryDate",
                                 "label":"When does your policy expire?",
                                 "order":5,
                                 "required":true,
                                 "trigger":{ 
                                    "key1":"insuredInYourOwnName",
                                    "key2":"insuredNamedDriver",
                                    "name":"showDualKey",
                                    "isObject":"true"
                                 },
                                 "validators":[ 
                                    "validDateValidate"
                                 ],
                                 "disabled":false
                              },
                              { 
                                 "type":"radio",
                                 "uiOptions":{ 
                                    "summaryTitle":"Policy Start Date"
                                 },
                                 "key":"startPolicySameDate",
                                 "label":"Would you like to start your policy from the same date?",
                                 "order":6,
                                 "required":true,
                                 "trigger":{ 
                                    "key1":"insuredInYourOwnName",
                                    "key2":"insuredNamedDriver",
                                    "name":"showDualKey",
                                    "isObject":"true"
                                 },
                                 "options":[ 
                                    { 
                                       "id":"true",
                                       "description":"Yes"
                                    },
                                    { 
                                       "id":"false",
                                       "description":"No"
                                    }
                                 ]
                              },
                              { 
                                 "type":"date",
                                 "key":"policyStartDate",
                                 "label":"What date would you like to start your policy from?",
                                 "order":7,
                                 "required":true,
                                 "trigger":{ 
                                    "key":"startPolicySameDate",
                                    "name":"showIfKeyEquals",
                                    "equals":"false"
                                 }
                              }
                           ]
                        },
                        { 
                           "type":"radio",
                           "uiOptions":{ 
                              "summaryTitle":"Level of Cover"
                           },
                           "key":"levelOfCover",
                           "label":"What level of cover do you need?",
                           "order":8,
                           "required":true,
                           "options":[ 
                              { 
                                 "id":"comprehensive",
                                 "description":"Comprehensive"
                              },
                              { 
                                 "id":"thirdParty",
                                 "description":"Third Party, Fire and Theft"
                              }
                           ]
                        },
                        { 
                           "type":"radio",
                           "helpId":1001,
                           "uiOptions":{ 
                              "summaryTitle":"Level of no claims bonus"
                           },
                           "key":"levelOfNoClaimsBonus",
                           "label":"What level of no claims bonus protection do you require?",
                           "order":9,
                           "required":true,
                           "options":[ 
                              { 
                                 "id":"full",
                                 "description":"Full"
                              },
                              { 
                                 "id":"stepBack",
                                 "description":"Step Back"
                              },
                              { 
                                 "id":"none",
                                 "description":"None"
                              }
                           ]
                        }
                     ]
                  }
               ]
            },
            { 
               "id":"your-claims",
               "title":"Claims",
               "uiOptions":{ 
                  "nextPage":"your-penalties",
                  "prevPage":"your-cover"
               },
               "order":1,
               "sections":[ 
                  { 
                     "id":"claim-primary-driver",
                     "title":"Primary Driver",
                     "type":"claim",
                     "isDriver":true
                  }
               ],
               "templates":[ 
                  { 
                     "id":"claim-template",
                     "type":"claim",
                     "additional":true,
                     "fields":[ 
                        { 
                           "type":"date",
                           "uiOptions":{ 
                              "summaryTitle":"Date of Claim"
                           },
                           "key":"dateOfClaim",
                           "label":"Date of claim",
                           "order":0,
                           "required":true,
                           "validators":[ 
                              "validDateValidate",
                              "validLastFiveYearsValidate"
                           ],
                           "disabled":false
                        },
                        { 
                           "type":"dropdown",
                           "uiOptions":{ 
                              "summaryTitle":"Reason for Claim"
                           },
                           "key":"reasonForClaim",
                           "label":"What was the reason for the claim?",
                           "order":0,
                           "required":true,
                           "options":[ 
                              { 
                                 "id":"Accident",
                                 "description":"Accident"
                              },
                              { 
                                 "id":"AccidentalDamage",
                                 "description":"Accidental Damage"
                              },
                              { 
                                 "id":"Fire",
                                 "description":"Fire"
                              },
                              { 
                                 "id":"MaliciousDamageAsAResultOfTheft",
                                 "description":"Malicious Damage As A Result Of Theft"
                              },
                              { 
                                 "id":"PersonalAccident",
                                 "description":"Personal Accident"
                              },
                              { 
                                 "id":"PersonalEffects",
                                 "description":"Personal Effects"
                              },
                              { 
                                 "id":"Theft",
                                 "description":"Theft"
                              },
                              { 
                                 "id":"Vandalism",
                                 "description":"Vandalism"
                              },
                              { 
                                 "id":"Windscreen",
                                 "description":"Windscreen"
                              },
                              { 
                                 "id":"ThirdParty",
                                 "description":"Third Party"
                              }
                           ]
                        },
                        { 
                           "type":"radio",
                           "uiOptions":{ 
                              "summaryTitle":"Reason for Claim"
                           },
                           "key":"isClaimSettled",
                           "label":"Is the claim settled?",
                           "order":0,
                           "required":true,
                           "options":[ 
                              { 
                                 "id":"true",
                                 "description":"Yes"
                              },
                              { 
                                 "id":"false",
                                 "description":"No"
                              }
                           ]
                        },
                        { 
                           "type":"radio",
                           "uiOptions":{ 
                              "summaryTitle":"Reason for Claim"
                           },
                           "key":"thirdPartyInjuries",
                           "label":"Were there any third party injuries?",
                           "order":0,
                           "required":true,
                           "options":[ 
                              { 
                                 "id":"true",
                                 "description":"Yes"
                              },
                              { 
                                 "id":"false",
                                 "description":"No"
                              }
                           ]
                        },
                        { 
                           "type":"currency",
                           "uiOptions":{ 
                              "summaryTitle":"Cost of Claim"
                           },
                           "key":"costOfClaim",
                           "label":"Cost of claim",
                           "order":0,
                           "required":true,
                           "placeholder":"How Much"
                        },
                        { 
                           "type":"radio",
                           "helpId":1001,
                           "uiOptions":{ 
                              "summaryTitle":"Claim Fault"
                           },
                           "key":"customerAtFault",
                           "label":"Were you at fault?",
                           "order":2,
                           "required":true,
                           "options":[ 
                              { 
                                 "id":"true",
                                 "description":"Yes"
                              },
                              { 
                                 "id":"false",
                                 "description":"No"
                              }
                           ]
                        },
                        { 
                           "type":"radio",
                           "uiOptions":{ 
                              "summaryTitle":"No Claim Bonus Protected"
                           },
                           "key":"noClaimsBonusProtected",
                           "label":"Was your no claims bonus protected?",
                           "order":2,
                           "required":true,
                           "options":[ 
                              { 
                                 "id":"true",
                                 "description":"Yes"
                              },
                              { 
                                 "id":"false",
                                 "description":"No"
                              }
                           ]
                        }
                     ]
                  }
               ]
            },
            { 
               "id":"your-penalties",
               "title":"Penalty Points",
               "uiOptions":{ 
                  "prevPage":"your-claims",
                  "nextPage":"choose-your-product"
               },
               "order":1,
               "sections":[ 
                  { 
                     "id":"penalty-primary-driver",
                     "title":"Primary Driver",
                     "type":"penalty",
                     "isDriver":true
                  }
               ],
               "templates":[ 
                  { 
                     "id":"penalty-template",
                     "title":"Primary Driver",
                     "type":"penalty",
                     "additional":true,
                     "fields":[ 
                        { 
                           "type":"date",
                           "key":"dateOfPenalty",
                           "label":"Date of Penalty",
                           "order":0,
                           "required":true,
                           "validators":[ 
                              "validDateValidate",
                              "validLastThreeYearsValidate"
                           ],
                           "disabled":false
                        },
                        { 
                           "type":"dropdown",
                           "key":"reasonForPenalty",
                           "label":"What was the reason?",
                           "order":0,
                           "required":true,
                           "options":[ 
                              { 
                                 "id":"ExceedingWeight",
                                 "description":"Exceeding weight"
                              },
                              { 
                                 "id":"NoTestCertificate",
                                 "description":"No test cert"
                              },
                              { 
                                 "id":"NoLicence",
                                 "description":"No licence"
                              },
                              { 
                                 "id":"TryingToGetLicenceWhileDisqualified",
                                 "description":"Trying to get licence while disqualified"
                              },
                              { 
                                 "id":"FailureToProduceLicence",
                                 "description":"Failure to produce licence"
                              },
                              { 
                                 "id":"ExceedingSpeedLimit",
                                 "description":"Exceeding speed limit"
                              },
                              { 
                                 "id":"DrivingVehicleWhenUnfit",
                                 "description":"Driving vehicle when unfit"
                              },
                              { 
                                 "id":"CarelessDriving",
                                 "description":"Careless driving"
                              },
                              { 
                                 "id":"DrivingDefectiveVehicle",
                                 "description":"Driving defective vehicle"
                              },
                              { 
                                 "id":"ParkingInDangerousPosition",
                                 "description":"Parking in dangerous position"
                              },
                              { 
                                 "id":"NoInsurance",
                                 "description":"No insurance"
                              },
                              { 
                                 "id":"FailingToStopAtWarden",
                                 "description":"Failing to stop at warden"
                              },
                              { 
                                 "id":"BreachOfDutyAtAccident",
                                 "description":"Breach of duty at accident"
                              },
                              { 
                                 "id":"FailingToStopForGarda",
                                 "description":"Failing to stop for Garda"
                              },
                              { 
                                 "id":"GivingFalseDetailsForLicence",
                                 "description":"Giving false details for licence"
                              },
                              { 
                                 "id":"VehicleExceedsWidthLimit",
                                 "description":"Vehicle exceeds width limit"
                              },
                              { 
                                 "id":"VehicleExceedsLengthLimit",
                                 "description":"Vehicle exceeds length limit"
                              },
                              { 
                                 "id":"WornTyres",
                                 "description":"Worn tyres"
                              },
                              { 
                                 "id":"PoorVisibilityOfRoad",
                                 "description":"Poor visibility of road"
                              },
                              { 
                                 "id":"WindscreenNotSafetyGlass",
                                 "description":"Windscreen not safety glass"
                              },
                              { 
                                 "id":"PoorWindscreenWipers",
                                 "description":"Poor windscreen wipers"
                              },
                              { 
                                 "id":"NoDrivingMirror",
                                 "description":"No driving mirror"
                              },
                              { 
                                 "id":"PoorBrakes",
                                 "description":"Poor brakes"
                              },
                              { 
                                 "id":"PoorSeatBeltAnchoragePoints",
                                 "description":"Poor seat belt anchorage points"
                              },
                              { 
                                 "id":"NoSeatBelts",
                                 "description":"Driver of car or goods vehicle not wearing safety belt"
                              },
                              { 
                                 "id":"NoCrashHelmetOnMotorbike",
                                 "description":"No crash helmet on motorbike"
                              },
                              { 
                                 "id":"NoPassengerCrashHelmet",
                                 "description":"No passenger crash helmet"
                              },
                              { 
                                 "id":"TruckWithNoRearCrashBar",
                                 "description":"Truck with no rear crash bar"
                              },
                              { 
                                 "id":"TruckWithNoSideCrashBar",
                                 "description":"Truck with no side crash bar"
                              },
                              { 
                                 "id":"DrivingWithoutSeatBelt",
                                 "description":"Driver of car or goods vehicle not wearing safety belt"
                              },
                              { 
                                 "id":"RearPassengersWithNoBelt",
                                 "description":"Driver permitting person under 17 years of age to occupy a seat when not wearing safety belt"
                              },
                              { 
                                 "id":"NoSpeedLimitingDevice",
                                 "description":"No speed limiting device"
                              },
                              { 
                                 "id":"SpeedLimiterNotCalibrated",
                                 "description":"Speed limiter not calibrated"
                              },
                              { 
                                 "id":"UnsealedSpeedLimiter",
                                 "description":"Unsealed speed limiter"
                              },
                              { 
                                 "id":"UsingMobilePhoneWhileDriving",
                                 "description":"Using mobile phone while driving"
                              },
                              { 
                                 "id":"VehicleNotEquippedWithLamps",
                                 "description":"Vehicle not equipped with lamps"
                              },
                              { 
                                 "id":"TrailerNotEquippedWithLamps",
                                 "description":"Trailer  not equipped with lamps"
                              },
                              { 
                                 "id":"NonUseOfProjectingRoadLamps",
                                 "description":"Non use of projecting road lamps"
                              },
                              { 
                                 "id":"NonUseOfTrailerMarkerLamps",
                                 "description":"Non use of trailer marker lamps"
                              },
                              { 
                                 "id":"NoInternalLightingInPSV",
                                 "description":"No internal lighting in PSV"
                              },
                              { 
                                 "id":"NoIndicators",
                                 "description":"No indicators"
                              },
                              { 
                                 "id":"BreakingSpeedRestriction",
                                 "description":"Breaking speed restriction"
                              },
                              { 
                                 "id":"FailureToYieldRightOfWay",
                                 "description":"Failure to yield right of way"
                              },
                              { 
                                 "id":"FailureToDriveOnLeft",
                                 "description":"Failure to drive on left"
                              },
                              { 
                                 "id":"DangerousOvertaking",
                                 "description":"Dangerous overtaking"
                              },
                              { 
                                 "id":"PoorDrivingAtJunction",
                                 "description":"Poor driving at junction"
                              },
                              { 
                                 "id":"PoorReversing",
                                 "description":"Poor reversing"
                              },
                              { 
                                 "id":"BreachOfFootwayDrivingRules",
                                 "description":"Breach of footway driving rules"
                              },
                              { 
                                 "id":"FailureToEnterRoundaboutOnLeft",
                                 "description":"Failure to enter roundabout on left"
                              },
                              { 
                                 "id":"DrivingAlongOrAcrossMedianStrip",
                                 "description":"Driving along or across median strip"
                              },
                              { 
                                 "id":"FailureToComplyWithGardaSignals",
                                 "description":"Failure to comply with Garda signals"
                              },
                              { 
                                 "id":"FailureToStopAtStopSign",
                                 "description":"Failure to stop at stop sign"
                              },
                              { 
                                 "id":"FailureToComplyWithTrafficSign",
                                 "description":"Failure to comply with traffic sign"
                              },
                              { 
                                 "id":"FailureToKeepLeftAtCertainSigns",
                                 "description":"Failure to keep left at certain signs"
                              },
                              { 
                                 "id":"CrossingWhiteLine",
                                 "description":"Crossing white line"
                              },
                              { 
                                 "id":"EnteringMarkedHatchedArea",
                                 "description":"Entering marked hatched area"
                              },
                              { 
                                 "id":"BreachOfLaneMarkings",
                                 "description":"Breach of lane markings"
                              },
                              { 
                                 "id":"FailureToObeyTrafficLights",
                                 "description":"Failure to obey traffic lights"
                              },
                              { 
                                 "id":"FailureToObeyLevelCrossingLights",
                                 "description":"Failure to obey level crossing lights"
                              },
                              { 
                                 "id":"DrivingAgainstMotorwayFlow",
                                 "description":"Driving against motorway flow"
                              },
                              { 
                                 "id":"DrivingOnBannedAreasOfMotorway",
                                 "description":"Driving on banned areas of motorway"
                              },
                              { 
                                 "id":"DrivingVehicleRestrictedTo50MphOnOutsideLaneOfMotorway",
                                 "description":"Driving vehicle restricted to 50 mph on outside lane of motorway"
                              },
                              { 
                                 "id":"FailureToHeedHeightRestrictions",
                                 "description":"Failure to heed height restrictions"
                              },
                              { 
                                 "id":"ProvisionalLicenceHolderDrivingWithoutSupervisionOfQualifiedDriver",
                                 "description":"Provisional licence holder driving without supervision of qualified driver"
                              },
                              { 
                                 "id":"Other",
                                 "description":"Other"
                              },
                              { 
                                 "id":"DrivingOnACycleTrack",
                                 "description":"Driving on a cycle track"
                              },
                              { 
                                 "id":"DrivingVehicleBeforeRemedyingDangerousDefect",
                                 "description":"Driving vehicle before remedying dangerous defect"
                              },
                              { 
                                 "id":"IllegalEntryOntoAOneWayStreet",
                                 "description":"Illegal entry onto a one-way street"
                              },
                              { 
                                 "id":"FailureToComplyWithProhibitoryTraffiSigns",
                                 "description":"Failure to comply with prohibitory traffic signs"
                              },
                              { 
                                 "id":"FailureToYieldRightOfWayAtAYieldSignYieldLine",
                                 "description":"Failure to yield right of way at a yield sign/ yield line"
                              },
                              { 
                                 "id":"InsurerPenaltyPointUpdate",
                                 "description":"Insurer Penalty Point Update"
                              },
                              { 
                                 "id":"UsingVehicleWithoutCertificateOfRoadworthiness",
                                 "description":"Using vehicle without certificate of roadworthiness"
                              },
                              { 
                                 "id":"FailureToLeaveAppropriateDistanceBetweenYouAndTheVehicleInFront",
                                 "description":"Failure to leave appropriate distance between you and the vehicle in front"
                              },
                              { 
                                 "id":"DrivingWithoutReasonableConsideration",
                                 "description":"Driving without reasonable consideration"
                              },
                              { 
                                 "id":"DrinkDrivingOffencesDependingOnLevelOfAlcoholPresentInTheBlood",
                                 "description":"Drink Driving Offences (depending on level of alcohol present in the blood)"
                              },
                              { 
                                 "id":"DriverOfCarOrGoodsVehiclePermittingChildUnder3YearsOfAget",
                                 "description":"Driver of car or goods vehicle permitting child under 3 years of age to travel in without being restrainted by appropriate child restraint"
                              },
                              { 
                                 "id":"DriverOfCarOrGoodsVehiclePermittingChildOver3YearsOfAgeTo",
                                 "description":"Driver of car or goods vehicle permitting child over 3 years of age to travel in without being restrainted by appropriate child restraint"
                              },
                              { 
                                 "id":"DriverOfCarOrGoodsVehiclePermittingChildToBeRestrainedByRe",
                                 "description":"Driver of car or goods vehicle permitting child to be restrained by rearward facing child restraint fitted to a seat protected by active frontal air-bag "
                              },
                              { 
                                 "id":"DriverOfBusNotWearingSafetyBelt",
                                 "description":"Driver of bus not wearing safety belt"
                              },
                              { 
                                 "id":"UsingVehicleWhoseWeightUnLadenExceedsMaximumPermittedWe",
                                 "description":"Using vehicle - (a) whose weight un-laden exceeds maximum permitted weight"
                              },
                              { 
                                 "id":"ContraventionOfBanOnUTurns",
                                 "description":"Contravention of ban on U-turns"
                              },
                              { 
                                 "id":"ContraventionOfRulesForUseOfMiniRoundabouts",
                                 "description":"Contravention of rules for use of mini roundabouts"
                              },
                              { 
                                 "id":"FailureToDisplayLPlateOrLTabard",
                                 "description":"Failure to display L-Plate or L tabard"
                              },
                              { 
                                 "id":"FailureToDisplayNPlateOrNTabard",
                                 "description":"Failure to display N Plate or N tabard"
                              },
                              { 
                                 "id":"GrossVehicleWeightExceedsMaximumSignDisplayed",
                                 "description":"Gross vehicle weight exceeds maximum sign displayed"
                              },
                              { 
                                 "id":"LearnerPermitHolderDrivingUnaccompaniedByQualifiedPerson",
                                 "description":"Learner permit holder driving unaccompanied by qualified person"
                              },
                              { 
                                 "id":"LengthOfVehicleExceedsMaximumSignDisplayed",
                                 "description":"Length of vehicle exceeds maximum sign displayed"
                              },
                              { 
                                 "id":"NoSpeedLimitationDeviceNonCompliantSpeedLimitationDevice",
                                 "description":"No speed limitation device / non-compliant speed limitation device"
                              },
                              { 
                                 "id":"PassingTrafficLaneControlSignNotInAccordanceWithSuchSign",
                                 "description":"Passing traffic lane control sign not in accordance with such sign"
                              },
                              { 
                                 "id":"ProceedingBeyondNoEntryToVehiclesSign",
                                 "description":"Proceeding beyond no entry to vehicles sign"
                              },
                              { 
                                 "id":"UsingModifiedAlteredVehicleWhereAuthorisationPlateIsInaccurate",
                                 "description":"Using modified/altered vehicle where authorisation plate is inaccurate"
                              },
                              { 
                                 "id":"UsingVehicleInAPublicPlaceWithoutAnAuthorisationPlate",
                                 "description":"Using vehicle in a public place without an authorisation plate"
                              },
                              { 
                                 "id":"VehicleAxleLoadingWeightExceedsMaximumSignDisplayed",
                                 "description":"Vehicle axle loading weight exceeds maximum sign displayed"
                              },
                              { 
                                 "id":"WidthOfVehicleExceedsMaximumSignDisplayed",
                                 "description":"Width of vehicle exceeds maximum sign displayed"
                              }
                           ]
                        },
                        { 
                           "type":"text",
                           "key":"howManyPoints",
                           "label":"How many points?",
                           "order":0,
                           "required":true,
                           "placeholder":"How many?"
                        }
                     ]
                  }
               ]
            }
         ]
      },
      { 
         "id":"price-presentation",
         "isComplete":false,
         "title":"Get Quote",
         "uiOptions":{ 
            "isWide":"true",
            "isPagesHidden":"true"
         },
         "pages":[ 
            { 
               "id":"choose-your-product",
               "title":"Choose the best product for you",
               "uiOptions":{ 
                  "prevPage":"your-penalties",
                  "nextPage":"are-you-a-member"
               }
            },
            { 
               "id":"are-you-a-member",
               "title":"Are you a Member?",
               "uiOptions":{ 
                  "prevPage":"choose-your-product",
                  "nextPage":"choose-your-payment"
               }
            },
            { 
               "id":"choose-your-payment",
               "title":"Choose your payment",
               "uiOptions":{ 
                  "prevPage":"are-you-a-member",
                  "nextPage":"additional-questions"
               }
            }
         ]
      },
      { 
         "id":"payments",
         "isComplete":false,
         "title":"Payment",
         "uiOptions":{ 
            "isWide":"true",
            "isPagesHidden":"true"
         },
         "pages":[ 
            { 
               "id":"additional-questions",
               "title":"Additional Questions",
               "uiOptions":{ 
                  "nextPage":"tokenisation",
                  "prevPage":"choose-your-payment"
               },
               "sections":[ 
                  { 
                     "id":"additional-questions",
                     "type":"default",
                     "isDriver":true,
                     "fields":[ 
                        { 
                           "type":"text",
                           "key":"driverLicenceNumber",
                           "label":"What is your Drivers Licence number?",
                           "required":false,
                           "trigger":{ 
                              "name":"getValueForValidationFromQuestion",
                              "key":"typeOfLicence",
                              "value":"FullIrish"
                           },
                           "validators":[ 
                              "licenceNumberValidate"
                           ],
                           "disabled":false
                        }
                     ]
                  }
               ],
               "templates":[ 
                  { 
                     "type":"default",
                     "hasQuestionsByDefault":true,
                     "additional":true,
                     "fields":[ 
                        { 
                           "type":"text",
                           "key":"driverLicenceNumber",
                           "label":"What is your Drivers Licence number?",
                           "required":false,
                           "validators":[ 
                              "licenceNumberValidate"
                           ],
                           "disabled":false
                        }
                     ]
                  }
               ]
            },
            { 
               "id":"terms-and-conditions",
               "title":"Terms and Conditions",
               "uiOptions":{ 
                  "prevPage":"additional-question",
                  "nextPage":"tokenisation"
               }
            },
            { 
               "id":"tokenisation",
               "title":"Tokenisation",
               "uiOptions":{ 
                  "prevPage":"terms-and-conditions",
                  "nextPage":"payment"
               },
               "sections":[ 
                  { 
                     "id":"tokenisation",
                     "type":"default",
                     "fields":[ 
                        { 
                           "type":"radio",
                           "key":"areYouCardholder",
                           "label":"Are you the Cardholder?",
                           "order":2,
                           "required":true,
                           "value":"Yes",
                           "options":[ 
                              { 
                                 "id":"true",
                                 "description":"Yes"
                              },
                              { 
                                 "id":"false",
                                 "description":"No"
                              }
                           ]
                        },
                        { 
                           "type":"radio",
                           "key":"doYouHavePermissionCardholder",
                           "label":"We need to store the cardholders payment information securely to complete your purchase. Can you confirm that\n\t\t\t\tthe cardholder has consented to their payment details being stored for use with this AA product only?",
                           "order":2,
                           "required":true,
                           "trigger":{ 
                              "key":"areYouCardholder",
                              "name":"showIfKeyEquals",
                              "equals":"false",
                             "isObject":"true"
                           },
                           "value":"Yes",
                           "options":[ 
                              { 
                                 "id":"true",
                                 "description":"Yes"
                              },
                              { 
                                 "id":"false",
                                 "description":"No"
                              }
                           ]
                        },
                        { 
                           "type":"radio",
                           "key":"saveCardFutureTransactions",
                           "label":"Would you like us to save this card securely to us for future transactions?",
                           "order":2,
                           "required":true,
                           "value":"Yes",
                           "options":[ 
                              { 
                                 "id":"true",
                                 "description":"Yes"
                              },
                              { 
                                 "id":"false",
                                 "description":"No"
                              }
                           ]
                        },
                        { 
                           "type":"radio",
                           "key":"saveCardAllAAProducts",
                           "label":"Would you like to save this card use on all AA Products?",
                           "order":2,
                           "required":true,
                           "trigger":{ 
                              "key":"saveCardFutureTransactions",
                              "name":"showIfKeyEquals",
                              "equals":"false",
                              "isObject":"true"
                           },
                           "value":"Yes",
                           "options":[ 
                              { 
                                 "id":"true",
                                 "description":"Yes"
                              },
                              { 
                                 "id":"false",
                                 "description":"No"
                              }
                           ]
                        }
                     ]
                  }
               ]
            },
            { 
               "id":"payment",
               "title":"Payment",
               "uiOptions":{ 
                  "prevPage":"tokenisation",
                  "nextPage":"confirmation"
               }
            }
         ]
      },
      { 
         "id":"confirmation",
         "isComplete":false,
         "title":"Confirmation",
         "uiOptions":{ 
            "isWide":"true",
            "isProgressHidden":"true",
            "isSummaryHidden":"true",
            "isHelpCenterHidden":"true",
            "isHeaderExtended":"true",
            "isPagesHidden":"true"
         },
         "pages":[ 
            { 
               "id":"confirmation",
               "title":"Confirmation",
               "uiOptions":{ 
                  "prevPage":"payment",
                  "isSummaryHidden":"true",
                  "isTimelineHidden":"true"
               }
            }
         ]
      }
   ]
}