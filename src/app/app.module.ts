import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDatabase } from "./in-memory-database";

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeleteTarefaComponent } from './delete-tarefa/delete-tarefa.component';
import { FormularioTarefaComponent } from './formulario-tarefa/formulario-tarefa.component';
import { ListaTarefaComponent } from './lista-tarefa/lista-tarefa.component';
import { VerTarefaComponent } from './ver-tarefa/ver-tarefa.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    DeleteTarefaComponent,
    FormularioTarefaComponent,
    ListaTarefaComponent,
    VerTarefaComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDatabase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
