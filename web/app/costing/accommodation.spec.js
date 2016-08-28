"use strict";
var accommodation_1 = require('./accommodation');
var accommodation_cost_1 = require('./accommodation-cost');
describe('Accommodation', function () {
    it('Accommodation is 3640 for 21 pax, 14 twins, 3 singles, 21 breakfasts over two nights', function () {
        var cost = new accommodation_1.Accommodation("Travelodge", 2);
        cost.addTwinRoom(14, 7, 140);
        cost.addSingleRoom(3, 3, 140);
        cost.addBreakfast(21, 2, 20.00);
        expect(cost.totalCost()).toEqual(3640.00);
    });
    it('Accommodation is 140pp for 14 pax, 14 twins, over two nights at 140 per room', function () {
        var cost = new accommodation_1.Accommodation("Travelodge", 2);
        cost.addTwinRoom(14, 7, 140);
        cost.addSingleRoom(3, 3, 140);
        cost.addBreakfast(21, 2, 20.00);
        expect(cost.totalCostPerRoomType(accommodation_cost_1.RoomType.Twin)).toEqual(140.00);
    });
    it('Accommodation is 280pp for 3 pax, 3 singles, over two nights at 140 per room', function () {
        var cost = new accommodation_1.Accommodation("Travelodge", 2);
        cost.addTwinRoom(14, 7, 140);
        cost.addSingleRoom(3, 3, 140);
        cost.addBreakfast(21, 2, 20.00);
        expect(cost.totalCostPerRoomType(accommodation_cost_1.RoomType.Single)).toEqual(280.00);
    });
});
//# sourceMappingURL=accommodation.spec.js.map