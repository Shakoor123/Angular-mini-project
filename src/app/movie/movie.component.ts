import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {
  id = '';
  movies: any;
  currentMovie: any;
  path: string = 'https://image.tmdb.org/t/p/original';

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.http
      .get<any>(
        'https://api.themoviedb.org/3/trending/all/day?api_key=851a15d43d97fe53ada086503e4e13e1'
      )
      .subscribe((data) => {
        this.movies = data.results;
        // this.currentMovie = this.movies.find((x: any) => x.id === this.id);
        for (var i = 0, len = this.movies.length; i < len; i++) {
          if (this.movies[i].id == this.id) {
            this.currentMovie = this.movies[i];
          }
        }
      });
  }
}
