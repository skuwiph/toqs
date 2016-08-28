"use strict";
var individual_cost_1 = require('./individual-cost');
describe('Individual Costs', function () {
    it('IndividualCost is 396 for 20 pax, for one Adult Tower entrance', function () {
        var cost = new individual_cost_1.IndividualCost("Adult Tower", 20, 1, 19.80);
        expect(cost.totalCost()).toEqual(396.00);
    });
    it('IndividualCost is 19.80 for each pax, for one Adult Tower entrance', function () {
        var cost = new individual_cost_1.IndividualCost("Adult Tower", 20, 1, 19.80);
        expect(cost.totalCostPerPerson(20)).toEqual(19.80);
    });
});
//# sourceMappingURL=individual-cost.spec.js.map