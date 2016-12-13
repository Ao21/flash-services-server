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
            key: 'firstName',
            label: 'First Name',
            type: 'text',
            required: true,
            helpId: 214205625,
            placeholder: 'John',
            order: 0,
        }, {
            key: 'lastName',
            label: 'Last Name',
            placeholder: 'Snow',
            type: 'text',
            helpId: 213679469,
            required: true,
            order: 1
        }, {
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
            serviceUrl: 'motor/occupation/',
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
                    value: 'Yes',
                    text: 'Yes'
                }, {
                    value: 'No',
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
                name: 'showBasedOnKey',
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
        }]
};
exports.PAGES = [{
        id: 'pre',
        title: 'Pre',
        order: 0,
        uiOptions: {
            nextPage: 'details'
        },
        sections: [{
                id: 'pre-default',
                type: 'default',
                fields: exports.QUESTIONS.pre
            }]
    }, {
        id: 'details',
        title: 'Details',
        order: 1,
        uiOptions: {
            nextPage: 'licence',
            prevPage: 'pre'
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
        id: 'licence',
        title: 'Licence',
        order: 1,
        uiOptions: {
            nextPage: 'cover',
            prevPage: 'details'
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
        id: 'cover',
        title: 'Cover',
        order: 1,
        uiOptions: {
            nextPage: 'claims',
            prevPage: 'licence'
        },
        sections: [{
                id: 'cover-default',
                type: 'default',
                title: 'Primary Driver',
                fields: exports.QUESTIONS.cover
            }]
    },
    {
        id: 'claims',
        title: 'Claims',
        order: 1,
        uiOptions: {
            nextPage: 'penalties',
            prevPage: 'licence'
        },
        templates: {
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
        id: 'penalties',
        title: 'Penalty Points',
        order: 1,
        uiOptions: {
            prevPage: 'claims'
        },
        templates: {
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
                title: 'Main Driver',
                userHasPenalty: null,
                type: 'penalty',
                fields: []
            },]
    }
];
exports.CONFIG = {
    stages: [{
            id: 'quotation',
            title: 'quotation',
            pages: exports.PAGES
        }]
};

//# sourceMappingURL=data:application/json;base64,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LEVBQUUsaUJBQVMsQ0FBQyxNQUFNO2FBQ3hCO1NBQ0Q7UUFDRCxRQUFRLEVBQUUsQ0FBQztnQkFDVixFQUFFLEVBQUUsc0JBQXNCO2dCQUMxQixLQUFLLEVBQUUsZ0JBQWdCO2dCQUN2QixZQUFZLEVBQUUsSUFBSTtnQkFDbEIsSUFBSSxFQUFFLE9BQU87Z0JBQ2IsTUFBTSxFQUFFLEVBT1A7YUFDRCxDQUFDO0tBQ0YsRUFBRTtRQUNGLEVBQUUsRUFBRSxXQUFXO1FBQ2YsS0FBSyxFQUFFLGdCQUFnQjtRQUN2QixLQUFLLEVBQUUsQ0FBQztRQUNSLFNBQVMsRUFBRTtZQUNWLFFBQVEsRUFBRSxRQUFRO1NBQ2xCO1FBQ0QsU0FBUyxFQUFFO1lBQ1YsZ0JBQWdCLEVBQUU7Z0JBQ2pCLElBQUksRUFBRSxTQUFTO2dCQUNmLEtBQUssRUFBRSxnQkFBZ0I7Z0JBQ3ZCLGNBQWMsRUFBRSxJQUFJO2dCQUNwQixVQUFVLEVBQUUsSUFBSTtnQkFDaEIsTUFBTSxFQUFFLGlCQUFTLENBQUMsU0FBUzthQUMzQjtTQUNEO1FBQ0QsUUFBUSxFQUFFLENBQUM7Z0JBQ1YsRUFBRSxFQUFFLHdCQUF3QjtnQkFDNUIsS0FBSyxFQUFFLGFBQWE7Z0JBQ3BCLGNBQWMsRUFBRSxJQUFJO2dCQUNwQixJQUFJLEVBQUUsU0FBUztnQkFDZixNQUFNLEVBQUUsRUFPUDthQUNELEVBQUU7S0FDSDtDQUNBLENBQUM7QUFFVyxjQUFNLEdBQUc7SUFDckIsTUFBTSxFQUFFLENBQUM7WUFDUixFQUFFLEVBQUUsV0FBVztZQUNmLEtBQUssRUFBRSxXQUFXO1lBQ2xCLEtBQUssRUFBRSxhQUFLO1NBQ1osQ0FBQztDQUNGLENBQUEiLCJmaWxlIjoiY29uc3RhbnRzX21vdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOltudWxsXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
