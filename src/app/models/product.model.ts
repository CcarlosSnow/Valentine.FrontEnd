import { BaseModel } from './base.model';
export class ProductModel extends BaseModel {
    ID: number;
    Name: string;
    Description: string;
    Stock: number;
    CategoryID: number;
    CategoryName: string;

    constructor() {
        super();
    }

    public getFormValues() {
        return {
            name: this.Name,
            description: this.Description,
            stock: this.Stock,
            categoryID: this.CategoryID,
        };
    }
}
