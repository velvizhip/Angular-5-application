import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  selectedMenu = 1;
  constructor() { }

  ngOnInit() {
  }

  navigateMenu(id){
    this.selectedMenu = id;
  }
}
