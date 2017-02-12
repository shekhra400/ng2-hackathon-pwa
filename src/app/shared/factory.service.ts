import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class FactoryService {

    constructor(private _http: Http) { }

    get(path: string){
        return this._http.get(path)
        .map(res => res.json())
        ;
    }

    post(path: string,data: Object){
        return this._http.post(path, data)
        .map(res => res.json())
        ;
    }

}