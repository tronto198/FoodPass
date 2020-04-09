import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MapPage } from './map.page';

describe('MapComponent', () => {
  let component: MapPage;
  let fixture: ComponentFixture<MapPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
