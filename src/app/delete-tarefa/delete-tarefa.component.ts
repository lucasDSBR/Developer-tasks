import { Component, OnInit } from '@angular/core';
import { Tarefa } from '../models/tarefa.model';
import { Router, ActivatedRoute } from '@angular/router';
import { TarefaService } from '../services/tarefa.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-delete-tarefa',
  templateUrl: './delete-tarefa.component.html',
  styleUrls: []
})
export class DeleteTarefaComponent implements OnInit {

  tarefa: Tarefa;

  constructor(
    private _tarefaService: TarefaService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.tarefa = new Tarefa();

    this.route.paramMap.pipe(
      switchMap(params => this._tarefaService.buscarPorId(+params.get("id")))
    )
    .subscribe(
      (c)=>{
        this.tarefa = c;
      },
      (error) => alert('Ocorreu um erro no servidor, tente novamente.')
    )
  }

  deletarTarefa() {
    this._tarefaService.deletar(this.tarefa.id).subscribe(
      () => this.router.navigateByUrl("tarefas"),
      () => alert("Erro ao tentar excluir")
    )
  }

}
