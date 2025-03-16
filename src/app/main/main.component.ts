import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ServicesComponent } from '../services/services.component';
import { HowitworksComponent } from '../howitworks/howitworks.component';
import { CasestudieComponent } from '../casestudie/casestudie.component';
import { TeamComponent } from '../team/team.component';
import { TestimonialsComponent } from '../testimonials/testimonials.component';
import { BlogComponent } from '../blog/blog.component';
import { CalltoactionComponent } from '../calltoaction/calltoaction.component';
import { FooterComponent } from '../footer/footer.component';
import { TuiNavigation } from '@taiga-ui/layout';
import { NavComponent } from '../nav/nav.component';

@Component({
  selector: 'app-main',
  imports: [
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    HowitworksComponent,
    CasestudieComponent,
    TeamComponent,
    TestimonialsComponent,
    BlogComponent,
    CalltoactionComponent,
    FooterComponent,
    TuiNavigation,
    NavComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.less'
})
export class MainComponent {

}
