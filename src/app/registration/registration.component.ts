import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  name : any = "";
  email : any = "";
  password : any = "";
  mobile : any = "";
  degree=[
    {id:0, name:"B.Tech"},
    {id:1, name:"B.A"},
    {id:2, name:"B.Com"},
    {id:3, name:"B.Sc"},
    {id:4, name:"BCA"}
  ];


  constructor() { }

  ngOnInit(): void {
  }

  Regsubmit():any{
    var data={
      "name":this.name,
      "email":this.email,
      "password":this.password,
      "mobile":this.mobile,
      "degree":this.degree
    }
  }

}
