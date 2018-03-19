import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing'
import { By } from '@angular/platform-browser';

import { PreviewComponent } from './preview.component';
import { AppService } from '../../shared/app.global';

describe('PreviewComponent', () => {
  let component: PreviewComponent;
  let fixture: ComponentFixture<PreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewComponent ],
      imports: [ RouterTestingModule ],
      providers: [ AppService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should have preview label', async(() => {
    const fixture = TestBed.createComponent(PreviewComponent);
    fixture.detectChanges();
    let previewBtn = fixture.debugElement.query(By.css('.preview-label'));
    expect(previewBtn.nativeElement.textContent).toEqual('Preview');
  }));

  it('should have samsung galaxy s4 mobile image', async(() => {
    const fixture = TestBed.createComponent(PreviewComponent);
    fixture.detectChanges();
    let designBgImage = fixture.debugElement.query(By.css('.mobile-image'));
    expect(designBgImage.nativeElement.src).toContain('samsung-galaxys4-portrait.png');
  }));

});
