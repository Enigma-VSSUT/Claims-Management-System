import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Submit } from './submit';

@Injectable({
  providedIn: 'root'
})
export class SubmitService {

  constructor(private _http : HttpClient) { }

  public submitClaim(submit : Submit):Observable<any>{
    /**
     *Url of member microservice which deployed on EBS for AWS configuration
     */
     return this._http.post<Submit>("http://Ij019pod6memberservice-env.eba-rpfmxtp3.us-west-2.elasticbeanstalk.com/member/submitClaim/"+submit.policyId+"/"+submit.claimId+"/"+submit.memberId+"/"+submit.providerId+"/"+submit.benefitId+"/"+submit.totalBilledAmount+"/"+submit.totalClaimedAmount,submit)

     /**
     *Localhost URL for member microservice
     */
    //return this._http.post<Submit>("http://localhost:8020/member/submitClaim/"+submit.policyId+"/"+submit.claimId+"/"+submit.memberId+"/"+submit.providerId+"/"+submit.benefitId+"/"+submit.totalBilledAmount+"/"+submit.totalClaimedAmount,submit)
  }

}
