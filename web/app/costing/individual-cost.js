"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var cost_1 = require('./cost');
var IndividualCost = (function (_super) {
    __extends(IndividualCost, _super);
    function IndividualCost(name, numberPax, numberOfUnits, unitCost) {
        _super.call(this, name);
        this.name = name;
        this.numberPax = numberPax;
        this.numberOfUnits = numberOfUnits;
        this.unitCost = unitCost;
    }
    IndividualCost.prototype.totalCost = function () {
        return this.numberPax * this.numberOfUnits * this.unitCost;
    };
    return IndividualCost;
}(cost_1.Cost));
exports.IndividualCost = IndividualCost;
//# sourceMappingURL=individual-cost.js.map