import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
