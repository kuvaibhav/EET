import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';

import { Tab4Service } from './../tab4.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  public custInfoForm: FormGroup;
  public genders = ['male', 'female'];
  public restrictedEmailId = ['praveenaik@deloitte.com'];
  public cities = [];

  constructor(private tab4Service: Tab4Service) { }

  ngOnInit() {
    this.loadForm();
    this.tab4Service.fetchCities().subscribe(response => {
      this.cities = response;
    });
  }

  loadForm() {
    this.custInfoForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email, this.emailValidator.bind(this)]),
      gender: new FormControl('male'),
      city: new FormControl(null),
      addInterests: new FormArray([]),
    });
  }

  onSubmit() {
    console.log(this.custInfoForm.value);
    this.tab4Service.savePersonalInfo(this.custInfoForm.value).subscribe(() => {
    });
  }

  onAddInterests() {
    const control = new FormControl(null);
    (<FormArray>this.custInfoForm.get('addInterests')).push(control);
  }

  emailValidator(control: FormControl) {
    const input = control.value;
    if (this.restrictedEmailId.indexOf(input) !== -1) {
      return { 'restrictedEmailIdUsed': true };
    }
    return null;
  }

}
