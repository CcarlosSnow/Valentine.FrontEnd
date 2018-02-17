import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterSecondStepAddComponent } from './registerSecondStep-add/registerSecondStep-add.component';

const registerSecondStepRoutes: Routes = [
    {
        path: '',
        component: RegisterSecondStepAddComponent,
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'registerSecondStep',
    },
];

@NgModule({
    imports: [ RouterModule.forChild(registerSecondStepRoutes) ],
    exports: [ RouterModule ],
})

export class RegisterSecondStepRoutingModule { }
