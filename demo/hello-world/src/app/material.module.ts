import { NgModule } from '@angular/core';
import { MatButtonModule,
        MatDialogModule } from '@angular/material';

@NgModule({
    exports: [
        MatButtonModule,
        MatDialogModule
    ]
})
export class MaterialModule {}