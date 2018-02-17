import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductAddEditComponent } from './product-add-edit/product-add-edit.component';
import { ProductListComponent } from './product-list/product-list.component';

const productRoutes: Routes = [
    {
        path: '',
        component: ProductListComponent,
    },
    {
        path: 'add',
        component: ProductAddEditComponent,
    },
    {
        path: ':productId/edit',
        component: ProductAddEditComponent,
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'product',
    },
];

@NgModule({
    imports: [ RouterModule.forChild(productRoutes) ],
    exports: [ RouterModule ],
})

export class ProductRoutingModule { }
