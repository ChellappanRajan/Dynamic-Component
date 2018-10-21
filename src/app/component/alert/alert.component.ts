import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

 @Input('title') title:string;

 @Output('click') click=new EventEmitter<any>();

  constructor() {
    this.title='Defa8lt';
   }

  ngOnInit() {
  }
   
  onClick(){
    this.click.emit('Hi i am Output Decorator');
  }
}
