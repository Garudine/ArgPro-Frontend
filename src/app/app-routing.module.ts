import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { PaginaErrorComponent } from './pagina-error/pagina-error.component';
import { HeaderEditComponent } from './Componentes/header/header-edit/header-edit.component';
import { PerfilEditComponent } from './Componentes/primera-seccion-welcome/perfil-edit/perfil-edit.component';
import { IndexResolver } from './resolvers/index.resolver';

const routes: Routes = [
  {
    path: 'homepage',
    component: IndexComponent,
    resolve: { itemsList: IndexResolver },
  },
  { path: '', redirectTo: 'homepage', pathMatch: 'full' },
  { path: 'editdatos/:id', component: HeaderEditComponent },
  { path: 'editperfil/:id', component: PerfilEditComponent },
  { path: '**', pathMatch: 'full', component: PaginaErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
