import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentLayoutComponent } from 'src/app/layouts/document-layout/document-layout.component';
import { DocumentComponent } from './document/document.component';
import { DocumentApiComponent } from './document-api/document-api.component';
import { DocumentCliComponent } from './document-cli/document-cli.component';
import { DocumentPricingComponent } from './document-pricing/document-pricing.component';

const routes: Routes = [
  {
    path: "document",
    component: DocumentLayoutComponent,
    children: [
      {
        path: "",
        component: DocumentComponent
      },
      {
        path: "api",
        component: DocumentApiComponent
      },
      {
        path: "cli",
        component: DocumentCliComponent
      },
      {
        path: "pricing",
        component: DocumentPricingComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentPageRoutingModule { }
