import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FoodtruckListPage } from './foodtruck-list.page';

describe('FoodtruckListPage', () => {
  let component: FoodtruckListPage;
  let fixture: ComponentFixture<FoodtruckListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodtruckListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FoodtruckListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
