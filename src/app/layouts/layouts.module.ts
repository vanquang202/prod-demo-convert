import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';
import { DocumentLayoutComponent } from './document-layout/document-layout.component';
import { ComponentsModule } from '../components/components.module';
import { RouterModule } from '@angular/router';
import { CartLayoutComponent } from './cart-layout/cart-layout.component';



@NgModule({
  declarations: [
    DefaultLayoutComponent,
    DocumentLayoutComponent,
    CartLayoutComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule,
  ]
})
export class LayoutsModule { }
