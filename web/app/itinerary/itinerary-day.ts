import { Cost } from '../costing/cost';
//import * as moment from 'moment/moment';

export class ItineraryDay {
    shortDescription:string; // precis (short description)
    longDescription:string;

    costs:Array<Cost> = new Array<Cost>();

    // Day number (0- max); when displaying, add one
    constructor(public day:number){

    }
}