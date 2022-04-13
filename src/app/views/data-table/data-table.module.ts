import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataTableRoutingModule } from './data-table-routing.module';
import {DataTableComponent} from './data-table.component';
import { DataTablesModule } from "angular-datatables";

@NgModule({
  declarations: [DataTableComponent],
  imports: [
    CommonModule,
    DataTableRoutingModule,DataTablesModule
  ]
})
export class DataTableModule { }
