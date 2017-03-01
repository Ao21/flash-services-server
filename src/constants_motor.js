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
                summaryTitle: ''
            }
        }, {
            key: 'amountOfDrivers',
            label: 'How many drivers will there be on your policy including yourself?',
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
            content: `By providing the requested data, you consent to AA's Data Protection and Privacy Policy and to AA using it for administration and keeping you informed by mail, telephone, email and SMS of other products and services from us. By proceeding, you consent to & confirm that you have read and accepted the AA Data Protection & Privacy Policy and the AA Terms & Conditions`,
            uiOptions: {
                summaryHidden: true
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
                        key1: 'insuredInYourOwnName',
                        key2: 'insuredNamedDriver',
                        name: 'showDualKey',
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
                        key1: 'insuredInYourOwnName',
                        key2: 'insuredNamedDriver',
                        name: 'showDualKey',
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
                    label: 'What date would you like to start your policy from??',
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
                    validators: []
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
                        summaryTitle: 'Date of Registration'
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
            key: 'dateOrPurchase',
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
            {
                id: 'car-secondary',
                type: 'car',
                fields: exports.QUESTIONS.secondCarQuestion
            }]
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

//# sourceMappingURL=data:application/json;base64,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RSxjQUFjO1NBQ3hCO0tBQ0Q7SUFDRDtRQUNDLEVBQUUsRUFBRSxjQUFjO1FBQ2xCLEtBQUssRUFBRSxjQUFjO1FBQ3JCLFNBQVMsRUFBRTtZQUNWLFFBQVEsRUFBRSxzQkFBc0I7WUFDaEMsUUFBUSxFQUFFLFNBQVM7U0FDbkI7UUFDRCxRQUFRLEVBQUUsQ0FBQztnQkFDVixFQUFFLEVBQUUsY0FBYztnQkFDbEIsSUFBSSxFQUFFLFNBQVM7Z0JBQ2YsTUFBTSxFQUFFLGlCQUFTLENBQUMsWUFBWTthQUM5QixDQUFDO0tBQ0Y7SUFDRDtRQUNDLEVBQUUsRUFBRSxTQUFTO1FBQ2IsS0FBSyxFQUFFLFNBQVM7UUFDaEIsU0FBUyxFQUFFO1lBQ1YsUUFBUSxFQUFFLGNBQWM7WUFDeEIsUUFBUSxFQUFFLGNBQWM7U0FDeEI7S0FDRCxDQUFDLENBQUE7QUFHSCxNQUFNLGlCQUFpQixHQUFHO0lBQ3pCO1FBQ0MsRUFBRSxFQUFFLGNBQWM7UUFDbEIsS0FBSyxFQUFFLGNBQWM7UUFDckIsU0FBUyxFQUFFO1lBQ1YsUUFBUSxFQUFFLFNBQVM7WUFDbkIsZUFBZSxFQUFFLElBQUk7WUFDckIsZ0JBQWdCLEVBQUUsSUFBSTtTQUN0QjtLQUNEO0NBQ0QsQ0FBQTtBQUNZLGNBQU0sR0FBRztJQUNyQixNQUFNLEVBQUUsQ0FBQztZQUNSLEVBQUUsRUFBRSxXQUFXO1lBQ2YsS0FBSyxFQUFFLFlBQVk7WUFDbkIsS0FBSyxFQUFFLGFBQUs7WUFDWixVQUFVLEVBQUUsS0FBSztZQUNqQixTQUFTLEVBQUUsRUFFVjtTQUNEO1FBQ0Q7WUFDQyxFQUFFLEVBQUUsb0JBQW9CO1lBQ3hCLEtBQUssRUFBRSxXQUFXO1lBQ2xCLEtBQUssRUFBRSxXQUFXO1lBQ2xCLFVBQVUsRUFBRSxLQUFLO1lBQ2pCLFNBQVMsRUFBRTtnQkFDVixNQUFNLEVBQUUsSUFBSTtnQkFDWixhQUFhLEVBQUUsSUFBSTthQUNuQjtTQUNEO1FBQ0Q7WUFDQyxFQUFFLEVBQUUsVUFBVTtZQUNkLEtBQUssRUFBRSxTQUFTO1lBQ2hCLEtBQUssRUFBRSxhQUFhO1lBQ3BCLFVBQVUsRUFBRSxLQUFLO1lBQ2pCLFNBQVMsRUFBRTtnQkFDVixNQUFNLEVBQUUsSUFBSTtnQkFDWixhQUFhLEVBQUUsSUFBSTthQUNuQjtTQUNEO1FBQ0Q7WUFDQyxFQUFFLEVBQUUsY0FBYztZQUNsQixLQUFLLEVBQUUsY0FBYztZQUNyQixLQUFLLEVBQUUsaUJBQWlCO1lBQ3hCLFVBQVUsRUFBRSxLQUFLO1lBQ2pCLFNBQVMsRUFBRTtnQkFDVixNQUFNLEVBQUUsSUFBSTtnQkFDWixnQkFBZ0IsRUFBRSxJQUFJO2dCQUN0QixlQUFlLEVBQUUsSUFBSTtnQkFDckIsa0JBQWtCLEVBQUUsSUFBSTtnQkFDeEIsZ0JBQWdCLEVBQUUsSUFBSTtnQkFDdEIsYUFBYSxFQUFFLElBQUk7YUFDbkI7U0FDRDtLQXFCQTtDQUNELENBQUEiLCJmaWxlIjoiY29uc3RhbnRzX21vdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOltudWxsXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
