import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarTarefaComponent } from './cadastrar-tarefa.component';

describe('CadastrarTarefaComponent', () => {
  let component: CadastrarTarefaComponent;
  let fixture: ComponentFixture<CadastrarTarefaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CadastrarTarefaComponent]
    })
    .compileComponents();
/*
    fixture = TestBed.createComponent(CadastrarTarefaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); */
  });

});
