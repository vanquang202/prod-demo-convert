import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConvertComponent } from './convert/convert.component';
import { FooterComponent } from './footer/footer.component';
import { FooterDocumentComponent } from './footer-document/footer-document.component';
import { HeaderComponent } from './header/header.component';
import { HeaderDocumentComponent } from './header-document/header-document.component';
import { TypeFileComponent } from './type-file/type-file.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { GoogleSigninButtonModule } from '@abacritt/angularx-social-login';



@NgModule({
  declarations: [
    ConvertComponent,
    HeaderComponent,
    FooterComponent,
    FooterDocumentComponent,
    HeaderDocumentComponent,
    TypeFileComponent
  ],
  exports: [
    ConvertComponent,
    HeaderComponent,
    FooterComponent,
    FooterDocumentComponent,
    HeaderDocumentComponent,
    TypeFileComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    GoogleSigninButtonModule
  ]
})
export class ComponentsModule { }
