import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { movies } from '../../assets/data.js';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private http: HttpClient) {}
  movies: any;
  ngOnInit(): void {
    // this.getMovies();
    // this.http
    //   .get<any>(
    //     'https://api.themoviedb.org/3/trending/all/day?api_key=851a15d43d97fe53ada086503e4e13e1'
    //   )
    //   .subscribe((data) => {
    //     this.movies = data;
    //   });
    // console.log(this.movies);
  }
  // getMovies = async () => {
  //   const res = await this.http.get<any>(
  //     'https://api.themoviedb.org/3/trending/all/day?api_key=851a15d43d97fe53ada086503e4e13e1'
  //   );
  // };
}
