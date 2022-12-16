import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {//3rd executed
//class is a collection of properties and methods.
  constructor() {//1st executed 
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

  userDetails:any={
    1000:{acno:1000,username:"Amal",password:1000,balance:2000},
    1001:{acno:1001,username:"Arun",password:1001,balance:2000},
    1002:{acno:1002,username:"Akshay",password:1002,balance:2000},
  }
  //userdefined functions//4th executed
  login(){
    var acno=this.acno;
    var pswd=this.pswd;
    var userDetails=this.userDetails;

    if(acno in userDetails){
      if(pswd==userDetails[acno]['password']){
        alert('Login successful');
      }
      else{
        alert('Incorrect password')
      }
    }
    else{
      alert('User not found')
    }
    // alert('Login clicked');
  }

  
  acnoChange(event:any){
// console.log(event.target.value);
this.acno = event.target.value;//1000
console.log(this.acno);


  }
  pswdChange(event:any){
    // console.log(event.target.value);
    this.pswd = event.target.value;
    console.log(this.pswd);
    
  }
}
