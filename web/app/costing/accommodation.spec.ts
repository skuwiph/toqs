import { Accommodation } from './accommodation';
import { RoomType } from './accommodation-cost';
import { AccommodationCost } from './accommodation-cost';

describe('Accommodation', () => {
    it('Accommodation is 3640 for 21 pax, 14 twins, 3 singles, 21 breakfasts over two nights', () => {
        let cost:Accommodation = new Accommodation("Travelodge", 2);
        cost.addTwinRoom(14, 7, 140);
        cost.addSingleRoom(3, 3, 140);
        cost.addBreakfast(21, 2, 20.00);

        expect(cost.totalCost()).toEqual(3640.00)}
    );

    it('Accommodation is 140pp for 14 pax, 14 twins, over two nights at 140 per room', () => {
        let cost:Accommodation = new Accommodation("Travelodge", 2);
        cost.addTwinRoom(14, 7, 140);
        cost.addSingleRoom(3, 3, 140);
        cost.addBreakfast(21, 2, 20.00);

        expect(cost.totalCostPerRoomType(RoomType.Twin)).toEqual(140.00)}
    );    

    it('Accommodation is 280pp for 3 pax, 3 singles, over two nights at 140 per room', () => {
        let cost:Accommodation = new Accommodation("Travelodge", 2);
        cost.addTwinRoom(14, 7, 140);
        cost.addSingleRoom(3, 3, 140);
        cost.addBreakfast(21, 2, 20.00);

        expect(cost.totalCostPerRoomType(RoomType.Single)).toEqual(280.00)}
    );        
});