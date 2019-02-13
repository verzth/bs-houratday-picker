import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tester';
  data: any;
  onDayClick(day){
    //console.log(this.data);
  }
  onHourClick(res){
    console.log(this.data);
  }
}
