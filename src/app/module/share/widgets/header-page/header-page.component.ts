import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'header-page',
  templateUrl: 'header-page.component.html',
  styleUrls: ['./header-page.component.css'],
})
export class HeaderPageComponent { 
  menuList = ['How to use?', 'Pricing', 'Affiliates', 'White Label', 'Contacts']
}
