import { Component, OnInit } from '@angular/core';
import { SignUpService } from './signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user:any = null ;
  constructor(private signupService:SignUpService){}

  ngOnInit(): void {
      
  }

  public addUser(username:string, password:string):boolean{
    if(this.signupService.insertUser(username,password).subscribe((data)=> this.user=data))
      return true;
    return false;
  }
}
