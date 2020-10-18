import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MenuInfoPage } from './menu-info.page';

describe('MenuInfoPage', () => {
  let component: MenuInfoPage;
  let fixture: ComponentFixture<MenuInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MenuInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
