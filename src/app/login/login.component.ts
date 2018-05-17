import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NotificationService } from "../service/notification/notification.service";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: []
})
export class LoginComponent implements OnInit {
  user: any;
  email: string;
  password: string;
  alertMessage: any;
  constructor(private router: Router,
              private NotificationService: NotificationService) { }

  ngOnInit() {
    this.NotificationService.alertMessage.subscribe(alert => this.alertMessage = alert);
  }
  ngOnSubmit(form: NgForm){   
    if(form.value.email === "vel" && form.value.password === "vel")
      this.router.navigate(['/home']);
    else
    this.NotificationService.getAlert({"type": "error", "message": "Username/Password is invalid"});
  }

}
