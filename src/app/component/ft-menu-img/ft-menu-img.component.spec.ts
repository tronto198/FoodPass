import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FtMenuImgComponent } from './ft-menu-img.component';

describe('FtMenuImgComponent', () => {
  let component: FtMenuImgComponent;
  let fixture: ComponentFixture<FtMenuImgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FtMenuImgComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FtMenuImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
