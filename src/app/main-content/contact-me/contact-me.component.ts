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
    message: ""
  }
  submitted = false;
  checkSubmit = false;

  onSubmit(ngForm: NgForm){
    this.checkSubmit = true;
    if (ngForm.valid && ngForm.submitted) {
      this.submitted = true;
      this.checkSubmit = false;
      console.log(this.contactData);
      
    }
  }

}
