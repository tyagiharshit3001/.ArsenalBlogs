import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NevbarComponent } from './nevbar/nevbar.component';
import { HomeContentComponent } from './home-content/home-content.component';
import { PostContentComponent } from './post-content/post-content.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [];


@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
