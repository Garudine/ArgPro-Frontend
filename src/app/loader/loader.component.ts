import { Component } from '@angular/core';
import { SerLoaderService } from '../servicios/ser-Loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css'],
})
export class LoaderComponent {
  constructor(public loader: SerLoaderService) {}
}
