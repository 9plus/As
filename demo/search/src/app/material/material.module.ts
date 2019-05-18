import { NgModule } from '@angular/core';
import { MatCardModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatTabsModule,
        MatSelectModule,
        MatButtonModule} from '@angular/material';

@NgModule({
  exports: [
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatTabsModule,
    MatSelectModule,
    MatButtonModule
  ]
})
export class MaterialModule { }
