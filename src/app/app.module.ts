import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PrincipaleComponent } from './application/principale/principale.component';
import { FirstComponent } from './application/first/first.component';
import { SecondComponent } from './application/second/second.component';
import { AddEomployeComponent } from './ex1/add-eomploye/add-eomploye.component';
import { ListEomployeComponent } from './ex1/list-eomploye/list-eomploye.component';
import {FormsModule} from '@angular/forms';
import { LivreComponent } from './ex2/livre/livre.component';
import { ListLivreComponent } from './ex2/list-livre/list-livre.component'

@NgModule({
  declarations: [
    AppComponent,
    PrincipaleComponent,
    FirstComponent,
    SecondComponent,
    AddEomployeComponent,
    ListEomployeComponent,
    LivreComponent,
    ListLivreComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
