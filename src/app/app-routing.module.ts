import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { TrangChuComponent } from './pages/trang-chu/trang-chu.component';
import { OcrComponent } from './pages/ocr/ocr.component';
import { ConvertPdfComponent } from './pages/convert-pdf/convert-pdf.component';
import { ConvertImgComponent } from './pages/convert-img/convert-img.component';
import { SecurityComponent } from './pages/security/security.component';
import { FormatComponent } from './pages/format/format.component';
import { SupportComponent } from './pages/support/support.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { DocumentLayoutComponent } from './layouts/document-layout/document-layout.component';
import { DocumentComponent } from './pages/document/document.component';
import { DocumentApiComponent } from './pages/document-api/document-api.component';
import { DocumentCliComponent } from './pages/document-cli/document-cli.component';
import { DocumentPricingComponent } from './pages/document-pricing/document-pricing.component';
import { RegisterComponent } from './pages/register/register.component';
import { authGuard } from './guard/auth.guard';

const routes: Routes = [
  {
    path: "",
    component: DefaultLayoutComponent,
    // canActivate: [authGuard],
    children: [
      {
        path: "",
        component: TrangChuComponent
      },
      {
        path: "ocr",
        component: OcrComponent
      },
      {
        path: "convert-pdf",
        component: ConvertPdfComponent
      },
      {
        path: "convert-img",
        component: ConvertImgComponent
      },
      {
        path: "security",
        component: SecurityComponent
      },
      {
        path: "format",
        component: FormatComponent
      },
      {
        path: "support",
        component: SupportComponent
      },
      {
        path: "pricing",
        component: PricingComponent
      }
    ]
  },
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
  {
    path: "register",
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
