import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-a',
  templateUrl: './page-a.component.html',
  styleUrls: ['./page-a.component.css']
})
export class PageAComponent implements OnInit {
  @Input() title?: string;

  // constructure is not about the angular architecture, it is about the programming
  constructor() {
    console.log("constructor")
  }


  //it fires when the component has an input value
  ngOnChanges() {
    console.log("ngOnChanges")
    console.log(this.title);
  }





}
