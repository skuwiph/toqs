"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var cost_1 = require('./cost');
var SharedCost = (function (_super) {
    __extends(SharedCost, _super);
    function SharedCost(name, numberOfDays, numberOfUnits, unitCost) {
        _super.call(this, name);
        this.name = name;
        this.numberOfDays = numberOfDays;
        this.numberOfUnits = numberOfUnits;
        this.unitCost = unitCost;
    }
    SharedCost.prototype.totalCost = function () {
        return this.unitCost * this.numberOfDays * this.numberOfUnits;
    };
    return SharedCost;
}(cost_1.Cost));
exports.SharedCost = SharedCost;
//# sourceMappingURL=shared-cost.js.map