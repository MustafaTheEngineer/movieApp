import { Injectable } from '@angular/core';
import { Movies } from "./movie.datasource";
import { Movie } from "./movie";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  get Movies():Movie[]{

    return Movies;
  }
}
