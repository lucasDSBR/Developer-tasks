import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormularioTarefaComponent } from './formulario-tarefa/formulario-tarefa.component';
import { ListaTarefaComponent } from './lista-tarefa/lista-tarefa.component';
import { DeleteTarefaComponent } from './delete-tarefa/delete-tarefa.component';
import { VerTarefaComponent } from './ver-tarefa/ver-tarefa.component';


const routes: Routes = [
  { path: '', component: ListaTarefaComponent },
  { path: 'tarefas', component: ListaTarefaComponent },
  { path: 'tarefa/novo', component: FormularioTarefaComponent },
  { path: 'tarefa/:id/editar', component: FormularioTarefaComponent },
  { path: 'tarefa/:id/deletar', component: DeleteTarefaComponent },
  { path: 'tarefa/:id/ver', component: VerTarefaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
