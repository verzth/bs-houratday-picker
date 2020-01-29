import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'tester';
  data: any;
  ngOnInit(): void {
    let parent = this;
    setTimeout(function () {
      console.log(parent.data);
      parent.data = [];
      console.log('change');
      console.log(parent.data);
      setTimeout(function () {
        console.log(parent.data);
        parent.data = [];
        console.log('change');
        console.log(parent.data);
      },3000);
    },3000);
  }

  onDayClick(day){
    //console.log(this.data);
  }
  onHourClick(res){
    console.log(this.data);
  }
}
