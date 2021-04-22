import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  templateUrl: './app.component_blank.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-dream-app';
  result = "LOL";
  onPress(event: any){
    this.result = event.target.value;
  }
}
