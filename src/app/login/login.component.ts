import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
   
  }
  fun1():any{
    this.router.navigate(['/dashboard']);
  }
  fun2():any{
    this.router.navigate(['/registration']);
  }
  run():any{
    this.router.navigate(["/header"]);
  }

}
