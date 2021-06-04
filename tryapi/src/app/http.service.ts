import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http : HttpClient) { }

  getCocktails(){
    return this.http.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita');
  }
}
