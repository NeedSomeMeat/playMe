import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {UrlBuilderService} from "./urlBuilder.service";


@Injectable()
export class BackendService {

    constructor(private http: Http, private URL: UrlBuilderService) { }

    public search(type:string, searchString:string): Observable<{}> {
        return this.http.get(this.URL.searchUrl(type, searchString))
            .cache()
            .map((res: Response) => <Object[]>res.json())
    }

    public get(url:string): Observable<{}> {
        return this.http.get(url)
            .cache()
            .map((res: Response) => <Object[]>res.json())
    }
}