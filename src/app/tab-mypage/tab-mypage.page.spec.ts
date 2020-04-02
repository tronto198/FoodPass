import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabMypagePage } from './tab-mypage.page';

describe('TabMypagePage', () => {
  let component: TabMypagePage;
  let fixture: ComponentFixture<TabMypagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabMypagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabMypagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
