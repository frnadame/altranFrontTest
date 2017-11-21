import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Component, Optional } from '@angular/core';
import { Http } from '@angular/http';
import { Brastlewark} from './brastlewark/brastlewark';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  data: Brastlewark[];

  constructor(
    private http: Http,
  ) { }

  ngOnInit(): void {
    // Make the HTTP request:
    this.http.get('https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json').subscribe(data => {
      this.data = [];
      const jsonParsed = JSON.parse(data['_body']).Brastlewark;
      for (let index = 0; index < jsonParsed.length; index++) {
        this.data.push(new Brastlewark(jsonParsed[index]));
      }
      console.log(this.data);
    });
  }
}
