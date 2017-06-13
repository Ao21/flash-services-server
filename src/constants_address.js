"use strict";
exports.TOWNS = [{
        description: 'Dublin 1',
        id: 'dublin1'
    }, {
        description: 'Dublin 2',
        id: 'dublin2'
    }];
exports.COUNTIES = [
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
        "id": 4,
        "address": "14 Harcourt Street,Dublin 2",
        "echo": true
    }, {
        "id": 3,
        "address": "Flat 14,38 Harcourt Street,Dublin 2,County Dublin"
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
        id: 'Dublin'
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb25zdGFudHNfYWRkcmVzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQWEsYUFBSyxHQUFHLENBQUM7UUFDbEIsV0FBVyxFQUFFLFVBQVU7UUFDdkIsRUFBRSxFQUFFLFNBQVM7S0FDaEIsRUFBRTtRQUNDLFdBQVcsRUFBRSxVQUFVO1FBQ3ZCLEVBQUUsRUFBRSxTQUFTO0tBQ2hCLENBQUMsQ0FBQTtBQUVXLGdCQUFRLEdBQUc7SUFDcEI7UUFDQSxXQUFXLEVBQUUsUUFBUTtRQUNyQixFQUFFLEVBQUUsUUFBUTtLQUNYO0lBQ0E7UUFDRCxXQUFXLEVBQUUsT0FBTztRQUNwQixFQUFFLEVBQUUsT0FBTztLQUNkLEVBQUU7UUFDQyxXQUFXLEVBQUUsTUFBTTtRQUNuQixFQUFFLEVBQUUsTUFBTTtLQUNiLENBQUMsQ0FBQTtBQUVXLGVBQU8sR0FBRyxDQUFDO1FBQ3BCLElBQUksRUFBRSxDQUFDO1FBQ1AsU0FBUyxFQUFFLDZCQUE2QjtLQUMzQyxFQUFFO1FBQ0MsSUFBSSxFQUFFLENBQUM7UUFDUCxTQUFTLEVBQUUseUNBQXlDO0tBQ3ZELEVBQUU7UUFDQyxJQUFJLEVBQUUsQ0FBQztRQUNQLFNBQVMsRUFBRSx5Q0FBeUM7S0FDdkQsRUFBQztRQUNFLElBQUksRUFBRSxDQUFDO1FBQ1AsU0FBUyxFQUFFLDZCQUE2QjtRQUN4QyxNQUFNLEVBQUUsSUFBSTtLQUNmLEVBQUU7UUFDQyxJQUFJLEVBQUUsQ0FBQztRQUNQLFNBQVMsRUFBRSxtREFBbUQ7S0FDakUsQ0FBRSxDQUFDO0FBR1Msd0JBQWdCLEdBQUc7SUFDNUIsY0FBYyxFQUFFLG9CQUFvQjtJQUNwQyxjQUFjLEVBQUUsYUFBYTtJQUM3QixNQUFNLEVBQUU7UUFDVixXQUFXLEVBQUUsVUFBVTtRQUN2QixFQUFFLEVBQUUsU0FBUztLQUNiO0lBQ0QsUUFBUSxFQUFFO1FBQ1QsV0FBVyxFQUFFLFFBQVE7UUFDckIsRUFBRSxFQUFFLFFBQVE7S0FDWjtJQUNFLFNBQVMsRUFBRSxDQUFDO1lBQ1IsSUFBSSxFQUFFLENBQUM7WUFDUCxTQUFTLEVBQUUsNkJBQTZCO1NBQzNDLEVBQUU7WUFDQyxJQUFJLEVBQUUsQ0FBQztZQUNQLFNBQVMsRUFBRSx5Q0FBeUM7U0FDdkQsRUFBRTtZQUNDLElBQUksRUFBRSxDQUFDO1lBQ1AsU0FBUyxFQUFFLHlDQUF5QztTQUN2RCxFQUFFO1lBQ0MsSUFBSSxFQUFFLENBQUM7WUFDUCxTQUFTLEVBQUUsbURBQW1EO1NBQ2pFLEVBQUU7WUFDQyxJQUFJLEVBQUUsQ0FBQztZQUNQLFNBQVMsRUFBRSw2QkFBNkI7U0FDM0MsQ0FBQztJQUNGLFVBQVUsRUFBRTtRQUNSLElBQUksRUFBRSxDQUFDO1FBQ1AsU0FBUyxFQUFFLDZCQUE2QjtLQUMzQztDQUNKLENBQUMiLCJmaWxlIjoiY29uc3RhbnRzX2FkZHJlc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W251bGxdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
