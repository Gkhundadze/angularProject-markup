import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BannerSectionComponent } from './components/banner-section/banner-section.component';
import { VideoSectionComponent } from './components/video-section/video-section.component';
import { CardsSectionComponent } from './components/cards-section/cards-section.component';
import { FeaturedSectionComponent } from './components/featured-section/featured-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BannerSectionComponent,
    VideoSectionComponent,
    CardsSectionComponent,
    FeaturedSectionComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
