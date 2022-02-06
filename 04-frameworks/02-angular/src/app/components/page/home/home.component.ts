import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  getUserIsLogged:boolean;

  constructor(private authService: AuthService, private routes:Router) {
     this.getUserIsLogged = this.authService.isLogged();
  }

  ngOnInit(): void {
    if (this.getUserIsLogged) this.routes.navigate(["dashboard"]);
  }



}
