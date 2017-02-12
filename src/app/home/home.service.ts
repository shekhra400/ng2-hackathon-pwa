import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subscriber } from 'rxjs/Subscriber';
import * as Rx from 'rxjs/Rx';
import 'rxjs/Rx';
const PouchDB = require('pouchdb');
import { FactoryService } from '../shared/factory.service';

@Injectable()
export class HomeService {

  db: any;
  // data: any;

  constructor(private _http: Http, private _factoryService: FactoryService) {
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
    return this._factoryService.get('../testjson/home.json')
      ;
  }

  // getApiDataWithPromise() {
  //   return new Promise((resolve, reject) => {
  //     this._factoryService.get('../testjson/home.json')
  //       .subscribe(res => {
  //         resolve(res);
  //       },
  //       err => {
  //         reject(err);
  //       }
  //       )
  //   });
  // }

  getApiDataWithObservable() {
    return Rx.Observable.create((subscriber: Subscriber<Object>) => {
      this._factoryService.get('../testjson/home.json')
        .subscribe(res => {
          console.log(subscriber);
          subscriber.next(res);
          subscriber.complete();
        }, err => {
          console.log('in hoomeservice error');
          subscriber.next(err);
        }
        );
    });
  }
}