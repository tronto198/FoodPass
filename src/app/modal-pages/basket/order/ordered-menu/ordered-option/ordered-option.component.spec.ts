import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OrderedOptionComponent } from './ordered-option.component';

describe('OrderedOptionComponent', () => {
  let component: OrderedOptionComponent;
  let fixture: ComponentFixture<OrderedOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderedOptionComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OrderedOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
