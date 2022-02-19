import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {

  constructor(private _http: Http) {
    
  }

  private _albumUrl: string = "../assets/album.json";

  getAlbum(id: number) {
    return this._http.get(this._albumUrl).map(response => {
      return response.json();
    })
  }

}
