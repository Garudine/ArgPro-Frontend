import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Perfil } from '../model/perfil';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SerPerfilService {
  perURL = environment.URL + 'perfil/';

  constructor(private httpClient: HttpClient) {}

  public lista(): Observable<Perfil[]> {
    return this.httpClient.get<Perfil[]>(this.perURL + 'lista');
  }

  public detail(id: number): Observable<Perfil> {
    return this.httpClient.get<Perfil>(this.perURL + `detail/${id}`);
  }

  public save(perfil: Perfil): Observable<any> {
    return this.httpClient.post<any>(this.perURL + 'create', perfil);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.perURL + `delete/${id}`);
  }

  public update(id: number, perfil: Perfil): Observable<any> {
    return this.httpClient.put<any>(this.perURL + `update/${id}`, perfil);
  }
}
