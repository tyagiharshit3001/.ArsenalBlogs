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
import { LoginComponent } from './login/login.component';
import { FirstBoxComponent } from './first-box/first-box.component';
import { BlogDbComponent } from './blog-db/blog-db.component';
import { BlogDbService } from './blog-db/blog-bd.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UsersService } from './login/login.service';
import { SignupComponent } from './signup/signup.component';
import { SignUpService } from './signup/signup.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NevbarComponent,
    PostContentComponent,
    HomeContentComponent,
    LoginComponent,
    FirstBoxComponent,
    BlogDbComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  exports:[HeaderComponent, NevbarComponent, PostContentComponent, HomeContentComponent, FooterComponent],
  providers: [BlogService, BlogDbService, UsersService, SignUpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
