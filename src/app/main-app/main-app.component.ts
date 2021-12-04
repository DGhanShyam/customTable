import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ShoppingData } from '../model/tableData';
@Component({
  selector: 'app-main-app',
  templateUrl: './main-app.component.html',
  styleUrls: ['./main-app.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'app-main-app'
  }
})
export class MainAppComponent implements OnInit {

  modelData:any= [];
  KeyaData:any= [];

  constructor() {
    this.modelData= ShoppingData;
    console.log(this.modelData);    
  }

  ngOnInit(): void {
    Object.keys(this.modelData[0]).forEach(keyItems => {
      this.KeyaData.push(keyItems)
    });
    console.log(this.KeyaData);
  }

}
