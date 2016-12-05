export const QUESTIONS = {

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
		autoCompleteType: 'search', // search || all || options
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
		autoCompleteType: 'search', // search || all | options
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
		autoCompleteType: 'search', // search || all || options
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
		validators: ['validDateValidate','validLastThreeYearsValidate']
	},
	{
		key: 'reasonForClaim',
		label: 'What was the reason for the claim?',
		type: 'dropdown',
		options: ['Accident', 'Accidental Damage', 'Fire', 'Malicious Damage As A Result Of Theft', 'Personal Accident', 'Personal Effects', 'Theft','Third Party','Vandalism','Windscreen'],
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
		validators: ['validDateValidate','validLastThreeYearsValidate']
	},
	{
		key: 'reasonForClaim',
		label: 'What was the reason for the claim?',
		type: 'dropdown',
		options: ['Accident', 'Accidental Damage', 'Fire', 'Malicious Damage As A Result Of Theft', 'Personal Accident', 'Personal Effects', 'Theft','Third Party','Vandalism','Windscreen'],
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
		validators: ['validDateValidate','validLastThreeYearsValidate']
	},
	{
		key: 'reasonForPenalty',
		label: 'What was the reason?',
		type: 'dropdown',
		options: ['Accident', 'Accidental Damage', 'Fire', 'Malicious Damage As A Result Of Theft', 'Personal Accident', 'Personal Effects', 'Theft','Third Party','Vandalism','Windscreen'],
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
		validators: ['validDateValidate','validLastThreeYearsValidate']
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
}

export const PAGES = [{
	id: 'pre',
	title: 'Pre',
	order: 0,
	templates: {},
	sections: [
		{
			id: 'pre-default',
			type: 'default',
			fields: QUESTIONS.pre
		},
		{
			id: 'pre-alt',
			type: 'alt',
			fields: QUESTIONS.pre
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
			fields: QUESTIONS.details
		}
	},
	sections: [
		{
			id: 'details-default',
			type: 'default',
			fields: QUESTIONS.details
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
			fields: QUESTIONS.claims
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
					fields: QUESTIONS.claimWithValues
				}
			]
		},
		// {
		// 	id: 'claim-secondary-driver',
		// 	title: 'Secondary Driver',
		// 	userHasClaim: null,
		// 	type: 'claim',
		// 	fields: [
		// 		{
		// 			key: 'secondaryDriverClaims-0',
		// 			type: 'claim',
		// 			isComplete: false,
		// 			fields: QUESTIONS.claims
		// 		}
		// 	]
		// }
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
			fields: QUESTIONS.penalties
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
					fields: QUESTIONS.penaltiesWithValues
				}
			]
		},
	]
}];

export const CONFIG = {
	stages: [{
		id: 'quotation',
		title: 'quotation',
		pages: PAGES
	}]
}