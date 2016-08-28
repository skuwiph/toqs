"use strict";
var shared_cost_1 = require('./shared-cost');
describe('Shared Costs', function () {
    it('Shared Cost is 420 for one unit, for one day', function () {
        var cost = new shared_cost_1.SharedCost("Coach 53 Seater FD", 1, 1, 420.00);
        expect(cost.totalCost()).toEqual(420.00);
    });
    it('Shared Cost is 840 for one unit, for two days', function () {
        var cost = new shared_cost_1.SharedCost("Coach 53 Seater FD", 2, 1, 420.00);
        expect(cost.totalCost()).toEqual(840.00);
    });
    it('Shared Cost is 84 for one unit, for two days, spread over 10 pax', function () {
        var cost = new shared_cost_1.SharedCost("Coach 53 Seater FD", 2, 1, 420.00);
        expect(cost.totalCostPerPerson(10)).toEqual(84.00);
    });
});
//# sourceMappingURL=shared-cost.spec.js.map