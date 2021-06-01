import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTarefaComponent } from './delete-tarefa.component';

describe('DeleteTarefaComponent', () => {
  let component: DeleteTarefaComponent;
  let fixture: ComponentFixture<DeleteTarefaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteTarefaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteTarefaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
