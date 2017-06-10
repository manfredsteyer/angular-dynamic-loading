import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'sample-component',
  template: `
    <h1 style="border:2px black solid">Sample component from Plugin</h1>
    <a routerLink="../other">Go to other!</a>
  
  `
})
export class SampleComponent {

  constructor() {
  }

}
