import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './main-page/main-page.component';
import { PersonajesComponent } from './personajes/personajes.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [MainPageComponent, PersonajesComponent],
  exports: [MainPageComponent],
})
export class DbzModule {}
