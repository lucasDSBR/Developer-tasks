import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable, throwError } from "rxjs";
import { map, catchError, flatMap } from "rxjs/operators";

import { Tarefa } from "../models/tarefa.model";

@Injectable({
    providedIn: 'root'
})
export class TarefaService {
    private apiPath: string = "api/tarefas";

    constructor(private http: HttpClient) { }

    retornarTodos(): Observable<Tarefa[]>{
        return this.http.get(this.apiPath).pipe(
          catchError(this.handleError),
          map(this.jsonDataToTarefas)
        )
      }
    
      buscarPorId(id: number): Observable<Tarefa> {
        const url = `${this.apiPath}/${id}`;
    
        return this.http.get(url).pipe(
          catchError(this.handleError),
          map(this.jsonDataToTarefa)
        )
      }
    
      gravar(tarefa: Tarefa): Observable<Tarefa>{
        return this.http.post(this.apiPath, tarefa).pipe(
          catchError(this.handleError),
          map(this.jsonDataToTarefa)
        )
      }
    
      atualizar(tarefa: Tarefa): Observable<Tarefa>{
        const url = `${this.apiPath}/${tarefa.id}`;
    
        return this.http.post(url, tarefa).pipe(
          catchError(this.handleError),
          map(() => tarefa)
        )
      }
    
      deletar(id: number): Observable<any>{
        const url = `${this.apiPath}/${id}`;
    
        return this.http.delete(url).pipe(
          catchError(this.handleError),
          map(() => null)
        )
      }
      /*situacao(situacao: boolean){
      }*/

    // Métodos privados
    private jsonDataToTarefas(jsonData: any[]) : Tarefa[] {
        const tarefas: Tarefa[] = [];
        jsonData.forEach(element => tarefas.push(element as Tarefa));
        return tarefas;
    }

    private jsonDataToTarefa(jsonData: any): Tarefa{
        return jsonData as Tarefa;
    }

    private handleError(error: any): Observable<any>{
        console.log("ERRO NA REQUISIÇÃO => ", error);
        return throwError(error);
    }
}