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
            options: ['Yes', 'No'],
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
            options: ['Yes', 'No'],
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
            validators: ['validDateValidate']
        },
        {
            key: 'reasonForClaim',
            label: 'What was the reason for the claim?',
            type: 'dropdown',
            options: ['Employed', 'Household Duties', 'Retired', 'Self Employed', 'Unemployed'],
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
            options: ['Yes', 'No'],
            required: true,
            order: 2,
            validators: []
        },
        {
            key: 'noClaimsBonusProtected',
            label: 'Was your no claims bonus protected?',
            type: 'radio',
            options: ['Yes', 'No'],
            required: true,
            order: 2,
            validators: []
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
                id: 'claim-default',
                userHasClaim: null,
                type: 'claim',
            }
        ]
    }];
exports.CONFIG = {
    stages: [{
            id: 'quotation',
            title: 'quotation',
            pages: exports.PAGES
        }]
};

//# sourceMappingURL=data:application/json;base64,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QUNELEVBQUU7UUFDRixFQUFFLEVBQUUsU0FBUztRQUNiLEtBQUssRUFBRSxTQUFTO1FBQ2hCLEtBQUssRUFBRSxDQUFDO1FBQ1IsU0FBUyxFQUFFO1lBQ1YsaUJBQWlCLEVBQUU7Z0JBQ2xCLElBQUksRUFBRSxtQkFBbUI7Z0JBQ3pCLEdBQUcsRUFBRSxDQUFDO2dCQUNOLFFBQVEsRUFBRSxJQUFJO2dCQUNkLE1BQU0sRUFBRSxpQkFBUyxDQUFDLE9BQU87YUFDekI7U0FDRDtRQUNELFFBQVEsRUFBRTtZQUNUO2dCQUNDLEVBQUUsRUFBRSxpQkFBaUI7Z0JBQ3JCLElBQUksRUFBRSxTQUFTO2dCQUNmLE1BQU0sRUFBRSxpQkFBUyxDQUFDLE9BQU87YUFDekI7U0FDRDtLQUNEO0lBQ0Q7UUFDQyxFQUFFLEVBQUUsUUFBUTtRQUNaLEtBQUssRUFBRSxRQUFRO1FBQ2YsS0FBSyxFQUFFLENBQUM7UUFDUixTQUFTLEVBQUU7WUFDVixLQUFLLEVBQUU7Z0JBQ04sSUFBSSxFQUFFLE9BQU87Z0JBQ2IsWUFBWSxFQUFFLElBQUk7Z0JBQ2xCLFFBQVEsRUFBRSxJQUFJO2dCQUNkLE1BQU0sRUFBRSxpQkFBUyxDQUFDLE1BQU07YUFDeEI7U0FDRDtRQUNELFFBQVEsRUFBRTtZQUNUO2dCQUNDLEVBQUUsRUFBRSxlQUFlO2dCQUNuQixZQUFZLEVBQUUsSUFBSTtnQkFDbEIsSUFBSSxFQUFFLE9BQU87YUFDYjtTQUNEO0tBQ0QsQ0FBQyxDQUFDO0FBRVUsY0FBTSxHQUFHO0lBQ3JCLE1BQU0sRUFBRSxDQUFDO1lBQ1IsRUFBRSxFQUFFLFdBQVc7WUFDZixLQUFLLEVBQUUsV0FBVztZQUNsQixLQUFLLEVBQUUsYUFBSztTQUNaLENBQUM7Q0FDRixDQUFBIiwiZmlsZSI6ImNvbnN0YW50c19tb3Rvci5qcyIsInNvdXJjZXNDb250ZW50IjpbbnVsbF0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
