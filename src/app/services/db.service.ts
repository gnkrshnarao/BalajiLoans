import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

import {Injectable} from "@angular/core";
import { Http,Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class BJdbService {
    http:any;
    baseUrl:string;
    

    constructor(http:Http){
        this.http = http;
        this.baseUrl='http://bjdbapi.azurewebsites.net/api/values/';
       // this.headers.append('Content-Type', 'application/json');
    }

      getCall(){
        return this.http.get(this.baseUrl).map(result => result.json());
        }

      postCall(Searchkey)
        {
        let headers = new Headers();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({headers:headers});
        let data=JSON.stringify({
          "CustomerName": Searchkey,
          "PhoneNumber" : Searchkey,
          "City" : Searchkey,
          "DueDate":Searchkey
        });
        return this.http.post(this.baseUrl,data,options).map(res => res.json());
        }
        

}


//.subscribe(res => {     console.log(res.json()); }, (err) => {     console.log(err); })