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
    tagline: 'Your Essential Cover',
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
    tagline: 'Our Premium Product',
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
    activeProduct: 'AAMOTOR'
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcGkvbW90b3IvbW90b3IucXVvdGUuY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBT0EsTUFBTSxRQUFRLEdBQUc7SUFDaEIsRUFBRSxXQUFXLEVBQUUsa0JBQWtCLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFO0lBQ25FLEVBQUUsV0FBVyxFQUFFLHlDQUF5QyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRTtJQUMxRixFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUU7SUFDcEUsRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRTtJQUM5RCxFQUFFLFdBQVcsRUFBRSxzQkFBc0IsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUU7SUFDeEUsRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRTtJQUM3RCxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUU7SUFDckUsRUFBRSxXQUFXLEVBQUUsNEJBQTRCLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFO0lBQzlFLEVBQUUsV0FBVyxFQUFFLDRDQUE0QyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRTtJQUM5RixFQUFFLFdBQVcsRUFBRSw0QkFBNEIsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUU7SUFDOUUsRUFBRSxXQUFXLEVBQUUsaUJBQWlCLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUs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LEdBQW9CLEVBQUUsR0FBcUI7UUFDcEQsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFDLEtBQUssRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEQsQ0FBQztBQUNGLENBQUM7QUFORDs0QkFNQyxDQUFBO0FBRUQscUJBQXFCLEtBQWE7SUFDakMsTUFBTSxDQUFDO1FBQ04sUUFBUSxFQUFFLEtBQUs7UUFDZixLQUFLLEVBQUUsR0FBRyxLQUFLLEdBQUcsR0FBRyxFQUFFO1FBQ3ZCLFFBQVEsRUFBRSxHQUFHO1FBQ2IsVUFBVSxFQUFFLEtBQUs7UUFDakIsUUFBUSxFQUFFLElBQUksS0FBSyxHQUFHLEdBQUcsRUFBRTtLQUMzQixDQUFBO0FBQ0YsQ0FBQyIsImZpbGUiOiJhcGkvbW90b3IvbW90b3IucXVvdGUuY29udHJvbGxlci5qcyIsInNvdXJjZXNDb250ZW50IjpbbnVsbF0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
