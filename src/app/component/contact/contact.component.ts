import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  onSubmit() {
    // Logic to handle form submission
    alert('Thank you for your message! We will get back to you soon.');
  }

}
