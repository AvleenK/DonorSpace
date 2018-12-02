import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormControl, FormBuilder} from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medical-upload',
  templateUrl: './medical-upload.component.html',
  styleUrls: ['./medical-upload.component.css']
})
export class MedicalUploadComponent implements OnInit {

  formGroup = this.fb.group({
    file: [null, Validators.required]
  });

  constructor(private fb: FormBuilder, private cd: ChangeDetectorRef, private router: Router) { }

  onSubmit() {
    this.router.navigate(['/medicalDone']);
  }

  onFileChange(event) {
    let reader = new FileReader();
   
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
    
      reader.onload = () => {
        this.formGroup.patchValue({
          file: reader.result
        });
        
        // need to run CD since file load runs outside of zone
        this.cd.markForCheck();
      };
    }
  }

  ngOnInit() {
  }

}
