import {NgModule} from '@angular/core';
import {MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatInputModule,
        MatGridListModule,
        MatListModule,
        MatTableModule,
        MatPaginatorModule,
    } from '@angular/material';

@NgModule({
    exports: [
        MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatInputModule,
        MatGridListModule,
        MatListModule,
        MatTableModule,
        MatPaginatorModule,
    ]
})
export class MaterialModule {}