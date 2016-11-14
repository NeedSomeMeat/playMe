import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';

const URL = 'https://api.spotify.com/v1/search.component';

@Injectable()
export class BackendService {

    constructor(private http: Http) { }

    public getMOCKS(): Observable<{}> {
        return this.http.get(URL)
            .cache()
            .map((res: Response) => <Object[]>res.json())
    }

    public get(url:string): Observable<{}> {
        return this.http.get(url)
            .cache()
            .map((res: Response) => <Object[]>res.json())
    }
}