import { Component, OnInit } from '@angular/core';
import { Tarefa } from '../models/tarefa.model';
import { TarefaService } from '../services/tarefa.service';
import { Router, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-lista-tarefa',
  templateUrl: './lista-tarefa.component.html',
  styleUrls: []
})
export class ListaTarefaComponent implements OnInit {

  tarefas: Tarefa[] = [];
	tarefasConcluidas = [];
  constructor( 
    private _tarefaService: TarefaService,
    private route: ActivatedRoute,
    private router: Router,) { }

  ngOnInit() {
      
    this._tarefaService.retornarTodos().subscribe(
      c => this.tarefas = c,
      error => alert('Erro ao carregar a lista')
    )

  }

  get filtrarTarefas() {
    return this.tarefas.filter( x => x.id > 0);
  }
  tarefasOk(){
    this.tarefasConcluidas.push((<HTMLInputElement>document.getElementById('Check')).value);
    var valores = (<HTMLInputElement>document.getElementById('Check')).value;
    
  }
  /*situacao() {
    this._tarefaService.situacao(this.tarefa.situacao).subscribe(
      () => this.router.navigateByUrl("tarefas"),
      () => alert("Erro ao tentar excluir")
    )
  }*/
}