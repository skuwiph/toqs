import { Cost } from './cost';

export class SharedCost extends Cost {
    numberOfDays:number;
    numberOfUnits:number;
    unitCost:number

    constructor(public name:string, numberOfDays:number, numberOfUnits:number, unitCost:number){
        super(name);
        this.numberOfDays = numberOfDays;
        this.numberOfUnits = numberOfUnits;
        this.unitCost = unitCost;
    }

    totalCost(): number {
        return this.unitCost * this.numberOfDays * this.numberOfUnits;
    }


}