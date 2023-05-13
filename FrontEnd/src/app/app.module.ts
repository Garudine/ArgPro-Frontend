import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { HeaderComponent } from './Componentes/header/header.component';
import { FooterComponent } from './Componentes/footer/footer.component';
import { MatIconModule } from '@angular/material/icon';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { PrimeraSeccionWelcomeComponent } from './Componentes/primera-seccion-welcome/primera-seccion-welcome.component';
import { SegundaSeccionHabilidadesComponent } from './Componentes/segunda-seccion-habilidades/segunda-seccion-habilidades.component';
import { TerceraSeccionProyectosComponent } from './Componentes/tercera-seccion-proyectos/tercera-seccion-proyectos.component';
import { CuartaSeccionContactoComponent } from './Componentes/cuarta-seccion-contacto/cuarta-seccion-contacto.component';
import { PaginaErrorComponent } from './pagina-error/pagina-error.component';
import { IndexComponent } from './index/index.component';
import { InterceptorProvider } from './servicios/interceptor-service';
import { LaboralComponent } from './Componentes/segunda-seccion-habilidades/laboral/laboral.component';
import { EducacionComponent } from './Componentes/segunda-seccion-habilidades/educacion/educacion.component';
import { HabilidadesComponent } from './Componentes/segunda-seccion-habilidades/habilidades/habilidades.component';

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
    LaboralComponent,
    EducacionComponent,
    HabilidadesComponent,
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
    ReactiveFormsModule,
  ],
  providers: [InterceptorProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
