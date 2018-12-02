import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder} from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reg-form',
  templateUrl: './reg-form.component.html',
  styleUrls: ['./reg-form.component.css']
})
export class RegFormComponent implements OnInit {

  regForm: FormGroup;

  //List of all the blood groups
  bloodGroupList = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

  constructor(private fb: FormBuilder, private router: Router) {
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

  onSubmit() {
    this.router.navigate(['/redirect']);
  }

  closeModal() {
    
  }

  ngOnInit() {
    this.regForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      phoneNo: new FormControl('', [Validators.required, Validators.pattern('[0-9]*'), Validators.maxLength(10), Validators.minLength(10)]),
      username: new FormControl('', [Validators.required, Validators.pattern('[A-Za-z]*'),Validators.minLength(4)]),
      dob: new FormControl('', [Validators.required]),
      bloodGroup: new FormControl('', [Validators.required, Validators.pattern('(A|B|AB|O)[-+]')]),
      address: new FormControl('', Validators.required),
      district: new FormControl('', Validators.required),
      pin: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(6)])
    })
    var submitBtn = document.getElementById("submitBtn");
    submitBtn.addEventListener("click", (e:Event) => {
      this.displayData();
      this.closeModal();
    });
  }
}