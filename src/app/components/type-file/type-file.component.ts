import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-type-file',
  templateUrl: './type-file.component.html',
  styleUrls: ['./type-file.component.css']
})
export class TypeFileComponent {

  content: string = "";
  dsObj: any = [
    {
      name: "Hình ảnh",
      data: [
        { type: 1, name: "PNG" },
        { type: 2, name: "Html" },
        { type: 3, name: "PDF" },
        { type: 4, name: "JPG" },
      ]
    },
    {
      name: "Tài liệu ",
      data: [
        { type: 1, name: "ZIP" },
        { type: 2, name: "RAR" },
      ]
    },
    {
      name: "Ebook",
      data: [
        { type: 1, name: "Ebook2" },
        { type: 2, name: "Ebook3" },
      ]
    },
    {
      name: "Trình bày ",
      data: [
        { type: 1, name: "WInrar " },
      ]
    },
  ]
  keyActive: number = 0;
  @Output() onSelectChange = new EventEmitter();

  onSelectTypeFile(item: any) {
    this.onSelectChange.emit({ event: "select-type", data: item });
  }

  searchData() {
    this.dsObj[this.keyActive].data.forEach((el: any) => {
      if (el.name.indexOf(this.content) > -1)
        el.isActive = true;
      else
        el.isActive = false;
    });
  }
}
