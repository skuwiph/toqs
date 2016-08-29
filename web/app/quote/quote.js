"use strict";
var itinerary_day_1 = require('../itinerary/itinerary-day');
var moment = require('moment/moment');
(function (QuoteStatus) {
    QuoteStatus[QuoteStatus["Prospective"] = 0] = "Prospective";
    QuoteStatus[QuoteStatus["Finalised"] = 1] = "Finalised";
})(exports.QuoteStatus || (exports.QuoteStatus = {}));
var QuoteStatus = exports.QuoteStatus;
;
var Quote = (function () {
    function Quote() {
    }
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
    Quote.prototype.setDates = function (arrival, departure) {
        if (departure < arrival)
            throw new RangeError('Departure date must be later than arrival date');
        this.arrivalDate = arrival;
        this.departureDate = departure;
        this.itinerary = new Array();
        var a = moment(arrival);
        var b = moment(departure);
        var days = b.diff(a, 'days');
        for (var d = 0; d < days + 1; d++) {
            this.itinerary.push(new itinerary_day_1.ItineraryDay(d));
        }
    };
    return Quote;
}());
exports.Quote = Quote;
//# sourceMappingURL=quote.js.map