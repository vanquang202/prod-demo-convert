import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private objEvent: any = [];

  constructor() { }

  // Localstorage 
  saveItem(key: string, item: any) {
    localStorage.setItem(key, JSON.stringify(item));
  }
  getItem(key: string) {
    var item: any = localStorage.getItem(key);
    return JSON.parse(item);
  }
  removeItem(key: string) {
    if (localStorage.getItem(key)) localStorage.removeItem(key);
  }

  // Event 
  listenEvent(event: string) {
    if (!this.objEvent[event]) this.objEvent[event] = new Subject<any>();
    return this.objEvent[event].asObservable();
  }
  sendEvent(event: string, data: any) {
    if (!this.objEvent[event]) this.objEvent[event] = new Subject<any>();
    this.objEvent[event].next(data);
  }

  // Destroy 
  ngOnDestroy() {
    for (let index = 0; index < this.objEvent.length; index++) {
      const event = this.objEvent[index];
      event.unsubscribe();
    }
  }
}
