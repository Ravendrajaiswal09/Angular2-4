import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map'


@Injectable()
export class PostsServices {

    _url = 'https://jsonplaceholder.typicode.com/posts'

    constructor(private _http: HttpClient) { }

    getServices(filter): Observable<any>{
        let url = this._url;

        if(filter){
            url += '?userId=' + filter;
        }
        return this._http.get(url)
        .map(res => res)
    }
     getComments(id): Observable<any>{
        return this._http.get(this._url + "/" + id + "/comments")
        .map(res => res)
    }

}