"use strict";
const BENEFITS = [
    { description: 'Lifetime NCD (Glass, Fire & Theft)', inHeader: true, included: true },
    { description: 'Personal Accident Protection (€75k)', inHeader: true, included: true },
    { description: 'Fire Brigade Charges', inHeader: true, included: true },
    { description: 'Temporary Replacement Vehicle', inHeader: true, included: false },
    { description: 'NCD Stepback', inHeader: false, included: false },
    { description: 'Windscreen/Glass Breakage', inHeader: false, included: true },
    { description: 'Foreign Travel', inHeader: false, included: true },
];
const BENEFITS_STANDARD = [
    { description: 'Lifetime NCD (Glass, Fire & Theft)', inHeader: true, included: true },
    { description: 'Personal Accident Protection (€75k)', inHeader: true, included: true },
    { description: 'Fire Brigade Charges', inHeader: true, included: true },
    { description: 'Temporary Replacement Vehicle', inHeader: true, included: true },
    { description: 'NCD Stepback', inHeader: false, included: true },
    { description: 'Windscreen/Glass Breakage', inHeader: false, included: true },
    { description: 'Foreign Travel', inHeader: false, included: true },
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcGkvbW90b3IvbW90b3IucXVvdGUuY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBT0EsTUFBTSxRQUFRLEdBQUc7SUFDaEIsRUFBRSxXQUFXLEVBQUUsb0NBQW9DLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFO0lBQ3JGLEVBQUUsV0FBVyxFQUFFLHFDQUFxQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRTtJQUN0RixFQUFFLFdBQVcsRUFBRSxzQkFBc0IsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUU7SUFDdkUsRUFBRSxXQUFXLEVBQUUsK0JBQStCLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFO0lBQ2pGLEVBQUUsV0FBVyxFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUU7SUFDakUsRUFBRSxXQUFXLEVBQUUsMkJBQTJCLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFO0lBQzdFLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRTtDQUlsRSxDQUFBO0FBRUQsTUFBTSxpQkFBaUIsR0FBRztJQUV6QixFQUFFLFdBQVcsRUFBRSxvQ0FBb0MsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUU7SUFDckYsRUFBRSxXQUFXLEVBQUUscUNBQXFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFO0lBQ3RGLEVBQUUsV0FBVyxFQUFFLHNCQUFzQixFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRTtJQUN2RSxFQUFFLFdBQVcsRUFBRSwrQkFBK0Is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QUFFRDtJQUNDO0lBQWdCLENBQUM7SUFFakIsU0FBUyxDQUFDLEdBQW9CLEVBQUUsR0FBcUI7UUFDcEQsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFDLEtBQUssRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEQsQ0FBQztBQUNGLENBQUM7QUFORDs0QkFNQyxDQUFBO0FBRUQscUJBQXFCLEtBQWE7SUFDakMsTUFBTSxDQUFDO1FBQ04sUUFBUSxFQUFFLEtBQUs7UUFDZixLQUFLLEVBQUUsR0FBRyxLQUFLLEdBQUcsR0FBRyxFQUFFO1FBQ3ZCLFFBQVEsRUFBRSxHQUFHO1FBQ2IsVUFBVSxFQUFFLEtBQUs7UUFDakIsUUFBUSxFQUFFLElBQUksS0FBSyxHQUFHLEdBQUcsRUFBRTtLQUMzQixDQUFBO0FBQ0YsQ0FBQyIsImZpbGUiOiJhcGkvbW90b3IvbW90b3IucXVvdGUuY29udHJvbGxlci5qcyIsInNvdXJjZXNDb250ZW50IjpbbnVsbF0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
