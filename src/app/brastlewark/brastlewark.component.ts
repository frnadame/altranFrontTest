import { Component, OnInit, Input } from '@angular/core';
import { Brastlewark } from './brastlewark';

@Component({
  selector: 'app-brastlewark',
  templateUrl: './brastlewark.component.html',
  styleUrls: ['./brastlewark.component.css']
})

export class BrastlewarkComponent implements OnInit {
  @Input() b: Brastlewark;

  constructor( ) { }

  ngOnInit() {
  }

}
