import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

//Tarea:
//Crear un Módulo llamada contadorModule
//Declaraciones y exportaciones (Check)

import { HeroesModule } from './heroes/heroes.module';
import { ContadorModule } from './contador/contador/contador.module';
import { DbzModule } from './dbz/dbz.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HeroesModule,
    ContadorModule,
    DbzModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
