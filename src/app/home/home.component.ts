import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  text: string = "";
  items = ["hello"];
  constructor() { }

  ngOnInit() {
    this.text = "hello";
  }
  add(){
    this.items.push(this.text);
  }

}
