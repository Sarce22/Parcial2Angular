import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contants } from '../constants/constants';
import { Cita } from './cita';

@Injectable({
  providedIn: 'root'
})
export class CitaService {

  constructor(private http: HttpClient) { 

  }

  getNow(){
    return this.http.get<any>(Contants.LISTAR)
  }

  add(cita: Cita) {
    const options = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    let json = JSON.stringify(cita);
    return this.http.post<any>(Contants.AGREGAR, json, options);
  }
  
  
}
