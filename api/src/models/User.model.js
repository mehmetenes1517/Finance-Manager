import {createHash} from "crypto"


export class User{

    constructor(username,password,name,surname,phone){
        this.username=username;
        this.password=createHash('sha256').update(password).digest('hex');
        this.name=name;
        this.surname=surname;
        this.phone=phone;
    }
};