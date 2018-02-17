import { CommonModule } from '@angular/common';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CategoryService, ProductService } from '../app/services';
import { SharedComponentModule } from '../app/shared/shared.module';
import { ProductAddEditComponent } from './product-add-edit/product-add-edit.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductRoutingModule } from './product.routing';

@NgModule({
    declarations: [
        ProductAddEditComponent,
        ProductListComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SharedComponentModule,
        ProductRoutingModule,
    ],
    schemas: [NO_ERRORS_SCHEMA],
    providers: [
        CategoryService,
        ProductService,
    ],
})

export class ProductModule {

}
