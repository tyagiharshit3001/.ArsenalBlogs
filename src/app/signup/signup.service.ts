import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Users } from "../login/Users";

@Injectable()
export class SignUpService{
    constructor(private httpClient: HttpClient){
        this.httpClient = httpClient;
    }

    public insertUser(username: string, password:string): Observable<any>{
        return this.httpClient.post("http://localhost:8089/users/insert", new Users(username, password));
    }
}