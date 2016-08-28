"use strict";
var Cost = (function () {
    function Cost(name) {
        this.name = name;
    }
    // To be implemented by each class
    Cost.prototype.totalCost = function () {
        return 0;
    };
    // May not make sense for all costs; check
    Cost.prototype.totalCostPerPerson = function (numberOfPax) {
        if (numberOfPax == 0)
            return 0;
        return (this.totalCost()) / numberOfPax;
    };
    return Cost;
}());
exports.Cost = Cost;
//# sourceMappingURL=cost.js.map