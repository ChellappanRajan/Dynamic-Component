
import { Component,ComponentFactoryResolver,TemplateRef,ViewChild, ViewContainerRef, ComponentRef } from '@angular/core';
import { AlertComponent } from './component/alert/alert.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'learn';

  @ViewChild('templateRef',{read:ViewContainerRef}) container:ViewContainerRef;
  componentRef:ComponentRef<AlertComponent>;


  //Get Ref to Template Ref
  @ViewChild('template',{read:TemplateRef}) TemplateRef; 
  
  //View Container Ref

  @ViewChild('view',{read:ViewContainerRef}) vc;
 

  constructor(private cfr:ComponentFactoryResolver){

  }

  // Component Factory resolver is like object which know how to create DyamicComponent
  

  //Create Component Method
  create(){
    //Clear the view Container so that it will not append every time when we click
    this.container.clear();
    const factory=this.cfr.resolveComponentFactory(AlertComponent);
    this.componentRef=this.container.createComponent(factory);
    this.componentRef.instance.title='Alert';
    this.componentRef.instance.click.subscribe(c=>console.log(c));

  }

  //Destroy Component

  destroy(){
     
    this.componentRef.destroy();
    
  }

  add(){
  
      this.vc.clear();
      // this.vc.createEmbededView(this.TemplateRef);
    
      this.vc.createEmbeddedView(this.TemplateRef);

  }
  remove(){
   this.vc.remove();
  }

}
