import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class UsersServices{
    _url = 'https://jsonplaceholder.typicode.com/users'

    constructor(private _http: HttpClient) { }

    getUsers(): Observable<any>{
        return this._http.get(this._url)
        .map(res => res)
    }

    addUsers(user): Observable<any>{
        return this._http.post(this._url, JSON.stringify(user))
        .map(res => res)
    }

    editUsers(id): Observable<any>{
        return this._http.get(this.getUserUrl(id))
        .map(res => res)
    }

    updateUser(user): Observable<any>{
        return this._http.put(this.getUserUrl(user.id), JSON.stringify(user))
        .map(res => res)
    }

    deleteUser(userId){
		return this._http.delete(this.getUserUrl(userId))
			.map(res => res);
	}

    private getUserUrl(userId){
		return this._url + "/" + userId;
	}
}