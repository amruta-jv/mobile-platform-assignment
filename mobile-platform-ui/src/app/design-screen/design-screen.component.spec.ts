import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing'

import { DesignScreenComponent } from './design-screen.component';
import { AppService } from '../../shared/app.global';

describe('DesignScreenComponent', () => {
  let component: DesignScreenComponent;
  let fixture: ComponentFixture<DesignScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignScreenComponent ],
      imports: [ RouterTestingModule ],
      providers: [ AppService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
