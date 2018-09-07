import { NgModule } from '@angular/core';

import {
  MatDialogModule,
  MatFormFieldModule,
  MatSlideToggleModule,
  MatSelectModule,
  MatToolbarModule,
  MatButtonModule,
  MatMenuModule,
  MatIconModule,
  MatCardModule,
  MatListModule,
  MatCheckboxModule,
  MatInputModule
} from '@angular/material';

@NgModule({
  imports: [
    MatDialogModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatCheckboxModule,
    MatInputModule
  ],
  exports: [
    MatDialogModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatCheckboxModule,
    MatInputModule
  ]
})
export class MaterialModule { }
