# bs-ngx-houratday-picker
Angular 7 Library for Hour at Day Picker, it's develop follow the previous [library for javascript](https://github.com/verzth/range-hourday-picker.js).

### How to Install

```
npm install bs-ngx-houratday-picker
```
or
```
yarn add bs-ngx-houratday-picker
```

### Dependencies
1. JQuery.
2. Bootstrap 4.
3. @ng-bootstrap/ng-bootstrap

### How to Use
1. Add **BsNgxHouratdayPickerModule** in your app module imports.
   ```
   @NgModule({
   .....
    imports: [
      ...
      BsNgxHouratdayPickerModule
      ...
    ]
   .....
   })
   export class YourModule {}
   ```

2. Use component **bs-ngx-houratday-picker** to implement the module.
3. Provide callback for action when day clicked, just put
   the function in event binding **onDayClick**, don't forget to add $event on first parameter.
4. Provide callback for action when hour clicked, just put
   the function in event binding **onHourClick**, don't forget to add $event on first parameter.
5. Provide data list of BsNgxHouratday as its interface in **[bsNgxHouratday]** property binding.

Sample
   ```
   <bs-ngx-houratday-picker [bsNgxHouratday]="data" (onDayClick)="onDayClick($event)" (onHourClick)="onHourClick($event)"></bs-ngx-houratday-picker>
   ```

#### Interfaces

- BsNgxHouratday
  ```
  interface BsNgxHouratday {
    day: number;
    start: number;
    end: number;
  }
  ```
  
- BsNgxHouratdayPicker
  ```
  interface BsNgxHouratdayPicker {
    name: string;
    value: number;
    selected: boolean;
    hours: any;
  }
  ```
