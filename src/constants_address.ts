export const TOWNS = [{
    description: 'Dublin 1',
    id: 'dublin1'
}, {
    description: 'Dublin 2',
    id: 'dublin2'
}]

export const COUNTIES = [
    {
    description: 'Dublin',
    id: 'dublin'
    },
     {
    description: 'Derry',
    id: 'derry'
}, {
    description: 'Cork',
    id: 'cork'
}]

export const GEOCODE = [{
    "id": 0,
    "address": "14 Harcourt Street,Dublin 2"
}, {
    "id": 1,
    "address": "Apartment 1,14 Harcourt Street,Dublin 2"
}, {
    "id": 2,
    "address": "Apartment 2,14 Harcourt Street,Dublin 2"
}, {
    "id": 3,
    "address": "Flat 14,38 Harcourt Street,Dublin 2,County Dublin"
}, {
    "id": 4,
    "address": "14 Harcourt Street,Dublin 2",
    "isEcho": true
}];


export const GEOCODE_SELECTED = {
    "addressLine1": "14 Harcourt Street",
    "addressLine2": "Dublin City",
    "area": {
		description: "Dublin 1",
		id: "dublin1"
	},
	"county": {
		description: 'Dublin',
		id: 'dublin'
	},
    "lookups": [{
        "id": 0,
        "address": "14 Harcourt Street,Dublin 2"
    }, {
        "id": 1,
        "address": "Apartment 1,14 Harcourt Street,Dublin 2"
    }, {
        "id": 2,
        "address": "Apartment 2,14 Harcourt Street,Dublin 2"
    }, {
        "id": 3,
        "address": "Flat 14,38 Harcourt Street,Dublin 2,County Dublin"
    }, {
        "id": 4,
        "address": "14 Harcourt Street,Dublin 2"
    }],
    "selected": {
        "id": 0,
        "address": "14 Harcourt Street,Dublin 2"
    }
};