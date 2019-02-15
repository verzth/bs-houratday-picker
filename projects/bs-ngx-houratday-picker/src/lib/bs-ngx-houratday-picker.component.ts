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
  private _bsNgxHouratday: Array<BsNgxHouratday>;
  @Input() set bsNgxHouratday(bsNgxHouratday){
    if(bsNgxHouratday==undefined){
      this._bsNgxHouratday = [];
    } else {
      this._bsNgxHouratday = bsNgxHouratday;
    }
    this.resyncPicker();
  }
  get bsNgxHouratday(){
    return this._bsNgxHouratday;
  }
  @Output() bsNgxHouratdayChange: EventEmitter<Array<BsNgxHouratday>> = new EventEmitter();
  public config: any = BS_NGX_HOURATDAY_CONFIG;
  public list: Array<BsNgxHouratdayPicker> = [];
  public data: BsNgxHouratdayPicker;
  constructor() {}

  ngOnInit(): void {
    this.list = BS_NGX_HOURATDAY_PICKER_DEFAULT;
  }

  clearPicker(): void{
    let parent = this;
    this.list.forEach(function (item,i) {
      parent.list[i].selected = false;
      for(let key in parent.list[i].hours){
        if(parent.list[i].hours.hasOwnProperty(key)){
          parent.list[i].hours[key] = false;
        }
      }
    });
  }

  resyncData(){
    const parent = this;
    let index = 0;
    this.list.forEach(function (item,i) {
      let hasNext = false;
      for(let key in item.hours){
        if(item.hours.hasOwnProperty(key) && item.hours[key]){
          if(parent._bsNgxHouratday[index]==undefined){
            parent._bsNgxHouratday[index] = {} as BsNgxHouratday;
          }
          if(!hasNext){
            parent.list[i].selected = true;
            parent._bsNgxHouratday[index]._day = item.value;
            parent._bsNgxHouratday[index]._start = +key;
          }
          parent._bsNgxHouratday[index]._end = +key;
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
    for(let x=index;x<parent._bsNgxHouratday.length;x++){
      parent._bsNgxHouratday.pop();
    }
    this.bsNgxHouratdayChange.emit(this._bsNgxHouratday);
  }

  resyncPicker(){
    const parent = this;
    this.clearPicker();
    this._bsNgxHouratday.forEach(function (data,i) {
      if(data._day<0 || data._day > 6) return;
      if(parent.list[data._day].hours){
        // NORMALIZE
        if(data._start<0) data._start=0;
        if(data._start>23) data._start=23;
        if(data._end<0) data._end=0;
        if(data._end>23) data._end=23;
        if(data._start>data._end) data._end=data._start;
        parent.list[data._day].selected = true;

        for(let x=data._start;x<=data._end;x++){
          parent.list[data._day].hours[x]=true;
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
    this.onHourClick.emit({day: this.list[i]._day, hour: j, state: this.list[i].hours[j]});
  }
}
