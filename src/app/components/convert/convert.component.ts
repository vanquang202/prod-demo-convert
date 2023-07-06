import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-convert',
  templateUrl: './convert.component.html',
  styleUrls: ['./convert.component.css']
})
export class ConvertComponent implements OnInit {
  files: any = [];
  isActive: boolean = false;

  constructor(private modalS: NgbModal) {
  }

  ngOnInit(): void {
    this.registerDropZone();
  }

  onSelectChange(event: any, index: number) {
    if (event.event == "select-type") {
      if (index == -1) {
        this.files.forEach((file: any) => {
          file.type_file = event.data;
        })
      } else {
        this.files[index].type_file = event.data;
      }
    }
  }

  convert() {

    this.files.forEach((file: any) => {
      file.type = 1;
      file.progress = 0;
      let interv = setInterval(() => {
        file.progress++;
        if (file.progress == 100) {
          clearInterval(interv);
          file.type = 2;
        }
      }, 100);
    });

  }

  removeFile(i: number) {
    this.files.splice(i, 1);
  }

  onChangeInput(event: any) {
    for (let index = 0; index < event.target.files.length; index++) {
      const file = event.target.files[index];
      this.files.push({ file: file });
    }
  }

  formatBytes(bytes: any, decimals = 2) {
    if (!+bytes) return '0 Bytes'
    const k = 1024
    const dm = decimals < 0 ? 0 : decimals
    const sizes = ['Bytes', 'KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`
  }

  registerDropZone() {
    let dropZone = document.querySelector('.convert-container');
    let dropZoneLoading = document.getElementById('preloader_drop');

    this.handleDragOver(dropZone);
    this.handleDragLeave(dropZoneLoading);
    this.handleDragOverLoading(dropZoneLoading);
    this.dropHandler(dropZoneLoading);
  }

  dropHandler(dropZone: any) {
    dropZone?.addEventListener('drop', (evt: any) => {
      evt.preventDefault();
      for (let index = 0; index < evt.dataTransfer.files.length; index++) {
        const file = evt.dataTransfer.files[index];
        this.files.push({ file: file });
      }
      this.isActive = false;
    }, false);
  }

  handleDragOverLoading(dropZone: any) {
    dropZone?.addEventListener('dragover', (evt: any) => {
      evt.preventDefault();
    }, false);

  }

  handleDragOver(dropZone: any) {
    dropZone?.addEventListener('dragover', (evt: any) => {
      evt.stopPropagation();
      evt.preventDefault();
      this.isActive = true;
    }, false);

  }

  handleDragLeave(dropZone: any) {
    dropZone?.addEventListener('dragleave', (evt: any) => {
      evt.preventDefault();
      evt.stopPropagation();
      if (evt.screenX == 0) this.isActive = false;
    }, false);
  }

}
