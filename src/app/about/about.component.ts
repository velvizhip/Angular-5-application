import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { } from '@types/googlemaps';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;
  location:string = "";
  latitude:number = 0;
  longitude:number = 0;

  constructor(private route: ActivatedRoute, private router: Router) { 
    this.route.params.subscribe(res => console.log(res.id));    
  }
  sendBack(){
    this.router.navigate(['']);
  }
  ngOnInit() {
    this.getLocation();
  }
  getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position)=>{
          this.showPosition(position);
        });
    } else {
      this.location = "Geolocation is not supported by this browser.";
    }
  }
  showPosition(position) {
    this.latitude = position.coords.latitude;
    this.longitude = position.coords.longitude;
    var mapProp = {
      center: new google.maps.LatLng(this.latitude, this.longitude),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
  }
}
