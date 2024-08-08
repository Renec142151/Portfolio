import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';



@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  currentLanguage: string;

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
    this.currentLanguage = 'en'
   }

   public switchLanguage(language: string): void {
    this.translate.use(language);
    this.currentLanguage = language;
   }
}
