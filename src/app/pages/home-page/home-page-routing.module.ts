import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultLayoutComponent } from 'src/app/layouts/default-layout/default-layout.component';
import { TrangChuComponent } from './trang-chu/trang-chu.component';
import { OcrComponent } from './ocr/ocr.component';
import { ConvertPdfComponent } from './convert-pdf/convert-pdf.component';
import { ConvertImgComponent } from './convert-img/convert-img.component';
import { SecurityComponent } from './security/security.component';
import { FormatComponent } from './format/format.component';
import { SupportComponent } from './support/support.component';
import { PricingComponent } from './pricing/pricing.component';


const routes: Routes = [
  {
    path: "",
    component: DefaultLayoutComponent,
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
      },

    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }
