import { Component } from '@angular/core';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-email-index',
  templateUrl: './email-index.component.html',
  styleUrls: ['./email-index.component.css'],
})
export class EmailIndexComponent {
  emails: any = [];
  constructor(private emailSetvice: EmailService) {}

  ngOnInit() {
    this.emailSetvice.getEmails().subscribe((emails) => {
      this.emails = emails;
    });
  }
}
