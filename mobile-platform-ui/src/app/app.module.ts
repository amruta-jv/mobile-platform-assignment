import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppComponent } from './app.component';
import { PreviewComponent } from './preview/preview.component';
import { RouterModule, Routes } from '@angular/router';
import { DesignScreenComponent } from './design-screen/design-screen.component';
import { AppService } from '../shared/app.service';

const appRoutes: Routes = [
  { path: 'preview', component: PreviewComponent },
  {
    path: '',
    component: DesignScreenComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    PreviewComponent,
    DesignScreenComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  providers: [AppService,
  { provide: LOCALE_ID, useValue: 'en' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
