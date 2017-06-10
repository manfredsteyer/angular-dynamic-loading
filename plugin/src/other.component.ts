import { Component } from '@angular/core';

@Component({
  selector: 'other-component',
  template: `
    <h1 style="border:2px black solid">Other component from Plugin</h1>
    <a routerLink="../sample">Go to sample!</a>
  `
})
export class OtherComponent {

  constructor() {
  }

}
