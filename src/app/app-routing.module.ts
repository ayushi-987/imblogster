import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SingleCategoryComponent } from './pages/single-category/single-category.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';
import { TermAndConditionsComponent } from './pages/term-and-conditions/term-and-conditions.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { AboutComponent } from './pages/about/about.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'category/:category/:id', component: SingleCategoryComponent },
  {path:'post/:id', component:SinglePostComponent},
  {path:'term-conditions', component: TermAndConditionsComponent},
  {path:'contact-us', component:ContactUsComponent},
  {path:'about', component:AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
