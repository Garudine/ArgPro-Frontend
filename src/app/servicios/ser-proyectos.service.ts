import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Proyectos } from '../model/proyectos';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SerProyectosService {
  proURL = environment.URL + 'proyectos/';

  constructor(private httpClient: HttpClient) {}

  public lista(): Observable<Proyectos[]> {
    return this.httpClient.get<Proyectos[]>(this.proURL + 'lista');
  }

  public save(proyectos: Proyectos): Observable<any> {
    return this.httpClient.post<any>(this.proURL + 'create', proyectos);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.proURL + `delete/${id}`);
  }

  guardarProyectos(
    proyectosActualizada: Proyectos,
    idProyectos: number
  ): Observable<Proyectos> {
    return this.httpClient.put<Proyectos>(
      `${this.proURL}update/${idProyectos}`,
      proyectosActualizada
    );
  }

  nuevosProyectos(proyectos: Proyectos): Observable<Proyectos> {
    return this.httpClient.post<Proyectos>(`${this.proURL}`, proyectos);
  }
}
