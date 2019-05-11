import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private headerSource = new BehaviorSubject('DASHBOARD');
  currentHeader = this.headerSource.asObservable();

  constructor() { }

  changeHeader(headerValue: string) {
    this.headerSource.next(headerValue);
  }
}
