import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { OwlModule } from 'ng2-owl-carousel';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
		RouterModule.forRoot(routes),
		OwlModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
