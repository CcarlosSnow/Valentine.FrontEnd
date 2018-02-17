import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'registerFirstStep',
        loadChildren: './../registerFirstStep/registerFirstStep.module#RegisterFirstStepModule',
    },
    {
        path: 'registerSecondStep',
        loadChildren: './../registerSecondStep/registerSecondStep.module#RegisterSecondStepModule'
    },
    {
        path: '**',
        redirectTo: 'registerFirstStep',
        pathMatch: 'full',
    },
];

@NgModule({
  imports: [
      RouterModule.forRoot(routes),
  ],
  exports: [
      RouterModule,
  ],
})

export class AppRoutingModule { }
