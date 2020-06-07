import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngrediendsListComponent } from './ingrediends-list.component';

describe('IngrediendsListComponent', () => {
  let component: IngrediendsListComponent;
  let fixture: ComponentFixture<IngrediendsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngrediendsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngrediendsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
