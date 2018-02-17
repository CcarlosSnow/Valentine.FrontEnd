import { Component, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { ProductModel } from '../../app/models';
import { ProductService } from '../../app/services';
import { DatatableComponent } from '@swimlane/ngx-datatable';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css'],
})

export class ProductListComponent implements OnInit, OnDestroy {

    columns = [];
    loadingIndicator: boolean;
    rows: ProductModel[] = [];
    temp: ProductModel[] = [];

    @ViewChild('actionsTemplate')
    actionsTemplate: TemplateRef<any>;

    @ViewChild(DatatableComponent) table: DatatableComponent;

    constructor(
        private productService: ProductService,
        private router: Router,
    ) {
        // any
    }

    ngOnInit(): void {
        this.createColumsTable();
        this.loadData();
    }

    addProduct() {
        this.router.navigate(['/product/add']);
    }

    editProduct(row: ProductModel) {
        this.router.navigate([`/product/${row.ID}/edit`]);
    }

    deteleProduct(row: ProductModel) {
        if (confirm(`Are you sure to delete ${row.Name}?`)) {
            this.productService.delete(row.ID)
            .subscribe((product: ProductModel) => {
                this.loadData();
            });
        }
    }

    ngOnDestroy(): void {
        // any
    }

    private createColumsTable(): void {
        this.columns = [
            { prop: 'Name', name: 'Name', width: 200, resizeable: false, canAutoResize: false, sortable: true, draggable: false },
            { prop: 'Description', name: 'Description', width: 200,
                resizeable: false, canAutoResize: false, sortable: true, draggable: false },
            { prop: 'Stock', name: 'Stock', width: 200, resizeable: false, canAutoResize: false, sortable: true, draggable: false },
            { prop: 'CategoryName', name: 'Category', width: 200,
                resizeable: false, canAutoResize: false, sortable: true, draggable: false },
            { name: '', width: 200, cellTemplate: this.actionsTemplate, resizeable: false,
                canAutoResize: false, sortable: false, draggable: false },
        ];
    }

    private loadData(): void {
        this.loadingIndicator = true;
        this.productService.getAll()
            .subscribe((product: ProductModel[]) => {
                this.rows = product;
                this.temp = product;
                this.loadingIndicator = false;
            },
                       error => {
                           console.error(error);
                        },
        );
    }

    private updateFilter(event) {
        const val = event.target.value.toLowerCase();

        // filter our data
        const temp = this.temp.filter(function(d) {
          return d.Name.toLowerCase().indexOf(val) !== -1 || !val;
        });

        // update the rows
        this.rows = temp;
        // Whenever the filter changes, always go back to the first page
        this.table.offset = 0;
      }
}
