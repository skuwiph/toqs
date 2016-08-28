import { IndividualCost } from './individual-cost';

describe('Individual Costs', () => {
    it('IndividualCost is 396 for 20 pax, for one Adult Tower entrance', () => {
        let cost:IndividualCost = new IndividualCost("Adult Tower", 20, 1, 19.80);
        expect(cost.totalCost()).toEqual(396.00)}
    );

    it('IndividualCost is 19.80 for each pax, for one Adult Tower entrance', () => {
        let cost:IndividualCost = new IndividualCost("Adult Tower", 20, 1, 19.80);
        expect(cost.totalCostPerPerson(20)).toEqual(19.80)}
    );
        
});