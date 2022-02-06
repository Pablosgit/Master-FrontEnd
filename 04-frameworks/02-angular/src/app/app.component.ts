import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = '02-angular';
  getUserIsLogged:boolean;

  constructor(private authservice: AuthService, private routes:Router){
    this.getUserIsLogged = this.authservice.isLogged();
  }

  ngDoCheck(){
    this.getUserIsLogged = this.authservice.isLogged();
  }

  ngOnInit(): void {

  }

}
