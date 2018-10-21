import { Directive, ComponentFactoryResolver,Type, HostListener,Input, Renderer2, ElementRef,Injector, ReflectiveInjector, ViewChild, ViewContainerRef, ComponentRef, TemplateRef } from '@angular/core';
import { TooltipcontainerComponent } from '../component/tooltipcontainer/tooltipcontainer.component';

@Directive({
  selector: '[tooltip]'
})

export class TooltipDirective {

  // @ViewChild('',{read:ViewContainerRef}) container:ViewContainerRef
  componentRef:ComponentRef<TooltipcontainerComponent>;

  @Input('tooltip') content:  string | TemplateRef<any> | Type<any>;
  

  constructor(private injector:Injector,private cfr:ComponentFactoryResolver,private renderer:Renderer2,private ele:ElementRef,private vcr:ViewContainerRef) {
    
   }

   @HostListener('mouseenter') onMouserEnter(){
     if(this.componentRef) return ;
     this.vcr.clear();
     const factory=this.cfr.resolveComponentFactory(TooltipcontainerComponent);

     const injector=ReflectiveInjector.resolveAndCreate([
      {
        provide:'tooltTipConfig',
        useValue:{host:this.ele.nativeElement}
      }
    ]);
    
     this.componentRef=this.vcr.createComponent(factory,0,injector,this.generateNgContent());

   }
   generateNgContent(){
     if( typeof this.content === 'string' ){
        const textNode=this.renderer.createText(this.content);      
        return [[textNode]];
     }
    //  if(this.content instanceof TemplateRef){
    //    const context={};
    //    const view=this.content.createEmbeddedView(context);
    //    return [view.rootNodes];
    //  }
    //  else{
    //   const factory =this.cfr.resolveComponentFactory(this.content);
    //   const componentRef=factory.create(this.injector);
    //   return [ [ componentRef.location.nativeElement ] ];
    //  }
   }

   @HostListener('mouseout')
   mouseout() {
     this.destroy();
   }

  destroy() {
    this.componentRef && this.componentRef.destroy();
    this.componentRef = null;
  }

  ngOnDestroy() {
    this.destroy();
  }

}
