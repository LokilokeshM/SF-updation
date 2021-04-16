import { Component, ViewChild} from '@angular/core';
import { FormControl } from '@angular/forms';
import { TabsetComponent } from 'ngx-bootstrap/tabs';

@Component({
  selector: 'app-on-boarding',
  templateUrl: './on-boarding.component.html',
  styleUrls: ['./on-boarding.component.css']
})
export class OnBoardingComponent  {
  myControl = new FormControl();
  @ViewChild('staticTabs', { static: false })staticTabs!: TabsetComponent;
  constructor() { }

  ngOnInit(): void {
  }

  selectTab()
  {}
}
