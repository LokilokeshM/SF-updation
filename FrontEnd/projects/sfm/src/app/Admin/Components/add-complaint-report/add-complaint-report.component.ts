import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-complaint-report',
  templateUrl: './add-complaint-report.component.html',
  styleUrls: ['./add-complaint-report.component.css']
})
export class AddComplaintReportComponent implements OnInit {

  complaintForm = this.fb.group({
    vendor: this.fb.array([
      this.fb.control('')
    ])
  });

  get aliases() {
    return this.complaintForm.get('aliases') as FormArray;
  }
  addVendor() {
    this.aliases.push(this.fb.control(''));
  }
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

}
