import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { DashboardService } from './dashboard.service';
import { DashboardChartsData, IChartProps } from './dashboard-charts-data';
import { Router, ActivatedRoute } from '@angular/router';
interface IUser {
  name: string;
  state: string;
  registered: string;
  country: string;
  usage: number;
  period: string;
  payment: string;
  activity: string;
  avatar: string;
  status: string;
  color: string;
}

@Component({
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  token: any;

  userbooks: any;

  totalCount: number = 0;
  limit: number = 5;
  page = 1;
  offset: any;
  constructor(
    private dashboardservice: DashboardService,
    public _router: Router
  ) {
    this.token = localStorage.getItem('token');
    console.log(this.token);
  }

  ngOnInit(): void {
    this.loadPage(this.page);
  }

  loadPage(page: number) {
    this.page = page;
    this.offset = (this.page - 1) * this.limit;
    this.loadData(this.offset, this.limit);
  }
  loadData(offsets: any, limits: any) {
    console.log(offsets);
    console.log(limits);
    this.dashboardservice.paginateduser(offsets, limits).subscribe({
      next: (data: any) => {
        console.log(data);
        this.totalCount = data.collectionSize;
        this.userbooks = data.result;
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }
}
