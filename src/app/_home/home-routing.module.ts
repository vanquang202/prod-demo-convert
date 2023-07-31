import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { TrangChuComponent } from './trang-chu/trang-chu.component';
import { OcrComponent } from './ocr/ocr.component';
import { ConvertPdfComponent } from './convert-pdf/convert-pdf.component';
import { ConvertImgComponent } from './convert-img/convert-img.component';
import { SecurityComponent } from './security/security.component';
import { FormatComponent } from './format/format.component';
import { SupportComponent } from './support/support.component';
import { PricingComponent } from './pricing/pricing.component';
import { HistoryConvertComponent } from './history-convert/history-convert.component';

const routes: Routes = [
  {
    path: "",
    component: HomeLayoutComponent,
    children: [
      {
        path: "",
        component: TrangChuComponent,
        data: { title: "Trang chủ" }
      },
      {
        path: "ocr",
        component: OcrComponent,
        data: { title: "Nhận dạng bóc tách " }
      },
      {
        path: "convert-pdf",
        component: ConvertPdfComponent,
        data: { title: "Nén PDF" }
      },
      {
        path: "convert-img",
        component: ConvertImgComponent,
        data: { title: "Chuyển đôi hình ảnh " }
      },
      {
        path: "security",
        component: SecurityComponent,
        data: { title: "Bảo mật" }
      },
      {
        path: "format",
        component: FormatComponent,
        data: { title: "Định dạng file " }
      },
      {
        path: "support",
        component: SupportComponent,
        data: { title: "Hỗ trợ " }
      },
      {
        path: "pricing",
        component: PricingComponent,
        data: { title: "Dịch vụ" }
      },
      {
        path: "my-files",
        component: HistoryConvertComponent,
        data: { title: "File của tôi" }
      },

    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
