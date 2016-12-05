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
            // value: 1,
            min: 0,
            max: 10
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
            placeholder: 'John',
            order: 0,
        }, {
            key: 'lastName',
            label: 'Last Name',
            placeholder: 'Snow',
            type: 'text',
            required: true,
            order: 1
        }, {
            key: 'dateOfBirth',
            label: 'Date Of Birth',
            type: 'date',
            required: true,
            disabled: false,
            order: 2,
            validators: ['validDateValidate', 'validOverEighteenValidate']
        }, {
            key: 'phoneNumber',
            label: 'Phone Number',
            type: 'tel',
            required: true,
            disabled: true,
            order: 2,
            validators: ['validPhoneNumberValidate']
        },
        {
            key: 'typeOfEmployment',
            label: 'Type of Employment',
            type: 'dropdown',
            options: ['Employed', 'Household Duties', 'Retired', 'Self Employed', 'Unemployed'],
            required: true,
            order: 2,
            validators: []
        },
        {
            key: 'occupation',
            label: 'Occupation',
            type: 'autocomplete',
            placeholder: 'Select an Occupation',
            serviceUrl: 'motor/occupation/',
            autoCompleteType: 'search',
            options: [
                { id: 'Employed', text: 'Employed' },
                { id: 'Household Duties', text: 'Household Duties' },
                { id: 'Retired', text: 'Retired' },
                { id: 'Self Employed', text: 'Self Employed' },
                { id: 'Unemployed', text: 'Unemployed' },
                { id: 'Very Employed', text: 'Very Employed' },
                { id: 'Very Household Duties', text: 'Very Household Duties' },
                { id: 'Very Retired', text: 'Very Retired' },
                { id: 'Very Self Employed', text: 'Very Self Employed' }
            ],
            required: true,
            disabled: false,
            // value: { id: 'Employed', text: 'Employed' },
            order: 2,
            validators: []
        },
        {
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
            options: [
                { id: 'Employed', text: 'Employed' },
                { id: 'Household Duties', text: 'Household Duties' },
                { id: 'Retired', text: 'Retired' },
                { id: 'Self Employed', text: 'Self Employed' },
                { id: 'Unemployed', text: 'Unemployed' },
                { id: 'Very Employed', text: 'Very Employed' },
                { id: 'Very Household Duties', text: 'Very Household Duties' },
                { id: 'Very Retired', text: 'Very Retired' },
                { id: 'Very Self Employed', text: 'Very Self Employed' }
            ],
            required: true,
            order: 2,
            validators: []
        },
        {
            key: 'livedOutsideIreland',
            label: 'Have you lived outside the Republic of Ireland or the UK in the last 12 months?',
            type: 'radio',
            options: [{ value: 'Yes', text: 'Yes' }, { value: 'No', text: 'No' }],
            required: true,
            order: 2,
            validators: []
        },
        {
            key: 'amountOfDrivers',
            label: 'How many drivers?',
            type: 'slider',
            required: true,
            disabled: false,
            order: 10,
            // values: [5, 6, 11, 12],
            value: 2,
            // steps: 1,
            min: 0,
            max: 7
        },
        {
            key: 'occupation3',
            label: 'Occupation',
            type: 'autocomplete',
            placeholder: 'Select an Occupation',
            serviceUrl: 'motor/occupation/',
            autoCompleteType: 'search',
            options: [
                { id: 'Employed', text: 'Employed' },
                { id: 'Household Duties', text: 'Household Duties' },
                { id: 'Retired', text: 'Retired' },
                { id: 'Self Employed', text: 'Self Employed' },
                { id: 'Unemployed', text: 'Unemployed' },
                { id: 'Very Employed', text: 'Very Employed' },
                { id: 'Very Household Duties', text: 'Very Household Duties' },
                { id: 'Very Retired', text: 'Very Retired' },
                { id: 'Very Self Employed', text: 'Very Self Employed' }
            ],
            required: true,
            disabled: false,
            // value: { id: 'Employed', text: 'Employed' },
            order: 99992,
            validators: []
        }],
    defaultClaimQuestion: [{
            key: 'customerClaims',
            label: 'Have you had any claims in the past 3 years?',
            type: 'radio',
            options: [{ value: 'Yes', text: 'Yes' }, { value: 'No', text: 'No' }],
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
        },
        {
            key: 'reasonForClaim',
            label: 'What was the reason for the claim?',
            type: 'dropdown',
            options: ['Accident', 'Accidental Damage', 'Fire', 'Malicious Damage As A Result Of Theft', 'Personal Accident', 'Personal Effects', 'Theft', 'Third Party', 'Vandalism', 'Windscreen'],
            required: true,
            order: 0,
            validators: []
        },
        {
            key: 'costOfClaim',
            label: 'Cost of claim',
            type: 'text',
            required: true,
            placeholder: 'How Much',
            order: 0,
        },
        {
            key: 'customerAtFault',
            label: 'Were you at fault?',
            type: 'radio',
            options: [{ value: 'Yes', text: 'Yes' }, { value: 'No', text: 'No' }],
            required: true,
            order: 2,
            validators: []
        },
        {
            key: 'noClaimsBonusProtected',
            label: 'Was your no claims bonus protected?',
            type: 'radio',
            options: [{ value: 'Yes', text: 'Yes' }, { value: 'No', text: 'No' }],
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
        },
        {
            key: 'reasonForClaim',
            label: 'What was the reason for the claim?',
            type: 'dropdown',
            options: ['Accident', 'Accidental Damage', 'Fire', 'Malicious Damage As A Result Of Theft', 'Personal Accident', 'Personal Effects', 'Theft', 'Third Party', 'Vandalism', 'Windscreen'],
            required: true,
            value: 'Accident',
            order: 0,
            validators: []
        },
        {
            key: 'costOfClaim',
            label: 'Cost of claim',
            type: 'text',
            value: '5000',
            required: true,
            placeholder: 'How Much',
            order: 0,
        },
        {
            key: 'customerAtFault',
            label: 'Were you at fault?',
            type: 'radio',
            options: [{ value: 'Yes', text: 'Yes' }, { value: 'No', text: 'No' }],
            required: true,
            value: 'Yes',
            order: 2,
            validators: []
        },
        {
            key: 'noClaimsBonusProtected',
            label: 'Was your no claims bonus protected?',
            type: 'radio',
            options: [{ value: 'Yes', text: 'Yes' }, { value: 'No', text: 'No' }],
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
        },
        {
            key: 'reasonForPenalty',
            label: 'What was the reason?',
            type: 'dropdown',
            options: ['Accident', 'Accidental Damage', 'Fire', 'Malicious Damage As A Result Of Theft', 'Personal Accident', 'Personal Effects', 'Theft', 'Third Party', 'Vandalism', 'Windscreen'],
            required: true,
            order: 0,
            validators: []
        },
        {
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
        },
        {
            key: 'reasonForPenalty',
            label: 'What was the reason?',
            type: 'dropdown',
            options: ['Accident', 'Accidental Damage', 'Fire', 'Malicious Damage As A Result Of Theft', 'Personal Accident', 'Personal Effects', 'Theft', 'Third Party', 'Vandalism', 'Windscreen'],
            value: 'Accident',
            required: true,
            order: 0,
            validators: []
        },
        {
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
        templates: {},
        sections: [
            {
                id: 'pre-default',
                type: 'default',
                fields: exports.QUESTIONS.pre
            },
            {
                id: 'pre-alt',
                type: 'alt',
                fields: exports.QUESTIONS.pre
            }
        ]
    }, {
        id: 'details',
        title: 'Details',
        order: 1,
        templates: {
            additionalDrivers: {
                type: 'additionalDrivers',
                max: 5,
                optional: true,
                fields: exports.QUESTIONS.details
            }
        },
        sections: [
            {
                id: 'details-default',
                type: 'default',
                fields: exports.QUESTIONS.details
            }
        ]
    },
    {
        id: 'claims',
        title: 'Claims',
        order: 1,
        templates: {
            claim: {
                type: 'claim',
                userHasClaim: null,
                optional: true,
                fields: exports.QUESTIONS.claims
            },
        },
        sections: [
            {
                id: 'claim-primary-driver',
                title: 'Main Driver',
                userHasClaim: true,
                type: 'claim',
                fields: [
                    {
                        key: '0',
                        type: 'claim',
                        isComplete: true,
                        fields: exports.QUESTIONS.claimWithValues
                    }
                ]
            },
        ]
    },
    {
        id: 'penalties',
        title: 'Penalty Points',
        order: 1,
        templates: {
            penalty: {
                type: 'penalty',
                userHasPenalty: null,
                optional: true,
                fields: exports.QUESTIONS.penalties
            },
        },
        sections: [
            {
                id: 'penalty-primary-driver',
                title: 'Main Driver',
                userHasPenalty: true,
                type: 'penalty',
                fields: [
                    {
                        key: '0',
                        type: 'penalty',
                        isComplete: true,
                        fields: exports.QUESTIONS.penaltiesWithValues
                    }
                ]
            },
        ]
    }];
exports.CONFIG = {
    stages: [{
            id: 'quotation',
            title: 'quotation',
            pages: exports.PAGES
        }]
};

//# sourceMappingURL=data:application/json;charset=utf8;base64,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
