import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-trang-chu',
  templateUrl: './trang-chu.component.html',
  styleUrls: ['./trang-chu.component.css']
})
export class TrangChuComponent implements OnInit {
  count_file: number = 0;
  count_file_max: number = 2999999;

  constructor(
  ) { }

  ngOnInit(): void {
    let interval: any = setInterval(() => {
      if (!(this.count_file <= this.count_file_max)) {
        clearInterval(interval);
      } else {
        this.count_file = (this.count_file + 10000) > this.count_file_max ? this.count_file_max : this.count_file + 10000;
      }
    }, 1);
  }
}
