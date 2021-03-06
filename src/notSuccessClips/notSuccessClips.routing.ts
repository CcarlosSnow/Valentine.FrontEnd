import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotSuccessClipsComponent } from './notSuccessClips.component';
import { NotSuccessComponent } from './notSuccess/notSuccess.component';

const notSuccessClipsRoutes: Routes = [
    {
        path: '',
        component: NotSuccessComponent,
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'sucessClips',
    },
];

@NgModule({
    imports: [ RouterModule.forChild(notSuccessClipsRoutes) ],
    exports: [ RouterModule ],
})

export class NotSucessClipsRoutingModule { }
