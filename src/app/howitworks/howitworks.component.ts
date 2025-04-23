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
      title: '<p>Tell Us What You Need</p>',
      content: '<div class="uk-margin-auto uk-margin-auto-vertical"><h1 uk-parallax="opacity: 0,1; y: -100,0; scale: 2,1; end: 50vh + 50%;">Planning</h1><p uk-parallax="opacity: 0,1; y: 100,0; scale: 0.5,1; end: 50vh + 50%;">We start by understanding your goals. Whether it’s a website, mobile app, or custom system, we listen carefully and ask the right questions.</p></div></div>',
    },
    {
      title: '<p>Get a Custom Plan</p>',
      content: '<div>Based on your needs and budget, we provide a clear proposal with timelines, deliverables, and a strategy tailored to your business.</div>',
      
    }
    
  ];

  data2: TimelineEntry[] = [
    {
      title: '<p> We Build & Test</p>',
      content: '<div class="uk-margin-auto uk-margin-auto-vertical"><h1 uk-parallax="opacity: 0,1; y: -100,0; scale: 2,1; end: 50vh + 50%;">Quality is our benchmark — nothing goes live until it’s perfect.</h1><p uk-parallax="opacity: 0,1; y: 100,0; scale: 0.5,1; end: 50vh + 50%;">Our team designs, develops, and rigorously tests your solution — ensuring it’s reliable, scalable, and ready for real-world use.</p></div></div>',
    },
    {
      title: '<p>Launch & Support</p>',
      content: '<div>We deploy your product, provide training if needed, and offer ongoing support to keep everything running smoothly as your business grows. <div>',
    },
    
  ];
}

