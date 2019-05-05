import {NgModule} from '@angular/core';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';

@NgModule({
    exports: [
        MatButtonModule,
        MatCheckboxModule,
    ]
})
export class MaterialModule {}