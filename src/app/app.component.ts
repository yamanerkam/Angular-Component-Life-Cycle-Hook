import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numberCount: number | undefined;
  counterGetter(obj: any) {
    console.log(obj);
    this.numberCount = obj.num;
  }
  title = 'component-life-cycle-hook';





  /*keyPressFunc($event: any) {
    console.log('keyPressFunc');
    console.log(event);
  }
  keyUpFunc($event: any) {
    console.log(event);
    console.log('keyUpFunc');
  }
  keyDownFunc($event: any) {
    console.log(event);
    console.log('keyDownFunc');
  }*/
}
