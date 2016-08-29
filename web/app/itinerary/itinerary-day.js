"use strict";
//import * as moment from 'moment/moment';
var ItineraryDay = (function () {
    // Day number (0- max); when displaying, add one
    function ItineraryDay(day) {
        this.day = day;
        this.costs = new Array();
    }
    return ItineraryDay;
}());
exports.ItineraryDay = ItineraryDay;
//# sourceMappingURL=itinerary-day.js.map