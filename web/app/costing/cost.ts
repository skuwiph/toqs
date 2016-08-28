export class Cost {

    constructor(public name:string){}

    // To be implemented by each class
    totalCost(): number {
        return 0;
    }

    // May not make sense for all costs; check
    totalCostPerPerson(numberOfPax:number): number {
        if( numberOfPax == 0)
            return 0;

        return (this.totalCost()) / numberOfPax;
    }    
}