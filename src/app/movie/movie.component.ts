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
  currentMovies: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.http
      .get<any>(
        'https://api.themoviedb.org/3/trending/all/day?api_key=851a15d43d97fe53ada086503e4e13e1'
      )
      .subscribe((data) => {
        this.movies = data.results;
      });
  }
}
