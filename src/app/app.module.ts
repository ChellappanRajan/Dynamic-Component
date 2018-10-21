import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AlertComponent } from './component/alert/alert.component';
import { TooltipDirective } from './common/directive/tooltip.directive';
import { DemoComponent } from './component/domManipulation/demo/demo.component';
import { TooltipcontainerComponent } from './common/component/tooltipcontainer/tooltipcontainer.component';
import { TooltipcontainerDirective } from './common/directive/tooltipcontainer.directive';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    TooltipDirective,
    DemoComponent,
    TooltipcontainerComponent,
    TooltipcontainerDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents:[
    AlertComponent,
    TooltipcontainerComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
