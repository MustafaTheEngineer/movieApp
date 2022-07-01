import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';
import { MoviesComponent } from "../movies/movies.component";

@Component({
  selector: 'movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  @Input() movie:Movie= {
    id:0,
    name:"",
    description: "",
    imageUrl: ""
  };

  constructor(private movieService:MovieService,private route:ActivatedRoute) {
    
   }

  ngOnInit(): void {
    this.getMovie();
  }

  getMovie():void{
    const id:number = +this.route.snapshot.params['id'];
    this.movieService.getMovie(id).subscribe(movie => {this.movie = movie} )
  }

}
