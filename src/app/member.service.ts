import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Member } from './member';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(private _http : HttpClient) { }

  public memberForm(member :Member):Observable<Member[]>{
     /**
     *Url of member microservice which deployed on EBS for AWS configuration
     */
     return this._http.get<Member[]>("http://Ij019pod6memberservice-env.eba-rpfmxtp3.us-west-2.elasticbeanstalk.com/member/viewBills/"+member.memberId+"/"+member.policyId);

     /**
     *Localhost URL for member microservice
     */
    //return this._http.get<Member[]>("http://localhost:8020/member/viewBills/"+member.memberId+"/"+member.policyId);
  }

 

  
}
