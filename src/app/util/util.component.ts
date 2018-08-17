import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-util',
  templateUrl: './util.component.html',
  styleUrls: ['./util.component.css']
})
export class UtilComponent implements OnInit {

  constructor() { }

  @Input() view: string;
  @Input() viewDate: Date;
  @Input() locale: string = 'en';
  @Output() viewChange: EventEmitter<string> = new EventEmitter();
  @Output() viewDateChange: EventEmitter<Date> = new EventEmitter();

  colors: any = {
    red: {
      primary: '#ad2121',
      secondary: '#FAE3E3'
    },
    blue: {
      primary: '#1e90ff',
      secondary: '#D1E8FF'
    },
    yellow: {
      primary: '#e3bc08',
      secondary: '#FDF1BA'
    }
  };
  

  ngOnInit() {
  }

}
