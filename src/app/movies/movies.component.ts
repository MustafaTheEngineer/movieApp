import { Component } from "@angular/core";
import { Movie } from "../movie";
import { Movies } from "../movie.datasource";

@Component({
    selector: 'movies',
    templateUrl: './movies.component.html',
    styleUrls: ['./movies.component.css']
})

export class MoviesComponent {
    private title:string = "Naber";

    movies:Movie[] = Movies;
    selectedMovie:Movie;

    constructor() {
        this.selectedMovie = {
            id:0,
            name: ""
        }
    }

    get titleName(){
        return this.title; 
    }

    onSelect(movie:Movie):void{
        this.selectedMovie = movie;
    }
}