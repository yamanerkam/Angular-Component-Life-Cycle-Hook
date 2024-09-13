import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-a',
  templateUrl: './page-a.component.html',
  styleUrls: ['./page-a.component.css']
})
export class PageAComponent implements OnInit {
  @Input() title?: string;
  counter: number = 0;
  textValue = ""



  // constructure is not about the angular architecture, it is about the programming
  constructor() {
    console.log("0. constructor")
    console.log(this.title); // undefined
  }


  //it fires when the component has an input value
  ngOnChanges() {
    console.log("1. ngOnChanges")
    console.log(this.title); // has value from the param
  }

  // when we first create the component 
  ngOnInit(): void {
    console.log("2. ngOnInit")
    this.title = "a"
    console.log(this.title); // a
    setInterval(() => {
      this.counter++;
    }, 1000);
  }

  // when we update the component ==> any change on the component
  // change detection cycle
  ngDoCheck() {
    console.log("3. ngDoCheck")
  }


}
