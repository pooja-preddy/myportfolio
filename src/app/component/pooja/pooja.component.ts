import { Component } from '@angular/core';

@Component({
  selector: 'app-pooja',
  templateUrl: './pooja.component.html',
  styleUrls: ['./pooja.component.css']
})
export class PoojaComponent {
  downloadResume() {
    const link = document.createElement('a');
    link.href = 'assets/pdf/PoojaThimmaiah.pdf'; // Add your resume file in the assets folder
    link.download = 'assets/pdf/PoojaThimmaiah.pdf';
    link.click();
  }

}
