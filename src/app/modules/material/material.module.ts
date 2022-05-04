import { NgModule } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [],
  imports: [
    MatSelectModule,
    MatButtonModule,
    MatToolbarModule,
    MatDialogModule,
    MatCardModule,
    MatIconModule,
  ],
  exports: [
    MatSelectModule,
    MatButtonModule,
    MatToolbarModule,
    MatDialogModule,
    MatCardModule,
    MatIconModule,
  ],
})
export class MaterialModule {}
