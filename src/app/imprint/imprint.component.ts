import { Component, inject } from '@angular/core';
import { TranslationService } from '../translation.service';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [TranslateModule, RouterLink],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent {
  ngAfterViewInit(): void {
    window.scrollTo(0, 0);
  }
  translate = inject(TranslationService);
}
