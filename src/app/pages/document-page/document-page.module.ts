import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentPageRoutingModule } from './document-page-routing.module';
import { RouterModule } from '@angular/router';
import { DocumentComponent } from './document/document.component';
import { DocumentCliComponent } from './document-cli/document-cli.component';
import { DocumentApiComponent } from './document-api/document-api.component';
import { DocumentPricingComponent } from './document-pricing/document-pricing.component';


@NgModule({
  declarations: [
    DocumentComponent,
    DocumentCliComponent,
    DocumentApiComponent,
    DocumentPricingComponent
  ],
  imports: [
    CommonModule,
    DocumentPageRoutingModule,
    RouterModule
  ]
})
export class DocumentPageModule { }
