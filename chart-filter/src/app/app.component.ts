import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'chart-filter';
  barChart;
  levelsArr = ['Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'July', 'Aug' ,'Sep', 'Oct', 'Nov'];
  months = [{month: 'Jan', value: '0'},
  {month: 'Feb', value: '1'},
  {month: 'Mar', value: '2'},
  {month: 'Apr', value: '3'},
  {month: 'May', value: '4'},
  {month: 'Jun', value: '5'},
  {month: 'Jul', value: '6'},
  {month: 'Aug', value: '7'},
  {month: 'Sep', value: '8'},
  {month: 'Oct', value: '9'},
  {month: 'Nov', value: '10'}];

  from = '0';

  toMonth = '10';

  chartData = {
    "dataSet1" : Array.from({ length: 11 }, () => Math.floor(Math.random() * 599) + 10)
  };


  ngOnInit() {
    this.barChart = new Chart('bar', {
      type: 'bar',
      options: {
        responsive: true,
        title: {
          display: true,
          text: 'Bar Graph'
        },
      },
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov'],
        datasets: [
          {
            type: 'bar',
            label: 'Values',
            data: this.chartData.dataSet1,
            backgroundColor: 'rgba(100,189,200,0.4)',
            borderColor: 'rgba(100,189,200,0.4)',
            fill: false,
          }
        ]
      }
    });
  }

  applyDateFilter(){
    this.barChart.data.labels = this.levelsArr.slice(parseInt(this.from), parseInt(this.toMonth) + 1);
    this.barChart.update();
  }

}
