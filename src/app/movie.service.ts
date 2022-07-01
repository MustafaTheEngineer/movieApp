import { Injectable } from '@angular/core';
import { Movies } from "./movie.datasource";
import { Movie } from "./movie";
import { Observable, of } from "rxjs";
import { LoggingService } from './logging.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private loggingService:LoggingService,
    private http:HttpClient
    ) { }

  getMovies(): Observable<Movie[]>{
    this.http.get('')
    this.loggingService.add('MovieService: listing movie');
    return of(Movies);
  }

  getMovie(id:number): Observable<Movie> {
    this.loggingService.add('MovieService: get movie detail by id = ' + id);
    for (let index:number = 0; index < Movies.length; index++) {
      if(Movies[index].id === id)
        return of(Movies[index]); 
    }
    return of(Movies[0]);
  }
}
