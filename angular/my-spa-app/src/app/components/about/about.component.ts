import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { NgbRatingModule, NgbToastModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  standalone: true,
  imports: [NgbRatingModule, NgbToastModule, NgIf],
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  currentRate = 8;
	show = true;
 message = 'test'
	close() {
		this.show = false;
		setTimeout(() => (this.show = true), 3000);
	}
}
