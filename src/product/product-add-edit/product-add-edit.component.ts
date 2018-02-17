import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { CategoryModel, ProductModel } from '../../app/models';
import { CategoryService, ProductService } from '../../app/services';
import { FormStatusConstants } from '../../app/shared/constants';


@Component({
    selector: 'app-product-add-edit',
    templateUrl: './product-add-edit.component.html',
    styleUrls: ['./product-add-edit.component.css'],
})

export class ProductAddEditComponent implements OnInit, OnDestroy {
    categoryCombo: CategoryModel[] = [];
    formStatus = FormStatusConstants.NEW;
    product: ProductModel = new ProductModel();
    productId: number;

    productForm = new FormGroup({
        name: new FormControl(null, [Validators.required]),
        description: new FormControl(null, [Validators.required]),
        stock: new FormControl(null, [Validators.required]),
        categoryID: new FormControl(null, [Validators.required]),
    });

    constructor(
        private categoryService: CategoryService,
        private productService: ProductService,
        private route: ActivatedRoute,
        private router: Router,
    ) {
        this.route.params.subscribe(params => {
            const productId = params.productId;
            if (productId) {
                this.productId = productId;
                this.formStatus = FormStatusConstants.EDIT;
                this.loadProduct(productId);
            }
        });

        this.categoryService.getAll().subscribe(
            (result: CategoryModel[]) => {
            this.categoryCombo = result;
        },
            error => console.error(error));
    }

    ngOnInit(): void {
        // any
    }

    goToProductList() {
        this.router.navigate(['/product']);
    }

    ngOnDestroy(): void {
        // any
    }

    loadProduct(id: number): void {
        this.productService.getById(id).subscribe(
            (product: ProductModel) => {
                this.product.setAll(product);
                this.populateForm();
            },
            error => console.error(error));
    }

    populateForm(): void {
        console.log(this.product.getFormValues());
        this.productForm.setValue(this.product.getFormValues());
    }

    saveProduct(): void {
        this.product.setAll(this.productForm.value);
        if (this.formStatus === FormStatusConstants.NEW) {
            this.productService.add(this.product).subscribe(
                (product: ProductModel) => {
                    this.goToProductList();
                },
                error => console.error(error));
        } else {
            this.productService.update(this.productId, this.product).subscribe(
                (product: ProductModel) => {
                    this.goToProductList();
                },
                error => console.error(error));
        }
    }
}
