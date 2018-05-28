import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class MenuService {



  constructor(private http: Http) { }

  getMenu() {
    return this.http.get('http://starlord.hackerearth.com/beercraft').map((res: Response) => res.json());
  }
}
