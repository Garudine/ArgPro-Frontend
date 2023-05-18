import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SerLoaderService } from '../servicios/ser-Loader.service';

@Injectable()
export class IndexResolver implements Resolve<any> {
  constructor(private loaderService: SerLoaderService) {}

  public resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<Observable<any>> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.loaderService.stop();
        resolve(of(['item1', 'item2']));
      }, 5000);
    });
  }
}
