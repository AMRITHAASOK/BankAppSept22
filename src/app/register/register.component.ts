import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  //properties
  acno:any;
  pswd:any;
  uname:any;
  userDetails: any;
  // userDetails:any={
  //   1000:{acno:1000,username:"Amal",password:1000,balance:2000},
  //   1001:{acno:1001,username:"Arun",password:1001,balance:2000},
  //   1002:{acno:1002,username:"Akshay",password:1002,balance:2000},
  // }
  constructor(private ds:DataService,private router:Router) { }

  ngOnInit(): void {
  }
  
  register(){
var uname=this.uname;
var acno=this.acno;
var pswd=this.pswd;
 var userDetails=this.ds.userDetails;

   const result= this.ds.register(acno,uname,pswd)
   if(result){
    alert('Register Successful')
    this.router.navigateByUrl('');
   }
   else{
    alert('Register Failure')
   }
  }
}
