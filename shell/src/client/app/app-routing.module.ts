import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: 'plugin',
        loadChildren: () => System.import('http://127.0.0.1:8080/plugin-rollup.umd.js').then(m => m.SampleModule)
      }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

