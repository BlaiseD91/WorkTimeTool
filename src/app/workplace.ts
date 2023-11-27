export class WorkPlace {
    key?:number;
    name?:string;
    zip?:number;
    city?:string;
    address?:string;
    phone?:string;
    email?:string;

    constructor(key:number, name:string, zip:number, city:string, address:string, phone:string, email:string) {
        this.key = key;
        this.name = name;
        this.zip = zip;
        this.city = city;
        this.address = address;
        this.phone = phone;
        this.email = email;
    }
}