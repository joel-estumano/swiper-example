import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SwiperDirective } from './directives/swiper.directive';
import { register } from 'swiper/element/bundle';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './components/card/card.component';

register();

@NgModule({
  declarations: [
    AppComponent,
    SwiperDirective,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
