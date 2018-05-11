import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService{

    constructor(private http: Http) {}

    configUrl = 'assets/api.json';

    getData() {
        return this.http.get(this.configUrl)
        .map((res: Response) => res);
        
    }
}