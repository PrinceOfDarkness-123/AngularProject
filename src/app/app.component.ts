import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FirstAngularProject';
  title2 = 'Event Binding in Angular';
  title3 = 'Using Multiple Events';
  title4 = 'Using Event Payload';
  title5 = 'Using Template Reference Variable';
  title6 = 'Two Way Binding in Angular';
  clickCount=0;
  clickCount2=0;
  clickCount3=3;

  value=""
  val=""
handleInput(event: any) {
  this.value = (event.target as HTMLInputElement).value;
}
handleInput1(element: any){
this.val = element.value;
}
  clickMe(){
    this.clickCount++;
  }
  clickMe2(){
    this.clickCount3++;
  }

  name="";
  clearName(){
    this.name="";
  }

}
