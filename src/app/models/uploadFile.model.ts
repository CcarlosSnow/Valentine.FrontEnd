import { BaseModel } from './base.model';
export class UploadFileModel extends BaseModel {
    container: string;
    name: string;
    image: string;
    extension: string;

    constructor() {
        super();
    }
}
