"use strict";
exports.TOWNS = [{
        description: 'Dublin 1',
        id: 'dublin1'
    }, {
        description: 'Dublin 2',
        id: 'dublin2'
    }];
exports.COUNTIES = [{
        description: 'Dublin',
        id: 'dublin'
    }, {
        description: 'Cork',
        id: 'cork'
    }];
exports.GEOCODE = [{
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
    }];
exports.GEOCODE_SELECTED = {
    "addressLine1": "14 Harcourt Street",
    "addressLine2": "Dublin City",
    "county": {
        description: "Dublin 3",
        id: "Dublin 3"
    },
    "area": {
        description: 'Dublin City',
        id: 'Dublin City'
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb25zdGFudHNfYWRkcmVzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQWEsYUFBSyxHQUFHLENBQUM7UUFDbEIsV0FBVyxFQUFFLFVBQVU7UUFDdkIsRUFBRSxFQUFFLFNBQVM7S0FDaEIsRUFBRTtRQUNDLFdBQVcsRUFBRSxVQUFVO1FBQ3ZCLEVBQUUsRUFBRSxTQUFTO0tBQ2hCLENBQUMsQ0FBQTtBQUVXLGdCQUFRLEdBQUcsQ0FBQztRQUNyQixXQUFXLEVBQUUsUUFBUTtRQUNyQixFQUFFLEVBQUUsUUFBUTtLQUNmLEVBQUU7UUFDQyxXQUFXLEVBQUUsTUFBTTtRQUNuQixFQUFFLEVBQUUsTUFBTTtLQUNiLENBQUMsQ0FBQTtBQUVXLGVBQU8sR0FBRyxDQUFDO1FBQ3BCLElBQUksRUFBRSxDQUFDO1FBQ1AsU0FBUyxFQUFFLDZCQUE2QjtLQUMzQyxFQUFFO1FBQ0MsSUFBSSxFQUFFLENBQUM7UUFDUCxTQUFTLEVBQUUseUNBQXlDO0tBQ3ZELEVBQUU7UUFDQyxJQUFJLEVBQUUsQ0FBQztRQUNQLFNBQVMsRUFBRSx5Q0FBeUM7S0FDdkQsRUFBRTtRQUNDLElBQUksRUFBRSxDQUFDO1FBQ1AsU0FBUyxFQUFFLG1EQUFtRDtLQUNqRSxFQUFFO1FBQ0MsSUFBSSxFQUFFLENBQUM7UUFDUCxTQUFTLEVBQUUsNkJBQTZCO0tBQzNDLENBQUMsQ0FBQztBQUdVLHdCQUFnQixHQUFHO0lBQzVCLGNBQWMsRUFBRSxvQkFBb0I7SUFDcEMsY0FBYyxFQUFFLGFBQWE7SUFDN0IsUUFBUSxFQUFFO1FBQ1osV0FBVyxFQUFFLFVBQVU7UUFDdkIsRUFBRSxFQUFFLFVBQVU7S0FDZDtJQUNELE1BQU0sRUFBRTtRQUNQLFdBQVcsRUFBRSxhQUFhO1FBQzFCLEVBQUUsRUFBRSxhQUFhO0tBQ2pCO0lBQ0UsU0FBUyxFQUFFLENBQUM7WUFDUixJQUFJLEVBQUUsQ0FBQztZQUNQLFNBQVMsRUFBRSw2QkFBNkI7U0FDM0MsRUFBRTtZQUNDLElBQUksRUFBRSxDQUFDO1lBQ1AsU0FBUyxFQUFFLHlDQUF5QztTQUN2RCxFQUFFO1lBQ0MsSUFBSSxFQUFFLENBQUM7WUFDUCxTQUFTLEVBQUUseUNBQXlDO1NBQ3ZELEVBQUU7WUFDQyxJQUFJLEVBQUUsQ0FBQztZQUNQLFNBQVMsRUFBRSxtREFBbUQ7U0FDakUsRUFBRTtZQUNDLElBQUksRUFBRSxDQUFDO1lBQ1AsU0FBUyxFQUFFLDZCQUE2QjtTQUMzQyxDQUFDO0lBQ0YsVUFBVSxFQUFFO1FBQ1IsSUFBSSxFQUFFLENBQUM7UUFDUCxTQUFTLEVBQUUsNkJBQTZCO0tBQzNDO0NBQ0osQ0FBQyIsImZpbGUiOiJjb25zdGFudHNfYWRkcmVzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbbnVsbF0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
