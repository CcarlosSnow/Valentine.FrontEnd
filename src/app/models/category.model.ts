import { BaseModel } from './base.model';
export class CategoryModel extends BaseModel {
    id: number;
    description: string;

    constructor() {
        super();
    }
}
