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
		order: 1,
		value: 1,
		min: 1,
		max: 7
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
		order: 0
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
		order: 2,
		validators: ['validDateValidate', 'validOverEighteenValidate']
	}, {
		key: 'phoneNumber',
		label: 'Phone Number',
		type: 'tel',
		required: true,
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
		key: 'business',
		label: 'Type of Business',
		type: 'autocomplete',
		placeholder: 'Select an Area of Business',
		trigger: {
			key: 'occupation',
			type: 'occupation',
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
		order: 10,
		value: 1,
		min: 1,
		max: 7
	}]
}

export const SECTION = {
	pre: {
		title: 'Pre',
		order: 0
	},
	details: {
		title: 'Details'
	}
}