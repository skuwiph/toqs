import { Cost } from './cost';

export enum RoomType {
    Single = 1,
    Double = 2,
    Twin = 3,
    MultipleOccupancy = 4
};

// TODO(ian):handle feature rooms
export class AccommodationCost extends Cost {
    // type: 1 - Single, 2- Double, 3- Twin, 4- MultipleOccupancy
    type:RoomType;               
    numberPax:number;
    numberOfRooms:number;
    numberOfNights:number;
    roomCost:number;

    constructor(public name:string, type:RoomType, numberPax:number, numberOfRooms:number, numberOfNights:number, roomCost:number){
        super(name);
        this.type = type;
        this.numberPax = numberPax;
        this.numberOfRooms = numberOfRooms;
        this.numberOfNights = numberOfNights;
        this.roomCost = roomCost;
    }

    totalCost(): number {
        return this.roomCost * this.numberOfRooms * this.numberOfNights;
    }
}