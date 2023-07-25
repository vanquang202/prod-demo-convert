import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentLayoutComponent } from './document-layout/document-layout.component';
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
        component: DocumentComponent,
        data: { title: "Tài liệu" }
      },
      {
        path: "api",
        component: DocumentApiComponent,
        data: { title: "Tài liệu api  " }
      },
      {
        path: "cli",
        component: DocumentCliComponent,
        data: { title: "Tài liệu CLI " }
      },
      {
        path: "pricing",
        component: DocumentPricingComponent,
        data: { title: "Dịch vụ" }
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentRoutingModule { }
