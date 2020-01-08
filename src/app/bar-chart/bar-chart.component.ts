import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
  @Input() chartData;
  @Input() chartWidth;
  @Input() chartHeight;
  @Input() chartMetaInfo;

  constructor() { }

  ngOnInit() {

    const canvas = <HTMLCanvasElement>document.getElementById('barchart');
    const context = canvas.getContext('2d');
    context.fillStyle='#262a33';
    context.fillRect(0,0,this.chartWidth,this.chartHeight);    
    this.drawBarChart(context);
    this.addTitleToChart(context);
    this.addFooterToChart(context);
    this.addHorizontalLines(context);

  }

  addTitleToChart(context){
    context.font = this.chartMetaInfo.titleFont;
    context.fillStyle = this.chartMetaInfo.titleColor;
    context.fillText(this.chartMetaInfo.title,100,30);
  }

  addFooterToChart(context) {
    context.font = this.chartMetaInfo.footerFont;
    context.fillStyle = this.chartMetaInfo.footerColor;
    context.fillText(this.chartMetaInfo.footerTitle,this.chartWidth/2,this.chartHeight-10);
  }

  addColumnName(context,name,xpos,ypos){
    context.font = this.chartMetaInfo.columnFont;
    context.fillStyle = this.chartMetaInfo.columnTitleColor;
    context.fillText(name,xpos,ypos);
  }

  addHorizontalLines(context) {
    context.font = this.chartMetaInfo.leftaxisFont; 
    context.fillStyle = this.chartMetaInfo.leftaxisColor; 
    
    for(var i=0; i<11; i++) { 
      
      context.lineWidth = 0.5; 
      context.beginPath(); 
      context.moveTo(25,(20*i)+40); 
      context.lineTo(475,(20*i)+40); 
      context.strokeStyle  = this.chartMetaInfo.leftaxisColor; 
      context.stroke(); 
    } 
  }

  addColumnHead(context,name,xpos,ypos){
    context.font = this.chartMetaInfo.columnFont;
    context.fillStyle = this.chartMetaInfo.columnTitleColor;
    context.fillText(name,xpos,ypos);
  }

 

  drawBarChart(context){
    
    for(let cricketer=0; cricketer<this.chartData.length; cricketer++) { 
        context.fillStyle = "#36b5d8"; 
        let cricketerInfo = this.chartData[cricketer]; 
        context.fillRect(25 + cricketer*100, this.chartHeight-cricketerInfo['centuries']*2-60, 50, cricketerInfo['centuries']*2); 
        this.addColumnName(context,cricketerInfo.name, 25 + cricketer*100,this.chartHeight-40);
        this.addColumnHead(context,cricketerInfo['centuries'],45 + cricketer*100,this.chartHeight-cricketerInfo['centuries']*2-65)
      } 

  }

}
