import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-type-file',
  templateUrl: './type-file.component.html',
  styleUrls: ['./type-file.component.css']
})
export class TypeFileComponent {

  @Output() onSelectChange = new EventEmitter();

  dsObj: any = [
    { type: 1, name: "PNG" },
    { type: 2, name: "ZIP" },
    { type: 3, name: "RAR" },
    { type: 4, name: "JPG" },
  ]

  onSelectTypeFile(item: any) {
    this.onSelectChange.emit({ event: "select-type", data: item });
  }
}
