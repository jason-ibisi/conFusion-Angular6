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
  MatInputModule,
  MatGridListModule,
  MatProgressSpinnerModule
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
    MatInputModule,
    MatGridListModule,
    MatProgressSpinnerModule
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
    MatInputModule,
    MatGridListModule,
    MatProgressSpinnerModule
  ]
})
export class MaterialModule { }
