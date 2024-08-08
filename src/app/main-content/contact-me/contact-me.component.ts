import { Component, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../../translation.service';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [TranslateModule, CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss'
})
export class ContactMeComponent {
  translate = inject(TranslationService)

  contactData = {
    name: "",
    email: "",
    message: "",
    privacy: ""
  }
  submitted = false;
  checkSubmit = false;
  checkPrivacy = false;
  privacyAgreed = false;



  onSubmit(ngForm: NgForm){
    this.checkPrivacy = true;
    this.checkSubmit = true;
    if (ngForm.valid && ngForm.submitted && this.privacyAgreed) {
      this.submitted = true;
      this.checkSubmit = false;
      this.checkPrivacy = false;
      console.log(this.contactData);
      
    }
  }

  togglePrivacyPolice(){
    this.checkPrivacy = !this.checkPrivacy
    this.privacyAgreed = !this.privacyAgreed;
  }

  getMessagePlaceholder(messageValid: any, messageTouched: any): string {
    return !messageValid && (messageTouched || this.checkSubmit)
      ? this.translate.instant("Please enter your message")
      : this.translate.instant("Your message");
  }

  getNamePlaceholder(nameValid: any, nameTouched: any): string {
    return !nameValid && (nameTouched || this.checkSubmit)
      ? this.translate.instant('Please enter your Name!')
      : this.translate.instant('Your Name');
  }

  getEmailPlaceholder(emailValid: any, emailTouched: any): string {
    return !emailValid && (emailTouched || this.checkSubmit)
      ? this.translate.instant('Please enter your Email!')
      : this.translate.instant('Your Email');
  }

}
