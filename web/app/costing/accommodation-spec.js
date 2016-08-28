"use strict";
var accommodation_1 = require('./accommodation');
describe('Accommodation', function () {
    it('Accommodation is 3640 for 21 pax, 14 twins, 3 singles, 21 breakfasts over two nights', function () {
        var cost = new accommodation_1.Accommodation("Travelodge", 2);
        cost.addTwinRoom(14, 7, 140);
        cost.addSingleRoom(3, 3, 140);
        cost.addBreakfast(21, 2, 20.00);
        expect(cost.totalCost()).toEqual(3640.00);
    });
});
//# sourceMappingURL=accommodation-spec.js.map