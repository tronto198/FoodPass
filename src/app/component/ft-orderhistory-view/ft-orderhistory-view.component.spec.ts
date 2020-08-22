import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FtOrderhistoryViewComponent } from './ft-orderhistory-view.component';

describe('FtOrderhistoryViewComponent', () => {
  let component: FtOrderhistoryViewComponent;
  let fixture: ComponentFixture<FtOrderhistoryViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FtOrderhistoryViewComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FtOrderhistoryViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
