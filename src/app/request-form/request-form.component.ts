import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder} from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.css']
})
export class RequestFormComponent implements OnInit {

  reqForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.reqForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      phoneNo: new FormControl('', [Validators.required, Validators.maxLength(10), Validators.minLength(10)]),
      username: new FormControl('', [Validators.required, Validators.minLength(4)]),
      bloodGroup: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      district: new FormControl('', Validators.required),
      pin: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(6)])
    })
  }

}
