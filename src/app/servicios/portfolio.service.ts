import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { datosBasicos } from '../model/persona.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PortfolioService {
  URL = environment.URL + 'personas/';

  constructor(private httpClient: HttpClient) {}

  public lista(): Observable<datosBasicos[]> {
    return this.httpClient.get<datosBasicos[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<datosBasicos> {
    return this.httpClient.get<datosBasicos>(this.URL + `detail/${id}`);
  }

  public save(datosbasicos: datosBasicos): Observable<any> {
    return this.httpClient.post<any>(this.URL + 'create', datosbasicos);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }

  public update(id: number, datosbasicos: datosBasicos): Observable<any> {
    return this.httpClient.put<any>(this.URL + `update/${id}`, datosbasicos);
  }
}
