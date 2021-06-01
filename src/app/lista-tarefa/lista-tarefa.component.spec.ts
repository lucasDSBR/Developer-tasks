import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTarefaComponent } from './lista-tarefa.component';

describe('ListaTarefaComponent', () => {
  let component: ListaTarefaComponent;
  let fixture: ComponentFixture<ListaTarefaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaTarefaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaTarefaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
