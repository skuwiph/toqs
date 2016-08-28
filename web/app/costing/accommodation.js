"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var cost_1 = require('./cost');
var accommodation_cost_1 = require('./accommodation-cost');
var accommodation_cost_2 = require('./accommodation-cost');
var individual_cost_1 = require('./individual-cost');
var Accommodation = (function (_super) {
    __extends(Accommodation, _super);
    // TODO(ian): add hotel details, booking reference, etc?
    function Accommodation(name, numberOfNights) {
        _super.call(this, name);
        this.name = name;
        // TODO(ian):rename to stayCost
        this.stayCost = new Array();
        this.numberOfNights = numberOfNights;
    }
    Accommodation.prototype.addBreakfast = function (numberOfPax, numberOfDays, unitCost) {
        this.addStayCost(new individual_cost_1.IndividualCost("Breakfast", numberOfPax, numberOfDays, unitCost));
    };
    Accommodation.prototype.addSingleRoom = function (numberOfPax, numberOfRooms, roomCost) {
        this.addStayCost(new accommodation_cost_1.AccommodationCost("Single", accommodation_cost_2.RoomType.Single, numberOfPax, numberOfRooms, this.numberOfNights, roomCost));
    };
    Accommodation.prototype.addDoubleRoom = function (numberOfPax, numberOfRooms, roomCost) {
        this.addStayCost(new accommodation_cost_1.AccommodationCost("Double", accommodation_cost_2.RoomType.Double, numberOfPax, numberOfRooms, this.numberOfNights, roomCost));
    };
    Accommodation.prototype.addTwinRoom = function (numberOfPax, numberOfRooms, roomCost) {
        this.addStayCost(new accommodation_cost_1.AccommodationCost("Twin", accommodation_cost_2.RoomType.Twin, numberOfPax, numberOfRooms, this.numberOfNights, roomCost));
    };
    Accommodation.prototype.addMultiRoom = function (numberOfPax, numberOfRooms, roomCost) {
        this.addStayCost(new accommodation_cost_1.AccommodationCost("Multi-Occupancy", accommodation_cost_2.RoomType.MultipleOccupancy, numberOfPax, numberOfRooms, this.numberOfNights, roomCost));
    };
    Accommodation.prototype.totalCost = function () {
        var combined = 0;
        for (var _i = 0, _a = this.stayCost; _i < _a.length; _i++) {
            var r = _a[_i];
            combined += r.totalCost();
        }
        return combined;
    };
    Accommodation.prototype.totalCostPerRoomType = function (type) {
        var combined = 0;
        for (var _i = 0, _a = this.stayCost; _i < _a.length; _i++) {
            var r = _a[_i];
            if (r instanceof accommodation_cost_1.AccommodationCost) {
                var room = r;
                if (room.type == type)
                    combined += r.totalCostPerPerson(room.numberPax);
            }
        }
        return combined;
    };
    Accommodation.prototype.addStayCost = function (cost) {
        this.stayCost.push(cost);
    };
    return Accommodation;
}(cost_1.Cost));
exports.Accommodation = Accommodation;
//# sourceMappingURL=accommodation.js.map