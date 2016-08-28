"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var cost_1 = require('./cost');
// TODO(ian):handle feature rooms
var AccommodationCost = (function (_super) {
    __extends(AccommodationCost, _super);
    function AccommodationCost(name, type, numberPax, numberOfRooms, numberOfNights, roomCost) {
        _super.call(this, name);
        this.name = name;
        this.type = type;
        this.numberPax = numberPax;
        this.numberOfRooms = numberOfRooms;
        this.numberOfNights = numberOfNights;
        this.roomCost = roomCost;
    }
    AccommodationCost.prototype.totalCost = function () {
        return this.roomCost * this.numberPax * this.numberOfRooms * this.numberOfNights;
    };
    return AccommodationCost;
}(cost_1.Cost));
exports.AccommodationCost = AccommodationCost;
//# sourceMappingURL=accommodation-cost.js.map