import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Claim } from './claim';
import { Member } from './member';

@Injectable({
  providedIn: 'root'
})
export class ClaimService {
  claimForm(claim: Claim) {
    throw new Error('Method not implemented.');
  }

  constructor(private _http :HttpClient) { }

  public claimStatus(claim : Claim):Observable<Claim>{
    /**
     *Url of member microservice which deployed on EBS for AWS configuration
     */
     return this._http.get<Claim>("http://Ij019pod6memberservice-env.eba-rpfmxtp3.us-west-2.elasticbeanstalk.com/member/getClaimStatus/"+claim.claimId+"/"+claim.policyId+"/"+claim.memberId)

     /**
     *Localhost URL for member microservice
     */
    //return this._http.get<Claim>("http://localhost:8020/member/getClaimStatus/"+claim.claimId+"/"+claim.policyId+"/"+claim.memberId)
  }
}
