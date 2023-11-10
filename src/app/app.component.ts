import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Clear List';
  showCard = false;
  version = "1.0";
  showVersion = false
  constructor(private router: Router){
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        console.log(event.url);
      }
    });
  }

  displayList() {
    this.router.navigate(['lists'], { queryParams: { data: new Date().toISOString() } });
  }
  displayVersion() {
    alert('Version: ' + this.version);
  }
  toggleCardDisplay() {
    this.showCard = !this.showCard;
  }
}
