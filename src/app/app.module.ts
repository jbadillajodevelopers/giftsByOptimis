import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { FormsModule } from '@angular/forms';

//ROUTING
import { AppRoutingModule } from './app-routing.module';

//FILTER
import { Ng2FilterPipeModule } from 'ng2-filter-pipe';

//SERVICES
import { AppService } from './services/app.services';

//MDBOOTSTRAP
import { MDBBootstrapModules } from 'ng-mdb-pro';
import { MDBSpinningPreloader } from 'ng-mdb-pro';



import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CatalogMiamiComponent } from './catalog-miami/catalog-miami.component';
import { CatalogCostaRicaComponent } from './catalog-costa-rica/catalog-costa-rica.component';
import { CatalogPeruComponent } from './catalog-peru/catalog-peru.component';
import { CatalogMadridComponent } from './catalog-madrid/catalog-madrid.component';
import { CatalogPuntaCanaComponent } from './catalog-punta-cana/catalog-punta-cana.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    NavbarComponent,
    FooterComponent,
    CatalogMiamiComponent,
    CatalogCostaRicaComponent,
    CatalogPeruComponent,
    CatalogMadridComponent,
    CatalogPuntaCanaComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModules.forRoot(),
    AppRoutingModule,
    Ng2FilterPipeModule,
    FormsModule
  ],
  providers: [
    MDBSpinningPreloader,
    AppService,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
