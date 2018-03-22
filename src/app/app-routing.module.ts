import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { CatalogMiamiComponent } from './catalog-miami/catalog-miami.component';
import { CatalogCostaRicaComponent } from './catalog-costa-rica/catalog-costa-rica.component';
import { CatalogPeruComponent } from './catalog-peru/catalog-peru.component';
import { CatalogMadridComponent } from './catalog-madrid/catalog-madrid.component';
import { CatalogPuntaCanaComponent } from './catalog-punta-cana/catalog-punta-cana.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  {path : '', redirectTo: '/index', pathMatch:'full'},
  {path : 'index', component : IndexComponent},
  {path : 'catalogMiami', component : CatalogMiamiComponent},
  {path : 'catalogCostaRica', component : CatalogCostaRicaComponent},
  {path : 'catalogPeru', component : CatalogPeruComponent},
  {path : 'catalogMadrid', component : CatalogMadridComponent},
  {path : 'catalogPuntaCana', component : CatalogPuntaCanaComponent},
  {path : 'contact', component : ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }