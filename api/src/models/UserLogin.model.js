import { User } from "./User.model.js";
import {DatabaseSync} from "node:sqlite"

export class UserLogin{

    constructor(){
        this.db=new DatabaseSync("main.db");
    }

    InsertOne(user){
        const statement= this.db.prepare(`SELECT * FROM users WHERE username='${user.username}';`)
        if(statement.all().length==0){
             this.db.exec(`
                INSERT INTO users (username,password,name,surname,phone)
                VALUES(
                    '${user.username}',
                    '${user.password}',
                    '${user.name}',
                    '${user.surname}',
                    '${user.phone}');`);     
            return {
                status:"OK",
                message:"User Added Successfully !"
            }
        }
        else{
            return {
                status:"ERROR",
                message:"There is a user with this informations"
            }
        }                    
    }

    Check(username,password){
        let inp_user=new User(username,password,"0","0","0");       
        const statement=this.db.prepare(`SELECT * FROM users WHERE username='${inp_user.username}' AND password='${inp_user.password}';`);

        if(statement.all().length!=0){
            return {
                status:"OK",
                message:"Login Successfull"
            };
        }else{
            return {
                status:"ERROR",
                message:"Login Unsuccessfull"
            };
        }

    }

    GetOne(userid){
        const statement=this.db.prepare(`SELECT * FROM users WHERE userid=${userid};`);
        if(statement.all().length!=0){

            return {
                status:"OK",
                message:"User is Found",
                user:[statement.all()[0]]
            };
        }
        return {
            status:"ERROR",
            message:"There is no users",
            user:[]
        }
    }

}