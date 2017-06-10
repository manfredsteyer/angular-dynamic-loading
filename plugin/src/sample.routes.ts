import { Routes, RouterModule } from '@angular/router';
import { SampleComponent } from "./sample.component";
import { OtherComponent } from "./other.component";
import { ModuleWithProviders} from '@angular/core';

const SAMPLE_ROUTES: Routes = [
    {
        path: '',
        redirectTo: 'sample',
        pathMatch: 'prefix'
    },
    {
        path: 'sample',
        component: SampleComponent
    },
    {
        path: 'other',
        component: OtherComponent
    },
    {
        path: '**',
        redirectTo: 'other'
    }
];

export const SampleRouterModule: ModuleWithProviders
                 = RouterModule.forChild(SAMPLE_ROUTES);