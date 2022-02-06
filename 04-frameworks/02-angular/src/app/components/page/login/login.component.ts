import { Component, OnInit, Input} from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { MemberLogin } from "../../../model/memberlogin";
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  @Input() disabled: boolean = false;

  user: MemberLogin;
  respUser: boolean;
  messageError: boolean;
  loading: boolean;
  getUserIsLogged:boolean;

  constructor(private authService: AuthService, private routes: Router) {
    this.user = {
        username: "",
        password: "",
      }
    this.respUser = false;
    this.messageError = false;
    this.loading = false;
    this.getUserIsLogged = this.authService.isLogged();
  }

  private subcriptionLogin = new Subscription();

  ngOnInit(): void {
    if (this.getUserIsLogged) this.routes.navigate(["dashboard"]);
  }

  ngOnDestroy() {
    this.subcriptionLogin.unsubscribe();
  }

  onlogin(){
    this.loading = true;
    this.subcriptionLogin.add(
      this.authService.login$(this.user).subscribe(
        newRespUser => {
          this.respUser = newRespUser;
          if (this.respUser){
            localStorage.setItem("user", this.user.username)
            this.routes.navigate(['dashboard']);
            this.messageError = false;
            //console.log("Login Successful");
          } else {
            this.messageError = true;
            //console.log("Login not Successful");
          }
          this.loading = false;
        }
      )
    );
  }

  // onlogin(){
  //   this.respUser = this.authService.login(this.user);
  //   if (this.respUser){
  //     localStorage.setItem("user", this.user.username)
  //     this.routes.navigate(['dashboard']);
  //     this.messageError = false;
  //     //console.log("Login Successful");
  //   } else {
  //     this.messageError = true;
  //     //console.log("Login not Successful");
  //   }
  // }

}
