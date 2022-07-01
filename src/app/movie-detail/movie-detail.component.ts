import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MoviesComponent } from "../movies/movies.component";

@Component({
  selector: 'movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  @Input() movie:Movie;

  constructor() {
    this.movie = {
      id:0,
      name:"",
      description: "",
      imageUrl: ""
    }
   }

  ngOnInit(): void {
  }

}
