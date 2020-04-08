import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabOrderPage } from './tab-order.page';

describe('TabOrderPage', () => {
  let component: TabOrderPage;
  let fixture: ComponentFixture<TabOrderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabOrderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabOrderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
