import { Component } from '@angular/core';
import { TuiAppearance, TuiTitle } from '@taiga-ui/core';
import { TuiAvatar, TuiBadge, TuiChip } from '@taiga-ui/kit';
import { TuiCardLarge, TuiCardMedium, TuiHeader } from '@taiga-ui/layout';
import { NgxFlickeringGridComponent } from '@omnedia/ngx-flickering-grid';
import { NgxTimelineComponent, TimelineEntry } from '@omnedia/ngx-timeline';
import { NgxNeonUnderlineComponent } from '@omnedia/ngx-neon-underline';

@Component({
  selector: 'app-howitworks',
  imports: [
    TuiChip,
    TuiCardMedium,
    TuiCardLarge,
    TuiHeader,
    TuiTitle,
    TuiAppearance,
    TuiBadge,
    NgxFlickeringGridComponent,
    TuiAvatar,
    NgxTimelineComponent,
    NgxNeonUnderlineComponent
  ],
  templateUrl: './howitworks.component.html',
  styleUrl: './howitworks.component.less'
})
export class HowitworksComponent {
  data1: TimelineEntry[] = [
    {
      title: '<p class="timeline-title">1</p>',
      content: '<div class="uk-margin-auto uk-margin-auto-vertical"><h1 class="timeline-title" uk-parallax="opacity: 0,1; y: -100,0; scale: 2,1; end: 50vh + 50%;">Tell Us What You Need</h1><p uk-parallax="opacity: 0,1; y: 100,0; scale: 0.5,1; end: 50vh + 50%;" class="timeline-content">We start by understanding your goals. Whether it’s a website, mobile app, or custom system, we listen carefully and ask the right questions.</p></div></div>',
    },
    {
      title: '<p class="timeline-title">2</p>',
      content: '<div class="uk-margin-auto uk-margin-auto-vertical"><h1 class="timeline-title" uk-parallax="opacity: 0,1; y: -100,0; scale: 2,1; end: 50vh + 50%;">Get a Custom Plan</h1><p class="timeline-content" uk-parallax="opacity: 0,1; y: 100,0; scale: 0.5,1; end: 50vh + 50%;" class="timeline-content">Based on your needs and budget, we provide a clear proposal with timelines, deliverables, and a strategy tailored to your business.</p></div></div>',
      
    },
    {
      title: '<p class="timeline-title">4</p>',
      content: '<div class="uk-margin-auto uk-margin-auto-vertical"><h1 class="timeline-title" uk-parallax="opacity: 0,1; y: -100,0; scale: 2,1; end: 50vh + 50%;">We Build & Test</h1><p uk-parallax="opacity: 0,1; y: 100,0; scale: 0.5,1; end: 50vh + 50%;" class="timeline-content">Our team designs, develops, and rigorously tests your solution — ensuring it’s reliable, scalable, and ready for real-world use.</p></div></div>',
    },
    {
      title: '<p class="timeline-title">5</p>',
      content: '<div class="uk-margin-auto uk-margin-auto-vertical"><h1 class="timeline-title" uk-parallax="opacity: 0,1; y: -100,0; scale: 2,1; end: 50vh + 50%;">Launch & Support</h1><p uk-parallax="opacity: 0,1; y: 100,0; scale: 0.5,1; end: 50vh + 50%;" class="timeline-content">We deploy your product, provide training if needed, and offer ongoing support to keep everything running smoothly as your business grows.</p></div></div>',
    },
   
    
  ];

  data2: TimelineEntry[] = [
    
    
    
  ];
}

