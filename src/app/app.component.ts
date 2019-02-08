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
      day: 0,
      start: 0,
      end: 11
    },
    {
      day: 2,
      start: 14,
      end: 15
    }
  ];
  onDayClick(day){
    //console.log(this.data);
  }
  onHourClick(res){
    console.log(this.data);
  }
}
