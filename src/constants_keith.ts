export const KEITH = {
    "stages": [{
        "id": "quotation",
        "isComplete": false,
        "title": "Your Quote",
        "pages": [{
            "id": "getting-started",
            "title": "Getting Started",
            "uiOptions": {
                "isVisible": "true",
                "nextPage": "your-details"
            },
            "order": 0,
            "sections": [{
                "id": "pre-default",
                "type": "default",
                "userHasPenalty": false,
                "userHasClaim": false,
                "isDriver": false,
                "fields": [{
                    "type": "email",
                    "type": "email",
                    "key": "email",
                    "label": "What is your email?",
                    "order": 0,
                    "required": true,
                    "disabled": false
                }, {
                    "type": "counter",
                    "type": "counter",
                    "key": "amountOfDrivers",
                    "label": "How many drivers?",
                    "order": 1,
                    "required": true,
                    "trigger": {
                        "name": "additionalDrivers"
                    },
                    "disabled": false,
                    "value": 1
                }, {
                    "type": "questionText",
                    "type": "questionText",
                    "key": "termsConditions",
                    "label": "Terms and Conditions",
                    "order": 2,
                    "timeline": false,
                    "disabled": false,
                    "content": "By providing the requested data, you consent to AA's Data Protection and Privacy Policy and to AA using it for administration and keeping you informed by mail, telephone, email and SMS of other products and services from us. By proceeding, you consent to & confirm that you have read and accepted the AA Data Protection & Privacy Policy and the AA Terms & Conditions"
                }]
            }]
        }, {
            "id": "your-details",
            "title": "Details",
            "uiOptions": {
                "isVisible": "true",
                "nextPage": "your-penalties",
                "prevPage": "getting-started"
            },
            "order": 1,
            "sections": [{
                "id": "details-default",
                "title": "Primary Driver",
                "type": "default",
                "userHasPenalty": false,
                "userHasClaim": false,
                "isDriver": true,
                "fields": [{
                    "type": "radio",
                    "type": "radio",
                    "key": "title",
                    "label": "Title",
                    "order": 0,
                    "required": true,
                    "disabled": false,
                    "options": [{
                        "id": "Mr",
                        "description": "Mr"
                    }, {
                        "id": "Mrs",
                        "description": "Mrs"
                    }, {
                        "id": "Miss",
                        "description": "Miss"
                    }, {
                        "id": "Ms",
                        "description": "Ms"
                    }]
                }, {
                    "type": "text",
                    "type": "text",
                    "helpId": 214205625,
                    "key": "firstName",
                    "label": "First Name",
                    "order": 0,
                    "required": true,
                    "disabled": false,
                    "placeholder": "John"
                }, {
                    "type": "text",
                    "type": "text",
                    "helpId": 213679469,
                    "key": "lastName",
                    "label": "Last Name",
                    "order": 1,
                    "required": true,
                    "disabled": false,
                    "placeholder": "Snow"
                }, {
                    "type": "date",
                    "type": "date",
                    "helpId": 213685289,
                    "key": "dateOfBirth",
                    "label": "Date Of Birth",
                    "order": 2,
                    "required": true,
                    "validators": ["validDateValidate", "validOverEighteenValidate"],
                    "disabled": false
                }, {
                    "type": "tel",
                    "type": "tel",
                    "helpId": 214224585,
                    "key": "phoneNumber",
                    "label": "Phone Number",
                    "order": 2,
                    "required": true,
                    "validators": ["validPhoneNumberValidate"],
                    "disabled": false
                }, {
                    "type": "dropdown",
                    "type": "dropdown",
                    "key": "typeOfEmployment",
                    "label": "Type of Employment",
                    "order": 2,
                    "required": true,
                    "disabled": false,
                    "options": [{
                        "id": "Employed",
                        "description": "Employed"
                    }, {
                        "id": "HouseholdDuties",
                        "description": "Household Duties"
                    }, {
                        "id": "Retired",
                        "description": "Retired"
                    }, {
                        "id": "SelfEmployed",
                        "description": "Self Employed"
                    }, {
                        "id": "Unemployed",
                        "description": "Unemployed"
                    }]
                }, {
                    "type": "autocomplete",
                    "type": "autocomplete",
                    "key": "occupation",
                    "label": "Occupation",
                    "order": 2,
                    "required": true,
                    "disabled": false,
                    "placeholder": "Select an Occupation",
                    "serviceUrl": "occupation/",
                    "autoCompleteType": "search"
                }, {
                    "type": "autocomplete",
                    "type": "autocomplete",
                    "key": "business",
                    "label": "Type of Business",
                    "order": 2,
                    "required": true,
                    "trigger": {
                        "key": "occupation",
                        "name": "occupation"
                    },
                    "disabled": false,
                    "placeholder": "Select an Area of Business",
                    "serviceUrl": "occupation/",
                    "autoCompleteType": "search"
                }, {
                    "type": "radio",
                    "type": "radio",
                    "key": "livedOutsideIreland",
                    "label": "Have you lived outside the Republic of Ireland or the UK in the last 12 months?",
                    "order": 2,
                    "required": true,
                    "disabled": false,
                    "options": [{
                        "id": true,
                        "description": "Yes"
                    }, {
                        "id": false,
                        "description": "No"
                    }]
                }]
            }],
            "templates": [{
                "type": "default",
                "hasQuestionsByDefault": true,
                "additional": true,
                "userHasPenalty": false,
                "userHasClaim": false,
                "fields": [{
                    "type": "radio",
                    "type": "radio",
                    "key": "title",
                    "label": "Title",
                    "order": 0,
                    "required": true,
                    "disabled": false,
                    "options": [{
                        "text": "Mr",
                        "value": "Mr"
                    }, {
                        "text": "Mrs",
                        "value": "Mrs"
                    }, {
                        "text": "Miss",
                        "value": "Miss"
                    }, {
                        "text": "Ms",
                        "value": "Ms"
                    }]
                }, {
                    "type": "text",
                    "type": "text",
                    "helpId": 214205625,
                    "key": "firstName",
                    "label": "First Name",
                    "order": 0,
                    "required": true,
                    "disabled": false,
                    "placeholder": "John"
                }, {
                    "type": "text",
                    "type": "text",
                    "helpId": 213679469,
                    "key": "lastName",
                    "label": "Last Name",
                    "order": 1,
                    "required": true,
                    "disabled": false,
                    "placeholder": "Snow"
                }, {
                    "type": "date",
                    "type": "date",
                    "helpId": 213685289,
                    "key": "dateOfBirth",
                    "label": "Date Of Birth",
                    "order": 2,
                    "required": true,
                    "validators": ["validDateValidate", "validOverEighteenValidate"],
                    "disabled": false
                }, {
                    "type": "tel",
                    "type": "tel",
                    "helpId": 214224585,
                    "key": "phoneNumber",
                    "label": "Phone Number",
                    "order": 2,
                    "required": true,
                    "validators": ["validPhoneNumberValidate"],
                    "disabled": false
                }, {
                    "type": "dropdown",
                    "type": "dropdown",
                    "key": "typeOfEmployment",
                    "label": "Type of Employment",
                    "order": 2,
                    "required": true,
                    "disabled": false,
                    "options": [{
                        "id": "Employed",
                        "description": "Employed"
                    }, {
                        "id": "HouseholdDuties",
                        "description": "Household Duties"
                    }, {
                        "id": "Retired",
                        "description": "Retired"
                    }, {
                        "id": "SelfEmployed",
                        "description": "Self Employed"
                    }, {
                        "id": "Unemployed",
                        "description": "Unemployed"
                    }]
                }, {
                    "type": "autocomplete",
                    "type": "autocomplete",
                    "key": "occupation",
                    "label": "Occupation",
                    "order": 2,
                    "required": true,
                    "disabled": false,
                    "placeholder": "Select an Occupation",
                    "serviceUrl": "occupation/",
                    "autoCompleteType": "search"
                }, {
                    "type": "autocomplete",
                    "type": "autocomplete",
                    "key": "business",
                    "label": "Type of Business",
                    "order": 2,
                    "required": true,
                    "trigger": {
                        "key": "occupation",
                        "name": "occupation"
                    },
                    "disabled": false,
                    "placeholder": "Select an Area of Business",
                    "serviceUrl": "occupation/",
                    "autoCompleteType": "search"
                }, {
                    "type": "radio",
                    "type": "radio",
                    "key": "livedOutsideIreland",
                    "label": "Have you lived outside the Republic of Ireland or the UK in the last 12 months?",
                    "order": 2,
                    "required": true,
                    "disabled": false,
                    "options": [{
                        "text": "Yes",
                        "value": "true"
                    }, {
                        "text": "No",
                        "value": "false"
                    }]
                }]
            }]
        }, {
            "id": "your-penalties",
            "title": "Penalty Points",
            "uiOptions": {
                "isVisible": "true",
                "nextPage": "your-licence",
                "prevPage": "your-details"
            },
            "order": 1,
            "sections": [{
                "id": "penalty-primary-driver",
                "title": "Primary Driver",
                "type": "penalty",
                "userHasPenalty": false,
                "userHasClaim": false,
                "isDriver": true
            }],
            "templates": [{
                "id": "penalty-template",
                "title": "Primary Driver",
                "type": "penalty",
                "hasQuestionsByDefault": false,
                "additional": true,
                "userHasPenalty": false,
                "userHasClaim": false,
                "fields": [{
                    "type": "date",
                    "type": "date",
                    "key": "dateOfPenalty",
                    "label": "When was it?",
                    "order": 0,
                    "required": true,
                    "validators": ["validDateValidate", "validLastFiveYearsValidate"],
                    "disabled": false
                }, {
                    "type": "dropdown",
                    "type": "dropdown",
                    "key": "reasonForPenalty",
                    "label": "What was the reason?",
                    "order": 0,
                    "required": true,
                    "disabled": false,
                    "options": [{
                        "id": "ExceedingWeight",
                        "description": "Exceeding weight"
                    }, {
                        "id": "NoTestCertificate",
                        "description": "No test cert"
                    }, {
                        "id": "NoLicence",
                        "description": "No licence"
                    }, {
                        "id": "TryingToGetLicenceWhileDisqualified",
                        "description": "Trying to get licence while disqualified"
                    }, {
                        "id": "FailureToProduceLicence",
                        "description": "Failure to produce licence"
                    }, {
                        "id": "ExceedingSpeedLimit",
                        "description": "Exceeding speed limit"
                    }, {
                        "id": "DrivingVehicleWhenUnfit",
                        "description": "Driving vehicle when unfit"
                    }, {
                        "id": "CarelessDriving",
                        "description": "Careless driving"
                    }, {
                        "id": "DrivingDefectiveVehicle",
                        "description": "Driving defective vehicle"
                    }, {
                        "id": "ParkingInDangerousPosition",
                        "description": "Parking in dangerous position"
                    }, {
                        "id": "NoInsurance",
                        "description": "No insurance"
                    }, {
                        "id": "FailingToStopAtWarden",
                        "description": "Failing to stop at warden"
                    }, {
                        "id": "BreachOfDutyAtAccident",
                        "description": "Breach of duty at accident"
                    }, {
                        "id": "FailingToStopForGarda",
                        "description": "Failing to stop for Garda"
                    }, {
                        "id": "GivingFalseDetailsForLicence",
                        "description": "Giving false details for licence"
                    }, {
                        "id": "VehicleExceedsWidthLimit",
                        "description": "Vehicle exceeds width limit"
                    }, {
                        "id": "VehicleExceedsLengthLimit",
                        "description": "Vehicle exceeds length limit"
                    }, {
                        "id": "WornTyres",
                        "description": "Worn tyres"
                    }, {
                        "id": "PoorVisibilityOfRoad",
                        "description": "Poor visibility of road"
                    }, {
                        "id": "WindscreenNotSafetyGlass",
                        "description": "Windscreen not safety glass"
                    }, {
                        "id": "PoorWindscreenWipers",
                        "description": "Poor windscreen wipers"
                    }, {
                        "id": "NoDrivingMirror",
                        "description": "No driving mirror"
                    }, {
                        "id": "PoorBrakes",
                        "description": "Poor brakes"
                    }, {
                        "id": "PoorSeatBeltAnchoragePoints",
                        "description": "Poor seat belt anchorage points"
                    }, {
                        "id": "NoSeatBelts",
                        "description": "Driver of car or goods vehicle not wearing safety belt"
                    }, {
                        "id": "NoCrashHelmetOnMotorbike",
                        "description": "No crash helmet on motorbike"
                    }, {
                        "id": "NoPassengerCrashHelmet",
                        "description": "No passenger crash helmet"
                    }, {
                        "id": "TruckWithNoRearCrashBar",
                        "description": "Truck with no rear crash bar"
                    }, {
                        "id": "TruckWithNoSideCrashBar",
                        "description": "Truck with no side crash bar"
                    }, {
                        "id": "DrivingWithoutSeatBelt",
                        "description": "Driver of car or goods vehicle not wearing safety belt"
                    }, {
                        "id": "RearPassengersWithNoBelt",
                        "description": "Driver permitting person under 17 years of age to occupy a seat when not wearing safety belt"
                    }, {
                        "id": "NoSpeedLimitingDevice",
                        "description": "No speed limiting device"
                    }, {
                        "id": "SpeedLimiterNotCalibrated",
                        "description": "Speed limiter not calibrated"
                    }, {
                        "id": "UnsealedSpeedLimiter",
                        "description": "Unsealed speed limiter"
                    }, {
                        "id": "UsingMobilePhoneWhileDriving",
                        "description": "Using mobile phone while driving"
                    }, {
                        "id": "VehicleNotEquippedWithLamps",
                        "description": "Vehicle not equipped with lamps"
                    }, {
                        "id": "TrailerNotEquippedWithLamps",
                        "description": "Trailer  not equipped with lamps"
                    }, {
                        "id": "NonUseOfProjectingRoadLamps",
                        "description": "Non use of projecting road lamps"
                    }, {
                        "id": "NonUseOfTrailerMarkerLamps",
                        "description": "Non use of trailer marker lamps"
                    }, {
                        "id": "NoInternalLightingInPSV",
                        "description": "No internal lighting in PSV"
                    }, {
                        "id": "NoIndicators",
                        "description": "No indicators"
                    }, {
                        "id": "BreakingSpeedRestriction",
                        "description": "Breaking speed restriction"
                    }, {
                        "id": "FailureToYieldRightOfWay",
                        "description": "Failure to yield right of way"
                    }, {
                        "id": "FailureToDriveOnLeft",
                        "description": "Failure to drive on left"
                    }, {
                        "id": "DangerousOvertaking",
                        "description": "Dangerous overtaking"
                    }, {
                        "id": "PoorDrivingAtJunction",
                        "description": "Poor driving at junction"
                    }, {
                        "id": "PoorReversing",
                        "description": "Poor reversing"
                    }, {
                        "id": "BreachOfFootwayDrivingRules",
                        "description": "Breach of footway driving rules"
                    }, {
                        "id": "FailureToEnterRoundaboutOnLeft",
                        "description": "Failure to enter roundabout on left"
                    }, {
                        "id": "DrivingAlongOrAcrossMedianStrip",
                        "description": "Driving along or across median strip"
                    }, {
                        "id": "FailureToComplyWithGardaSignals",
                        "description": "Failure to comply with Garda signals"
                    }, {
                        "id": "FailureToStopAtStopSign",
                        "description": "Failure to stop at stop sign"
                    }, {
                        "id": "FailureToComplyWithTrafficSign",
                        "description": "Failure to comply with traffic sign"
                    }, {
                        "id": "FailureToKeepLeftAtCertainSigns",
                        "description": "Failure to keep left at certain signs"
                    }, {
                        "id": "CrossingWhiteLine",
                        "description": "Crossing white line"
                    }, {
                        "id": "EnteringMarkedHatchedArea",
                        "description": "Entering marked hatched area"
                    }, {
                        "id": "BreachOfLaneMarkings",
                        "description": "Breach of lane markings"
                    }, {
                        "id": "FailureToObeyTrafficLights",
                        "description": "Failure to obey traffic lights"
                    }, {
                        "id": "FailureToObeyLevelCrossingLights",
                        "description": "Failure to obey level crossing lights"
                    }, {
                        "id": "DrivingAgainstMotorwayFlow",
                        "description": "Driving against motorway flow"
                    }, {
                        "id": "DrivingOnBannedAreasOfMotorway",
                        "description": "Driving on banned areas of motorway"
                    }, {
                        "id": "DrivingVehicleRestrictedTo50MphOnOutsideLaneOfMotorway",
                        "description": "Driving vehicle restricted to 50 mph on outside lane of motorway"
                    }, {
                        "id": "FailureToHeedHeightRestrictions",
                        "description": "Failure to heed height restrictions"
                    }, {
                        "id": "ProvisionalLicenceHolderDrivingWithoutSupervisionOfQualifiedDriver",
                        "description": "Provisional licence holder driving without supervision of qualified driver"
                    }, {
                        "id": "Other",
                        "description": "Other"
                    }, {
                        "id": "DrivingOnACycleTrack",
                        "description": "Driving on a cycle track"
                    }, {
                        "id": "DrivingVehicleBeforeRemedyingDangerousDefect",
                        "description": "Driving vehicle before remedying dangerous defect"
                    }, {
                        "id": "IllegalEntryOntoAOneWayStreet",
                        "description": "Illegal entry onto a one-way street"
                    }, {
                        "id": "FailureToComplyWithProhibitoryTraffiSigns",
                        "description": "Failure to comply with prohibitory traffic signs"
                    }, {
                        "id": "FailureToYieldRightOfWayAtAYieldSignYieldLine",
                        "description": "Failure to yield right of way at a yield sign/ yield line"
                    }, {
                        "id": "InsurerPenaltyPointUpdate",
                        "description": "Insurer Penalty Point Update"
                    }, {
                        "id": "UsingVehicleWithoutCertificateOfRoadworthiness",
                        "description": "Using vehicle without certificate of roadworthiness"
                    }, {
                        "id": "FailureToLeaveAppropriateDistanceBetweenYouAndTheVehicleInFront",
                        "description": "Failure to leave appropriate distance between you and the vehicle in front"
                    }, {
                        "id": "DrivingWithoutReasonableConsideration",
                        "description": "Driving without reasonable consideration"
                    }, {
                        "id": "DrinkDrivingOffencesDependingOnLevelOfAlcoholPresentInTheBlood",
                        "description": "Drink Driving Offences (depending on level of alcohol present in the blood)"
                    }, {
                        "id": "DriverOfCarOrGoodsVehiclePermittingChildUnder3YearsOfAget",
                        "description": "Driver of car or goods vehicle permitting child under 3 years of age to travel in without being restrainted by appropriate child restraint"
                    }, {
                        "id": "DriverOfCarOrGoodsVehiclePermittingChildOver3YearsOfAgeTo",
                        "description": "Driver of car or goods vehicle permitting child over 3 years of age to travel in without being restrainted by appropriate child restraint"
                    }, {
                        "id": "DriverOfCarOrGoodsVehiclePermittingChildToBeRestrainedByRe",
                        "description": "Driver of car or goods vehicle permitting child to be restrained by rearward facing child restraint fitted to a seat protected by active frontal air-bag "
                    }, {
                        "id": "DriverOfBusNotWearingSafetyBelt",
                        "description": "Driver of bus not wearing safety belt"
                    }, {
                        "id": "UsingVehicleWhoseWeightUnLadenExceedsMaximumPermittedWe",
                        "description": "Using vehicle - (a) whose weight un-laden exceeds maximum permitted weight"
                    }, {
                        "id": "ContraventionOfBanOnUTurns",
                        "description": "Contravention of ban on U-turns"
                    }, {
                        "id": "ContraventionOfRulesForUseOfMiniRoundabouts",
                        "description": "Contravention of rules for use of mini roundabouts"
                    }, {
                        "id": "FailureToDisplayLPlateOrLTabard",
                        "description": "Failure to display L-Plate or L tabard"
                    }, {
                        "id": "FailureToDisplayNPlateOrNTabard",
                        "description": "Failure to display N Plate or N tabard"
                    }, {
                        "id": "GrossVehicleWeightExceedsMaximumSignDisplayed",
                        "description": "Gross vehicle weight exceeds maximum sign displayed"
                    }, {
                        "id": "LearnerPermitHolderDrivingUnaccompaniedByQualifiedPerson",
                        "description": "Learner permit holder driving unaccompanied by qualified person"
                    }, {
                        "id": "LengthOfVehicleExceedsMaximumSignDisplayed",
                        "description": "Length of vehicle exceeds maximum sign displayed"
                    }, {
                        "id": "NoSpeedLimitationDeviceNonCompliantSpeedLimitationDevice",
                        "description": "No speed limitation device / non-compliant speed limitation device"
                    }, {
                        "id": "PassingTrafficLaneControlSignNotInAccordanceWithSuchSign",
                        "description": "Passing traffic lane control sign not in accordance with such sign"
                    }, {
                        "id": "ProceedingBeyondNoEntryToVehiclesSign",
                        "description": "Proceeding beyond no entry to vehicles sign"
                    }, {
                        "id": "UsingModifiedAlteredVehicleWhereAuthorisationPlateIsInaccurate",
                        "description": "Using modified/altered vehicle where authorisation plate is inaccurate"
                    }, {
                        "id": "UsingVehicleInAPublicPlaceWithoutAnAuthorisationPlate",
                        "description": "Using vehicle in a public place without an authorisation plate"
                    }, {
                        "id": "VehicleAxleLoadingWeightExceedsMaximumSignDisplayed",
                        "description": "Vehicle axle loading weight exceeds maximum sign displayed"
                    }, {
                        "id": "WidthOfVehicleExceedsMaximumSignDisplayed",
                        "description": "Width of vehicle exceeds maximum sign displayed"
                    }]
                }, {
                    "type": "text",
                    "type": "text",
                    "key": "howManyPoints",
                    "label": "How many points?",
                    "order": 0,
                    "required": true,
                    "disabled": false,
                    "placeholder": "How Much"
                }]
            }]
        }, {
            "id": "your-licence",
            "title": "Licence",
            "uiOptions": {
                "isVisible": "true",
                "nextPage": "your-claims",
                "prevPage": "your-penalties"
            },
            "order": 1,
            "sections": [{
                "id": "licence-default",
                "title": "Primary Driver",
                "type": "default",
                "userHasPenalty": false,
                "userHasClaim": false,
                "isDriver": true,
                "fields": [{
                    "type": "dropdown",
                    "type": "dropdown",
                    "uiOptions": {
                        "summaryTitle": "Type of Licence"
                    },
                    "key": "typeOfLicence",
                    "label": "What licence do you hold?",
                    "order": 0,
                    "required": true,
                    "disabled": false,
                    "options": [{
                        "id": "Foreign",
                        "description": "Foreign"
                    }, {
                        "id": "FullEuropeanUnion",
                        "description": "Full EU"
                    }, {
                        "id": "FullIrish",
                        "description": "Full Irish"
                    }, {
                        "id": "FullUnitedKingdom",
                        "description": "Full UK"
                    }, {
                        "id": "InternationalLicence",
                        "description": "International Licence"
                    }, {
                        "id": "LicenceRevoked",
                        "description": "Licence Revoked"
                    }, {
                        "id": "NoLicenceEverHeld",
                        "description": "No Licence Ever Held"
                    }, {
                        "id": "ProvisionalIrish",
                        "description": "Provisional Irish"
                    }, {
                        "id": "LearnerPermit",
                        "description": "Learner Permit"
                    }]
                }, {
                    "type": "slider",
                    "type": "slider",
                    "uiOptions": {
                        "summaryTitle": "Amount of years you held your licence"
                    },
                    "key": "howLongLicenceHeld",
                    "label": "How long have you held your licence?",
                    "order": 1,
                    "required": true,
                    "disabled": false,
                    "value": 1,
                    "max": 9,
                    "min": 0
                }, {
                    "type": "autocomplete",
                    "type": "autocomplete",
                    "uiOptions": {
                        "summaryTitle": "Where did you earn your licence"
                    },
                    "key": "whereEarnLicence",
                    "label": "Where did you earn your licence",
                    "order": 2,
                    "required": true,
                    "disabled": false,
                    "serviceUrl": "referenceData/country/",
                    "autoCompleteType": "search"
                }]
            }],
            "templates": [{
                "id": "licence-template",
                "type": "default",
                "hasQuestionsByDefault": true,
                "additional": true,
                "userHasPenalty": false,
                "userHasClaim": false,
                "fields": [{
                    "type": "dropdown",
                    "type": "dropdown",
                    "uiOptions": {
                        "summaryTitle": "Type of Licence"
                    },
                    "key": "typeOfLicence",
                    "label": "What licence do you hold?",
                    "order": 0,
                    "required": true,
                    "disabled": false,
                    "options": [{
                        "id": "Foreign",
                        "description": "Foreign"
                    }, {
                        "id": "FullEuropeanUnion",
                        "description": "Full EU"
                    }, {
                        "id": "FullIrish",
                        "description": "Full Irish"
                    }, {
                        "id": "FullUnitedKingdom",
                        "description": "Full UK"
                    }, {
                        "id": "InternationalLicence",
                        "description": "International Licence"
                    }, {
                        "id": "LicenceRevoked",
                        "description": "Licence Revoked"
                    }, {
                        "id": "NoLicenceEverHeld",
                        "description": "No Licence Ever Held"
                    }, {
                        "id": "ProvisionalIrish",
                        "description": "Provisional Irish"
                    }, {
                        "id": "LearnerPermit",
                        "description": "Learner Permit"
                    }]
                }, {
                    "type": "slider",
                    "type": "slider",
                    "uiOptions": {
                        "summaryTitle": "Amount of years you held your licence"
                    },
                    "key": "howLongLicenceHeld",
                    "label": "How long have you held your licence?",
                    "order": 1,
                    "required": true,
                    "disabled": false,
                    "value": 1,
                    "max": 9,
                    "min": 0
                }, {
                    "type": "autocomplete",
                    "type": "autocomplete",
                    "uiOptions": {
                        "summaryTitle": "Where did you earn your licence"
                    },
                    "key": "whereEarnLicence",
                    "label": "Where did you earn your licence",
                    "order": 2,
                    "required": true,
                    "disabled": false,
                    "serviceUrl": "occupation/",
                    "autoCompleteType": "options"
                }]
            }]
        }, {
            "id": "your-claims",
            "title": "Claims",
            "uiOptions": {
                "nextPage": "your-cover",
                "prevPage": "your-licence",
                "isVisible": "true"
            },
            "order": 1,
            "sections": [{
                "id": "claim-primary-driver",
                "title": "Primary Driver",
                "type": "claim",
                "userHasPenalty": false,
                "userHasClaim": false,
                "isDriver": true
            }],
            "templates": [{
                "id": "claim-template",
                "type": "claim",
                "hasQuestionsByDefault": false,
                "additional": true,
                "userHasPenalty": false,
                "userHasClaim": false,
                "fields": [{
                    "type": "date",
                    "type": "date",
                    "uiOptions": {
                        "summaryTitle": "Date of Claim"
                    },
                    "key": "dateOfClaim",
                    "label": "When was the claim?",
                    "order": 0,
                    "required": true,
                    "validators": ["validDateValidate", "validLastFiveYearsValidate"],
                    "disabled": false
                }, {
                    "type": "dropdown",
                    "type": "dropdown",
                    "uiOptions": {
                        "summaryTitle": "Reason for Claim"
                    },
                    "key": "reasonForClaim",
                    "label": "What was the reason for the claim?",
                    "order": 0,
                    "required": true,
                    "disabled": false,
                    "options": [{
                        "id": "Accident",
                        "description": "Accident"
                    }, {
                        "id": "AccidentalDamage",
                        "description": "Accidental Damage"
                    }, {
                        "id": "Fire",
                        "description": "Fire"
                    }, {
                        "id": "MaliciousDamageAsAResultOfTheft",
                        "description": "Malicious Damage As A Result Of Theft"
                    }, {
                        "id": "PersonalAccident",
                        "description": "Personal Accident"
                    }, {
                        "id": "PersonalEffects",
                        "description": "Personal Effects"
                    }, {
                        "id": "Theft",
                        "description": "Theft"
                    }, {
                        "id": "Vandalism",
                        "description": "Vandalism"
                    }, {
                        "id": "Windscreen",
                        "description": "Windscreen"
                    }, {
                        "id": "ThirdParty",
                        "description": "Third Party"
                    }]
                }, {
                    "type": "currency",
                    "type": "currency",
                    "uiOptions": {
                        "summaryTitle": "Cost of Claim"
                    },
                    "key": "costOfClaim",
                    "label": "Cost of claim",
                    "order": 0,
                    "required": true,
                    "disabled": false,
                    "placeholder": "How Much"
                }, {
                    "type": "radio",
                    "type": "radio",
                    "helpId": 1001,
                    "uiOptions": {
                        "summaryTitle": "Claim Fault"
                    },
                    "key": "customerAtFault",
                    "label": "Were you at fault?",
                    "order": 2,
                    "required": true,
                    "disabled": false,
                    "options": [{
                        "id": true,
                        "description": "Yes"
                    }, {
                        "id": false,
                        "description": "No"
                    }]
                }, {
                    "type": "radio",
                    "type": "radio",
                    "uiOptions": {
                        "summaryTitle": "No Claim Bonus Protected"
                    },
                    "key": "noClaimsBonusProtected",
                    "label": "Was your no claims bonus protected?",
                    "order": 2,
                    "required": true,
                    "disabled": false,
                    "options": [{
                        "id": true,
                        "description": "Yes"
                    }, {
                        "id": false,
                        "description": "No"
                    }]
                }]
            }]
        }, {
            "id": "your-cover",
            "title": "Cover",
            "uiOptions": {
                "nextPage": "your-address",
                "prevPage": "your-claims",
                "isVisible": "true"
            },
            "order": 1,
            "sections": [{
                "id": "cover-default",
                "title": "Primary Driver",
                "type": "default",
                "userHasPenalty": false,
                "userHasClaim": false,
                "isDriver": false,
                "fields": [{
                    "type": "group",
                    "isComplete": false,
                    "type": "group",
                    "key": "drivingExperience",
                    "order": 0,
                    "timeline": false,
                    "disabled": false,
                    "fields": [{
                        "type": "radio",
                        "type": "radio",
                        "helpId": 1001,
                        "uiOptions": {
                            "summaryTitle": "Insured in your own Name"
                        },
                        "key": "insuredInYourOwnName",
                        "label": "Have you been insured previously in your own name in the last two years?",
                        "order": 0,
                        "required": true,
                        "disabled": false,
                        "options": [{
                            "id": true,
                            "description": "Yes"
                        }, {
                            "id": false,
                            "description": "No"
                        }]
                    }, {
                        "type": "radio",
                        "type": "radio",
                        "uiOptions": {
                            "summaryTitle": "Named Driver"
                        },
                        "key": "insuredNamedDriver",
                        "label": "Have you been a named driver on someone else’s policy?",
                        "order": 0,
                        "required": true,
                        "trigger": {
                            "key": "insuredInYourOwnName",
                            "name": "hideBasedOnKey",
                            "isObject": "true"
                        },
                        "disabled": false,
                        "options": [{
                            "id": true,
                            "description": "Yes"
                        }, {
                            "id": false,
                            "description": "No"
                        }]
                    }, {
                        "type": "dropdown",
                        "type": "dropdown",
                        "helpId": 1001,
                        "uiOptions": {
                            "summaryTitle": "On who's policy"
                        },
                        "key": "insuredNamedDriverOnPolicy",
                        "label": "On whose policy",
                        "order": 1,
                        "required": true,
                        "trigger": {
                            "key": "insuredNamedDriver",
                            "name": "showBasedOnKey",
                            "isObject": "true"
                        },
                        "disabled": false,
                        "options": [{
                            "id": "Brother",
                            "description": "Brother"
                        }, {
                            "id": "BrotherInLaw",
                            "description": "Brother in Law"
                        }, {
                            "id": "BusinessPartner",
                            "description": "Business Partner"
                        }, {
                            "id": "CommonLawSpouse",
                            "description": "Common Law Spouse"
                        }, {
                            "id": "Daughter",
                            "description": "Daughter"
                        }, {
                            "id": "DaughterInLaw",
                            "description": "Daughter in Law"
                        }, {
                            "id": "EmployeeOfProposer",
                            "description": "Employee of Proposer"
                        }, {
                            "id": "EmployerOfProposer",
                            "description": "Employer of Proposer"
                        }, {
                            "id": "FatherInLaw",
                            "description": "Father in Law"
                        }, {
                            "id": "MotherInLaw",
                            "description": "Mother in Law"
                        }, {
                            "id": "Parent",
                            "description": "Parent"
                        }, {
                            "id": "Proposer",
                            "description": "Proposer"
                        }, {
                            "id": "Relative",
                            "description": "Relative"
                        }, {
                            "id": "Sister",
                            "description": "Sister"
                        }, {
                            "id": "SisterInLaw",
                            "description": "Sister in Law"
                        }, {
                            "id": "Son",
                            "description": "Son"
                        }, {
                            "id": "SonInLaw",
                            "description": "Son in Law"
                        }, {
                            "id": "Spouse",
                            "description": "Spouse"
                        }, {
                            "id": "Tenant",
                            "description": "Tenant"
                        }, {
                            "id": "Unrelated",
                            "description": "Unrelated"
                        }, {
                            "id": "Partner",
                            "description": "Partner"
                        }, {
                            "id": "Friend",
                            "description": "Friend"
                        }]
                    }, {
                        "type": "dropdown",
                        "type": "dropdown",
                        "uiOptions": {
                            "summaryTitle": "Current Insurance Company"
                        },
                        "key": "insuranceCompany",
                        "label": "Which is your current insurance company?",
                        "order": 2,
                        "required": true,
                        "trigger": {
                            "key1": "insuredInYourOwnName",
                            "key2": "insuredNamedDriver",
                            "name": "showDualKey",
                            "isObject": "true"
                        },
                        "disabled": false,
                        "options": [{
                            "id": "Unspecified",
                            "description": "Unspecified"
                        }, {
                            "id": "AXA",
                            "description": "AXA Insurance"
                        }, {
                            "id": "Allianz",
                            "description": "Allianz"
                        }, {
                            "id": "Zurich",
                            "description": "Zurich"
                        }, {
                            "id": "Aviva",
                            "description": "Aviva"
                        }, {
                            "id": "RSA",
                            "description": "RSA"
                        }, {
                            "id": "Benchmark",
                            "description": "Benchmark Underwriting"
                        }, {
                            "id": "HCL",
                            "description": "Hickey Clarke and Langan"
                        }, {
                            "id": "ICI",
                            "description": "ICI"
                        }, {
                            "id": "AIG",
                            "description": "AIG"
                        }, {
                            "id": "Wrightway",
                            "description": "Wrightway Underwriting"
                        }, {
                            "id": "Prestige",
                            "description": "Prestige Underwriting Services"
                        }, {
                            "id": "GreatLakes",
                            "description": "Great Lakes"
                        }, {
                            "id": "Europa",
                            "description": "Europa General"
                        }, {
                            "id": "KennCo",
                            "description": "KennCo Underwriting"
                        }, {
                            "id": "XSDirect",
                            "description": "XS Direct"
                        }, {
                            "id": "Sertus",
                            "description": "Sertus Underwriting"
                        }, {
                            "id": "Travelers",
                            "description": "Travelers"
                        }, {
                            "id": "Provident",
                            "description": "Provident"
                        }, {
                            "id": "Setanta",
                            "description": "Setanta Insurance"
                        }, {
                            "id": "ARB",
                            "description": "ARB Underwriting"
                        }, {
                            "id": "Ecclesiastical",
                            "description": "Ecclesiastical"
                        }, {
                            "id": "Asgard",
                            "description": "Asgard"
                        }, {
                            "id": "Crest",
                            "description": "Crest"
                        }, {
                            "id": "DAS",
                            "description": "DAS"
                        }, {
                            "id": "JRClare",
                            "description": "JR Clare"
                        }, {
                            "id": "Dolmen",
                            "description": "Dolmen"
                        }, {
                            "id": "FBD",
                            "description": "FBD Insurance"
                        }, {
                            "id": "Finsure",
                            "description": "OBF Insurance Group"
                        }, {
                            "id": "FirstIreland",
                            "description": "First Ireland"
                        }, {
                            "id": "KiddSure",
                            "description": "Kidd Insurances"
                        }, {
                            "id": "Chubb",
                            "description": "Chubb Insurance"
                        }, {
                            "id": "Cigna",
                            "description": "Cigna Insurance"
                        }, {
                            "id": "Generali",
                            "description": "Generali Insurance"
                        }, {
                            "id": "Liberty",
                            "description": "Liberty Underwriting"
                        }, {
                            "id": "Quinn",
                            "description": "Quinn Direct"
                        }, {
                            "id": "Hastings",
                            "description": "Hastings and Co."
                        }, {
                            "id": "Securus",
                            "description": "Securus Insurance"
                        }, {
                            "id": "CoverCentre",
                            "description": "CoverCentre "
                        }, {
                            "id": "Inov8",
                            "description": "Inov8"
                        }, {
                            "id": "Stuart",
                            "description": "EverSure"
                        }, {
                            "id": "LloydsSyndicate",
                            "description": "Lloyds Syndicate"
                        }, {
                            "id": "OneTwoThree",
                            "description": "123.ie"
                        }, {
                            "id": "Novae",
                            "description": "Novae"
                        }, {
                            "id": "Culleton",
                            "description": "Culleton Insurances"
                        }, {
                            "id": "JLT",
                            "description": "Jardine Lloyd Thompson"
                        }, {
                            "id": "MISClaims",
                            "description": "MIS Claims"
                        }, {
                            "id": "MotoristLegalProtection",
                            "description": "Motorist Legal Protection"
                        }, {
                            "id": "GroupPersonalAccident",
                            "description": "Group Personal Accident"
                        }, {
                            "id": "Mapfre",
                            "description": "Mapfre"
                        }, {
                            "id": "Patrona",
                            "description": "Patrona Underwriting"
                        }, {
                            "id": "Axis",
                            "description": "Axis Ltd."
                        }, {
                            "id": "BroadgateUnderwriting",
                            "description": "Broadgate Underwriting"
                        }, {
                            "id": "CatlinUnderwriting",
                            "description": "Catlin Underwriting"
                        }, {
                            "id": "CanopiusUnderwriting",
                            "description": "Canopius Underwriting Ltd"
                        }, {
                            "id": "CGice",
                            "description": "Casualty and General Insurance Company Europe"
                        }, {
                            "id": "CollingwoodInsurance",
                            "description": "Collingwood Insurance Company Ltd"
                        }, {
                            "id": "EliteInsuranceCompany",
                            "description": "Elite Insurance Company Ltd"
                        }, {
                            "id": "HisCox",
                            "description": "HisCox"
                        }, {
                            "id": "HSBEngineeringInsurance",
                            "description": "HSB Engineering Insurance Ltd"
                        }, {
                            "id": "HathawayAndCope",
                            "description": "Hathaway and Cope"
                        }, {
                            "id": "SagicorAtLloyds",
                            "description": "Sagicor At Lloyds"
                        }, {
                            "id": "WRBerkley",
                            "description": "W. R. Berkley"
                        }, {
                            "id": "CrashServices",
                            "description": "Crash Services"
                        }, {
                            "id": "AlliedRiskManagement",
                            "description": "Allied Risk Management"
                        }, {
                            "id": "Footprint",
                            "description": "Footprint"
                        }, {
                            "id": "Bump",
                            "description": "Bump"
                        }, {
                            "id": "ChartisInsurance",
                            "description": "Chartis Insurance"
                        }, {
                            "id": "AXABroker",
                            "description": "AXA Broker"
                        }, {
                            "id": "AXADirect",
                            "description": "AXA Direct"
                        }, {
                            "id": "Cornhill",
                            "description": "Cornhill"
                        }, {
                            "id": "FCRebrokedAXABroker",
                            "description": "FC Rebroked AXA Broker"
                        }, {
                            "id": "FirstCallDirect",
                            "description": "First Call Direct"
                        }, {
                            "id": "OneDirect",
                            "description": "One Direct"
                        }, {
                            "id": "PatronaUnderwritingLtd",
                            "description": "Patrona Underwriting Ltd"
                        }, {
                            "id": "ProvidentInsurance",
                            "description": "Provident Insurance"
                        }, {
                            "id": "Torch",
                            "description": "Torch"
                        }, {
                            "id": "UnlistedInsurerNotIreland",
                            "description": "Unlisted Insurer - Not Ireland"
                        }, {
                            "id": "UnlistedInsurerIreland",
                            "description": "Unlisted Insurer - Ireland"
                        }, {
                            "id": "KeyCare",
                            "description": "KeyCare"
                        }, {
                            "id": "Octane",
                            "description": "Octane"
                        }, {
                            "id": "AAIreland",
                            "description": "AA Ireland"
                        }, {
                            "id": "Ivernia",
                            "description": "Ivernia"
                        }, {
                            "id": "Claimsafe",
                            "description": "Claimsafe"
                        }, {
                            "id": "ArachasInsurance",
                            "description": "Arachas Insurance"
                        }, {
                            "id": "Other",
                            "description": "Other"
                        }]
                    }, {
                        "type": "slider",
                        "type": "slider",
                        "uiOptions": {
                            "summaryTitle": "Amount of Years No Claims Bonus"
                        },
                        "key": "noClaimsBonusYears",
                        "label": "How many years no claims bonus do you have?",
                        "order": 3,
                        "required": true,
                        "trigger": {
                            "key1": "insuredInYourOwnName",
                            "key2": "insuredNamedDriver",
                            "name": "showDualKey",
                            "isObject": "true"
                        },
                        "disabled": false,
                        "value": 1,
                        "max": 9,
                        "min": 0
                    }, {
                        "type": "autocomplete",
                        "type": "autocomplete",
                        "helpId": 1001,
                        "uiOptions": {
                            "summaryTitle": "Location no claims bonus was earned"
                        },
                        "key": "whereNoClaimsBonus",
                        "label": "Where did you earn your no claims bonus",
                        "order": 4,
                        "required": true,
                        "trigger": {
                            "key1": "insuredInYourOwnName",
                            "key2": "insuredNamedDriver",
                            "name": "showDualKey",
                            "isObject": "true"
                        },
                        "disabled": false,
                        "serviceUrl": "referenceData/country/",
                        "autoCompleteType": "options"
                    }, {
                        "type": "date",
                        "type": "date",
                        "helpId": 1001,
                        "uiOptions": {
                            "summaryTitle": "Policy Expiration Date"
                        },
                        "key": "policyExpiryDate",
                        "label": "When does your policy expire?",
                        "order": 5,
                        "required": true,
                        "trigger": {
                            "key1": "insuredInYourOwnName",
                            "key2": "insuredNamedDriver",
                            "name": "showDualKey",
                            "isObject": "true"
                        },
                        "validators": ["validDateValidate"],
                        "disabled": false
                    }, {
                        "type": "radio",
                        "type": "radio",
                        "uiOptions": {
                            "summaryTitle": "Policy Start Date"
                        },
                        "key": "startPolicySameDate",
                        "label": "Start the new policy from the same date?",
                        "order": 6,
                        "required": true,
                        "trigger": {
                            "key1": "insuredInYourOwnName",
                            "key2": "insuredNamedDriver",
                            "name": "showDualKey",
                            "isObject": "true"
                        },
                        "disabled": false,
                        "options": [{
                            "id": true,
                            "description": "Yes"
                        }, {
                            "id": false,
                            "description": "No"
                        }]
                    }, {
                        "type": "date",
                        "type": "date",
                        "key": "policyStartDate",
                        "label": "What date do you want to start your policy from?",
                        "order": 7,
                        "required": true,
                        "trigger": {
                            "key": "startPolicySameDate",
                            "name": "showIfKeyEquals",
                            "equals": "false",
                            "isObject": "true"
                        },
                        "disabled": false
                    }],
                    "alignment": "none"
                }, {
                    "type": "radio",
                    "type": "radio",
                    "uiOptions": {
                        "summaryTitle": "Level of Cover"
                    },
                    "key": "levelOfCover",
                    "label": "What level of cover do you need?",
                    "order": 8,
                    "required": true,
                    "disabled": false,
                    "options": [{
                        "id": "comprehensive",
                        "description": "Comprehensive"
                    }, {
                        "id": "thirdParty",
                        "description": "Third Party, Fire and Theft"
                    }]
                }, {
                    "type": "radio",
                    "type": "radio",
                    "helpId": 1001,
                    "uiOptions": {
                        "summaryTitle": "Level of no claims bonus"
                    },
                    "key": "levelOfNoClaimsBonus",
                    "label": "What level of no claims bonus protection do you require?",
                    "order": 9,
                    "required": true,
                    "disabled": false,
                    "options": [{
                        "id": "full",
                        "description": "Full"
                    }, {
                        "id": "stepBack",
                        "description": "Step Back"
                    }, {
                        "id": "none",
                        "description": "None"
                    }]
                }]
            }]
        }, {
            "id": "your-address",
            "title": "Addresss",
            "uiOptions": {
                "isVisible": "true",
                "nextPage": "your-car",
                "prevPage": "your-cover"
            },
            "order": 1,
            "sections": [{
                "id": "address-default",
                "title": "Primary Driver",
                "type": "address",
                "userHasPenalty": false,
                "userHasClaim": false,
                "isDriver": false,
                "fields": [{
                    "type": "group",
                    "isComplete": true,
                    "type": "group",
                    "key": "address",
                    "disabled": false,
                    "fields": [{
                        "type": "text",
                        "type": "text",
                        "uiOptions": {
                            "summaryTitle": "Address line 1"
                        },
                        "key": "addressLine1",
                        "label": "Address Line 1",
                        "order": 0,
                        "required": true,
                        "disabled": false
                    }, {
                        "type": "text",
                        "type": "text",
                        "uiOptions": {
                            "summaryTitle": "Address line 2"
                        },
                        "key": "addressLine2",
                        "label": "Address Line 2",
                        "order": 0,
                        "required": false,
                        "disabled": false
                    }, {
                        "type": "autocomplete",
                        "type": "autocomplete",
                        "uiOptions": {
                            "summaryTitle": "Area"
                        },
                        "key": "area",
                        "label": "Area",
                        "order": 2,
                        "required": true,
                        "disabled": false,
                        "serviceUrl": "referenceData/area/",
                        "autoCompleteType": "search"
                    }, {
                        "type": "autocomplete",
                        "type": "autocomplete",
                        "uiOptions": {
                            "summaryTitle": "County"
                        },
                        "key": "county",
                        "label": "County",
                        "order": 2,
                        "required": true,
                        "trigger": {
                            "expectedType": "object",
                            "key": "area",
                            "name": "disabledBasedOnKey"
                        },
                        "disabled": false,
                        "link": "area",
                        "serviceUrl": "referenceData/county/",
                        "autoCompleteType": "linked"
                    }]
                }]
            }]
        }, {
            "id": "your-car",
            "title": "Car",
            "uiOptions": {
                "nextPage": "choose-your-product",
                "prevPage": "your-address",
                "isVisible": "true"
            },
            "order": 1,
            "sections": [{
                "id": "car-default",
                "title": "Primary Driver",
                "type": "car",
                "userHasPenalty": false,
                "userHasClaim": false,
                "isDriver": false,
                "fields": [{
                    "type": "group",
                    "isComplete": false,
                    "key": "carInformation",
                    "order": 0,
                    "timeline": false,
                    "disabled": false,
                    "fields": [{
                        "type": "date",
                        "key": "dateOfRegistration",
                        "label": "Date of Registration",
                        "order": 0,
                        "required": true,
                        "disabled": false
                    }, {
                        "type": "autocomplete",
                        "key": "carMake",
                        "label": "Car Make",
                        "order": 1,
                        "required": true,
                        "trigger": {
                            "name": "disabledBasedOnKey",
                            "expectedType": "string",
                            "key": "dateOfRegistration"
                        },
                        "disabled": false,
                        "link": "carInformation",
                        "serviceUrl": "motor/reference/car/make/",
                        "autoCompleteType": "linked"
                    }, {
                        "type": "dropdown",
                        "type": "dropdown",
                        "key": "engineSize",
                        "label": "Engine Size",
                        "order": 3,
                        "required": true,
                        "trigger": {
                            "name": "disabledBasedOnKey",
                            "expectedType": "object",
                            "key": "carModel"
                        },
                        "disabled": false,
                        "options": [{
                            "id": "0cc - 1499cc",
                            "description": "0cc - 1499cc"
                        }, {
                            "id": "1500cc - 1999cc",
                            "description": "1500cc - 1999cc"
                        }, {
                            "id": "2000cc - 2499cc",
                            "description": "2000cc - 2499cc"
                        }, {
                            "id": "2500cc - 2999cc",
                            "description": "2500cc - 2999cc"
                        }, {
                            "id": "3000cc - 3449cc",
                            "description": "3000cc - 3449cc"
                        }, {
                            "id": "3500cc - 3999cc",
                            "description": "3500cc - 3999cc"
                        }, {
                            "id": "4000cc - 4449cc",
                            "description": "4000cc - 4449cc"
                        }, {
                            "id": "4500cc - 4999cc",
                            "description": "4500cc - 4999cc"
                        }, {
                            "id": "4500cc - 4999c",
                            "description": "4500cc - 4999cc"
                        }]
                    }, {
                        "type": "autocomplete",
                        "type": "autocomplete",
                        "key": "carModel",
                        "label": "Car Model",
                        "order": 2,
                        "required": true,
                        "trigger": {
                            "name": "disabledBasedOnKey",
                            "expectedType": "object",
                            "key": "carMake"
                        },
                        "disabled": false,
                        "link": "carInformation",
                        "serviceUrl": "motor/reference/car/model/",
                        "autoCompleteType": "linked"
                    }],
                    "alignment": "none"
                }, {
                    "type": "group",
                    "isComplete": false,
                    "key": "carDetails",
                    "order": 0,
                    "timeline": false,
                    "disabled": false,
                    "fields": [{
                        "type": "date",
                        "type": "date",
                        "key": "dateOfPurchase",
                        "label": "Date of Purchase",
                        "order": 5,
                        "required": true,
                        "disabled": false
                    }, {
                        "type": "currency",
                        "type": "currency",
                        "key": "currentValue",
                        "label": "Current Value",
                        "order": 6,
                        "required": true,
                        "disabled": false
                    }, {
                        "type": "tel",
                        "type": "tel",
                        "key": "kilometersPerYear",
                        "label": "How many kilometres do you drive in a year?",
                        "order": 7,
                        "required": true,
                        "disabled": false
                    }, {
                        "type": "group",
                        "isComplete": false,
                        "type": "group",
                        "key": "securityFeatures",
                        "label": "What security features are fitted to your vehicle?",
                        "order": 8,
                        "timeline": true,
                        "disabled": false,
                        "fields": [{
                            "type": "checkbox",
                            "type": "checkbox",
                            "key": "security-alarm",
                            "required": false,
                            "timeline": false,
                            "disabled": false,
                            "name": "Alarm"
                        }, {
                            "type": "checkbox",
                            "type": "checkbox",
                            "key": "security-immobiliser",
                            "required": false,
                            "timeline": false,
                            "disabled": false,
                            "name": "Immobiliser"
                        }, {
                            "type": "checkbox",
                            "type": "checkbox",
                            "key": "security-tracker",
                            "required": false,
                            "timeline": false,
                            "disabled": false,
                            "name": "Tracker"
                        }],
                        "alignment": "half"
                    }, {
                        "type": "autocomplete",
                        "type": "autocomplete",
                        "key": "carMainlyUsedArea",
                        "label": "In what area is your car usually used?",
                        "order": 9,
                        "required": true,
                        "disabled": false,
                        "placeholder": "Please type the neighbourhood, region, area",
                        "serviceUrl": "referenceData/area/",
                        "autoCompleteType": "search"
                    }, {
                        "type": "autocomplete",
                        "type": "autocomplete",
                        "key": "carMainlyUsedCounty",
                        "label": "In what county is your usually used?",
                        "order": 9,
                        "required": true,
                        "trigger": {
                            "expectedType": "object",
                            "key": "carMainlyUsedArea",
                            "name": "disabledBasedOnKey"
                        },
                        "disabled": false,
                        "placeholder": "Please enter a county",
                        "link": "carMainlyUsedArea",
                        "serviceUrl": "referenceData/county/",
                        "autoCompleteType": "linked"
                    }, {
                        "type": "dropdown",
                        "type": "dropdown",
                        "key": "carKeptOvernight",
                        "label": "Where is you car kept overnight?",
                        "order": 10,
                        "required": true,
                        "disabled": false,
                        "options": [{
                            "id": "carport",
                            "description": "Carport"
                        }, {
                            "id": "garaged",
                            "description": "Garaged"
                        }, {
                            "id": "keptPrivate",
                            "description": "Kept on Private Property"
                        }, {
                            "id": "keptPublic",
                            "description": "Kept on Public Property"
                        }, {
                            "id": "parkedInDrive",
                            "description": "Parked on Drive"
                        }]
                    }],
                    "alignment": "none"
                }]
            }, {
                "id": "car-secondary",
                "type": "car",
                "userHasPenalty": false,
                "userHasClaim": false,
                "isDriver": false,
                "fields": [{
                    "type": "group",
                    "isComplete": false,
                    "type": "group",
                    "key": "carInformation",
                    "order": 0,
                    "timeline": false,
                    "disabled": false,
                    "fields": [{
                        "type": "date",
                        "type": "date",
                        "key": "dateOfRegistration",
                        "label": "Date of Registration",
                        "order": 0,
                        "required": true,
                        "disabled": false
                    }, {
                        "type": "autocomplete",
                        "type": "autocomplete",
                        "key": "carMake",
                        "label": "Car Make",
                        "order": 1,
                        "required": true,
                        "trigger": {
                            "name": "disabledBasedOnKey",
                            "expectedType": "string",
                            "key": "dateOfRegistration"
                        },
                        "disabled": false,
                        "link": "carInformation",
                        "serviceUrl": "motor/reference/car/make/",
                        "autoCompleteType": "linked"
                    }, {
                        "type": "dropdown",
                        "type": "dropdown",
                        "key": "engineSize",
                        "label": "Engine Size",
                        "order": 3,
                        "required": true,
                        "trigger": {
                            "name": "disabledBasedOnKey",
                            "expectedType": "object",
                            "key": "carModel"
                        },
                        "disabled": false,
                        "options": [{
                            "id": "0cc - 1499cc",
                            "description": "0cc - 1499cc"
                        }, {
                            "id": "1500cc - 1999cc",
                            "description": "1500cc - 1999cc"
                        }, {
                            "id": "2000cc - 2499cc",
                            "description": "2000cc - 2499cc"
                        }, {
                            "id": "2500cc - 2999cc",
                            "description": "2500cc - 2999cc"
                        }, {
                            "id": "3000cc - 3449cc",
                            "description": "3000cc - 3449cc"
                        }, {
                            "id": "3500cc - 3999cc",
                            "description": "3500cc - 3999cc"
                        }, {
                            "id": "4000cc - 4449cc",
                            "description": "4000cc - 4449cc"
                        }, {
                            "id": "4500cc - 4999cc",
                            "description": "4500cc - 4999cc"
                        }, {
                            "id": "4500cc - 4999c",
                            "description": "4500cc - 4999cc"
                        }]
                    }, {
                        "type": "autocomplete",
                        "type": "autocomplete",
                        "key": "carModel",
                        "label": "Car Model",
                        "order": 2,
                        "required": true,
                        "trigger": {
                            "name": "disabledBasedOnKey",
                            "expectedType": "object",
                            "key": "carMake"
                        },
                        "disabled": false,
                        "link": "carInformation",
                        "serviceUrl": "motor/reference/car/model/",
                        "autoCompleteType": "linked"
                    }],
                    "alignment": "none"
                }]
            }]
        }]
    }, {
        "id": "price-presentation",
        "isComplete": false,
        "uiOptions": {
            "isTitleHidden": "true",
            "isWide": "true"
        },
        "pages": [{
            "id": "choose-your-product",
            "title": "Choose a Product",
            "uiOptions": {
                "isTitleHidden": "true",
                "isVisible": "true",
                "nextPage": "choose-your-payment",
                "prevPage": "your-penalties"
            },
            "order": 0
        }, {
            "id": "choose-your-payment",
            "title": "Choose your payment",
            "uiOptions": {
                "isVisible": "true",
                "prevPage": "choose-your-product"
            },
            "order": 0
        }]
    }]
}