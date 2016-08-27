import { Cost } from './cost';

// TODO(ian):handle feature rooms
export class AccommodationCost extends Cost {
    // type: 1 - Twin, 2- Double, 3- MultipleOccupancy
    type:number;               
    numberPax:number;
    numberOfRooms:number;
    numberOfNights:number;
    roomCost:number;

    constructor(public name:string, type:number, numberPax:number, numberOfRooms:number, numberOfNights:number, roomCost:number){
        super(name);
        this.type = type;
        this.numberPax = numberPax;
        this.numberOfRooms = numberOfRooms;
        this.numberOfNights = numberOfNights;
        this.roomCost = roomCost;
    }

    totalCost(): number {
        return this.roomCost * this.numberPax * this.numberOfRooms * this.numberOfNights;
    }
}