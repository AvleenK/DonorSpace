import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder} from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.css']
})
export class RequestFormComponent implements OnInit {

  reqForm: FormGroup;


  constructor(private fb: FormBuilder, private router: Router) { }

  displayData() {
    console.log(this.reqForm.controls.email.value);
    console.log(this.reqForm.controls.phoneNo.value);
    console.log(this.reqForm.controls.username.value);
    console.log(this.reqForm.controls.bloodGroup.value);
    console.log(this.reqForm.controls.address.value);
    console.log(this.reqForm.controls.district.value);
    console.log(this.reqForm.controls.pin.value);
  }

  onSubmit() {
    this.router.navigate(['/medicalUpload']);
  }

  ngOnInit() {
    this.reqForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      phoneNo: new FormControl('', [Validators.required, Validators.required, Validators.pattern('[0-9]*'), Validators.maxLength(10), Validators.minLength(10)]),
      username: new FormControl('', [Validators.required, Validators.pattern('[A-Za-z]*'), Validators.minLength(4)]),
      bloodGroup: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      district: new FormControl('', Validators.required),
      pin: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(6)])
    })

    var submitBtn = document.getElementById("submitBtn");
    submitBtn.addEventListener("click", (e:Event) => {
      this.displayData();
    });

  }

}
