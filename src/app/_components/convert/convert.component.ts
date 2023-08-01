import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-convert',
  templateUrl: './convert.component.html',
  styleUrls: ['./convert.component.css']
})
export class ConvertComponent implements OnInit {
  files: any = [];
  isActive: boolean = false;
  isLoading: boolean = false;
  href: string = "";
  constructor(
    private modalS: NgbModal,
    private authS: AuthService
  ) { }

  ngOnInit(): void {
    this.registerDropZone();
    this.href = window.location.href;
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
    this.isLoading = true;
    this.authS.sendEvent('loading-page', { status: true });

    const fileSave = this.files.map((file: any) => {
      file.file = { name: file.file.name, size: file.file.size };
      return file;
    });
    this.authS.saveItem("fhc", fileSave);

    this.files.forEach((file: any) => {
      file.type = 1;
      file.progress = 0;
      let interv = setInterval(() => {
        file.progress++;
        if (file.progress == 100) {
          this.isLoading = false;
          clearInterval(interv);
          file.type = 2;
          this.authS.sendEvent('loading-page', { status: false });
        }
      }, 100);
    });

  }

  removeFile(i: number) {
    this.files.splice(i, 1);
    this.authS.saveItem("fhc", this.files);
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
    this.handleDrop(dropZoneLoading);
  }

  private handleDrop(dropZone: any) {
    dropZone?.addEventListener('drop', (evt: any) => {
      evt.preventDefault();
      for (let index = 0; index < evt.dataTransfer.files.length; index++) {
        const file = evt.dataTransfer.files[index];
        this.files.push({ file: file });
      }
      this.isActive = false;
    }, false);
  }

  private handleDragOverLoading(dropZone: any) {
    dropZone?.addEventListener('dragover', (evt: any) => {
      evt.preventDefault();
    }, false);

  }

  private handleDragOver(dropZone: any) {
    dropZone?.addEventListener('dragover', (evt: any) => {
      evt.stopPropagation();
      evt.preventDefault();
      this.isActive = true;
    }, false);

  }

  private handleDragLeave(dropZone: any) {
    dropZone?.addEventListener('dragleave', (evt: any) => {
      evt.preventDefault();
      evt.stopPropagation();
      if (evt.screenX == 0) this.isActive = false;
    }, false);
  }

}
