import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../service/notification/notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
  providers: []
})
export class NotificationComponent implements OnInit {
  alert: any = {"message": "", "type":""};
  showAlert: boolean = false;

  constructor(private NotificationService: NotificationService) { }

  ngOnInit() {
    this.NotificationService.alertMessage.subscribe(alert => {
      this.alert = alert;
    });
  }
  public getClass(){
    return this.alert.type;
  }
  public getNotificationStatus(){
    console.log("get");
    this.showAlert =  this.NotificationService.getNotificationStatus();
  }
  removeAlert(){
    this.alert.message = '';
  }

}
