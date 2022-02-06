import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header-public',
  templateUrl: './header-public.component.html',
  styleUrls: ['./header-public.component.scss']
})
export class HeaderPublicComponent implements OnInit {

  username: string | null;
  getUserIsLogged: boolean;

  constructor( private authservice: AuthService ) {

    this.username = this.authservice.getUsername();
    this.getUserIsLogged = this.authservice.isLogged();

  }

  ngOnInit(): void {
  }

  ngDoCheck(){
    this.getUserIsLogged = this.authservice.isLogged();
    this.username = this.authservice.getUsername();
  }


  onLogout(){
    this.authservice.logout();
  }

}
