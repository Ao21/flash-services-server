"use strict";
exports.QUESTIONS = {
    pre: [{
            key: 'email',
            label: 'What is your Email Address?',
            type: 'myaaEmail',
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
            // 	name: 'sections',
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
            autoCompleteType: 'all',
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
                    placeholder: 'Please enter a country',
                    serviceUrl: 'motor/occupation/',
                    trigger: {
                        key: 'insuredNamedDriver',
                        name: 'showBasedOnKey',
                        isObject: true
                    },
                    autoCompleteType: 'options',
                    options: [{
                            id: 'ireland',
                            description: 'Ireland'
                        }, {
                            id: 'England',
                            description: 'england'
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
                    placeholder: 'Please enter a country',
                    autoCompleteType: 'options',
                    trigger: {
                        key: 'insuredInYourOwnName',
                        name: 'showBasedOnKey',
                        isObject: true
                    },
                    options: [{
                            id: 'Ireland',
                            description: 'Ireland'
                        }, {
                            id: 'England',
                            description: 'England'
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
            // value: { id: 'Irish Learners Permit', description: 'Irish Learners Permit' },
            uiOptions: {
                summaryTitle: 'Type of Licence'
            }
        }, {
            key: 'howLongLicenceHeld',
            label: 'How long have you held your licence?',
            type: 'slider',
            required: true,
            order: 1,
            value: { description: '0', id: 0 },
            // min: 0,
            // max: 9,
            values: [
                { description: '0', id: 0 },
                { description: '1', id: 1 },
                { description: '2', id: 2 },
                { description: '3', id: 3 },
                { description: '4', id: 4 },
                { description: '5', id: 5 },
                { description: '6', id: 6 },
                { description: '7', id: 7 },
                { description: '8', id: 8 },
                { description: '9+', id: 9 },
            ],
            uiOptions: {
                summaryTitle: 'Amount of years you held your licence'
            }
        }, {
            key: 'whereEarnLicence',
            label: 'Where did you earn your licence?',
            type: 'autocomplete',
            placeholder: 'Please enter a country',
            serviceUrl: 'motor/occupation/',
            autoCompleteType: 'options',
            options: [{
                    id: 'Ireland',
                    description: 'ireland'
                }, {
                    id: 'Dublin',
                    description: 'Dublin'
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
            placeholder: 'How many?',
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
                    key: 'carMake',
                    label: 'Car Make',
                    type: 'autocomplete',
                    serviceUrl: 'motor/reference/car/make/',
                    autoCompleteType: 'linked',
                    link: '',
                    required: true,
                    disabled: false,
                    order: 1,
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
                    link: 'carMake',
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
                },
                {
                    key: 'fuelType',
                    label: 'Fuel Type',
                    type: 'dropdown',
                    options: [
                        { id: 'petrol', description: 'Petrol' },
                        { id: 'diesel', description: 'Diesel' },
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
                        key: 'fuelType'
                    },
                    order: 3,
                    validators: [],
                    uiOptions: {
                        summaryTitle: 'Make'
                    }
                },
            ]
        },
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
            label: 'In what county is your car usually used?',
            placeholder: 'Please enter a county',
            type: 'autocomplete',
            serviceUrl: 'motor/reference/county/',
            autoCompleteType: 'search',
            required: true,
            trigger: {
                key: 'county',
                name: 'getValueFromQuestion',
            },
            disabled: false,
            order: 9,
            validators: []
        },
        {
            key: 'carMainlyUsedArea',
            label: 'In what area is your car usually used?',
            placeholder: 'Please type the neighbourhood, region, area',
            type: 'autocomplete',
            serviceUrl: 'motor/reference/county/',
            autoCompleteType: 'search',
            required: true,
            trigger: {
                key: 'area',
                name: 'getValueFromQuestion',
            },
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
        templates: [{
                type: 'default',
                additional: true,
                hasQuestionsByDefault: true,
                fields: exports.QUESTIONS.details
            }],
        sections: [{
                id: 'details-default',
                type: 'default',
                isDriver: true,
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
        templates: [{
                type: 'default',
                additional: true,
                hasQuestionsByDefault: true,
                fields: exports.QUESTIONS.licence
            }],
        sections: [{
                id: 'licence-default',
                type: 'default',
                isDriver: true,
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
        templates: [
            // Group Question
            {
                type: 'claim',
                userHasClaim: null,
                additional: true,
                fields: exports.QUESTIONS.claims
            },
        ],
        sections: [{
                id: 'claim-primary-driver',
                title: 'Primary Driver',
                userHasClaim: null,
                isDriver: true,
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
        templates: [{
                type: 'penalty',
                title: 'Primary Driver',
                userHasPenalty: null,
                additional: true,
                fields: exports.QUESTIONS.penalties
            }],
        sections: [{
                id: 'penalty-primary-driver',
                title: 'Primary Driver',
                userHasPenalty: null,
                isDriver: true,
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
        templates: [{
                type: 'default',
                additional: true,
                hasQuestionsByDefault: true,
                fields: exports.QUESTIONS.details
            }
        ],
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
        title: 'Choose your payment',
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

//# sourceMappingURL=data:application/json;base64,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O2dCQUNsQixJQUFJLEVBQUUsU0FBUztnQkFDZixNQUFNLEVBQUUsaUJBQVMsQ0FBQyxZQUFZO2FBQzlCLENBQUM7S0FDRjtJQUNEO1FBQ0MsRUFBRSxFQUFFLFNBQVM7UUFDYixLQUFLLEVBQUUsU0FBUztRQUNoQixTQUFTLEVBQUU7WUFDVixRQUFRLEVBQUUsY0FBYztZQUN4QixRQUFRLEVBQUUsY0FBYztTQUN4QjtLQUNELENBQUMsQ0FBQTtBQUdILE1BQU0saUJBQWlCLEdBQUc7SUFDekI7UUFDQyxFQUFFLEVBQUUsY0FBYztRQUNsQixLQUFLLEVBQUUsY0FBYztRQUNyQixTQUFTLEVBQUU7WUFDVixRQUFRLEVBQUUsU0FBUztZQUNuQixlQUFlLEVBQUUsSUFBSTtZQUNyQixnQkFBZ0IsRUFBRSxJQUFJO1NBQ3RCO0tBQ0Q7Q0FDRCxDQUFBO0FBQ1ksY0FBTSxHQUFHO0lBQ3JCLE1BQU0sRUFBRSxDQUFDO1lBQ1IsRUFBRSxFQUFFLFdBQVc7WUFDZixLQUFLLEVBQUUsWUFBWTtZQUNuQixLQUFLLEVBQUUsYUFBSztZQUNaLFVBQVUsRUFBRSxLQUFLO1lBQ2pCLFNBQVMsRUFBRSxFQUVWO1NBQ0Q7UUFDRDtZQUNDLEVBQUUsRUFBRSxvQkFBb0I7WUFDeEIsS0FBSyxFQUFFLFdBQVc7WUFDbEIsS0FBSyxFQUFFLFdBQVc7WUFDbEIsVUFBVSxFQUFFLEtBQUs7WUFDakIsU0FBUyxFQUFFO2dCQUNWLE1BQU0sRUFBRSxJQUFJO2dCQUNaLGFBQWEsRUFBRSxJQUFJO2FBQ25CO1NBQ0Q7UUFDRDtZQUNDLEVBQUUsRUFBRSxVQUFVO1lBQ2QsS0FBSyxFQUFFLFNBQVM7WUFDaEIsS0FBSyxFQUFFLGFBQWE7WUFDcEIsVUFBVSxFQUFFLEtBQUs7WUFDakIsU0FBUyxFQUFFO2dCQUNWLE1BQU0sRUFBRSxJQUFJO2dCQUNaLGFBQWEsRUFBRSxJQUFJO2FBQ25CO1NBQ0Q7UUFDRDtZQUNDLEVBQUUsRUFBRSxjQUFjO1lBQ2xCLEtBQUssRUFBRSxjQUFjO1lBQ3JCLEtBQUssRUFBRSxpQkFBaUI7WUFDeEIsVUFBVSxFQUFFLEtBQUs7WUFDakIsU0FBUyxFQUFFO2dCQUNWLE1BQU0sRUFBRSxJQUFJO2dCQUNaLGdCQUFnQixFQUFFLElBQUk7Z0JBQ3RCLGVBQWUsRUFBRSxJQUFJO2dCQUNyQixrQkFBa0IsRUFBRSxJQUFJO2dCQUN4QixnQkFBZ0IsRUFBRSxJQUFJO2dCQUN0QixhQUFhLEVBQUUsSUFBSTthQUNuQjtTQUNEO0tBcUJBO0NBQ0QsQ0FBQSIsImZpbGUiOiJjb25zdGFudHNfbW90b3IuanMiLCJzb3VyY2VzQ29udGVudCI6W251bGxdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
