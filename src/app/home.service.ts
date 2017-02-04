import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
const PouchDB = require('pouchdb');

@Injectable()
export class HomeService {

  db: any;
  // data: any;

  constructor(private _http: Http) {
    this.db = new PouchDB('my_app');
  }

  createItem(data: any) {

    let doc = {
      _id: 'home_content',
      homeContent: data
    }
    this.db.put(doc, function (err, response) {
      if (err) {
        return console.log(err);
      } else {
        console.log('Document created Successfully');
      }
    });
  }

  getItem(itemId: any): Promise<any> {

    return this.db.get(itemId).catch(err => {
      if (err.status == 404) return null;
      return Promise.reject(err);
    });
  }

  getApiData() {
    return this._http.get('./testjson/home_content.json')
      .map(res => res.json());
  }

}
