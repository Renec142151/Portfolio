import { Component, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../../translation.service';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [TranslateModule, CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss'
})
export class ContactMeComponent {
  translate = inject(TranslationService)

  http = inject(HttpClient)

  contactData = {
    name: "",
    email: "",
    message: ""
  }
  submitted = false;
  checkSubmit = false;
  checkPrivacy = false;
  privacyAgreed = false;
  showSuccessMessage = false;



  mailTest = true;

  post = {
    endPoint: 'https://rene-lochschmidt.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    this.checkPrivacy = true;
    this.checkSubmit = true;
    if (ngForm.submitted && ngForm.form.valid && this.privacyAgreed) {
      this.submitted = true;
      this.checkSubmit = false;
      this.checkPrivacy = false;
      this.privacyAgreed = false;
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            this.showSuccessMessage = true;
            ngForm.resetForm();
            
            setTimeout(() => {
              this.showSuccessMessage = false;
            }, 3500); 
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),

        });
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
