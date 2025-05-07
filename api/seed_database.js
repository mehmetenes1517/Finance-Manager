import {DatabaseSync} from "node:sqlite"


let db=new DatabaseSync("main.db");



db.exec(`CREATE TABLE IF NOT EXISTS users(userid INTEGER NOT NULL PRIMARY KEY,username TEXT NOT NULL,password INTEGER NOT NULL,name TEXT NOT NULL,surname TEXT NOT NULL,phone TEXT NOT NULL);`);

