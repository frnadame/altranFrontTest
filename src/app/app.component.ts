import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  data: {};

  constructor(
    private http: Http
  ) { }

  ngOnInit(): void {
    // Make the HTTP request:
    this.http.get('https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json').subscribe(data => {
      this.data = JSON.parse(data['_body']).Brastlewark;
      console.log(this.data);
    });
  }
}
