import { Component, NgModuleFactoryLoader, ViewChild, ViewContainerRef, AfterViewInit, Injector, ComponentRef, OnDestroy } from '@angular/core';
import { Config } from './shared/config/env.config';
import './operators';
import { gloalObjects } from "./global-objects";

/**
 * This class represents the main application component.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent implements AfterViewInit, OnDestroy   {
  constructor(private loader: NgModuleFactoryLoader,
              private injector: Injector) {
  }

  // Placeholder (div) with Handle vc
  @ViewChild("vc", {read: ViewContainerRef}) 
  viewContainer: ViewContainerRef;

  componentRef: ComponentRef<{}>;

  ngAfterViewInit() {
    this.loader.load('http://127.0.0.1:8080/plugin-rollup.umd.js#SampleModule').then((moduleFactory) => {
      
      let moduleRef = moduleFactory.create(this.injector);
      let module = moduleRef.instance;

      let compType = module.constructor.decorators[0].args[0].exports.find( (e: Function) => e.name == 'DashBoardComponent');
      
      let componentFactoryResolver = moduleRef.componentFactoryResolver;
      let componentFactory = componentFactoryResolver.resolveComponentFactory(compType);
      let componentRef = this.viewContainer.createComponent(componentFactory, null, this.injector);
      let comp: any = componentRef.instance;

      this.componentRef = componentRef;
    });
  }

  ngOnDestroy() {
    this.componentRef.destroy();
  }


}
