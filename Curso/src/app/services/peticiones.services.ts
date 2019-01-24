import {Injectable} from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';
import {Observable} from 'rxjs/Observable';
@Injectable()
export class PeticionesServices{
    public url ;
    constructor(public http : HttpClient){
        this.url = "https://jsonplaceholder.typicode.com/posts";   
    }
    
    getPrueba(){
        return "Hola mundo";
    }
    
    getArticulos():Observable<any>{
      return this.http.get(this.url);
    }
}
