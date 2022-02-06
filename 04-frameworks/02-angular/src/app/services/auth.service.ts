import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MemberLogin } from "../model/memberlogin";
import { delay, Observable, of, Subject} from "rxjs";


@Injectable({
  providedIn: 'root'
})

export class AuthService {

  userdata: MemberLogin = {
    username: "master8@lemoncode.net",
    password: "12345678",
  }

  constructor(private router: Router) { }

  login$(user:MemberLogin):Observable<boolean> {
    return of(user.username === this.userdata.username && user.password === this.userdata.password).pipe(delay(2000));
  }

  // login (user:MemberLogin):boolean {
  //   return user.username === this.userdata.username && user.password === this.userdata.password
  // }

  logout():void{
    localStorage.removeItem("user");
    this.router.navigate(["home"]);
  }

  isLogged():boolean {
    return localStorage.getItem("user")? true: false;
  }

  getUsername(){
    return localStorage.getItem("user");
  }

}
