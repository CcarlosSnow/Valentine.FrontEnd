import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { MyDatePickerModule } from 'mydatepicker';

@NgModule({
    imports: [NgxDatatableModule, MyDatePickerModule],
    declarations: [],
    bootstrap: [],
    schemas: [NO_ERRORS_SCHEMA],
    exports: [NgxDatatableModule, MyDatePickerModule],
    providers: [],
})
export class SharedComponentModule {

}
