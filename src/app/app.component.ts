import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Component, Optional } from '@angular/core';
import { Http } from '@angular/http';
import { Brastlewark} from './brastlewark/brastlewark';
import { HttpService } from './services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HttpService]
})
export class AppComponent implements OnInit {
  data: Brastlewark[];
  searchStr: string;
  limit: 5;

  constructor(
    private service: HttpService
  ) { }

  ngOnInit(): void {
    this.searchStr = '';
    // Make the HTTP request:
    this.search();
  }

  search = function() {
    this.service.getData().subscribe(res => {
      this.data = res.Brastlewark.filter(x => x.name.search(this.searchStr) > -1);
      console.log(res.Brastlewark.filter(x => x.name.search(this.searchStr) > -1));
    });
  };

}
