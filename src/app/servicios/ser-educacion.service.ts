import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SerEducacionService {
  eduURL = environment.URL + 'educacion/';

  constructor(private httpClient: HttpClient) {}

  public lista(): Observable<Educacion[]> {
    return this.httpClient.get<Educacion[]>(this.eduURL + 'lista');
  }

  public save(educacion: Educacion): Observable<any> {
    return this.httpClient.post<any>(this.eduURL + 'create', educacion);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.eduURL + `delete/${id}`);
  }

  guardarEducacion(
    educacionActualizada: Educacion,
    idEducacion: number
  ): Observable<Educacion> {
    return this.httpClient.put<Educacion>(
      `${this.eduURL}update/${idEducacion}`,
      educacionActualizada
    );
  }

  nuevaEducacion(educacion: Educacion): Observable<Educacion> {
    return this.httpClient.post<Educacion>(`${this.eduURL}`, educacion);
  }
}
