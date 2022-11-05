import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private http: HttpClient, private router: Router) {}
  movies: any;
  movies1: any;
  movies2: any;
  movies3: any;

  path: string = 'https://image.tmdb.org/t/p/original';
  ngOnInit(): void {
    this.getMovies();
  }
  getMovies() {
    this.http
      .get<any>(
        'https://api.themoviedb.org/3/trending/all/day?api_key=851a15d43d97fe53ada086503e4e13e1'
      )
      .subscribe((data) => {
        this.movies = data.results;
        // console.log(this.movies);
        this.movies1 = this.movies.slice(0, 4);
        this.movies2 = this.movies.slice(4, 8);
        this.movies3 = this.movies.slice(8, 20);
      });
  }
  gotoMovie(id: number) {
    this.router.navigate(['movie', id]);
  }
}
