import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OrderCardviewComponent22 } from './order-cardview.component';

describe('OrderCardviewComponent', () => {
  let component: OrderCardviewComponent22;
  let fixture: ComponentFixture<OrderCardviewComponent22>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderCardviewComponent22 ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OrderCardviewComponent22);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
