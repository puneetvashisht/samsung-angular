import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button'
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu'
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from  '@angular/material/toolbar'
import {MatTableModule} from '@angular/material/table';
// import {MatLabelModule} from '@angular/material/'
import {DragDropModule} from '@angular/cdk/drag-drop';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';



const modules = [ MatFormFieldModule, MatInputModule, MatButtonModule, MatListModule, MatMenuModule, MatIconModule, MatToolbarModule, MatTableModule]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...modules
  ],
  exports: [
    ...modules
  ]

})
export class SharedModule { }
