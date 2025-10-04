import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResistenciaComponent } from './resistencias.component';

describe('ResistenciasComponent', () => {
  let component: ResistenciaComponent;
  let fixture: ComponentFixture<ResistenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResistenciaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResistenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
