import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  v : any;
  
  constructor(private _http : HttpClient) { }

  
  public loginUserFormRemote(user :User):Observable<any>{
    sessionStorage.setItem("key" , user.username);
    /**
     *Url of Authorization microservice which deployed on EBS for AWS configuration
     */
     return this._http.post("http://Ij019pod6authservice-env.eba-66nqkf8a.us-west-2.elasticbeanstalk.com/authorization/login",user)
    
    /**
     *Localhost URL for connection with Authorization Microservice
     */
    //return this._http.post("http://localhost:8089/authorization/login",user)
  }
}
