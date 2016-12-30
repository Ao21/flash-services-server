"use strict";
const BENEFITS = [
    { description: 'Lifetime Glass', inHeader: true, included: true },
    { description: 'Theft & Protection', inHeader: true, included: true },
    { description: 'Windscreen Cover', inHeader: true, included: true },
    { description: 'Personal Accident', inHeader: false, included: true },
    { description: 'Blah', inHeader: false, included: true },
    { description: 'Blah', inHeader: false, included: false }
];
const BREAKDOWN_ITEMS = [
    { description: 'Text Here', price: createPrice(5000) },
    { description: 'Text Here', price: createPrice(5000) },
    { description: 'Text Here', price: createPrice(5000) },
];
const AAValue = {
    name: 'AA Value',
    benefits: BENEFITS,
    breakdown: BREAKDOWN_ITEMS,
    premium: {
        monthly: {
            deposit: createPrice(2999),
            installments: {
                number: 11,
                instalment: createPrice(5999)
            },
            apr: '10%'
        },
        annual: {
            deposit: createPrice(0),
            installments: {
                number: 1,
                installment: createPrice(151000)
            },
            apr: '4.5%',
        }
    }
};
const AAMotor = {
    name: 'AA Motor',
    benefits: BENEFITS,
    breakdown: BREAKDOWN_ITEMS,
    premium: {
        monthly: {
            deposit: createPrice(4999),
            installments: {
                number: 11,
                instalment: createPrice(6999)
            },
            apr: '10%'
        },
        annual: {
            deposit: createPrice(0),
            installments: {
                number: 1,
                installment: createPrice(320000)
            },
            apr: '4.5%',
        }
    }
};
const quote = {
    reference: '56565656',
    products: [AAMotor, AAValue],
    paymentFrequency: 'Monthly'
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcGkvbW90b3IvbW90b3IucXVvdGUuY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBT0EsTUFBTSxRQUFRLEdBQUc7SUFDaEIsRUFBRSxXQUFXLEVBQUUsZ0JBQWdCLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFO0lBQ2pFLEVBQUUsV0FBVyxFQUFFLG9CQUFvQixFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRTtJQUNyRSxFQUFFLFdBQVcsRUFBRSxrQkFBa0IsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUU7SUFDbkUsRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFO0lBQ3JFLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUU7SUFDeEQsRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRTtDQUN6RCxDQUFBO0FBRUQsTUFBTSxlQUFlLEdBQUc7SUFDdkIsRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUU7SUFDdEQsRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUU7SUFDdEQsRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUM7Q0FDckQsQ0FBQTtBQUVELE1BQU0sT0FBTyxHQUFHO0lBQ2YsSUFBSSxFQUFFLFVBQVU7SUFDaEIsUUFBUSxFQUFFLFFBQVE7SUFDbEIsU0FBUyxFQUFFLGVBQWU7SUFDMUIsT0FBTyxFQUFFO1FBQ1IsT0FBTyxFQUFFO1lBQ1IsT0FBTyxFQUFFLFdBQVcsQ0FBQyxJQUFJLENBQUM7WUFDMUIsWUFBWSxFQUFFO2dCQUNiLE1BQU0sRUFBRSxFQUFFO2dCQUNWLFVBQVUsRUFBRSxXQUFXLENBQUMsSUFBSSxDQUFDO2FBQzdCO1lBQ0QsR0FBRyxFQUFFLEtBQUs7U0FFVjtRQUNELE1BQU0sRUFBRTtZQUNQLE9BQU8sRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQ3ZCLFlBQVksRUFBRTtnQkFDYixNQUFNLEVBQUUsQ0FBQztnQkFDVCxXQUFXLEVBQUUsV0FBVyxDQUFDLE1BQU0sQ0FBQzthQUNoQztZQUNELEdBQUcsRUFBRSxNQUFNO1NBQ1g7S0FDRDtDQUNELENBQUE7QUFFRCxNQUFNLE9BQU8sR0FBRztJQUNmLElBQUksRUFBRSxVQUFVO0lBQ2hCLFFBQVEsRUFBRSxRQUFRO0lBQ2xCLFNBQVMsRUFBRSxlQUFlO0lBQzFCLE9BQU8sRUFBRTtRQUNSLE9BQU8sRUFBRTtZQUNSLE9BQU8sRUFBRSxXQUFXLENBQUMsSUFBSSxDQUFDO1lBQzFCLFlBQVksRUFBRTtnQkFDYixNQUFNLEVBQUUsRUFBRTtnQkFDVixVQUFVLEVBQUUsV0FBVyxDQUFDLElBQUksQ0FBQzthQUM3QjtZQUNELEdBQUcsRUFBRSxLQUFLO1NBRVY7UUFDRCxNQUFNLEVBQUU7WUFDUCxPQUFPLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQztZQUN2QixZQUFZLEVBQUU7Z0JBQ2IsTUFBTSxFQUFFLENBQUM7Z0JBQ1QsV0FBVyxFQUFFLFdBQVcsQ0FBQyxNQUFNLENBQUM7YUFDaEM7WUFDRCxHQUFHLEVBQUUsTUFBTTtTQUNYO0tBQ0Q7Q0FDRCxDQUFBO0FBRUQsTUFBTSxLQUFLLEdBQUc7SUFDYixTQUFTLEVBQUUsVUFBVTtJQUNyQixRQUFRLEVBQUUsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDO0lBQzVCLGdCQUFnQixFQUFFLFNBQVM7Q0FDM0IsQ0FBQTtBQUVEO0lBQ0M7SUFBZ0IsQ0FBQztJQUVqQixTQUFTLENBQUMsR0FBb0IsRUFBRSxHQUFxQjtRQUNwRCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUMsS0FBSyxFQUFFLEtBQUssRUFBQyxDQUFDLENBQUMsQ0FBQztJQUN0RCxDQUFDO0FBQ0YsQ0FBQztBQU5EOzRCQU1DLENBQUE7QUFFRCxxQkFBcUIsS0FBYTtJQUNqQyxNQUFNLENBQUM7UUFDTixRQUFRLEVBQUUsS0FBSztRQUNmLEtBQUssRUFBRSxHQUFHLEtBQUssR0FBRyxHQUFHLEVBQUU7UUFDdkIsUUFBUSxFQUFFLEdBQUc7UUFDYixVQUFVLEVBQUUsS0FBSztRQUNqQixRQUFRLEVBQUUsSUFBSSxLQUFLLEdBQUcsR0FBRyxFQUFFO0tBQzNCLENBQUE7QUFDRixDQUFDIiwiZmlsZSI6ImFwaS9tb3Rvci9tb3Rvci5xdW90ZS5jb250cm9sbGVyLmpzIiwic291cmNlc0NvbnRlbnQiOltudWxsXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
