import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

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

  it('should have Widgets, Design, Properties label', async(() => {
    const fixture = TestBed.createComponent(DesignScreenComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    let labels = compiled.querySelectorAll('label')
    expect(labels[0].textContent).toContain('Widgets');
    expect(labels[1].textContent).toContain('Design');
    expect(labels[2].textContent).toContain('Properties');
  }));

  it('should have preview button', async(() => {
    const fixture = TestBed.createComponent(DesignScreenComponent);
    fixture.detectChanges();
    let previewBtn = fixture.debugElement.query(By.css('.preview-btn'));
    expect(previewBtn.nativeElement.textContent).toEqual('Preview');
  }));

  it('should have iPhone 5S mobile image', async(() => {
    const fixture = TestBed.createComponent(DesignScreenComponent);
    fixture.detectChanges();
    let designBgImage = fixture.debugElement.query(By.css('.mobile-image'));
    expect(designBgImage.nativeElement.src).toContain('iphone5S-portrait.png');
  }));
  
});
