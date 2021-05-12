import { Component, OnInit } from '@angular/core';
import { Form, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-events',
  templateUrl: './add-events.component.html',
  styleUrls: ['./add-events.component.css']
})
export class AddEventsComponent implements OnInit {
  
  addEvent:FormGroup = new FormGroup({});
  constructor() { }

  ngOnInit(): void {
  }


  add()
  {

  }
}
