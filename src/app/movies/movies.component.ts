import { Component, OnInit } from "@angular/core";
import { Movie } from "../movie";
import { MovieService } from "../movie.service";

@Component({
    selector: 'movies',
    templateUrl: './movies.component.html',
    styleUrls: ['./movies.component.css']
})

export class MoviesComponent implements OnInit {
    private title:string = "Naber";

    movies:Movie[]=[];
    selectedMovie:Movie = {
        id:0,
        name: ""
    }

    constructor(private movieService:MovieService) {
    }

    ngOnInit():void{
        this.getMovies();
    }

    getMovies():void{
        this.movieService.getMovies().subscribe((movies:Movie[]) => {
            this.movies = movies;
        });
    }

    get titleName(){
        return this.title; 
    }

    onSelect(movie:Movie):void{
        this.selectedMovie = movie;
    }
}