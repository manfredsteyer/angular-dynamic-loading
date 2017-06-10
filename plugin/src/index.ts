import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleComponent } from './sample.component';
import { SampleDirective } from './sample.directive';
import { SamplePipe } from './sample.pipe';
import { SampleService } from './sample.service';

export * from './sample.component';
export * from './sample.directive';
export * from './sample.pipe';
export * from './sample.service';
import { SampleRouterModule } from "./sample.routes";
import { OtherComponent } from "./other.component";
import { DashBoardComponent } from "./dashboard.component";

@NgModule({
  imports: [
    CommonModule,
    SampleRouterModule
  ],
  declarations: [
    SampleComponent,
    SampleDirective,
    SamplePipe,
    OtherComponent,
    DashBoardComponent
  ],
  entryComponents: [
    DashBoardComponent
  ],
  exports: [
    SampleComponent,
    SampleDirective,
    SamplePipe,
    OtherComponent,
    DashBoardComponent
  ]
})
export class SampleModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SampleModule,
      providers: [SampleService]
    };
  }
}
