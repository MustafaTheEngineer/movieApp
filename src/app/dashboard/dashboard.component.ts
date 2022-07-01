import { Component, OnInit } from '@angular/core';
import { MovieService } from "../movie.service";
import { Movie } from "../movie";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  movies:Movie[]=[];
  moviesLength: number = 0;

  constructor(private movieService:MovieService) {
   }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies():void{
    this.movieService.getMovies()
    .subscribe((movies:Movie[]) => {
      this.movies = movies.slice(0,3);
      this.moviesLength = movies.length;
    });
  }

}
