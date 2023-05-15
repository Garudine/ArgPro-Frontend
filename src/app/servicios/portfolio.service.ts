import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { datosBasicos } from '../model/persona.model';

@Injectable({
  providedIn: 'root',
})
export class PortfolioService {
  URL = 'http://localhost:8080/personas/';

  constructor(private httpClient: HttpClient) {}

  obtenerDatos(): Observable<any> {
    return this.httpClient.get('assets/data/data.json');
  }

  public getPersona(): Observable<datosBasicos> {
    return this.httpClient.get<datosBasicos>(this.URL + 'traer/perfil');
  }

  guardarDatosBasicos(
    datosBasicosActualizados: datosBasicos,
    iddatosBasicos: number
  ): Observable<datosBasicos> {
    return this.httpClient.put<datosBasicos>(
      `${this.URL}editar/${iddatosBasicos}`,
      datosBasicosActualizados
    );
  }

  nuevosDatosBasicos(datosbasicos: datosBasicos): Observable<datosBasicos> {
    return this.httpClient.post<datosBasicos>(`${this.URL}`, datosbasicos);
  }
}
