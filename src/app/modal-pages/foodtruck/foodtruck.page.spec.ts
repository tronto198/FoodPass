import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FoodtruckPage } from './foodtruck.page';

describe('FoodtruckPage', () => {
  let component: FoodtruckPage;
  let fixture: ComponentFixture<FoodtruckPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodtruckPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FoodtruckPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
