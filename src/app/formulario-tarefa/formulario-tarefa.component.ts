import { Component, OnInit } from '@angular/core';
import { Tarefa } from '../models/tarefa.model';
import { Router, ActivatedRoute } from '@angular/router';
import { TarefaService } from '../services/tarefa.service';
import { switchMap } from 'rxjs/operators';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario-tarefa',
  templateUrl: './formulario-tarefa.component.html',
  styleUrls: []
})
export class FormularioTarefaComponent implements OnInit {

  tarefaForm: FormGroup;
  submittingForm: boolean = false;
  currentAction: string;
  tarefa: Tarefa;
  pageTitle: string;

  constructor(
    private _tarefaService: TarefaService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.tarefa = new Tarefa();
    this.setCurrentAction();    
  }
  ngAfterContentChecked(){
    this.atualizarPageTitle();

  }
  private setCurrentAction() {   
    if(this.route.snapshot.url[1].path == "novo"){
      this.currentAction = "new";    
    }
    else
    {
      this.currentAction = "edit";
      this.carregarTarefa();          
    }
  }
  submitForm(tarefaForm) {
    console.log(tarefaForm)
    this.submittingForm = true;

    if (this.currentAction == "new") {
      this.criarTarefa(tarefaForm);
    }
    else {
      this.atualizarTarefa(tarefaForm);
    }
  }

  private carregarTarefa() {
    if(this.currentAction == "edit"){
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

  private criarTarefa(tarefaForm) {
    const tarefa: Tarefa = Object.assign(new Tarefa(), tarefaForm.value);    

     this._tarefaService.gravar(tarefa)
       .subscribe(
          () => this.cadastroGravadoComSucesso(),
          error => this.erroAoGravarTarefa(error)
       )
  }
   private atualizarTarefa(tarefaForm) {
    const tarefa: Tarefa = Object.assign(new Tarefa(), tarefaForm.value);    

    this._tarefaService.atualizar(tarefa)
      .subscribe(
        tarefa => this.cadastroGravadoComSucesso(),
        error => this.erroAoGravarTarefa(error)
      )
  }
  private cadastroGravadoComSucesso() {
    this.router.navigateByUrl("tarefas")
  }

   private erroAoGravarTarefa(error) {
    alert(error.body.error);
  }
  private atualizarPageTitle() {
    if(this.currentAction == "new")
      this.pageTitle = "Cadastro de Nova Tarefa";
    else{
      const tarefaNome = this.tarefa.titulo || ""
      this.pageTitle = "Editando Tarefa: " + tarefaNome;
    }
  }
}