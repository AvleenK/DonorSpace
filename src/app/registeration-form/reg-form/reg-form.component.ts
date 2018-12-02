import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder} from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-reg-form',
  templateUrl: './reg-form.component.html',
  styleUrls: ['./reg-form.component.css']
})
export class RegFormComponent implements OnInit {

  regForm: FormGroup;

  //List of all the blood groups
  bloodGroupList = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

  constructor(private fb: FormBuilder) {
  }


  displayData() {
    console.log(this.regForm.controls.email.value);
    console.log(this.regForm.controls.phoneNo.value);
    console.log(this.regForm.controls.username.value);
    console.log(this.regForm.controls.dob.value);
    console.log(this.regForm.controls.bloodGroup.value);
    console.log(this.regForm.controls.address.value);
    console.log(this.regForm.controls.district.value);
    console.log(this.regForm.controls.pin.value);
  }

  ngOnInit() {
    this.regForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      phoneNo: new FormControl('', [Validators.required, Validators.maxLength(10), Validators.minLength(10)]),
      username: new FormControl('', [Validators.required, Validators.minLength(4)]),
      dob: new FormControl('', [Validators.required]),
      bloodGroup: new FormControl(''),
      address: new FormControl('', Validators.required),
      district: new FormControl('', Validators.required),
      pin: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(6)])
    })
    var submitBtn = document.getElementById("submitBtn");
    submitBtn.addEventListener("click", (e:Event) => this.displayData());
  }
}