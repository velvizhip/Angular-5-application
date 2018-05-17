import { Component, OnInit } from '@angular/core';
import { resolve } from 'url';
import { reject } from 'q';
import { Observable } from 'rxjs/Observable';
import { Subscriber } from 'rxjs/Subscriber';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  text: string = "";
  sample: object = {"title": "Home", "category": "sub"};
  observeData: Observable<string>;
  items = ["hello"];
  constructor() { 
    this.observeData = this.getObservable();
  }
  getObservable(){
    return new Observable<string>((observer: Subscriber<string>) => {
      setInterval(() => observer.next("hello"), 5000);
    });
  }
  ngOnInit() {
    this.text = "hello";
  }
  add(){
    this.items.push(this.text);
  }


}
