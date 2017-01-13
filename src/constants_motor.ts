export const QUESTIONS = {

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
			value: 'Mr',
			text: 'Mr'
		},
		{
			value: 'Mrs',
			text: 'Mrs'
		},
		{
			value: 'Miss',
			text: 'Miss'
		},
		{
			value: 'Ms',
			text: 'Ms'
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
		options: ['Employed', 'Household Duties', 'Retired', 'Self Employed', 'Unemployed'],
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
		autoCompleteType: 'search', // search || all || options
		required: true,
		disabled: false,
		// value: { id: 'Employed', text: 'Employed' },
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
		autoCompleteType: 'search', // search || all | options
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
			value: 'Yes',
			text: 'Yes'
		}, {
			value: 'No',
			text: 'No'
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
		options: [{
			value: true,
			text: 'Yes'
		}, {
			value: false,
			text: 'No'
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
			value: true,
			text: 'Yes'
		}, {
			value: false,
			text: 'No'
		}],
		required: true,
		uiOptions: {
			summaryTitle: 'Named Driver'
		}
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
		options: ['AXA', 'Irish Learners Permit', 'Full EU Licence', 'Non-EU Licence'],
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
		validators: [],
		uiOptions: {
			summaryTitle: 'Location no claims bonus was earned'
		}
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
			value: true,
			text: 'Yes'
		}, {
			value: false,
			text: 'No'
		}],
		required: true,
		uiOptions: {
			summaryTitle: 'Policy Start Date'
		}
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
		uiOptions: {
			summaryTitle: 'Level of Cover'
		}
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
		uiOptions: {
			summaryTitle: 'Level of no claims bonus'
		}
	}],


	licence: [{
		key: 'typeOfLicence',
		label: 'What licence do you hold?',
		type: 'dropdown',
		options: ['Full Irish Licence', 'Irish Learners Permit', 'Full EU Licence', 'Non-EU Licence'],
		required: true,
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
		autoCompleteType: 'search', // search || all || options
		required: true,
		disabled: false,
		// value: { id: 'Employed', text: 'Employed' },
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
		autoCompleteType: 'linked', // search || all || options || linked
		link: 'area',
		trigger: {
			name: 'disabledBasedOnKey',
			expectedType: 'object',
			key: 'area'
		},
		required: true,
		disabled: false,
		// value: { id: 'Employed', text: 'Employed' },
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
		options: ['Accident', 'Accidental Damage', 'Fire', 'Malicious Damage As A Result Of Theft', 'Personal Accident', 'Personal Effects', 'Theft', 'Third Party', 'Vandalism', 'Windscreen'],
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
		options: [{
			value: 'Yes',
			text: 'Yes'
		}, {
			value: 'No',
			text: 'No'
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
			value: 'Yes',
			text: 'Yes'
		}, {
			value: 'No',
			text: 'No'
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
		options: ['Accident', 'Accidental Damage', 'Fire', 'Malicious Damage As A Result Of Theft', 'Personal Accident', 'Personal Effects', 'Theft', 'Third Party', 'Vandalism', 'Windscreen'],
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
			value: 'Yes',
			text: 'Yes'
		}, {
			value: 'No',
			text: 'No'
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
					// value: { id: 'Employed', text: 'Employed' },
					order: 0,
					validators: []
				},
				{
					key: 'carMake',
					label: 'Car Make',
					type: 'autocomplete',
					serviceUrl: 'motor/reference/car/make/',
					autoCompleteType: 'linked', // search || all || options || linked
					link: 'primaryCarInformation',
					required: true,
					disabled: false,
					trigger: {
						name: 'disabledBasedOnKey',
						expectedType: 'string',
						key: 'dateOfRegistration'
					},
					// value: { id: 'Employed', text: 'Employed' },
					order: 1,
					validators: []
				},
				{
					key: 'engineSize',
					label: 'Engine Size?',
					type: 'dropdown',
					options: ['0cc - 1499cc', '1500cc - 1999cc', '2000cc - 2499cc', '2500cc - 2999cc', '3000cc - 3449cc', '3500cc - 3999cc', '4000cc - 4449cc', '4500cc - 4999cc', '4500cc - 4999cc'],
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
					autoCompleteType: 'linked', // search || all || options || linked
					link: 'primaryCarInformation',
					required: true,
					disabled: false,
					trigger: {
						name: 'disabledBasedOnKey',
						expectedType: 'object',
						key: 'carMake'
					},
					// value: { id: 'Employed', text: 'Employed' },
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
		fields: QUESTIONS.pre
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
			fields: QUESTIONS.addressQuestionTemplate
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
		fields: QUESTIONS.carQuestions
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
		fields: QUESTIONS.cover
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
		fields: QUESTIONS.pre
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
			fields: QUESTIONS.details
		}
	},
	sections: [{
		id: 'details-default',
		type: 'default',
		title: 'Primary Driver',
		fields: QUESTIONS.details
	}]
}]

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
]

const SUMMARY_PAGES = [{
	id: 'summary',
	uiOptions: {
		prevPage: 'choose-your-payment',
		isVisible: true,
		isTitleHidden: true,
	},
}]


const TERMS_AND_CONDITIONS_PAGES = [{
	id: 'termsConditions',
	uiOptions: {
		prevPage: 'choose-your-payment',
		isVisible: true,
		isTitleHidden: true,
	},
}]

export const CONFIG = {
	stages: [{
		id: 'quotation',
		title: 'Your Quote',
		pages: PAGES,
		isComplete: false,
		uiOptions: {

		}
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
	}, {
		id: 'summary',
		title: 'Summary',
		pages: SUMMARY_PAGES,
		isComplete: false,
		uiOptions: {
			isWide: true,
			isTitleHidden: true,
			isPagesHidden: true
		}
	},
	// {
	// 	id: 'termsConditions',
	// 	title: 'Terms and Conditions',
	// 	pages: TERMS_AND_CONDITIONS_PAGES,
	// 	isComplete: false,
	// 	uiOptions: {
	// 		isWide: true,
	// 		isTitleHidden: true,
	// 		isPagesHidden: true
	// 	}
	// }
	]
}