"use strict";
exports.QUESTIONS = {
    pre: [{
            key: 'email',
            label: 'What is your email?',
            type: 'email',
            required: true,
            order: 0,
            uiOptions: {
                summaryTitle: 'Email'
            }
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
            uiOptions: {
                summaryTitle: 'Amount of Drivers'
            }
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
                    id: 'Mr',
                    description: 'Mr'
                },
                {
                    id: 'Mrs',
                    description: 'Mrs'
                },
                {
                    id: 'Miss',
                    description: 'Miss'
                },
                {
                    id: 'Ms',
                    description: 'Ms'
                }],
            required: true,
            uiOptions: {
                summaryTitle: 'Email'
            }
        }, {
            key: 'firstName',
            label: 'First Name',
            type: 'text',
            required: true,
            helpId: 214205625,
            placeholder: 'John',
            // value: 'Ronan',
            order: 0,
            uiOptions: {
                summaryTitle: 'First Name'
            }
        }, {
            key: 'lastName',
            label: 'Last Name',
            placeholder: 'Snow',
            type: 'text',
            helpId: 213679469,
            required: true,
            order: 1,
            uiOptions: {
                summaryTitle: 'Last Name'
            }
        },
        {
            key: 'dateOfBirth',
            label: 'Date Of Birth',
            type: 'date',
            required: true,
            helpId: 213685289,
            disabled: false,
            order: 2,
            validators: ['validDateValidate', 'validOverEighteenValidate'],
            uiOptions: {
                summaryTitle: 'Date of Birth'
            }
        }, {
            key: 'phoneNumber',
            label: 'Phone Number',
            type: 'tel',
            required: true,
            disabled: false,
            helpId: 214224585,
            order: 2,
            validators: ['validPhoneNumberValidate'],
            uiOptions: {
                summaryTitle: 'Phone Number'
            }
        }, {
            key: 'typeOfEmployment',
            label: 'Type of Employment',
            type: 'dropdown',
            options: [
                { id: 'Employed', description: 'Employed' },
                { id: 'Household Duties', description: 'Household Duties' },
                { id: 'Retired', description: 'Retired' },
                { id: 'Self Employed', description: 'Self Employed' },
                { id: 'Unemployed', description: 'Unemployed' }
            ],
            required: true,
            order: 2,
            validators: [],
            uiOptions: {
                summaryTitle: 'Type of Employment'
            }
        }, {
            key: 'occupation',
            label: 'Occupation',
            type: 'autocomplete',
            placeholder: 'Select an Occupation',
            serviceUrl: 'motor/occupation/',
            autoCompleteType: 'search',
            required: true,
            disabled: false,
            helpId: 1001,
            order: 2,
            validators: [],
            uiOptions: {
                summaryTitle: 'Occupation'
            }
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
            validators: [],
            uiOptions: {
                summaryTitle: 'Type of business'
            }
        }, {
            key: 'livedOutsideIreland',
            label: 'Have you lived outside the Republic of Ireland or the UK in the last 12 months?',
            type: 'radio',
            options: [{
                    id: 'Yes',
                    description: 'Yes'
                }, {
                    id: 'No',
                    description: 'No'
                }],
            required: true,
            order: 2,
            validators: [],
        }],
    cover: [{
            key: 'insuredInYourOwnName',
            label: 'Have you been insured previously in your own name in the last two years?',
            type: 'radio',
            order: 0,
            helpId: 1001,
            options: [{
                    id: true,
                    description: 'Yes'
                }, {
                    id: false,
                    description: 'No'
                }],
            required: true,
            uiOptions: {
                summaryTitle: 'Insured in your own Name'
            }
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
                    id: true,
                    description: 'Yes'
                }, {
                    id: false,
                    description: 'No'
                }],
            required: true,
            uiOptions: {
                summaryTitle: 'Named Driver'
            }
        },
        {
            key: 'insuredNamedDriverOnPolicy',
            label: 'On whose policy',
            helpId: 1001,
            type: 'dropdown',
            trigger: {
                key: 'insuredNamedDriver',
                name: 'showBasedOnKey',
            },
            options: [{ id: 'Brother in Law', description: 'Brother in Law' },
                { id: 'Business Partner', description: 'Business Partner' },
                { id: 'Common Law Spouse', description: 'Common Law Spouse' },
                { id: 'Daughter', description: 'Daughter' },
                { id: 'Daughter in Law', description: 'Daughter in Law' },
                { id: 'Employee of Proposer', description: 'Employee of Proposer' },
                { id: 'Employer of Proposer', description: 'Employer of Proposer' },
                { id: 'Father in Law', description: 'Father in Law' },
                { id: 'Friend', description: 'Friend' },
                { id: 'Mother In Law', description: 'Mother In Law' },
                { id: 'Parent', description: 'Parent' },
                { id: 'Partner', description: 'Partner' },
                { id: 'Proposer', description: 'Proposer' },
                { id: 'Relative', description: 'Relative' },
                { id: 'Sister', description: 'Sister' },
                { id: 'Sister in Law', description: 'Sister in Law' },
                { id: 'Son', description: 'Son' },
                { id: 'Son in Law', description: 'Son in Law' },
                { id: 'Spouse', description: 'Spouse' },
                { id: 'Tenant', description: 'Tenant' },
                { id: 'Unrelated', description: 'Unrelated' }],
            required: true,
            order: 1,
            validators: [],
            uiOptions: {
                summaryTitle: `On who's policy`
            }
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
            options: [{ id: 'ARB Underwriting Ltd', description: 'ARB Underwriting Ltd' },
                { id: 'AXA Broker', description: 'AXA Broker' },
                { id: 'AXA Direct', description: 'AXA Direct' },
                { id: 'AXA Insurance', description: 'AXA Insurance' },
                { id: 'Allianz', description: 'Allianz' },
                { id: 'Asgard', description: 'Asgard' },
                { id: 'Aviva', description: 'Aviva' },
                { id: 'Chartis Insurance', description: 'Chartis Insurance' },
                { id: 'Chubb Insurance', description: 'Chubb Insurance' },
                { id: 'Cigna Insurance of Europe', description: 'Cigna Insurance of Europe' },
                { id: 'Cornhill', description: 'Cornhill' },
                { id: 'Ecclesiastical Insurance Office Plc', description: 'Ecclesiastical Insurance Office Plc' },
                { id: 'Europa General', description: 'Europa General' },
                { id: 'FBD Insurance', description: 'FBD Insurance' },
                { id: 'FC Rebroked AXA Broker', description: 'FC Rebroked AXA Broker' },
                { id: 'First Call Direct', description: 'First Call Direct' },
                { id: 'Generali Insurance', description: 'Generali Insurance' },
                { id: 'Kennco Underwriting Ltd', description: 'Kennco Underwriting Ltd' },
                { id: 'Liberty Underwriting', description: 'Liberty Underwriting' },
                { id: 'One Direct', description: 'One Direct' },
                { id: 'Prestige Underwriting Services', description: 'Prestige Underwriting Services' },
                { id: 'Provident Insurance', description: 'Provident Insurance' },
                { id: 'Quinn Direct', description: 'Quinn Direct' },
                { id: 'RSA Insurance Ireland', description: 'RSA Insurance Ireland' },
                { id: 'Sertus Underwriting', description: 'Sertus Underwriting' },
                { id: 'Setanta Insurance', description: 'Setanta Insurance' },
                { id: 'Torch', description: 'Torch' },
                { id: 'Travelers Insurance', description: 'Travelers Insurance' },
                { id: 'Unlisted Insurer - Ireland', description: 'Unlisted Insurer - Ireland' },
                { id: 'Unlisted Insurer - Not Ireland', description: 'Unlisted Insurer - Not Ireland' },
                { id: 'Wright Way Underwriting', description: 'Wright Way Underwriting' },
                { id: 'XS Direct', description: 'XS Direct' },
                { id: 'Zurich', description: 'Zurich' }],
            required: true,
            order: 2,
            validators: [],
            uiOptions: {
                summaryTitle: 'Current Insurance Company'
            }
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
            uiOptions: {
                summaryTitle: 'Amount of Years No Claims Bonus'
            }
        },
        {
            key: 'whereNoClaimsBonus',
            label: 'Where did you earn your no claims bonus',
            type: 'autocomplete',
            helpId: 1001,
            autoCompleteType: 'options',
            trigger: {
                key1: 'insuredInYourOwnName',
                key2: 'insuredNamedDriver',
                name: 'showDualKey',
            },
            options: [{
                    id: 'Dublin',
                    description: 'Dublin'
                }, {
                    id: 'Cork',
                    description: 'cork'
                }],
            required: true,
            disabled: false,
            order: 4,
            validators: [],
            uiOptions: {
                summaryTitle: 'Location no claims bonus was earned'
            }
        },
        {
            key: 'policyExpiryDate',
            label: 'When does your policy expire?',
            type: 'date',
            helpId: 1001,
            trigger: {
                key1: 'insuredInYourOwnName',
                key2: 'insuredNamedDriver',
                name: 'showDualKey',
            },
            required: true,
            disabled: false,
            order: 5,
            validators: ['validDateValidate'],
            uiOptions: {
                summaryTitle: 'Policy Expiration Date'
            }
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
                    id: true,
                    description: 'Yes'
                }, {
                    id: false,
                    description: 'No'
                }],
            required: true,
            uiOptions: {
                summaryTitle: 'Policy Start Date'
            }
        },
        {
            key: 'policyStartDate',
            label: 'What date do you want to start your policy from?',
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
                    id: 'comprehensive',
                    description: 'Comprehensive'
                }, {
                    id: 'thirdParty',
                    description: 'Third Party, Fire and Theft'
                }],
            required: true,
            uiOptions: {
                summaryTitle: 'Level of Cover'
            }
        },
        {
            key: 'levelOfNoClaimsBonus',
            label: 'What level of no claims bonus protection do you require?',
            type: 'radio',
            helpId: 1001,
            order: 9,
            options: [{
                    id: 'full',
                    description: 'Full'
                }, {
                    id: 'stepBack',
                    description: 'Step Back'
                },
                {
                    id: 'none',
                    description: 'None'
                }],
            required: true,
            uiOptions: {
                summaryTitle: 'Level of no claims bonus'
            }
        }],
    licence: [{
            key: 'typeOfLicence',
            label: 'What licence do you hold?',
            type: 'dropdown',
            options: [{ id: 'Full Irish Licence', description: 'Full Irish Licence' },
                { id: 'Irish Learners Permit', description: 'Irish Learners Permit' },
                { id: 'Full EU Licence', description: 'Full EU Licence' },
                { id: 'Non-EU Licence', description: 'Non-EU Licence' }],
            required: true,
            disabled: false,
            order: 0,
            validators: [],
            uiOptions: {
                summaryTitle: 'Type of Licence'
            }
        }, {
            key: 'howLongLicenceHeld',
            label: 'How long have you held your licence?',
            type: 'slider',
            required: true,
            order: 1,
            value: 1,
            min: 0,
            max: 9,
            uiOptions: {
                summaryTitle: 'Amount of years you held your licence'
            }
        }, {
            key: 'whereEarnLicence',
            label: 'Where did you earn your licence',
            type: 'autocomplete',
            serviceUrl: 'motor/occupation/',
            autoCompleteType: 'options',
            options: [{
                    id: 'Dublin',
                    description: 'Dublin'
                }, {
                    id: 'Cork',
                    description: 'cork'
                }],
            required: true,
            disabled: false,
            order: 2,
            validators: [],
            uiOptions: {
                summaryTitle: 'Where did you earn your licence'
            }
        }],
    defaultClaimQuestion: [{
            key: 'customerClaims',
            label: 'Have you had any claims in the past 3 years?',
            type: 'radio',
            options: [{
                    id: 'Yes',
                    description: 'Yes'
                }, {
                    id: 'No',
                    description: 'No'
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
            validators: [],
            uiOptions: {
                summaryTitle: 'Address line 1'
            }
        },
        {
            key: 'addressLine2',
            label: 'Address Line 2',
            type: 'text',
            required: true,
            order: 0,
            validators: [],
            uiOptions: {
                summaryTitle: 'Address line 2'
            }
        },
        {
            key: 'area',
            label: 'Town',
            type: 'autocomplete',
            serviceUrl: 'motor/reference/town/',
            autoCompleteType: 'search',
            required: true,
            disabled: false,
            order: 2,
            validators: [],
            uiOptions: {
                summaryTitle: 'Town'
            }
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
            order: 2,
            validators: [],
            uiOptions: {
                summaryTitle: 'County'
            }
        }],
    claims: [{
            key: 'dateOfClaim',
            label: 'When was the claim?',
            type: 'date',
            required: true,
            disabled: false,
            order: 0,
            validators: ['validDateValidate', 'validLastThreeYearsValidate'],
            uiOptions: {
                summaryTitle: 'Date of Claim'
            }
        }, {
            key: 'reasonForClaim',
            label: 'What was the reason for the claim?',
            type: 'dropdown',
            options: [
                { id: 'Accident', description: 'Accident', },
                { id: 'Accidental Damage', description: 'Accidental Damage' },
                { id: 'Fire', description: 'Fire' },
                { id: 'Malicious Damage As A Result Of Theft', description: 'Malicious Damage As A Result Of Theft' },
                { id: 'Personal Accident', description: 'Personal Accident' },
                { id: 'Personal Effects', description: 'Personal Effects' },
                { id: 'Theft', description: 'Theft' },
                { id: 'Third Party', description: 'Third Party' },
                { id: 'Vandalism', description: 'Vandalism' },
                { id: 'Windscreen', description: 'Windscreen' }
            ],
            required: true,
            order: 0,
            validators: [],
            uiOptions: {
                summaryTitle: 'Reason for Claim'
            }
        }, {
            key: 'costOfClaim',
            label: 'Cost of claim',
            type: 'currency',
            required: true,
            placeholder: 'How Much',
            order: 0,
            uiOptions: {
                summaryTitle: 'Cost of Claim'
            }
        }, {
            key: 'customerAtFault',
            label: 'Were you at fault?',
            type: 'radio',
            helpId: 1001,
            options: [{
                    id: 'Yes',
                    description: 'Yes'
                }, {
                    id: 'No',
                    description: 'No'
                }],
            required: true,
            order: 2,
            validators: [],
            uiOptions: {
                summaryTitle: 'Claim Fault'
            }
        }, {
            key: 'noClaimsBonusProtected',
            label: 'Was your no claims bonus protected?',
            type: 'radio',
            options: [{
                    id: 'Yes',
                    description: 'Yes'
                }, {
                    id: 'No',
                    description: 'No'
                }],
            required: true,
            order: 2,
            validators: [],
            uiOptions: {
                summaryTitle: 'No Claim Bonus Protected'
            }
        }],
    claimWithValues: [{
            key: 'dateOfClaim',
            label: 'When was the claim?',
            type: 'date',
            required: true,
            disabled: false,
            value: '01/01/1997',
            order: 0,
            validators: ['validDateValidate', 'validLastThreeYearsValidate'],
            uiOptions: {
                summaryTitle: 'Date of Claim'
            }
        }, {
            key: 'reasonForClaim',
            label: 'What was the reason for the claim?',
            type: 'dropdown',
            options: [
                { id: 'Accident', description: 'Accident', },
                { id: 'Accidental Damage', description: 'Accidental Damage' },
                { id: 'Fire', description: 'Fire' },
                { id: 'Malicious Damage As A Result Of Theft', description: 'Malicious Damage As A Result Of Theft' },
                { id: 'Personal Accident', description: 'Personal Accident' },
                { id: 'Personal Effects', description: 'Personal Effects' },
                { id: 'Theft', description: 'Theft' },
                { id: 'Third Party', description: 'Third Party' },
                { id: 'Vandalism', description: 'Vandalism' },
                { id: 'Windscreen', description: 'Windscreen' }
            ],
            required: true,
            value: 'Accident',
            order: 0,
            validators: [],
            uiOptions: {
                summaryTitle: 'Reason for Claim'
            }
        }, {
            key: 'costOfClaim',
            label: 'Cost of claim',
            type: 'currency',
            value: '5000',
            required: true,
            placeholder: 'How Much',
            order: 0,
            uiOptions: {
                summaryTitle: `Cost of claim`
            }
        }, {
            key: 'customerAtFault',
            label: 'Were you at fault?',
            type: 'radio',
            options: [{
                    id: 'Yes',
                    description: 'Yes'
                }, {
                    id: 'No',
                    description: 'No'
                }],
            required: true,
            value: 'Yes',
            order: 2,
            validators: [],
            uiOptions: {
                summaryTitle: 'Were you at fault?'
            }
        }, {
            key: 'noClaimsBonusProtected',
            label: 'Was your no claims bonus protected?',
            type: 'radio',
            helpId: 1001,
            options: [{
                    id: 'Yes',
                    description: 'Yes'
                }, {
                    id: 'No',
                    description: 'No'
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
            options: [
                { id: 'Accident', description: 'Accident', },
                { id: 'Accidental Damage', description: 'Accidental Damage' },
                { id: 'Fire', description: 'Fire' },
                { id: 'Malicious Damage As A Result Of Theft', description: 'Malicious Damage As A Result Of Theft' },
                { id: 'Personal Accident', description: 'Personal Accident' },
                { id: 'Personal Effects', description: 'Personal Effects' },
                { id: 'Theft', description: 'Theft' },
                { id: 'Third Party', description: 'Third Party' },
                { id: 'Vandalism', description: 'Vandalism' },
                { id: 'Windscreen', description: 'Windscreen' }
            ],
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
            options: [
                { id: 'Accident', description: 'Accident', },
                { id: 'Accidental Damage', description: 'Accidental Damage' },
                { id: 'Fire', description: 'Fire' },
                { id: 'Malicious Damage As A Result Of Theft', description: 'Malicious Damage As A Result Of Theft' },
                { id: 'Personal Accident', description: 'Personal Accident' },
                { id: 'Personal Effects', description: 'Personal Effects' },
                { id: 'Theft', description: 'Theft' },
                { id: 'Third Party', description: 'Third Party' },
                { id: 'Vandalism', description: 'Vandalism' },
                { id: 'Windscreen', description: 'Windscreen' }
            ],
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
                    order: 1,
                    validators: []
                },
                {
                    key: 'engineSize',
                    label: 'Engine Size?',
                    type: 'dropdown',
                    options: [
                        { id: '0cc - 1499cc', description: '0cc - 1499cc' },
                        { id: '1500cc - 1999cc', description: '1500cc - 1999cc' },
                        { id: '2000cc - 2499cc', description: '2000cc - 2499cc' },
                        { id: '2500cc - 2999cc', description: '2500cc - 2999cc' },
                        { id: '3000cc - 3449cc', description: '3000cc - 3449cc' },
                        { id: '3500cc - 3999cc', description: '3500cc - 3999cc' },
                        { id: '4000cc - 4449cc', description: '4000cc - 4449cc' },
                        { id: '4500cc - 4999cc', description: '4500cc - 4999cc' },
                        { id: '4500cc - 4999c', description: '4500cc - 4999cc' }
                    ],
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
            order: 5,
            validators: []
        },
        {
            key: 'currentValue',
            label: 'Current Value',
            type: 'currency',
            required: true,
            disabled: false,
            order: 6,
            validators: []
        },
        {
            key: 'kilometersPerYear',
            label: 'How many kilometres do you drive in a year?',
            type: 'tel',
            required: true,
            disabled: false,
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
            label: 'Where is your car mainly used?',
            type: 'autocomplete',
            serviceUrl: 'motor/reference/county/',
            autoCompleteType: 'search',
            required: true,
            disabled: false,
            order: 9,
            validators: []
        },
        {
            key: 'carKeptOvernight',
            label: 'Where is you car kept overnight?',
            type: 'autocomplete',
            serviceUrl: 'motor/reference/county/',
            autoCompleteType: 'search',
            required: true,
            disabled: false,
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
            nextPage: 'are-you-a-member',
            isTitleHidden: true,
            isVisible: true,
        },
    },
    {
        id: 'are-you-a-member',
        uiOptions: {
            prevPage: 'choose-your-product',
            nextPage: 'choose-your-payment',
            isVisible: true,
            isTitleHidden: true,
        },
    },
    {
        id: 'choose-your-payment',
        uiOptions: {
            prevPage: 'are-you-a-member',
            nextPage: 'summary',
            isVisible: true,
            isTitleHidden: true,
        },
    },
];
const SUMMARY_PAGES = [{
        id: 'summary',
        uiOptions: {
            prevPage: 'choose-your-payment',
            isVisible: true,
            isTitleHidden: true,
        },
    }];
const TERMS_AND_CONDITIONS_PAGES = [{
        id: 'termsConditions',
        uiOptions: {
            prevPage: 'choose-your-payment',
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
        },
    ]
};

//# sourceMappingURL=data:application/json;base64,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Q3pCLFNBQVMsRUFBRTtZQUNWLFFBQVEsRUFBRSxrQkFBa0I7WUFDNUIsUUFBUSxFQUFFLFNBQVM7WUFDbkIsU0FBUyxFQUFFLElBQUk7WUFDZixhQUFhLEVBQUUsSUFBSTtTQUNuQjtLQUNEO0NBQ0EsQ0FBQTtBQUVELE1BQU0sYUFBYSxHQUFHLENBQUM7UUFDdEIsRUFBRSxFQUFFLFNBQVM7UUFDYixTQUFTLEVBQUU7WUFDVixRQUFRLEVBQUUscUJBQXFCO1lBQy9CLFNBQVMsRUFBRSxJQUFJO1lBQ2YsYUFBYSxFQUFFLElBQUk7U0FDbkI7S0FDRCxDQUFDLENBQUE7QUFHRixNQUFNLDBCQUEwQixHQUFHLENBQUM7UUFDbkMsRUFBRSxFQUFFLGlCQUFpQjtRQUNyQixTQUFTLEVBQUU7WUFDVixRQUFRLEVBQUUscUJBQXFCO1lBQy9CLFNBQVMsRUFBRSxJQUFJO1lBQ2YsYUFBYSxFQUFFLElBQUk7U0FDbkI7S0FDRCxDQUFDLENBQUE7QUFFVyxjQUFNLEdBQUc7SUFDckIsTUFBTSxFQUFFLENBQUM7WUFDUixFQUFFLEVBQUUsV0FBVztZQUNmLEtBQUssRUFBRSxZQUFZO1lBQ25CLEtBQUssRUFBRSxhQUFLO1lBQ1osVUFBVSxFQUFFLEtBQUs7WUFDakIsU0FBUyxFQUFFLEVBRVY7U0FDRDtRQUNBO1lBQ0MsRUFBRSxFQUFFLG9CQUFvQjtZQUN4QixLQUFLLEVBQUUsV0FBVztZQUNsQixLQUFLLEVBQUUsV0FBVztZQUNsQixVQUFVLEVBQUUsS0FBSztZQUNqQixTQUFTLEVBQUU7Z0JBQ1YsTUFBTSxFQUFFLElBQUk7Z0JBQ1osYUFBYSxFQUFFLElBQUk7Z0JBQ25CLGFBQWEsRUFBRSxJQUFJO2FBQ25CO1NBQ0Q7S0FzQkQ7Q0FDRCxDQUFBIiwiZmlsZSI6ImNvbnN0YW50c19tb3Rvci5qcyIsInNvdXJjZXNDb250ZW50IjpbbnVsbF0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
