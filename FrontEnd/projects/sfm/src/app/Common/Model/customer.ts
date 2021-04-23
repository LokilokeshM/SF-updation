import { Address } from "./address";
import { HouseDetails } from "./house-details";

export class Customer {
    public customerId ?:number;

    public firstname:string ="";

    public lastname:string ="";

    public email:string ="";

    public phonenumber:number =0;

    public nationality:string ="";

    public dob:any; 

    public religion:string ="";

    public bloodGroup:string ="";

    public oldAddress:Address[] = [];

    public  houseid:HouseDetails[] =[];
}
