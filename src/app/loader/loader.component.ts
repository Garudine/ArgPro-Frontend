import { Component, OnInit } from '@angular/core';
import { SerLoaderService } from '../servicios/ser-Loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css'],
})
export class LoaderComponent implements OnInit {
  // The screen starts with the maximum opacity
  public opacityChange = 1;

  public splashTransition: any;

  // First access the splash is visible
  public showSplash = true;

  readonly ANIMATION_DURATION = 1;

  private hideSplashAnimation() {
    // Setting the transition
    this.splashTransition = `opacity ${this.ANIMATION_DURATION}s`;
    this.opacityChange = 0;

    setTimeout(() => {
      // After the transition is ended the showSplash will be hided
      this.showSplash = !this.showSplash;
    }, 1000);
  }

  constructor(private loaderService: SerLoaderService) {}

  ngOnInit(): void {
    // Somewhere the stop method has been invoked
    this.loaderService.subscribe((res: any) => {
      this.hideSplashAnimation();
    });
  }
}
