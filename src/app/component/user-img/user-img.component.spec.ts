import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UserImgComponent } from './user-img.component';

describe('UserImgComponent', () => {
  let component: UserImgComponent;
  let fixture: ComponentFixture<UserImgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserImgComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UserImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
