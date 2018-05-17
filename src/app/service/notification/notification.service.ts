import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class NotificationService {
  showNotification: boolean = false;
  private alert = new Subject<object>();
  alertMessage = this.alert.asObservable();
  
  constructor() { }
  public getAlert(data: object){
    console.log("data--------------------------------------------", data);
    this.showNotification = true;
    this.alert.next(data);    
  }  
  public getNotificationStatus(){
    return this.showNotification;
  }
}
