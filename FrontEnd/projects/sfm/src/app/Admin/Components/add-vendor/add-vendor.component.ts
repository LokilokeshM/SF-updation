import { Component, OnInit, ViewChild } from '@angular/core';
import { TabsetComponent } from 'ngx-bootstrap/tabs';

@Component({
  selector: 'app-add-vendor',
  templateUrl: './add-vendor.component.html',
  styleUrls: ['./add-vendor.component.css']
})
export class AddVendorComponent implements OnInit {

  @ViewChild('staticTabs', { static: false })staticTabs!: TabsetComponent;
  constructor() { }

  ngOnInit(): void {
  }

}
