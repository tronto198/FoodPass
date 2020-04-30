import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WaitingOrderListPage } from './waiting-order-list.page';

describe('WaitingOrderListPage', () => {
  let component: WaitingOrderListPage;
  let fixture: ComponentFixture<WaitingOrderListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaitingOrderListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WaitingOrderListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
