import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';
import { DocumentLayoutComponent } from './document-layout/document-layout.component';
import { ComponentsModule } from '../components/components.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    DefaultLayoutComponent,
    DocumentLayoutComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule,
  ]
})
export class LayoutsModule { }
