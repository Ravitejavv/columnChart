import { Component } from '@angular/core';
//import { BarChartComponent} from './bar-chart/bar-chart.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';

  cricketersInfo;
  metaInfo;

  constructor(){
      this.cricketersInfo = [
                          {'name':'Sachin T','centuries':49},  
                          {'name':'Kohli  V','centuries':43},
                          {'name':'Rohit  S','centuries':28},
                          {'name':' Ganguly ','centuries':22},
                          {'name':'Dhawan','centuries':17},  
                        ];

    this.metaInfo = {
      'title':'Indian cricketers with Most Centuries',
      'titleColor':'white',
      'titleFont': '20px sans-serif',
      'columnTitleColor': 'white',
      'columnFont': '12px sans-serif',
      'footerTitle':'Cricketer',
      'footerColor':'#c1d0cd',
      'footerFont': '12px sans-serif',
      'leftaxisColor': '#c1d0cd',
      'leftaxisFont': '12px sans-serif',
    }
  }
 
}
