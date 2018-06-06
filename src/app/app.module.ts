import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { AboutModule } from './about/about.module';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    HeaderComponent,
    FooterComponent,
    SkillsComponent,
    PortfolioComponent,
    ContactComponent,
    AboutmeComponent
  ],
  imports: [
    BrowserModule,
    AboutModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
