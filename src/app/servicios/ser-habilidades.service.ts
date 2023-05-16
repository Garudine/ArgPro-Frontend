import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Habilidades } from '../model/habilidades';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SerHabilidadesService {
  habURL = environment.URL + 'habilidades/';

  constructor(private httpClient: HttpClient) {}

  public lista(): Observable<Habilidades[]> {
    return this.httpClient.get<Habilidades[]>(this.habURL + 'lista');
  }

  public save(expe: Habilidades): Observable<any> {
    return this.httpClient.post<any>(this.habURL + 'create', expe);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.habURL + `delete/${id}`);
  }

  guardarHabilidades(
    habilidadActualizada: Habilidades,
    idHabilidades: number
  ): Observable<Habilidades> {
    return this.httpClient.put<Habilidades>(
      `${this.habURL}update/${idHabilidades}`,
      habilidadActualizada
    );
  }

  nuevasHabilidades(habilidades: Habilidades): Observable<Habilidades> {
    return this.httpClient.post<Habilidades>(`${this.habURL}`, habilidades);
  }
}
