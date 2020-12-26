import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BannerSectionComponent } from "./components/banner-section/banner-section.component";
import { CardsSectionComponent } from "./components/cards-section/cards-section.component";
import { FeaturedSectionComponent } from "./components/featured-section/featured-section.component";
import { VideoSectionComponent } from "./components/video-section/video-section.component";

const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: BannerSectionComponent
    },
    {
        path: 'news',
        component: VideoSectionComponent
    },
    {
        path: 'about',
        component: CardsSectionComponent
    },
    {
        path: 'contact',
        component: FeaturedSectionComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }