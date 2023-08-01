import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NevbarComponent } from './nevbar/nevbar.component';
import { PostContentComponent } from './post-content/post-content.component';
import { HomeContentComponent } from './home-content/home-content.component';
import { BlogService } from './Blogs/blog-service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NevbarComponent,
    PostContentComponent,
    HomeContentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports:[HeaderComponent, NevbarComponent, PostContentComponent, HomeContentComponent, FooterComponent],
  providers: [BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
