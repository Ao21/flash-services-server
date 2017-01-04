"use strict";
exports.QUESTIONS = {
    pre: [{
            key: 'email',
            label: 'What is your email?',
            type: 'email',
            required: true,
            order: 0
        }, {
            key: 'amountOfDrivers',
            label: 'How many drivers?',
            type: 'counter',
            required: true,
            // disabled: true,
            order: 1,
            value: 1,
            min: 1,
            max: 5,
            trigger: {
                name: 'additionalDrivers',
            },
        }, {
            key: 'termsConditions',
            label: 'Terms and Conditions',
            type: 'questionText',
            order: 2,
            timeline: false,
            content: `By providing the requested data, you consent to AA's Data Protection and Privacy Policy and to AA using it for administration and keeping you informed by mail, telephone, email and SMS of other products and services from us. By proceeding, you consent to & confirm that you have read and accepted the AA Data Protection & Privacy Policy and the AA Terms & Conditions`
        }],
    details: [{
            key: 'title',
            label: 'Title',
            type: 'radio',
            order: 0,
            options: [{
                    value: 'Mr',
                    text: 'Mr'
                },
                {
                    value: 'Mrs',
                    text: 'Mrs'
                },
                {
                    value: 'Miss',
                    text: 'Miss'
                },
                {
                    value: 'Ms',
                    text: 'Ms'
                }],
            required: true,
        }, {
            key: 'firstName',
            label: 'First Name',
            type: 'text',
            required: true,
            helpId: 214205625,
            placeholder: 'John',
            // value: 'Ronan',
            order: 0,
        }, {
            key: 'lastName',
            label: 'Last Name',
            placeholder: 'Snow',
            type: 'text',
            helpId: 213679469,
            required: true,
            order: 1
        },
        {
            key: 'dateOfBirth',
            label: 'Date Of Birth',
            type: 'date',
            required: true,
            helpId: 213685289,
            disabled: false,
            order: 2,
            validators: ['validDateValidate', 'validOverEighteenValidate']
        }, {
            key: 'phoneNumber',
            label: 'Phone Number',
            type: 'tel',
            required: true,
            disabled: false,
            helpId: 214224585,
            order: 2,
            validators: ['validPhoneNumberValidate']
        }, {
            key: 'typeOfEmployment',
            label: 'Type of Employment',
            type: 'dropdown',
            options: ['Employed', 'Household Duties', 'Retired', 'Self Employed', 'Unemployed'],
            required: true,
            order: 2,
            validators: []
        }, {
            key: 'occupation',
            label: 'Occupation',
            type: 'autocomplete',
            placeholder: 'Select an Occupation',
            serviceUrl: 'motor/occupation/',
            autoCompleteType: 'search',
            required: true,
            disabled: false,
            // value: { id: 'Employed', text: 'Employed' },
            order: 2,
            validators: []
        }, {
            key: 'business',
            label: 'Type of Business',
            type: 'autocomplete',
            placeholder: 'Select an Area of Business',
            trigger: {
                key: 'occupation',
                name: 'occupation',
            },
            serviceUrl: 'motor/occupation/',
            autoCompleteType: 'search',
            required: true,
            order: 2,
            validators: []
        }, {
            key: 'livedOutsideIreland',
            label: 'Have you lived outside the Republic of Ireland or the UK in the last 12 months?',
            type: 'radio',
            options: [{
                    value: 'Yes',
                    text: 'Yes'
                }, {
                    value: 'No',
                    text: 'No'
                }],
            required: true,
            order: 2,
            validators: []
        }],
    cover: [{
            key: 'insuredInYourOwnName',
            label: 'Have you been insured previously in your own name in the last two years?',
            type: 'radio',
            order: 0,
            options: [{
                    value: true,
                    text: 'Yes'
                }, {
                    value: false,
                    text: 'No'
                }],
            required: true,
        },
        {
            key: 'insuredNamedDriver',
            label: 'Have you been a named driver on someone else’s policy?',
            type: 'radio',
            order: 0,
            trigger: {
                key: 'insuredInYourOwnName',
                name: 'hideBasedOnKey',
            },
            options: [{
                    value: true,
                    text: 'Yes'
                }, {
                    value: false,
                    text: 'No'
                }],
            required: true,
        },
        {
            key: 'insuredNamedDriverOnPolicy',
            label: 'On whose policy',
            type: 'dropdown',
            trigger: {
                key: 'insuredNamedDriver',
                name: 'showBasedOnKey',
            },
            options: ['Employed', 'Household Duties', 'Retired', 'Self Employed', 'Unemployed'],
            required: true,
            order: 1,
            validators: []
        },
        {
            key: 'insuranceCompany',
            label: 'Which is your current insurance company?',
            type: 'dropdown',
            trigger: {
                key1: 'insuredInYourOwnName',
                key2: 'insuredNamedDriver',
                name: 'showDualKey',
            },
            options: ['AXA', 'Irish Learners Permit', 'Full EU Licence', 'Non-EU Licence'],
            required: true,
            order: 2,
            validators: []
        },
        {
            key: 'noClaimsBonusYears',
            label: 'How many years no claims bonus do you have?',
            type: 'slider',
            trigger: {
                key1: 'insuredInYourOwnName',
                key2: 'insuredNamedDriver',
                name: 'showDualKey',
            },
            required: true,
            order: 3,
            value: 1,
            min: 0,
            max: 9,
        },
        {
            key: 'whereNoClaimsBonus',
            label: 'Where did you earn your no claims bonus',
            type: 'autocomplete',
            autoCompleteType: 'options',
            trigger: {
                key1: 'insuredInYourOwnName',
                key2: 'insuredNamedDriver',
                name: 'showDualKey',
            },
            options: [{
                    id: 'Employed',
                    text: 'Employed'
                }, {
                    id: 'Household Duties',
                    text: 'Household Duties'
                }, {
                    id: 'Retired',
                    text: 'Retired'
                }, {
                    id: 'Self Employed',
                    text: 'Self Employed'
                }, {
                    id: 'Unemployed',
                    text: 'Unemployed'
                }, {
                    id: 'Very Employed',
                    text: 'Very Employed'
                }, {
                    id: 'Very Household Duties',
                    text: 'Very Household Duties'
                }, {
                    id: 'Very Retired',
                    text: 'Very Retired'
                }, {
                    id: 'Very Self Employed',
                    text: 'Very Self Employed'
                }],
            required: true,
            disabled: false,
            // value: { id: 'Employed', text: 'Employed' },
            order: 4,
            validators: []
        },
        {
            key: 'policyExpiryDate',
            label: 'When does your policy expire?',
            type: 'date',
            trigger: {
                key1: 'insuredInYourOwnName',
                key2: 'insuredNamedDriver',
                name: 'showDualKey',
            },
            required: true,
            disabled: false,
            order: 5,
            validators: ['validDateValidate']
        },
        {
            key: 'startPolicySameDate',
            label: 'Start the new policy from the same date?',
            type: 'radio',
            order: 6,
            trigger: {
                key1: 'insuredInYourOwnName',
                key2: 'insuredNamedDriver',
                name: 'showDualKey',
            },
            options: [{
                    value: true,
                    text: 'Yes'
                }, {
                    value: false,
                    text: 'No'
                }],
            required: true,
        },
        {
            key: 'policyStartDate',
            label: 'Start the new policy from the same date?',
            type: 'date',
            order: 7,
            trigger: {
                key: 'startPolicySameDate',
                name: 'showIfKeyEquals',
                equals: false
            },
            required: true,
        },
        {
            key: 'levelOfCover',
            label: 'What level of cover do you need?',
            type: 'radio',
            alignment: 'vertical',
            order: 8,
            options: [{
                    value: 'comprehensive',
                    text: 'Comprehensive'
                }, {
                    value: 'thirdParty',
                    text: 'Third Party, Fire and Theft'
                }],
            required: true,
        },
        {
            key: 'levelOfNoClaimsBonus',
            label: 'What level of no claims bonus protection do you require?',
            type: 'radio',
            order: 9,
            options: [{
                    value: 'full',
                    text: 'Full'
                }, {
                    value: 'stepBack',
                    text: 'Step Back'
                },
                {
                    value: 'none',
                    text: 'None'
                }],
            required: true,
        }],
    licence: [{
            key: 'typeOfLicence',
            label: 'What licence do you hold?',
            type: 'dropdown',
            options: ['Full Irish Licence', 'Irish Learners Permit', 'Full EU Licence', 'Non-EU Licence'],
            required: true,
            order: 0,
            validators: []
        }, {
            key: 'howLongLicenceHeld',
            label: 'How long have you held your licence?',
            type: 'slider',
            required: true,
            order: 1,
            value: 1,
            min: 0,
            max: 9,
        }, {
            key: 'whereEarnLicence',
            label: 'Where did you earn your licence',
            type: 'autocomplete',
            serviceUrl: 'motor/occupation/',
            autoCompleteType: 'options',
            options: [{
                    id: 'Employed',
                    text: 'Employed'
                }, {
                    id: 'Household Duties',
                    text: 'Household Duties'
                }, {
                    id: 'Retired',
                    text: 'Retired'
                }, {
                    id: 'Self Employed',
                    text: 'Self Employed'
                }, {
                    id: 'Unemployed',
                    text: 'Unemployed'
                }, {
                    id: 'Very Employed',
                    text: 'Very Employed'
                }, {
                    id: 'Very Household Duties',
                    text: 'Very Household Duties'
                }, {
                    id: 'Very Retired',
                    text: 'Very Retired'
                }, {
                    id: 'Very Self Employed',
                    text: 'Very Self Employed'
                }],
            required: true,
            disabled: false,
            // value: { id: 'Employed', text: 'Employed' },
            order: 2,
            validators: []
        }],
    defaultClaimQuestion: [{
            key: 'customerClaims',
            label: 'Have you had any claims in the past 3 years?',
            type: 'radio',
            options: [{
                    value: 'Yes',
                    text: 'Yes'
                }, {
                    value: 'No',
                    text: 'No'
                }],
            required: true,
            order: 2,
            validators: []
        }],
    addressQuestionTemplate: [{
            key: 'addressLine1',
            label: 'Address Line 1',
            type: 'text',
            required: true,
            order: 0,
            validators: []
        },
        {
            key: 'addressLine2',
            label: 'Address Line 2',
            type: 'text',
            required: true,
            order: 0,
            validators: []
        },
        {
            key: 'area',
            label: 'Town',
            type: 'autocomplete',
            serviceUrl: 'motor/reference/town/',
            autoCompleteType: 'search',
            required: true,
            disabled: false,
            // value: { id: 'Employed', text: 'Employed' },
            order: 2,
            validators: []
        },
        {
            key: 'county',
            label: 'County',
            type: 'autocomplete',
            serviceUrl: 'motor/reference/county/',
            autoCompleteType: 'linked',
            link: 'area',
            trigger: {
                name: 'disabledBasedOnKey',
                expectedType: 'object',
                key: 'area'
            },
            required: true,
            disabled: false,
            // value: { id: 'Employed', text: 'Employed' },
            order: 2,
            validators: []
        }],
    claims: [{
            key: 'dateOfClaim',
            label: 'When was the claim?',
            type: 'date',
            required: true,
            disabled: false,
            order: 0,
            validators: ['validDateValidate', 'validLastThreeYearsValidate']
        }, {
            key: 'reasonForClaim',
            label: 'What was the reason for the claim?',
            type: 'dropdown',
            options: ['Accident', 'Accidental Damage', 'Fire', 'Malicious Damage As A Result Of Theft', 'Personal Accident', 'Personal Effects', 'Theft', 'Third Party', 'Vandalism', 'Windscreen'],
            required: true,
            order: 0,
            validators: []
        }, {
            key: 'costOfClaim',
            label: 'Cost of claim',
            type: 'currency',
            required: true,
            placeholder: 'How Much',
            order: 0,
        }, {
            key: 'customerAtFault',
            label: 'Were you at fault?',
            type: 'radio',
            options: [{
                    value: 'Yes',
                    text: 'Yes'
                }, {
                    value: 'No',
                    text: 'No'
                }],
            required: true,
            order: 2,
            validators: []
        }, {
            key: 'noClaimsBonusProtected',
            label: 'Was your no claims bonus protected?',
            type: 'radio',
            options: [{
                    value: 'Yes',
                    text: 'Yes'
                }, {
                    value: 'No',
                    text: 'No'
                }],
            required: true,
            order: 2,
            validators: []
        }],
    claimWithValues: [{
            key: 'dateOfClaim',
            label: 'When was the claim?',
            type: 'date',
            required: true,
            disabled: false,
            value: '01/01/1997',
            order: 0,
            validators: ['validDateValidate', 'validLastThreeYearsValidate']
        }, {
            key: 'reasonForClaim',
            label: 'What was the reason for the claim?',
            type: 'dropdown',
            options: ['Accident', 'Accidental Damage', 'Fire', 'Malicious Damage As A Result Of Theft', 'Personal Accident', 'Personal Effects', 'Theft', 'Third Party', 'Vandalism', 'Windscreen'],
            required: true,
            value: 'Accident',
            order: 0,
            validators: []
        }, {
            key: 'costOfClaim',
            label: 'Cost of claim',
            type: 'currency',
            value: '5000',
            required: true,
            placeholder: 'How Much',
            order: 0,
        }, {
            key: 'customerAtFault',
            label: 'Were you at fault?',
            type: 'radio',
            options: [{
                    value: 'Yes',
                    text: 'Yes'
                }, {
                    value: 'No',
                    text: 'No'
                }],
            required: true,
            value: 'Yes',
            order: 2,
            validators: []
        }, {
            key: 'noClaimsBonusProtected',
            label: 'Was your no claims bonus protected?',
            type: 'radio',
            options: [{
                    value: 'Yes',
                    text: 'Yes'
                }, {
                    value: 'No',
                    text: 'No'
                }],
            required: true,
            value: 'Yes',
            order: 2,
            validators: []
        }],
    penalties: [{
            key: 'dateOfPenalty',
            label: 'When was it?',
            type: 'date',
            required: true,
            disabled: false,
            order: 0,
            validators: ['validDateValidate', 'validLastThreeYearsValidate']
        }, {
            key: 'reasonForPenalty',
            label: 'What was the reason?',
            type: 'dropdown',
            options: ['Accident', 'Accidental Damage', 'Fire', 'Malicious Damage As A Result Of Theft', 'Personal Accident', 'Personal Effects', 'Theft', 'Third Party', 'Vandalism', 'Windscreen'],
            required: true,
            order: 0,
            validators: []
        }, {
            key: 'howManyPoints',
            label: 'How many points?',
            type: 'text',
            required: true,
            placeholder: 'How Much',
            order: 0,
        }],
    penaltiesWithValues: [{
            key: 'dateOfPenalty',
            label: 'When was it?',
            type: 'date',
            value: '01/01/2016',
            required: true,
            disabled: false,
            order: 0,
            validators: ['validDateValidate', 'validLastThreeYearsValidate']
        }, {
            key: 'reasonForPenalty',
            label: 'What was the reason?',
            type: 'dropdown',
            options: ['Accident', 'Accidental Damage', 'Fire', 'Malicious Damage As A Result Of Theft', 'Personal Accident', 'Personal Effects', 'Theft', 'Third Party', 'Vandalism', 'Windscreen'],
            value: 'Accident',
            required: true,
            order: 0,
            validators: []
        }, {
            key: 'howManyPoints',
            label: 'How many points?',
            type: 'text',
            required: true,
            value: '5',
            placeholder: 'How Much',
            order: 0,
        }],
    carQuestions: [
        {
            key: 'primaryCarInformation',
            type: 'group',
            alignment: 'none',
            timeline: false,
            order: 0,
            isComplete: false,
            fields: [
                {
                    key: 'dateOfRegistration',
                    label: 'Date of Registration',
                    type: 'date',
                    required: true,
                    disabled: false,
                    // value: { id: 'Employed', text: 'Employed' },
                    order: 0,
                    validators: []
                },
                {
                    key: 'carMake',
                    label: 'Car Make',
                    type: 'autocomplete',
                    serviceUrl: 'motor/reference/car/make/',
                    autoCompleteType: 'linked',
                    link: 'primaryCarInformation',
                    required: true,
                    disabled: false,
                    trigger: {
                        name: 'disabledBasedOnKey',
                        expectedType: 'string',
                        key: 'dateOfRegistration'
                    },
                    // value: { id: 'Employed', text: 'Employed' },
                    order: 1,
                    validators: []
                },
                {
                    key: 'engineSize',
                    label: 'Engine Size?',
                    type: 'dropdown',
                    options: ['0cc - 1499cc', '1500cc - 1999cc', '2000cc - 2499cc', '2500cc - 2999cc', '3000cc - 3449cc', '3500cc - 3999cc', '4000cc - 4449cc', '4500cc - 4999cc', '4500cc - 4999cc'],
                    required: true,
                    trigger: {
                        name: 'disabledBasedOnKey',
                        expectedType: 'object',
                        key: 'carModel'
                    },
                    order: 3,
                    validators: []
                },
                {
                    key: 'carModel',
                    label: 'Car Model',
                    type: 'autocomplete',
                    serviceUrl: 'motor/reference/car/model/',
                    autoCompleteType: 'linked',
                    link: 'primaryCarInformation',
                    required: true,
                    disabled: false,
                    trigger: {
                        name: 'disabledBasedOnKey',
                        expectedType: 'object',
                        key: 'carMake'
                    },
                    // value: { id: 'Employed', text: 'Employed' },
                    order: 2,
                    validators: []
                }
            ]
        },
        {
            key: 'dateOrPurchase',
            label: 'Date of Purchase',
            type: 'date',
            required: true,
            disabled: false,
            // value: { id: 'Employed', text: 'Employed' },
            order: 5,
            validators: []
        },
        {
            key: 'currentValue',
            label: 'Current Value',
            type: 'currency',
            required: true,
            disabled: false,
            // value: { id: 'Employed', text: 'Employed' },
            order: 6,
            validators: []
        },
        {
            key: 'kilometersPerYear',
            label: 'How many kilometres do you drive in a year?',
            type: 'tel',
            required: true,
            disabled: false,
            // value: { id: 'Employed', text: 'Employed' },
            order: 7,
            validators: []
        },
        {
            key: 'securityFeatures',
            type: 'group',
            alignment: 'half',
            timeline: true,
            label: 'What secturity features does your car have?',
            order: 8,
            isComplete: false,
            fields: [{
                    key: 'security-alarm',
                    name: 'Alarm',
                    type: 'checkbox',
                    timeline: false,
                    required: false
                },
                {
                    key: 'security-immobiliser',
                    name: 'Immobiliser',
                    type: 'checkbox',
                    timeline: false,
                    required: false
                },
                {
                    key: 'security-tracker',
                    name: 'Tracker',
                    type: 'checkbox',
                    timeline: false,
                    required: false
                },
                {
                    key: 'security-other',
                    name: 'Other',
                    type: 'checkbox',
                    timeline: false,
                    required: false
                },
            ]
        },
        {
            key: 'carMainlyUsed',
            label: 'County',
            type: 'autocomplete',
            serviceUrl: 'motor/reference/county/',
            autoCompleteType: 'search',
            required: true,
            disabled: false,
            // value: { id: 'Employed', text: 'Employed' },
            order: 9,
            validators: []
        },
        {
            key: 'carKeptOvernight',
            label: 'County',
            type: 'autocomplete',
            serviceUrl: 'motor/reference/county/',
            autoCompleteType: 'search',
            required: true,
            disabled: false,
            // value: { id: 'Employed', text: 'Employed' },
            order: 10,
            validators: []
        }],
};
exports.PAGES = [{
        id: 'getting-started',
        title: 'Getting Started',
        order: 0,
        uiOptions: {
            nextPage: 'your-details',
            isVisible: true,
        },
        sections: [{
                id: 'pre-default',
                type: 'default',
                fields: exports.QUESTIONS.pre
            }]
    }, {
        id: 'your-details',
        title: 'Details',
        order: 1,
        uiOptions: {
            nextPage: 'your-address',
            prevPage: 'getting-started',
            isVisible: true,
        },
        templates: {
            additionalDriver: {
                type: 'default',
                additional: true,
                hasQuestionsByDefault: true,
                fields: exports.QUESTIONS.details
            }
        },
        sections: [{
                id: 'details-default',
                type: 'default',
                title: 'Primary Driver',
                fields: exports.QUESTIONS.details
            }]
    },
    {
        id: 'your-address',
        title: 'Addresss',
        order: 1,
        uiOptions: {
            nextPage: 'your-car',
            prevPage: 'your-details',
            isVisible: true,
        },
        sections: [{
                id: 'address-default',
                type: 'address',
                title: 'Primary Driver',
                fields: [{
                        key: 'address',
                        type: 'group',
                        isComplete: true,
                        fields: exports.QUESTIONS.addressQuestionTemplate
                    }]
            }]
    },
    {
        id: 'your-car',
        title: 'Car',
        order: 1,
        uiOptions: {
            nextPage: 'your-licence',
            prevPage: 'your-address',
            isVisible: true,
        },
        sections: [{
                id: 'car-default',
                type: 'car',
                title: 'Primary Driver',
                fields: exports.QUESTIONS.carQuestions
            }]
    },
    {
        id: 'your-licence',
        title: 'Licence',
        order: 1,
        uiOptions: {
            nextPage: 'your-cover',
            prevPage: 'your-car',
            isVisible: true,
        },
        templates: {
            additionalDriver: {
                type: 'default',
                additional: true,
                hasQuestionsByDefault: true,
                fields: exports.QUESTIONS.licence
            },
        },
        sections: [{
                id: 'licence-default',
                type: 'default',
                title: 'Primary Driver',
                fields: exports.QUESTIONS.licence
            }]
    },
    {
        id: 'your-cover',
        title: 'Cover',
        order: 1,
        uiOptions: {
            nextPage: 'your-claims',
            prevPage: 'your-licence',
            isVisible: true,
        },
        sections: [{
                id: 'cover-default',
                type: 'default',
                title: 'Primary Driver',
                fields: exports.QUESTIONS.cover
            }]
    },
    {
        id: 'your-claims',
        title: 'Claims',
        order: 1,
        uiOptions: {
            nextPage: 'your-penalties',
            prevPage: 'your-cover',
            isVisible: true,
        },
        templates: {
            // Group Question
            additionalDriver: {
                type: 'claim',
                userHasClaim: null,
                additional: true,
                fields: exports.QUESTIONS.claims
            },
        },
        sections: [{
                id: 'claim-primary-driver',
                title: 'Primary Driver',
                userHasClaim: null,
                type: 'claim',
                fields: []
            }]
    }, {
        id: 'your-penalties',
        title: 'Penalty Points',
        order: 1,
        uiOptions: {
            prevPage: 'your-claims',
            nextPage: 'choose-your-product',
            isVisible: true,
        },
        templates: {
            // Group Question
            additionalDriver: {
                type: 'penalty',
                title: 'Primary Driver',
                userHasPenalty: null,
                additional: true,
                fields: exports.QUESTIONS.penalties
            },
        },
        sections: [{
                id: 'penalty-primary-driver',
                title: 'Primary Driver',
                userHasPenalty: null,
                type: 'penalty',
                fields: []
            },]
    }];
const TEST_PAGES = [{
        id: 'getting-started',
        title: 'Getting Started',
        order: 0,
        uiOptions: {
            nextPage: 'your-details',
            isVisible: true,
        },
        sections: [{
                id: 'pre-default',
                type: 'default',
                fields: exports.QUESTIONS.pre
            }]
    }, {
        id: 'your-details',
        title: 'Details',
        order: 1,
        uiOptions: {
            nextPage: 'choose-your-product',
            prevPage: 'getting-started',
            isVisible: true,
        },
        templates: {
            additionalDriver: {
                type: 'default',
                additional: true,
                hasQuestionsByDefault: true,
                fields: exports.QUESTIONS.details
            }
        },
        sections: [{
                id: 'details-default',
                type: 'default',
                title: 'Primary Driver',
                fields: exports.QUESTIONS.details
            }]
    }];
const PRICE_PAGES = [{
        id: 'choose-your-product',
        uiOptions: {
            prevPage: 'your-penalties',
            nextPage: 'choose-your-payment',
            isTitleHidden: true,
            isVisible: true,
        },
    },
    {
        id: 'choose-your-payment',
        uiOptions: {
            prevPage: 'choose-your-product',
            isVisible: true,
            isTitleHidden: true,
        },
    }];
exports.CONFIG = {
    stages: [{
            id: 'quotation',
            title: 'Your Quote',
            pages: exports.PAGES,
            isComplete: false,
            uiOptions: {}
        },
        {
            id: 'price-presentation',
            title: 'Get Quote',
            pages: PRICE_PAGES,
            isComplete: false,
            uiOptions: {
                isWide: true,
                isTitleHidden: true,
                isPagesHidden: true
            }
        }]
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb25zdGFudHNfbW90b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFhLGlCQUFTLEdBQUc7SUFFeEIsR0FBRyxFQUFFLENBQUM7WUFDTCxHQUFHLEVBQUUsT0FBTztZQUNaLEtBQUssRUFBRSxxQkFBcUI7WUFDNUIsSUFBSSxFQUFFLE9BQU87WUFDYixRQUFRLEVBQUUsSUFBSTtZQUNkLEtBQUssRUFBRSxDQUFDO1NBQ1IsRUFBRTtZQUNGLEdBQUcsRUFBRSxpQkFBaUI7WUFDdEIsS0FBSyxFQUFFLG1CQUFtQjtZQUMxQixJQUFJLEVBQUUsU0FBUztZQUNmLFFBQVEsRUFBRSxJQUFJO1lBQ2Qsa0JBQWtCO1lBQ2xCLEtBQUssRUFBRSxDQUFDO1lBQ1IsS0FBSyxFQUFFLENBQUM7WUFDUixHQUFHLEVBQUUsQ0FBQztZQUNOLEdBQUcsRUFBRSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNSLElBQUksRUFBRSxtQkFBbUI7YUFDekI7U0FDRCxFQUFFO1lBQ0YsR0FBRyxFQUFFLGlCQUFpQjtZQUN0QixLQUFLLEVBQUUsc0JBQXNCO1lBQzdCLElBQUksRUFBRSxjQUFjO1lBQ3BCLEtBQUssRUFBRSxDQUFDO1lBQ1IsUUFBUSxFQUFFLEtBQUs7WUFDZixPQUFPLEVBQUUsZ1hBQWdYO1NBQ3pYLENBQUM7SUFFRixPQUFPLEVBQUUsQ0FBQztZQUNULEdBQUcsRUFBRSxPQUFPO1lBQ1osS0FBSyxFQUFFLE9BQU87WUFDZCxJQUFJLEVBQUUsT0FBTztZQUNiLEtBQUssRUFBRSxDQUFDO1lBQ1IsT0FBTyxFQUFFLENBQUM7b0JBQ1QsS0FBSyxFQUFFLElBQUk7b0JBQ1gsSUFBSSxFQUFFLElBQUk7aUJBQ1Y7Z0JBQ0Q7b0JBQ0MsS0FBSyxFQUFFLEtBQUs7b0JBQ1osSUFBSSxFQUFFLEtBQUs7aUJBQ1g7Z0JBQ0Q7b0JBQ0MsS0FBSyxFQUFFLE1BQU07b0JBQ2IsSUFBSSxFQUFFLE1BQU07aUJBQ1o7Z0JBQ0Q7b0JBQ0MsS0FBSyxFQUFFLElBQUk7b0JBQ1gsSUFBSSxFQUFFLElBQUk7aUJBQ1YsQ0FBQztZQUNGLFFBQVEsRUFBRSxJQUFJO1NBQ2QsRUFBRTtZQUNGLEdBQUcsRUFBRSxXQUFXO1lBQ2hCLEtBQUssRUFBRSxZQUFZO1lBQ25CLElBQUksRUFBRSxNQUFNO1lBQ1osUUFBUSxFQUFFLElBQUk7WUFDZCxNQUFNLEVBQUUsU0FBUztZQUNqQixXQUFXLEVBQUUsTUFBTTtZQUNuQixrQkFBa0I7WUFDbEIsS0FBSyxFQUFFLENBQUM7U0FDUixFQUFFO1lBQ0YsR0FBRyxFQUFFLFVBQVU7WUFDZixLQUFLLEVBQUUsV0FBVztZQUNsQixXQUFXLEVBQUUsTUFBTTtZQUNuQixJQUFJLEVBQUUsTUFBTTtZQUNaLE1BQU0sRUFBRSxTQUFTO1lBQ2pCLFFBQVEsRUFBRSxJQUFJO1lBQ2QsS0FBSyxFQUFFLENBQUM7U0FDUjtRQUVEO1lBQ0MsR0FBRyxFQUFFLGFBQWE7WUFDbEIsS0FBSyxFQUFFLGVBQWU7WUFDdEIsSUFBSSxFQUFFLE1BQU07WUFDWixRQUFRLEVBQUUsSUFBSTtZQUNkLE1BQU0sRUFBRSxTQUFTO1lBQ2pCLFFBQVEsRUFBRSxLQUFLO1lBQ2YsS0FBSyxFQUFFLENBQUM7WUFDUixVQUFVLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSwyQkFBMkIsQ0FBQztTQUM5RCxFQUFFO1lBQ0YsR0FBRyxFQUFFLGFBQWE7WUFDbEIsS0FBSyxFQUFFLGNBQWM7WUFDckIsSUFBSSxFQUFFLEtBQUs7WUFDWCxRQUFRLEVBQUUsSUFBSTtZQUNkLFFBQVEsRUFBRSxLQUFLO1lBQ2YsTUFBTSxFQUFFLFNBQVM7WUFDakIsS0FBSyxFQUFFLENBQUM7WUFDUixVQUFVLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztTQUN4QyxFQUFFO1lBQ0YsR0FBRyxFQUFFLGtCQUFrQjtZQUN2QixLQUFLLEVBQUUsb0JBQW9CO1lBQzNCLElBQUksRUFBRSxVQUFVO1lBQ2hCLE9BQU8sRUFBRSxDQUFDLFVBQVUsRUFBRSxrQkFBa0IsRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFFLFlBQVksQ0FBQztZQUNuRixRQUFRLEVBQUUsSUFBSTtZQUNkLEtBQUssRUFBRSxDQUFDO1lBQ1IsVUFBVSxFQUFFLEVBQUU7U0FDZCxFQUFFO1lBQ0YsR0FBRyxFQUFFLFlBQVk7WUFDakIsS0FBSyxFQUFFLFlBQVk7WUFDbkIsSUFBSSxFQUFFLGNBQWM7WUFDcEIsV0FBVyxFQUFFLHNCQUFzQjtZQUNuQyxVQUFVLEVBQUUsbUJBQW1CO1lBQy9CLGdCQUFnQixFQUFFLFFBQVE7WUFDMUIsUUFBUSxFQUFFLElBQUk7WUFDZCxRQUFRLEVBQUUsS0FBSztZQUNmLCtDQUErQztZQUMvQyxLQUFLLEVBQUUsQ0FBQztZQUNSLFVBQVUsRUFBRSxFQUFFO1NBQ2QsRUFBRTtZQUNGLEdBQUcsRUFBRSxVQUFVO1lBQ2YsS0FBSyxFQUFFLGtCQUFrQjtZQUN6QixJQUFJLEVBQUUsY0FBYztZQUNwQixXQUFXLEVBQUUsNEJBQTRCO1lBQ3pDLE9BQU8sRUFBRTtnQkFDUixHQUFHLEVBQUUsWUFBWTtnQkFDakIsSUFBSSxFQUFFLFlBQVk7YUFDbEI7WUFDRCxVQUFVLEVBQUUsbUJBQW1CO1lBQy9CLGdCQUFnQixFQUFFLFFBQVE7WUFDMUIsUUFBUSxFQUFFLElBQUk7WUFDZCxLQUFLLEVBQUUsQ0FBQztZQUNSLFVBQVUsRUFBRSxFQUFFO1NBQ2QsRUFBRTtZQUNGLEdBQUcsRUFBRSxxQkFBcUI7WUFDMUIsS0FBSyxFQUFFLGlGQUFpRjtZQUN4RixJQUFJLEVBQUUsT0FBTztZQUNiLE9BQU8sRUFBRSxDQUFDO29CQUNULEtBQUssRUFBRSxLQUFLO29CQUNaLElBQUksRUFBRSxLQUFLO2lCQUNYLEVBQUU7b0JBQ0YsS0FBSyxFQUFFLElBQUk7b0JBQ1gsSUFBSSxFQUFFLElBQUk7aUJBQ1YsQ0FBQztZQUNGLFFBQVEsRUFBRSxJQUFJO1lBQ2QsS0FBSyxFQUFFLENBQUM7WUFDUixVQUFVLEVBQUUsRUFBRTtTQUNkLENBQUM7SUFHRixLQUFLLEVBQUUsQ0FBQztZQUNQLEdBQUcsRUFBRSxzQkFBc0I7WUFDM0IsS0FBSyxFQUFFLDBFQUEwRTtZQUNqRixJQUFJLEVBQUUsT0FBTztZQUNiLEtBQUssRUFBRSxDQUFDO1lBQ1IsT0FBTyxFQUFFLENBQUM7b0JBQ1QsS0FBSyxFQUFFLElBQUk7b0JBQ1gsSUFBSSxFQUFFLEtBQUs7aUJBQ1gsRUFBRTtvQkFDRixLQUFLLEVBQUUsS0FBSztvQkFDWixJQUFJLEVBQUUsSUFBSTtpQkFDVixDQUFDO1lBQ0YsUUFBUSxFQUFFLElBQUk7U0FDZDtRQUNEO1lBQ0MsR0FBRyxFQUFFLG9CQUFvQjtZQUN6QixLQUFLLEVBQUUsd0RBQXdEO1lBQy9ELElBQUksRUFBRSxPQUFPO1lBQ2IsS0FBSyxFQUFFLENBQUM7WUFDUixPQUFPLEVBQUU7Z0JBQ1IsR0FBRyxFQUFFLHNCQUFzQjtnQkFDM0IsSUFBSSxFQUFFLGdCQUFnQjthQUN0QjtZQUNELE9BQU8sRUFBRSxDQUFDO29CQUNULEtBQUssRUFBRSxJQUFJO29CQUNYLElBQUksRUFBRSxLQUFLO2lCQUNYLEVBQUU7b0JBQ0YsS0FBSyxFQUFFLEtBQUs7b0JBQ1osSUFBSSxFQUFFLElBQUk7aUJBQ1YsQ0FBQztZQUNGLFFBQVEsRUFBRSxJQUFJO1NBQ2Q7UUFDRDtZQUNDLEdBQUcsRUFBRSw0QkFBNEI7WUFDakMsS0FBSyxFQUFFLGlCQUFpQjtZQUN4QixJQUFJLEVBQUUsVUFBVTtZQUNoQixPQUFPLEVBQUU7Z0JBQ1IsR0FBRyxFQUFFLG9CQUFvQjtnQkFDekIsSUFBSSxFQUFFLGdCQUFnQjthQUN0QjtZQUNELE9BQU8sRUFBRSxDQUFDLFVBQVUsRUFBRSxrQkFBa0IsRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFFLFlBQVksQ0FBQztZQUNuRixRQUFRLEVBQUUsSUFBSTtZQUNkLEtBQUssRUFBRSxDQUFDO1lBQ1IsVUFBVSxFQUFFLEVBQUU7U0FDZDtRQUNEO1lBQ0MsR0FBRyxFQUFFLGtCQUFrQjtZQUN2QixLQUFLLEVBQUUsMENBQTBDO1lBQ2pELElBQUksRUFBRSxVQUFVO1lBQ2hCLE9BQU8sRUFBRTtnQkFDUixJQUFJLEVBQUUsc0JBQXNCO2dCQUM1QixJQUFJLEVBQUUsb0JBQW9CO2dCQUMxQixJQUFJLEVBQUUsYUFBYTthQUNuQjtZQUNELE9BQU8sRUFBRSxDQUFDLEtBQUssRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxnQkFBZ0IsQ0FBQztZQUM5RSxRQUFRLEVBQUUsSUFBSTtZQUNkLEtBQUssRUFBRSxDQUFDO1lBQ1IsVUFBVSxFQUFFLEVBQUU7U0FDZDtRQUNEO1lBQ0MsR0FBRyxFQUFFLG9CQUFvQjtZQUN6QixLQUFLLEVBQUUsNkNBQTZDO1lBQ3BELElBQUksRUFBRSxRQUFRO1lBQ2QsT0FBTyxFQUFFO2dCQUNSLElBQUksRUFBRSxzQkFBc0I7Z0JBQzVCLElBQUksRUFBRSxvQkFBb0I7Z0JBQzFCLElBQUksRUFBRSxhQUFhO2FBQ25CO1lBQ0QsUUFBUSxFQUFFLElBQUk7WUFDZCxLQUFLLEVBQUUsQ0FBQztZQUNSLEtBQUssRUFBRSxDQUFDO1lBQ1IsR0FBRyxFQUFFLENBQUM7WUFDTixHQUFHLEVBQUUsQ0FBQztTQUNOO1FBQ0Q7WUFDQyxHQUFHLEVBQUUsb0JBQW9CO1lBQ3pCLEtBQUssRUFBRSx5Q0FBeUM7WUFDaEQsSUFBSSxFQUFFLGNBQWM7WUFDcEIsZ0JBQWdCLEVBQUUsU0FBUztZQUMzQixPQUFPLEVBQUU7Z0JBQ1IsSUFBSSxFQUFFLHNCQUFzQjtnQkFDNUIsSUFBSSxFQUFFLG9CQUFvQjtnQkFDMUIsSUFBSSxFQUFFLGFBQWE7YUFDbkI7WUFDRCxPQUFPLEVBQUUsQ0FBQztvQkFDVCxFQUFFLEVBQUUsVUFBVTtvQkFDZCxJQUFJLEVBQUUsVUFBVTtpQkFDaEIsRUFBRTtvQkFDRixFQUFFLEVBQUUsa0JBQWtCO29CQUN0QixJQUFJLEVBQUUsa0JBQWtCO2lCQUN4QixFQUFFO29CQUNGLEVBQUUsRUFBRSxTQUFTO29CQUNiLElBQUksRUFBRSxTQUFTO2lCQUNmLEVBQUU7b0JBQ0YsRUFBRSxFQUFFLGVBQWU7b0JBQ25CLElBQUksRUFBRSxlQUFlO2lCQUNyQixFQUFFO29CQUNGLEVBQUUsRUFBRSxZQUFZO29CQUNoQixJQUFJLEVBQUUsWUFBWTtpQkFDbEIsRUFBRTtvQkFDRixFQUFFLEVBQUUsZUFBZTtvQkFDbkIsSUFBSSxFQUFFLGVBQWU7aUJBQ3JCLEVBQUU7b0JBQ0YsRUFBRSxFQUFFLHVCQUF1QjtvQkFDM0IsSUFBSSxFQUFFLHVCQUF1QjtpQkFDN0IsRUFBRTtvQkFDRixFQUFFLEVBQUUsY0FBYztvQkFDbEIsSUFBSSxFQUFFLGNBQWM7aUJBQ3BCLEVBQUU7b0JBQ0YsRUFBRSxFQUFFLG9CQUFvQjtvQkFDeEIsSUFBSSxFQUFFLG9CQUFvQjtpQkFDMUIsQ0FBQztZQUNGLFFBQVEsRUFBRSxJQUFJO1lBQ2QsUUFBUSxFQUFFLEtBQUs7WUFDZiwrQ0FBK0M7WUFDL0MsS0FBSyxFQUFFLENBQUM7WUFDUixVQUFVLEVBQUUsRUFBRTtTQUNkO1FBQ0Q7WUFDQyxHQUFHLEVBQUUsa0JBQWtCO1lBQ3ZCLEtBQUssRUFBRSwrQkFBK0I7WUFDdEMsSUFBSSxFQUFFLE1BQU07WUFDWixPQUFPLEVBQUU7Z0JBQ1IsSUFBSSxFQUFFLHNCQUFzQjtnQkFDNUIsSUFBSSxFQUFFLG9CQUFvQjtnQkFDMUIsSUFBSSxFQUFFLGFBQWE7YUFDbkI7WUFDRCxRQUFRLEVBQUUsSUFBSTtZQUNkLFFBQVEsRUFBRSxLQUFLO1lBQ2YsS0FBSyxFQUFFLENBQUM7WUFDUixVQUFVLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztTQUNqQztRQUNEO1lBQ0MsR0FBRyxFQUFFLHFCQUFxQjtZQUMxQixLQUFLLEVBQUUsMENBQTBDO1lBQ2pELElBQUksRUFBRSxPQUFPO1lBQ2IsS0FBSyxFQUFFLENBQUM7WUFDUixPQUFPLEVBQUU7Z0JBQ1IsSUFBSSxFQUFFLHNCQUFzQjtnQkFDNUIsSUFBSSxFQUFFLG9CQUFvQjtnQkFDMUIsSUFBSSxFQUFFLGFBQWE7YUFDbkI7WUFDRCxPQUFPLEVBQUUsQ0FBQztvQkFDVCxLQUFLLEVBQUUsSUFBSTtvQkFDWCxJQUFJLEVBQUUsS0FBSztpQkFDWCxFQUFFO29CQUNGLEtBQUssRUFBRSxLQUFLO29CQUNaLElBQUksRUFBRSxJQUFJO2lCQUNWLENBQUM7WUFDRixRQUFRLEVBQUUsSUFBSTtTQUNkO1FBQ0Q7WUFDQyxHQUFHLEVBQUUsaUJBQWlCO1lBQ3RCLEtBQUssRUFBRSwwQ0FBMEM7WUFDakQsSUFBSSxFQUFFLE1BQU07WUFDWixLQUFLLEVBQUUsQ0FBQztZQUNSLE9BQU8sRUFBRTtnQkFDUixHQUFHLEVBQUUscUJBQXFCO2dCQUMxQixJQUFJLEVBQUUsaUJBQWlCO2dCQUN2QixNQUFNLEVBQUUsS0FBSzthQUNiO1lBQ0QsUUFBUSxFQUFFLElBQUk7U0FDZDtRQUNEO1lBQ0MsR0FBRyxFQUFFLGNBQWM7WUFDbkIsS0FBSyxFQUFFLGtDQUFrQztZQUN6QyxJQUFJLEVBQUUsT0FBTztZQUNiLFNBQVMsRUFBRSxVQUFVO1lBQ3JCLEtBQUssRUFBRSxDQUFDO1lBQ1IsT0FBTyxFQUFFLENBQUM7b0JBQ1QsS0FBSyxFQUFFLGVBQWU7b0JBQ3RCLElBQUksRUFBRSxlQUFlO2lCQUNyQixFQUFFO29CQUNGLEtBQUssRUFBRSxZQUFZO29CQUNuQixJQUFJLEVBQUUsNkJBQTZCO2lCQUNuQyxDQUFDO1lBQ0YsUUFBUSxFQUFFLElBQUk7U0FDZDtRQUNEO1lBQ0MsR0FBRyxFQUFFLHNCQUFzQjtZQUMzQixLQUFLLEVBQUUsMERBQTBEO1lBQ2pFLElBQUksRUFBRSxPQUFPO1lBQ2IsS0FBSyxFQUFFLENBQUM7WUFDUixPQUFPLEVBQUUsQ0FBQztvQkFDVCxLQUFLLEVBQUUsTUFBTTtvQkFDYixJQUFJLEVBQUUsTUFBTTtpQkFDWixFQUFFO29CQUNGLEtBQUssRUFBRSxVQUFVO29CQUNqQixJQUFJLEVBQUUsV0FBVztpQkFDakI7Z0JBQ0Q7b0JBQ0MsS0FBSyxFQUFFLE1BQU07b0JBQ2IsSUFBSSxFQUFFLE1BQU07aUJBQ1osQ0FBQztZQUNGLFFBQVEsRUFBRSxJQUFJO1NBQ2QsQ0FBQztJQUdGLE9BQU8sRUFBRSxDQUFDO1lBQ1QsR0FBRyxFQUFFLGVBQWU7WUFDcEIsS0FBSyxFQUFFLDJCQUEyQjtZQUNsQyxJQUFJLEVBQUUsVUFBVTtZQUNoQixPQUFPLEVBQUUsQ0FBQyxvQkFBb0IsRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxnQkFBZ0IsQ0FBQztZQUM3RixRQUFRLEVBQUUsSUFBSTtZQUNkLEtBQUssRUFBRSxDQUFDO1lBQ1IsVUFBVSxFQUFFLEVBQUU7U0FDZCxFQUFFO1lBQ0YsR0FBRyxFQUFFLG9CQUFvQjtZQUN6QixLQUFLLEVBQUUsc0NBQXNDO1lBQzdDLElBQUksRUFBRSxRQUFRO1lBQ2QsUUFBUSxFQUFFLElBQUk7WUFDZCxLQUFLLEVBQUUsQ0FBQztZQUNSLEtBQUssRUFBRSxDQUFDO1lBQ1IsR0FBRyxFQUFFLENBQUM7WUFDTixHQUFHLEVBQUUsQ0FBQztTQUNOLEVBQUU7WUFDRixHQUFHLEVBQUUsa0JBQWtCO1lBQ3ZCLEtBQUssRUFBRSxpQ0FBaUM7WUFDeEMsSUFBSSxFQUFFLGNBQWM7WUFDcEIsVUFBVSxFQUFFLG1CQUFtQjtZQUMvQixnQkFBZ0IsRUFBRSxTQUFTO1lBQzNCLE9BQU8sRUFBRSxDQUFDO29CQUNULEVBQUUsRUFBRSxVQUFVO29CQUNkLElBQUksRUFBRSxVQUFVO2lCQUNoQixFQUFFO29CQUNGLEVBQUUsRUFBRSxrQkFBa0I7b0JBQ3RCLElBQUksRUFBRSxrQkFBa0I7aUJBQ3hCLEVBQUU7b0JBQ0YsRUFBRSxFQUFFLFNBQVM7b0JBQ2IsSUFBSSxFQUFFLFNBQVM7aUJBQ2YsRUFBRTtvQkFDRixFQUFFLEVBQUUsZUFBZTtvQkFDbkIsSUFBSSxFQUFFLGVBQWU7aUJBQ3JCLEVBQUU7b0JBQ0YsRUFBRSxFQUFFLFlBQVk7b0JBQ2hCLElBQUksRUFBRSxZQUFZO2lCQUNsQixFQUFFO29CQUNGLEVBQUUsRUFBRSxlQUFlO29CQUNuQixJQUFJLEVBQUUsZUFBZTtpQkFDckIsRUFBRTtvQkFDRixFQUFFLEVBQUUsdUJBQXVCO29CQUMzQixJQUFJLEVBQUUsdUJBQXVCO2lCQUM3QixFQUFFO29CQUNGLEVBQUUsRUFBRSxjQUFjO29CQUNsQixJQUFJLEVBQUUsY0FBYztpQkFDcEIsRUFBRTtvQkFDRixFQUFFLEVBQUUsb0JBQW9CO29CQUN4QixJQUFJLEVBQUUsb0JBQW9CO2lCQUMxQixDQUFDO1lBQ0YsUUFBUSxFQUFFLElBQUk7WUFDZCxRQUFRLEVBQUUsS0FBSztZQUNmLCtDQUErQztZQUMvQyxLQUFLLEVBQUUsQ0FBQztZQUNSLFVBQVUsRUFBRSxFQUFFO1NBQ2QsQ0FBQztJQUdGLG9CQUFvQixFQUFFLENBQUM7WUFDdEIsR0FBRyxFQUFFLGdCQUFnQjtZQUNyQixLQUFLLEVBQUUsOENBQThDO1lBQ3JELElBQUksRUFBRSxPQUFPO1lBQ2IsT0FBTyxFQUFFLENBQUM7b0JBQ1QsS0FBSyxFQUFFLEtBQUs7b0JBQ1osSUFBSSxFQUFFLEtBQUs7aUJBQ1gsRUFBRTtvQkFDRixLQUFLLEVBQUUsSUFBSTtvQkFDWCxJQUFJLEVBQUUsSUFBSTtpQkFDVixDQUFDO1lBQ0YsUUFBUSxFQUFFLElBQUk7WUFDZCxLQUFLLEVBQUUsQ0FBQztZQUNSLFVBQVUsRUFBRSxFQUFFO1NBQ2QsQ0FBQztJQUdGLHVCQUF1QixFQUFFLENBQUM7WUFDekIsR0FBRyxFQUFFLGNBQWM7WUFDbkIsS0FBSyxFQUFFLGdCQUFnQjtZQUN2QixJQUFJLEVBQUUsTUFBTTtZQUNaLFFBQVEsRUFBRSxJQUFJO1lBQ2QsS0FBSyxFQUFFLENBQUM7WUFDUixVQUFVLEVBQUUsRUFBRTtTQUNkO1FBQ0Q7WUFDQyxHQUFHLEVBQUUsY0FBYztZQUNuQixLQUFLLEVBQUUsZ0JBQWdCO1lBQ3ZCLElBQUksRUFBRSxNQUFNO1lBQ1osUUFBUSxFQUFFLElBQUk7WUFDZCxLQUFLLEVBQUUsQ0FBQztZQUNSLFVBQVUsRUFBRSxFQUFFO1NBQ2Q7UUFDRDtZQUNDLEdBQUcsRUFBRSxNQUFNO1lBQ1gsS0FBSyxFQUFFLE1BQU07WUFDYixJQUFJLEVBQUUsY0FBYztZQUNwQixVQUFVLEVBQUUsdUJBQXVCO1lBQ25DLGdCQUFnQixFQUFFLFFBQVE7WUFDMUIsUUFBUSxFQUFFLElBQUk7WUFDZCxRQUFRLEVBQUUsS0FBSztZQUNmLCtDQUErQztZQUMvQyxLQUFLLEVBQUUsQ0FBQztZQUNSLFVBQVUsRUFBRSxFQUFFO1NBQ2Q7UUFDRDtZQUNDLEdBQUcsRUFBRSxRQUFRO1lBQ2IsS0FBSyxFQUFFLFFBQVE7WUFDZixJQUFJLEVBQUUsY0FBYztZQUNwQixVQUFVLEVBQUUseUJBQXlCO1lBQ3JDLGdCQUFnQixFQUFFLFFBQVE7WUFDMUIsSUFBSSxFQUFFLE1BQU07WUFDWixPQUFPLEVBQUU7Z0JBQ1IsSUFBSSxFQUFFLG9CQUFvQjtnQkFDMUIsWUFBWSxFQUFFLFFBQVE7Z0JBQ3RCLEdBQUcsRUFBRSxNQUFNO2FBQ1g7WUFDRCxRQUFRLEVBQUUsSUFBSTtZQUNkLFFBQVEsRUFBRSxLQUFLO1lBQ2YsK0NBQStDO1lBQy9DLEtBQUssRUFBRSxDQUFDO1lBQ1IsVUFBVSxFQUFFLEVBQUU7U0FDZCxDQUFDO0lBRUYsTUFBTSxFQUFFLENBQUM7WUFDUixHQUFHLEVBQUUsYUFBYTtZQUNsQixLQUFLLEVBQUUscUJBQXFCO1lBQzVCLElBQUksRUFBRSxNQUFNO1lBQ1osUUFBUSxFQUFFLElBQUk7WUFDZCxRQUFRLEVBQUUsS0FBSztZQUNmLEtBQUssRUFBRSxDQUFDO1lBQ1IsVUFBVSxFQUFFLENBQUMsbUJBQW1CLEVBQUUsNkJBQTZCLENBQUM7U0FDaEUsRUFBRTtZQUNGLEdBQUcsRUFBRSxnQkFBZ0I7WUFDckIsS0FBSyxFQUFFLG9DQUFvQztZQUMzQyxJQUFJLEVBQUUsVUFBVTtZQUNoQixPQUFPLEVBQUUsQ0FBQyxVQUFVLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxFQUFFLHVDQUF1QyxFQUFFLG1CQUFtQixFQUFFLGtCQUFrQixFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsV0FBVyxFQUFFLFlBQVksQ0FBQztZQUN2TCxRQUFRLEVBQUUsSUFBSTtZQUNkLEtBQUssRUFBRSxDQUFDO1lBQ1IsVUFBVSxFQUFFLEVBQUU7U0FDZCxFQUFFO1lBQ0YsR0FBRyxFQUFFLGFBQWE7WUFDbEIsS0FBSyxFQUFFLGVBQWU7WUFDdEIsSUFBSSxFQUFFLFVBQVU7WUFDaEIsUUFBUSxFQUFFLElBQUk7WUFDZCxXQUFXLEVBQUUsVUFBVTtZQUN2QixLQUFLLEVBQUUsQ0FBQztTQUNSLEVBQUU7WUFDRixHQUFHLEVBQUUsaUJBQWlCO1lBQ3RCLEtBQUssRUFBRSxvQkFBb0I7WUFDM0IsSUFBSSxFQUFFLE9BQU87WUFDYixPQUFPLEVBQUUsQ0FBQztvQkFDVCxLQUFLLEVBQUUsS0FBSztvQkFDWixJQUFJLEVBQUUsS0FBSztpQkFDWCxFQUFFO29CQUNGLEtBQUssRUFBRSxJQUFJO29CQUNYLElBQUksRUFBRSxJQUFJO2lCQUNWLENBQUM7WUFDRixRQUFRLEVBQUUsSUFBSTtZQUNkLEtBQUssRUFBRSxDQUFDO1lBQ1IsVUFBVSxFQUFFLEVBQUU7U0FDZCxFQUFFO1lBQ0YsR0FBRyxFQUFFLHdCQUF3QjtZQUM3QixLQUFLLEVBQUUscUNBQXFDO1lBQzVDLElBQUksRUFBRSxPQUFPO1lBQ2IsT0FBTyxFQUFFLENBQUM7b0JBQ1QsS0FBSyxFQUFFLEtBQUs7b0JBQ1osSUFBSSxFQUFFLEtBQUs7aUJBQ1gsRUFBRTtvQkFDRixLQUFLLEVBQUUsSUFBSTtvQkFDWCxJQUFJLEVBQUUsSUFBSTtpQkFDVixDQUFDO1lBQ0YsUUFBUSxFQUFFLElBQUk7WUFDZCxLQUFLLEVBQUUsQ0FBQztZQUNSLFVBQVUsRUFBRSxFQUFFO1NBQ2QsQ0FBQztJQUNGLGVBQWUsRUFBRSxDQUFDO1lBQ2pCLEdBQUcsRUFBRSxhQUFhO1lBQ2xCLEtBQUssRUFBRSxxQkFBcUI7WUFDNUIsSUFBSSxFQUFFLE1BQU07WUFDWixRQUFRLEVBQUUsSUFBSTtZQUNkLFFBQVEsRUFBRSxLQUFLO1lBQ2YsS0FBSyxFQUFFLFlBQVk7WUFDbkIsS0FBSyxFQUFFLENBQUM7WUFDUixVQUFVLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSw2QkFBNkIsQ0FBQztTQUNoRSxFQUFFO1lBQ0YsR0FBRyxFQUFFLGdCQUFnQjtZQUNyQixLQUFLLEVBQUUsb0NBQW9DO1lBQzNDLElBQUksRUFBRSxVQUFVO1lBQ2hCLE9BQU8sRUFBRSxDQUFDLFVBQVUsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLEVBQUUsdUNBQXVDLEVBQUUsbUJBQW1CLEVBQUUsa0JBQWtCLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxXQUFXLEVBQUUsWUFBWSxDQUFDO1lBQ3ZMLFFBQVEsRUFBRSxJQUFJO1lBQ2QsS0FBSyxFQUFFLFVBQVU7WUFDakIsS0FBSyxFQUFFLENBQUM7WUFDUixVQUFVLEVBQUUsRUFBRTtTQUNkLEVBQUU7WUFDRixHQUFHLEVBQUUsYUFBYTtZQUNsQixLQUFLLEVBQUUsZUFBZTtZQUN0QixJQUFJLEVBQUUsVUFBVTtZQUNoQixLQUFLLEVBQUUsTUFBTTtZQUNiLFFBQVEsRUFBRSxJQUFJO1lBQ2QsV0FBVyxFQUFFLFVBQVU7WUFDdkIsS0FBSyxFQUFFLENBQUM7U0FDUixFQUFFO1lBQ0YsR0FBRyxFQUFFLGlCQUFpQjtZQUN0QixLQUFLLEVBQUUsb0JBQW9CO1lBQzNCLElBQUksRUFBRSxPQUFPO1lBQ2IsT0FBTyxFQUFFLENBQUM7b0JBQ1QsS0FBSyxFQUFFLEtBQUs7b0JBQ1osSUFBSSxFQUFFLEtBQUs7aUJBQ1gsRUFBRTtvQkFDRixLQUFLLEVBQUUsSUFBSTtvQkFDWCxJQUFJLEVBQUUsSUFBSTtpQkFDVixDQUFDO1lBQ0YsUUFBUSxFQUFFLElBQUk7WUFDZCxLQUFLLEVBQUUsS0FBSztZQUNaLEtBQUssRUFBRSxDQUFDO1lBQ1IsVUFBVSxFQUFFLEVBQUU7U0FDZCxFQUFFO1lBQ0YsR0FBRyxFQUFFLHdCQUF3QjtZQUM3QixLQUFLLEVBQUUscUNBQXFDO1lBQzVDLElBQUksRUFBRSxPQUFPO1lBQ2IsT0FBTyxFQUFFLENBQUM7b0JBQ1QsS0FBSyxFQUFFLEtBQUs7b0JBQ1osSUFBSSxFQUFFLEtBQUs7aUJBQ1gsRUFBRTtvQkFDRixLQUFLLEVBQUUsSUFBSTtvQkFDWCxJQUFJLEVBQUUsSUFBSTtpQkFDVixDQUFDO1lBQ0YsUUFBUSxFQUFFLElBQUk7WUFDZCxLQUFLLEVBQUUsS0FBSztZQUNaLEtBQUssRUFBRSxDQUFDO1lBQ1IsVUFBVSxFQUFFLEVBQUU7U0FDZCxDQUFDO0lBQ0YsU0FBUyxFQUFFLENBQUM7WUFDWCxHQUFHLEVBQUUsZUFBZTtZQUNwQixLQUFLLEVBQUUsY0FBYztZQUNyQixJQUFJLEVBQUUsTUFBTTtZQUNaLFFBQVEsRUFBRSxJQUFJO1lBQ2QsUUFBUSxFQUFFLEtBQUs7WUFDZixLQUFLLEVBQUUsQ0FBQztZQUNSLFVBQVUsRUFBRSxDQUFDLG1CQUFtQixFQUFFLDZCQUE2QixDQUFDO1NBQ2hFLEVBQUU7WUFDRixHQUFHLEVBQUUsa0JBQWtCO1lBQ3ZCLEtBQUssRUFBRSxzQkFBc0I7WUFDN0IsSUFBSSxFQUFFLFVBQVU7WUFDaEIsT0FBTyxFQUFFLENBQUMsVUFBVSxFQUFFLG1CQUFtQixFQUFFLE1BQU0sRUFBRSx1Q0FBdUMsRUFBRSxtQkFBbUIsRUFBRSxrQkFBa0IsRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLFdBQVcsRUFBRSxZQUFZLENBQUM7WUFDdkwsUUFBUSxFQUFFLElBQUk7WUFDZCxLQUFLLEVBQUUsQ0FBQztZQUNSLFVBQVUsRUFBRSxFQUFFO1NBQ2QsRUFBRTtZQUNGLEdBQUcsRUFBRSxlQUFlO1lBQ3BCLEtBQUssRUFBRSxrQkFBa0I7WUFDekIsSUFBSSxFQUFFLE1BQU07WUFDWixRQUFRLEVBQUUsSUFBSTtZQUNkLFdBQVcsRUFBRSxVQUFVO1lBQ3ZCLEtBQUssRUFBRSxDQUFDO1NBQ1IsQ0FBQztJQUNGLG1CQUFtQixFQUFFLENBQUM7WUFDckIsR0FBRyxFQUFFLGVBQWU7WUFDcEIsS0FBSyxFQUFFLGNBQWM7WUFDckIsSUFBSSxFQUFFLE1BQU07WUFDWixLQUFLLEVBQUUsWUFBWTtZQUNuQixRQUFRLEVBQUUsSUFBSTtZQUNkLFFBQVEsRUFBRSxLQUFLO1lBQ2YsS0FBSyxFQUFFLENBQUM7WUFDUixVQUFVLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSw2QkFBNkIsQ0FBQztTQUNoRSxFQUFFO1lBQ0YsR0FBRyxFQUFFLGtCQUFrQjtZQUN2QixLQUFLLEVBQUUsc0JBQXNCO1lBQzdCLElBQUksRUFBRSxVQUFVO1lBQ2hCLE9BQU8sRUFBRSxDQUFDLFVBQVUsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLEVBQUUsdUNBQXVDLEVBQUUsbUJBQW1CLEVBQUUsa0JBQWtCLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxXQUFXLEVBQUUsWUFBWSxDQUFDO1lBQ3ZMLEtBQUssRUFBRSxVQUFVO1lBQ2pCLFFBQVEsRUFBRSxJQUFJO1lBQ2QsS0FBSyxFQUFFLENBQUM7WUFDUixVQUFVLEVBQUUsRUFBRTtTQUNkLEVBQUU7WUFDRixHQUFHLEVBQUUsZUFBZTtZQUNwQixLQUFLLEVBQUUsa0JBQWtCO1lBQ3pCLElBQUksRUFBRSxNQUFNO1lBQ1osUUFBUSxFQUFFLElBQUk7WUFDZCxLQUFLLEVBQUUsR0FBRztZQUNWLFdBQVcsRUFBRSxVQUFVO1lBQ3ZCLEtBQUssRUFBRSxDQUFDO1NBQ1IsQ0FBQztJQUVGLFlBQVksRUFBRTtRQUNiO1lBQ0MsR0FBRyxFQUFFLHVCQUF1QjtZQUM1QixJQUFJLEVBQUUsT0FBTztZQUNiLFNBQVMsRUFBRSxNQUFNO1lBQ2pCLFFBQVEsRUFBRSxLQUFLO1lBQ2YsS0FBSyxFQUFFLENBQUM7WUFDUixVQUFVLEVBQUUsS0FBSztZQUNqQixNQUFNLEVBQUU7Z0JBQ1A7b0JBQ0MsR0FBRyxFQUFFLG9CQUFvQjtvQkFDekIsS0FBSyxFQUFFLHNCQUFzQjtvQkFDN0IsSUFBSSxFQUFFLE1BQU07b0JBQ1osUUFBUSxFQUFFLElBQUk7b0JBQ2QsUUFBUSxFQUFFLEtBQUs7b0JBQ2YsK0NBQStDO29CQUMvQyxLQUFLLEVBQUUsQ0FBQztvQkFDUixVQUFVLEVBQUUsRUFBRTtpQkFDZDtnQkFDRDtvQkFDQyxHQUFHLEVBQUUsU0FBUztvQkFDZCxLQUFLLEVBQUUsVUFBVTtvQkFDakIsSUFBSSxFQUFFLGNBQWM7b0JBQ3BCLFVBQVUsRUFBRSwyQkFBMkI7b0JBQ3ZDLGdCQUFnQixFQUFFLFFBQVE7b0JBQzFCLElBQUksRUFBRSx1QkFBdUI7b0JBQzdCLFFBQVEsRUFBRSxJQUFJO29CQUNkLFFBQVEsRUFBRSxLQUFLO29CQUNmLE9BQU8sRUFBRTt3QkFDUixJQUFJLEVBQUUsb0JBQW9CO3dCQUMxQixZQUFZLEVBQUUsUUFBUTt3QkFDdEIsR0FBRyxFQUFFLG9CQUFvQjtxQkFDekI7b0JBQ0QsK0NBQStDO29CQUMvQyxLQUFLLEVBQUUsQ0FBQztvQkFDUixVQUFVLEVBQUUsRUFBRTtpQkFDZDtnQkFDRDtvQkFDQyxHQUFHLEVBQUUsWUFBWTtvQkFDakIsS0FBSyxFQUFFLGNBQWM7b0JBQ3JCLElBQUksRUFBRSxVQUFVO29CQUNoQixPQUFPLEVBQUUsQ0FBQyxjQUFjLEVBQUUsaUJBQWlCLEVBQUUsaUJBQWlCLEVBQUUsaUJBQWlCLEVBQUUsaUJBQWlCLEVBQUUsaUJBQWlCLEVBQUUsaUJBQWlCLEVBQUUsaUJBQWlCLEVBQUUsaUJBQWlCLENBQUM7b0JBQ2pMLFFBQVEsRUFBRSxJQUFJO29CQUNkLE9BQU8sRUFBRTt3QkFDUixJQUFJLEVBQUUsb0JBQW9CO3dCQUMxQixZQUFZLEVBQUUsUUFBUTt3QkFDdEIsR0FBRyxFQUFFLFVBQVU7cUJBQ2Y7b0JBQ0QsS0FBSyxFQUFFLENBQUM7b0JBQ1IsVUFBVSxFQUFFLEVBQUU7aUJBQ2Q7Z0JBRUQ7b0JBQ0MsR0FBRyxFQUFFLFVBQVU7b0JBQ2YsS0FBSyxFQUFFLFdBQVc7b0JBQ2xCLElBQUksRUFBRSxjQUFjO29CQUNwQixVQUFVLEVBQUUsNEJBQTRCO29CQUN4QyxnQkFBZ0IsRUFBRSxRQUFRO29CQUMxQixJQUFJLEVBQUUsdUJBQXVCO29CQUM3QixRQUFRLEVBQUUsSUFBSTtvQkFDZCxRQUFRLEVBQUUsS0FBSztvQkFDZixPQUFPLEVBQUU7d0JBQ1IsSUFBSSxFQUFFLG9CQUFvQjt3QkFDMUIsWUFBWSxFQUFFLFFBQVE7d0JBQ3RCLEdBQUcsRUFBRSxTQUFTO3FCQUNkO29CQUNELCtDQUErQztvQkFDL0MsS0FBSyxFQUFFLENBQUM7b0JBQ1IsVUFBVSxFQUFFLEVBQUU7aUJBQ2Q7YUFDRDtTQUNEO1FBQ0Q7WUFDQyxHQUFHLEVBQUUsZ0JBQWdCO1lBQ3JCLEtBQUssRUFBRSxrQkFBa0I7WUFDekIsSUFBSSxFQUFFLE1BQU07WUFDWixRQUFRLEVBQUUsSUFBSTtZQUNkLFFBQVEsRUFBRSxLQUFLO1lBQ2YsK0NBQStDO1lBQy9DLEtBQUssRUFBRSxDQUFDO1lBQ1IsVUFBVSxFQUFFLEVBQUU7U0FDZDtRQUNEO1lBQ0MsR0FBRyxFQUFFLGNBQWM7WUFDbkIsS0FBSyxFQUFFLGVBQWU7WUFDdEIsSUFBSSxFQUFFLFVBQVU7WUFDaEIsUUFBUSxFQUFFLElBQUk7WUFDZCxRQUFRLEVBQUUsS0FBSztZQUNmLCtDQUErQztZQUMvQyxLQUFLLEVBQUUsQ0FBQztZQUNSLFVBQVUsRUFBRSxFQUFFO1NBQ2Q7UUFDRDtZQUNDLEdBQUcsRUFBRSxtQkFBbUI7WUFDeEIsS0FBSyxFQUFFLDZDQUE2QztZQUNwRCxJQUFJLEVBQUUsS0FBSztZQUNYLFFBQVEsRUFBRSxJQUFJO1lBQ2QsUUFBUSxFQUFFLEtBQUs7WUFDZiwrQ0FBK0M7WUFDL0MsS0FBSyxFQUFFLENBQUM7WUFDUixVQUFVLEVBQUUsRUFBRTtTQUNkO1FBQ0Q7WUFDQyxHQUFHLEVBQUUsa0JBQWtCO1lBQ3ZCLElBQUksRUFBRSxPQUFPO1lBQ2IsU0FBUyxFQUFFLE1BQU07WUFDakIsUUFBUSxFQUFFLElBQUk7WUFDZCxLQUFLLEVBQUUsNkNBQTZDO1lBQ3BELEtBQUssRUFBRSxDQUFDO1lBQ1IsVUFBVSxFQUFFLEtBQUs7WUFDakIsTUFBTSxFQUFFLENBQUM7b0JBQ1IsR0FBRyxFQUFFLGdCQUFnQjtvQkFDckIsSUFBSSxFQUFFLE9BQU87b0JBQ2IsSUFBSSxFQUFFLFVBQVU7b0JBQ2hCLFFBQVEsRUFBRSxLQUFLO29CQUNmLFFBQVEsRUFBRSxLQUFLO2lCQUNmO2dCQUNEO29CQUNDLEdBQUcsRUFBRSxzQkFBc0I7b0JBQzNCLElBQUksRUFBRSxhQUFhO29CQUNuQixJQUFJLEVBQUUsVUFBVTtvQkFDaEIsUUFBUSxFQUFFLEtBQUs7b0JBQ2YsUUFBUSxFQUFFLEtBQUs7aUJBQ2Y7Z0JBQ0Q7b0JBQ0MsR0FBRyxFQUFFLGtCQUFrQjtvQkFDdkIsSUFBSSxFQUFFLFNBQVM7b0JBQ2YsSUFBSSxFQUFFLFVBQVU7b0JBQ2hCLFFBQVEsRUFBRSxLQUFLO29CQUNmLFFBQVEsRUFBRSxLQUFLO2lCQUNmO2dCQUNEO29CQUNDLEdBQUcsRUFBRSxnQkFBZ0I7b0JBQ3JCLElBQUksRUFBRSxPQUFPO29CQUNiLElBQUksRUFBRSxVQUFVO29CQUNoQixRQUFRLEVBQUUsS0FBSztvQkFDZixRQUFRLEVBQUUsS0FBSztpQkFDZjthQUNBO1NBQ0Q7UUFFRDtZQUNDLEdBQUcsRUFBRSxlQUFlO1lBQ3BCLEtBQUssRUFBRSxRQUFRO1lBQ2YsSUFBSSxFQUFFLGNBQWM7WUFDcEIsVUFBVSxFQUFFLHlCQUF5QjtZQUNyQyxnQkFBZ0IsRUFBRSxRQUFRO1lBQzFCLFFBQVEsRUFBRSxJQUFJO1lBQ2QsUUFBUSxFQUFFLEtBQUs7WUFDZiwrQ0FBK0M7WUFDL0MsS0FBSyxFQUFFLENBQUM7WUFDUixVQUFVLEVBQUUsRUFBRTtTQUNkO1FBQ0Q7WUFDQyxHQUFHLEVBQUUsa0JBQWtCO1lBQ3ZCLEtBQUssRUFBRSxRQUFRO1lBQ2YsSUFBSSxFQUFFLGNBQWM7WUFDcEIsVUFBVSxFQUFFLHlCQUF5QjtZQUNyQyxnQkFBZ0IsRUFBRSxRQUFRO1lBQzFCLFFBQVEsRUFBRSxJQUFJO1lBQ2QsUUFBUSxFQUFFLEtBQUs7WUFDZiwrQ0FBK0M7WUFDL0MsS0FBSyxFQUFFLEVBQUU7WUFDVCxVQUFVLEVBQUUsRUFBRTtTQUNkLENBQUM7Q0FFSCxDQUFBO0FBRVksYUFBSyxHQUFHLENBQUM7UUFDckIsRUFBRSxFQUFFLGlCQUFpQjtRQUNyQixLQUFLLEVBQUUsaUJBQWlCO1FBQ3hCLEtBQUssRUFBRSxDQUFDO1FBQ1IsU0FBUyxFQUFFO1lBQ1YsUUFBUSxFQUFFLGNBQWM7WUFDeEIsU0FBUyxFQUFFLElBQUk7U0FDZjtRQUNELFFBQVEsRUFBRSxDQUFDO2dCQUNWLEVBQUUsRUFBRSxhQUFhO2dCQUNqQixJQUFJLEVBQUUsU0FBUztnQkFDZixNQUFNLEVBQUUsaUJBQVMsQ0FBQyxHQUFHO2FBQ3JCLENBQUM7S0FDRixFQUFFO1FBQ0YsRUFBRSxFQUFFLGNBQWM7UUFDbEIsS0FBSyxFQUFFLFNBQVM7UUFDaEIsS0FBSyxFQUFFLENBQUM7UUFDUixTQUFTLEVBQUU7WUFDVixRQUFRLEVBQUUsY0FBYztZQUN4QixRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLFNBQVMsRUFBRSxJQUFJO1NBQ2Y7UUFDRCxTQUFTLEVBQUU7WUFDVixnQkFBZ0IsRUFBRTtnQkFDakIsSUFBSSxFQUFFLFNBQVM7Z0JBQ2YsVUFBVSxFQUFFLElBQUk7Z0JBQ2hCLHFCQUFxQixFQUFFLElBQUk7Z0JBQzNCLE1BQU0sRUFBRSxpQkFBUyxDQUFDLE9BQU87YUFDekI7U0FDRDtRQUNELFFBQVEsRUFBRSxDQUFDO2dCQUNWLEVBQUUsRUFBRSxpQkFBaUI7Z0JBQ3JCLElBQUksRUFBRSxTQUFTO2dCQUNmLEtBQUssRUFBRSxnQkFBZ0I7Z0JBQ3ZCLE1BQU0sRUFBRSxpQkFBUyxDQUFDLE9BQU87YUFDekIsQ0FBQztLQUNGO0lBRUQ7UUFDQyxFQUFFLEVBQUUsY0FBYztRQUNsQixLQUFLLEVBQUUsVUFBVTtRQUNqQixLQUFLLEVBQUUsQ0FBQztRQUNSLFNBQVMsRUFBRTtZQUNWLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFNBQVMsRUFBRSxJQUFJO1NBQ2Y7UUFDRCxRQUFRLEVBQUUsQ0FBQztnQkFDVixFQUFFLEVBQUUsaUJBQWlCO2dCQUNyQixJQUFJLEVBQUUsU0FBUztnQkFDZixLQUFLLEVBQUUsZ0JBQWdCO2dCQUN2QixNQUFNLEVBQUUsQ0FBQzt3QkFDUixHQUFHLEVBQUUsU0FBUzt3QkFDZCxJQUFJLEVBQUUsT0FBTzt3QkFDYixVQUFVLEVBQUUsSUFBSTt3QkFDaEIsTUFBTSxFQUFFLGlCQUFTLENBQUMsdUJBQXVCO3FCQUN6QyxDQUFDO2FBQ0YsQ0FBQztLQUVGO0lBQ0Q7UUFDQyxFQUFFLEVBQUUsVUFBVTtRQUNkLEtBQUssRUFBRSxLQUFLO1FBQ1osS0FBSyxFQUFFLENBQUM7UUFDUixTQUFTLEVBQUU7WUFDVixRQUFRLEVBQUUsY0FBYztZQUN4QixRQUFRLEVBQUUsY0FBYztZQUN4QixTQUFTLEVBQUUsSUFBSTtTQUNmO1FBQ0QsUUFBUSxFQUFFLENBQUM7Z0JBQ1YsRUFBRSxFQUFFLGFBQWE7Z0JBQ2pCLElBQUksRUFBRSxLQUFLO2dCQUNYLEtBQUssRUFBRSxnQkFBZ0I7Z0JBQ3ZCLE1BQU0sRUFBRSxpQkFBUyxDQUFDLFlBQVk7YUFDOUIsQ0FBQztLQUVGO0lBR0Q7UUFDQyxFQUFFLEVBQUUsY0FBYztRQUNsQixLQUFLLEVBQUUsU0FBUztRQUNoQixLQUFLLEVBQUUsQ0FBQztRQUNSLFNBQVMsRUFBRTtZQUNWLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFNBQVMsRUFBRSxJQUFJO1NBQ2Y7UUFDRCxTQUFTLEVBQUU7WUFDVixnQkFBZ0IsRUFBRTtnQkFDakIsSUFBSSxFQUFFLFNBQVM7Z0JBQ2YsVUFBVSxFQUFFLElBQUk7Z0JBQ2hCLHFCQUFxQixFQUFFLElBQUk7Z0JBQzNCLE1BQU0sRUFBRSxpQkFBUyxDQUFDLE9BQU87YUFDekI7U0FDRDtRQUNELFFBQVEsRUFBRSxDQUFDO2dCQUNWLEVBQUUsRUFBRSxpQkFBaUI7Z0JBQ3JCLElBQUksRUFBRSxTQUFTO2dCQUNmLEtBQUssRUFBRSxnQkFBZ0I7Z0JBQ3ZCLE1BQU0sRUFBRSxpQkFBUyxDQUFDLE9BQU87YUFDekIsQ0FBQztLQUVGO0lBRUQ7UUFDQyxFQUFFLEVBQUUsWUFBWTtRQUNoQixLQUFLLEVBQUUsT0FBTztRQUNkLEtBQUssRUFBRSxDQUFDO1FBQ1IsU0FBUyxFQUFFO1lBQ1YsUUFBUSxFQUFFLGFBQWE7WUFDdkIsUUFBUSxFQUFFLGNBQWM7WUFDeEIsU0FBUyxFQUFFLElBQUk7U0FDZjtRQUNELFFBQVEsRUFBRSxDQUFDO2dCQUNWLEVBQUUsRUFBRSxlQUFlO2dCQUNuQixJQUFJLEVBQUUsU0FBUztnQkFDZixLQUFLLEVBQUUsZ0JBQWdCO2dCQUN2QixNQUFNLEVBQUUsaUJBQVMsQ0FBQyxLQUFLO2FBQ3ZCLENBQUM7S0FFRjtJQUtEO1FBQ0MsRUFBRSxFQUFFLGFBQWE7UUFDakIsS0FBSyxFQUFFLFFBQVE7UUFDZixLQUFLLEVBQUUsQ0FBQztRQUNSLFNBQVMsRUFBRTtZQUNWLFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsUUFBUSxFQUFFLFlBQVk7WUFDdEIsU0FBUyxFQUFFLElBQUk7U0FDZjtRQUNELFNBQVMsRUFBRTtZQUNWLGlCQUFpQjtZQUNqQixnQkFBZ0IsRUFBRTtnQkFDakIsSUFBSSxFQUFFLE9BQU87Z0JBQ2IsWUFBWSxFQUFFLElBQUk7Z0JBQ2xCLFVBQVUsRUFBRSxJQUFJO2dCQUNoQixNQUFNLEVBQUUsaUJBQVMsQ0FBQyxNQUFNO2FBQ3hCO1NBQ0Q7UUFDRCxRQUFRLEVBQUUsQ0FBQztnQkFDVixFQUFFLEVBQUUsc0JBQXNCO2dCQUMxQixLQUFLLEVBQUUsZ0JBQWdCO2dCQUN2QixZQUFZLEVBQUUsSUFBSTtnQkFDbEIsSUFBSSxFQUFFLE9BQU87Z0JBQ2IsTUFBTSxFQUFFLEVBT1A7YUFDRCxDQUFDO0tBQ0YsRUFBRTtRQUNGLEVBQUUsRUFBRSxnQkFBZ0I7UUFDcEIsS0FBSyxFQUFFLGdCQUFnQjtRQUN2QixLQUFLLEVBQUUsQ0FBQztRQUNSLFNBQVMsRUFBRTtZQUNWLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFFBQVEsRUFBRSxxQkFBcUI7WUFDL0IsU0FBUyxFQUFFLElBQUk7U0FDZjtRQUNELFNBQVMsRUFBRTtZQUNWLGlCQUFpQjtZQUNqQixnQkFBZ0IsRUFBRTtnQkFDakIsSUFBSSxFQUFFLFNBQVM7Z0JBQ2YsS0FBSyxFQUFFLGdCQUFnQjtnQkFDdkIsY0FBYyxFQUFFLElBQUk7Z0JBQ3BCLFVBQVUsRUFBRSxJQUFJO2dCQUNoQixNQUFNLEVBQUUsaUJBQVMsQ0FBQyxTQUFTO2FBQzNCO1NBQ0Q7UUFDRCxRQUFRLEVBQUUsQ0FBQztnQkFDVixFQUFFLEVBQUUsd0JBQXdCO2dCQUM1QixLQUFLLEVBQUUsZ0JBQWdCO2dCQUN2QixjQUFjLEVBQUUsSUFBSTtnQkFDcEIsSUFBSSxFQUFFLFNBQVM7Z0JBQ2YsTUFBTSxFQUFFLEVBT1A7YUFDRCxFQUFFO0tBQ0gsQ0FBQyxDQUFDO0FBRUgsTUFBTSxVQUFVLEdBQUcsQ0FBQztRQUNuQixFQUFFLEVBQUUsaUJBQWlCO1FBQ3JCLEtBQUssRUFBRSxpQkFBaUI7UUFDeEIsS0FBSyxFQUFFLENBQUM7UUFDUixTQUFTLEVBQUU7WUFDVixRQUFRLEVBQUUsY0FBYztZQUN4QixTQUFTLEVBQUUsSUFBSTtTQUNmO1FBQ0QsUUFBUSxFQUFFLENBQUM7Z0JBQ1YsRUFBRSxFQUFFLGFBQWE7Z0JBQ2pCLElBQUksRUFBRSxTQUFTO2dCQUNmLE1BQU0sRUFBRSxpQkFBUyxDQUFDLEdBQUc7YUFDckIsQ0FBQztLQUNGLEVBQUU7UUFDRixFQUFFLEVBQUUsY0FBYztRQUNsQixLQUFLLEVBQUUsU0FBUztRQUNoQixLQUFLLEVBQUUsQ0FBQztRQUNSLFNBQVMsRUFBRTtZQUNWLFFBQVEsRUFBRSxxQkFBcUI7WUFDL0IsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixTQUFTLEVBQUUsSUFBSTtTQUNmO1FBQ0QsU0FBUyxFQUFFO1lBQ1YsZ0JBQWdCLEVBQUU7Z0JBQ2pCLElBQUksRUFBRSxTQUFTO2dCQUNmLFVBQVUsRUFBRSxJQUFJO2dCQUNoQixxQkFBcUIsRUFBRSxJQUFJO2dCQUMzQixNQUFNLEVBQUUsaUJBQVMsQ0FBQyxPQUFPO2FBQ3pCO1NBQ0Q7UUFDRCxRQUFRLEVBQUUsQ0FBQztnQkFDVixFQUFFLEVBQUUsaUJBQWlCO2dCQUNyQixJQUFJLEVBQUUsU0FBUztnQkFDZixLQUFLLEVBQUUsZ0JBQWdCO2dCQUN2QixNQUFNLEVBQUUsaUJBQVMsQ0FBQyxPQUFPO2FBQ3pCLENBQUM7S0FDRixDQUFDLENBQUE7QUFFRixNQUFNLFdBQVcsR0FBRyxDQUFDO1FBQ3BCLEVBQUUsRUFBRSxxQkFBcUI7UUFDekIsU0FBUyxFQUFFO1lBQ1YsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixRQUFRLEVBQUUscUJBQXFCO1lBQy9CLGFBQWEsRUFBRSxJQUFJO1lBQ25CLFNBQVMsRUFBRSxJQUFJO1NBQ2Y7S0FDRDtJQUNEO1FBQ0MsRUFBRSxFQUFFLHFCQUFxQjtRQUN6QixTQUFTLEVBQUU7WUFDVixRQUFRLEVBQUUscUJBQXFCO1lBQy9CLFNBQVMsRUFBRSxJQUFJO1lBQ2YsYUFBYSxFQUFFLElBQUk7U0FDbkI7S0FDRCxDQUFDLENBQUE7QUFFVyxjQUFNLEdBQUc7SUFDckIsTUFBTSxFQUFFLENBQUM7WUFDUixFQUFFLEVBQUUsV0FBVztZQUNmLEtBQUssRUFBRSxZQUFZO1lBQ25CLEtBQUssRUFBRSxhQUFLO1lBQ1osVUFBVSxFQUFFLEtBQUs7WUFDakIsU0FBUyxFQUFFLEVBRVY7U0FDRDtRQUNEO1lBQ0MsRUFBRSxFQUFFLG9CQUFvQjtZQUN4QixLQUFLLEVBQUUsV0FBVztZQUNsQixLQUFLLEVBQUUsV0FBVztZQUNsQixVQUFVLEVBQUUsS0FBSztZQUNqQixTQUFTLEVBQUU7Z0JBQ1YsTUFBTSxFQUFFLElBQUk7Z0JBQ1osYUFBYSxFQUFFLElBQUk7Z0JBQ25CLGFBQWEsRUFBRSxJQUFJO2FBQ25CO1NBQ0QsQ0FBQztDQUNGLENBQUEiLCJmaWxlIjoiY29uc3RhbnRzX21vdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOltudWxsXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
