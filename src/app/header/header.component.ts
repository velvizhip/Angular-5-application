import { Component, OnInit, Input, OnChanges, OnDestroy, DoCheck, AfterContentChecked, AfterContentInit, AfterViewInit, AfterViewChecked } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  selectedMenu = 1;
  
  //@Input('joke') data: "Joke";
  data: "hkhhj";

  constructor(private router: Router,) {
    console.log(`new - data is ${this.data}`);
  }

  ngOnChanges() {
    //console.log(`ngOnChanges - data is ${this.data}`);
  }

  ngOnInit() {
    //console.log(`ngOnInit  - data is` +  this.data);
  }

  ngDoCheck() {
    //console.log("ngDoCheck", this.data);
  }

  ngAfterContentInit() {
    //console.log("ngAfterContentInit");
  }

  ngAfterContentChecked() {
    //console.log("ngAfterContentChecked", this.data);
  }

  ngAfterViewInit() {
    //console.log("ngAfterViewInit");
  }

  ngAfterViewChecked() {
    //console.log("ngAfterViewChecked");
  }

  ngOnDestroy() {
    //console.log("ngOnDestroy");
  }
  navigateMenu(id){
    this.selectedMenu = id;
  }
  logoutUser(){
    this.router.navigate(['/login']);
  }
}
