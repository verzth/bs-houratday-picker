# ngx-bootstrap-houratday-picker
[![GitHub version](https://badge.fury.io/gh/verzth%2Fngx-bootstrap-houratday-picker.svg)](https://badge.fury.io/gh/verzth%2Fngx-bootstrap-houratday-picker)
[![npm version](https://badge.fury.io/js/%40verzth%2Fngx-bootstrap-houratday-picker.svg)](https://badge.fury.io/js/%40verzth%2Fngx-bootstrap-houratday-picker)

Angular 7 Library for Hour at Day Picker.

### How to Install

```
npm install @verzth/ngx-bootstrap-houratday-picker
```
or
```
yarn add @verzth/ngx-bootstrap-houratday-picker
```

### Dependencies
1. @angular/common.
2. @angular/core.
3. JQuery.
4. Bootstrap 4.
5. @ng-bootstrap/ng-bootstrap

### How to Use
1. Add **NgxBootstrapHouratdayPickerModule** in your app module imports.
   ```
   @NgModule({
   .....
    imports: [
      ...
      NgxBootstrapHouratdayPickerModule
      ...
    ]
   .....
   })
   export class YourModule {}
   ```

2. Use component **ngx-bootstrap-houratday-picker** to implement the module.
3. Provide callback for action when day clicked, just put
   the function in event binding **onDayClick**, don't forget to add $event on first parameter.
4. Provide callback for action when hour clicked, just put
   the function in event binding **onHourClick**, don't forget to add $event on first parameter.
5. Provide data list of NgxBootstrapHouratday as its interface in **[NgxBootstrapHouratday]** property binding.

Sample
   ```
   <ngx-bootstrap-houratday-picker [(NgxBootstrapHouratday)]="data" (onDayClick)="onDayClick($event)" (onHourClick)="onHourClick($event)"></ngx-bootstrap-houratday-picker>
   ```

#### Interfaces

- NgxBootstrapHouratday
  ```
  interface NgxBootstrapHouratday {
    _day: number;
    _start: number;
    _end: number;
  }
  ```
  
- NgxBootstrapHouratdayPicker
  ```
  interface NgxBootstrapHouratdayPicker {
    name: string;
    value: number;
    selected: boolean;
    hours: any;
  }
  ```
### Sample Output
```
{
    0 : {
        _day: 0,
        _start: 0,
        _end: 19
    },
    1 : {
        _day: 1,
        _start: 12,
        _end: 15
    },
    2 : {
        _day: 1,
        _start: 18,
        _end: 21
    }
}
```
