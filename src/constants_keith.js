"use strict";
exports.KEITH = {
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
};

//# sourceMappingURL=data:application/json;base64,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Q0FDL0IsQ0FBQztvQ0FDRixXQUFXLEVBQUUsTUFBTTtpQ0FDdEIsQ0FBQzt5QkFDTCxDQUFDO2lCQUNMLENBQUM7U0FDTCxFQUFFO1lBQ0MsSUFBSSxFQUFFLG9CQUFvQjtZQUMxQixZQUFZLEVBQUUsS0FBSztZQUNuQixXQUFXLEVBQUU7Z0JBQ1QsZUFBZSxFQUFFLE1BQU07Z0JBQ3ZCLFFBQVEsRUFBRSxNQUFNO2FBQ25CO1lBQ0QsT0FBTyxFQUFFLENBQUM7b0JBQ04sSUFBSSxFQUFFLHFCQUFxQjtvQkFDM0IsT0FBTyxFQUFFLGtCQUFrQjtvQkFDM0IsV0FBVyxFQUFFO3dCQUNULGVBQWUsRUFBRSxNQUFNO3dCQUN2QixXQUFXLEVBQUUsTUFBTTt3QkFDbkIsVUFBVSxFQUFFLHFCQUFxQjt3QkFDakMsVUFBVSxFQUFFLGdCQUFnQjtxQkFDL0I7b0JBQ0QsT0FBTyxFQUFFLENBQUM7aUJBQ2IsRUFBRTtvQkFDQyxJQUFJLEVBQUUscUJBQXFCO29CQUMzQixPQUFPLEVBQUUscUJBQXFCO29CQUM5QixXQUFXLEVBQUU7d0JBQ1QsV0FBVyxFQUFFLE1BQU07d0JBQ25CLFVBQVUsRUFBRSxxQkFBcUI7cUJBQ3BDO29CQUNELE9BQU8sRUFBRSxDQUFDO2lCQUNiLENBQUM7U0FDTCxDQUFDO0NBQ0wsQ0FBQSIsImZpbGUiOiJjb25zdGFudHNfa2VpdGguanMiLCJzb3VyY2VzQ29udGVudCI6W251bGxdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
