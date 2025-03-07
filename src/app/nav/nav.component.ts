import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { TuiAppearance, TuiButton, TuiDropdown, TuiDropdownService, TuiIcon, TuiTitle,TuiDataList, TuiDropdownHover, TuiPopup } from '@taiga-ui/core';
import{TuiNavigation}from '@taiga-ui/layout'
import {TuiAvatar, TuiButtonGroup, TuiChevron, TuiDrawer, TuiFade} from '@taiga-ui/kit';
import {TuiRepeatTimes} from '@taiga-ui/cdk';
import {TuiLink,TuiScrollbar,} from '@taiga-ui/core';
import {TuiBadge, TuiTabs} from '@taiga-ui/kit';

@Component({
  selector: 'app-nav',
  imports: [
    TuiNavigation,
    TuiButton,
    TuiIcon,
    TuiTitle,
    TuiAppearance,
    TuiDrawer,
    TuiAvatar,
    TuiFade,
    TuiChevron,
    TuiDropdown,
    TuiDataList,
    TuiButtonGroup,
    TuiDrawer,
    TuiPopup,
    TuiRepeatTimes,
    TuiLink,
    TuiScrollbar,
    TuiBadge,
    TuiTabs,
    
    
    
  ],
  providers:[TuiDropdownService],
  changeDetection:ChangeDetectionStrategy.OnPush,
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.less'
})
export class NavComponent {
  src="https://robohash.org/mike.png"
  protected readonly open=signal(false)

}
