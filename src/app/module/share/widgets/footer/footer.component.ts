import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-footer',

  template: `<div class="text-center w-full relative">
    <span class="text-[10pt]">copyright ©2024 Generate High Leads - All rights reserved</span>
  </div>`,
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent { }
