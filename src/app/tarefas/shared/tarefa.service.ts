import { Injectable } from '@angular/core';

import { Tarefa } from './';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  constructor() { }

  listarTodos(): Tarefa[] {
    const tarefas = localStorage['tarefas'];
    return tarefas ? JSON.parse(tarefas) : [];
  }

  cadastrar(tarefa: Tarefa): void{
    const tarefas = this.listarTodos();
    tarefa.id = new Date().getTime();
    tarefas.push(tarefa);
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  buscaPorId(id: number): Tarefa{
    const tarefas = this.listarTodos();
    return tarefas.find(tarefa => tarefa.id === id)
  }

  atualizar(tarefa: Tarefa): void{
    const tarefas = this.listarTodos();
    tarefas.forEach((obj, index, objs) => {
      if (tarefa.id === obj.id){
        objs[index] = tarefa;
      }
    });
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  remover(id: number): void{
    let tarefas = this.listarTodos();
    tarefas = tarefas.filter(Tarefa => Tarefa.id !== id);
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  alterarStatus(id: number): void{
    const tarefas = this.listarTodos();
    tarefas.forEach((obj, index, objs) => {
      if (id === obj.id){
        objs[index].concluida = !obj.concluida;
      }
    });
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }
}