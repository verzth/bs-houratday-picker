import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import BsNgxHouratdayPicker from "./bs-ngx-houratday-picker.interface";
import {
  BS_NGX_HOURATDAY_CONFIG, BS_NGX_HOURATDAY_HOURS_ALL, BS_NGX_HOURATDAY_HOURS_NONE,
  BS_NGX_HOURATDAY_PICKER_DEFAULT
} from "./bs-ngx-houratday-picker.config";
import BsNgxHouratday from "./bs-ngx-houratday-picker.interface";

@Component({
  selector: 'bs-ngx-houratday-picker',
  templateUrl: 'bs-ngx-houratday-picker.component.html',
  styleUrls: [
    'bs-ngx-houratday-picker.component.scss'
  ]
})
export class BsNgxHouratdayPickerComponent implements OnInit{
  @Output() onDayClick = new EventEmitter<any>();
  @Output() onHourClick = new EventEmitter<any>();
  @Input() bsNgxHouratday: Array<BsNgxHouratday>;
  public config: any = BS_NGX_HOURATDAY_CONFIG;
  public list: Array<BsNgxHouratdayPicker> = [];
  public data: BsNgxHouratdayPicker;
  constructor() {}

  ngOnInit() {
    this.list = Array.from(BS_NGX_HOURATDAY_PICKER_DEFAULT);
    if(this.bsNgxHouratday==undefined){
      throw "[bsNgxHouratday] cannot be undefined, use empty array ([]) instead of undefined";
    }
    this.resyncPicker();
  }

  resyncData(){
    const parent = this;
    let index = 0;
    this.list.forEach(function (item,i) {
      let hasNext = false;
      for(let key in item.hours){
        if(item.hours.hasOwnProperty(key) && item.hours[key]){
          if(parent.bsNgxHouratday[index]==undefined){
            parent.bsNgxHouratday[index] = {} as BsNgxHouratday;
          }
          if(!hasNext){
            parent.list[i].selected = true;
            parent.bsNgxHouratday[index].day = item.value;
            parent.bsNgxHouratday[index].start = +key;
          }
          parent.bsNgxHouratday[index].end = +key;
          hasNext = true;
        }else{
          if(hasNext) index++;
          hasNext = false;
        }
      }
      if(hasNext){
        index++;
      }
    });
    for(let x=index;x<parent.bsNgxHouratday.length;x++){
      parent.bsNgxHouratday.pop();
    }
  }

  resyncPicker(){
    const parent = this;
    this.bsNgxHouratday.forEach(function (data,i) {
      if(data.day<0 || data.day > 6) return;
      if(parent.list[data.day].hours){
        // NORMALIZE
        if(data.start<0) data.start=0;
        if(data.start>23) data.start=23;
        if(data.end<0) data.end=0;
        if(data.end>23) data.end=23;
        if(data.start>data.end) data.end=data.start;
        parent.list[data.day].selected = true;

        for(let x=data.start;x<=data.end;x++){
          parent.list[data.day].hours[x]=true;
        }
      }
    });
  }

  onDayClicked(i){
    if(this.list[i].selected) {
      this.list[i].selected = false;
      this.list[i].hours = Object.assign({},BS_NGX_HOURATDAY_HOURS_NONE);
    } else {
      this.list[i].hours = Object.assign({},BS_NGX_HOURATDAY_HOURS_ALL);
    }
    this.resyncData();
    this.onDayClick.emit(this.list[i]);
  }
  onHourClicked(i,j){
    this.resyncData();
    this.onHourClick.emit({day: this.list[i].day, hour: j, state: this.list[i].hours[j]});
  }
}
