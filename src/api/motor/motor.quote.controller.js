"use strict";
const BENEFITS = [
    { description: 'Windscreen Cover', inHeader: true, included: true },
    { description: 'Lifetime Glass, Theft & Fire Protection', inHeader: true, included: true },
    { description: 'Personal Accident', inHeader: true, included: true },
    { description: 'Legal fees', inHeader: false, included: true },
    { description: 'Fire Brigade Charges', inHeader: false, included: true },
    { description: 'Car Valet', inHeader: false, included: true },
    { description: 'Standard or Motor', inHeader: false, included: true },
    { description: 'Step Back Bonus Protection', inHeader: false, included: true },
    { description: 'Personal Belongings/Sat Navs/Mobile Phones', inHeader: false, included: true },
    { description: 'Replacement Locks & Alarms', inHeader: false, included: true },
    { description: 'Child Car Seats', inHeader: false, included: false },
    { description: 'Misfuel', inHeader: false, included: false },
    { description: 'Courtesy Car', inHeader: false, included: false },
];
const BENEFITS_STANDARD = [
    { description: 'Windscreen Cover', inHeader: true, included: true },
    { description: 'Lifetime Glass, Theft & Fire Protection', inHeader: true, included: true },
    { description: 'Personal Accident', inHeader: true, included: true },
    { description: 'Legal fees', inHeader: false, included: true },
    { description: 'Fire Brigade Charges', inHeader: false, included: true },
    { description: 'Car Valet', inHeader: false, included: true },
    { description: 'Standard or Motor', inHeader: false, included: true },
    { description: 'Step Back Bonus Protection', inHeader: false, included: true },
    { description: 'Personal Belongings/Sat Navs/Mobile Phones', inHeader: false, included: true },
    { description: 'Replacement Locks & Alarms', inHeader: false, included: true },
    { description: 'Child Car Seats', inHeader: false, included: false },
    { description: 'Misfuel', inHeader: false, included: false },
    { description: 'Courtesy Car', inHeader: false, included: false },
];
const BREAKDOWN_ITEMS = [
    { description: 'AA Motor', price: createPrice(5000) },
    { description: 'Fee', price: createPrice(320) },
    { description: 'Member Discount', price: createPrice(5000), discount: true },
];
const AAValue = {
    name: 'AA Value',
    id: 'AAVALUE',
    benefits: BENEFITS,
    img: 'product-aavalue.svg',
    breakdowns: BREAKDOWN_ITEMS,
    premium: {
        monthly: {
            deposit: createPrice(2999),
            installments: {
                number: 11,
                instalment: createPrice(5999)
            },
            total: createPrice(5999),
            apr: '10%'
        },
        annually: {
            deposit: createPrice(0),
            installments: {
                number: 1,
                instalment: createPrice(151000)
            },
            total: createPrice(151000),
            apr: '4.5%',
        }
    }
};
const AAMotor = {
    name: 'AA Motor',
    id: 'AAMOTOR',
    preferred: true,
    benefits: BENEFITS_STANDARD,
    img: 'product-aastandard.svg',
    breakdowns: BREAKDOWN_ITEMS,
    premium: {
        monthly: {
            deposit: createPrice(4999),
            installments: {
                number: 11,
                instalment: createPrice(6999)
            },
            total: createPrice(6999),
            apr: '10%'
        },
        annually: {
            deposit: createPrice(0),
            installments: {
                number: 1,
                instalment: createPrice(125000)
            },
            total: createPrice(125000),
            apr: '4.5%',
        }
    }
};
const quote = {
    reference: '56565656',
    products: [AAMotor, AAValue],
    paymentFrequency: 'monthly',
    activeProduct: null
};
class MotorQuote {
    constructor() {
    }
    sendQuote(req, res) {
        res.status(200).send(JSON.stringify({ quote: quote }));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MotorQuote;
function createPrice(price) {
    return {
        "amount": price,
        "str": `${price / 100}`,
        "symbol": "€",
        "currency": "EUR",
        "pretty": `€${price / 100}`
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcGkvbW90b3IvbW90b3IucXVvdGUuY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBT0EsTUFBTSxRQUFRLEdBQUc7SUFDaEIsRUFBRSxXQUFXLEVBQUUsa0JBQWtCLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFO0lBQ25FLEVBQUUsV0FBVyxFQUFFLHlDQUF5QyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRTtJQUMxRixFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUU7SUFDcEUsRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRTtJQUM5RCxFQUFFLFdBQVcsRUFBRSxzQkFBc0IsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUU7SUFDeEUsRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRTtJQUM3RCxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUU7SUFDckUsRUFBRSxXQUFXLEVBQUUsNEJBQTRCLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFO0lBQzlFLEVBQUUsV0FBVyxFQUFFLDRDQUE0QyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRTtJQUM5RixFQUFFLFdBQVcsRUFBRSw0QkFBNEIsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUU7SUFDOUUsRUFBRSxXQUFXLEVBQUUsaUJBQWlCLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUs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LENBQUM7Z0JBQ1QsVUFBVSxFQUFFLFdBQVcsQ0FBQyxNQUFNLENBQUM7YUFDL0I7WUFDRCxLQUFLLEVBQUUsV0FBVyxDQUFDLE1BQU0sQ0FBQztZQUMxQixHQUFHLEVBQUUsTUFBTTtTQUNYO0tBQ0Q7Q0FDRCxDQUFBO0FBRUQsTUFBTSxPQUFPLEdBQUc7SUFDZixJQUFJLEVBQUUsVUFBVTtJQUNoQixFQUFFLEVBQUUsU0FBUztJQUNiLFNBQVMsRUFBRSxJQUFJO0lBQ2YsUUFBUSxFQUFFLGlCQUFpQjtJQUMzQixHQUFHLEVBQUUsd0JBQXdCO0lBQzdCLFVBQVUsRUFBRSxlQUFlO0lBQzNCLE9BQU8sRUFBRTtRQUNSLE9BQU8sRUFBRTtZQUNSLE9BQU8sRUFBRSxXQUFXLENBQUMsSUFBSSxDQUFDO1lBQzFCLFlBQVksRUFBRTtnQkFDYixNQUFNLEVBQUUsRUFBRTtnQkFDVixVQUFVLEVBQUUsV0FBVyxDQUFDLElBQUksQ0FBQzthQUM3QjtZQUNELEtBQUssRUFBRSxXQUFXLENBQUMsSUFBSSxDQUFDO1lBQ3hCLEdBQUcsRUFBRSxLQUFLO1NBRVY7UUFDRCxRQUFRLEVBQUU7WUFDVCxPQUFPLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQztZQUN2QixZQUFZLEVBQUU7Z0JBQ2IsTUFBTSxFQUFFLENBQUM7Z0JBQ1QsVUFBVSxFQUFFLFdBQVcsQ0FBQyxNQUFNLENBQUM7YUFDL0I7WUFDRCxLQUFLLEVBQUUsV0FBVyxDQUFDLE1BQU0sQ0FBQztZQUMxQixHQUFHLEVBQUUsTUFBTTtTQUNYO0tBQ0Q7Q0FDRCxDQUFBO0FBRUQsTUFBTSxLQUFLLEdBQUc7SUFDYixTQUFTLEVBQUUsVUFBVTtJQUNyQixRQUFRLEVBQUUsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDO0lBQzVCLGdCQUFnQixFQUFFLFNBQVM7SUFDM0IsYUFBYSxFQUFFLElBQUk7Q0FDbkIsQ0FBQTtBQUVEO0lBQ0M7SUFBZ0IsQ0FBQztJQUVqQixTQUFTLENBQUMsR0FBb0IsRUFBRSxHQUFxQjtRQUNwRCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUMsS0FBSyxFQUFFLEtBQUssRUFBQyxDQUFDLENBQUMsQ0FBQztJQUN0RCxDQUFDO0FBQ0YsQ0FBQztBQU5EOzRCQU1DLENBQUE7QUFFRCxxQkFBcUIsS0FBYTtJQUNqQyxNQUFNLENBQUM7UUFDTixRQUFRLEVBQUUsS0FBSztRQUNmLEtBQUssRUFBRSxHQUFHLEtBQUssR0FBRyxHQUFHLEVBQUU7UUFDdkIsUUFBUSxFQUFFLEdBQUc7UUFDYixVQUFVLEVBQUUsS0FBSztRQUNqQixRQUFRLEVBQUUsSUFBSSxLQUFLLEdBQUcsR0FBRyxFQUFFO0tBQzNCLENBQUE7QUFDRixDQUFDIiwiZmlsZSI6ImFwaS9tb3Rvci9tb3Rvci5xdW90ZS5jb250cm9sbGVyLmpzIiwic291cmNlc0NvbnRlbnQiOltudWxsXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
