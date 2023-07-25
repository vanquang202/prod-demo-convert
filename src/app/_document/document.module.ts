import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentRoutingModule } from './document-routing.module';
import { DocumentLayoutComponent } from './document-layout/document-layout.component';
import { DocumentComponent } from './document/document.component';
import { DocumentCliComponent } from './document-cli/document-cli.component';
import { DocumentApiComponent } from './document-api/document-api.component';
import { DocumentPricingComponent } from './document-pricing/document-pricing.component';
import { ComponentsModule } from '../_components/components.module';


@NgModule({
  declarations: [
    DocumentLayoutComponent,
    DocumentComponent,
    DocumentCliComponent,
    DocumentApiComponent,
    DocumentPricingComponent
  ],
  imports: [
    CommonModule,
    DocumentRoutingModule,
    ComponentsModule
  ]
})
export class DocumentModule { }
