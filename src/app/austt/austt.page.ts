import { Component } from '@angular/core';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-austt',
  templateUrl: './austt.page.html',
  styleUrls: ['./austt.page.scss'],
})
export class AusttPage {

  goWeb() {
    const GoTaxoil = async () => {
      await Browser.open({ url: 'https://taxoil.at' });
    }
  }
}
