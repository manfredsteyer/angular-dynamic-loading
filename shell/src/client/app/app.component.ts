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
  vc: ViewContainerRef;

  compRef: ComponentRef<{}>;

  ngAfterViewInit() {
    console.debug('go');
    this.loader.load('http://127.0.0.1:8080/plugin-rollup.umd.js#SampleModule').then((factory) => {
      
      console.debug('loaded');
      const module = factory.create(this.injector);

      let compType = module.instance.constructor.decorators[0].args[0].exports.find( (e: Function) => e.name == 'DashBoardComponent');

      console.debug('module.instance', compType);
      const r = module.componentFactoryResolver;
      
      const cmpFactory = r.resolveComponentFactory(compType);
      let compRef = this.vc.createComponent(cmpFactory, null, this.injector);
      let comp: any = compRef.instance;
      console.debug('compRef', compRef);
      console.debug('comp', comp);

      this.compRef = compRef;
    });
  }

  ngOnDestroy() {
    this.compRef.destroy();
  }


}
