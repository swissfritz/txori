import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmailComposer } from '@awesome-cordova-plugins/email-composer/ngx';

@Component({
  selector: 'app-buchen2',
  templateUrl: './buchen2.page.html',
  styleUrls: ['./buchen2.page.scss'],
})
export class Buchen2Page implements OnInit {

  mo: '';
  di: '';
  mi: '';
  do: '';
  fr: '';
  sa: '';
  so: '';
  basinf: any;
  mes1: string;
  message: string;
  woche2: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public emailComposer: EmailComposer) { }

  ngOnInit() {
    this.mes1 = history.state.m1;
    console.log('Message 1: ', this.mes1);
  }

  makeList() {
    this.woche2 = [
      this.mo, this.di, this.mi, this.do, this.fr, this.sa, this.so
    ].filter(day => day !== undefined).join(', ');
  }

  buildMessage() {
    this.makeList();
    this.message = this.mes1 + ', für übernächste Woche: ' + this.woche2;
  }

  sendMail() {
    this.buildMessage();
    const email = {
      to: 'bestellen@taxiwerbung.at',
      subject: 'Taxi-Reservierung',
      body: this.message,
      isHtml: true
    };

    this.emailComposer.open(email);
  }
}
