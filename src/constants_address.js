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
        "address": "14 Harcourt Street,Dublin 2",
        "isEcho": true
    }];
exports.GEOCODE_SELECTED = {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb25zdGFudHNfYWRkcmVzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQWEsYUFBSyxHQUFHLENBQUM7UUFDbEIsV0FBVyxFQUFFLFVBQVU7UUFDdkIsRUFBRSxFQUFFLFNBQVM7S0FDaEIsRUFBRTtRQUNDLFdBQVcsRUFBRSxVQUFVO1FBQ3ZCLEVBQUUsRUFBRSxTQUFTO0tBQ2hCLENBQUMsQ0FBQTtBQUVXLGdCQUFRLEdBQUcsQ0FBQztRQUNyQixXQUFXLEVBQUUsUUFBUTtRQUNyQixFQUFFLEVBQUUsUUFBUTtLQUNmLEVBQUU7UUFDQyxXQUFXLEVBQUUsTUFBTTtRQUNuQixFQUFFLEVBQUUsTUFBTTtLQUNiLENBQUMsQ0FBQTtBQUVXLGVBQU8sR0FBRyxDQUFDO1FBQ3BCLElBQUksRUFBRSxDQUFDO1FBQ1AsU0FBUyxFQUFFLDZCQUE2QjtLQUMzQyxFQUFFO1FBQ0MsSUFBSSxFQUFFLENBQUM7UUFDUCxTQUFTLEVBQUUseUNBQXlDO0tBQ3ZELEVBQUU7UUFDQyxJQUFJLEVBQUUsQ0FBQztRQUNQLFNBQVMsRUFBRSx5Q0FBeUM7S0FDdkQsRUFBRTtRQUNDLElBQUksRUFBRSxDQUFDO1FBQ1AsU0FBUyxFQUFFLG1EQUFtRDtLQUNqRSxFQUFFO1FBQ0MsSUFBSSxFQUFFLENBQUM7UUFDUCxTQUFTLEVBQUUsNkJBQTZCO1FBQ3hDLFFBQVEsRUFBRSxJQUFJO0tBQ2pCLENBQUMsQ0FBQztBQUdVLHdCQUFnQixHQUFHO0lBQzVCLGNBQWMsRUFBRSxvQkFBb0I7SUFDcEMsY0FBYyxFQUFFLGFBQWE7SUFDN0IsTUFBTSxFQUFFO1FBQ1YsV0FBVyxFQUFFLFVBQVU7UUFDdkIsRUFBRSxFQUFFLFNBQVM7S0FDYjtJQUNELFFBQVEsRUFBRTtRQUNULFdBQVcsRUFBRSxRQUFRO1FBQ3JCLEVBQUUsRUFBRSxRQUFRO0tBQ1o7SUFDRSxTQUFTLEVBQUUsQ0FBQztZQUNSLElBQUksRUFBRSxDQUFDO1lBQ1AsU0FBUyxFQUFFLDZCQUE2QjtTQUMzQyxFQUFFO1lBQ0MsSUFBSSxFQUFFLENBQUM7WUFDUCxTQUFTLEVBQUUseUNBQXlDO1NBQ3ZELEVBQUU7WUFDQyxJQUFJLEVBQUUsQ0FBQztZQUNQLFNBQVMsRUFBRSx5Q0FBeUM7U0FDdkQsRUFBRTtZQUNDLElBQUksRUFBRSxDQUFDO1lBQ1AsU0FBUyxFQUFFLG1EQUFtRDtTQUNqRSxFQUFFO1lBQ0MsSUFBSSxFQUFFLENBQUM7WUFDUCxTQUFTLEVBQUUsNkJBQTZCO1NBQzNDLENBQUM7SUFDRixVQUFVLEVBQUU7UUFDUixJQUFJLEVBQUUsQ0FBQztRQUNQLFNBQVMsRUFBRSw2QkFBNkI7S0FDM0M7Q0FDSixDQUFDIiwiZmlsZSI6ImNvbnN0YW50c19hZGRyZXNzLmpzIiwic291cmNlc0NvbnRlbnQiOltudWxsXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
