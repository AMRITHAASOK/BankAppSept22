import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {//3rd executed
//class is a collection of properties and methods.
  constructor(private router:Router,private ds:DataService) {//1st executed 
                //used for object initialization
                //It automatically invokes when an object is created.
   }

  ngOnInit(): void {//2nd executed
                     //Initial process of a component
                     //when a component is created , at same time it initialize or authorize
                     //When a component is created ,there is a lifecycle for it.
  }

  //properties

  aim="Your perfect banking partner"

  account="Please enter ur acno"

  // acno:any;
  acno:any;//to hold the value from the user

  pswd:any;

  

  login(){
    var acno=this.acno;
    var pswd=this.pswd;
    // var userDetails=this.ds.userDetails;

    const result= this.ds.login(acno,pswd)
   if(result){
    alert('Login Successful')
    this.router.navigateByUrl('dashboard');
   }
   else{
    alert('Login Failure')
   }
  
//   acnoChange(event:any){
// // console.log(event.target.value);
// this.acno = event.target.value;//1000
// console.log(this.acno);


//   }
//   pswdChange(event:any){
//     // console.log(event.target.value);
//     this.pswd = event.target.value;
//     console.log(this.pswd);
    
//   }
}}
