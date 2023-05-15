import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Proyectos } from '../model/proyectos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SerProyectosService {
  proURL = 'http://localhost:8080/proyectos/';

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
