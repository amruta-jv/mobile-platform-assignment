import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignScreenComponent } from './design-screen.component';

describe('DesignScreenComponent', () => {
  let component: DesignScreenComponent;
  let fixture: ComponentFixture<DesignScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignScreenComponent ]
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
