import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MatIconModule } from '@angular/material/icon';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { PrimeraSeccionWelcomeComponent } from './primera-seccion-welcome/primera-seccion-welcome.component';
import { SegundaSeccionHabilidadesComponent } from './segunda-seccion-habilidades/segunda-seccion-habilidades.component';
import { TerceraSeccionProyectosComponent } from './tercera-seccion-proyectos/tercera-seccion-proyectos.component';
import { CuartaSeccionContactoComponent } from './cuarta-seccion-contacto/cuarta-seccion-contacto.component';
import { PaginaErrorComponent } from './pagina-error/pagina-error.component';
import { IndexComponent } from './index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PrimeraSeccionWelcomeComponent,
    SegundaSeccionHabilidadesComponent,
    TerceraSeccionProyectosComponent,
    CuartaSeccionContactoComponent,
    PaginaErrorComponent,
    IndexComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatIconModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
