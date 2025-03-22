import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { TuiAppearance, TuiButton, TuiIcon, TuiNotification, TuiTitle } from '@taiga-ui/core';
import { TuiCardLarge, TuiCardMedium, TuiCell, TuiNavigation } from '@taiga-ui/layout';
import { NgxCrypticTextComponent } from '@omnedia/ngx-cryptic-text';
import { NgxRetroGridComponent } from '@omnedia/ngx-retro-grid';
import { TuiAvatar, TuiAvatarOutline, TuiChip,  } from '@taiga-ui/kit';
import { TuiRipple } from '@taiga-ui/addon-mobile';
import {TuiAxes, TuiLineChart,TuiBarChart} from '@taiga-ui/addon-charts';
import type {TuiPoint} from '@taiga-ui/core';
import { tuiCeil } from '@taiga-ui/cdk';

@Component({
  selector: 'app-home',
  imports: [
    TuiIcon,
    TuiNotification,
    TuiButton,
    TuiAppearance,
    TuiNavigation,
    NgxCrypticTextComponent,
    NgxRetroGridComponent,
    TuiAvatar,
    TuiAvatarOutline,
    TuiCardLarge,
    TuiChip,
    TuiRipple,
    TuiCell,
    TuiTitle,
    TuiCardMedium,
    TuiIcon,
    TuiAxes,
    TuiLineChart,
    TuiBarChart
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.less'
})
export class HomeComponent {
  protected readonly value: readonly TuiPoint[] = [
    [50, 50],
    [100, 75],
    [150, 50],
    [200, 150],
    [250, 155],
    [300, 190],
    [350, 200],
];

protected readonly barValue = [
  [400, 500, 600, 700, 800, 350, 650, 750, 520, 900, 734, 850, 1000],
  [120, 320, 110, 400, 600, 700, 705, 651, 800, 985, 450, 945, 966],
];
protected readonly labelsX = ['Jan 2019', 'Feb', 'Mar', ''];
protected readonly labelsY = ['0', '1000'];

protected getHeight(max: number): number {
    return (max / tuiCeil(max, -3)) * 100;
}
}
