import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerTarefaComponent } from './ver-tarefa.component';

describe('VerTarefaComponent', () => {
  let component: VerTarefaComponent;
  let fixture: ComponentFixture<VerTarefaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerTarefaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerTarefaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
