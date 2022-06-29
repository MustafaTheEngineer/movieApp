import { Component } from "@angular/core";
import { Movie } from "../movie";
import { Movies } from "../movie.datasource";

@Component({
    selector: 'movies',
    templateUrl: './movies.component.html',
    styles: [`
        h2 {
            color: blue;
        }
    `]
})

export class MoviesComponent {
    private title:string = "Naber";

    movies:Movie[] = Movies;

    constructor() {
        
    }

    get titleName(){
        return this.title; 
    }
}