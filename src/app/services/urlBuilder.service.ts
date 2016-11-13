import {Injectable} from '@angular/core';

@Injectable()
export class UrlBuilderService {
    private URL:string;

    constructor(){
        this.URL = 'https://api.spotify.com';
    }

    public searchUrl(type:string, searchString:string):string {
        searchString = searchString.replace(/ /g, "+");
        type = type.toLocaleLowerCase();

        return `${this.URL}/v1/search?q=${searchString}&type=${type}`
    }
}