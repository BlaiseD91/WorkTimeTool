import { Component } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  messages:any

  constructor(private config:ConfigService) {
    config.getConfig().subscribe(
      (response:any) => {
        this.messages = response.nav.menu
      }
    )
  }
}
