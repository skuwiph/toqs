"use strict";
(function (QuoteStatus) {
    QuoteStatus[QuoteStatus["Prospective"] = 0] = "Prospective";
    QuoteStatus[QuoteStatus["Finalised"] = 1] = "Finalised";
})(exports.QuoteStatus || (exports.QuoteStatus = {}));
var QuoteStatus = exports.QuoteStatus;
;
var Quote = (function () {
    function Quote() {
    }
    return Quote;
}());
exports.Quote = Quote;
//# sourceMappingURL=quote.js.map