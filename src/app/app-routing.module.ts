import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NevbarComponent } from './nevbar/nevbar.component';
import { HomeContentComponent } from './home-content/home-content.component';
import { PostContentComponent } from './post-content/post-content.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { BlogDbComponent } from './blog-db/blog-db.component';
import { SignupComponent } from './signup/signup.component';
import { UsersService } from './login/login.service';

const routes: Routes = [
  {component:PostContentComponent, path:"app-post-content", canActivate:[UsersService]},
  {component:HomeContentComponent, path:"app-home-content"},
  {component:BlogDbComponent, path:"app-blog-db"},
  {component:LoginComponent, path:"app-login"},
  {component:SignupComponent, path:"app-signup"}
];


@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
