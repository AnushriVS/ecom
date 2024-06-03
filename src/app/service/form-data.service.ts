// form-data.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {
  //submittedData: any;
  private submittedData: any[] = [];

  constructor() { }

  storeSubmittedData(data: any) {
    //this.submittedData = data;
    this.submittedData.push(data);
  }

  getSubmittedData() {
    return this.submittedData;
  }
}
