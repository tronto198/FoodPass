import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FtImgComponent } from './ft-img.component';

describe('FtImgComponent', () => {
  let component: FtImgComponent;
  let fixture: ComponentFixture<FtImgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FtImgComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FtImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
