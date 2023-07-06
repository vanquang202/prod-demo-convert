import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  saveItem(key: string, item: any) {
    localStorage.setItem(key, JSON.stringify(item));
  }

  getItem(key: string) {
    var item: any = localStorage.getItem(key);
    return JSON.parse(item);
  }

  removeItem(key: string) {
    localStorage.removeItem(key);
  }
}
