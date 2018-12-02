import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from '@angular/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Donor Space';
  private apiUrl = '';
  data: any = {};

  constructor(private http: HttpClient){
    console.log('Hello from the frontend');
    this.getResponse();
  }

  getData() {
    return this.http.get(this.apiUrl).pipe(map((res: Response) => res.json()));
  }

  getResponse() {
    this.getData().subscribe(res => {
      console.log(res);
      this.data = res;
    })
  }
}
