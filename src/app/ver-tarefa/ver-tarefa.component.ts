import { Component, OnInit } from '@angular/core';
import { Tarefa } from '../models/tarefa.model';
import { Router, ActivatedRoute } from '@angular/router';
import { TarefaService } from '../services/tarefa.service';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-ver-tarefa',
  templateUrl: './ver-tarefa.component.html',
  styleUrls: []
})
export class VerTarefaComponent implements OnInit {

	tarefa: Tarefa;

  constructor(private _tarefaService: TarefaService,
    private route: ActivatedRoute,
    private router: Router,) { }

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
  
}
