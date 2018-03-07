import { Component, OnDestroy, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { ArchivoService } from '../../app/services';
import { UploadFileModel } from '../../app/models';

@Component({
    selector: 'app-success',
    templateUrl: './success.component.html',
    styleUrls: ['./success.component.css'],
})

export class SuccessComponent {

    columns = [];
    imageLogo: string;

    @ViewChild('actionsTemplate')
    actionsTemplate: TemplateRef<any>;

    fileType: string;
    fileExtension: string;

    constructor(private archivoSevice: ArchivoService) {

    }

    private createColumsTable(): void {
        this.columns = [
            { prop: 'rutaArchivo', name: 'Nombre', width: 110, resizeable: false, canAutoResize: false, sortable: true, draggable: false },
            { name: '', cellTemplate: this.actionsTemplate, resizeable: false, canAutoResize: false, sortable: false, draggable: false }
        ];
    }

    onFileUpload($event): void {
        this.fileType = $event.target.files[0].type;
        this.fileExtension = String($event.target.files[0].name).substring(String($event.target.files[0].name).lastIndexOf('.') + 1);
        var reader = new FileReader();
        reader.onload = this._handleReaderLoaded.bind(this);
        reader.readAsBinaryString($event.target.files[0]);
    }

    _handleReaderLoaded(readerEvt): void {
        var binaryString = readerEvt.target.result;
        this.imageLogo = btoa(binaryString);
        this.imageLogo = `data:${this.fileType};base64,${this.imageLogo}`;
        var uploadFile: UploadFileModel = new UploadFileModel();
        uploadFile.name = '';
        uploadFile.container = 'documentos';
        uploadFile.image = this.imageLogo;
        uploadFile.extension = this.fileExtension;
        this.archivoSevice.uploadFile(uploadFile).subscribe(
            (result: UploadFileModel) => {
                console.log('result', result);
            },
            error => {
                console.log(error);
            }
        );
    }
}
