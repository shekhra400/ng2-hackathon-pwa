import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
const PouchDB = require('pouchdb');

@Injectable()
export class MyNewServiceService {
  db: any;
  data: any;

  constructor(private _http: Http) {
    // this.db = new PouchDB('my_app');
  }

  // createLocal(data: any): Promise<any> {

  //   return this.fetchLocal().then((entity: any) => {

  //     if (entity) {
  //       entity.bookings = data;
  //     } else {
  //       entity = {
  //         _id: 'home_content',
  //         _rev: null,
  //         homeContent: data
  //       };
  //     }
  //     return this.db.put(entity);
  //   });

  // }

  // public fetchLocal(): any {

  //   return this.db.get('home_content').catch(err => {
  //     if (err.status === 404) {
  //       return null;
  //     };
  //     return Promise.reject(err);
  //   });
  // }

  // deleteItem(item) {
  //   this.db.remove(item).catch((err) => {
  //     console.log(err);
  //   });
  // }

  // updateItem(item) {
  //   this.db.put(item).catch((err) => {
  //     console.log(err);
  //   });
  // }

  // getItem() {

  //   if (this.data) {
  //     return Promise.resolve(this.data);
  //   }

  //   return new Promise(resolve => {
  //     this.db.allDocs({
  //       include_docs: true
  //     }).then((result) => {
  //       this.data = [];
  //       result.rows.map((row) => {
  //         this.data.push(row.doc);
  //       });
  //       resolve(this.data);
  //     }).catch((error) => {
  //       console.log(error);
  //     });
  //   });
  // }

  // createItem(item) {
  //   this.db.post(item);
  // }

  // getApiData() {
  //   return this._http.get('https://api.github.com/users/mralexgray/repos')
  //     .map(res => res.json());
  // }
}
