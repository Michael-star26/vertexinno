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
  data: TimelineEntry[] = [
    {
      title: '<p>Start</p>',
      content: '<div tuiAppearance="positive">The beginning of the project.<div>',
    },
    {
      title: '<p>Development</p>',
      content: '<div>Key development milestones achieved.</div>',
    },
    {
      title: '<p>Launch</p>',
      content: '<div>The project goes live!</div>',
    },
    {
      title: '<p>end</p>',
      content: '<div>The end of the project. The end of the project. The end of the project.lore. Lorem <div>',
    },
    
  ];
}

