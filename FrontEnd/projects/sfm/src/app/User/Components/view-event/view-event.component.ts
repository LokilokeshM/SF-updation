import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-event',
  templateUrl: './view-event.component.html',
  styleUrls: ['./view-event.component.css']
})
export class ViewEventComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {

    // if(!navigator.geolocation)
    // {
    //   console.log("No location found");
    // }

    // navigator.geolocation.getCurrentPosition((position) => {
    //   console.log(`lat : ${position.coords.latitude}, long: ${position.coords.longitude}`);
    // })
  }

}
