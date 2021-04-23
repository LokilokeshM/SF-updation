import { CompanyAddress } from "./company-address";

export class Vendor {

    public  vendorId ?:number;

    public  vendorName:string="";
    
    public  dob:any;
    
    public  phoneNumber:number = 0 ;

    public  email:string="";

    public  companyName:string="";

	public  occupation:string="";

	public  specification:string="";
	
    public companyAddrress:CompanyAddress[] = [];
	
    public status:string="";
}
