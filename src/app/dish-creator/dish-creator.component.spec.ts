import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DishCreatorComponent } from './dish-creator.component';

describe('DishCreatorComponent', () => {
  let component: DishCreatorComponent;
  let fixture: ComponentFixture<DishCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DishCreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DishCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
