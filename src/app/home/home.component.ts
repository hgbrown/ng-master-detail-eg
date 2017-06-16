import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import * as moment from 'moment';
import {GridOptions} from 'ag-grid';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = _.camelCase('app works!');
  myDate = moment().toDate();
  private gridOptions: GridOptions;

  constructor() {
    this.gridOptions = <GridOptions>{};
    this.gridOptions.columnDefs = [
      {
        headerName: 'ID',
        field: 'id',
        width: 100
      },
      {
        headerName: 'Value',
        field: 'value',
        width: 100
      },

    ];
    this.gridOptions.rowData = [
      {id: 5, value: 10},
      {id: 10, value: 15},
      {id: 15, value: 20}
    ];
  }

  ngOnInit() {
  }

}
