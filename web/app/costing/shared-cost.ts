import { Cost } from './cost';

export class SharedCost extends Cost {
    numberOfDays:number;
    unitCost:number
    
    constructor(public name:string, numberOfDays:number, unitCost:number){
        super(name);
        this.numberOfDays = numberOfDays;
        this.unitCost = unitCost;
    }

    totalCost(): number {
        return this.unitCost * this.numberOfDays;
    }
}