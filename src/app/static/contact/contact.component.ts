import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface FormData {
  name: string;
  email: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})



export class ContactComponent {

  // formData: FormData = {
  //   name: '',
  //   email: '',
  //   message: ''
  // };

  constructor() { }

  submitForm() {
    /*const url = 'your-form-handler-url';
    const headers = { 'Content-Type': 'application/json' };
    const body = JSON.stringify(this.formData);
    this.http.post(url, body, { headers }).subscribe(() => {
      console.log('Form submitted successfully!');
      // reset the form data after successful submission
      this.formData = {
        name: '',
        email: '',
        message: ''
      };
    }, error => {
      console.error('Form submission error:', error);
    });*/
  }
}
