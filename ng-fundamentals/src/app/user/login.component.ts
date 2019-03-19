import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html'
})

export class LoginComponent{

  constructor(private _authService: AuthService, private router: Router){

  }
  username;
  password;

  login(formValue){
    this._authService.loginUser(formValue.userName, formValue.password);
    this.router.navigate(['events']);
  }

  cancel(){
    this.router.navigate(['events']);
  }
}
