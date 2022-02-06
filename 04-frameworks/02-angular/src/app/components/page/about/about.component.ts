import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  getUserIsLogged:boolean;

  constructor(private authService: AuthService, private routes:Router) {
     this.getUserIsLogged = this.authService.isLogged();
  }

  ngOnInit(): void {
    if (this.getUserIsLogged) this.routes.navigate(["dashboard"]);
  }


}
