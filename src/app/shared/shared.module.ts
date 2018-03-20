import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { MyDatePickerModule } from 'mydatepicker';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { NavBarComponent } from './components';

@NgModule({
    imports: [
        NgxDatatableModule,
        MyDatePickerModule,
        BsDropdownModule.forRoot(),
    ],
    declarations: [
        NavBarComponent,
    ],
    bootstrap: [],
    schemas: [
        NO_ERRORS_SCHEMA,
    ],
    exports: [
        NavBarComponent,
        NgxDatatableModule,
        MyDatePickerModule,
        BsDropdownModule,
    ],
    providers: [],
})

export class SharedComponentModule {}
