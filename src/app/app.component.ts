import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tester';
  data: any = [
    {
      _day: 0,
      _start: 0,
      _end: 11
    },
    {
      _day: 2,
      _start: 14,
      _end: 15
    }
  ];
  onDayClick(day){
    //console.log(this.data);
  }
  onHourClick(res){
    console.log(this.data);
  }
}
