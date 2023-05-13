import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { datosBasicos } from '../model/persona.model';

@Injectable({
  providedIn: 'root',
})
export class PortfolioService {
  URL = 'http://localhost:8080/personas/';

  constructor(private http: HttpClient) {}

  obtenerDatos(): Observable<any> {
    return this.http.get('assets/data/data.json');
  }

  public getPersona(): Observable<datosBasicos> {
    return this.http.get<datosBasicos>(this.URL + 'traer/perfil');
  }
}
