import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RedesFooter } from '../model/redes-footer';

@Injectable({
  providedIn: 'root',
})
export class SerRedesFooterService {
  redURL = 'http://localhost:8080/redesfoo/';

  constructor(private httpClient: HttpClient) {}

  public lista(): Observable<RedesFooter[]> {
    return this.httpClient.get<RedesFooter[]>(this.redURL + 'lista');
  }

  public save(redesFooter: RedesFooter): Observable<any> {
    return this.httpClient.post<any>(this.redURL + 'create', redesFooter);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.redURL + `delete/${id}`);
  }

  guardarRedesFooter(
    redesFooterActualizada: RedesFooter,
    idRedesFooter: number
  ): Observable<RedesFooter> {
    return this.httpClient.put<RedesFooter>(
      `${this.redURL}update/${idRedesFooter}`,
      redesFooterActualizada
    );
  }

  nuevasRedesFooter(redesFooter: RedesFooter): Observable<RedesFooter> {
    return this.httpClient.post<RedesFooter>(`${this.redURL}`, redesFooter);
  }
}
