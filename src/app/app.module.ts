import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './modules/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NpcCardComponent } from './components/npc-card/npc-card.component';
import { NpcAttackDialogComponent } from './components/npc-attack-dialog/npc-attack-dialog.component';
import { AddNpcPageComponent } from './components/add-npc-page/add-npc-page.component';

@NgModule({
  declarations: [AppComponent, NpcCardComponent, NpcAttackDialogComponent, AddNpcPageComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
