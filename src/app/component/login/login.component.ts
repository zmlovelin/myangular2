import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private name:string;
  private password:string;
  private active:boolean =true;

  constructor(
    private  router:Router,
  ) { }
   
  submit(){
   
    console.log(this.name);
    console.log(this.password)
    if(this.name=="admin" && this.password=="pass1234"){
      
        this.active=false;
        this.router.navigate(['home'])
    }else {
      this.active=true;
      alert("失败")
    }
  }

  ngOnInit() {
  }

}
