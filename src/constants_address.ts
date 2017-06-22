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
},{
    "id": 4,
    "address": "14 Harcourt Street,Dublin 2",
    "echo": true
}, {
    "id": 3,
    "address": "Flat 14,38 Harcourt Street,Dublin 2,County Dublin"
} ];


export const GEOCODE_SELECTED = {"addressLine1":"14 Harcourt Lodge","addressLine2":"Southern Cross Avenue","area":{"id":"Inchicore","description":"Inchicore","descriptionAsString":"Inchicore","idAsString":"Inchicore"},"county":{"id":"Dublin8","description":"Dublin 8","descriptionAsString":"Dublin 8","idAsString":"Dublin8"},"selected":{"address":"14 Harcourt Lodge,Southern Cross Avenue,Inchicore,Dublin 8,County Dublin","id":3,"echo":false}}