import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WatingOrderListPage } from './wating-order-list.page';

describe('WatingOrderListPage', () => {
  let component: WatingOrderListPage;
  let fixture: ComponentFixture<WatingOrderListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatingOrderListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WatingOrderListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
