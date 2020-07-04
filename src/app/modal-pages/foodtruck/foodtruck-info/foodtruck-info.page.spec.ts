import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FoodtruckInfoPage } from './foodtruck-info.page';

describe('FoodtruckInfoPage', () => {
  let component: FoodtruckInfoPage;
  let fixture: ComponentFixture<FoodtruckInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodtruckInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FoodtruckInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
