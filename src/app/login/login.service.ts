import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Users } from "./Users";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";

@Injectable()
export class UsersService{
    constructor(private httpClient: HttpClient){
        this.httpClient = httpClient;
    }

    isLoggedIn :any = false;
    login(){
        this.isLoggedIn=true;
    }

    logout(){
        this.isLoggedIn = false;
    }

    getIsLoggedIn(){
        return this.isLoggedIn;
    }
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.getIsLoggedIn();
    }

    public getAllUsers(): Observable<any>{
        return this.httpClient.get("http://localhost:8089/users/");
    }

    public getUserById(username:string) :Observable<any>{
        return this.httpClient.get("http://localhost:8089/users/"+username);
    }

   
    
    public validate(u:Users):Observable<any>{
        var data = this.httpClient.post("http://localhost:8089/users/authenticate", u);
        console.log(data);
        if(data != null)
          this.isLoggedIn = true;
        else 
          this.isLoggedIn = false;
        return data;
    }
}