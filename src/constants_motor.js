"use strict";
exports.QUESTIONS = {
    pre: [{
            key: 'email',
            label: 'What is your Email Address?',
            type: 'email',
            required: true,
            order: 0,
            validators: ['validEmailValidate'],
            uiOptions: {
                summaryTitle: '',
            }
        }, {
            key: 'amountOfDrivers',
            label: 'How many drivers will there be on your policy including yourself?',
            type: 'memberSelector',
            required: true,
            // disabled: true,
            order: 1,
            value: 1,
            min: 1,
            max: 5,
            // trigger: {
            // 	name: 'additionalDrivers',
            // },
            uiOptions: {
                summaryTitle: 'Amount of Drivers'
            }
        }, {
            key: 'termsConditions',
            label: 'Terms and Conditions',
            type: 'questionText',
            order: 2,
            timeline: false,
            content: `By providing the requested data, you consent to AA's Data Protection and Privacy Policy and to AA using it for administration and keeping you informed by mail, telephone, email and SMS of other products and services from us. By proceeding, you consent to & confirm that you have read and accepted the AA Data Protection & Privacy Policy and the AA Terms & Conditions`,
            uiOptions: {
                summaryHidden: true,
            }
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
            // value: 'Ronan',
            order: 0,
            uiOptions: {
                summaryTitle: 'First Name'
            }
        }, {
            key: 'lastName',
            label: 'Last Name',
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
            label: 'Contact Number',
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
            label: 'What is your Occupation?',
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
            label: 'Have you lived outside of Ireland or the UK in the past 12 months?',
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
            key: 'drivingExperience',
            type: 'group',
            alignment: 'none',
            timeline: false,
            order: 0,
            isComplete: false,
            fields: [{
                    key: 'insuredInYourOwnName',
                    label: 'Have you been insured in your own name within the last two years?',
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
                        isObject: true
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
                        isObject: true
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
                        isObject: true
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
                    key: 'namedDrivingExperienceYears',
                    label: 'How many years named driving experience do you have?',
                    type: 'slider',
                    trigger: {
                        key: 'insuredNamedDriver',
                        name: 'showBasedOnKey',
                        isObject: true
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
                    key: 'countryNamedDrivingExperience',
                    label: 'In what country did you earn your named driving experience?',
                    type: 'autocomplete',
                    serviceUrl: 'motor/occupation/',
                    trigger: {
                        key: 'insuredNamedDriver',
                        name: 'showBasedOnKey',
                        isObject: true
                    },
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
                    },
                },
                {
                    key: 'namedDrivingExperienceExpire',
                    label: 'When does this named driving experience expire?',
                    type: 'date',
                    trigger: {
                        key: 'insuredNamedDriver',
                        name: 'showBasedOnKey',
                        isObject: true
                    },
                    required: true,
                    order: 3,
                    uiOptions: {
                        summaryTitle: 'Amount of Years No Claims Bonus'
                    }
                },
                {
                    key: 'noClaimsBonusYears',
                    label: 'How many years no claims discount have you earned in your own name?',
                    type: 'slider',
                    trigger: {
                        key: 'insuredInYourOwnName',
                        name: 'showBasedOnKey',
                        isObject: true
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
                        key: 'insuredInYourOwnName',
                        name: 'showBasedOnKey',
                        isObject: true
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
                        isObject: true
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
                    label: 'Would you like to start your policy from the same date?',
                    type: 'radio',
                    order: 6,
                    trigger: {
                        key1: 'insuredInYourOwnName',
                        key2: 'insuredNamedDriver',
                        name: 'showDualKey',
                        isObject: true
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
                    label: 'What date would you like to start your policy from?',
                    type: 'date',
                    order: 7,
                    trigger: {
                        key: 'startPolicySameDate',
                        name: 'showIfKeyEquals',
                        equals: false
                    },
                    required: true,
                }]
        }, {
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
            label: 'What type of licence do you hold?',
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
            value: '0',
            // min: 0,
            // max: 9,
            values: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9+'],
            uiOptions: {
                summaryTitle: 'Amount of years you held your licence'
            }
        }, {
            key: 'whereEarnLicence',
            label: 'Where did you earn your licence?',
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
            label: 'Have you had any accident or claim (regardless of blame) excluding one windscreen claim in the last 5 years?',
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
            required: false,
            order: 0,
            validators: [],
            uiOptions: {
                summaryTitle: 'Address line 2'
            }
        },
        {
            key: 'area',
            label: 'Area',
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
            label: 'Date of claim',
            type: 'date',
            required: true,
            disabled: false,
            order: 0,
            validators: ['validDateValidate', 'validLastFiveYearsValidate'],
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
        },
        {
            key: 'isClaimSettled',
            label: 'Is the claim settled?',
            type: 'radio',
            options: [
                { id: true, description: 'Yes', },
                { id: false, description: 'No' },
            ],
            required: true,
            order: 0,
            validators: [],
            uiOptions: {
                summaryTitle: 'Reason for Claim'
            }
        },
        {
            key: 'thirdPartyInjuries',
            label: 'Were there any third party injuries?',
            type: 'radio',
            options: [
                { id: true, description: 'Yes', },
                { id: false, description: 'No' },
            ],
            required: true,
            order: 0,
            validators: [],
            uiOptions: {
                summaryTitle: 'Reason for Claim'
            }
        },
        {
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
            validators: ['validDateValidate', 'validLastFiveYearsValidate'],
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
            label: 'Date of Penalty',
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
    secondCarQuestion: [
        {
            key: 'carInformation',
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
                    validators: [],
                    uiOptions: {
                        locked: 'day',
                    }
                },
                {
                    key: 'carMake',
                    label: 'Car Make',
                    type: 'autocomplete',
                    serviceUrl: 'motor/reference/car/make/',
                    autoCompleteType: 'linked',
                    link: 'carInformation',
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
                    label: 'Engine Size',
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
                    link: 'carInformation',
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
    ],
    carQuestions: [
        {
            key: 'carInformation',
            type: 'group',
            alignment: 'none',
            timeline: false,
            order: 0,
            isComplete: false,
            uiOptions: {
                summaryTitle: 'Car Model'
            },
            fields: [
                {
                    key: 'dateOfRegistration',
                    label: 'Date of Registration',
                    type: 'date',
                    required: true,
                    disabled: false,
                    order: 0,
                    validators: [],
                    uiOptions: {
                        summaryTitle: 'Date of Registration',
                        locked: 'day'
                    }
                },
                {
                    key: 'carMake',
                    label: 'Car Make',
                    type: 'autocomplete',
                    serviceUrl: 'motor/reference/car/make/',
                    autoCompleteType: 'linked',
                    link: 'carInformation',
                    required: true,
                    disabled: false,
                    trigger: {
                        name: 'disabledBasedOnKey',
                        expectedType: 'string',
                        key: 'dateOfRegistration'
                    },
                    order: 1,
                    validators: [],
                    uiOptions: {
                        summaryTitle: 'Make'
                    }
                },
                {
                    key: 'engineSize',
                    label: 'Engine Size',
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
                    validators: [],
                    uiOptions: {
                        summaryTitle: 'Make'
                    }
                },
                {
                    key: 'carModel',
                    label: 'Car Model',
                    type: 'autocomplete',
                    serviceUrl: 'motor/reference/car/model/',
                    autoCompleteType: 'linked',
                    link: 'carInformation',
                    required: true,
                    disabled: false,
                    trigger: {
                        name: 'disabledBasedOnKey',
                        expectedType: 'object',
                        key: 'carMake'
                    },
                    order: 2,
                    validators: [],
                    uiOptions: {
                        summaryTitle: 'Model'
                    }
                }
            ]
        },
        {
            key: 'dateOfPurchase',
            label: 'Date of Purchase',
            type: 'date',
            required: true,
            disabled: false,
            order: 5,
            validators: [],
            uiOptions: {
                summaryTitle: 'Date of Purchase'
            }
        },
        {
            key: 'currentValue',
            label: 'Current Value',
            type: 'currency',
            required: true,
            disabled: false,
            order: 6,
            validators: [],
            uiOptions: {
                summaryTitle: 'Car value '
            }
        },
        {
            key: 'kilometersPerYear',
            label: 'How many kilometres do you drive in a year?',
            type: 'tel',
            required: true,
            disabled: false,
            order: 7,
            validators: [],
            uiOptions: {
                summaryTitle: 'Kilometers per year'
            }
        },
        {
            key: 'securityFeatures',
            type: 'group',
            alignment: 'half',
            timeline: true,
            label: 'What security features are fitted to your vehicle?',
            order: 8,
            isComplete: false,
            uiOptions: {
                summaryTitle: 'Security Features'
            },
            fields: [{
                    key: 'security-alarm',
                    name: 'Alarm',
                    type: 'checkbox',
                    timeline: false,
                    required: false,
                    uiOptions: {
                        summaryTitle: 'Security Alarm'
                    }
                },
                {
                    key: 'security-immobiliser',
                    name: 'Immobiliser',
                    type: 'checkbox',
                    timeline: false,
                    required: false,
                    uiOptions: {
                        summaryTitle: 'Immobiliser'
                    }
                },
                {
                    key: 'security-tracker',
                    name: 'Tracker',
                    type: 'checkbox',
                    timeline: false,
                    required: false,
                    uiOptions: {
                        summaryTitle: 'Tracker'
                    }
                }
            ]
        },
        {
            key: 'carMainlyUsedCounty',
            label: 'In what county is your usually used?',
            placeholder: 'Please enter a county',
            type: 'autocomplete',
            serviceUrl: 'motor/reference/county/',
            autoCompleteType: 'search',
            required: true,
            disabled: false,
            order: 9,
            validators: []
        },
        {
            key: 'carMainlyUsedArea',
            label: 'In what area is your car usually used',
            placeholder: 'Please type the neighbourhood, region, area',
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
            type: 'dropdown',
            options: [
                { id: 'carport', description: 'Carport' },
                { id: 'garaged', description: 'Garaged' },
                { id: 'keptPrivate', description: 'Kept on Private Property' },
                { id: 'keptPublic', description: 'Kept on Public Property' },
                { id: 'parkedInDrive', description: 'Parked on Drive' },
            ],
            required: true,
            order: 10,
            validators: []
        }],
    additionalQuestions: [
        {
            key: 'driverLicenceNumber',
            label: 'What is your Drivers Licence number?',
            type: 'text',
            required: false,
            disabled: false,
            validators: []
        },
        {
            key: 'previousPolicyNumber',
            label: 'What was your previous policy number?',
            type: 'text',
            required: false,
            disabled: false,
            validators: []
        },
    ],
    tokenisation: [
        {
            key: 'areYouCardholder',
            label: 'Are you the Cardholder?',
            type: 'radio',
            options: [{
                    id: true,
                    description: 'Yes'
                }, {
                    id: false,
                    description: 'No'
                }],
            required: true,
            value: 'Yes',
            order: 2,
            validators: []
        },
        {
            key: 'doYouHavePermissionCardholder',
            label: `We need to store the cardholders payment information securely to complete your purchase. Can you confirm that
				the cardholder has consented to their payment details being stored for use with this AA product only?`,
            type: 'radio',
            options: [{
                    id: true,
                    description: 'Yes'
                }, {
                    id: false,
                    description: 'No'
                }],
            trigger: {
                key: 'areYouCardholder',
                name: 'showIfKeyEquals',
                equals: false,
                isObject: true
            },
            required: true,
            value: 'Yes',
            order: 2,
            validators: []
        },
        {
            key: 'saveCardFutureTransactions',
            label: 'Would you like us to save this card securely to us for future transactions?',
            type: 'radio',
            options: [{
                    id: true,
                    description: 'Yes'
                }, {
                    id: false,
                    description: 'No'
                }],
            required: true,
            value: 'Yes',
            order: 2,
            validators: []
        },
        {
            key: 'saveCardAllAAProducts',
            label: 'Would you like to save this card use on all AA Products?',
            type: 'radio',
            options: [{
                    id: true,
                    description: 'Yes'
                }, {
                    id: false,
                    description: 'No'
                }],
            trigger: {
                key: 'saveCardFutureTransactions',
                name: 'showIfKeyEquals',
                equals: false,
                isObject: true
            },
            required: true,
            value: 'Yes',
            order: 2,
            validators: []
        }
    ]
};
exports.PAGES = [{
        id: 'getting-started',
        title: 'Getting Started',
        order: 0,
        uiOptions: {
            nextPage: 'your-details',
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
        },
        sections: [{
                id: 'car-default',
                type: 'car',
                title: 'Primary Driver',
                fields: exports.QUESTIONS.carQuestions
            },
        ]
    },
    {
        id: 'your-licence',
        title: 'Licence',
        order: 1,
        uiOptions: {
            nextPage: 'your-cover',
            prevPage: 'your-car',
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
        title: 'Choose the best product for you',
        uiOptions: {
            prevPage: 'your-penalties',
            nextPage: 'are-you-a-member',
        },
    },
    {
        id: 'are-you-a-member',
        title: 'Are you a Member?',
        uiOptions: {
            prevPage: 'choose-your-product',
            nextPage: 'choose-your-payment',
        },
    },
    {
        id: 'choose-your-payment',
        uiOptions: {
            prevPage: 'are-you-a-member',
            nextPage: 'additional-questions',
        },
    },
];
const SUMMARY_PAGES = [{
        id: 'summary',
        uiOptions: {
            prevPage: 'choose-your-payment',
        },
    }];
const TERMS_AND_CONDITIONS_PAGES = [{
        id: 'terms',
        uiOptions: {
            prevPage: 'choose-your-payment',
        },
    }];
const PAYMENT_PAGES = [
    {
        id: 'additional-questions',
        title: 'Additional Questions',
        uiOptions: {
            nextPage: 'terms-and-conditions',
            prevPage: 'choose-your-payment',
        },
        sections: [{
                id: 'additional-questions',
                type: 'default',
                fields: exports.QUESTIONS.additionalQuestions
            }]
    },
    {
        id: 'terms-and-conditions',
        title: 'Terms and Conditions',
        uiOptions: {
            prevPage: 'additional-question',
            nextPage: 'tokenisation',
        },
    },
    {
        id: 'tokenisation',
        title: 'Tokenisation',
        uiOptions: {
            prevPage: 'terms-and-conditions',
            nextPage: 'payment',
        },
        sections: [{
                id: 'tokenisation',
                type: 'default',
                fields: exports.QUESTIONS.tokenisation
            }]
    },
    {
        id: 'payment',
        title: 'Payment',
        uiOptions: {
            prevPage: 'tokenisation',
            nextPage: 'confirmation',
        }
    }];
const CONFIRMATION_PAGE = [
    {
        id: 'confirmation',
        title: 'Confirmation',
        uiOptions: {
            prevPage: 'payment',
            isSummaryHidden: true,
            isTimelineHidden: true,
        }
    }
];
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
                isPagesHidden: true
            }
        },
        {
            id: 'payments',
            title: 'Payment',
            pages: PAYMENT_PAGES,
            isComplete: false,
            uiOptions: {
                isWide: true,
                isPagesHidden: true
            }
        },
        {
            id: 'confirmation',
            title: 'Confirmation',
            pages: CONFIRMATION_PAGE,
            isComplete: false,
            uiOptions: {
                isWide: true,
                isProgressHidden: true,
                isSummaryHidden: true,
                isHelpCenterHidden: true,
                isHeaderExtended: true,
                isPagesHidden: true
            }
        },
    ]
};

//# sourceMappingURL=data:application/json;base64,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UztRQUNiLEtBQUssRUFBRSxTQUFTO1FBQ2hCLFNBQVMsRUFBRTtZQUNWLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFFBQVEsRUFBRSxjQUFjO1NBQ3hCO0tBQ0QsQ0FBQyxDQUFBO0FBR0gsTUFBTSxpQkFBaUIsR0FBRztJQUN6QjtRQUNDLEVBQUUsRUFBRSxjQUFjO1FBQ2xCLEtBQUssRUFBRSxjQUFjO1FBQ3JCLFNBQVMsRUFBRTtZQUNWLFFBQVEsRUFBRSxTQUFTO1lBQ25CLGVBQWUsRUFBRSxJQUFJO1lBQ3JCLGdCQUFnQixFQUFFLElBQUk7U0FDdEI7S0FDRDtDQUNELENBQUE7QUFDWSxjQUFNLEdBQUc7SUFDckIsTUFBTSxFQUFFLENBQUM7WUFDUixFQUFFLEVBQUUsV0FBVztZQUNmLEtBQUssRUFBRSxZQUFZO1lBQ25CLEtBQUssRUFBRSxhQUFLO1lBQ1osVUFBVSxFQUFFLEtBQUs7WUFDakIsU0FBUyxFQUFFLEVBRVY7U0FDRDtRQUNEO1lBQ0MsRUFBRSxFQUFFLG9CQUFvQjtZQUN4QixLQUFLLEVBQUUsV0FBVztZQUNsQixLQUFLLEVBQUUsV0FBVztZQUNsQixVQUFVLEVBQUUsS0FBSztZQUNqQixTQUFTLEVBQUU7Z0JBQ1YsTUFBTSxFQUFFLElBQUk7Z0JBQ1osYUFBYSxFQUFFLElBQUk7YUFDbkI7U0FDRDtRQUNEO1lBQ0MsRUFBRSxFQUFFLFVBQVU7WUFDZCxLQUFLLEVBQUUsU0FBUztZQUNoQixLQUFLLEVBQUUsYUFBYTtZQUNwQixVQUFVLEVBQUUsS0FBSztZQUNqQixTQUFTLEVBQUU7Z0JBQ1YsTUFBTSxFQUFFLElBQUk7Z0JBQ1osYUFBYSxFQUFFLElBQUk7YUFDbkI7U0FDRDtRQUNEO1lBQ0MsRUFBRSxFQUFFLGNBQWM7WUFDbEIsS0FBSyxFQUFFLGNBQWM7WUFDckIsS0FBSyxFQUFFLGlCQUFpQjtZQUN4QixVQUFVLEVBQUUsS0FBSztZQUNqQixTQUFTLEVBQUU7Z0JBQ1YsTUFBTSxFQUFFLElBQUk7Z0JBQ1osZ0JBQWdCLEVBQUUsSUFBSTtnQkFDdEIsZUFBZSxFQUFFLElBQUk7Z0JBQ3JCLGtCQUFrQixFQUFFLElBQUk7Z0JBQ3hCLGdCQUFnQixFQUFFLElBQUk7Z0JBQ3RCLGFBQWEsRUFBRSxJQUFJO2FBQ25CO1NBQ0Q7S0FxQkE7Q0FDRCxDQUFBIiwiZmlsZSI6ImNvbnN0YW50c19tb3Rvci5qcyIsInNvdXJjZXNDb250ZW50IjpbbnVsbF0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
