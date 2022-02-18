import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ModalCartaComponent } from './modal-carta/modal-carta.component';
import { InstrucoesComponent } from './instrucoes/instrucoes.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalCartaComponent,
    InstrucoesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    ModalCartaComponent,
    InstrucoesComponent
  ]
})
export class AppModule { }
