import { Component } from "@angular/core";

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
    num:number=5;
    constructor() {
        
    }
}