import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/laboral';

@Injectable({
  providedIn: 'root',
})
export class SerExperienciaService {
  labURL = 'http://localhost:8080/explab/';

  constructor(private httpClient: HttpClient) {}

  public lista(): Observable<Experiencia[]> {
    return this.httpClient.get<Experiencia[]>(this.labURL + 'lista');
  }

  public save(expe: Experiencia): Observable<any> {
    return this.httpClient.post<any>(this.labURL + 'create', expe);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.labURL + `delete/${id}`);
  }

  guardarExperiencia(
    experienciaActualizada: Experiencia,
    idExperiencia: number
  ): Observable<Experiencia> {
    return this.httpClient.put<Experiencia>(
      `${this.labURL}update/${idExperiencia}`,
      experienciaActualizada
    );
  }

  nuevaExperiencia(experiencia: Experiencia): Observable<Experiencia> {
    return this.httpClient.post<Experiencia>(`${this.labURL}`, experiencia);
  }
}
