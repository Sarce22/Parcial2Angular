import { Injectable } from '@angular/core';
import { Contants } from '../constants/constants';
import { Login } from './login';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

url = Contants.LOGIN

  constructor(private http:HttpClient) { }


  login(login:Login){
    const options = {
      headers: {
        'content-type': 'application/json'
      }
    }
    let json = JSON.stringify(login)
    return this.http.post<any>(this.url,json,options)
    
  }
}
