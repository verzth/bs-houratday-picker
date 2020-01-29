import NgxBootstrapHouratdayPicker from "./ngx-bootstrap-houratday-picker.interface";

export const BS_NGX_HOURATDAY_HOURS_ALL = {
  0:true,1:true,2:true,3:true,4:true,5:true,6:true,7:true,
  8:true,9:true,10:true,11:true,12:true,13:true,14:true,15:true,
  16:true,17:true,18:true,19:true,20:true,21:true,22:true,23:true
};
export const BS_NGX_HOURATDAY_HOURS_NONE = {
  0:false,1:false,2:false,3:false,4:false,5:false,6:false,7:false,
  8:false,9:false,10:false,11:false,12:false,13:false,14:false,15:false,
  16:false,17:false,18:false,19:false,20:false,21:false,22:false,23:false
};

export const BS_NGX_HOURATDAY_CONFIG = {
  days: [
    {
      name: 'Senin',
      value:0
    },
    {
      name: 'Selasa',
      value:1
    },
    {
      name: 'Rabu',
      value:2
    },
    {
      name: 'Kamis',
      value:3
    },
    {
      name: 'Jumat',
      value:4
    },
    {
      name: 'Sabtu',
      value:5
    },
    {
      name: 'Minggu',
      value:6
    }
  ],
  hours: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23], // You can set 0 to 23 or 1 to 24, based on your need.
  debug: false, // By default debug is off, when you set debug true (turn on debug) it will print debug info in browser console.
  callback: function () {} // It will called when the picker changed
};

export const BS_NGX_HOURATDAY_PICKER_DEFAULT = [
  {
    value:0,
    hours: Object.assign({},BS_NGX_HOURATDAY_HOURS_NONE)
  } as NgxBootstrapHouratdayPicker,
  {
    value:1,
    hours: Object.assign({},BS_NGX_HOURATDAY_HOURS_NONE)
  } as NgxBootstrapHouratdayPicker,
  {
    value:2,
    hours: Object.assign({},BS_NGX_HOURATDAY_HOURS_NONE)
  } as NgxBootstrapHouratdayPicker,
  {
    value:3,
    hours: Object.assign({},BS_NGX_HOURATDAY_HOURS_NONE)
  } as NgxBootstrapHouratdayPicker,
  {
    value:4,
    hours: Object.assign({},BS_NGX_HOURATDAY_HOURS_NONE)
  } as NgxBootstrapHouratdayPicker,
  {
    value:5,
    hours: Object.assign({},BS_NGX_HOURATDAY_HOURS_NONE)
  } as NgxBootstrapHouratdayPicker,
  {
    value:6,
    hours: Object.assign({},BS_NGX_HOURATDAY_HOURS_NONE)
  } as NgxBootstrapHouratdayPicker
];
