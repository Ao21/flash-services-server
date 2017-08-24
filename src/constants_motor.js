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
            content: `<p>By providing the requested data, you consent to AA's Data Protection and Privacy Policy and to AA using it for administration and keeping you informed by mail, telephone, email and SMS of other products and services from us. By proceeding, you consent to & confirm that you have read and accepted the AA Data Protection & Privacy Policy and the AA Terms & Conditions</p>`,
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
            trigger: {
                key: 'typeOfEmployment',
                equals: ['Unemployed', 'Retired'],
                name: 'hideIfKeyEqualsMulti'
            },
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
                    trigger: {
                        key: 'insuredNamedDriver',
                        name: 'hideBasedOnKey',
                        isObject: true
                    },
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
                        equals: false,
                        isObject: true
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
            options: [{ id: 'FullIrish', description: 'Full Irish Licence' },
                { id: 'Irish Learners Permit', description: 'Irish Learners Permit' },
                { id: 'Full EU Licence', description: 'Full EU Licence' },
                { id: 'Non-EU Licence', description: 'Non-EU Licence' }],
            required: true,
            disabled: false,
            order: 0,
            validators: [],
            // value: { id: 'FullIrish', description: 'Full Irish Licence' },
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
            type: 'number',
            required: true,
            validators: ['maxPenaltyPoints'],
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
    secondCarQuestions: [
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
        }],
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
            required: true,
            disabled: false,
            trigger: {
                name: 'getValueForValidationFromQuestion',
                key: 'typeOfLicence',
                value: 'FullIrish'
            },
            validators: ['licenceNumberValidate']
        },
        {
            key: 'previousPolicyNumber',
            label: 'What was your previous policy number?',
            type: 'text',
            required: false,
            disabled: false,
            validators: []
        },
        {
            "key": "carRegistration",
            "label": "Please enter your car registration in order to purchase.",
            "type": "text",
            "required": true,
            "disabled": false,
            "trigger": {
                "name": "getValueFromQuestion",
                "key": "carSearchQuestion"
            }
        },
    ],
    additionalQuestionMembers: [
        {
            key: 'driverLicenceNumber',
            label: 'What is your Drivers Licence number?',
            type: 'text',
            required: false,
            disabled: false,
            validators: ['licenceNumberValidate']
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
        description: 'First we need some details to get started.',
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
        description: 'We need to know some details about you so that we can give you the best quote.',
        order: 1,
        uiOptions: {
            nextPage: 'your-address',
            prevPage: 'getting-started',
        },
        templates: [{
                type: 'default',
                additional: 1,
                hasQuestionsByDefault: true,
                fields: exports.QUESTIONS.details
            }],
        sections: [{
                id: 'details-default',
                type: 'default',
                isDriver: true,
                title: 'Primary Driver',
                fields: exports.QUESTIONS.details
            },
        ]
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
                title: 'Second Car',
                fields: exports.QUESTIONS.secondCarQuestions
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
        templates: [{
                type: 'default',
                additional: 1,
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
                additional: 1,
                fields: exports.QUESTIONS.claims
            },
        ],
        sections: [{
                id: 'claim-primary-driver',
                title: 'Primary Driver',
                userHasClaim: null,
                isDriver: true,
                type: 'claim',
                fields: [
                    {
                        key: '0',
                        type: 'claim',
                        isComplete: true,
                        fields: exports.QUESTIONS.claimWithValues
                    }
                ]
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
                additional: 1,
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
                additional: 1,
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
            nextPage: 'choose-your-payment',
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
            prevPage: 'choose-your-product',
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
            nextPage: 'tokenisation',
            prevPage: 'choose-your-payment',
        },
        templates: [{
                type: 'default',
                additional: 1,
                hasQuestionsByDefault: true,
                fields: exports.QUESTIONS.additionalQuestionMembers
            }],
        sections: [{
                id: 'additional-questions',
                type: 'default',
                isDriver: true,
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
            prevPage: 'additional-questions',
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

//# sourceMappingURL=data:application/json;base64,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
