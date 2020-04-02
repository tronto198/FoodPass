import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServerConnecterService {
  private testinfo : string[];
  constructor() { }

  updateInfo() : string[] {
    this.testinfo = ["test 1", "test 2", "test 3"];
    return this.testinfo;
  }
}
