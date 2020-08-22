import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TagDistComponent } from './tag-dist.component';

describe('TagDistComponent', () => {
  let component: TagDistComponent;
  let fixture: ComponentFixture<TagDistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagDistComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TagDistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
