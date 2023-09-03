import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Users } from './Users';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  user:any = null ;
  users:any[] = [];
  constructor(private httpClient: HttpClient,private loginService:UsersService, private router:Router, private activeRoute:ActivatedRoute){}

  ngOnInit(): void {
      this.loginService.getAllUsers().subscribe((data) =>this.users = data);
  }

  public validate(username:string, password:string):boolean{ 
     
    var ab = this.loginService.validate(new Users(username, password)).subscribe((data) =>this.users = data);
    console.log(this.users);
    return false;
  }


  public authenticate(username:string, password:string): void{
    this.user = new Users(username, password);
    console.log(this.users);
    for(var i=0; i<this.users.length; i++){  
      if(this.users[i].username == this.user.username && this.users[i].password == this.user.password){
        alert("User Authorized!!!");
        return;
      }
    }
      console.log("Authentication Failed..."+username+"\n"+password)
      alert("Invalid User");
    
  }
}
