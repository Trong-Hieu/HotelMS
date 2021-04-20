import { Component, OnInit, ViewChild } from '@angular/core';
import {ChartDataSets, ChartOptions, ChartType } from 'chart.js'
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = ['Apple', 'Banana', 'Kiwifruit', 'Blueberry', 'Orange', 'Grapes', 'Jerry'];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    { data: [45, 37, 60, 100, 46, 33, 26], label: 'Best Fruits' },
    { data: [15, 30, 50, 64, 51, 21, 15], label: 'Bad Fruits' }
  ];

  constructor() { }

  ngOnInit() {}
    
}
