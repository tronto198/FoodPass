import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FtBasketViewComponent } from './ft-basket-view.component';

describe('FtBasketViewComponent', () => {
  let component: FtBasketViewComponent;
  let fixture: ComponentFixture<FtBasketViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FtBasketViewComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FtBasketViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
