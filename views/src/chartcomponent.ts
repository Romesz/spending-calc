//https://auth0.com/blog/2015/05/14/creating-your-first-real-world-angular-2-app-from-authentication-to-calling-an-api-and-everything-in-between/
//http://angular-tips.com/blog/2015/06/why-will-angular-2-rock/

import {Component, View, bootstrap} from 'angular2/angular2';

@Component({
  selector: 'chart'
})
@View({
  template: `<div id="chart"></div>`
})
export class chartComponent {
  chart: Object;
  data: Object;

  constructor() {
    this.getData();
  }

  getData() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if(xhttp.readyState === 4 && xhttp.status === 200) {
        this.data = JSON.parse(xhttp.responseText);
        this.drawChart();
      }
    }.bind(this);
    xhttp.open('GET', 'http://localhost:3000/data', true);
    xhttp.send();   
  }

  createDataArray() {
    let date = ['x'];
    let price = ['y'];
    let title = ['title'];
    
    for(let i in this.data) {
      date.push(this.data[i].date);
      price.push(this.data[i].price);
      title.push(this.data[i].title);
    }
    
    return {
      date: date,
      price: price,
      title: title
    };
  }

  drawChart() {
    if(this.createDataArray().price.length < 2) {
      console.warn('There is any data what we can demostreate with chart :)');
      return;
    }
    this.chart = c3.generate({
      data: {
        x: 'x',
        y: 'y',
        columns: [
          this.createDataArray().price,
          this.createDataArray().date
        ],
        type: 'bar'
      },
      zoom: {
        enabled: true
      },
      axis: {
        x: {
          label: {
            text: 'date',
            position: 'outer-middle'
          },
          type: 'timeseries',
          tick: {
            format: '%Y-%m-%d'
          }
        },
        y: {
          label: {
            text: 'price',
            position: 'outer-middle'
          }        
        }
      }
    });
  }
}