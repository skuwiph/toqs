import { Cost } from './cost';

export class IndividualCost extends Cost {
    numberOfUnits:number;
    numberPax:number;
    unitCost:number;

    constructor(public name:string, numberPax:number, numberOfUnits:number, unitCost:number){
        super(name);
        this.numberPax = numberPax;
        this.numberOfUnits = numberOfUnits;
        this.unitCost = unitCost;
    }

    totalCost(): number {
        return this.numberPax * this.numberOfUnits * this.unitCost;
    }

}