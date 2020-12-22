import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BannerSectionComponent } from './components/banner-section/banner-section.component';
import { VideoSectionComponent } from './components/video-section/video-section.component';
import { CardsSectionComponent } from './components/cards-section/cards-section.component';
import { FeaturedSectionComponent } from './components/featured-section/featured-section.component';
import { NavigationComponent } from './components/header/navigation/navigation.component';
import { SocialIconsComponent } from './components/header/social-icons/social-icons.component';
import { TemporatyComponent } from './components/video-section/temporaty/temporaty.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BannerSectionComponent,
    VideoSectionComponent,
    CardsSectionComponent,
    FeaturedSectionComponent,
    NavigationComponent,
    SocialIconsComponent,
    TemporatyComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
