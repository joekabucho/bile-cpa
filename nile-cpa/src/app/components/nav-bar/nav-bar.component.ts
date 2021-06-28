import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { AppUser } from 'src/app/models/appuser';
import {EventEmitterService} from '../../services/event-emitter.service';

declare var $:any;

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  appUser: AppUser;
  public showLogIn = false;

  constructor(private authService: AuthService,
              private eventEmitterService: EventEmitterService,
  ) { }

  ngOnInit() {

    $(function() {
          // Toggle open and close nav styles on click
      $('#nav-toggle').click(function() {
          $('nav ul').slideToggle();
      });
      $('#nav-toggle').on('click', function() {
          this.classList.toggle('active')
      })
  })

    if (this.eventEmitterService.subsVar===undefined) {
      this.eventEmitterService.subsVar = this.eventEmitterService.
      invokeFirstComponentFunction.subscribe((name:string) => {
        this.setTrue();
      });
    }
    this.authService.appUser$.subscribe(appUser => this.appUser = appUser);
  }

   setTrue() {
    this.showLogIn = true;
  }
   setFalse() {
    this.showLogIn = false;
  }
  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }
}
