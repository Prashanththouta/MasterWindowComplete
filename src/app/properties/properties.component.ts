import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent implements OnInit {

  loop: string[] = ['1', '2', '3'];
  constructor() { }

  ngOnInit() {
  }

}