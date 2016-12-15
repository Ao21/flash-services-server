export const QUESTIONS = {

	pre: [
		{
			key: 'checkbox-alarm',
			name: 'Alarm',
			type: 'checkbox',
			timeline: false,
			required: false
		},
		{
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
		autoCompleteType: 'search', // search || all || options
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
		autoCompleteType: 'search', // search || all | options
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
		autoCompleteType: 'options', // search || all || options
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
			value: true,
			text: 'Yes'
		}, {
			value: false,
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
		autoCompleteType: 'options', // search || all || options
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


	addressQuestionTemplate: [{
		key: 'addressLine1',
		label: 'Address Line 1',
		type: 'text',
		required: true,
		order: 0,
		validators: []
	},
	{
		key: 'addressLine2',
		label: 'Address Line 2',
		type: 'text',
		required: true,
		order: 0,
		validators: []
	},
	{
		key: 'area',
		label: 'Town',
		type: 'autocomplete',
		serviceUrl: 'motor/reference/town/',
		autoCompleteType: 'search', // search || all || options
		required: true,
		disabled: false,
		// value: { id: 'Employed', text: 'Employed' },
		order: 2,
		validators: []
	},
	{
		key: 'county',
		label: 'County',
		type: 'autocomplete',
		serviceUrl: 'motor/reference/county/',
		autoCompleteType: 'linked', // search || all || options || linked
		link: 'area',
		trigger: {
			name: 'disabledBasedOnKey',
			key: 'area'
		},
		required: true,
		disabled: false,
		// value: { id: 'Employed', text: 'Employed' },
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
	}],

	carQuestions: [
		{
			key: 'dateOfRegistration',
			label: 'Date of Registration',
			type: 'date',
			required: true,
			disabled: false,
			// value: { id: 'Employed', text: 'Employed' },
			order: 0,
			validators: []
		},
		{
			key: 'carMake',
			label: 'Car Make',
			type: 'autocomplete',
			serviceUrl: 'motor/reference/car/make',
			autoCompleteType: 'search', // search || all || options || linked
			required: true,
			disabled: false,
			// value: { id: 'Employed', text: 'Employed' },
			order: 1,
			validators: []
		},
		{
			key: 'carModel',
			label: 'Car Model',
			type: 'autocomplete',
			serviceUrl: 'motor/reference/car/model',
			autoCompleteType: 'search', // search || all || options || linked
			required: true,
			disabled: false,
			// value: { id: 'Employed', text: 'Employed' },
			order: 2,
			validators: []
		},
		{
			key: 'engineSize',
			label: 'Engine Size?',
			type: 'dropdown',
			options: ['0cc - 1499cc', '1500cc - 1999cc', '2000cc - 2499cc', '2500cc - 2999cc', '3000cc - 3449cc', '3500cc - 3999cc', '4000cc - 4449cc', '4500cc - 4999cc', '4500cc - 4999cc'],
			required: true,
			order: 3,
			validators: []
		},
		{
			key: 'exactModel',
			label: 'Car Model?',
			type: 'autocomplete',
			serviceUrl: 'motor/reference/car/exactModel',
			autoCompleteType: 'search', // search || all || options || linked
			required: true,
			disabled: false,
			// value: { id: 'Employed', text: 'Employed' },
			order: 4,
			validators: []
		},
		{
			key: 'dateOrPurchase',
			label: 'Date of Purchase',
			type: 'date',
			required: true,
			disabled: false,
			// value: { id: 'Employed', text: 'Employed' },
			order: 5,
			validators: []
		},
		{
			key: 'currentValue',
			label: 'Current Value',
			type: 'currency',
			required: true,
			disabled: false,
			// value: { id: 'Employed', text: 'Employed' },
			order: 6,
			validators: []
		},
		{
			key: 'kilometersPerYear',
			label: 'How many kilometres do you drive in a year?',
			type: 'tel',
			required: true,
			disabled: false,
			// value: { id: 'Employed', text: 'Employed' },
			order: 7,
			validators: []
		},
		{
			key: 'securityFeatures',
			type: 'group',
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
			label: 'County',
			type: 'autocomplete',
			serviceUrl: 'motor/reference/county/',
			autoCompleteType: 'search', // search || all || options || linked
			required: true,
			disabled: false,
			// value: { id: 'Employed', text: 'Employed' },
			order: 9,
			validators: []
		},
		{
			key: 'carKeptOvernight',
			label: 'County',
			type: 'autocomplete',
			serviceUrl: 'motor/reference/county/',
			autoCompleteType: 'search', // search || all || options || linked
			required: true,
			disabled: false,
			// value: { id: 'Employed', text: 'Employed' },
			order: 10,
			validators: []
		}],

}

export const PAGES = [{
	id: 'pre',
	title: 'Pre',
	order: 0,
	uiOptions: {
		nextPage: 'details'
	},
	sections: [{
		id: 'pre-default',
		type: 'default',
		fields: QUESTIONS.pre
	}]
}, {
	id: 'details',
	title: 'Details',
	order: 1,
	uiOptions: {
		nextPage: 'address',
		prevPage: 'pre'
	},
	templates: {
		additionalDriver: {
			type: 'default',
			additional: true,
			hasQuestionsByDefault: true,
			fields: QUESTIONS.details
		}
	},
	sections: [{
		id: 'details-default',
		type: 'default',
		title: 'Primary Driver',
		fields: QUESTIONS.details
	}]
},

{
	id: 'address',
	title: 'Addresss',
	order: 1,
	uiOptions: {
		nextPage: 'car',
		prevPage: 'details'
	},
	sections: [{
		id: 'address-default',
		type: 'address',
		title: 'Primary Driver',
		fields: [{
			key: 'address',
			type: 'group',
			isComplete: true,
			fields: QUESTIONS.addressQuestionTemplate
		}]
	}]

},
{
	id: 'car',
	title: 'Car',
	order: 1,
	uiOptions: {
		nextPage: 'address',
		prevPage: 'licence'
	},
	sections: [{
		id: 'car-default',
		type: 'car',
		title: 'Primary Driver',
		fields: QUESTIONS.carQuestions
	}]

},


{
	id: 'licence',
	title: 'Licence',
	order: 1,
	uiOptions: {
		nextPage: 'cover',
		prevPage: 'car'
	},
	templates: {
		additionalDriver: {
			type: 'default',
			additional: true,
			hasQuestionsByDefault: true,
			fields: QUESTIONS.licence
		},
	},
	sections: [{
		id: 'licence-default',
		type: 'default',
		title: 'Primary Driver',
		fields: QUESTIONS.licence
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
		fields: QUESTIONS.cover
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
		// Group Question
		additionalDriver: {
			type: 'group',
			userHasClaim: null,
			additional: true,
			fields: QUESTIONS.claims
		},
	},
	sections: [{
		id: 'claim-primary-driver',
		title: 'Primary Driver',
		userHasClaim: null,
		type: 'claim',
		fields: [
			// {
			// 	key: '0',
			// 	type: 'claim',
			// 	isComplete: true,
			// 	fields: QUESTIONS.claimWithValues
			// }
		]
	}]
}, {
	id: 'penalties',
	title: 'Penalty Points',
	order: 1,
	uiOptions: {
		prevPage: 'claims'
	},
	templates: {
		// Group Question
		additionalDriver: {
			type: 'group',
			title: 'Primary Driver',
			userHasPenalty: null,
			additional: true,
			fields: QUESTIONS.penalties
		},
	},
	sections: [{
		id: 'penalty-primary-driver',
		title: 'Primary Driver',
		userHasPenalty: null,
		type: 'penalty',
		fields: [
			// {
			// 	key: '0',
			// 	type: 'penalty',
			// 	isComplete: true,
			// 	fields: QUESTIONS.penaltiesWithValues
			// }
		]
	},]
}
];

export const CONFIG = {
	stages: [{
		id: 'quotation',
		title: 'quotation',
		pages: PAGES
	}]
}