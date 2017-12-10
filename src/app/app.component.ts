import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Component, Optional } from '@angular/core';
import { Brastlewark } from './brastlewark/brastlewark';
import { HttpService } from './services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HttpService]
})
export class AppComponent implements OnInit {
  data: Brastlewark[];
  showingData: Brastlewark[];
  searchStr: string;
  loading: boolean;
  start = 0;
  limit = 20;

  constructor(
    private service: HttpService
  ) {
    this.loading = true;
  }

  ngOnInit(): void {
    this.searchStr = '';
    this.loading = true;
    // Make the HTTP request:
    this.service.getData().subscribe(res => {
      for (let i = 0; i < res.Brastlewark.length; i++) {
        res.Brastlewark[i] = new Brastlewark(res.Brastlewark[i]);
      }
      this.data = res.Brastlewark;
      this.search();
    });
  }

  search = function () {
    this.loading = true;

    setTimeout(() => {
      this.showingData = this.data.filter(
        citizen => citizen.name.toLowerCase().search(this.searchStr.toLowerCase()) > -1
      ).slice(this.start, this.limit);
      this.loading = false;
    }, 100);
  };

}
