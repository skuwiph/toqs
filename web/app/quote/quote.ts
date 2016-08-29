import { ItineraryDay } from '../itinerary/itinerary-day';
import * as moment from 'moment/moment';

export enum QuoteStatus {
    Prospective = 0,
    Finalised = 1
};

export class Quote {
    name:string;
    reference:string;
    arrivalDate:Date;
    departureDate:Date;
    itinerary:Array<ItineraryDay>;
    // title
    // client
    // reference
    // arrivalDate
    // departureDate
    // calc: number of days
    // Itinerary:Array<ItineraryDay>
    // quoteStatus

    // TODO(ian): Deal with changes to dates -- don't want to throw away
    // any entered data, do we! And if the period grows, we just want to
    // add new dates

    // Also, need to validate that arrival > departure 
    setDates(arrival:Date, departure:Date) {

        if( departure < arrival)
            throw new RangeError('Departure date must be later than arrival date');

        this.arrivalDate = arrival;
        this.departureDate = departure;

        this.itinerary = new Array<ItineraryDay>();
        var a = moment(arrival);
        var b = moment(departure);

        var days = b.diff(a, 'days');

        for(let d = 0; d < days + 1; d++) {
            this.itinerary.push( new ItineraryDay(d));
        } 
    }
}