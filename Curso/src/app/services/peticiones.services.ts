import {Injectable} from '@angular/core';
import {HttpClient,Response,Headers} from '@angular/common/http';
import { map } from 'rxjs/operators';
import {Observable} from 'rxjs/Observable';
@Injectable()
export class PeticionesServices{
    public url ;
    constructor(private _http){
        this.url = "https://jsonplaceholder.typicode.com/posts";   
    }
    
    getPrueba(){
        return "Hola mundo";
    }
    
    getArticulos(){
        return this._http.get(this.url)
                          .pipe(map(res => res.json()));
    }
}
