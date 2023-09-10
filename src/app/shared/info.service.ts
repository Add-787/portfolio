import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  constructor() { }

  getStats() : Stat[] {

    return [
      new Stat("Websites",3),
      new Stat("Mobile Apps",3),
      new Stat("Articles", 0)
    ]
  }
}

class Stat {
  name: string;
  count: number;

  constructor(name: string,count:number)
  {
    this.name = name;
    this.count = count;
  }
}
