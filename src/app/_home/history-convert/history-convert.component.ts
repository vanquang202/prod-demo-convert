import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-history-convert',
  templateUrl: './history-convert.component.html',
  styleUrls: ['./history-convert.component.css']
})
export class HistoryConvertComponent implements OnInit {

  files: any
  constructor(
    private authS: AuthService
  ) { }

  ngOnInit(): void {
    this.files = this.authS.getItem("fhc");
  }


  formatBytes(bytes: any, decimals = 2) {
    if (!+bytes) return '0 Bytes'
    const k = 1024
    const dm = decimals < 0 ? 0 : decimals
    const sizes = ['Bytes', 'KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`
  }


  removeFile(i: number) {
    this.files.splice(i, 1);
  }
}
