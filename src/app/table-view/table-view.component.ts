import { Component, OnInit, ViewChild } from '@angular/core';
import { Customer, Representative } from './customer';
import { Table } from 'primeng/table';
import { PrimeNGConfig } from 'primeng/api';
import { TableViewService } from './table-view.service'

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss']
})
export class TableViewComponent implements OnInit {


  customers: Customer[] =[];
  selectedCustomers: Customer[] = [];

  representatives: Representative[] = [];

  statuses: any[] = [];

  loading: boolean = true;

  @ViewChild('dt')
  table!: Table;

  constructor(private customerService: TableViewService, private primengConfig: PrimeNGConfig) { }

  ngOnInit() {
      this.customerService.getCustomersLarge().then(customers => {
          console.log(customers);
          
          this.customers = customers;
          this.loading = false;
      });
      this.loading = false;
      this.representatives = [
          {name: "Amy Elsner", image: 'amyelsner.png'},
          {name: "Anna Fali", image: 'annafali.png'},
          {name: "Asiya Javayant", image: 'asiyajavayant.png'},
          {name: "Bernardo Dominic", image: 'bernardodominic.png'},
          {name: "Elwin Sharvill", image: 'elwinsharvill.png'},
          {name: "Ioni Bowcher", image: 'ionibowcher.png'},
          {name: "Ivan Magalhaes",image: 'ivanmagalhaes.png'},
          {name: "Onyama Limba", image: 'onyamalimba.png'},
          {name: "Stephen Shaw", image: 'stephenshaw.png'},
          {name: "XuXue Feng", image: 'xuxuefeng.png'}
      ];

      this.statuses = [
          {label: 'Unqualified', value: 'unqualified'},
          {label: 'Qualified', value: 'qualified'},
          {label: 'New', value: 'new'},
          {label: 'Negotiation', value: 'negotiation'},
          {label: 'Renewal', value: 'renewal'},
          {label: 'Proposal', value: 'proposal'}
      ]
      this.primengConfig.ripple = true;
  }

  onActivityChange(event: any) {
      const value = event.target.value;
      if (value && value.trim().length) {
          const activity = parseInt(value);

          if (!isNaN(activity)) {
              this.table.filter(activity, 'activity', 'gte');
          }
      }
  }

  onDateSelect(value: any) {
      this.table.filter(this.formatDate(value), 'date', 'equals')
  }

  formatDate(date: any) {
      let month = date.getMonth() + 1;
      let day = date.getDate();

      if (month < 10) {
          month = '0' + month;
      }

      if (day < 10) {
          day = '0' + day;
      }

      return date.getFullYear() + '-' + month + '-' + day;
  }

  onRepresentativeChange(value: any) {
      this.table.filter(value, 'representative', 'in')
  }

}
