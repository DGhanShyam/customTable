import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'app-table-data'
  }
})
export class TableDataComponent implements OnInit {

  @Input() idData: any;  
  @Input() nameData: any;
  @Input() ageData: any;  
  @Input() cityData: any;  

  constructor() { }

  ngOnInit(): void {
  }


}
