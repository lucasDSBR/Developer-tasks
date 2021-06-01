import { Component } from '@angular/core';
import { Tarefa } from './models/tarefa.model';
import { TarefaService } from './services/tarefa.service';
import { DeleteTarefaComponent } from './delete-tarefa/delete-tarefa.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent {
  title = 'angularTarefas';
  tarefas: Tarefa[] = [];
  tarefasConcluidas = [];


  constructor( private _tarefaService: TarefaService,) { }

   ngOnInit(): void {
   		document.getElementById('lia').style.display = 'none';
   		document.getElementById('respUser').style.display = 'none';
   		document.getElementById('respostaLia').style.display = 'none';

   		document.getElementById('msgLia').innerHTML = '<img src="assets/lia.webp" class="m-1" width="30" height="30"><div style="background-color: #DCDCDC; border-radius: 0px 30px 30px 30px; box-shadow: 5px 5px 5px #A9A9A9;"><p style="padding: 10px; color: #000; ">Olá, escolha uma opção para que eu possa lhe ajudar: <br> "sobre" - Para que serve a aplicação "Developer tasks";<br>"instruções" - Como posso usar essa aplicação;<br><br>Obs: Escreva uma das opções.</p></div>';
   

      this._tarefaService.retornarTodos().subscribe(
      c => this.tarefas = c,
      error => alert('Erro ao carregar a lista')
    )

   }

  respostaEnv(){
    let input = (<HTMLInputElement>document.getElementById('userResposta')).value;
  	let resposta = (<HTMLInputElement>document.getElementById('userResposta')).value;
    (<HTMLInputElement>document.getElementById('userResposta')).value = '';
  	if (resposta == 'sobre' || resposta == 'Sobre' ){
  		document.getElementById('respUser').style.display = '';
  		//resposta do user
  		document.getElementById('respUser').innerHTML = '<div style="background-color: #F5F5DC; border-radius: 30px 30px 0px 30px; box-shadow: 5px 5px 5px #A9A9A9;"><p style="padding: 10px; padding-right: 20px; color: #000; text-aling: right;">'+ resposta +'</p></div>';




      document.getElementById('respostaLia').style.display = '';
      document.getElementById('respostaLia').innerHTML = '<img src="assets/lia.webp" class="m-1" width="30" height="30"><img src="assets/digitando.gif" class="m-1" width="50" height="30"></div>';
      setTimeout(() => {
        //resposta lia:
        document.getElementById('respostaLia').style.display = '';
        document.getElementById('respostaLia').innerHTML = '<img src="assets/lia.webp" class="m-1" width="30" height="30"><span><div style="background-color: #DCDCDC; border-radius: 0px 30px 30px 30px; box-shadow: 5px 5px 5px #A9A9A9;"><p style="padding: 10px; color: #000; ">Como podemos perceber, o próprio nome da aplicação de já pode descrever 90% do que ela é. A aplicação "Tarefas do desenvolvedor" é um sistema voltado para anotação de tarefas. Ou seja, o usuário que estiver utilizando-a fará anotações que possívelmente serão esquecidas. Resumidamente é isso.<br>Essa resposta foi útil ?<button type="button" class="btn btn-success btn-sm mr-2 m-1" (click)="condiSIM()">Sim</button><button type="button" class="btn btn-success btn-sm mr-2 m-1" (click)="condiNAO()">Não</button>.</p></div></span>';
      }, 1500);
  		
  	}else if ( resposta == 'instruções' || resposta == 'Instruções') {
  		document.getElementById('respUser').style.display = '';
  		//resposta do user
  		document.getElementById('respUser').innerHTML = '<div style="background-color:  #F5F5DC; border-radius: 30px 30px 0px 30px; box-shadow: 5px 5px 5px #A9A9A9;"><p style="padding: 10px; padding-right: 20px; color: #000; text-aling: right;">'+ resposta +'</p></div>';


      document.getElementById('respostaLia').style.display = '';
      document.getElementById('respostaLia').innerHTML = '<img src="assets/lia.webp" class="m-1" width="30" height="30"><img src="assets/digitando.gif" class="m-1" width="50" height="30"></div>';
      setTimeout(() => {
        //resposta lia:
        document.getElementById('respostaLia').style.display = '';
        document.getElementById('respostaLia').innerHTML = '<img src="assets/lia.webp" class="m-1" width="30" height="30"><div style="background-color: #DCDCDC; border-radius: 0px 30px 30px 30px; box-shadow: 5px 5px 5px #A9A9A9;"><p style="padding: 10px; color: #000; ">A aplicação é bastrante simples de se usar. Não explicarei muito aqui pois estarei presente em cada funcionalidade da aplicação. Prometo.<br>Essa resposta foi útil ?<button type="button" class="btn btn-success btn-sm mr-2 m-1" (click)="condiSIM()">Sim</button><button type="button" class="btn btn-success btn-sm mr-2 m-1" (click)="condiNAO()">Não</button>.</p></div>';
      }, 1500);
  		
	}else if ( resposta == 'oi' || resposta == 'Oi' || resposta == 'Olá' || resposta == 'olá' || resposta == 'ola' || resposta == 'olá') {
      document.getElementById('respUser').style.display = '';
      //resposta do user
      document.getElementById('respUser').innerHTML = '<div style="background-color:  #F5F5DC; border-radius: 30px 30px 0px 30px; box-shadow: 5px 5px 5px #A9A9A9;"><p style="padding: 10px; padding-right: 20px; color: #000; text-aling: right;">'+ resposta +'</p></div>';


      document.getElementById('respostaLia').style.display = '';
      document.getElementById('respostaLia').innerHTML = '<img src="assets/lia.webp" class="m-1" width="30" height="30"><img src="assets/digitando.gif" class="m-1" width="50" height="30"></div>';
      setTimeout(() => {
        //resposta lia:
        document.getElementById('respostaLia').style.display = '';
        document.getElementById('respostaLia').innerHTML = '<img src="assets/lia.webp" class="m-1" width="30" height="30"><div style="background-color: #DCDCDC; border-radius: 0px 30px 30px 30px; box-shadow: 5px 5px 5px #A9A9A9;"><p style="padding: 10px; color: #000; ">Olá, sou a Lia. Sou a assistente vitual que foi criada pelo desenvolvedor da aplicação. Tenho a principal função de ajudá-lo em algumas funções nesse ambiente.</p></div>';
      }, 1500);
      
  }else if ( input == '') {
      document.getElementById('respUser').style.display = '';
      //resposta do user
      document.getElementById('respUser').innerHTML = '<div style="background-color: #F5F5DC; border-radius: 30px 30px 0px 30px; box-shadow: 5px 5px 5px #A9A9A9;"><p style="padding: 10px; padding-right: 20px; color: #000; text-aling: right;">....</p></div>';
      document.getElementById('respostaLia').style.display = '';
      document.getElementById('respostaLia').innerHTML = '<img src="assets/lia.webp" class="m-1" width="30" height="30"><img src="assets/digitando.gif" class="m-1" width="50" height="30"></div>';
      setTimeout(() => {
        //resposta lia

        document.getElementById('respostaLia').style.display = '';
        document.getElementById('respostaLia').innerHTML = '<img src="assets/lia.webp" class="m-1" width="30" height="30"><div style="background-color: #DCDCDC; border-radius: 0px 30px 30px 30px; box-shadow: 5px 5px 5px #A9A9A9;"><p style="padding: 10px; color: #000; ">Desculpe, digite algo para que eu possa respondê-lo.</p></div>';
      }, 1500);
  
  }else {
      document.getElementById('respUser').style.display = '';
      //resposta do user
      document.getElementById('respUser').innerHTML = '<div style="background-color: #F5F5DC; border-radius: 30px 30px 0px 30px; box-shadow: 5px 5px 5px #A9A9A9;"><p style="padding: 10px; padding-right: 20px; color: #000; text-aling: right;">'+ resposta +'</p></div>';


      document.getElementById('respostaLia').style.display = '';
      document.getElementById('respostaLia').innerHTML = '<img src="assets/lia.webp" class="m-1" width="30" height="30"><img src="assets/digitando.gif" class="m-1" width="50" height="30"></div>';
      setTimeout(() => {
        //resposta lia

        document.getElementById('respostaLia').style.display = '';
        document.getElementById('respostaLia').innerHTML = '<img src="assets/lia.webp" class="m-1" width="30" height="30"><div style="background-color: #DCDCDC; border-radius: 0px 30px 30px 30px; box-shadow: 5px 5px 5px #A9A9A9;"><p style="padding: 10px; color: #000; ">Desculpe, não tenho uma resposta formulada para esse tipo de pergunta ou afirmação.</p></div>';
      }, 1500);
      
  		
	 }
  }
  cancelarMsgs(){
    document.getElementById('respostaLia').style.display = 'none';
    document.getElementById('respUser').style.display = 'none';
    (<HTMLInputElement>document.getElementById('userResposta')).value = '';
  }

  lia_over(){
  	document.getElementById('lia').style.display = '';
  	setTimeout(() => {
        document.getElementById('lia').style.display = 'none';
    }, 5000);
  }

}
