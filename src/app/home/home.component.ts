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
  name: string = "";
  sample: object = {"title": "Home", "category": "sub"};
  observeData: Observable<string>;
  items = [];
  noData: boolean = true;
  constructor() { 
    this.observeData = this.getObservable();
  }
  getObservable(){
    return new Observable<string>((observer: Subscriber<string>) => {
      setInterval(() => observer.next("hello"), 5000);
    });
  }
  ngOnInit() {
    this.name = "";
  }
  //Called when add button is clicked
  add(){
    this.items.push(this.name);
    this.noData = false
  }
  //Called whenever input value changes
  onType(event: Event){
    var val = (<HTMLInputElement>event.target).value;
    console.log("val", val);
  }
  addColor(){
    return "#990952";
  }
}
