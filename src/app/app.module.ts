import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CruisesearchboxComponent } from './cruisesearchbox/cruisesearchbox.component';
import { ToursearchboxComponent } from './toursearchbox/toursearchbox.component';
import { VacationsearchboxComponent } from './vacationsearchbox/vacationsearchbox.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { ResortsearchboxComponent } from './resortsearchbox/resortsearchbox.component';
import { HomesearchboxComponent } from './homesearchbox/homesearchbox.component';
import { FeaturedcruisesComponent } from './featuredcruises/featuredcruises.component';
import { ToursComponent } from './tours/tours.component';
import { FeaturedtoursComponent } from './featuredtours/featuredtours.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HotdealsComponent } from './hotdeals/hotdeals.component';
import { PopularpackagesComponent } from './popularpackages/popularpackages.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { BlogsComponent } from './blogs/blogs.component';
import { SubscribeComponent } from './subscribe/subscribe.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CruisesearchboxComponent,
    ToursearchboxComponent,
    VacationsearchboxComponent,
    JumbotronComponent,
    ResortsearchboxComponent,
    HomesearchboxComponent,
    FeaturedcruisesComponent,
    ToursComponent,
    FeaturedtoursComponent,
    HotdealsComponent,
    PopularpackagesComponent,
    ReviewsComponent,
    BlogsComponent,
    SubscribeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
