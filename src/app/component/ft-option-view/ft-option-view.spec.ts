import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FtOptionComponent } from './ft-option-view.component';

describe('FtOptionComponent', () => {
  let component: FtOptionComponent
  let fixture: ComponentFixture<FtOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FtOptionComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FtOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
