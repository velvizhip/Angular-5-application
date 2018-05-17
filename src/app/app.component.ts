import { Component } from '@angular/core';
import { NotificationService } from './service/notification/notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NotificationService]
})
export class AppComponent {
  windowHeight: string;

  ngOnInit() {
    console.log("fhgg", screen.height);
  }
  getHeight(){
    let windowHeight = (window.screen.height - 230) + "px";
    return windowHeight;
  }
  
}
