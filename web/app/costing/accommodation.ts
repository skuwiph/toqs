import { Cost } from './cost';
import { AccommodationCost } from './accommodation-cost';
import { RoomType } from './accommodation-cost';
import { IndividualCost } from './individual-cost';

export class Accommodation extends Cost {
    // TODO(ian):rename to stayCost
    stayCost:Array<Cost> = new Array<Cost>();
    numberOfNights:number; 

    // TODO(ian): add hotel details, booking reference, etc?
    constructor(public name:string, numberOfNights:number) {
        super(name);
        this.numberOfNights = numberOfNights;
    }

    addBreakfast(numberOfPax:number, numberOfDays:number, unitCost:number)
    {
        this.addStayCost(new IndividualCost(
            "Breakfast",
            numberOfPax,
            numberOfDays,
            unitCost));
    }

    addSingleRoom(numberOfPax:number, numberOfRooms:number, roomCost:number)
    {
        this.addStayCost( new AccommodationCost(
            "Single", 
            RoomType.Single, 
            numberOfPax, 
            numberOfRooms, 
            this.numberOfNights, 
            roomCost));
    }

    addDoubleRoom(numberOfPax:number, numberOfRooms:number, roomCost:number)
    {
        this.addStayCost( new AccommodationCost(
            "Double", 
            RoomType.Double, 
            numberOfPax, 
            numberOfRooms, 
            this.numberOfNights, 
            roomCost));
    }

    addTwinRoom(numberOfPax:number, numberOfRooms:number, roomCost:number)
    {
        this.addStayCost( new AccommodationCost(
            "Twin", 
            RoomType.Twin, 
            numberOfPax, 
            numberOfRooms, 
            this.numberOfNights, 
            roomCost));
    }

    addMultiRoom(numberOfPax:number, numberOfRooms:number, roomCost:number)
    {
        this.addStayCost( new AccommodationCost(
            "Multi-Occupancy", 
            RoomType.MultipleOccupancy, 
            numberOfPax, 
            numberOfRooms, 
            this.numberOfNights, 
            roomCost));
    }

    totalCost(): number {
        let combined:number = 0;

        for( let r of this.stayCost) {
            combined += r.totalCost();
        }

        return combined;
    }

    totalCostPerRoomType(type:RoomType) {
        let combined:number = 0;

        for( let r of this.stayCost) {
            if( r instanceof AccommodationCost ){
                let room:AccommodationCost = <AccommodationCost>r;
                if( room.type == type )
                    combined += r.totalCostPerPerson(room.numberPax);
            }
        }

        return combined;
    }

    private addStayCost(cost:Cost) {
        this.stayCost.push(cost);
    }
}