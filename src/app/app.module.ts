import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.module';
import { MainInfoComponent } from './components/mainInfo/mainInfo.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainInfoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
