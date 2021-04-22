import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  templateUrl: './app.component_blank.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'BoBooBua';
  result = "Data...........";
  data = ""
  username = ""
  task = ["Task 1","Task 2"]
  doSth() {
    console.log("Clicked ...");
    this.result = "Change from clicked !!";
  }

  onPress(event: any) {
    console.log(event.target.value);
    this.result = event.target.value;
  }
}
