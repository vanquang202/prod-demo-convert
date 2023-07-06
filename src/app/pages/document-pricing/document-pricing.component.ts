import { Component } from '@angular/core';

@Component({
  selector: 'app-document-pricing',
  templateUrl: './document-pricing.component.html',
  styleUrls: ['./document-pricing.component.css']
})
export class DocumentPricingComponent {
  price: number = 12;
  minute: number = 1000;
  ragerValue: number = 50;
  onInPut(event: any) {
    this.ragerValue = event.target.value;
  }
}
