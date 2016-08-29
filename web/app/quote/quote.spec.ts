import { Quote } from './quote';

describe('Quote', () => {
    it('Should throw an error when the arrival date is after the departure date', () => {
        let arrival:Date = new Date(2016, 0, 6);
        let departure:Date = new Date(2016, 0, 5);
        let quote:Quote = new Quote();

        expect(function(){quote.setDates(arrival, departure)}).toThrow();
        
    });

    // Remember that if you arrival on Feb 1 and leave on Feb 5, you still
    // have five days where elements may be booked:
    //
    // Day 1 (Feb 1) - Arrival LHR - first night's accommodation
    // Day 2 (Feb 2)- tour + accommodation
    // Day 3 (Feb 3)- tour + accommodation
    // Day 4 (Feb 4)- tour/last night's accommodation
    // Day 5 (Feb 5)- Couch to LGW for return flight
    //
    // Hence, five days' worth of itinerary to cater for!'
    it('The number of days on tour between Feb 1 and Feb 5 is 5.', () => {
        let arrival:Date = new Date(2016, 1, 1);
        let departure:Date = new Date(2016, 1, 5);
        let quote:Quote = new Quote();
        quote.setDates(arrival, departure);

        expect(quote.itinerary.length).toEqual(5);
    });
});