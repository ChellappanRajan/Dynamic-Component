import { Component, OnInit,Inject,ViewChild, ElementRef} from '@angular/core';
import { TooltipcontainerDirective } from '../../directive/tooltipcontainer.directive';


@Component({
  selector: 'app-tooltipcontainer',
  templateUrl: './tooltipcontainer.component.html',
  styleUrls: ['./tooltipcontainer.component.css']
})
export class TooltipcontainerComponent implements OnInit {
    top;
    width;
  
    
   @ViewChild(TooltipcontainerDirective,{read:ElementRef}) ref; 
    constructor(@Inject('tooltTipConfig') private toolTip:any) {
    
   }

  ngOnInit() {
    const {top}= this.toolTip.host.getBoundingClientRect();
    const {height}=this.ref.nativeElement.getBoundingClientRect();
    this.top=`${top-height}`;
    this.width=this.toolTip.host.getBoundingClientRect().width+'px';
    console.log(this.width);
  }

}
