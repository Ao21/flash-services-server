export const QUESTIONS = {

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
		autoCompleteType: 'all', // search || all || options
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
		autoCompleteType: 'search', // search || all | options
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
			autoCompleteType: 'options', // search || all || options
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
			autoCompleteType: 'options', // search || all || options
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
		autoCompleteType: 'options', // search || all || options
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
		key: 'address',
		label: 'Address',
		type: 'autocomplete',
		autoCompleteType: 'linked', // search || all || options
		serviceUrl: 'motor/reference/address/',
		link: 'area',
		trigger: {
			name: 'disabledBasedOnKey',
			expectedType: 'object',
			key: 'area'
		},
		required: true,
		order: 2,
		validators: [],
		uiOptions: {
			summaryTitle: 'Address line 1'
		}
	},
	{
		key: 'area',
		label: 'Area',
		type: 'autocomplete',
		serviceUrl: 'motor/reference/town/',
		link: 'county',
		autoCompleteType: 'linked', // search || all || options
		required: true,
		disabled: false,
		trigger: {
			name: 'disabledBasedOnKey',
			expectedType: 'object',
			key: 'county'
		},
		order: 1,
		validators: [],
		uiOptions: {
			summaryTitle: 'Town'
		}
	},
	{
		key: 'county',
		label: 'County',
		type: 'dropdown',
		serviceUrl: 'motor/reference/county/',
		autoCompleteType: 'linked', // search || all || options || linked
		required: true,
		options: [{ id: 'Antrim', description: 'Antrim' },
		{ id: 'Armagh', description: 'Armagh' },
		{ id: 'Carlow', description: 'Carlow' },
		{ id: 'Cavan', description: 'Cavan' },
		{ id: 'Clare', description: 'Clare' },
		{ id: 'Cork', description: 'Cork' },
		{ id: 'Derry', description: 'Derry' },
		{ id: 'Donegal', description: 'Donegal' },
		{ id: 'Down', description: 'Down' },
		{ id: 'Dublin', description: 'Dublin' },
		{ id: 'Fermanagh', description: 'Fermanagh' },
		{ id: 'Galway', description: 'Galway' },
		{ id: 'Kerry', description: 'Kerry' },
		{ id: 'Kildare', description: 'Kildare' },
		{ id: 'Kilkenny', description: 'Kilkenny' },
		{ id: 'Laois', description: 'Laois' },
		{ id: 'Leitrim', description: 'Leitrim' },
		{ id: 'Limerick', description: 'Limerick' },
		{ id: 'Longford', description: 'Longford' },
		{ id: 'Louth', description: 'Louth' },
		{ id: 'Mayo', description: 'Mayo' },
		{ id: 'Meath', description: 'Meath' },
		{ id: 'Monaghan', description: 'Monaghan' },
		{ id: 'Offaly', description: 'Offaly' },
		{ id: 'Roscommon', description: 'Roscommon' },
		{ id: 'Sligo', description: 'Sligo' },
		{ id: 'Tipperary', description: 'Tipperary' },
		{ id: 'Tyrone', description: 'Tyrone' },
		{ id: 'Waterford', description: 'Waterford' },
		{ id: 'Westmeath', description: 'Westmeath' },
		{ id: 'Wexford', description: 'Wexford' },
		{ id: 'Wicklow', description: 'Wicklow' }],
		disabled: false,
		order: 0,
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
					autoCompleteType: 'linked', // search || all || options || linked
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
					autoCompleteType: 'linked', // search || all || options || linked
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
					autoCompleteType: 'linked', // search || all || options || linked
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
					autoCompleteType: 'linked', // search || all || options || linked
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
			autoCompleteType: 'search', // search || all || options || linked
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
			autoCompleteType: 'search', // search || all || options || linked
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

}

export const PAGES = [{
	id: 'getting-started',
	title: 'Getting Started',
	order: 0,
	uiOptions: {
		nextPage: 'your-details',
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
	},
	templates: [{
		type: 'default',
		additional: true,
		hasQuestionsByDefault: true,
		fields: QUESTIONS.details

	}],
	sections: [{
		id: 'details-default',
		type: 'default',
		isDriver: true,
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
	},
	sections: [{
		id: 'car-default',
		type: 'car',
		title: 'Primary Driver',
		fields: QUESTIONS.carQuestions
	},
	{
		id: 'car-secondary',
		type: 'car',
		title: 'Second Car',
		fields: QUESTIONS.secondCarQuestions
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
		additional: true,
		hasQuestionsByDefault: true,
		fields: QUESTIONS.licence
	}],
	sections: [{
		id: 'licence-default',
		type: 'default',
		isDriver: true,
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
	},
	templates: [
		// Group Question
		{
			type: 'claim',
			userHasClaim: null,
			additional: true,
			fields: QUESTIONS.claims
		},
	],
	sections: [{
		id: 'claim-primary-driver',
		title: 'Primary Driver',
		userHasClaim: null,
		isDriver: true,
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
	},
	templates: [{
		type: 'penalty',
		title: 'Primary Driver',
		userHasPenalty: null,
		additional: true,
		fields: QUESTIONS.penalties
	}],
	sections: [{
		id: 'penalty-primary-driver',
		title: 'Primary Driver',
		userHasPenalty: null,
		isDriver: true,
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
	},
	templates: [{
		type: 'default',
		additional: true,
		hasQuestionsByDefault: true,
		fields: QUESTIONS.details
	}
	],
	sections: [{
		id: 'details-default',
		type: 'default',
		title: 'Primary Driver',
		fields: QUESTIONS.details
	}]
}]

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
]

const SUMMARY_PAGES = [{
	id: 'summary',
	uiOptions: {
		prevPage: 'choose-your-payment',
	},
}]


const TERMS_AND_CONDITIONS_PAGES = [{
	id: 'terms',
	uiOptions: {
		prevPage: 'choose-your-payment',
	},
}]

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
			fields: QUESTIONS.additionalQuestions
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
			fields: QUESTIONS.tokenisation
		}]
	},
	{
		id: 'payment',
		title: 'Payment',
		uiOptions: {
			prevPage: 'tokenisation',
			nextPage: 'confirmation',
		}
	}]


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
]
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
		//{
		// 	id: 'summary',
		// 	title: 'Summary',
		// 	pages: SUMMARY_PAGES,
		// 	isComplete: false,
		// 	uiOptions: {
		// 		isWide: true,
		// 		isPagesHidden: true
		// 	}
		// },
		// {
		// 	id: 'termsConditions',
		// 	title: 'Terms and Conditions',
		// 	pages: TERMS_AND_CONDITIONS_PAGES,
		// 	isComplete: false,
		// 	uiOptions: {
		// 		isWide: true,
		// 		isPagesHidden: true
		// 	}
		// }
	]
}