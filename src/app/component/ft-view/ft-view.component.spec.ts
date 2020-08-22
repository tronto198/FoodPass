import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FtViewComponent } from './ft-view.component';

describe('FtViewComponent', () => {
  let component: FtViewComponent;
  let fixture: ComponentFixture<FtViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FtViewComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FtViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
