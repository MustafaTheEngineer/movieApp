import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from "angular-in-memory-web-api"
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb(reqInfo?: RequestInfo | undefined){
    const Movies = [
      {
          id: 1,
          name: "Tenet",
          description: "A Christian Nolan movie",
          imageUrl: "1.jpg"
      },
      {
          id: 2,
          name: "Batman",
          description: "A Christian Nolan movie",
          imageUrl: "2.jpg"
      },
      {
          id: 3,
          name: "Spider-man",
          description: "A Christian Nolan movie",
          imageUrl: "3.jpg"
      },
      {
          id: 4,
          name: "Twelve Angry Man",
          description: "Best film of all time",
          imageUrl: "4.jpg"
      },
      {
          id: 5,
          name: "Schindler's List",
          description: "Jewish",
          imageUrl: "5.jpg"
      }
  ];

  return {Movies};
  }
}
