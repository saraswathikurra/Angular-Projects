import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'tryapi';

  cocktails : Object;

  constructor(private api:HttpService){}

  ngOnInit(): void {
    this.api.getCocktails().subscribe(data => {
      this.cocktails = data;
      console.log(this.cocktails)
    });
  }
}
