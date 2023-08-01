import { Component } from '@angular/core';

@Component({
  selector: 'app-received',
  templateUrl: './received.component.html',
  styleUrls: ['./received.component.css']
})
export class ReceivedComponent {
  dsObjReceived: any = [
    {
      name: "Hóa đơn 1 ",
      status: 1
    },
    {
      name: "Hóa đơn 2 ",
      status: 1
    },
    {
      name: "Hóa đơn 3 ",
      status: 0
    }
  ];

}
